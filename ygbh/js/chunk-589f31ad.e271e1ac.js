(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-589f31ad"],{"04ba":function(e,t,a){var s=a("9535"),l=Math.floor,o=function(e,t){var a=e.length,i=l(a/2);return a<8?c(e,t):n(e,o(s(e,0,i),t),o(s(e,i),t),t)},c=function(e,t){var a,s,l=e.length,o=1;while(o<l){s=o,a=e[o];while(s&&t(e[s-1],a)>0)e[s]=e[--s];s!==o++&&(e[s]=a)}return e},n=function(e,t,a,s){var l=t.length,o=a.length,c=0,n=0;while(c<l||n<o)e[c+n]=c<l&&n<o?s(t[c],a[n])<=0?t[c++]:a[n++]:c<l?t[c++]:a[n++];return e};e.exports=o},1445:function(e,t,a){},4877:function(e,t,a){var s=a("eede"),l=s.match(/AppleWebKit\/(\d+)\./);e.exports=!!l&&+l[1]},"4e1c":function(e,t,a){"use strict";a("1445")},"5f7b":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",{staticClass:"intro-title"},[e._v("Switch 开关")]),a("p",{staticClass:"intro-content"},[e._v("表示两种相互对立的状态间的切换，多用于触发「开/关」。")]),a("demo01"),a("demo02"),a("demo03"),a("demo04"),a("h3",{staticClass:"base-title"},[e._v("Attributes")]),a("table",{staticClass:"attri-table"},[e._m(0),a("tbody",e._l(e.list1,(function(t){return a("tr",{key:t.val1},[a("td",[e._v(e._s(t.val1))]),a("td",[e._v(e._s(t.val2))]),a("td",[e._v(e._s(t.val3))]),a("td",[e._v(e._s(t.val4))]),a("td",[e._v(e._s(t.val5))])])})),0)]),a("h3",{staticClass:"base-title"},[e._v("Events")]),a("table",{staticClass:"attri-table"},[e._m(1),a("tbody",e._l(e.list2,(function(t){return a("tr",{key:t.val1},[a("td",[e._v(e._s(t.val1))]),a("td",[e._v(e._s(t.val2))]),a("td",[e._v(e._s(t.val3))])])})),0)])],1)},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",[e._v("参数")]),a("th",[e._v("说明")]),a("th",[e._v("类型")]),a("th",[e._v("可选值")]),a("th",[e._v("默认值")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",[e._v("事件名称")]),a("th",[e._v("说明")]),a("th",[e._v("回调参数")])])])}],o=(a("6ba1"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",{staticClass:"base-title"},[e._v("基础用法")]),a("p",{staticClass:"base-content"}),a("div",{staticClass:"demo-block",class:{"show-case-core":e.caseObj1.showCoreFlag}},[a("div",{staticClass:"demo-block-source"},[a("bh-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),a("div",{staticClass:"demo-block-core"},[a("div",{staticClass:"demo-block-intro"},[e._v("绑定v-model到一个Boolean类型的变量。可以使用active-color属性与inactive-color属性来设置开关的背景色。")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.caseSourceVal,expression:"caseSourceVal"}],staticClass:"demo-core-box",staticStyle:{height:"200px"},attrs:{readonly:"readonly"},domProps:{value:e.caseSourceVal},on:{input:function(t){t.target.composing||(e.caseSourceVal=t.target.value)}}})]),a("div",{staticClass:"demo-block-footer"},[a("div",{staticClass:"demo-ms-arr",on:{click:function(t){return e.toggleDemoCore(e.caseObj1)}}},[a("span",{staticClass:"demo-ms-s"},[e._v("显示代码")]),a("span",{staticClass:"demo-ms-h"},[e._v("隐藏代码")])]),a("a",{staticClass:"demo-online",attrs:{href:e.caseObj1.coreUrl,target:"_blank",title:"前往 codepen.io 运行此示例"}},[e._v("在线运行")])])])])}),c=[],n='\n<bh-switch v-model="value1" active-color="#13ce66" inactive-color="#ff4949">\n</bh-switch>\n\n\nexport default {\n\tdata () {\n\t\treturn {\n\t\t\tvalue1: true,\n\t\t};\n\t},\n}\n',i={data:function(){return{caseObj1:{showCoreFlag:!1,coreUrl:"https://codepen.io/xiebaolin/pen/VwzLpBp"},caseSourceVal:n,value1:!0,value2:!1}},methods:{toggleDemoCore:function(e){e.showCoreFlag=!e.showCoreFlag}}},r=i,v=a("cba8"),u=Object(v["a"])(r,o,c,!1,null,"3a1f16aa",null),d=u.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",{staticClass:"base-title"},[e._v("文字描述")]),a("p",{staticClass:"base-content"}),a("div",{staticClass:"demo-block",class:{"show-case-core":e.caseObj1.showCoreFlag}},[a("div",{staticClass:"demo-block-source"},[a("bh-switch",{attrs:{"active-text":"按月付费","inactive-text":"按年付费"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),a("bh-switch",{staticStyle:{display:"block"},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"按月付费","inactive-text":"按年付费"},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1),a("div",{staticClass:"demo-block-core"},[a("div",{staticClass:"demo-block-intro"},[e._v("使用active-text属性与inactive-text属性来设置开关的文字描述。")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.caseSourceVal,expression:"caseSourceVal"}],staticClass:"demo-core-box",staticStyle:{height:"360px"},attrs:{readonly:"readonly"},domProps:{value:e.caseSourceVal},on:{input:function(t){t.target.composing||(e.caseSourceVal=t.target.value)}}})]),a("div",{staticClass:"demo-block-footer"},[a("div",{staticClass:"demo-ms-arr",on:{click:function(t){return e.toggleDemoCore(e.caseObj1)}}},[a("span",{staticClass:"demo-ms-s"},[e._v("显示代码")]),a("span",{staticClass:"demo-ms-h"},[e._v("隐藏代码")])]),a("a",{staticClass:"demo-online",attrs:{href:e.caseObj1.coreUrl,target:"_blank",title:"前往 codepen.io 运行此示例"}},[e._v("在线运行")])])])])},m=[],b='\n<bh-switch\n\tv-model="value1"\n\tactive-text="按月付费"\n\tinactive-text="按年付费">\n</bh-switch>\n<bh-switch\n\tstyle="display: block"\n\tv-model="value2"\n\tactive-color="#13ce66"\n\tinactive-color="#ff4949"\n\tactive-text="按月付费"\n\tinactive-text="按年付费">\n</bh-switch>\n\n\nexport default {\n\tdata () {\n\t\treturn {\n\t\t\tvalue1: true,\n\t\t\tvalue2: false,\n\t\t};\n\t},\n}\n',f={data:function(){return{caseObj1:{showCoreFlag:!1,coreUrl:"https://codepen.io/xiebaolin/pen/VwzLpBp"},caseSourceVal:b,value1:!0,value2:!1}},methods:{toggleDemoCore:function(e){e.showCoreFlag=!e.showCoreFlag}}},p=f,C=(a("4e1c"),Object(v["a"])(p,h,m,!1,null,"ec2efdbe",null)),_=C.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",{staticClass:"base-title"},[e._v("扩展的 value 类型")]),a("p",{staticClass:"base-content"}),a("div",{staticClass:"demo-block",class:{"show-case-core":e.caseObj1.showCoreFlag}},[a("div",{staticClass:"demo-block-source"},[a("bh-switch",{attrs:{"active-value":"100","inactive-value":"0"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),a("div",[e._v("value1:"+e._s(e.value1))])],1),a("div",{staticClass:"demo-block-core"},[a("div",{staticClass:"demo-block-intro"},[e._v("设置active-value和inactive-value属性，接受Boolean, String或Number类型的值。")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.caseSourceVal,expression:"caseSourceVal"}],staticClass:"demo-core-box",staticStyle:{height:"240px"},attrs:{readonly:"readonly"},domProps:{value:e.caseSourceVal},on:{input:function(t){t.target.composing||(e.caseSourceVal=t.target.value)}}})]),a("div",{staticClass:"demo-block-footer"},[a("div",{staticClass:"demo-ms-arr",on:{click:function(t){return e.toggleDemoCore(e.caseObj1)}}},[a("span",{staticClass:"demo-ms-s"},[e._v("显示代码")]),a("span",{staticClass:"demo-ms-h"},[e._v("隐藏代码")])]),a("a",{staticClass:"demo-online",attrs:{href:e.caseObj1.coreUrl,target:"_blank",title:"前往 codepen.io 运行此示例"}},[e._v("在线运行")])])])])},w=[],x='\n<bh-switch\n\tv-model="value1"\n\tactive-value="100"\n\tinactive-value="0">\n</bh-switch>\n\n\nexport default {\n\tdata () {\n\t\treturn {\n\t\t\tvalue1: true,\n\t\t};\n\t},\n}\n',k={data:function(){return{caseObj1:{showCoreFlag:!1,coreUrl:"https://codepen.io/xiebaolin/pen/VwzLpBp"},caseSourceVal:x,value1:"100",value2:!1}},methods:{toggleDemoCore:function(e){e.showCoreFlag=!e.showCoreFlag}}},S=k,V=Object(v["a"])(S,g,w,!1,null,"b5c9030c",null),j=V.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",{staticClass:"base-title"},[e._v("禁用状态")]),a("p",{staticClass:"base-content"}),a("div",{staticClass:"demo-block",class:{"show-case-core":e.caseObj1.showCoreFlag}},[a("div",{staticClass:"demo-block-source"},[a("bh-switch",{attrs:{disabled:""},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),a("bh-switch",{attrs:{disabled:""},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1),a("div",{staticClass:"demo-block-core"},[a("div",{staticClass:"demo-block-intro"},[e._v("设置disabled属性，接受一个Boolean，设置true即可禁用。")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.caseSourceVal,expression:"caseSourceVal"}],staticClass:"demo-core-box",staticStyle:{height:"300px"},attrs:{readonly:"readonly"},domProps:{value:e.caseSourceVal},on:{input:function(t){t.target.composing||(e.caseSourceVal=t.target.value)}}})]),a("div",{staticClass:"demo-block-footer"},[a("div",{staticClass:"demo-ms-arr",on:{click:function(t){return e.toggleDemoCore(e.caseObj1)}}},[a("span",{staticClass:"demo-ms-s"},[e._v("显示代码")]),a("span",{staticClass:"demo-ms-h"},[e._v("隐藏代码")])]),a("a",{staticClass:"demo-online",attrs:{href:e.caseObj1.coreUrl,target:"_blank",title:"前往 codepen.io 运行此示例"}},[e._v("在线运行")])])])])},O=[],F='\n<bh-switch v-model="value1" disabled>\n</bh-switch>\n<bh-switch v-model="value2" disabled>\n</bh-switch>\n\n\nexport default {\n\tdata () {\n\t\treturn {\n\t\t\tvalue1: true,\n\t\t\tvalue2: false,\n\t\t};\n\t},\n}\n',E={data:function(){return{caseObj1:{showCoreFlag:!1,coreUrl:"https://codepen.io/xiebaolin/pen/VwzLpBp"},caseSourceVal:F,value1:!0,value2:!1}},methods:{toggleDemoCore:function(e){e.showCoreFlag=!e.showCoreFlag}}},D=E,B=Object(v["a"])(D,y,O,!1,null,"1318e5b4",null),U=B.exports,A=[{val1:"value / v-model",val2:"绑定值",val3:"boolean / string / number",val4:"--",val5:"--"},{val1:"active-color",val2:"switch 打开时的背景色",val3:"string",val4:"--",val5:"#409EFF"},{val1:"inactive-color",val2:"switch 关闭时的背景色",val3:"string",val4:"--",val5:"#C0CCDA"},{val1:"disabled",val2:"是否禁用",val3:"boolean",val4:"--",val5:"false"},{val1:"active-text",val2:"switch 打开时的文字描述",val3:"string",val4:"--",val5:"--"},{val1:"inactive-text",val2:"switch 关闭时的文字描述",val3:"string",val4:"--",val5:"--"},{val1:"active-value",val2:"switch 打开时的值",val3:"boolean / string / number",val4:"--",val5:"true"},{val1:"inactive-value",val2:"switch 关闭时的值",val3:"boolean / string / number",val4:"--",val5:"false"}].sort((function(e,t){return e.val1.localeCompare(t.val1)})),$=[{val1:"change",val2:"switch 状态发生变化时的回调函数",val3:"新状态的值",val4:"--",val5:"--"}].sort((function(e,t){return e.val1.localeCompare(t.val1)})),N={components:{demo01:d,demo02:_,demo03:j,demo04:U},data:function(){return{list1:A,list2:$}}},z=N,L=Object(v["a"])(z,s,l,!1,null,"3074adb1",null);t["default"]=L.exports},"6ba1":function(e,t,a){"use strict";var s=a("a5ba"),l=a("e7ec"),o=a("750a"),c=a("3493"),n=a("67e7"),i=a("78f8"),r=a("b68d"),v=a("04ba"),u=a("a3a6"),d=a("dee8"),h=a("a0c3"),m=a("8f74"),b=a("4877"),f=[],p=l(f.sort),C=l(f.push),_=r((function(){f.sort(void 0)})),g=r((function(){f.sort(null)})),w=u("sort"),x=!r((function(){if(m)return m<70;if(!(d&&d>3)){if(h)return!0;if(b)return b<603;var e,t,a,s,l="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:a=3;break;case 68:case 71:a=4;break;default:a=2}for(s=0;s<47;s++)f.push({k:t+s,v:a})}for(f.sort((function(e,t){return t.v-e.v})),s=0;s<f.length;s++)t=f[s].k.charAt(0),l.charAt(l.length-1)!==t&&(l+=t);return"DGBEFHACIJK"!==l}})),k=_||!g||!w||!x,S=function(e){return function(t,a){return void 0===a?-1:void 0===t?1:void 0!==e?+e(t,a)||0:i(t)>i(a)?1:-1}};s({target:"Array",proto:!0,forced:k},{sort:function(e){void 0!==e&&o(e);var t=c(this);if(x)return void 0===e?p(t):p(t,e);var a,s,l=[],i=n(t);for(s=0;s<i;s++)s in t&&C(l,t[s]);v(l,S(e)),a=l.length,s=0;while(s<a)t[s]=l[s++];while(s<i)delete t[s++];return t}})},a0c3:function(e,t,a){var s=a("eede");e.exports=/MSIE|Trident/.test(s)},dee8:function(e,t,a){var s=a("eede"),l=s.match(/firefox\/(\d+)/i);e.exports=!!l&&+l[1]}}]);
//# sourceMappingURL=chunk-589f31ad.e271e1ac.js.map