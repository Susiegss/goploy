(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00d7deae"],{"23ba":function(t,e,a){"use strict";a.d(e,"c",function(){return r}),a.d(e,"d",function(){return i}),a.d(e,"a",function(){return n}),a.d(e,"b",function(){return l}),a.d(e,"e",function(){return s});var o=a("b775");function r(){return Object(o["a"])({url:"/group/getList",method:"get",params:{}})}function i(){return Object(o["a"])({url:"/group/getOption",method:"get"})}function n(t){return Object(o["a"])({url:"/group/add",method:"post",data:t})}function l(t){return Object(o["a"])({url:"/group/edit",method:"post",data:t})}function s(t){return Object(o["a"])({url:"/group/remove",method:"post",data:{id:t}})}},"3ea3":function(t,e,a){"use strict";var o=a("e21b"),r=a.n(o);r.a},"9b7a":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"app-container"},[a("el-row",{staticClass:"app-bar",attrs:{type:"flex"}},[a("el-select",{attrs:{placeholder:"选择分组"},on:{change:t.handleGroupChange},model:{value:t.groupId,callback:function(e){t.groupId=e},expression:"groupId"}},[a("el-option",{attrs:{label:"默认",value:0}}),t._v(" "),t._l(t.groupOption,function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.id}})})],2),t._v(" "),a("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入项目名称"},on:{change:t.getList},model:{value:t.projectName,callback:function(e){t.projectName=e},expression:"projectName"}})],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{border:"",stripe:"","highlight-current-row":"",data:t.tableData}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"160"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"项目名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"group",label:"分组"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t.findGroupName(e.row.groupId))+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"environment",label:"环境"}}),t._v(" "),a("el-table-column",{attrs:{prop:"branch",label:"分支"}}),t._v(" "),a("el-table-column",{attrs:{prop:"publisherName",label:"构建者",width:"160"}}),t._v(" "),a("el-table-column",{attrs:{prop:"publishState",label:"状态",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.publishState?a("el-tag",{attrs:{type:"success",effect:"plain"}},[t._v("成功")]):a("el-tag",{attrs:{type:"danger",effect:"plain"}},[t._v("失败")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"updateTime",label:"上次构建时间",width:"160"}}),t._v(" "),a("el-table-column",{attrs:{prop:"operation",label:"操作",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.publish(e.row.id)}}},[t._v("构建")]),t._v(" "),a("el-button",{attrs:{type:"success"},on:{click:function(a){return t.handleDetail(e.row)}}},[t._v("详情")]),t._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(a){return t.handleRollback(e.row.id)}}},[t._v("回滚")])]}}])})],1),t._v(" "),a("el-dialog",{attrs:{title:"构建记录",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-radio-group",{on:{change:t.handleDetailChange},model:{value:t.publishToken,callback:function(e){t.publishToken=e},expression:"publishToken"}},t._l(t.gitTraceList,function(e,o){return a("el-row",{key:o},[a("el-row",{staticStyle:{margin:"5px 0"}},[1===e.publishState?a("el-tag",{attrs:{type:"success",effect:"plain"}},[t._v("成功")]):a("el-tag",{attrs:{type:"danger",effect:"plain"}},[t._v("失败")]),t._v(" "),a("el-radio",{staticStyle:{"margin-left":"10px","margin-right":"5px"},attrs:{label:e.token,border:""}},[t._v("commitID: "+t._s(e.commit))]),t._v(" "),a("el-button",{attrs:{type:"danger",icon:"el-icon-refresh",plain:""},on:{click:function(a){return t.rollback(e)}}})],1)],1)}),1)],1),t._v(" "),a("el-col",{staticClass:"project-detail",attrs:{span:16}},[t._l(t.publishLocalTraceList,function(e,o){return a("el-row",{key:o},[2===e.type?a("el-row",[a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("git同步信息")]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("时间: "+t._s(e.createTime))]),t._v(" "),a("el-row",[t._v("commit: "+t._s(e.commit))]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[0===e.state?a("el-tag",{attrs:{type:"danger",effect:"plain"}},[t._v("失败")]):t._e(),t._v(" "),a("span",{domProps:{innerHTML:t._s(t.formatDetail(e.detail))}})],1)],1):t._e(),t._v(" "),3===e.type?a("el-row",[a("hr"),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("获取代码后脚本信息")]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("时间: "+t._s(e.createTime))]),t._v(" "),a("el-row",[t._v("脚本: "),a("pre",{domProps:{innerHTML:t._s(t.formatDetail(e.script))}})]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[0===e.state?a("el-tag",{attrs:{type:"danger",effect:"plain"}},[t._v("失败")]):t._e(),t._v(" "),a("el-row",[t._v("[goploy ~]# "),a("span",{domProps:{innerHTML:t._s(t.formatDetail(e.detail))}})])],1)],1):t._e(),t._v(" "),6===e.type?a("el-row",[a("hr"),t._v(" "),a("el-row",[a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("remote服务器信息")]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("服务器: "+t._s(e.serverName))]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("时间: "+t._s(e.createTime))]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("脚本: "+t._s(e.script))]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[0===e.state?a("el-tag",{attrs:{type:"danger",effect:"plain"}},[t._v("失败")]):t._e(),t._v(" "),a("span",{domProps:{innerHTML:t._s(t.formatDetail(e.detail))}})],1)],1)],1):t._e()],1)}),t._v(" "),a("hr"),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("目标服务器")]),t._v(" "),a("el-tabs",{model:{value:t.activeRomoteTracePane,callback:function(e){t.activeRomoteTracePane=e},expression:"activeRomoteTracePane"}},t._l(t.publishRemoteTraceList,function(e,o){return a("el-tab-pane",{key:o,attrs:{label:o,name:o}},t._l(e,function(e,o){return a("el-row",{key:o},[4===e.type?a("el-row",[a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("部署前脚本")]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("时间: "+t._s(e.createTime))]),t._v(" "),a("el-row",[t._v("脚本: "),a("pre",{domProps:{innerHTML:t._s(t.formatDetail(e.script))}})]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[0===e.state?a("el-tag",{attrs:{type:"danger",effect:"plain"}},[t._v("失败")]):t._e(),t._v(" "),a("el-row",[t._v("[goploy ~]# "),a("span",{domProps:{innerHTML:t._s(t.formatDetail(e.detail))}})])],1)],1):5===e.type?a("el-row",[a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("rsync同步文件")]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("时间: "+t._s(e.createTime))]),t._v(" "),a("el-row",[t._v("命令: "+t._s(e.command))]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[0===e.state?a("el-tag",{attrs:{type:"danger",effect:"plain"}},[t._v("失败")]):t._e(),t._v(" "),a("span",{domProps:{innerHTML:t._s(t.formatDetail(e.detail))}})],1)],1):a("el-row",[a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("部署后脚本")]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("时间: "+t._s(e.createTime))]),t._v(" "),a("el-row",[t._v("脚本: "),a("pre",{domProps:{innerHTML:t._s(t.formatDetail(e.script))}})]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[0===e.state?a("el-tag",{attrs:{type:"danger",effect:"plain"}},[t._v("失败")]):t._e(),t._v(" "),a("el-row",[t._v("[goploy ~]# "),a("span",{domProps:{innerHTML:t._s(t.formatDetail(e.detail))}})])],1)],1)],1)}),1)}),1)],2)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"构建进度",visible:t.publishDialogVisible},on:{"update:visible":function(e){t.publishDialogVisible=e}}},[a("el-row",{ref:"publishSchedule",staticClass:"project-detail"},[a("el-row",[a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("git同步信息")]),t._v(" "),t._l(t.gitLog,function(e,o){return a("el-row",{key:o},[a("el-row",{staticStyle:{margin:"5px 0"}},[a("el-tag",{directives:[{name:"show",rawName:"v-show",value:0===e["state"],expression:"item['state'] === 0"}],attrs:{type:"danger",effect:"plain"}},[t._v("失败")]),t._v(" "),a("span",{domProps:{innerHTML:t._s(e["message"])}})],1)],1)})],2),t._v(" "),a("hr"),t._v(" "),a("el-row",[a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("remote服务器信息")]),t._v(" "),t._l(t.remoteLog,function(e,o){return a("el-row",{key:o},[a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("服务器: "+t._s(o))]),t._v(" "),t._l(e,function(e,o){return a("el-row",{key:o},[a("el-row",{staticStyle:{margin:"5px 0"}},[a("el-tag",{directives:[{name:"show",rawName:"v-show",value:0===e["state"],expression:"item['state'] === 0"}],attrs:{type:"danger",effect:"plain"}},[t._v("失败")]),t._v(" "),a("span",{domProps:{innerHTML:t._s(e["message"])}})],1)],1)}),t._v(" "),a("hr")],2)})],2)],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"commit管理",visible:t.commitDialogVisible},on:{"update:visible":function(e){t.commitDialogVisible=e}}},[a("el-table",{attrs:{border:"",stripe:"","highlight-current-row":"",data:t.commitTableData}},[a("el-table-column",{attrs:{prop:"commit",label:"commit",width:"290"}}),t._v(" "),a("el-table-column",{attrs:{prop:"author",label:"author"}}),t._v(" "),a("el-table-column",{attrs:{prop:"date",label:"date"}}),t._v(" "),a("el-table-column",{attrs:{prop:"message",label:"message"}}),t._v(" "),a("el-table-column",{attrs:{prop:"operation",label:"操作",width:"75"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"danger"},on:{click:function(a){return t.rollback(e.row)}}},[t._v("构建")])]}}])})],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.commitDialogVisible=!1}}},[t._v("取 消")])],1)],1)],1)},r=[],i=(a("a481"),a("7f7f"),a("7514"),a("28a5"),a("ac4d"),a("8a81"),a("456d"),a("ac6a"),a("b775"));function n(t,e){return Object(i["a"])({url:"/deploy/getList",method:"get",params:{groupId:t,projectName:e}})}function l(t){return Object(i["a"])({url:"/deploy/getDetail",method:"get",params:{lastPublishToken:t}})}function s(t){return Object(i["a"])({url:"/deploy/getPreview",method:"get",params:{projectId:t}})}function c(t){return Object(i["a"])({url:"/deploy/getCommitList",method:"get",params:{id:t}})}function u(t){return Object(i["a"])({url:"/deploy/publish",method:"post",data:{projectId:t}})}function p(t,e){return Object(i["a"])({url:"/deploy/rollback",method:"post",data:{projectId:t,commit:e}})}var m=a("23ba"),g=a("ed08"),d={data:function(){return{groupId:parseInt(localStorage.getItem("groupId"))||0,groupOption:[],projectName:"",publishToken:"",publishDialogVisible:!1,commitDialogVisible:!1,dialogVisible:!1,webSocket:null,tableData:[],commitTableData:[],gitTraceList:[],publishTraceList:[],publishLocalTraceList:[],publishRemoteTraceList:{},activeRomoteTracePane:"",gitLog:[],remoteLog:{}}},created:function(){var t=this;this.getList(),this.getGroupOption(),this.$router.afterEach(function(){t.webSocket&&t.webSocket.close()})},methods:{connectWebSocket:function(){var t=this;return this.webSocket&&this.webSocket.readyState<2?(console.log("reusing the socket connection [state = "+this.webSocket.readyState+"]: "+this.webSocket.url),Promise.resolve(this.webSocket)):new Promise(function(e,a){t.webSocket=new WebSocket("ws://"+window.location.host+"/ws/unicast"),t.webSocket.onopen=function(){console.log("socket connection is opened [state = "+t.webSocket.readyState+"]: "+t.webSocket.url),e(t.webSocket)},t.webSocket.onerror=function(t){console.error("socket connection error : ",t),a(t)},t.webSocket.onclose=function(e){t.webSocket=null,console.log("connection closed ("+e.code+")")},t.webSocket.onmessage=function(e){var a=JSON.parse(e.data);a.message=t.formatDetail(a.message),1===a.dataType?t.gitLog.push(a):(t.remoteLog[a.serverName]||t.$set(t.remoteLog,a.serverName,[]),t.remoteLog[a.serverName].push(a)),t.$nextTick(function(){var e=t.$refs.publishSchedule;e.$el.scrollTop=e.$el.scrollHeight})}})},handleGroupChange:function(t){localStorage.setItem("groupId",t),this.groupId=t,this.getList()},getGroupOption:function(){var t=this;Object(m["d"])().then(function(e){t.groupOption=e.data.groupList||[]})},getList:function(){var t=this;n(this.groupId,this.projectName).then(function(e){var a=e.data.projectList||[];a.forEach(function(t){t.createTime=Object(g["b"])(t.createTime),t.updateTime=Object(g["b"])(t.updateTime)}),t.tableData=a})},publish:function(t){var e=this;this.$confirm("此操作将部署该项目, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.gitLog=[],e.remoteLog={},e.publishDialogVisible=!0,e.connectWebSocket().then(function(a){u(t).then(function(t){setTimeout(function(){e.getList()},1e3)})})}).catch(function(){e.$message({type:"info",message:"已取消构建"})})},getDetail:function(){var t=this;l(this.publishToken).then(function(e){var a=e.data.publishTraceList||[];t.publishTraceList=a.map(function(t){return t.createTime=Object(g["b"])(t.createTime),""!==t.ext&&Object.assign(t,JSON.parse(t.ext)),t}),t.publishLocalTraceList=t.publishTraceList.filter(function(t){return t.type<4}),t.publishRemoteTraceList={};var o=!0,r=!1,i=void 0;try{for(var n,l=t.publishTraceList[Symbol.iterator]();!(o=(n=l.next()).done);o=!0){var s=n.value;s.type<4||(t.publishRemoteTraceList[s.serverName]||(t.publishRemoteTraceList[s.serverName]=[]),t.publishRemoteTraceList[s.serverName].push(s))}}catch(c){r=!0,i=c}finally{try{o||null==l.return||l.return()}finally{if(r)throw i}}t.activeRomoteTracePane=Object.keys(t.publishRemoteTraceList)[0]})},handleDetail:function(t){var e=this;this.dialogVisible=!0,this.publishToken=t.lastPublishToken,s(t.id).then(function(t){var a=t.data.gitTraceList||[];e.gitTraceList=a.map(function(t){return""!==t.ext&&Object.assign(t,JSON.parse(t.ext)),t.commit=t["commit"]?t["commit"].substring(0,6):"",t})}),this.getDetail()},handleDetailChange:function(t){this.publishToken=t,this.getDetail()},handleRollback:function(t){var e=this;c(t).then(function(a){e.commitTableData=a.data.commitList.map(function(e){var a=e.split("`");return{projectId:t,commit:a[0],author:a[1],date:a[2],message:a[3]}}),e.commitDialogVisible=!0})},rollback:function(t){var e=this;this.$confirm("此操作将重新构建"+t.commit+", 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.gitLog=[],e.remoteLog={},e.dialogVisible=!1,e.publishDialogVisible=!0,e.connectWebSocket().then(function(a){p(t.projectId,t.commit).then(function(t){e.$message({message:t.message,type:"success",duration:5e3}),setTimeout(function(){e.getList()},1e3)})})}).catch(function(){e.$message({type:"info",message:"已取消重新构建"})})},findGroupName:function(t){var e=this.groupOption.find(function(e){return e.id===t});return e?e["name"]:"默认"},formatDetail:function(t){return t?t.replace(/\n|(\r\n)/g,"<br>"):""}}},b=d,v=(a("3ea3"),a("2877")),f=Object(v["a"])(b,o,r,!1,null,"70c32226",null);e["default"]=f.exports},e21b:function(t,e,a){},ed08:function(t,e,a){"use strict";a.d(e,"b",function(){return r}),a.d(e,"a",function(){return i});a("ac6a"),a("c5f6"),a("28a5"),a("a481"),a("6b54");var o=a("7618");function r(t,e){if(0===arguments.length)return null;var a,r=e||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(o["a"])(t)?a=t:("string"===typeof t&&/^[0-9]+$/.test(t)&&(t=parseInt(t)),"number"===typeof t&&10===t.toString().length&&(t*=1e3),a=new Date(t));var i={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()},n=r.replace(/{(y|m|d|h|i|s|a)+}/g,function(t,e){var a=i[e];return"a"===e?["日","一","二","三","四","五","六"][a]:(t.length>0&&a<10&&(a="0"+a),a||0)});return n}function i(t){if(0===t)return"0 B";var e=1024,a=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(t)/Math.log(e));return(t/Math.pow(e,o)).toPrecision(3)+" "+a[o]}}}]);