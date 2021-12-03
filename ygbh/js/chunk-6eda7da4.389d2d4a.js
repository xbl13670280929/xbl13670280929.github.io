(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6eda7da4"],{"04ba":function(t,n,e){var o=e("9535"),c=Math.floor,a=function(t,n){var e=t.length,l=c(e/2);return e<8?r(t,n):s(t,a(o(t,0,l),n),a(o(t,l),n),n)},r=function(t,n){var e,o,c=t.length,a=1;while(a<c){o=a,e=t[a];while(o&&n(t[o-1],e)>0)t[o]=t[--o];o!==a++&&(t[o]=e)}return t},s=function(t,n,e,o){var c=n.length,a=e.length,r=0,s=0;while(r<c||s<a)t[r+s]=r<c&&s<a?o(n[r],e[s])<=0?n[r++]:e[s++]:r<c?n[r++]:e[s++];return t};t.exports=a},"13cb":function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h2",{staticClass:"intro-title"},[t._v("MessageBox 弹框")]),e("p",{staticClass:"intro-content"},[t._v("模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。")]),e("demo01"),e("h3",{staticClass:"base-title"},[t._v("Attributes")]),e("table",{staticClass:"attri-table"},[t._m(0),e("tbody",t._l(t.list1,(function(n){return e("tr",{key:n.val1},[e("td",[t._v(t._s(n.val1))]),e("td",[t._v(t._s(n.val2))]),e("td",[t._v(t._s(n.val3))]),e("td",[t._v(t._s(n.val4))]),e("td",[t._v(t._s(n.val5))])])})),0)])],1)},c=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])])}],a=(e("6ba1"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h3",{staticClass:"base-title"},[t._v("消息提示")]),e("p",{staticClass:"base-content"},[t._v("当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。")]),e("div",{staticClass:"demo-block",class:{"show-case-core":t.caseObj1.showCoreFlag}},[e("div",{staticClass:"demo-block-source"},[e("bh-button",{attrs:{type:"primary"},on:{click:function(n){return t.open1()}}},[t._v("按钮1")]),e("bh-button",{attrs:{type:"success"},on:{click:function(n){return t.open2()}}},[t._v("按钮2")]),e("bh-button",{attrs:{type:"success"},on:{click:function(n){return t.open3()}}},[t._v("按钮3")])],1),e("div",{staticClass:"demo-block-core"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.caseSourceVal,expression:"caseSourceVal"}],staticClass:"demo-core-box",staticStyle:{height:"700px"},attrs:{readonly:"readonly"},domProps:{value:t.caseSourceVal},on:{input:function(n){n.target.composing||(t.caseSourceVal=n.target.value)}}})]),e("div",{staticClass:"demo-block-footer"},[e("div",{staticClass:"demo-ms-arr",on:{click:function(n){return t.toggleDemoCore(t.caseObj1)}}},[e("span",{staticClass:"demo-ms-s"},[t._v("显示代码")]),e("span",{staticClass:"demo-ms-h"},[t._v("隐藏代码")])]),e("a",{staticClass:"demo-online",attrs:{href:t.caseObj1.coreUrl,target:"_blank",title:"前往 codepen.io 运行此示例"}},[t._v("在线运行")])])])])}),r=[],s="\n<template>\n<bh-button type='primary' @click='open1()'>按钮1</bh-button>\n<bh-button type='success' @click='open2()'>按钮2</bh-button>\n<bh-button type='success' @click='open3()'>按钮3</bh-button>\n</template>\nexport default {\n\t\topen1() {\n\t\t\tthis.$alert('这是一段内容', '标题名称', {\n\t\t\t\tconfirmButtonText: '确定',\n\t\t\t\tcallback: (action) => {\n\t\t\t\t\tconsole.log(11, action);\n\t\t\t\t}\n\t\t\t});\n\t\t},\n\t\topen2() {\n\t\t\tthis.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {\n\t\t\t\tconfirmButtonText: '确定',\n\t\t\t\tcancelButtonText: '取消',\n\t\t\t\t//type: 'warning',\n\t\t\t\tresolve: function(action) {\n\t\t\t\t\tconsole.log('confirm-1', action);\n\t\t\t\t},\n\t\t\t\treject: function(action) {\n\t\t\t\t\tconsole.log('confirm-2', action);\n\t\t\t\t},\n\t\t\t}).then(() => {\n\t\t\t\tconsole.log(1122);\n\t\t\t}).catch(() => {\n\t\t\t\tconsole.log(1122);          \n\t\t\t});\n\t\t},\n\t\topen3() {\n\t\t\tthis.$prompt('请输入邮箱', '提示', {\n\t\t\t\tconfirmButtonText: '确定',\n\t\t\t\tcancelButtonText: '取消',\n\t\t\t\tresolve: function(action, inputValue) {\n\t\t\t\t\tconsole.log('prompt-1', action, inputValue);\n\t\t\t\t},\n\t\t\t\treject: function(action, inputValue) {\n\t\t\t\t\tconsole.log('prompt-2', action, inputValue);\n\t\t\t\t},\n\t\t\t}).then(({ value }) => {\n\t\t\t\tconsole.log('prompt-1', value);\n\t\t\t}).catch((action) => {\n\t\t\t\tconsole.log('prompt-1', action);   \n\t\t\t});\n\t\t},\n\t},\n}\n",l={data:function(){return{caseObj1:{showCoreFlag:!1,coreUrl:"https://codepen.io/xiebaolin/pen/BadNRjG"},caseSourceVal:s}},methods:{toggleDemoCore:function(t){t.showCoreFlag=!t.showCoreFlag},open1:function(){this.$alert("这是一段内容","标题名称",{confirmButtonText:"确定",callback:function(t){console.log(11,t)}})},open2:function(){this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",resolve:function(t){console.log("confirm-1",t)},reject:function(t){console.log("confirm-2",t)}}).then((function(){console.log(1122)})).catch((function(){console.log(1122)}))},open3:function(){this.$prompt("请输入邮箱","提示",{confirmButtonText:"确定",cancelButtonText:"取消",resolve:function(t,n){console.log("prompt-1",t,n)},reject:function(t,n){console.log("prompt-2",t,n)}}).then((function(t){var n=t.value;console.log("prompt-1",n)})).catch((function(t){console.log("prompt-1",t)}))}}},i=l,u=e("cba8"),f=Object(u["a"])(i,a,r,!1,null,"3ca4fa08",null),v=f.exports,p=[{val1:"message",val2:"消息文字",val3:"string / VNode",val4:"--",val5:"--"},{val1:"type",val2:"主题",val3:"string",val4:"success/warning/info/error",val5:"info"}].sort((function(t,n){return t.val1.localeCompare(n.val1)})),h={components:{demo01:v},data:function(){return{list1:p}}},d=h,m=Object(u["a"])(d,o,c,!1,null,"8f0c1d8c",null);n["default"]=m.exports},4877:function(t,n,e){var o=e("eede"),c=o.match(/AppleWebKit\/(\d+)\./);t.exports=!!c&&+c[1]},"6ba1":function(t,n,e){"use strict";var o=e("a5ba"),c=e("e7ec"),a=e("750a"),r=e("3493"),s=e("67e7"),l=e("78f8"),i=e("b68d"),u=e("04ba"),f=e("a3a6"),v=e("dee8"),p=e("a0c3"),h=e("8f74"),d=e("4877"),m=[],b=c(m.sort),g=c(m.push),_=i((function(){m.sort(void 0)})),C=i((function(){m.sort(null)})),x=f("sort"),k=!i((function(){if(h)return h<70;if(!(v&&v>3)){if(p)return!0;if(d)return d<603;var t,n,e,o,c="";for(t=65;t<76;t++){switch(n=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(o=0;o<47;o++)m.push({k:n+o,v:e})}for(m.sort((function(t,n){return n.v-t.v})),o=0;o<m.length;o++)n=m[o].k.charAt(0),c.charAt(c.length-1)!==n&&(c+=n);return"DGBEFHACIJK"!==c}})),w=_||!C||!x||!k,y=function(t){return function(n,e){return void 0===e?-1:void 0===n?1:void 0!==t?+t(n,e)||0:l(n)>l(e)?1:-1}};o({target:"Array",proto:!0,forced:w},{sort:function(t){void 0!==t&&a(t);var n=r(this);if(k)return void 0===t?b(n):b(n,t);var e,o,c=[],l=s(n);for(o=0;o<l;o++)o in n&&g(c,n[o]);u(c,y(t)),e=c.length,o=0;while(o<e)n[o]=c[o++];while(o<l)delete n[o++];return n}})},a0c3:function(t,n,e){var o=e("eede");t.exports=/MSIE|Trident/.test(o)},dee8:function(t,n,e){var o=e("eede"),c=o.match(/firefox\/(\d+)/i);t.exports=!!c&&+c[1]}}]);
//# sourceMappingURL=chunk-6eda7da4.389d2d4a.js.map