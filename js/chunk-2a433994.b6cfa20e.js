(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a433994"],{"09f9":function(t,a,e){},"0f83":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h2",{staticClass:"intro-title"},[t._v("Pagination 分页")]),e("p",{staticClass:"intro-content"},[t._v("当数据量过多时，使用分页分解数据。")]),e("h3",{staticClass:"base-title"},[t._v("基础用法")]),e("div",{staticClass:"demo-block",class:{"show-case-core":t.caseObj1.showCoreFlag}},[e("div",{staticClass:"demo-block-source"},[e("bh-pagination",{attrs:{"page-size":10,"page-count":t.pagecount1,layout:"prev, pager, next",total:41},on:{change:t.pageChange1}}),e("div",[t._v(t._s(t.pagecount1))]),e("bh-pagination",{attrs:{"page-size":20,"page-count":t.pagecount2,layout:"prev, pager, next",total:401},on:{change:t.pageChange2}}),e("div",[t._v(t._s(t.pagecount2))])],1),t._m(0),e("div",{staticClass:"demo-block-footer"},[e("div",{staticClass:"demo-ms-arr",on:{click:function(a){return t.toggleDemoCore(t.caseObj1)}}},[e("span",{staticClass:"demo-ms-s"},[t._v("显示代码")]),e("span",{staticClass:"demo-ms-h"},[t._v("隐藏代码")])]),e("a",{staticClass:"demo-online",attrs:{href:t.caseObj1.coreUrl,target:"_blank",title:"前往 codepen.io 运行此示例"}},[t._v("在线运行")])])]),e("h3",{staticClass:"base-title"},[t._v("Attributes")]),t._m(1),e("h3",{staticClass:"base-title"},[t._v("Radio Events")]),t._m(2)])},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"demo-block-core"},[e("textarea",{staticClass:"demo-core-box",attrs:{readonly:"readonly"}},[t._v(' <bh-pagination layout="prev, pager, next" :total="50"></bh-pagination> ')]),e("textarea",{staticClass:"demo-core-box",attrs:{readonly:"readonly"}},[t._v(' <bh-pagination layout="prev, pager, next" :total="50"></bh-pagination> ')])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",{staticClass:"attri-table"},[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("title")]),e("td",[t._v("标题")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("type")]),e("td",[t._v("主题")]),e("td",[t._v("string")]),e("td",[t._v("success/warning/info/error")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("closable")]),e("td",[t._v("是否可关闭")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",{staticClass:"attri-table"},[e("thead",[e("tr",[e("th",[t._v("事件名称")]),e("th",[t._v("说明")]),e("th",[t._v("回调参数")])])]),e("tbody",[e("tr",[e("td",[t._v("close")]),e("td",[t._v("关闭alert时触发的事件")]),e("td",[t._v("—")])])])])}],n={props:{msg:String},data:function(){return{caseObj1:{showCoreFlag:!1,coreUrl:"javascript:void(0)"},caseObj2:{showCoreFlag:!1,coreUrl:"javascript:void(0)"},pagecount1:1,pagecount2:3}},methods:{toggleDemoCore:function(t){t.showCoreFlag=!t.showCoreFlag},pageChange1:function(t){console.log("pageChange1",t),this.pagecount1=t},pageChange2:function(t){console.log("pageChange2",t),this.pagecount2=t}}},r=n,c=(e("b5e2"),e("cba8")),i=Object(c["a"])(r,s,o,!1,null,"93fde0f6",null);a["default"]=i.exports},b5e2:function(t,a,e){"use strict";e("09f9")}}]);
//# sourceMappingURL=chunk-2a433994.b6cfa20e.js.map