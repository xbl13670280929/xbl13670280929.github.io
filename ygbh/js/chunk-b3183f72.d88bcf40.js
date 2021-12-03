(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b3183f72"],{"04ba":function(e,t,a){var s=a("9535"),n=Math.floor,o=function(e,t){var a=e.length,c=n(a/2);return a<8?l(e,t):r(e,o(s(e,0,c),t),o(s(e,c),t),t)},l=function(e,t){var a,s,n=e.length,o=1;while(o<n){s=o,a=e[o];while(s&&t(e[s-1],a)>0)e[s]=e[--s];s!==o++&&(e[s]=a)}return e},r=function(e,t,a,s){var n=t.length,o=a.length,l=0,r=0;while(l<n||r<o)e[l+r]=l<n&&r<o?s(t[l],a[r])<=0?t[l++]:a[r++]:l<n?t[l++]:a[r++];return e};e.exports=o},"084b":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",{staticClass:"intro-title"},[e._v("InputNumber 计数器")]),a("p",{staticClass:"intro-content"},[e._v("仅允许输入标准的数字值，可定义范围")]),a("demo01"),a("demo02"),a("demo03"),a("demo04"),a("demo05"),a("demo06"),a("demo07"),a("h3",{staticClass:"base-title"},[e._v("Attributes")]),a("table",{staticClass:"attri-table"},[e._m(0),a("tbody",e._l(e.list1,(function(t){return a("tr",{key:t.val1},[a("td",[e._v(e._s(t.val1))]),a("td",[e._v(e._s(t.val2))]),a("td",[e._v(e._s(t.val3))]),a("td",[e._v(e._s(t.val4))]),a("td",[e._v(e._s(t.val5))])])})),0)]),a("h3",{staticClass:"base-title"},[e._v("Events")]),a("table",{staticClass:"attri-table"},[e._m(1),a("tbody",e._l(e.list2,(function(t){return a("tr",{key:t.val1},[a("td",[e._v(e._s(t.val1))]),a("td",[e._v(e._s(t.val2))]),a("td",[e._v(e._s(t.val3))])])})),0)])],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",[e._v("参数")]),a("th",[e._v("说明")]),a("th",[e._v("类型")]),a("th",[e._v("可选值")]),a("th",[e._v("默认值")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",[e._v("事件名称")]),a("th",[e._v("说明")]),a("th",[e._v("回调参数")])])])}],o=(a("6ba1"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",{staticClass:"base-title"},[e._v("基础用法")]),a("p",{staticClass:"base-content"}),a("div",{staticClass:"demo-block",class:{"show-case-core":e.caseObj1.showCoreFlag}},[a("div",{staticClass:"demo-block-source"},[a("bh-input-number",{attrs:{min:1,max:10,placeholder:"描述1",label:"描述文字"},on:{change:e.handleChange},model:{value:e.num1,callback:function(t){e.num1=t},expression:"num1"}}),a("div",[e._v("num1:"+e._s(e.num1))])],1),a("div",{staticClass:"demo-block-core"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.caseSourceVal,expression:"caseSourceVal"}],staticClass:"demo-core-box",staticStyle:{height:"270px"},attrs:{readonly:"readonly"},domProps:{value:e.caseSourceVal},on:{input:function(t){t.target.composing||(e.caseSourceVal=t.target.value)}}})]),a("div",{staticClass:"demo-block-footer"},[a("div",{staticClass:"demo-ms-arr",on:{click:function(t){return e.toggleDemoCore(e.caseObj1)}}},[a("span",{staticClass:"demo-ms-s"},[e._v("显示代码")]),a("span",{staticClass:"demo-ms-h"},[e._v("隐藏代码")])]),a("a",{staticClass:"demo-online",attrs:{href:e.caseObj1.coreUrl,target:"_blank",title:"前往 codepen.io 运行此示例"}},[e._v("在线运行")])])])])}),l=[],r='\n<template>\n<bh-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></bh-input-number>\n<div>num1:{{num1}}</div>\n</template>\nexport default {\n\tdata () {\n\t\treturn {\n\t\t\tnum1: 3,\n\t\t};\n\t},\n\tmethods: {\n\t\thandleChange () {\n\t\t\tconsole.log(\'handleChange\', 2);\n\t\t},\n\t},\n}\n',c={data:function(){return{caseObj1:{showCoreFlag:!1,coreUrl:"https://codepen.io/xiebaolin/pen/KKvpgjL"},caseSourceVal:r,num1:3}},methods:{toggleDemoCore:function(e){e.showCoreFlag=!e.showCoreFlag},handleChange:function(){console.log("handleChange",2)}}},i=c,u=a("cba8"),m=Object(u["a"])(i,o,l,!1,null,"0a2479e5",null),d=m.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",{staticClass:"base-title"},[e._v("禁用状态")]),a("p",{staticClass:"base-content"}),a("div",{staticClass:"demo-block",class:{"show-case-core":e.caseObj1.showCoreFlag}},[a("div",{staticClass:"demo-block-source"},[a("bh-input-number",{attrs:{disabled:!0},model:{value:e.num1,callback:function(t){e.num1=t},expression:"num1"}})],1),a("div",{staticClass:"demo-block-core"},[a("div",{staticClass:"demo-block-intro"},[e._v("disabled属性接受一个Boolean，设置为true即可禁用整个组件，如果你只需要控制数值在某一范围内，可以设置min属性和max属性，不设置min和max时，最小值为 0。")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.caseSourceVal,expression:"caseSourceVal"}],staticClass:"demo-core-box",staticStyle:{height:"160px"},attrs:{readonly:"readonly"},domProps:{value:e.caseSourceVal},on:{input:function(t){t.target.composing||(e.caseSourceVal=t.target.value)}}})]),a("div",{staticClass:"demo-block-footer"},[a("div",{staticClass:"demo-ms-arr",on:{click:function(t){return e.toggleDemoCore(e.caseObj1)}}},[a("span",{staticClass:"demo-ms-s"},[e._v("显示代码")]),a("span",{staticClass:"demo-ms-h"},[e._v("隐藏代码")])]),a("a",{staticClass:"demo-online",attrs:{href:e.caseObj1.coreUrl,target:"_blank",title:"前往 codepen.io 运行此示例"}},[e._v("在线运行")])])])])},b=[],p='\n<bh-input-number v-model="num1" :disabled="true"></bh-input-number>\n\nexport default {\n\tdata () {\n\t\treturn {\n\t\t\tnum1: 3,\n\t\t};\n\t},\n}\n',h={data:function(){return{caseObj1:{showCoreFlag:!1,coreUrl:"https://codepen.io/xiebaolin/pen/KKvpgjL"},caseSourceVal:p,num1:3}},methods:{toggleDemoCore:function(e){e.showCoreFlag=!e.showCoreFlag},handleChange:function(){console.log("handleChange",2)}}},C=h,f=Object(u["a"])(C,v,b,!1,null,"961536fa",null),g=f.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",{staticClass:"base-title"},[e._v("步数")]),a("p",{staticClass:"base-content"},[e._v("允许定义递增递减的步数控制")]),a("div",{staticClass:"demo-block",class:{"show-case-core":e.caseObj1.showCoreFlag}},[a("div",{staticClass:"demo-block-source"},[a("bh-input-number",{attrs:{step:2},model:{value:e.num1,callback:function(t){e.num1=t},expression:"num1"}}),a("div",[e._v("num1:"+e._s(e.num1))])],1),a("div",{staticClass:"demo-block-core"},[a("div",{staticClass:"demo-block-intro"},[e._v("设置step属性可以控制步长，接受一个Number。")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.caseSourceVal,expression:"caseSourceVal"}],staticClass:"demo-core-box",staticStyle:{height:"200px"},attrs:{readonly:"readonly"},domProps:{value:e.caseSourceVal},on:{input:function(t){t.target.composing||(e.caseSourceVal=t.target.value)}}})]),a("div",{staticClass:"demo-block-footer"},[a("div",{staticClass:"demo-ms-arr",on:{click:function(t){return e.toggleDemoCore(e.caseObj1)}}},[a("span",{staticClass:"demo-ms-s"},[e._v("显示代码")]),a("span",{staticClass:"demo-ms-h"},[e._v("隐藏代码")])]),a("a",{staticClass:"demo-online",attrs:{href:e.caseObj1.coreUrl,target:"_blank",title:"前往 codepen.io 运行此示例"}},[e._v("在线运行")])])])])},x=[],k='\n<bh-input-number v-model="num1" :step="2"></bh-input-number>\n<div>num1:{{num1}}</div>\n\n\nexport default {\n\tdata () {\n\t\treturn {\n\t\t\tnum1: 3,\n\t\t};\n\t},\n}\n',w={data:function(){return{caseObj1:{showCoreFlag:!1,coreUrl:"https://codepen.io/xiebaolin/pen/KKvpgjL"},caseSourceVal:k,num1:3}},methods:{toggleDemoCore:function(e){e.showCoreFlag=!e.showCoreFlag}}},S=w,j=Object(u["a"])(S,_,x,!1,null,"6bd9d978",null),V=j.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{display:"none"}},[a("h3",{staticClass:"base-title"},[e._v("严格步数")]),a("p",{staticClass:"base-content"}),a("div",{staticClass:"demo-block",class:{"show-case-core":e.caseObj1.showCoreFlag}},[a("div",{staticClass:"demo-block-source"},[a("bh-input-number",{attrs:{step:2,"step-strictly":""},model:{value:e.num1,callback:function(t){e.num1=t},expression:"num1"}}),a("div",[e._v("num1:"+e._s(e.num1))])],1),a("div",{staticClass:"demo-block-core"},[a("div",{staticClass:"demo-block-intro"},[e._v("step-strictly属性接受一个Boolean。如果这个属性被设置为true，则只能输入步数的倍数。")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.caseSourceVal,expression:"caseSourceVal"}],staticClass:"demo-core-box",staticStyle:{height:"270px"},attrs:{readonly:"readonly"},domProps:{value:e.caseSourceVal},on:{input:function(t){t.target.composing||(e.caseSourceVal=t.target.value)}}})]),a("div",{staticClass:"demo-block-footer"},[a("div",{staticClass:"demo-ms-arr",on:{click:function(t){return e.toggleDemoCore(e.caseObj1)}}},[a("span",{staticClass:"demo-ms-s"},[e._v("显示代码")]),a("span",{staticClass:"demo-ms-h"},[e._v("隐藏代码")])]),a("a",{staticClass:"demo-online",attrs:{href:e.caseObj1.coreUrl,target:"_blank",title:"前往 codepen.io 运行此示例"}},[e._v("在线运行")])])])])},y=[],F='\n<bh-input-number v-model="num1" :step="2" step-strictly></bh-input-number>\n<div>num1:{{num1}}</div>\n\n\nexport default {\n\tdata () {\n\t\treturn {\n\t\t\tnum1: 2,\n\t\t};\n\t},\n}\n',K={data:function(){return{caseObj1:{showCoreFlag:!1,coreUrl:"https://codepen.io/xiebaolin/pen/KKvpgjL"},caseSourceVal:F,num1:2}},methods:{toggleDemoCore:function(e){e.showCoreFlag=!e.showCoreFlag}}},D=K,E=Object(u["a"])(D,O,y,!1,null,"5221be3f",null),U=E.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",{staticClass:"base-title"},[e._v("精度")]),a("p",{staticClass:"base-content"}),a("div",{staticClass:"demo-block",class:{"show-case-core":e.caseObj1.showCoreFlag}},[a("div",{staticClass:"demo-block-source"},[a("bh-input-number",{attrs:{precision:2,step:.1},model:{value:e.num1,callback:function(t){e.num1=t},expression:"num1"}}),a("div",[e._v("num1:"+e._s(e.num1))])],1),a("div",{staticClass:"demo-block-core"},[a("div",{staticClass:"demo-block-intro"},[e._v("设置 precision 属性可以控制数值精度，接收一个 Number。")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.caseSourceVal,expression:"caseSourceVal"}],staticClass:"demo-core-box",staticStyle:{height:"270px"},attrs:{readonly:"readonly"},domProps:{value:e.caseSourceVal},on:{input:function(t){t.target.composing||(e.caseSourceVal=t.target.value)}}})]),a("div",{staticClass:"demo-block-footer"},[a("div",{staticClass:"demo-ms-arr",on:{click:function(t){return e.toggleDemoCore(e.caseObj1)}}},[a("span",{staticClass:"demo-ms-s"},[e._v("显示代码")]),a("span",{staticClass:"demo-ms-h"},[e._v("隐藏代码")])]),a("a",{staticClass:"demo-online",attrs:{href:e.caseObj1.coreUrl,target:"_blank",title:"前往 codepen.io 运行此示例"}},[e._v("在线运行")])])])])},$=[],z='\n<bh-input-number v-model="num1" :precision="2" :step="2"></bh-input-number>\n<div>num1:{{num1}}</div>\n\n\nexport default {\n\tdata () {\n\t\treturn {\n\t\t\tnum1: 1,\n\t\t};\n\t},\n}\n',L={data:function(){return{caseObj1:{showCoreFlag:!1,coreUrl:"https://codepen.io/xiebaolin/pen/KKvpgjL"},caseSourceVal:z,num1:1}},methods:{toggleDemoCore:function(e){e.showCoreFlag=!e.showCoreFlag}}},P=L,A=Object(u["a"])(P,N,$,!1,null,"bde7a23a",null),I=A.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",{staticClass:"base-title"},[e._v("尺寸")]),a("p",{staticClass:"base-content"},[e._v("额外提供了 medium、small、mini 三种尺寸的数字输入框")]),a("div",{staticClass:"demo-block",class:{"show-case-core":e.caseObj1.showCoreFlag}},[a("div",{staticClass:"demo-block-source"},[a("bh-input-number",{model:{value:e.num1,callback:function(t){e.num1=t},expression:"num1"}}),a("bh-input-number",{attrs:{size:"medium"},model:{value:e.num2,callback:function(t){e.num2=t},expression:"num2"}}),a("bh-input-number",{attrs:{size:"small"},model:{value:e.num3,callback:function(t){e.num3=t},expression:"num3"}}),a("bh-input-number",{attrs:{size:"mini"},model:{value:e.num4,callback:function(t){e.num4=t},expression:"num4"}})],1),a("div",{staticClass:"demo-block-core"},[a("div",{staticClass:"demo-block-intro"},[e._v("step-strictly属性接受一个Boolean。如果这个属性被设置为true，则只能输入步数的倍数。")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.caseSourceVal,expression:"caseSourceVal"}],staticClass:"demo-core-box",staticStyle:{height:"270px"},attrs:{readonly:"readonly"},domProps:{value:e.caseSourceVal},on:{input:function(t){t.target.composing||(e.caseSourceVal=t.target.value)}}})]),a("div",{staticClass:"demo-block-footer"},[a("div",{staticClass:"demo-ms-arr",on:{click:function(t){return e.toggleDemoCore(e.caseObj1)}}},[a("span",{staticClass:"demo-ms-s"},[e._v("显示代码")]),a("span",{staticClass:"demo-ms-h"},[e._v("隐藏代码")])]),a("a",{staticClass:"demo-online",attrs:{href:e.caseObj1.coreUrl,target:"_blank",title:"前往 codepen.io 运行此示例"}},[e._v("在线运行")])])])])},J=[],M='\n<bh-input-number v-model="num1"></bh-input-number>\n<bh-input-number v-model="num2" size="medium"></bh-input-number>\n<bh-input-number v-model="num3" size="small"></bh-input-number>\n<bh-input-number v-model="num4" size="mini"></bh-input-number>\n\n\nexport default {\n\tdata () {\n\t\treturn {\n\t\t\tnum1: 1,\n\t\t\tnum2: 2,\n\t\t\tnum3: 3,\n\t\t\tnum4: 4,\n\t\t};\n\t},\n}\n',G={data:function(){return{caseObj1:{showCoreFlag:!1,coreUrl:"https://codepen.io/xiebaolin/pen/KKvpgjL"},caseSourceVal:M,num1:1,num2:2,num3:3,num4:4}},methods:{toggleDemoCore:function(e){e.showCoreFlag=!e.showCoreFlag}}},H=G,T=(a("8ac36"),Object(u["a"])(H,B,J,!1,null,"16a0650c",null)),W=T.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",{staticClass:"base-title"},[e._v("按钮位置")]),a("p",{staticClass:"base-content"}),a("div",{staticClass:"demo-block",class:{"show-case-core":e.caseObj1.showCoreFlag}},[a("div",{staticClass:"demo-block-source"},[a("bh-input-number",{attrs:{"controls-position":"right"},model:{value:e.num1,callback:function(t){e.num1=t},expression:"num1"}})],1),a("div",{staticClass:"demo-block-core"},[a("div",{staticClass:"demo-block-intro"},[e._v("设置 controls-position 属性可以控制按钮位置。")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.caseSourceVal,expression:"caseSourceVal"}],staticClass:"demo-core-box",staticStyle:{height:"160px"},attrs:{readonly:"readonly"},domProps:{value:e.caseSourceVal},on:{input:function(t){t.target.composing||(e.caseSourceVal=t.target.value)}}})]),a("div",{staticClass:"demo-block-footer"},[a("div",{staticClass:"demo-ms-arr",on:{click:function(t){return e.toggleDemoCore(e.caseObj1)}}},[a("span",{staticClass:"demo-ms-s"},[e._v("显示代码")]),a("span",{staticClass:"demo-ms-h"},[e._v("隐藏代码")])]),a("a",{staticClass:"demo-online",attrs:{href:e.caseObj1.coreUrl,target:"_blank",title:"前往 codepen.io 运行此示例"}},[e._v("在线运行")])])])])},Q=[],R='\n<bh-input-number v-model="num1" controls-position="right"></bh-input-number>\n\n\nexport default {\n\tdata () {\n\t\treturn {\n\t\t\tnum1: 2,\n\t\t};\n\t},\n}\n',X={data:function(){return{caseObj1:{showCoreFlag:!1,coreUrl:"https://codepen.io/xiebaolin/pen/KKvpgjL"},caseSourceVal:R,num1:2}},methods:{toggleDemoCore:function(e){e.showCoreFlag=!e.showCoreFlag}}},Y=X,Z=Object(u["a"])(Y,q,Q,!1,null,"2fa1845d",null),ee=Z.exports,te=[{val1:"value / v-model",val2:"绑定值",val3:"number",val4:"--",val5:"0"},{val1:"step",val2:"计数器步长",val3:"number",val4:"--",val5:"1"},{val1:"size",val2:"计数器尺寸",val3:"string",val4:"large, small",val5:"--"},{val1:"disabled",val2:"是否禁用计数器",val3:"boolean",val4:"--",val5:"false"},{val1:"controls-position",val2:"控制按钮位置",val3:"string",val4:"right",val5:"--"},{val1:"placeholder",val2:"输入框默认 placeholder",val3:"string",val4:"--",val5:"--"},{val1:"precision",val2:"数值精度",val3:"number",val4:"--",val5:"--"}].sort((function(e,t){return e.val1.localeCompare(t.val1)})),ae=[{val1:"change",val2:"绑定值被改变时触发",val3:"currentValue, oldValue",val4:"--",val5:"--"},{val1:"blur",val2:"在组件 Input 失去焦点时触发",val3:"(event: Event)",val4:"--",val5:"--"},{val1:"focus",val2:"在组件 Input 获得焦点时触发",val3:"(event: Event)",val4:"--",val5:"--"}].sort((function(e,t){return e.val1.localeCompare(t.val1)})),se={components:{demo01:d,demo02:g,demo03:V,demo04:U,demo05:I,demo06:W,demo07:ee},data:function(){return{list1:te,list2:ae}}},ne=se,oe=Object(u["a"])(ne,s,n,!1,null,"1d476ecc",null);t["default"]=oe.exports},4877:function(e,t,a){var s=a("eede"),n=s.match(/AppleWebKit\/(\d+)\./);e.exports=!!n&&+n[1]},"6ba1":function(e,t,a){"use strict";var s=a("a5ba"),n=a("e7ec"),o=a("750a"),l=a("3493"),r=a("67e7"),c=a("78f8"),i=a("b68d"),u=a("04ba"),m=a("a3a6"),d=a("dee8"),v=a("a0c3"),b=a("8f74"),p=a("4877"),h=[],C=n(h.sort),f=n(h.push),g=i((function(){h.sort(void 0)})),_=i((function(){h.sort(null)})),x=m("sort"),k=!i((function(){if(b)return b<70;if(!(d&&d>3)){if(v)return!0;if(p)return p<603;var e,t,a,s,n="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:a=3;break;case 68:case 71:a=4;break;default:a=2}for(s=0;s<47;s++)h.push({k:t+s,v:a})}for(h.sort((function(e,t){return t.v-e.v})),s=0;s<h.length;s++)t=h[s].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}})),w=g||!_||!x||!k,S=function(e){return function(t,a){return void 0===a?-1:void 0===t?1:void 0!==e?+e(t,a)||0:c(t)>c(a)?1:-1}};s({target:"Array",proto:!0,forced:w},{sort:function(e){void 0!==e&&o(e);var t=l(this);if(k)return void 0===e?C(t):C(t,e);var a,s,n=[],c=r(t);for(s=0;s<c;s++)s in t&&f(n,t[s]);u(n,S(e)),a=n.length,s=0;while(s<a)t[s]=n[s++];while(s<c)delete t[s++];return t}})},"8ac36":function(e,t,a){"use strict";a("afb1")},a0c3:function(e,t,a){var s=a("eede");e.exports=/MSIE|Trident/.test(s)},afb1:function(e,t,a){},dee8:function(e,t,a){var s=a("eede"),n=s.match(/firefox\/(\d+)/i);e.exports=!!n&&+n[1]}}]);
//# sourceMappingURL=chunk-b3183f72.d88bcf40.js.map