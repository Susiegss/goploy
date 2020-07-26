package core

import (
	"errors"
	"fmt"
	"github.com/rakyll/statik/fs"
	"github.com/zhenorzz/goploy/model"
	_ "github.com/zhenorzz/goploy/statik"
	"io/ioutil"
	"log"
	"mime"
	"net/http"
	"net/url"
	"os"
	"strconv"
	"strings"

	jwt "github.com/dgrijalva/jwt-go"
)

// Method specifies the HTTP method (GET, POST, PUT, etc.).
const (
	GET    = "GET"
	POST   = "POST"
	PUT    = "PUT"
	DELETE = "DELETE"
)

// Goploy callback param
type Goploy struct {
	UserInfo  model.User
	Namespace model.Namespace
	Request   *http.Request
	URLQuery  url.Values
	Body      []byte
}

// 路由定义
type route struct {
	pattern     string                                            // 正则表达式
	method      string                                            // Method specifies the HTTP method (GET, POST, PUT, etc.).
	roles       []string                                          //允许的角色
	callback    func(w http.ResponseWriter, gp *Goploy) *Response //Controller函数
	middlewares []func(w http.ResponseWriter, gp *Goploy) error   //中间件
}

// Router is route slice and global middlewares
type Router struct {
	whiteList   map[string]struct{}
	routes      []route
	middlewares []func(w http.ResponseWriter, gp *Goploy) error //中间件
}

// Start a router
func (rt *Router) Start() {
	if os.Getenv("ENV") == "production" {
		statikFS, err := fs.New()
		if err != nil {
			log.Fatal(err)
		}
		http.Handle("/static/", http.FileServer(statikFS))
		http.Handle("/favicon.ico", http.FileServer(statikFS))
	}
	http.Handle("/", rt)
}

func (rt *Router) RegisterWhiteList(whiteList map[string]struct{}) {
	rt.whiteList = whiteList
}

// Add router
// pattern path
// callback  where path should be handle
func (rt *Router) Add(pattern, method string, callback func(w http.ResponseWriter, gp *Goploy) *Response, middleware ...func(w http.ResponseWriter, gp *Goploy) error) *Router {
	r := route{pattern: pattern, method: method, callback: callback}
	for _, m := range middleware {
		r.middlewares = append(r.middlewares, m)
	}
	rt.routes = append(rt.routes, r)
	return rt
}

// Roles Add many permission to the route
func (rt *Router) Roles(role []string) *Router {
	rt.routes[len(rt.routes)-1].roles = append(rt.routes[len(rt.routes)-1].roles, role...)
	return rt
}

// Role Add permission to the route
func (rt *Router) Role(role string) *Router {
	rt.routes[len(rt.routes)-1].roles = append(rt.routes[len(rt.routes)-1].roles, role)
	return rt
}

// Middleware global Middleware handle function
// Example handle parseToken
func (rt *Router) Middleware(middleware func(w http.ResponseWriter, gp *Goploy) error) {
	rt.middlewares = append(rt.middlewares, middleware)
}

func (rt *Router) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	// If in production env, serve file in go server,
	// else serve file in npm
	if os.Getenv("ENV") == "production" {
		if "/" == r.URL.Path {
			statikFS, err := fs.New()
			if err != nil {
				log.Fatal(err)
			}
			r, err := statikFS.Open("/index.html")
			if err != nil {
				log.Fatal(err)
			}
			defer r.Close()
			contents, err := ioutil.ReadAll(r)
			w.Header().Set("Content-Type", "text/html; charset=utf-8")
			fmt.Fprint(w, string(contents))
			return
		}
	}
	gp, response := rt.checkLogin(w, r)
	if response != nil {
		response.JSON(w)
		return
	}

	response = rt.doRequest(w, gp)
	if response != nil {
		response.JSON(w)
	}
	return
}

