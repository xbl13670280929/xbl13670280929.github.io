(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5426fbbc"],{"04ba":function(t,e,a){var n=a("9535"),s=Math.floor,o=function(t,e){var a=t.length,i=s(a/2);return a<8?r(t,e):c(t,o(n(t,0,i),e),o(n(t,i),e),e)},r=function(t,e){var a,n,s=t.length,o=1;while(o<s){n=o,a=t[o];while(n&&e(t[n-1],a)>0)t[n]=t[--n];n!==o++&&(t[n]=a)}return t},c=function(t,e,a,n){var s=e.length,o=a.length,r=0,c=0;while(r<s||c<o)t[r+c]=r<s&&c<o?n(e[r],a[c])<=0?e[r++]:a[c++]:r<s?e[r++]:a[c++];return t};t.exports=o},"1d11":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"intro-title"},[t._v("Message 消息提示")]),a("p",{staticClass:"intro-content"},[t._v("常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。")]),a("demo01"),a("h3",{staticClass:"base-title"},[t._v("Attributes")]),a("table",{staticClass:"attri-table"},[t._m(0),a("tbody",t._l(t.list1,(function(e){return a("tr",{key:e.val1},[a("td",[t._v(t._s(e.val1))]),a("td",[t._v(t._s(e.val2))]),a("td",[t._v(t._s(e.val3))]),a("td",[t._v(t._s(e.val4))]),a("td",[t._v(t._s(e.val5))])])})),0)])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("参数")]),a("th",[t._v("说明")]),a("th",[t._v("类型")]),a("th",[t._v("可选值")]),a("th",[t._v("默认值")])])])}],o=(a("6ba1"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",{staticClass:"base-title"},[t._v("基础用法")]),a("p",{staticClass:"base-content"},[t._v("从顶部出现，3 秒后自动消失。")]),a("div",{staticClass:"demo-block",class:{"show-case-core":t.caseObj1.showCoreFlag}},[a("div",{staticClass:"demo-block-source"},[a("bh-button",{attrs:{type:"primary"},on:{click:function(e){return t.open1()}}},[t._v("主要按钮")]),a("bh-button",{attrs:{type:"success"},on:{click:function(e){return t.open2()}}},[t._v("成功按钮")])],1),a("div",{staticClass:"demo-block-core"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.caseSourceVal,expression:"caseSourceVal"}],staticClass:"demo-core-box",staticStyle:{height:"270px"},attrs:{readonly:"readonly"},domProps:{value:t.caseSourceVal},on:{input:function(e){e.target.composing||(t.caseSourceVal=e.target.value)}}})]),a("div",{staticClass:"demo-block-footer"},[a("div",{staticClass:"demo-ms-arr",on:{click:function(e){return t.toggleDemoCore(t.caseObj1)}}},[a("span",{staticClass:"demo-ms-s"},[t._v("显示代码")]),a("span",{staticClass:"demo-ms-h"},[t._v("隐藏代码")])]),a("a",{staticClass:"demo-online",attrs:{href:t.caseObj1.coreUrl,target:"_blank",title:"前往 codepen.io 运行此示例"}},[t._v("在线运行")])])])])}),r=[],c="\n<template>\n<bh-button type='primary' @click='open1()'>主要按钮</bh-button>\n<bh-button type='success' @click='open2()'>成功按钮</bh-button>\n</template>\nexport default {\n\tmethods: {\n\t\topen1() {\n\t\t\tthis.$message('这是一条消息提示');\n\t\t},\n\t\topen2() {\n\t\t\tthis.$message({\n\t\t\t\tmessage: '恭喜你，这是一条成功消息',\n\t\t\t\ttype: 'success'\n\t\t\t});\n\t\t},\n\t},\n}\n",i={data:function(){return{caseObj1:{showCoreFlag:!1,coreUrl:"https://codepen.io/xiebaolin/pen/zYdGwvB"},caseSourceVal:c}},methods:{toggleDemoCore:function(t){t.showCoreFlag=!t.showCoreFlag},open1:function(){this.$message("这是一条消息提示")},open2:function(){this.$message({message:"恭喜你，这是一条成功消息",type:"success"})}}},l=i,u=a("cba8"),v=Object(u["a"])(l,o,r,!1,null,"1b2177ee",null),d=v.exports,f=[{val1:"message",val2:"消息文字",val3:"string / VNode",val4:"--",val5:"--"},{val1:"type",val2:"主题",val3:"string",val4:"success/warning/info/error",val5:"info"}].sort((function(t,e){return t.val1.localeCompare(e.val1)})),h={components:{demo01:d},data:function(){return{list1:f}}},p=h,b=Object(u["a"])(p,n,s,!1,null,"15c7ce33",null);e["default"]=b.exports},4877:function(t,e,a){var n=a("eede"),s=n.match(/AppleWebKit\/(\d+)\./);t.exports=!!s&&+s[1]},"6ba1":function(t,e,a){"use strict";var n=a("a5ba"),s=a("e7ec"),o=a("750a"),r=a("3493"),c=a("67e7"),i=a("78f8"),l=a("b68d"),u=a("04ba"),v=a("a3a6"),d=a("dee8"),f=a("a0c3"),h=a("8f74"),p=a("4877"),b=[],m=s(b.sort),_=s(b.push),g=l((function(){b.sort(void 0)})),C=l((function(){b.sort(null)})),w=v("sort"),k=!l((function(){if(h)return h<70;if(!(d&&d>3)){if(f)return!0;if(p)return p<603;var t,e,a,n,s="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:a=3;break;case 68:case 71:a=4;break;default:a=2}for(n=0;n<47;n++)b.push({k:e+n,v:a})}for(b.sort((function(t,e){return e.v-t.v})),n=0;n<b.length;n++)e=b[n].k.charAt(0),s.charAt(s.length-1)!==e&&(s+=e);return"DGBEFHACIJK"!==s}})),y=g||!C||!w||!k,x=function(t){return function(e,a){return void 0===a?-1:void 0===e?1:void 0!==t?+t(e,a)||0:i(e)>i(a)?1:-1}};n({target:"Array",proto:!0,forced:y},{sort:function(t){void 0!==t&&o(t);var e=r(this);if(k)return void 0===t?m(e):m(e,t);var a,n,s=[],i=c(e);for(n=0;n<i;n++)n in e&&_(s,e[n]);u(s,x(t)),a=s.length,n=0;while(n<a)e[n]=s[n++];while(n<i)delete e[n++];return e}})},a0c3:function(t,e,a){var n=a("eede");t.exports=/MSIE|Trident/.test(n)},dee8:function(t,e,a){var n=a("eede"),s=n.match(/firefox\/(\d+)/i);t.exports=!!s&&+s[1]}}]);
//# sourceMappingURL=chunk-5426fbbc.35aeeeca.js.map