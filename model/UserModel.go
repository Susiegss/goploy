package model

import (
	"errors"
	"os"
	"time"

	sq "github.com/Masterminds/squirrel"
	"github.com/dgrijalva/jwt-go"
	"golang.org/x/crypto/bcrypt"
)

const userTable = "`user`"

const SuperManager = 1
const GeneralUser = 0

// User mysql table user
type User struct {
	ID            int64  `json:"id"`
	Account       string `json:"account"`
	Password      string `json:"password"`
	Name          string `json:"name"`
	Mobile        string `json:"mobile"`
	SuperManager  int64  `json:"superManager"`
	State         uint8  `json:"state"`
	InsertTime    string `json:"insertTime"`
	UpdateTime    string `json:"updateTime"`
	LastLoginTime string `json:"lastLoginTime"`
}

// Users many user
type Users []User

// GetData add user information to u *User
func (u User) GetData() (User, error) {
	var user User
	err := sq.
		Select("id, account, password, name, mobile, super_manager, state, insert_time, update_time").
		From(userTable).
		Where(sq.Eq{"id": u.ID}).
		RunWith(DB).
		QueryRow().
		Scan(&user.ID, &user.Account, &user.Password, &user.Name, &user.Mobile, &user.SuperManager, &user.State, &user.InsertTime, &user.UpdateTime)
	if err != nil {
		return user, err
	}
	return user, nil
}

// GetDataByAccount get user information
func (u User) GetDataByAccount() (User, error) {
	var user User
	err := sq.
		Select("id, account, password, name, mobile, super_manager, state, insert_time, update_time").
		From(userTable).
		Where(sq.Eq{"account": u.Account}).
		RunWith(DB).
		QueryRow().
		Scan(&user.ID, &user.Account, &user.Password, &user.Name, &user.Mobile, &user.SuperManager, &user.State, &user.InsertTime, &user.UpdateTime)
	if err != nil {
		return user, err
	}
	return user, nil
}

// GetList get many user row
func (u User) GetList(pagination Pagination) (Users, error) {
	rows, err := sq.
		Select("id, account, name, mobile, super_manager, insert_time, update_time").
		From(userTable).
		Where(sq.Eq{"state": Enable}).
		OrderBy("id DESC").
		Limit(pagination.Rows).
		Offset((pagination.Page - 1) * pagination.Rows).
		RunWith(DB).
		Query()
	if err != nil {
		return nil, err
	}
	users := Users{}
	for rows.Next() {
		var user User

		if err := rows.Scan(&user.ID, &user.Account, &user.Name, &user.Mobile, &user.SuperManager, &user.InsertTime, &user.UpdateTime); err != nil {
			return users, err
		}
		users = append(users, user)
	}

	return users, nil
}

// GetList crontab total
func (u User) GetTotal() (int64, error) {
	var total int64
	err := sq.
		Select("COUNT(*) AS count").
		From(userTable).
		Where(sq.Eq{"state": Enable}).
		RunWith(DB).
		QueryRow().
		Scan(&total)
	if err != nil {
		return 0, err
	}
	return total, nil
}

// GetAll user row
func (u User) GetAll() (Users, error) {
	rows, err := sq.
		Select("id, account, name, mobile, super_manager").
		From(userTable).
		Where(sq.Eq{"state": Enable}).
		OrderBy("id DESC").
		RunWith(DB).
		Query()
	if err != nil {
		return nil, err
	}
	users := Users{}
	for rows.Next() {
		var user User

		if err := rows.Scan(&user.ID, &user.Account, &user.Name, &user.Mobile, &user.SuperManager); err != nil {
			return users, err
		}
		users = append(users, user)
	}
	return users, nil
}

// AddRow add one row to table user and add id to u.ID
func (u User) AddRow() (int64, error) {
	if u.Password == "" {
		u.Password = u.Account + "!@#"
	}
	password := []byte(u.Password)

	// Hashing the password with the default cost of 10
	hashedPassword, err := bcrypt.GenerateFromPassword(password, bcrypt.DefaultCost)
	if err != nil {
		return 0, err
	}
	result, err := sq.
		Insert(userTable).
		Columns("account", "password", "name", "mobile", "super_manager").
		Values(u.Account, string(hashedPassword), u.Name, u.Mobile, u.SuperManager).
		RunWith(DB).
		Exec()

	if err != nil {
		return 0, err
	}
	id, err := result.LastInsertId()
	return id, err
}

// EditRow edit one row to table server
func (u User) EditRow() error {
	builder := sq.
		Update(userTable).
		SetMap(sq.Eq{
			"name":          u.Name,
			"mobile":        u.Mobile,
			"super_manager": u.SuperManager,
		}).
		Where(sq.Eq{"id": u.ID})
	if u.Password != "" {
		password := []byte(u.Password)
		// Hashing the password with the default cost of 10
		hashedPassword, err := bcrypt.GenerateFromPassword(password, bcrypt.DefaultCost)
		if err != nil {
			return err
		}
		builder = builder.Set("password", hashedPassword)
	}
	_, err := builder.RunWith(DB).Exec()
	return err
}

// RemoveRow User
func (u User) RemoveRow() error {
	_, err := sq.
		Update(userTable).
		SetMap(sq.Eq{
			"state": Disable,
		}).
		Where(sq.Eq{"id": u.ID}).
		RunWith(DB).
		Exec()
	return err
}

// UpdatePassword return err
func (u User) UpdatePassword() error {
	password := []byte(u.Password)
	// Hashing the password with the default cost of 10
	hashedPassword, err := bcrypt.GenerateFromPassword(password, bcrypt.DefaultCost)
	if err != nil {
		return err
	}
	_, err = sq.
		Update(userTable).
		SetMap(sq.Eq{
			"password": string(hashedPassword),
		}).
		Where(sq.Eq{"id": u.ID}).
		RunWith(DB).
		Exec()
	return err
}

// UpdateLastLoginTime return err
func (u User) UpdateLastLoginTime() error {
	_, err := sq.
		Update(userTable).
		SetMap(sq.Eq{
			"last_login_time": u.LastLoginTime,
		}).
		Where(sq.Eq{"id": u.ID}).
		RunWith(DB).
		Exec()
	return err
}

// Validate if user exists
func (u User) Validate(inputPassword string) error {
	err := bcrypt.CompareHashAndPassword([]byte(u.Password), []byte(inputPassword))
	if err != nil {
		return errors.New("密码错误")
	}
	return nil
}

// CreateToken create token
func (u User) CreateToken() (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"id":   u.ID,
		"name": u.Name,
		"exp":  time.Now().Add(time.Hour * 24).Unix(),
		"nbf":  time.Now().Unix(),
	})
	tokenString, err := token.SignedString([]byte(os.Getenv("SIGN_KEY")))

	//Sign and get the complete encoded token as string
	return tokenString, err
}