func (rt *Router) checkLogin(w http.ResponseWriter, r *http.Request) (*Goploy, *Response) {
	var userInfo model.User
	var namespace model.Namespace
	if _, ok := rt.whiteList[r.URL.Path]; !ok {
		// check token
		goployTokenCookie, err := r.Cookie(LoginCookieName)
		if err != nil {
			return nil, &Response{Code: IllegalRequest, Message: "Illegal request"}
		}
		unParseToken := goployTokenCookie.Value
		claims := jwt.MapClaims{}
		token, err := jwt.ParseWithClaims(unParseToken, claims, func(token *jwt.Token) (interface{}, error) {
			return []byte(os.Getenv("SIGN_KEY")), nil
		})

		if err != nil || !token.Valid {
			return nil, &Response{Code: LoginExpired, Message: "Login expired"}
		}

		namespaceCookie, err := r.Cookie(NamespaceCookieName)
		if err != nil {
			return nil, &Response{Code: IllegalRequest, Message: "Illegal namespace"}
		}

		namespaceID, err := strconv.ParseInt(namespaceCookie.Value, 10, 64)
		if err != nil {
			return nil, &Response{Code: Deny, Message: "Invalid namespace"}
		}

		namespaceList, err := GetNamespace(int64(claims["id"].(float64)))
		if err != nil {
			return nil, &Response{Code: Deny, Message: "Get namespace list error"}
		}

		for _, ns := range namespaceList {
			if ns.ID == namespaceID {
				namespace = ns
			}
		}

		if namespace == (model.Namespace{}) {
			return nil, &Response{Code: Deny, Message: "Namespace no permission"}
		}

		userInfo, err = GetUserInfo(int64(claims["id"].(float64)))
		if err != nil {
			return nil, &Response{Code: Deny, Message: "Get user information error"}
		}

		goployTokenStr, err := model.User{ID: int64(claims["id"].(float64)), Name: claims["name"].(string)}.CreateToken()
		if err == nil {
			// update jwt time
			cookie := http.Cookie{Name: LoginCookieName, Value: goployTokenStr, Path: "/", MaxAge: 86400, HttpOnly: true}
			http.SetCookie(w, &cookie)
		}

	}

	// save the body request data because ioutil.ReadAll will clear the requestBody
	var body []byte
	if hasContentType(r, "application/json") {
		body, _ = ioutil.ReadAll(r.Body)
	}
	gp := &Goploy{
		UserInfo:  userInfo,
		Namespace: namespace,
		Request:   r,
		URLQuery:  r.URL.Query(),
		Body:      body,
	}
	return gp, nil
}

func (rt *Router) doRequest(w http.ResponseWriter, gp *Goploy) *Response {

	for _, middleware := range rt.middlewares {
		err := middleware(w, gp)
		if err != nil {
			return &Response{Code: Error, Message: err.Error()}
		}
	}
	for _, route := range rt.routes {
		if route.pattern == gp.Request.URL.Path {
			if route.method != gp.Request.Method {
				return &Response{Code: Deny, Message: "Invalid request method"}
			}
			if err := route.hasRole(gp.Namespace.Role); err != nil {
				return &Response{Code: Deny, Message: err.Error()}
			}
			for _, middleware := range route.middlewares {

				if err := middleware(w, gp); err != nil {
					return &Response{Code: Error, Message: err.Error()}
				}
			}

			return route.callback(w, gp)
		}
	}

	return &Response{Code: Deny, Message: "No such method"}
}

func (r *route) hasRole(namespaceRole string) error {
	if len(r.roles) == 0 {
		return nil
	}

	for _, role := range r.roles {
		if role == namespaceRole {
			return nil
		}
	}
	return errors.New("no permission")
}

func hasContentType(r *http.Request, mimetype string) bool {
	contentType := r.Header.Get("Content-type")
	if contentType == "" {
		return false
	}
	for _, v := range strings.Split(contentType, ",") {
		t, _, err := mime.ParseMediaType(v)
		if err != nil {
			break
		}
		if t == mimetype {
			return true
		}
	}
	return false
}
