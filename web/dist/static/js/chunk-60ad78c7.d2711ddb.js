(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60ad78c7"],{"013f":function(t,e,a){var r=a("4ce5"),i=a("224c"),n=a("008a"),o=a("eafa"),s=a("5dd2");t.exports=function(t,e){var a=1==t,l=2==t,c=3==t,u=4==t,p=6==t,d=5==t||p,m=e||s;return function(e,s,g){for(var h,b,f=n(e),v=i(f),w=r(s,g,3),_=o(v.length),y=0,k=a?m(e,_):l?m(e,0):void 0;_>y;y++)if((d||y in v)&&(h=v[y],b=w(h,y,f),t))if(a)k[y]=b;else if(b)switch(t){case 3:return!0;case 5:return h;case 6:return y;case 2:k.push(h)}else if(u)return!1;return p?-1:c||u?u:k}}},"24d2":function(t,e,a){"use strict";a.d(e,"i",(function(){return i})),a.d(e,"l",(function(){return n})),a.d(e,"j",(function(){return o})),a.d(e,"g",(function(){return s})),a.d(e,"h",(function(){return l})),a.d(e,"a",(function(){return c})),a.d(e,"e",(function(){return u})),a.d(e,"m",(function(){return p})),a.d(e,"b",(function(){return d})),a.d(e,"d",(function(){return m})),a.d(e,"p",(function(){return g})),a.d(e,"n",(function(){return h})),a.d(e,"c",(function(){return b})),a.d(e,"f",(function(){return f})),a.d(e,"o",(function(){return v})),a.d(e,"k",(function(){return w}));var r=a("b775");function i(t,e){var a=t.page,i=t.rows;return Object(r["a"])({url:"/project/getList",method:"get",params:{page:a,rows:i,projectName:e}})}function n(t){return Object(r["a"])({url:"/project/getTotal",method:"get",params:{projectName:t}})}function o(t){return Object(r["a"])({url:"/project/getRemoteBranchList",method:"get",timeout:0,params:{url:t}})}function s(t){return Object(r["a"])({url:"/project/getBindServerList",method:"get",params:{id:t}})}function l(t){return Object(r["a"])({url:"/project/getBindUserList",method:"get",params:{id:t}})}function c(t){return Object(r["a"])({url:"/project/add",method:"post",data:t})}function u(t){return Object(r["a"])({url:"/project/edit",method:"post",data:t})}function p(t){return Object(r["a"])({url:"/project/remove",method:"delete",data:{id:t}})}function d(t){return Object(r["a"])({url:"/project/addServer",method:"post",data:t})}function m(t){return Object(r["a"])({url:"/project/addUser",method:"post",data:t})}function g(t){return Object(r["a"])({url:"/project/removeUser",method:"delete",data:{projectUserId:t}})}function h(t){return Object(r["a"])({url:"/project/removeServer",method:"delete",data:{projectServerId:t}})}function b(t){return Object(r["a"])({url:"/project/addTask",method:"post",data:t})}function f(t){return Object(r["a"])({url:"/project/editTask",method:"post",data:t})}function v(t){return Object(r["a"])({url:"/project/removeTask",method:"post",data:{id:t}})}function w(t,e){var a=t.page,i=t.rows;return Object(r["a"])({url:"/project/getTaskList",method:"get",params:{page:a,rows:i,id:e}})}},"5dd2":function(t,e,a){var r=a("81dc");t.exports=function(t,e){return new(r(t))(e)}},"81dc":function(t,e,a){var r=a("fb68"),i=a("2346"),n=a("cb3d")("species");t.exports=function(t){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)||(e=void 0),r(e)&&(e=e[n],null===e&&(e=void 0))),void 0===e?Array:e}},"9b7a":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"app-container"},[a("el-row",{staticClass:"app-bar",attrs:{type:"flex"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入项目名称"},on:{change:t.getList},model:{value:t.projectName,callback:function(e){t.projectName=e},expression:"projectName"}})],1),t._v(" "),a("el-table",{key:t.tableHeight,staticStyle:{width:"100%","margin-top":"5px"},attrs:{border:"",stripe:"","highlight-current-row":"","max-height":t.tableHeight,data:t.tablePageData}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"80",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"项目名称","min-width":"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return["生产环境"===e.row.environment?a("b",{staticStyle:{color:"#F56C6C"}},[t._v(t._s(e.row.name)+" - "+t._s(e.row.environment))]):"测试环境"===e.row.environment?a("b",{staticStyle:{color:"#E6A23C"}},[t._v(t._s(e.row.name)+" - "+t._s(e.row.environment))]):a("b",{staticStyle:{color:"#909399"}},[t._v(t._s(e.row.name)+" - "+t._s(e.row.environment))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"branch",label:"分支",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"commit",label:"commitID",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{attrs:{effect:"dark",content:e.row["commit"],placement:"top"}},[a("span",[t._v(t._s(e.row["commit"]?e.row["commit"].substring(0,6):""))])])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"deployState",label:"构建状态",width:"230",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:e.row.tagType,effect:"plain"}},[t._v(t._s(e.row.tagText))]),t._v(" "),a("el-progress",{attrs:{percentage:e.row.progressPercentage,status:e.row.progressStatus}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"updateTime",label:"上次构建时间",width:"160",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"operation",label:"操作",width:"255",fixed:"right",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-row",{staticClass:"operation-btn"},[a("el-dropdown",{attrs:{"split-button":"",trigger:"click",disabled:1===e.row.deployState,type:"primary"},on:{click:function(a){return t.publish(e.row)},command:t.handlePublishCommand}},[t._v("\n            构建\n            "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:e.row}},[t._v("选择具体commit")])],1)],1),t._v(" "),t.hasGroupManagerPermission()?a("el-dropdown",{attrs:{"split-button":"",trigger:"click",disabled:1===e.row.deployState,type:"warning"},on:{click:function(a){return t.handleAddProjectTask(e.row)},command:t.handleProjectTaskCommand}},[t._v("\n            定时\n            "),a("el-dropdown-menu",{staticStyle:{"min-width":"84px","text-align":"center"},attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:e.row}},[t._v("定时构建管理")])],1)],1):t._e(),t._v(" "),a("el-button",{attrs:{type:"success"},on:{click:function(a){return t.handleDetail(e.row)}}},[t._v("详情")])],1)]}}])})],1),t._v(" "),a("el-pagination",{staticStyle:{"margin-top":"10px","text-align":"right"},attrs:{"hide-on-single-page":"",total:t.pagination.total,"page-size":t.pagination.rows,"current-page":t.pagination.page,background:"","page-sizes":[20,50,100],layout:"sizes, total, prev, pager, next, jumper"},on:{"update:currentPage":function(e){return t.$set(t.pagination,"page",e)},"update:current-page":function(e){return t.$set(t.pagination,"page",e)},"size-change":t.handleSizeChange,"current-change":t.handlePageChange}}),t._v(" "),a("el-dialog",{staticClass:"publish-record",attrs:{title:"构建记录",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-row",{attrs:{type:"flex"}},[a("el-row",{directives:[{name:"loading",rawName:"v-loading",value:t.searchPreview.loading,expression:"searchPreview.loading"}],staticClass:"publish-preview"},[a("el-select",{staticStyle:{width:"142px"},attrs:{placeholder:"选择用户",clearable:""},model:{value:t.searchPreview.userId,callback:function(e){t.$set(t.searchPreview,"userId",e)},expression:"searchPreview.userId"}},t._l(t.userOption,(function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.id}})})),1),t._v(" "),a("el-select",{staticStyle:{width:"95px"},attrs:{placeholder:"状态",clearable:""},model:{value:t.searchPreview.state,callback:function(e){t.$set(t.searchPreview,"state",e)},expression:"searchPreview.state"}},[a("el-option",{attrs:{label:"成功",value:1}}),t._v(" "),a("el-option",{attrs:{label:"失败",value:0}})],1),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.searchPreviewList}},[t._v("搜索")]),t._v(" "),a("el-radio-group",{on:{change:t.handleDetailChange},model:{value:t.publishToken,callback:function(e){t.publishToken=e},expression:"publishToken"}},t._l(t.gitTraceList,(function(e,r){return a("el-row",{key:r},[a("el-row",{staticStyle:{margin:"5px 0"}},[a("el-radio",{staticClass:"publish-commit",attrs:{label:e.token,border:""}},[a("span",{staticClass:"publish-name"},[t._v(t._s(e.publisherName))]),t._v(" "),a("span",{staticClass:"publish-commitID"},[t._v("commitID: "+t._s(e.commit))]),t._v(" "),1===e.publishState?a("span",{staticStyle:{color:"#67C23A",float:"right"}},[t._v("成功")]):a("span",{staticStyle:{color:"#F56C6C",float:"right"}},[t._v("失败")])]),t._v(" "),a("el-button",{attrs:{type:"danger",plain:""},on:{click:function(a){return t.rollback(e)}}},[t._v("rebuild")])],1)],1)})),1),t._v(" "),a("el-pagination",{staticStyle:{"text-align":"right","margin-right":"20px"},attrs:{total:t.previewPagination.total,"page-size":t.previewPagination.rows,"current-page":t.previewPagination.page,"prev-text":"上一页","next-text":"下一页",layout:"total, prev, next"},on:{"update:currentPage":function(e){return t.$set(t.previewPagination,"page",e)},"update:current-page":function(e){return t.$set(t.previewPagination,"page",e)},"current-change":t.handlePreviewPageChange}})],1),t._v(" "),a("el-row",{staticClass:"project-detail",staticStyle:{flex:"1",width:"100%"}},[t._l(t.publishLocalTraceList,(function(e,r){return a("el-row",{key:r},[2===e.type?a("el-row",[a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("git同步信息")]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("时间: "+t._s(e.insertTime))]),t._v(" "),0!==e.state?a("el-row",[a("el-row",[t._v("commit: "+t._s(e["commit"]))]),t._v(" "),a("el-row",[t._v("message: "+t._s(e["message"]))]),t._v(" "),a("el-row",[t._v("author: "+t._s(e["author"]))]),t._v(" "),a("el-row",[t._v("datetime: "+t._s(e["timestamp"]?t.parseTime(e["timestamp"]):""))]),t._v(" "),a("el-row",[a("span",{domProps:{innerHTML:t._s(t.formatDetail(e["diff"]))}})])],1):a("el-row",{staticStyle:{margin:"5px 0"}},[a("el-tag",{attrs:{type:"danger",effect:"plain"}},[t._v("失败")]),t._v(" "),a("span",{domProps:{innerHTML:t._s(t.formatDetail(e.detail))}})],1)],1):t._e(),t._v(" "),3===e.type?a("el-row",[a("hr"),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("获取代码后脚本信息")]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("时间: "+t._s(e.insertTime))]),t._v(" "),a("el-row",[t._v("脚本: "),a("pre",{domProps:{innerHTML:t._s(t.formatDetail(e.script))}})]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[0===e.state?a("el-tag",{attrs:{type:"danger",effect:"plain"}},[t._v("失败")]):t._e(),t._v(" "),a("el-row",[t._v("[goploy ~]# "),a("span",{domProps:{innerHTML:t._s(t.formatDetail(e.detail))}})])],1)],1):t._e(),t._v(" "),6===e.type?a("el-row",[a("hr"),t._v(" "),a("el-row",[a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("remote服务器信息")]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("服务器: "+t._s(e.serverName))]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("时间: "+t._s(e.insertTime))]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("脚本: "+t._s(e.script))]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[0===e.state?a("el-tag",{attrs:{type:"danger",effect:"plain"}},[t._v("失败")]):t._e(),t._v(" "),a("span",{domProps:{innerHTML:t._s(t.formatDetail(e.detail))}})],1)],1)],1):t._e()],1)})),t._v(" "),a("hr"),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("目标服务器")]),t._v(" "),a("el-tabs",{model:{value:t.activeRomoteTracePane,callback:function(e){t.activeRomoteTracePane=e},expression:"activeRomoteTracePane"}},t._l(t.publishRemoteTraceList,(function(e,r){return a("el-tab-pane",{key:r,attrs:{label:r,name:r}},t._l(e,(function(e,r){return a("el-row",{key:r},[4===e.type?a("el-row",[a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("部署前脚本")]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("时间: "+t._s(e.insertTime))]),t._v(" "),a("el-row",[t._v("脚本: "),a("pre",{domProps:{innerHTML:t._s(t.formatDetail(e.script))}})]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[0===e.state?a("el-tag",{attrs:{type:"danger",effect:"plain"}},[t._v("失败")]):t._e(),t._v(" "),a("el-row",[t._v("[goploy ~]# "),a("span",{domProps:{innerHTML:t._s(t.formatDetail(e.detail))}})])],1)],1):5===e.type?a("el-row",[a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("rsync同步文件")]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("时间: "+t._s(e.insertTime))]),t._v(" "),a("el-row",[t._v("命令: "+t._s(e.command))]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[0===e.state?a("el-tag",{attrs:{type:"danger",effect:"plain"}},[t._v("失败")]):t._e(),t._v(" "),a("span",{domProps:{innerHTML:t._s(t.formatDetail(e.detail))}})],1)],1):a("el-row",[a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("部署后脚本")]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("时间: "+t._s(e.insertTime))]),t._v(" "),a("el-row",[t._v("脚本: "+t._s(e.script))]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[0===e.state?a("el-tag",{attrs:{type:"danger",effect:"plain"}},[t._v("失败")]):t._e(),t._v(" "),a("el-row",[t._v("[goploy ~]# "),a("span",{domProps:{innerHTML:t._s(t.formatDetail(e.detail))}})])],1)],1)],1)})),1)})),1)],2)],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"commit管理",visible:t.commitDialogVisible},on:{"update:visible":function(e){t.commitDialogVisible=e}}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.commitTableLoading,expression:"commitTableLoading"}],attrs:{"element-loading-text":"获取最近的commit历史，请稍候",border:"",stripe:"","highlight-current-row":"","max-height":"447px",data:t.commitTableData}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{domProps:{innerHTML:t._s(t.formatDetail(e.row.diff))}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"commit",label:"commit",width:"290"}}),t._v(" "),a("el-table-column",{attrs:{prop:"author",label:"author"}}),t._v(" "),a("el-table-column",{attrs:{label:"提交时间",width:"135"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(t.parseTime(e.row.timestamp))+"\n        ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"message",label:"message",width:"200","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"operation",label:"操作",width:"80",align:"center",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"danger"},on:{click:function(a){return t.rollback(e.row)}}},[t._v("构建")])]}}])})],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.commitDialogVisible=!1}}},[t._v("取 消")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"定时构建设置",visible:t.taskDialogVisible,width:"600px"},on:{"update:visible":function(e){t.taskDialogVisible=e}}},[a("el-form",{ref:"taskForm",attrs:{rules:t.taskFormRules,model:t.taskFormData,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"项目名称"}},[a("span",[t._v(t._s(t.taskFormProps.projectName))])]),t._v(" "),a("el-form-item",{attrs:{label:"commitId",prop:"commitId"}},[a("el-select",{staticStyle:{width:"400px"},attrs:{placeholder:"选择CommitID"},model:{value:t.taskFormData.commitId,callback:function(e){t.$set(t.taskFormData,"commitId",e)},expression:"taskFormData.commitId"}},t._l(t.taskFormProps.commitOptions,(function(t,e){return a("el-option",{key:e,attrs:{label:t.commit+"("+t.author+")",value:t.commit}})})),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"时间",prop:"date"}},[a("el-date-picker",{staticStyle:{width:"400px"},attrs:{"picker-options":t.taskFormProps.pickerOptions,type:"datetime",placeholder:"选择日期时间","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:t.taskFormData.date,callback:function(e){t.$set(t.taskFormData,"date",e)},expression:"taskFormData.date"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.taskDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{disabled:t.taskFormProps.disabled,type:"primary"},on:{click:t.submitTask}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"定时构建管理",visible:t.taskListDialogVisible},on:{"update:visible":function(e){t.taskListDialogVisible=e}}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.taskTableLoading,expression:"taskTableLoading"}],attrs:{border:"",stripe:"","highlight-current-row":"","max-height":"447px",data:t.taskTableData}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"projectName",label:"项目名称",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"commitId",label:"commit",width:"290"}}),t._v(" "),a("el-table-column",{attrs:{prop:"date",label:"日期",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"isRun",label:"任务",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(1===e.row.isRun?"已运行":"未运行")+"\n        ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"state",label:"状态",width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(1===e.row.state?"有效":"无效")+"\n        ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"creator",label:"创建人"}}),t._v(" "),a("el-table-column",{attrs:{prop:"editor",label:"修改人"}}),t._v(" "),a("el-table-column",{attrs:{prop:"insertTime",label:"插入时间",width:"135"}}),t._v(" "),a("el-table-column",{attrs:{prop:"updateTime",label:"更新时间",width:"135"}}),t._v(" "),a("el-table-column",{attrs:{prop:"operation",label:"操作",width:"150",align:"center",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",disabled:1===e.row.isRun||0===e.row.state},on:{click:function(a){return t.handleEditProjectTask(e.row)}}},[t._v("修改")]),t._v(" "),a("el-button",{attrs:{type:"danger",disabled:1===e.row.isRun||0===e.row.state},on:{click:function(a){return t.removeProjectTask(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.taskListDialogVisible=!1}}},[t._v("取 消")])],1)],1)],1)},i=[],n=(a("309f"),a("0b53"),a("06a2"),a("ec25"),a("2b45"),a("f548"),a("6d57"),a("e10e"),a("cc57"),a("e204"),a("9cea")),o=(a("5ab2"),a("70ea")),s=a("b775");function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t){return Object(s["a"])({url:"/deploy/getList",method:"get",params:{projectName:t}})}function p(t){return Object(s["a"])({url:"/deploy/getDetail",method:"get",params:{lastPublishToken:t}})}function d(t,e){var a=t.page,r=t.rows;return Object(s["a"])({url:"/deploy/getPreview",method:"get",params:c({page:a,rows:r},e)})}function m(t){return Object(s["a"])({url:"/deploy/getCommitList",method:"get",params:{id:t},timeout:0})}function g(t,e){return Object(s["a"])({url:"/deploy/publish",method:"post",data:{projectId:t,commit:e}})}var h=a("24d2"),b=a("c24f"),f=a("ed08");function v(t,e){var a;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=w(t))||e&&t&&"number"===typeof t.length){a&&(t=a);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o=!0,s=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return o=t.done,t},e:function(t){s=!0,n=t},f:function(){try{o||null==a.return||a.return()}finally{if(s)throw n}}}}function w(t,e){if(t){if("string"===typeof t)return _(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?_(t,e):void 0}}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}var y={mixins:[n["a"]],data:function(){return{userId:"",userOption:[],projectName:"",publishToken:"",commitDialogVisible:!1,taskDialogVisible:!1,taskListDialogVisible:!1,dialogVisible:!1,tableData:[],pagination:{total:0,page:1,rows:20},taskTableLoading:!1,taskTableData:[],taskPagination:{total:0,page:1,rows:20},taskFormProps:{projectName:"",disabled:!1,commitOptions:[],pickerOptions:{disabledDate:function(t){return t.getTime()<Date.now()-864e5}}},taskFormData:{id:0,projectId:"",commitId:"",date:""},taskFormRules:{commitId:[{required:!0,message:"请选择CommitID",trigger:"change"}],date:[{required:!0,message:"请选择日期",trigger:"change"}]},searchPreview:{loading:!1,projectId:"",userId:"",state:""},gitTraceList:[],previewPagination:{page:1,rows:11,total:0},commitTableLoading:!1,commitTableData:[],publishTraceList:[],publishLocalTraceList:[],publishRemoteTraceList:{},activeRomoteTracePane:""}},computed:{tablePageData:function(){return this.tableData.slice((this.pagination.page-1)*this.pagination.rows,this.pagination.page*this.pagination.rows)}},watch:{"$store.getters.ws_message":function(t){if(1===t.type){var e=t.message;e.message=this.formatDetail(e.message),0===e.state&&this.$notify.error({title:e.projectName,dangerouslyUseHTMLString:!0,message:e.message,duration:0});var a=this.tableData.findIndex((function(t){return t.id===e.projectId}));if(-1!==a){var r=12.5*e.state;this.tableData[a].progressPercentage=r,this.tableData[a].progressStatus="warning",this.tableData[a].tagType="warning",this.tableData[a].tagText=e.message,0===r?(this.tableData[a].progressStatus="exception",this.tableData[a].tagType="danger",this.tableData[a].tagText="失败"):r>98&&(this.tableData[a].progressStatus="success",this.tableData[a].tagType="success"),e["ext"]&&Object.assign(this.tableData[a],e["ext"]),this.tableData[a].deployState=e.state,this.tableData[a].publisherName=e.username,this.tableData[a].updateTime=Object(f["b"])(new Date)}}}},created:function(){this.getList(),this.getUserOption()},methods:{parseTime:f["b"],getUserOption:function(){var t=this;Object(b["f"])().then((function(e){t.userOption=e.data.list}))},getList:function(){var t=this;u(this.projectName).then((function(e){t.tableData=e.data.list.map((function(t){t.progressPercentage=0,t.tagType="info",t.tagText="未构建",2===t.deployState?(t.progressPercentage=100,t.progressStatus="success",t.tagType="success",t.tagText="成功"):1===t.deployState&&(t.progressPercentage=60,t.progressStatus="warning",t.tagType="warning",t.tagText="构建中");try{Object.assign(t,JSON.parse(t.publishExt))}catch(e){console.log("项目尚未构建")}return t})),t.pagination.total=t.tableData.length}))},handleSizeChange:function(t){this.pagination.rows=t,this.handlePageChange(1)},handlePageChange:function(t){this.pagination.page=t,this.getList()},publish:function(t){var e=this,a=t.id,r=this.$createElement,i="";i="生产环境"===t.environment?"color: #F56C6C":"测试环境"===t.environment?"color: #E6A23C":"color: #909399",this.$confirm("","提示",{message:r("p",null,[r("span",null,"此操作将部署 "+t.name),r("b",{style:i},"("+t.environment+")"),r("span",null,", 是否继续? ")]),confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.gitLog=[],e.remoteLog={},g(a,"").then((function(t){var r=e.tableData.findIndex((function(t){return t.id===a}));e.tableData[r].deployState=1}))})).catch((function(){e.$message.info("已取消构建")}))},getDetail:function(){var t=this;p(this.publishToken).then((function(e){var a=e.data.publishTraceList||[];t.publishTraceList=a.map((function(t){return""!==t.ext&&Object.assign(t,JSON.parse(t.ext)),t})),t.publishLocalTraceList=t.publishTraceList.filter((function(t){return t.type<4})),t.publishRemoteTraceList={};var r,i=v(t.publishTraceList);try{for(i.s();!(r=i.n()).done;){var n=r.value;n.type<4||(t.publishRemoteTraceList[n.serverName]||(t.publishRemoteTraceList[n.serverName]=[]),t.publishRemoteTraceList[n.serverName].push(n))}}catch(o){i.e(o)}finally{i.f()}t.activeRomoteTracePane=Object.keys(t.publishRemoteTraceList)[0]}))},getPreviewList:function(){var t=this;this.searchPreview.loading=!0,d(this.previewPagination,{projectId:this.searchPreview.projectId,userId:this.searchPreview.userId||0,state:""===this.searchPreview.state?-1:this.searchPreview.state}).then((function(e){var a=e.data.gitTraceList||[];t.gitTraceList=a.map((function(t){return""!==t.ext&&Object.assign(t,JSON.parse(t.ext)),t.commit=t["commit"]?t["commit"].substring(0,6):"",t})),t.gitTraceList.length>0&&(t.publishToken=t.gitTraceList[0].token,t.getDetail()),t.previewPagination.total=e.data.pagination.total})).finally((function(){t.searchPreview.loading=!1}))},searchPreviewList:function(){this.handlePreviewPageChange(1)},handleDetail:function(t){this.dialogVisible=!0,this.searchPreview.projectId=t.id,this.searchPreview.userId="",this.searchPreview.state="",this.getPreviewList()},handlePreviewPageChange:function(t){this.previewPagination.page=t,this.getPreviewList()},handleDetailChange:function(t){this.publishToken=t,this.getDetail()},handlePublishCommand:function(t){var e=this,a=t.id;this.commitDialogVisible=!0,this.commitTableLoading=!0,m(a).then((function(t){e.commitTableData=t.data.commitList.map((function(t){return Object.assign(t,{projectId:a})}))})).finally((function(){e.commitTableLoading=!1}))},handleAddProjectTask:function(t){var e=this;if(this.taskDialogVisible=!0,this.taskFormData.id=0,this.taskFormData.projectId!==t.id){this.taskFormData.projectId=t.id,this.taskFormProps.projectName=t.name,this.taskFormData.commitId="",this.taskFormData.date="";var a=t.id;m(a).then((function(t){e.taskFormProps.commitOptions=t.data.commitList||[]}))}},handleEditProjectTask:function(t){var e=this;this.taskDialogVisible=!0,this.taskFormData.id=t.id,this.taskFormData.commitId=t.commitId,this.taskFormData.date=t.date,this.taskFormData.projectId!==t.projectId&&(this.taskFormProps.projectName=t.projectName,m(t.projectId).then((function(t){e.taskFormProps.commitOptions=t.data.commitList||[]})))},handleProjectTaskCommand:function(t){var e=this;this.taskListDialogVisible=!0,this.taskTableLoading=!0,Object(h["k"])(this.taskPagination,t.id).then((function(a){var r=a.data.projectTaskList||[];e.taskTableData=r.map((function(e){return Object.assign(e,{projectId:t.id,projectName:t.name})})),e.taskPagination.total=a.data.pagination.total})).finally((function(){e.taskTableLoading=!1}))},submitTask:function(){var t=this;this.$refs.taskForm.validate((function(e){if(!e)return!1;t.taskFormProps.disabled=!0,0===t.taskFormData.id?Object(h["c"])(t.taskFormData).then((function(e){t.$message.success("添加成功")})).finally((function(){t.taskFormProps.disabled=!1,t.taskDialogVisible=!1})):Object(h["f"])(t.taskFormData).then((function(e){t.$message.success("修改成功");var a=t.taskTableData.findIndex((function(e){return e.id===t.taskFormData.id}));t.taskTableData[a]["commitId"]=t.taskFormData.commitId,t.taskTableData[a]["date"]=t.taskFormData.date,t.taskTableData[a]["editor"]=t.$store.getters.name,t.taskTableData[a]["editorId"]=t.$store.getters.uid,t.taskTableData[a]["updateTime"]=Object(f["b"])(new Date)})).finally((function(){t.taskFormProps.disabled=!1,t.taskDialogVisible=!1}))}))},removeProjectTask:function(t){var e=this;this.$confirm("此操作删除"+t.projectName+"的定时任务, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(h["o"])(t.id).then((function(a){var r=e.taskTableData.findIndex((function(e){return e.id===t.id}));e.taskTableData[r]["state"]=0,e.taskTableData[r]["editor"]=e.$store.getters.name,e.taskTableData[r]["editorId"]=e.$store.getters.uid,e.taskTableData[r]["updateTime"]=Object(f["b"])(new Date)}))})).catch((function(){e.$message.info("已取消操作")}))},rollback:function(t){var e=this;this.$confirm("此操作将重新构建"+t.commit+", 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){g(t.projectId,t.commit).then((function(a){var r=e.tableData.findIndex((function(e){return e.id===t.projectId}));e.tableData[r].deployState=1,e.commitDialogVisible=!1,e.dialogVisible=!1}))})).catch((function(){e.$message.info("已取消重新构建")}))},formatDetail:function(t){return t?t.replace(/\n|(\r\n)/g,"<br>"):""}}},k=y,T=(a("a6a8"),a("4023")),D=Object(T["a"])(k,r,i,!1,null,"663d5254",null);e["default"]=D.exports},"9cea":function(t,e,a){"use strict";e["a"]={data:function(){return{tableHeight:window.innerHeight-160}},mounted:function(){try{var t=document.getElementsByClassName("app-bar")[0].clientHeight+140,e=window.innerHeight-t;this.tableHeight=e}catch(a){console.log("缺少节点app-bar")}}}},a6a8:function(t,e,a){"use strict";var r=a("c064"),i=a.n(r);i.a},c064:function(t,e,a){},e204:function(t,e,a){"use strict";var r=a("e46b"),i=a("013f")(6),n="findIndex",o=!0;n in[]&&Array(1)[n]((function(){o=!1})),r(r.P+r.F*o,"Array",{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a("0e8b")(n)}}]);