(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6474d65c"],{"013f":function(t,e,r){var o=r("4ce5"),a=r("224c"),n=r("008a"),i=r("eafa"),s=r("5dd2");t.exports=function(t,e){var r=1==t,c=2==t,u=3==t,l=4==t,p=6==t,d=5==t||p,f=e||s;return function(e,s,m){for(var g,b,h=n(e),v=a(h),j=o(s,m,3),O=i(v.length),D=0,w=r?f(e,O):c?f(e,0):void 0;O>D;D++)if((d||D in v)&&(g=v[D],b=j(g,D,h),t))if(r)w[D]=b;else if(b)switch(t){case 3:return!0;case 5:return g;case 6:return D;case 2:w.push(g)}else if(l)return!1;return p?-1:u||l?l:w}}},2346:function(t,e,r){var o=r("75c4");t.exports=Array.isArray||function(t){return"Array"==o(t)}},"23ba":function(t,e,r){"use strict";r.d(e,"d",(function(){return s})),r.d(e,"e",(function(){return c})),r.d(e,"c",(function(){return u})),r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return p})),r.d(e,"f",(function(){return d}));r("5ab2"),r("6d57"),r("e10e");var o=r("88d6"),a=r("b775");function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t){return Object(a["a"])({url:"/group/getList",method:"get",params:i({},t)})}function c(){return Object(a["a"])({url:"/group/getOption",method:"get"})}function u(){return Object(a["a"])({url:"/group/getDeployOption",method:"get"})}function l(t){return Object(a["a"])({url:"/group/add",method:"post",data:t})}function p(t){return Object(a["a"])({url:"/group/edit",method:"post",data:t})}function d(t){return Object(a["a"])({url:"/group/remove",method:"delete",data:{id:t}})}},"24d2":function(t,e,r){"use strict";r.d(e,"h",(function(){return a})),r.d(e,"i",(function(){return n})),r.d(e,"f",(function(){return i})),r.d(e,"g",(function(){return s})),r.d(e,"e",(function(){return c})),r.d(e,"a",(function(){return u})),r.d(e,"d",(function(){return l})),r.d(e,"j",(function(){return p})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return f})),r.d(e,"l",(function(){return m})),r.d(e,"k",(function(){return g}));var o=r("b775");function a(t,e){var r=t.page,a=t.rows;return Object(o["a"])({url:"/project/getList",method:"get",params:{page:r,rows:a,projectName:e}})}function n(){return Object(o["a"])({url:"/project/getOption",method:"get",params:{}})}function i(t){return Object(o["a"])({url:"/project/getBindServerList",method:"get",params:{id:t}})}function s(t){return Object(o["a"])({url:"/project/getBindUserList",method:"get",params:{id:t}})}function c(t){return Object(o["a"])({url:"/project/getBindProjectList",method:"get",params:{userId:t}})}function u(t){return Object(o["a"])({url:"/project/add",method:"post",data:t})}function l(t){return Object(o["a"])({url:"/project/edit",method:"post",data:t})}function p(t){return Object(o["a"])({url:"/project/remove",method:"delete",data:{id:t}})}function d(t){return Object(o["a"])({url:"/project/addServer",method:"post",data:t})}function f(t){return Object(o["a"])({url:"/project/addUser",method:"post",data:t})}function m(t){return Object(o["a"])({url:"/project/removeProjectUser",method:"delete",data:{projectUserId:t}})}function g(t){return Object(o["a"])({url:"/project/removeProjectServer",method:"delete",data:{projectServerId:t}})}},"3b65":function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-row",{staticClass:"app-container"},[r("el-row",{staticClass:"app-bar",attrs:{type:"flex",justify:"end"}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.handleAdd}},[t._v("添加")])],1),t._v(" "),r("el-table",{staticStyle:{width:"100%"},attrs:{border:"",stripe:"","highlight-current-row":"",data:t.tableData}},[r("el-table-column",{attrs:{prop:"account",label:"账号"}}),t._v(" "),r("el-table-column",{attrs:{prop:"name",label:"名称"}}),t._v(" "),r("el-table-column",{attrs:{prop:"mobile",label:"手机号码","show-overflow-tooltip":""}}),t._v(" "),r("el-table-column",{attrs:{prop:"role",label:"角色"}}),t._v(" "),r("el-table-column",{attrs:{prop:"insertTime",label:"创建时间",width:"160"}}),t._v(" "),r("el-table-column",{attrs:{prop:"updateTime",label:"更新时间",width:"160"}}),t._v(" "),r("el-table-column",{attrs:{prop:"operation",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[1!==e.row.id&&e.row.id!==t.$store.getters.uid?r("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(r){return t.handleEdit(e.row)}}},[t._v("编辑")]):t._e(),t._v(" "),1!==e.row.id&&e.row.id!==t.$store.getters.uid?r("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(r){return t.handleRemove(e.row)}}},[t._v("删除")]):t._e()]}}])})],1),t._v(" "),r("el-row",{staticStyle:{"margin-top":"10px"},attrs:{type:"flex",justify:"end"}},[r("el-pagination",{attrs:{"hide-on-single-page":"",total:t.pagination.total,"page-size":t.pagination.rows,background:"",layout:"prev, pager, next"},on:{"current-change":t.handleCurrentChange}})],1),t._v(" "),r("el-dialog",{attrs:{title:"成员设置",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[r("el-form",{ref:"form",attrs:{rules:t.formRules,model:t.formData,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"账号",prop:"account"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:t.formData.account,callback:function(e){t.$set(t.formData,"account",e)},expression:"formData.account"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{autocomplete:"off",placeholder:"请输入初始密码"},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"手机号码",prop:"mobile"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:t.formData.mobile,callback:function(e){t.$set(t.formData,"mobile",e)},expression:"formData.mobile"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"角色",prop:"roleId"}},[r("el-select",{attrs:{placeholder:"选择角色"},model:{value:t.formData.role,callback:function(e){t.$set(t.formData,"role",e)},expression:"formData.role"}},t._l(t.roleOption,(function(t,e){return r("el-option",{key:e,attrs:{label:t,value:t}})})),1),t._v(" "),r("el-popover",{attrs:{placement:"top-start",title:"权限说明",width:"300",trigger:"hover"}},[r("p",[t._v("admin具有一切权限")]),t._v(" "),r("p",[t._v("manager不具有成员管理")]),t._v(" "),r("p",[t._v("group-manager管理和构建分组的项目，也能绑定不属于分组的项目(只能构建)")]),t._v(" "),r("p",[t._v("member只允许构建绑定的项目")]),t._v(" "),r("el-button",{staticStyle:{color:"#666"},attrs:{slot:"reference",type:"text",icon:"el-icon-question"},slot:"reference"})],1)],1),t._v(" "),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"group-manager"===t.formData.role,expression:"formData.role==='group-manager'"}],attrs:{label:"管理分组",prop:"groupId"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",placeholder:"选择分组"},model:{value:t.formProps.groupIds,callback:function(e){t.$set(t.formProps,"groupIds",e)},expression:"formProps.groupIds"}},t._l(t.groupOption,(function(t,e){return r("el-option",{key:e,attrs:{label:t.name,value:t.id}})})),1)],1),t._v(" "),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"member"===t.formData.role||"group-manager"===t.formData.role,expression:"formData.role==='member' || formData.role==='group-manager'"}],attrs:{label:"绑定项目",prop:"projectIds"}},[r("el-cascader",{staticStyle:{width:"100%"},attrs:{options:t.filterProjectOption,props:{multiple:!0},"collapse-tags":"",clearable:""},model:{value:t.formProps.projectIds,callback:function(e){t.$set(t.formProps,"projectIds",e)},expression:"formProps.projectIds"}})],1)],1),t._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),r("el-button",{attrs:{disabled:t.formProps.disabled,type:"primary"},on:{click:t.submit}},[t._v("确 定")])],1)],1)],1)},a=[],n=(r("c904"),r("9a33"),r("e204"),r("6d57"),r("cc57"),r("61f7")),i=r("c24f"),s=r("b775");function c(t){return Object(s["a"])({url:"/role/getOption",method:"get",params:t})}var u=r("23ba"),l=r("24d2"),p={data:function(){var t=function(t,e,r){Object(n["c"])(e)?r():r(new Error("请输入正确的用户名"))},e=function(t,e,r){e?Object(n["b"])(e)?r():r(new Error("8到16个字符，至少包含字母、数字、特殊符号中的两种")):r()};return{dialogVisible:!1,roleOption:[],groupOption:[],projectOption:[],tableData:[],tempFormData:{},pagination:{page:1,rows:11,total:0},formProps:{disabled:!1,groupIds:[],projectIds:[],projectOption:[]},formData:{id:0,account:"",password:"",name:"",mobile:"",role:"member",manageGroupStr:"",projectIds:[]},formRules:{account:[{required:!0,message:"请输入账号",trigger:"blur",validator:t}],password:[{trigger:"blur",validator:e}],name:[{required:!0,message:"请输入名称",trigger:"blur"}],role:[{required:!0,message:"请选择角色",trigger:"change"}]}}},computed:{filterProjectOption:function(){var t=this;return this.projectOption.filter((function(e){return-1===t.formProps.groupIds.indexOf(e.value)}))}},created:function(){this.storeFormData(),this.getRoleOption(),this.getGroupOption(),this.getUserList()},methods:{getUserList:function(){var t=this;Object(i["f"])(this.pagination).then((function(e){var r=e.data.userList||[];t.tableData=r,t.pagination=e.data.pagination}))},getRoleOption:function(){var t=this;c().then((function(e){t.roleOption=e.data.roleList||[]}))},getGroupOption:function(){var t=this;Object(u["e"])().then((function(e){t.groupOption=e.data.groupList||[],Object(l["i"])().then((function(e){t.projectOption=t.groupOption.map((function(t){return{value:t.id,label:t.name,children:[]}})),t.projectOption.unshift({value:0,label:"默认",children:[]}),e.data.projectList.forEach((function(e){var r=t.projectOption.findIndex((function(t){return t.value===e.groupId}));t.projectOption[r].children.push({value:e.id,label:e.name})}))}))}))},handleCurrentChange:function(t){this.pagination.page=t,this.getUserList()},handleAdd:function(){this.restoreFormData(),this.dialogVisible=!0},handleEdit:function(t){var e=this;this.restoreFormData(),this.formData=Object.assign(this.formData,t),this.formProps.groupIds=t.manageGroupStr.split(",").filter((function(t){return""!==t&&"all"!==t})).map((function(t){return parseInt(t)})),Object(l["e"])(t.id).then((function(t){e.formData.projectIds=t.data.projectUserMap?t.data.projectUserMap.map((function(t){return t.projectId})):[],e.formProps.projectIds=t.data.projectUserMap?t.data.projectUserMap.map((function(t){return[t.groupId,t.projectId]})):[]})),this.dialogVisible=!0},handleRemove:function(t){var e=this;this.$confirm("此操作将删除该组员, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["h"])(t.id).then((function(t){e.$message({message:"删除成功",type:"success",duration:5e3}),e.getUserList()}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},handleGroupRadioChange:function(t){this.formProps.showGroupSelect=2===t},submit:function(){var t=this;this.$refs.form.validate((function(e){if(!e)return!1;"admin"===t.formData.role||"manager"===t.formData.role?t.formData.manageGroupStr="all":"group-manager"===t.formData.role?t.formData.manageGroupStr=t.formProps.groupIds.sort((function(t,e){return t-e})).join(","):t.formData.manageGroupStr="",t.formData.projectIds=[],"group-manager"!==t.formData.role&&"member"!==t.formData.role||t.formProps.projectIds.forEach((function(e){t.formData.projectIds.push(e[1])})),0===t.formData.id?t.add():t.edit()}))},add:function(){var t=this;this.formProps.disabled=!0,Object(i["a"])(this.formData).then((function(e){t.$message({message:"添加成功",type:"success",duration:5e3}),t.getUserList(),t.dialogVisible=!1})).finally((function(){t.formProps.disabled=!1}))},edit:function(){var t=this;this.formProps.disabled=!0,Object(i["c"])(this.formData).then((function(e){t.$message({message:"修改成功",type:"success",duration:5e3}),t.getUserList(),t.dialogVisible=!1})).finally((function(){t.formProps.disabled=!1}))},storeFormData:function(){this.tempFormData=JSON.parse(JSON.stringify(this.formData))},restoreFormData:function(){this.formData=JSON.parse(JSON.stringify(this.tempFormData))}}},d=p,f=r("4023"),m=Object(f["a"])(d,o,a,!1,null,null,null);e["default"]=m.exports},"5dd2":function(t,e,r){var o=r("81dc");t.exports=function(t,e){return new(o(t))(e)}},"81dc":function(t,e,r){var o=r("fb68"),a=r("2346"),n=r("cb3d")("species");t.exports=function(t){var e;return a(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!a(e.prototype)||(e=void 0),o(e)&&(e=e[n],null===e&&(e=void 0))),void 0===e?Array:e}},a2cd:function(t,e,r){"use strict";var o=r("238a");t.exports=function(t,e){return!!t&&o((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},c904:function(t,e,r){"use strict";var o=r("e46b"),a=r("5daa"),n=r("008a"),i=r("238a"),s=[].sort,c=[1,2,3];o(o.P+o.F*(i((function(){c.sort(void 0)}))||!i((function(){c.sort(null)}))||!r("a2cd")(s)),"Array",{sort:function(t){return void 0===t?s.call(n(this)):s.call(n(this),a(t))}})},e204:function(t,e,r){"use strict";var o=r("e46b"),a=r("013f")(6),n="findIndex",i=!0;n in[]&&Array(1)[n]((function(){i=!1})),o(o.P+o.F*i,"Array",{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),r("0e8b")(n)}}]);