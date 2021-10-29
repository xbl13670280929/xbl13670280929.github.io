(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ef62a2c"],{"656f":function(t,e,a){},"82cd":function(t,e,a){"use strict";a("656f")},c226:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"intro-title"},[t._v("Dialog 对话框")]),a("p",{staticClass:"intro-content"},[t._v("在保留当前页面状态的情况下，告知用户并承载相关操作。")]),a("h3",{staticClass:"base-title"},[t._v("基础用法")]),a("p",{staticClass:"base-content"},[t._v("Dialog 弹出一个对话框，适合需要定制性更大的场景。")]),a("div",{staticClass:"demo-block",class:{"show-case-core":t.caseObj1.showCoreFlag}},[a("div",{staticClass:"demo-block-source"},[a("bh-button",{attrs:{type:"text"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("点击打开 Dialog:"+t._s(t.dialogVisible))]),a("bh-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("span",[t._v("这是一段信息")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("bh-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),a("bh-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 定")])],1)])],1),t._m(0),a("div",{staticClass:"demo-block-footer"},[a("div",{staticClass:"demo-ms-arr",on:{click:function(e){return t.toggleDemoCore(t.caseObj1)}}},[a("span",{staticClass:"demo-ms-s"},[t._v("显示代码")]),a("span",{staticClass:"demo-ms-h"},[t._v("隐藏代码")])]),a("a",{staticClass:"demo-online",attrs:{href:t.caseObj1.coreUrl,target:"_blank",title:"前往 codepen.io 运行此示例"}},[t._v("在线运行")])])]),a("h3",{staticClass:"base-title"},[t._v("Attributes")]),t._m(1),a("h3",{staticClass:"base-title"},[t._v("Events")]),t._m(2)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"demo-block-core"},[a("textarea",{staticClass:"demo-core-box",attrs:{readonly:"readonly"}},[t._v(' <bh-alert title="成功提示的文案" type="success"></bh-alert> ')]),a("textarea",{staticClass:"demo-core-box",attrs:{readonly:"readonly"}},[t._v(' <bh-alert title="消息提示的文案" type="info"></bh-alert> ')]),a("textarea",{staticClass:"demo-core-box",attrs:{readonly:"readonly"}},[t._v(' <bh-alert title="警告提示的文案" type="warning"></bh-alert> ')]),a("textarea",{staticClass:"demo-core-box",attrs:{readonly:"readonly"}},[t._v(' <bh-alert title="错误提示的文案" type="error"></bh-alert> ')])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"attri-table"},[a("thead",[a("tr",[a("th",[t._v("参数")]),a("th",[t._v("说明")]),a("th",[t._v("类型")]),a("th",[t._v("可选值")]),a("th",[t._v("默认值")])])]),a("tbody",[a("tr",[a("td",[t._v("visible")]),a("td",[t._v("是否显示 Dialog，支持 .sync 修饰符")]),a("td",[t._v("boolean")]),a("td",[t._v("—")]),a("td",[t._v("false")])]),a("tr",[a("td",[t._v("title")]),a("td",[t._v("Dialog 的标题")]),a("td",[t._v("string")]),a("td",[t._v("—")]),a("td",[t._v("—")])]),a("tr",[a("td",[t._v("width")]),a("td",[t._v("Dialog 的宽度")]),a("td",[t._v("string")]),a("td",[t._v("—")]),a("td",[t._v("50%")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"attri-table"},[a("thead",[a("tr",[a("th",[t._v("事件名称")]),a("th",[t._v("说明")]),a("th",[t._v("回调参数")])])]),a("tbody",[a("tr",[a("td",[t._v("close")]),a("td",[t._v("Dialog 关闭的回调")]),a("td",[t._v("—")])])])])}],l={data:function(){return{caseObj1:{showCoreFlag:!1,coreUrl:"https://codepen.io/xiebaolin/pen/VwzYGaK"},dialogVisible:!1}},methods:{toggleDemoCore:function(t){t.showCoreFlag=!t.showCoreFlag},handleClose:function(){console.log("handleClose",11)}}},i=l,r=(a("82cd"),a("cba8")),c=Object(r["a"])(i,s,o,!1,null,"d8d023ca",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2ef62a2c.fb071fdc.js.map