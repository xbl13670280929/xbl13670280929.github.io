(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b5b75bf"],{"3d31":function(t,o,e){"use strict";e.r(o);var s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("h2",{staticClass:"intro-title"},[t._v("MessageBox 弹框")]),e("p",{staticClass:"intro-content"},[t._v("模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。")]),e("h3",{staticClass:"base-title"},[t._v("消息提示")]),e("p",{staticClass:"base-content"},[t._v("当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。")]),e("div",{staticClass:"demo-block",class:{"show-case-core":t.caseObj1.showCoreFlag}},[e("div",{staticClass:"demo-block-source"},[e("bh-button",{attrs:{type:"primary"},on:{click:function(o){return t.open1()}}},[t._v("按钮1")]),e("bh-button",{attrs:{type:"success"},on:{click:function(o){return t.open2()}}},[t._v("按钮2")]),e("bh-button",{attrs:{type:"success"},on:{click:function(o){return t.open3()}}},[t._v("按钮3")])],1),t._m(0),e("div",{staticClass:"demo-block-footer"},[e("div",{staticClass:"demo-ms-arr",on:{click:function(o){return t.toggleDemoCore(t.caseObj1)}}},[e("span",{staticClass:"demo-ms-s"},[t._v("显示代码")]),e("span",{staticClass:"demo-ms-h"},[t._v("隐藏代码")])]),e("a",{staticClass:"demo-online",attrs:{href:t.caseObj1.coreUrl,target:"_blank",title:"前往 codepen.io 运行此示例"}},[t._v("在线运行")])])]),e("h3",{staticClass:"base-title"},[t._v("Attributes")]),t._m(1)])},n=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"demo-block-core"},[e("textarea",{staticClass:"demo-core-box",attrs:{readonly:"readonly"}},[t._v(" <bh-message type='success' message='恭喜你，这是一条成功消息'></bh-message> ")])])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("table",{staticClass:"attri-table"},[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("message")]),e("td",[t._v("消息文字")]),e("td",[t._v("string / VNode")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("type")]),e("td",[t._v("主题")]),e("td",[t._v("string")]),e("td",[t._v("success/warning/info/error")]),e("td",[t._v("info")])])])])}],c={data:function(){return{caseObj1:{showCoreFlag:!1,coreUrl:"javascript:void(0)"},caseObj2:{showCoreFlag:!1,coreUrl:"javascript:void(0)"}}},methods:{toggleDemoCore:function(t){t.showCoreFlag=!t.showCoreFlag},open1:function(){this.$alert("这是一段内容","标题名称",{confirmButtonText:"确定",callback:function(t){console.log(11,t)}})},open2:function(){this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",resolve:function(t){console.log("confirm-1",t)},reject:function(t){console.log("confirm-2",t)}}).then((function(){console.log(1122)})).catch((function(){console.log(1122)}))},open3:function(){this.$prompt("请输入邮箱","提示",{confirmButtonText:"确定",cancelButtonText:"取消",resolve:function(t,o){console.log("prompt-1",t,o)},reject:function(t,o){console.log("prompt-2",t,o)}}).then((function(t){var o=t.value;console.log("prompt-1",o)})).catch((function(t){console.log("prompt-1",t)}))}}},a=c,r=(e("a79e"),e("cba8")),i=Object(r["a"])(a,s,n,!1,null,"4f2a3ba2",null);o["default"]=i.exports},a79e:function(t,o,e){"use strict";e("fbf1")},fbf1:function(t,o,e){}}]);
//# sourceMappingURL=chunk-5b5b75bf.d8a71682.js.map