(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a5d9e234"],{"04ba":function(t,e,a){var s=a("9535"),o=Math.floor,r=function(t,e){var a=t.length,c=o(a/2);return a<8?l(t,e):n(t,r(s(t,0,c),e),r(s(t,c),e),e)},l=function(t,e){var a,s,o=t.length,r=1;while(r<o){s=r,a=t[r];while(s&&e(t[s-1],a)>0)t[s]=t[--s];s!==r++&&(t[s]=a)}return t},n=function(t,e,a,s){var o=e.length,r=a.length,l=0,n=0;while(l<o||n<r)t[l+n]=l<o&&n<r?s(e[l],a[n])<=0?e[l++]:a[n++]:l<o?e[l++]:a[n++];return t};t.exports=r},4877:function(t,e,a){var s=a("eede"),o=s.match(/AppleWebKit\/(\d+)\./);t.exports=!!o&&+o[1]},"5a07":function(t,e,a){},6613:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"intro-title"},[t._v("Tag 标签")]),a("p",{staticClass:"intro-content"},[t._v("用于标记和选择。")]),a("demo01"),a("demo02"),a("h3",{staticClass:"base-title"},[t._v("Attributes")]),a("table",{staticClass:"attri-table"},[t._m(0),a("tbody",t._l(t.list1,(function(e){return a("tr",{key:e.val1},[a("td",[t._v(t._s(e.val1))]),a("td",[t._v(t._s(e.val2))]),a("td",[t._v(t._s(e.val3))]),a("td",[t._v(t._s(e.val4))]),a("td",[t._v(t._s(e.val5))])])})),0)]),a("h3",{staticClass:"base-title"},[t._v("Events")]),a("table",{staticClass:"attri-table"},[t._m(1),a("tbody",t._l(t.list2,(function(e){return a("tr",{key:e.val1},[a("td",[t._v(t._s(e.val1))]),a("td",[t._v(t._s(e.val2))]),a("td",[t._v(t._s(e.val3))])])})),0)])],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("参数")]),a("th",[t._v("说明")]),a("th",[t._v("类型")]),a("th",[t._v("可选值")]),a("th",[t._v("默认值")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("事件名称")]),a("th",[t._v("说明")]),a("th",[t._v("回调参数")])])])}],r=(a("6ba1"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",{staticClass:"base-title"},[t._v("基础用法")]),a("p",{staticClass:"base-content"}),a("div",{staticClass:"demo-block",class:{"show-case-core":t.caseObj1.showCoreFlag}},[a("div",{staticClass:"demo-block-source"},[a("bh-tag",[t._v("标签一")]),a("bh-tag",{attrs:{type:"success"}},[t._v("标签二")]),a("bh-tag",{attrs:{type:"info"}},[t._v("标签三")]),a("bh-tag",{attrs:{type:"warning"}},[t._v("标签四")]),a("bh-tag",{attrs:{type:"danger"}},[t._v("标签五")])],1),a("div",{staticClass:"demo-block-core"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.caseSourceVal,expression:"caseSourceVal"}],staticClass:"demo-core-box",staticStyle:{height:"100px"},attrs:{readonly:"readonly"},domProps:{value:t.caseSourceVal},on:{input:function(e){e.target.composing||(t.caseSourceVal=e.target.value)}}})]),a("div",{staticClass:"demo-block-footer"},[a("div",{staticClass:"demo-ms-arr",on:{click:function(e){return t.toggleDemoCore(t.caseObj1)}}},[a("span",{staticClass:"demo-ms-s"},[t._v("显示代码")]),a("span",{staticClass:"demo-ms-h"},[t._v("隐藏代码")])]),a("a",{staticClass:"demo-online",attrs:{href:t.caseObj1.coreUrl,target:"_blank",title:"前往 codepen.io 运行此示例"}},[t._v("在线运行")])])])])}),l=[],n='\n<bh-tag>标签一</bh-tag>\n<bh-tag type="success">标签二</bh-tag>\n<bh-tag type="info">标签三</bh-tag>\n<bh-tag type="warning">标签四</bh-tag>\n<bh-tag type="danger">标签五</bh-tag>\n',c={data:function(){return{caseObj1:{showCoreFlag:!1,coreUrl:"https://codepen.io/xiebaolin/pen/ExvjWBK"},caseSourceVal:n}},methods:{toggleDemoCore:function(t){t.showCoreFlag=!t.showCoreFlag}}},i=c,v=(a("f6ec"),a("cba8")),u=Object(v["a"])(i,r,l,!1,null,"7f424613",null),d=u.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",{staticClass:"base-title"},[t._v("可移除标签")]),a("p",{staticClass:"base-content"}),a("div",{staticClass:"demo-block",class:{"show-case-core":t.caseObj1.showCoreFlag}},[a("div",{staticClass:"demo-block-source"},[a("bh-tag",{attrs:{closable:""}},[t._v("标签一")]),a("bh-tag",{attrs:{closable:"",type:"success"}},[t._v("标签二")]),a("bh-tag",{attrs:{closable:"",type:"info"}},[t._v("标签三")]),a("bh-tag",{attrs:{closable:"",type:"warning"}},[t._v("标签四")]),a("bh-tag",{attrs:{closable:"",type:"danger"}},[t._v("标签五")])],1),a("div",{staticClass:"demo-block-core"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.caseSourceVal,expression:"caseSourceVal"}],staticClass:"demo-core-box",staticStyle:{height:"100px"},attrs:{readonly:"readonly"},domProps:{value:t.caseSourceVal},on:{input:function(e){e.target.composing||(t.caseSourceVal=e.target.value)}}})]),a("div",{staticClass:"demo-block-footer"},[a("div",{staticClass:"demo-ms-arr",on:{click:function(e){return t.toggleDemoCore(t.caseObj1)}}},[a("span",{staticClass:"demo-ms-s"},[t._v("显示代码")]),a("span",{staticClass:"demo-ms-h"},[t._v("隐藏代码")])]),a("a",{staticClass:"demo-online",attrs:{href:t.caseObj1.coreUrl,target:"_blank",title:"前往 codepen.io 运行此示例"}},[t._v("在线运行")])])])])},b=[],g='\n<bh-tag closable>标签一</bh-tag>\n<bh-tag closable type="success">标签二</bh-tag>\n<bh-tag closable type="info">标签三</bh-tag>\n<bh-tag closable type="warning">标签四</bh-tag>\n<bh-tag closable type="danger">标签五</bh-tag>\n',f={data:function(){return{caseObj1:{showCoreFlag:!1,coreUrl:"https://codepen.io/xiebaolin/pen/jOLPBjR"},caseSourceVal:g}},methods:{toggleDemoCore:function(t){t.showCoreFlag=!t.showCoreFlag}}},p=f,_=(a("cd49"),Object(v["a"])(p,h,b,!1,null,"5edc65b4",null)),m=_.exports,C=[{val1:"type",val2:"类型",val3:"string",val4:"success/info/warning/danger",val5:"--"},{val1:"closable",val2:"是否可关闭",val3:"boolean",val4:"--",val5:"false"}].sort((function(t,e){return t.val1.localeCompare(e.val1)})),w=[{val1:"click",val2:"点击 Tag 时触发的事件",val3:"--",val4:"--",val5:"--"},{val1:"close",val2:"关闭 Tag 时触发的事件",val3:"--",val4:"--",val5:"--"}].sort((function(t,e){return t.val1.localeCompare(e.val1)})),y={components:{demo01:d,demo02:m},data:function(){return{list1:C,list2:w}}},k=y,x=Object(v["a"])(k,s,o,!1,null,"63669727",null);e["default"]=x.exports},"6ba1":function(t,e,a){"use strict";var s=a("a5ba"),o=a("e7ec"),r=a("750a"),l=a("3493"),n=a("67e7"),c=a("78f8"),i=a("b68d"),v=a("04ba"),u=a("a3a6"),d=a("dee8"),h=a("a0c3"),b=a("8f74"),g=a("4877"),f=[],p=o(f.sort),_=o(f.push),m=i((function(){f.sort(void 0)})),C=i((function(){f.sort(null)})),w=u("sort"),y=!i((function(){if(b)return b<70;if(!(d&&d>3)){if(h)return!0;if(g)return g<603;var t,e,a,s,o="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:a=3;break;case 68:case 71:a=4;break;default:a=2}for(s=0;s<47;s++)f.push({k:e+s,v:a})}for(f.sort((function(t,e){return e.v-t.v})),s=0;s<f.length;s++)e=f[s].k.charAt(0),o.charAt(o.length-1)!==e&&(o+=e);return"DGBEFHACIJK"!==o}})),k=m||!C||!w||!y,x=function(t){return function(e,a){return void 0===a?-1:void 0===e?1:void 0!==t?+t(e,a)||0:c(e)>c(a)?1:-1}};s({target:"Array",proto:!0,forced:k},{sort:function(t){void 0!==t&&r(t);var e=l(this);if(y)return void 0===t?p(e):p(e,t);var a,s,o=[],c=n(e);for(s=0;s<c;s++)s in e&&_(o,e[s]);v(o,x(t)),a=o.length,s=0;while(s<a)e[s]=o[s++];while(s<c)delete e[s++];return e}})},"749d":function(t,e,a){},a0c3:function(t,e,a){var s=a("eede");t.exports=/MSIE|Trident/.test(s)},cd49:function(t,e,a){"use strict";a("749d")},dee8:function(t,e,a){var s=a("eede"),o=s.match(/firefox\/(\d+)/i);t.exports=!!o&&+o[1]},f6ec:function(t,e,a){"use strict";a("5a07")}}]);
//# sourceMappingURL=chunk-a5d9e234.7f2eb5af.js.map