(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23ad0601"],{"3d31":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h2",{staticClass:"intro-title"},[t._v("MessageBox 弹框")]),o("p",{staticClass:"intro-content"},[t._v("模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。")]),o("h3",{staticClass:"base-title"},[t._v("消息提示")]),o("p",{staticClass:"base-content"},[t._v("当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。")]),o("div",{staticClass:"demo-block",class:{"show-case-core":t.caseObj1.showCoreFlag}},[o("div",{staticClass:"demo-block-source"},[o("bh-button",{attrs:{type:"primary"},on:{click:function(e){return t.open1()}}},[t._v("按钮1")]),o("bh-button",{attrs:{type:"success"},on:{click:function(e){return t.open2()}}},[t._v("按钮2")]),o("bh-button",{attrs:{type:"success"},on:{click:function(e){return t.open3()}}},[t._v("按钮3")])],1),t._m(0),o("div",{staticClass:"demo-block-footer"},[o("div",{staticClass:"demo-ms-arr",on:{click:function(e){return t.toggleDemoCore(t.caseObj1)}}},[o("span",{staticClass:"demo-ms-s"},[t._v("显示代码")]),o("span",{staticClass:"demo-ms-h"},[t._v("隐藏代码")])]),o("a",{staticClass:"demo-online",attrs:{href:t.caseObj1.coreUrl,target:"_blank",title:"前往 codepen.io 运行此示例"}},[t._v("在线运行")])])]),o("h3",{staticClass:"base-title"},[t._v("Attributes")]),t._m(1)])},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"demo-block-core"},[o("textarea",{staticClass:"demo-core-box",attrs:{readonly:"readonly"}},[t._v(" <bh-message type='success' message='恭喜你，这是一条成功消息'></bh-message> ")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("table",{staticClass:"attri-table"},[o("thead",[o("tr",[o("th",[t._v("参数")]),o("th",[t._v("说明")]),o("th",[t._v("类型")]),o("th",[t._v("可选值")]),o("th",[t._v("默认值")])])]),o("tbody",[o("tr",[o("td",[t._v("message")]),o("td",[t._v("消息文字")]),o("td",[t._v("string / VNode")]),o("td",[t._v("—")]),o("td",[t._v("—")])]),o("tr",[o("td",[t._v("type")]),o("td",[t._v("主题")]),o("td",[t._v("string")]),o("td",[t._v("success/warning/info/error")]),o("td",[t._v("info")])])])])}],c={data:function(){return{caseObj1:{showCoreFlag:!1,coreUrl:"https://codepen.io/xiebaolin/pen/BadNRjG"},caseObj2:{showCoreFlag:!1,coreUrl:"javascript:void(0)"}}},methods:{toggleDemoCore:function(t){t.showCoreFlag=!t.showCoreFlag},open1:function(){this.$alert("这是一段内容","标题名称",{confirmButtonText:"确定",callback:function(t){console.log(11,t)}})},open2:function(){this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",resolve:function(t){console.log("confirm-1",t)},reject:function(t){console.log("confirm-2",t)}}).then((function(){console.log(1122)})).catch((function(){console.log(1122)}))},open3:function(){this.$prompt("请输入邮箱","提示",{confirmButtonText:"确定",cancelButtonText:"取消",resolve:function(t,e){console.log("prompt-1",t,e)},reject:function(t,e){console.log("prompt-2",t,e)}}).then((function(t){var e=t.value;console.log("prompt-1",e)})).catch((function(t){console.log("prompt-1",t)}))}}},a=c,r=(o("a341"),o("cba8")),i=Object(r["a"])(a,s,n,!1,null,"742e9f0d",null);e["default"]=i.exports},a341:function(t,e,o){"use strict";o("ea60")},ea60:function(t,e,o){}}]);
//# sourceMappingURL=chunk-23ad0601.16058065.js.map