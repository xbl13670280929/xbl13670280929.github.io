(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65c7acb2"],{"04ba":function(e,t,a){var l=a("9535"),r=Math.floor,s=function(e,t){var a=e.length,i=r(a/2);return a<8?n(e,t):o(e,s(l(e,0,i),t),s(l(e,i),t),t)},n=function(e,t){var a,l,r=e.length,s=1;while(s<r){l=s,a=e[s];while(l&&t(e[l-1],a)>0)e[l]=e[--l];l!==s++&&(e[l]=a)}return e},o=function(e,t,a,l){var r=t.length,s=a.length,n=0,o=0;while(n<r||o<s)e[n+o]=n<r&&o<s?l(t[n],a[o])<=0?t[n++]:a[o++]:n<r?t[n++]:a[o++];return e};e.exports=s},4877:function(e,t,a){var l=a("eede"),r=l.match(/AppleWebKit\/(\d+)\./);e.exports=!!r&&+r[1]},"6ba1":function(e,t,a){"use strict";var l=a("a5ba"),r=a("e7ec"),s=a("750a"),n=a("3493"),o=a("67e7"),i=a("78f8"),c=a("b68d"),v=a("04ba"),u=a("a3a6"),d=a("dee8"),h=a("a0c3"),f=a("8f74"),b=a("4877"),_=[],m=r(_.sort),p=r(_.push),C=c((function(){_.sort(void 0)})),g=c((function(){_.sort(null)})),w=u("sort"),k=!c((function(){if(f)return f<70;if(!(d&&d>3)){if(h)return!0;if(b)return b<603;var e,t,a,l,r="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:a=3;break;case 68:case 71:a=4;break;default:a=2}for(l=0;l<47;l++)_.push({k:t+l,v:a})}for(_.sort((function(e,t){return t.v-e.v})),l=0;l<_.length;l++)t=_[l].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return"DGBEFHACIJK"!==r}})),x=C||!g||!w||!k,S=function(e){return function(t,a){return void 0===a?-1:void 0===t?1:void 0!==e?+e(t,a)||0:i(t)>i(a)?1:-1}};l({target:"Array",proto:!0,forced:x},{sort:function(e){void 0!==e&&s(e);var t=n(this);if(k)return void 0===e?m(t):m(t,e);var a,l,r=[],i=o(t);for(l=0;l<i;l++)l in t&&p(r,t[l]);v(r,S(e)),a=r.length,l=0;while(l<a)t[l]=r[l++];while(l<i)delete t[l++];return t}})},a0c3:function(e,t,a){var l=a("eede");e.exports=/MSIE|Trident/.test(l)},d370:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",{staticClass:"intro-title"},[e._v("Slider 滑块")]),a("p",{staticClass:"intro-content"},[e._v("通过拖动滑块在一个固定区间内进行选择")]),a("demo01"),a("h3",{staticClass:"base-title"},[e._v("Attributes")]),a("table",{staticClass:"attri-table"},[e._m(0),a("tbody",e._l(e.list1,(function(t){return a("tr",{key:t.val1},[a("td",[e._v(e._s(t.val1))]),a("td",[e._v(e._s(t.val2))]),a("td",[e._v(e._s(t.val3))]),a("td",[e._v(e._s(t.val4))]),a("td",[e._v(e._s(t.val5))])])})),0)]),a("h3",{staticClass:"base-title"},[e._v("Events")]),a("table",{staticClass:"attri-table"},[e._m(1),a("tbody",e._l(e.list2,(function(t){return a("tr",{key:t.val1},[a("td",[e._v(e._s(t.val1))]),a("td",[e._v(e._s(t.val2))]),a("td",[e._v(e._s(t.val3))])])})),0)])],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",[e._v("参数")]),a("th",[e._v("说明")]),a("th",[e._v("类型")]),a("th",[e._v("可选值")]),a("th",[e._v("默认值")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",[e._v("事件名称")]),a("th",[e._v("说明")]),a("th",[e._v("回调参数")])])])}],s=(a("6ba1"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",{staticClass:"base-title"},[e._v("基础用法")]),a("p",{staticClass:"base-content"},[e._v("在拖动滑块时，显示当前值")]),a("div",{staticClass:"demo-block",class:{"show-case-core":e.caseObj1.showCoreFlag}},[a("div",{staticClass:"demo-block-source"},[a("bh-slider",{model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),a("bh-slider",{model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}}),a("div",[e._v("value1:"+e._s(e.value1)+"--value2:"+e._s(e.value2))])],1),a("div",{staticClass:"demo-block-core"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.caseSourceVal,expression:"caseSourceVal"}],staticClass:"demo-core-box",staticStyle:{height:"220px"},attrs:{readonly:"readonly"},domProps:{value:e.caseSourceVal},on:{input:function(t){t.target.composing||(e.caseSourceVal=t.target.value)}}})]),a("div",{staticClass:"demo-block-footer"},[a("div",{staticClass:"demo-ms-arr",on:{click:function(t){return e.toggleDemoCore(e.caseObj1)}}},[a("span",{staticClass:"demo-ms-s"},[e._v("显示代码")]),a("span",{staticClass:"demo-ms-h"},[e._v("隐藏代码")])]),a("a",{staticClass:"demo-online",attrs:{href:e.caseObj1.coreUrl,target:"_blank",title:"前往 codepen.io 运行此示例"}},[e._v("在线运行")])])])])}),n=[],o='\n<template>\n<bh-slider v-model="value1"></bh-slider>\n<bh-slider v-model="value2"></bh-slider>\n<div>value1:{{value1}}--value2:{{value2}}</div>\n</template>\nexport default {\n\tdata () {\n\t\treturn {\n\t\t\tvalue1: 3,\n\t\t\tvalue2: 11,\n\t\t};\n\t},\n}\n',i={data:function(){return{caseObj1:{showCoreFlag:!1,coreUrl:"https://codepen.io/xiebaolin/pen/oNeXZaY"},caseSourceVal:o,value1:3,value2:11}},methods:{toggleDemoCore:function(e){e.showCoreFlag=!e.showCoreFlag}}},c=i,v=a("cba8"),u=Object(v["a"])(c,s,n,!1,null,"f94a56b4",null),d=u.exports,h=[{val1:"value / v-model",val2:"绑定值",val3:"boolean / string / number",val4:"--",val5:"--"}].sort((function(e,t){return e.val1.localeCompare(t.val1)})),f=[{val1:"change",val2:"值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）",val3:"改变后的值",val4:"--",val5:"--"}].sort((function(e,t){return e.val1.localeCompare(t.val1)})),b={components:{demo01:d},data:function(){return{list1:h,list2:f}}},_=b,m=Object(v["a"])(_,l,r,!1,null,"2baafbc6",null);t["default"]=m.exports},dee8:function(e,t,a){var l=a("eede"),r=l.match(/firefox\/(\d+)/i);e.exports=!!r&&+r[1]}}]);
//# sourceMappingURL=chunk-65c7acb2.cf8d7614.js.map