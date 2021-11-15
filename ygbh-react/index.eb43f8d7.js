var $e=Object.defineProperty,Ve=Object.defineProperties;var Oe=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var ce=(s,t,c)=>t in s?$e(s,t,{enumerable:!0,configurable:!0,writable:!0,value:c}):s[t]=c,B=(s,t)=>{for(var c in t||(t={}))pe.call(t,c)&&ce(s,c,t[c]);if(Q)for(var c of Q(t))be.call(t,c)&&ce(s,c,t[c]);return s},y=(s,t)=>Ve(s,Oe(t));var f=(s,t)=>{var c={};for(var a in s)pe.call(s,a)&&t.indexOf(a)<0&&(c[a]=s[a]);if(s!=null&&Q)for(var a of Q(s))t.indexOf(a)<0&&be.call(s,a)&&(c[a]=s[a]);return c};var I=(s,t,c)=>(ce(s,typeof t!="symbol"?t+"":t,c),c);import{j as te,N as ze,r as m,L as Ce,c as r,R as ge,H as Ue,S as Le,a as Fe,b as Me}from"./vendor.a817b242.js";const Te=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const d of n)if(d.type==="childList")for(const i of d.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function c(n){const d={};return n.integrity&&(d.integrity=n.integrity),n.referrerpolicy&&(d.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?d.credentials="include":n.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(n){if(n.ep)return;n.ep=!0;const d=c(n);fetch(n.href,d)}};Te();const e=te.exports.jsx,o=te.exports.jsxs,j=te.exports.Fragment;function Ke(s){return e("div",{className:"ygbh-header",children:o("div",{className:"ygbh-header-inter",children:["ygbh-react",e("a",{href:"https://gitee.com/xiebaolin/ygbh-react",title:"GitHub",target:"_blank",className:"pull-right skip-link",children:e("img",{className:"skip-img",src:"https://gitee.com/static/images/logo-black.svg"})}),e("a",{href:"https://xbl13670280929.github.io/index.html",target:"_blank",className:"pull-right",children:"V2\u7248\u672C"}),e("a",{href:"https://xbl13670280929.github.io/ygbh-plus.html",target:"_blank",className:"pull-right",children:"V3\u7248\u672C"})]})})}const _e={title:"\u5F00\u53D1\u6307\u5357",children:[{title:"\u5B89\u88C5",menuUrl:"/component/installation"},{title:"\u5FEB\u901F\u4E0A\u624B",menuUrl:"/component/quickstart"}]},Ge={title:"Basic",children:[{title:"Grid \u6805\u683C",menuUrl:"/component/grid"},{title:"Layout \u5E03\u5C40",menuUrl:"/component/layout"},{title:"Icon \u56FE\u6807",menuUrl:"/component/icon"},{title:"Button \u6309\u94AE",menuUrl:"/component/button"}]},je={title:"Form",children:[{title:"Radio \u5355\u9009\u6846",menuUrl:"/component/radio"},{title:"Checkbox \u591A\u9009\u6846",menuUrl:"/component/checkbox"},{title:"Input \u8F93\u5165\u6846",menuUrl:"/component/input"},{title:"Switch \u5F00\u5173",menuUrl:"/component/switch"},{title:"Rate \u8BC4\u5206",menuUrl:"/component/rate"}]},He={title:"Data",children:[{title:"Tag \u6807\u7B7E",menuUrl:"/component/tag"},{title:"Pagination \u5206\u9875",menuUrl:"/component/pagination"},{title:"Badge \u6807\u8BB0",menuUrl:"/component/badge"},{title:"Avatar \u5934\u50CF",menuUrl:"/component/avatar"},{title:"Descriptions \u63CF\u8FF0\u5217\u8868",menuUrl:"/component/descriptions"}]},qe={title:"Notice",children:[]},Ze={title:"Navigation",children:[{title:"Breadcrumb \u9762\u5305\u5C51",menuUrl:"/component/breadcrumb"},{title:"Steps \u6B65\u9AA4\u6761",menuUrl:"/component/steps"}]},Je={title:"Others",children:[{title:"Card \u5361\u7247",menuUrl:"/component/card"},{title:"Collapse \u6298\u53E0\u9762\u677F",menuUrl:"/component/collapse"},{title:"Divider \u5206\u5272\u7EBF",menuUrl:"/component/divider"}]};var Ne=[_e,Ge,je,He,qe,Ze,Je];const We=Ne.map(s=>{const t=s.children.map(c=>e("li",{className:"group-hash-item",children:e(ze,{activeClassName:"active",to:c.menuUrl,children:c.title})},c.menuUrl));return o("div",{className:"group-item",children:[e("div",{className:"group-item-title",children:s.title}),e("ul",{className:"group-hash-list",children:t})]},s.title)});function Qe(s){return e("div",{className:"ygbh-menu",children:We})}function X(){return{menuUrl:"",title:""}}function Xe(s){const[t,c]=m.exports.useState(X()),[a,n]=m.exports.useState(X()),d=i=>{let u={},l=!1,h=X(),p=X();Ne.forEach(g=>{g.children&&g.children.forEach(N=>{l&&(p=JSON.parse(JSON.stringify(N)),l=!1),N.menuUrl==i&&(h=JSON.parse(JSON.stringify(u)),l=!0),u=JSON.parse(JSON.stringify(N))})}),c(JSON.parse(JSON.stringify(h))),n(JSON.parse(JSON.stringify(p))),u={}};return m.exports.useEffect(()=>{d(location.hash.slice(1))},[]),o("div",{className:"ygbh-footer",children:[e("div",{className:"footer-l",children:t.menuUrl&&o(Ce,{className:"footer-link",to:t.menuUrl,children:["<\xA0",t.title]})}),e("div",{className:"footer-r",children:a.menuUrl&&o(Ce,{className:"footer-link",to:a.menuUrl,children:[a.title,"\xA0>"]})}),e("input",{id:"globalInputCopy"})]})}function A(s){const{className:t}=s,c=r("element-doc",t);return o(j,{children:[e(Ke,{}),o("div",{className:"ygbh-container",children:[e("div",{className:"ygbh-l-side",children:e("div",{className:"ygbh-l-side-inter",children:e(Qe,{})})}),o("div",{className:"ygbh-r-side",children:[e("div",{className:c,children:s.children}),e(Xe,{})]})]})]})}function xe(){return e(A,{children:o("div",{className:"demo-block",style:{padding:"20px"},children:[e("h2",{className:"intro-title",children:"\u5B89\u88C5"}),e("h3",{className:"base-title",children:"npm \u5B89\u88C5"}),e("p",{className:"base-content",children:"\u63A8\u8350\u4F7F\u7528 npm \u7684\u65B9\u5F0F\u5B89\u88C5\uFF0C\u5B83\u80FD\u66F4\u597D\u5730\u548C webpack \u6253\u5305\u5DE5\u5177\u914D\u5408\u4F7F\u7528\u3002"}),e("code",{className:"base-code-area",children:"npm i ygbh-react -S"}),e("h3",{className:"base-title",children:"CDN"}),e("p",{className:"base-content",children:"\u76EE\u524D\u53EF\u4EE5\u901A\u8FC7 unpkg.com/ygbh \u83B7\u53D6\u5230\u6700\u65B0\u7248\u672C\u7684\u8D44\u6E90\uFF0C\u5728\u9875\u9762\u4E0A\u5F15\u5165 js \u548C css \u6587\u4EF6\u5373\u53EF\u5F00\u59CB\u4F7F\u7528\u3002"}),o("code",{className:"base-code-area",children:[e("textarea",{readOnly:!0,className:"demo-core-box height20",value:"<!-- \u5F15\u5165\u6837\u5F0F -->"}),e("textarea",{readOnly:!0,className:"demo-core-box height20",value:'<link rel="stylesheet" href="//unpkg.com/ygbh-react/ygbh.css">'}),e("textarea",{readOnly:!0,className:"demo-core-box height20",value:"<!-- \u5F15\u5165\u7EC4\u4EF6\u5E93 -->"}),e("textarea",{readOnly:!0,className:"demo-core-box height20",value:'<script src="//unpkg.com/ygbh-react/ygbh.js"><\/script>'})]})]})})}function Ye(){return e(A,{children:o("div",{className:"demo-block",style:{padding:"20px"},children:[e("h2",{className:"intro-title",children:"\u5FEB\u901F\u4E0A\u624B"}),e("p",{className:"intro-content",children:"\u672C\u8282\u5C06\u4ECB\u7ECD\u5982\u4F55\u5728\u9879\u76EE\u4E2D\u4F7F\u7528 ygbh"}),e("h3",{className:"base-title",children:"\u5B8C\u6574\u5F15\u5165 ygbh"}),e("p",{className:"base-content",children:"\u5728 main.js \u4E2D\u5199\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A"}),o("code",{className:"base-code-area",children:[e("textarea",{readOnly:!0,className:"demo-core-box height20",value:"import { Divider } from 'ygbh'"}),e("textarea",{readOnly:!0,className:"demo-core-box height20",value:"import 'ygbh-react/ygbh.css';"})]})]})})}function b(){return e("svg",{viewBox:"0 0 15 15",fill:"currentColor",children:e("path",{d:"M14.777304,4.75062256 L7.77734505,0.0839936563 C7.60939924,-0.0279665065 7.39060662,-0.0279665065 7.22266081,0.0839936563 L0.222701813,4.75062256 C0.0836082937,4.84334851 5.66973453e-05,4.99945222 4.6875e-05,5.16662013 L4.6875e-05,9.83324903 C4.6875e-05,10.0004355 0.0836088906,10.1565596 0.222701812,10.2492466 L7.22266081,14.9158755 C7.30662908,14.9718752 7.403316,14.999875 7.50000292,14.999875 C7.59668984,14.999875 7.69337678,14.9718752 7.77734505,14.9158755 L14.777304,10.2492466 C14.9163976,10.1565206 14.9999492,10.0004169 14.999959,9.83324903 L14.999959,5.16662013 C14.9999492,4.99945222 14.9163976,4.84334851 14.777304,4.75062256 Z M7.50000292,9.23237755 L4.90139316,7.4999502 L7.50000292,5.76755409 L10.0986127,7.4999502 L7.50000292,9.23237755 Z M8,4.89905919 L8,1.43423573 L13.598561,5.16665138 L10.9999824,6.89904747 L8,4.89905919 Z M7.00000586,4.89905919 L4.00002344,6.89904747 L1.40141366,5.16665138 L7.00000586,1.43423573 L7.00000586,4.89905919 Z M3.09865372,7.4999502 L1.00004102,8.89903575 L1.00004102,6.10089589 L3.09865372,7.4999502 Z M4.00002344,8.10085292 L7.00000586,10.1008412 L7.00000586,13.5656334 L1.40141366,9.83328028 L4.00002344,8.10085292 Z M8,10.1008412 L10.9999824,8.10085292 L13.5985922,9.83328028 L8,13.5656647 L8,10.1008412 L8,10.1008412 Z M11.9013521,7.4999502 L13.9999648,6.10089589 L13.9999648,8.899067 L11.9013521,7.4999502 Z"})})}function C(){return e("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"snippets",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",children:e("path",{d:"M832 112H724V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H500V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H320c-17.7 0-32 14.3-32 32v120h-96c-17.7 0-32 14.3-32 32v632c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32v-96h96c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM664 888H232V336h218v174c0 22.1 17.9 40 40 40h174v338zm0-402H514V336h.2L664 485.8v.2zm128 274h-56V456L544 264H360v-80h68v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h152v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h68v576z"})})}const Y=s=>{const t="bh-aaa",i=s,{children:c,className:a}=i,n=f(i,["children","className"]),d=r(t,a);return e("div",y(B({},n),{className:d,children:c}))},eo=s=>{const t="bh-aab-item",i=s,{children:c,className:a}=i,n=f(i,["children","className"]),d=r(t,a,{[`${t}-type`]:!0});return e("div",y(B({},n),{className:d,children:c}))},ae=s=>{const t="bh-Aab",i=s,{children:c,className:a}=i,n=f(i,["children","className"]),d=r(t,a,{[`${t}-type`]:!0});return e("div",y(B({},n),{className:d,children:c}))};ae.AabItem=eo;const O=s=>{const t="bh-divider",p=s,{type:c="horizontal",children:a,className:n,dashed:d,orientation:i="center"}=p,u=f(p,["type","children","className","dashed","orientation"]),l=!!a,h=r(t,`${t}-${c}`,n,{[`${t}-with-text`]:l,[`${t}-with-text-${i}`]:l,[`${t}-dashed`]:!!d});return e("div",y(B({},u),{className:h,children:a&&e("span",{className:`${t}-inner-text`,children:a})}))},M=s=>{const t="bh-tag",S=s,{children:c,className:a,closable:n=!1,closeIcon:d,icon:i,color:u,style:l,onClose:h}=S,p=f(S,["children","className","closable","closeIcon","icon","color","style","onClose"]),g=r(t,a,{[`${t}-has-color`]:u}),N=B({backgroundColor:u},l),E=L=>{L.stopPropagation(),h&&h(L)},v=i||null,D=v?o(j,{children:[v,e("span",{className:"has-icon-node",children:c})]}):c,w=()=>n?d?e("span",{className:`${t}-close-icon`,onClick:E,children:d}):e("span",{className:`${t}-close-icon`,onClick:E,children:e(k,{name:"close"})}):null;return o("div",y(B({},p),{className:g,style:N,children:[D,w()]}))},k=s=>{const t="bh-icon",u=s,{children:c,className:a,name:n}=u,d=f(u,["children","className","name"]),i=r(t,`${t}-${n}`,a);return e("i",y(B({},d),{className:i,children:c}))},R=s=>{const t="bh-avatar",L=s,{shape:c,children:a,className:n,alt:d,src:i,draggable:u,icon:l,size:h}=L,p=f(L,["shape","children","className","alt","src","draggable","icon","size"]),g=!!a;let N;const E=m.exports.isValidElement(i),v=r({[`${t}-lg`]:h==="large",[`${t}-sm`]:h==="small"}),D=r(t,v,n,{[`${t}-${c}`]:!!c,[`${t}-string`]:g}),w=typeof h=="number"?{width:h,height:h,lineHeight:`${h}px`,fontSize:l?h/2:18}:{};return E?N=i:typeof i=="string"?N=e("img",{src:i,alt:d,draggable:u,onError:()=>{const{onError:T}=s;T&&T()}}):l?N=l:N=e("span",{className:`${t}-string`,children:a}),e("div",y(B({},p),{className:D,style:B({},w),children:N}))},z=s=>{const t="bh-badge",S=s,{children:c,className:a,count:n,overflowCount:d=99,showZero:i=!1,style:u,size:l="default",title:h}=S,p=f(S,["children","className","count","overflowCount","showZero","style","size","title"]),g=r(t,a,{[`${t}-not-a-wrapper`]:!c}),N=r(`${t}-count`,{[`${t}-count-sm`]:l==="small"}),E=h||n||void 0,v=m.exports.useMemo(()=>!i&&n==0,[n,i]);let D="";return Number(n)>d?D=d+"+":D=n+"",o("span",y(B({className:g},p),{children:[c,v,!v&&e("sup",{className:N,style:u,title:E,children:D})]}))};function oo(s){return s?e("span",{children:s}):null}const F=s=>{const t="bh-btn",D=s,{children:c,className:a,type:n,size:d,shape:i,block:u=!1,danger:l=!1,ghost:h=!1,icon:p}=D,g=f(D,["children","className","type","size","shape","block","danger","ghost","icon"]);let N="";switch(d){case"large":N="lg";break;case"small":N="sm";break}const E=r(t,a,{[`${t}-${n}`]:n,[`${t}-${N}`]:N,[`${t}-${i}`]:i!=="default"&&i,[`${t}-block`]:u,[`${t}-dangerous`]:!!l,[`${t}-background-ghost`]:h}),v=c?oo(c):null;return o("button",y(B({},g),{className:E,children:[p,v]}))};function co(s,t,c,a){c&&c(t)}function to(s){const v=s,{prefixCls:t,onPressEnter:c,addonBefore:a,addonAfter:n,prefix:d,suffix:i,allowClear:u,defaultValue:l,size:h,inputType:p,bordered:g,htmlSize:N}=v;return f(v,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","size","inputType","bordered","htmlSize"])}class P extends m.exports.Component{constructor(){super(...arguments);I(this,"input");I(this,"renderInput",()=>{const{children:t,className:c,size:a,addonBefore:n,addonAfter:d,allowClear:i,bordered:u=!0}=this.props,l=to(this.props);let h="";switch(a){case"large":h="lg";break;case"small":h="sm";break}const p="bh-input",g=r(p,c,{[`${p}-${h}`]:h,[`${p}-borderless`]:!u});return e("input",y(B({},l),{className:g,onChange:this.handleChange,onKeyDown:this.handleKeyDown,ref:this.saveInput}))});I(this,"saveInput",t=>{this.input=t});I(this,"handleKeyDown",t=>{const{onPressEnter:c,onKeyDown:a}=this.props;c&&t.keyCode===13&&c(t),a==null||a(t)});I(this,"handleChange",t=>{this.setValue(t.target.value),co(this.input,t,this.props.onChange)});I(this,"renderComponent",()=>{const t="bh-input",{addonBefore:c,addonAfter:a,prefix:n,suffix:d,value:i,allowClear:u}=this.props,l=!!c||!!a||!!n||!!d,h=!0,p=r(`${t}-suffix`,{[`${t}-clear-icon-hidden`]:!h}),g=()=>!!n||!!d||!!u?o("span",{className:"bh-input-affix-wrapper",children:[n&&e("span",{className:"bh-input-prefix",children:n}),this.renderInput(),d&&e("span",{className:"bh-input-suffix",children:d}),u&&e("span",{className:p,children:e("i",{className:"bh-input-clear-icon bh-icon bh-icon-close"})})]}):e(j,{children:this.renderInput()});return l?e("span",{className:"bh-input-group-wrapper",children:o("span",{className:"bh-input-wrapper bh-input-group",children:[c&&e("span",{className:"bh-input-group-addon",children:c}),g(),a&&e("span",{className:"bh-input-group-addon",children:a})]})}):u?e(j,{children:g()}):this.renderInput()})}setValue(t,c){this.props.value===void 0?this.setState({value:t},c):c==null||c()}render(){return e(j,{children:this.renderComponent()})}}I(P,"TextArea");class ao extends m.exports.Component{constructor(){super(...arguments);I(this,"renderInput",()=>{const{children:t,className:c}=this.props,n=r("bh-input",c);return e("textarea",{className:n})});I(this,"renderComponent",()=>this.renderInput())}render(){return e("span",{children:this.renderComponent()})}}P.TextArea=ao;class ee extends ge.Component{render(){const t="bh-select",N=this.props,{children:c,className:a,defaultValue:n}=N,d=f(N,["children","className","defaultValue"]);let i=n;const u=r(t,a,`${t}-single`,`${t}-show-arrow`),l=m.exports.createRef(),h=m.exports.createRef();let p=!1;const g=E=>{E.stopPropagation(),p=!0;const v=l.current.getBoundingClientRect(),D=v.left+document.documentElement.scrollLeft,w=v.top+document.documentElement.scrollTop;console.log("offset",v),h.current.style.display="block",h.current.style.left=D+"px",h.current.style.width=l.current.clientWidth+"px",h.current.style.top=w+46+"px"};return document.addEventListener("click",E=>{p&&(console.log("all click"),E.target.classList.contains("bh-select-item-option")&&(console.log(E.target.classList),i=E.target.attributes.value||"",console.log(i)),h.current.style.display="none",p=!1)}),setTimeout(()=>{try{document.body.appendChild(h.current)}catch{}},200),o("div",y(B({},d),{className:u,ref:l,onClick:g,children:[o("span",{className:"bh-select-selector",children:[e("span",{className:"bh-select-selection-search",children:e("input",{className:"bh-select-selection-search-input"})}),e("span",{className:"bh-select-selection-item",children:i})]}),e("span",{className:"bh-select-arrow",children:e("i",{className:"bh-icon bh-icon-arrow-down"})}),e("div",{className:"bh-select-dropdown",ref:h,children:e("div",{className:"bh-select-dropdown-inter",children:c})})]}))}}I(ee,"Option");const lo=s=>{const t="bh-select",i=s,{children:c,className:a}=i,n=f(i,["children","className"]),d=r(a,`${t}-item`,`${t}-item-option`);return e("div",y(B({},n),{className:d,children:c}))};ee.Option=lo;const x=s=>{const t="bh-col",h=s,{children:c,className:a,span:n,order:d,offset:i}=h,u=f(h,["children","className","span","order","offset"]),l=r(t,a,{[`${t}-${n}`]:n!==void 0,[`${t}-order-${d}`]:d,[`${t}-offset-${i}`]:i});return e("div",y(B({},u),{className:l,children:c}))},$=s=>{const t="bh-row",h=s,{children:c,className:a,align:n,justify:d,wrap:i}=h,u=f(h,["children","className","align","justify","wrap"]),l=r(t,a,{[`${t}-${n}`]:n,[`${t}-${d}`]:d,[`${t}-no-wrap`]:i===!1});return e("div",y(B({},u),{className:l,children:c}))},no=s=>{const t="bh-breadcrumb",d=s,{children:c,className:a}=d,n=f(d,["children","className"]);return r(t,a),o("span",{children:[e("span",{className:"bh-breadcrumb-link",children:c}),e("span",{className:"bh-breadcrumb-separator",children:"/"})]})},so=s=>{const t="bh-breadcrumb",i=s,{children:c,className:a}=i,n=f(i,["children","className"]),d=r(t,a);return e("div",y(B({},n),{className:d,children:c}))},H=so;H.Item=no;const io=s=>{const t=`${s.rootPrefixCls}-item`,c=r(t,`${t}-${s.page}`,{[`${t}-active`]:s.active,[`${t}-disabled`]:!s.page}),a=s.page+"";return e("li",{className:c,onClick:()=>{s.onClick&&s.onClick(s.page||1)},title:a,children:e("a",{rel:"nofollow",children:s.page})},s.page)};function Ee(s,t,c){const a=typeof s=="undefined"?t.pageSize:s;return Math.floor((c.total-1)/a)+1}class le extends m.exports.Component{constructor(t){super(t);I(this,"hasPrev",()=>this.state.current>1);I(this,"prev",()=>{if(this.state.current,this.hasPrev()){let t=this.state.current-1;this.setState({current:t})}});I(this,"hasNext",()=>this.state.current<Ee(void 0,this.state,this.props));I(this,"next",()=>{if(this.hasNext()){let t=this.state.current+1;this.setState({current:t})}});I(this,"handleChange",t=>{t!==this.state.current&&this.setState({current:t})});const c=t.current||t.defaultCurrent||1,a=t.pageSize||t.defaultPageSize||10;this.state={current:c,pageSize:a}}render(){const D=this.props,{children:t,className:c,defaultCurrent:a,total:n,defaultPageSize:d,prefixCls:i}=D,u=f(D,["children","className","defaultCurrent","total","defaultPageSize","prefixCls"]),{current:l,pageSize:h}=this.state,p=r(i,c),g=Ee(void 0,this.state,this.props),N=[],E=!this.hasPrev()||!g,v=!this.hasNext()||!g;for(let w=1;w<=g;w++){const S=l===w;N.push(e(io,{rootPrefixCls:i,active:S,onClick:this.handleChange,page:w},w))}return o("ul",y(B({},u),{className:p,children:[e("li",{onClick:this.prev,className:r(`${i}-prev`,{[`${i}-disabled`]:E}),title:"\u4E0A\u4E00\u9875",children:e("button",{className:"bh-pagination-item-link",children:e("i",{className:"bh-icon bh-icon-arrow-left"})})}),N,e("li",{onClick:this.next,className:r(`${i}-next`,{[`${i}-disabled`]:v}),title:"\u4E0B\u4E00\u9875",children:e("button",{className:"bh-pagination-item-link",children:e("i",{className:"bh-icon bh-icon-arrow-right"})})})]}))}}I(le,"defaultProps",{defaultCurrent:1,total:0,defaultPageSize:10,className:"",prefixCls:"bh-pagination"});const uo=s=>{const t="bh-steps-item",l=s,{children:c,className:a,title:n,description:d}=l,i=f(l,["children","className","title","description"]),u=r(t,a,{[`${t}-finish`]:!0,[`${t}-process`]:!0});return e("div",y(B({},i),{className:u,children:o("div",{className:"bh-steps-item-container",children:[e("div",{className:"bh-steps-item-tail"}),e("div",{className:"bh-steps-item-icon",children:e("span",{className:"bh-steps-icon",children:"2"})}),o("div",{className:"bh-steps-item-content",children:[o("div",{className:"bh-steps-item-title",children:[n,e("div",{className:"bh-steps-item-subtitle"})]}),e("div",{className:"bh-steps-item-description",children:d})]})]})}))},ne=s=>{const t="bh-steps",i=s,{children:c,className:a}=i,n=f(i,["children","className"]),d=r(t,a,{[`${t}-horizontal`]:!0,[`${t}-label-horizontal`]:!0});return e("div",y(B({},n),{className:d,children:c}))};ne.Step=uo;const oe=s=>{const t="bh-checkbox",N=s,{children:c,className:a,checked:n,disabled:d}=N,i=f(N,["children","className","checked","disabled"]),[u,l]=m.exports.useState(!!n),h=r(`${t}-wrapper`,a,{[`${t}-wrapper-checked`]:u,[`${t}-wrapper-disabled`]:d}),p=r(t,a,{[`${t}-checked`]:u,[`${t}-disabled`]:d}),g=()=>{d||l(!u)};return o("div",y(B({},i),{className:h,onClick:g,children:[o("span",{className:p,children:[e("input",{type:"checkbox",className:"bh-checkbox-input"}),e("span",{className:"bh-checkbox-inner"})]}),e("span",{children:c})]}))},se=s=>{const t="bh-radio",N=s,{children:c,className:a,checked:n=!1,disabled:d=!1}=N,i=f(N,["children","className","checked","disabled"]),[u,l]=m.exports.useState(!!n),h=r(`${t}-wrapper`,a,{[`${t}-wrapper-checked`]:u,[`${t}-wrapper-disabled`]:d}),p=r(t,a,{[`${t}-checked`]:u,[`${t}-disabled`]:d}),g=()=>{d||l(!0)};return o("label",y(B({},i),{className:h,onClick:g,children:[o("span",{className:p,children:[e("input",{type:"radio",className:"bh-radio-input"}),e("span",{className:"bh-radio-inner"})]}),e("span",{children:c})]}))},ve=s=>{const t="bh-slider",u=s,{children:c,className:a,defaultValue:n}=u,d=f(u,["children","className","defaultValue"]),i=r(t,a);return o("div",y(B({},d),{className:i,children:[e("div",{className:"bh-slider-rail"}),e("div",{className:"bh-slider-track"}),e("div",{className:"bh-slider-step"}),e("div",{className:"bh-slider-handle"}),e("div",{className:"bh-slider-mark"})]}))},K=s=>{const t="bh-switch",T=s,{children:c,className:a,checked:n=!1,defaultChecked:d=!1,disabled:i=!1,size:u,loading:l=!1,checkedChildren:h,unCheckedChildren:p,onChange:g,onClick:N}=T,E=f(T,["children","className","checked","defaultChecked","disabled","size","loading","checkedChildren","unCheckedChildren","onChange","onClick"]),[v,D]=m.exports.useState(d),w=r(t,a,{[`${t}-checked`]:v,[`${t}-disabled`]:i||l,[`${t}-small`]:u=="small"}),S=Z=>{if(i||l)return;let J=!v;D(J),g&&g(J,Z),N&&N(J,Z)},L=()=>v&&h?h:!v&&p?p:null;return o("button",y(B({type:"button"},E),{className:w,onClick:S,children:[e("div",{className:"bh-switch-inner",children:L()}),e("div",{className:"bh-switch-handle",children:l&&e("i",{className:"bh-switch-loading-icon bh-icon bh-icon-loading"})})]}))},ro=s=>{const t="bh-rate-star",w=s,{children:c,className:a,index:n=0,disabled:d,character:i,value:u=-1,tooltip:l,count:h,onClick:p,onHover:g}=w,N=f(w,["children","className","index","disabled","character","value","tooltip","count","onClick","onHover"]),E=r(t,{[`${t}-full`]:u>=n}),v=S=>{g&&g(S)},D=S=>{p&&p(S)};return e("li",{onMouseEnter:()=>v(n),onClick:()=>D(n),title:l,className:E,children:o("div",{children:[e("div",{className:"bh-rate-star-first",children:i}),e("div",{className:"bh-rate-star-second",children:i})]})},n)},G=s=>{const t="bh-rate",me=s,{children:c,className:a,character:n="\u2605",count:d=5,value:i=2,disabled:u=!1,allowClear:l=!0,defaultValue:h=0,tooltips:p=[],onBlur:g,onChange:N,onFocus:E,onHoverChange:v,onKeyDown:D}=me,w=f(me,["children","className","character","count","value","disabled","allowClear","defaultValue","tooltips","onBlur","onChange","onFocus","onHoverChange","onKeyDown"]),S=r(t,a,{[`${t}-disabled`]:u}),[L,T]=m.exports.useState(-1),[Z,J]=m.exports.useState(i),Se=()=>{T(-1),g&&g()},Re=V=>{D&&D(V)},Ie=V=>{u||(T(V),v&&v(V),E&&E())},Pe=V=>{if(u)return;let _=V;l&&V==Z?(T(-1),_=-1):_=V,J(_),N&&N(_)};let he=[];for(let V=0;V<d;V++)he.push(V);return e("ul",y(B({},w),{className:S,onMouseLeave:Se,onClick:Re,children:he.map((V,_)=>e(ro,{index:_,character:n,disabled:u,count:d,value:L===-1?Z:L,onClick:Pe,onHover:Ie,tooltip:p[_]},_))}))},ho=s=>e("header",{className:"ant-layout-header",children:s.children}),mo=s=>e("footer",{className:"ant-layout-footer",children:s.children}),po=s=>e("main",{className:"ant-layout-content",children:s.children}),bo=s=>e("aside",{className:"ant-layout-sider",children:s.children}),Co=s=>e("section",{className:"ant-layout",children:s.children}),q=Co;q.Header=ho;q.Footer=mo;q.Content=po;q.Sider=bo;const de=s=>{const t="bh-card",g=s,{children:c,className:a,title:n,bordered:d=!0,extra:i,style:u}=g,l=f(g,["children","className","title","bordered","extra","style"]),h=!!n,p=r(t,a,{[`${t}-bordered`]:d});return o("div",y(B({},l),{className:p,style:u,children:[h&&e("div",{className:"bh-card-head",children:o("div",{className:"bh-card-head-wrapper",children:[e("div",{className:"bh-card-head-title",children:n}),e("div",{className:"bh-card-extra",children:i})]})}),e("div",{className:"bh-card-body",children:c})]}))},go=s=>{const t="bh-collapse-item",w=s,{children:c,className:a,header:n,keya:d="",key:i,showArrow:u=!0,activearr:l=[],clickitemfn:h}=w,p=f(w,["children","className","header","keya","key","showArrow","activearr","clickitemfn"]);let g=l.includes(d);const[N,E]=m.exports.useState(g),v=r(t,a,{[`${t}-active`]:N}),D=()=>{let S=!N;E(S),h&&h(d,S)};return m.exports.createElement("div",y(B({},p),{className:v,key:n}),o("div",{className:"bh-collapse-header",onClick:D,children:[u&&e("div",{children:e("span",{className:"bh-collapse-arrow",children:e("i",{className:"bh-icon bh-icon-arrow-right"})})}),n]}),e("div",{className:"bh-collapse-content",children:e("div",{className:"bh-collapse-content-box",children:c})}))},W=s=>{const t="bh-collapse",g=s,{children:c,className:a,defaultActiveKey:n}=g,d=f(g,["children","className","defaultActiveKey"]),[i,u]=m.exports.useState(n),l=r(t,a),h=(N,E)=>{console.log(N,E)},p=()=>{const{children:N}=s;return Array.prototype.slice.call(N).map((v,D)=>{const w=v.key||String(D),S=y(B({},v.props),{key:w,activearr:i,clickitemfn:h});return console.log(S),m.exports.cloneElement(v,S)})};return e("div",y(B({},d),{className:l,children:p()}))};W.Panel=go;const Fo=s=>{const t="bh-descriptions-row",u=s,{children:c,className:a,label:n}=u,d=f(u,["children","className","label"]),i=r(t,a);return e("tr",y(B({},d),{className:i,children:e("td",{className:"bh-descriptions-item",children:o("div",{className:"bh-descriptions-item-container",children:[e("span",{className:"bh-descriptions-item-label",children:n}),e("span",{className:"bh-descriptions-item-content",children:c})]})})}))};function No(s,t){return m.exports.cloneElement(e("tr",{className:"bh-descriptions-row",children:s},t))}function xo(s,t){const{children:c,label:a}=s.props;return m.exports.cloneElement(e("td",{className:"bh-descriptions-item",children:o("div",{className:"bh-descriptions-item-container",children:[e("span",{className:"bh-descriptions-item-label",children:a}),e("span",{className:"bh-descriptions-item-content",children:c})]})},t))}function Eo(s,t){const c=Array.prototype.slice.call(s),a=[];let n=[],d=t,i=1;return c.forEach((u,l)=>{d&&(n.push(xo(u,l)),d--),(d==0||d&&l==c.length-1)&&(a.push(No(n,i++)),d=t,n=[])}),a}const U=s=>{const t="bh-descriptions",h=s,{children:c,className:a,title:n,column:d=3}=h,i=f(h,["children","className","title","column"]),u=r(t,a),l=Eo(c,d);return o("div",y(B({},i),{className:u,children:[e("div",{className:"bh-descriptions-header",children:e("div",{className:"bh-descriptions-title",children:n})}),e("div",{className:"bh-descriptions-view",children:e("table",{children:e("tbody",{children:l})})})]}))};U.Item=Fo;function vo(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Avatar } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Aaa>test01</Aaa>
		<Aaa>test02</Aaa>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:o("div",{children:[e(Y,{children:"test01"}),e(Y,{children:"test02"})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u7684\u7528\u6CD5\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"200px"},readOnly:!0,defaultValue:c})})]})})}function Bo(){const s=[{val1:"className",val2:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B",val3:"string",val4:"--"}];return s.sort((t,c)=>t.val1.localeCompare(c.val1)),o(A,{children:[e("h2",{className:"intro-title",children:"Aaa \u5934\u50CF"}),e("p",{className:"intro-content",children:"\u6F14\u793A\u7528"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(vo,{}),e("h3",{className:"base-title",children:"API"}),o("table",{className:"attri-table",children:[e("thead",{children:o("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:s.map(t=>o("tr",{children:[e("td",{children:t.val1}),e("td",{children:t.val2}),e("td",{children:t.val3}),e("td",{children:t.val4})]},t.val1))})]})]})}const{AabItem:ie}=ae;function fo(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Step } from 'ygbh';
	const { Step } = Steps;
	ReactDOM.render(
	  <>
	    <div>
		<Steps current={1}>
			<Step title="Finished" description="This is a description." />
			<Step title="In Progress" description="This is a description." />
			<Step title="Waiting" description="This is a description." />
		</Steps>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:e("div",{children:o(ae,{children:[e(ie,{children:"11"}),e(ie,{children:"22"}),e(ie,{children:"33"})]})})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u7684\u7528\u6CD5\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"200px"},readOnly:!0,defaultValue:c})})]})})}function yo(){return o(A,{children:[e("h2",{className:"intro-title",children:"Aab \u6F14\u793A"}),e("p",{className:"intro-content",children:"\u6F14\u793A\u4E2D"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(fo,{}),e("h3",{className:"base-title",children:"API"}),o("table",{className:"attri-table",children:[e("thead",{children:o("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:o("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B"}),e("td",{children:"string"}),e("td",{children:"--"})]})})]})]})}const Do="https://codepen.io/xiebaolin/pen/PoKGBRR",Be=`
import { Divider } from 'ygbh';
ReactDOM.render(
  <>
    <div>
	<span>\u5185\u5BB91-1</span>
	<Divider></Divider>
	<span>\u5185\u5BB91-2</span>
	<Divider dashed></Divider>
	<span>\u5185\u5BB91-3</span>
	<Divider style={style}></Divider>
	<span>\u5185\u5BB91-4</span>
    </div>
    <div>
	<span>\u5185\u5BB92-1</span>
	<Divider type="vertical"></Divider>
	<span>\u5185\u5BB92-2</span>
	<Divider dashed type="vertical"></Divider>
	<span>\u5185\u5BB92-3</span>
	<Divider className='divider01' type="vertical"></Divider>
	<span>\u5185\u5BB92-4</span>
    </div>
  </>,
  mountNode,
);
`,Ao="https://codepen.io/xiebaolin/pen/PoKGBRR",fe=`
import { Divider } from 'ygbh';
ReactDOM.render(
  <>
    <div>
	<span>\u5185\u5BB93-1</span>
	<Divider>Text1</Divider>
	<span>\u5185\u5BB93-2</span>
	<Divider orientation="left">Text2</Divider>
	<span>\u5185\u5BB93-3</span>
	<Divider orientation="right">Text3</Divider>
	<span>\u5185\u5BB93-4</span>
    </div>
  </>,
  mountNode,
);
`;function ko(){const[s,t]=m.exports.useState(!1),c=r("source-case-mod",{"show-case-core":s}),a=()=>{t(!s)},n=()=>{let p=document.getElementById("globalInputCopy");p.value=Be,p.select(),document.execCommand("copy"),p=null},[d,i]=m.exports.useState(!1),u=r("source-case-mod",{"show-case-core":d});return o(A,{children:[e("h2",{className:"intro-title",children:"Divider \u5206\u5272\u7EBF"}),e("p",{className:"intro-content",children:"\u533A\u9694\u5185\u5BB9\u7684\u5206\u5272\u7EBF\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e("div",{className:"demo-block",children:o("section",{className:c,children:[o("section",{className:"code-box-demo",children:[o("div",{children:[e("span",{children:"\u5185\u5BB91-1"}),e(O,{}),e("span",{children:"\u5185\u5BB91-2"}),e(O,{dashed:!0}),e("span",{children:"\u5185\u5BB91-3"})]}),o("div",{children:[e("span",{children:"\u5185\u5BB92-1"}),e(O,{type:"vertical"}),e("span",{children:"\u5185\u5BB92-2"}),e(O,{dashed:!0,type:"vertical"}),e("span",{children:"\u5185\u5BB92-3"}),e(O,{className:"divider01",type:"vertical"}),e("span",{children:"\u5185\u5BB92-4"})]})]}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u9ED8\u8BA4\u4E3A\u6C34\u5E73\u5206\u5272\u7EBF\uFF0C\u53EF\u5728\u4E2D\u95F4\u52A0\u5165\u6587\u5B57\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:Do,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:n,children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:a})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height400",readOnly:!0,defaultValue:Be})})]})}),e("div",{className:"demo-block",children:o("section",{className:u,children:[e("section",{className:"code-box-demo",children:o("div",{children:[e("span",{children:"\u5185\u5BB93-1"}),e(O,{children:"Text1"}),e("span",{children:"\u5185\u5BB93-2"}),e(O,{orientation:"left",children:"Text2"}),e("span",{children:"\u5185\u5BB93-3"}),e(O,{orientation:"right",children:"Text3"}),e("span",{children:"\u5185\u5BB93-4"})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u9ED8\u8BA4\u4E3A\u6C34\u5E73\u5206\u5272\u7EBF\uFF0C\u53EF\u5728\u4E2D\u95F4\u52A0\u5165\u6587\u5B57\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:Ao,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let p=document.getElementById("globalInputCopy");p.value=fe,p.select(),document.execCommand("copy"),p=null},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{i(!d)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",readOnly:!0,defaultValue:fe})})]})}),e("h3",{className:"base-title",children:"Attributes"}),o("table",{className:"attri-table",children:[e("thead",{children:o("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),o("tbody",{children:[o("tr",{children:[e("td",{children:"type"}),e("td",{children:"\u8BBE\u7F6E\u5206\u5272\u7EBF\u65B9\u5411"}),e("td",{children:"horizontal / vertical"}),e("td",{children:"horizontal"})]}),o("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B"}),e("td",{children:"string"}),e("td",{children:"--"})]}),o("tr",{children:[e("td",{children:"dashed"}),e("td",{children:"\u662F\u5426\u865A\u7EBF"}),e("td",{children:"boolean"}),e("td",{children:"false"})]}),o("tr",{children:[e("td",{children:"orientation"}),e("td",{children:"\u5206\u5272\u7EBF\u6807\u9898\u7684\u4F4D\u7F6E"}),e("td",{children:"left | right | center"}),e("td",{children:"center"})]}),o("tr",{children:[e("td",{children:"style"}),e("td",{children:"\u5206\u5272\u7EBF\u6837\u5F0F\u5BF9\u8C61"}),e("td",{children:"CSSProperties"}),e("td",{children:"--"})]})]})]})]})}function wo(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Tag } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Tag>Tag 1</Tag>
		<Tag><a href="https://gitee.com/xiebaolin/ygbh-react">Link</a></Tag>
		<Tag closable onClose={onClose01}>Tag 2</Tag>
		<Tag closable closeIcon={<Icon name="delete"></Icon>}>Tag 2</Tag>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:o("div",{children:[e(M,{children:"Tag 1"}),e(M,{children:e("a",{href:"https://gitee.com/xiebaolin/ygbh-react",children:"Link"})}),e(M,{closable:!0,onClose:h=>{console.log("onClose01",h)},children:"Tag 2"}),e(M,{closable:!0,closeIcon:e(k,{name:"delete"}),children:"Tag 2"})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u6807\u7B7E\u7684\u7528\u6CD5\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6DFB\u52A0 closable \u53D8\u4E3A\u53EF\u5173\u95ED\u6807\u7B7E\u3002\u53EF\u5173\u95ED\u6807\u7B7E\u5177\u6709 onClose \u4E8B\u4EF6\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let h=document.getElementById("globalInputCopy");h.value=c,h.select(),document.execCommand("copy"),h=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height200",readOnly:!0,defaultValue:c})})]})})}function So(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Tag } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Tag color="#f50">#f50</Tag>
		<Tag color="#2db7f5">#2db7f5</Tag>
		<Tag color="#87d068">#87d068</Tag>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:o("div",{children:[e(M,{color:"#f50",children:"#f50"}),e(M,{color:"#2db7f5",children:"#2db7f5"}),e(M,{color:"#87d068",children:"#87d068"})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u591A\u5F69\u6807\u7B7E"}),e("div",{className:"code-box-description",children:"\u6211\u4EEC\u6DFB\u52A0\u4E86\u591A\u79CD\u9884\u8BBE\u8272\u5F69\u7684\u6807\u7B7E\u6837\u5F0F\uFF0C\u7528\u4F5C\u4E0D\u540C\u573A\u666F\u4F7F\u7528\u3002\u5982\u679C\u9884\u8BBE\u503C\u4E0D\u80FD\u6EE1\u8DB3\u4F60\u7684\u9700\u6C42\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u5177\u4F53\u7684\u8272\u503C\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height200",readOnly:!0,defaultValue:c})})]})})}function Ro(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Tag, Icon } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Tag color="#55acee" icon={<Icon name="picture-outline"></Icon>}>\u56FE\u68071</Tag>
		<Tag color="#cd201f" icon={<Icon name="circle-check"></Icon>}>\u56FE\u68072</Tag>
		<Tag color="#3b5999" icon={<Icon name="plus"></Icon>}>\u56FE\u68073</Tag>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:o("div",{children:[e(M,{color:"#55acee",icon:e(k,{name:"picture-outline"}),children:"\u56FE\u68071"}),e(M,{color:"#cd201f",icon:e(k,{name:"circle-check"}),children:"\u56FE\u68072"}),e(M,{color:"#3b5999",icon:e(k,{name:"plus"}),children:"\u56FE\u68073"})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u591A\u5F69\u6807\u7B7E"}),e("div",{className:"code-box-description",children:"\u6211\u4EEC\u6DFB\u52A0\u4E86\u591A\u79CD\u9884\u8BBE\u8272\u5F69\u7684\u6807\u7B7E\u6837\u5F0F\uFF0C\u7528\u4F5C\u4E0D\u540C\u573A\u666F\u4F7F\u7528\u3002\u5982\u679C\u9884\u8BBE\u503C\u4E0D\u80FD\u6EE1\u8DB3\u4F60\u7684\u9700\u6C42\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u5177\u4F53\u7684\u8272\u503C\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height200",readOnly:!0,defaultValue:c})})]})})}function Io(){return o(A,{children:[e("h2",{className:"intro-title",children:"Tag \u6807\u7B7E"}),e("p",{className:"intro-content",children:"\u8FDB\u884C\u6807\u8BB0\u548C\u5206\u7C7B\u7684\u5C0F\u6807\u7B7E\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(wo,{}),e(So,{}),e(Ro,{}),e("h3",{className:"base-title",children:"Attributes"}),o("table",{className:"attri-table",children:[e("thead",{children:o("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),o("tbody",{children:[o("tr",{children:[e("td",{children:"closable"}),e("td",{children:"\u6807\u7B7E\u662F\u5426\u53EF\u4EE5\u5173\u95ED\uFF08\u70B9\u51FB\u9ED8\u8BA4\u5173\u95ED\uFF09"}),e("td",{children:"boolean"}),e("td",{children:"false"})]}),o("tr",{children:[e("td",{children:"closeIcon"}),e("td",{children:"\u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE"}),e("td",{children:"ReactNode"}),e("td",{children:"--"})]}),o("tr",{children:[e("td",{children:"color"}),e("td",{children:"\u6807\u7B7E\u8272"}),e("td",{children:"string"}),e("td",{children:"--"})]}),o("tr",{children:[e("td",{children:"icon"}),e("td",{children:"\u8BBE\u7F6E\u56FE\u6807"}),e("td",{children:"ReactNode"}),e("td",{children:"--"})]}),o("tr",{children:[e("td",{children:"onClose"}),e("td",{children:"\u5173\u95ED\u65F6\u7684\u56DE\u8C03\uFF08\u53EF\u901A\u8FC7 e.preventDefault() \u6765\u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A\uFF09"}),e("td",{children:"--"}),e("td",{children:"--"})]})]})]})]})}const Po="_codeboxdemo_1gh88_1",$o="_codeboxitem_1gh88_6";var ye={codeboxdemo:Po,codeboxitem:$o};const Vo="https://codepen.io/xiebaolin/pen/mdMBKBm",De=`
import { Icon } from 'ygbh';
ReactDOM.render(
  <>
    <div>
	<Icon name='edit'></Icon>
	<Icon name='share'></Icon>
	<Icon name='delete'></Icon>
    </div>
  </>,
  mountNode,
);
`;function Oo(){const[s,t]=m.exports.useState(!1),c=r("source-case-mod",{"show-case-core":s}),a=()=>{t(!s)},n=()=>{let u=document.getElementById("globalInputCopy");u.value=De,u.select(),document.execCommand("copy"),u=null,alert("\u590D\u5236\u6210\u529F")},d=u=>{let l=document.getElementById("globalInputCopy");l.value=`<Icon name="${u}"></Icon>`,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},i=[{name:"edit"},{name:"share"},{name:"delete"},{name:"search"},{name:"back"},{name:"right"},{name:"bottom"},{name:"top"},{name:"close"},{name:"check"},{name:"minus"},{name:"plus"},{name:"star-on"},{name:"star-off"},{name:"arrow-left"},{name:"arrow-right"},{name:"user-solid"},{name:"picture-outline"},{name:"circle-check"},{name:"warning-outline"},{name:"info"},{name:"success"}];return o(A,{children:[e("h2",{className:"intro-title",children:"Icon \u56FE\u6807"}),e("p",{className:"intro-content",children:"\u8BED\u4E49\u5316\u7684\u77E2\u91CF\u56FE\u5F62\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e("div",{className:"demo-block",children:o("section",{className:c,children:[e("section",{className:"code-box-demo",children:e("div",{className:ye.codeboxdemo,children:i.map(u=>e("div",{className:ye.codeboxitem,onClick:l=>{d(u.name)},children:e(k,{name:u.name})},u.name))})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description"}),o("div",{className:"code-box-actions",children:[e("a",{href:Vo,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:n,children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:a})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height200",readOnly:!0,defaultValue:De})})]})})]})}function zo(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Avatar } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Avatar size={64} icon={<Icon name="user-solid"></Icon>} />
		<Avatar size="large" icon={<Icon name="user-solid"></Icon>} />
		<Avatar icon={<Icon name="user-solid"></Icon>} />
		<Avatar size="small" icon={<Icon name="user-solid"></Icon>} />
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[o("section",{className:"code-box-demo",children:[o("div",{children:[e(R,{size:64,icon:e(k,{name:"user-solid"})}),e(R,{size:"large",icon:e(k,{name:"user-solid"})}),e(R,{icon:e(k,{name:"user-solid"})}),e(R,{size:"small",icon:e(k,{name:"user-solid"})})]}),o("div",{children:[e(R,{shape:"square",size:64,icon:e(k,{name:"user-solid"})}),e(R,{shape:"square",size:"large",icon:e(k,{name:"user-solid"})}),e(R,{shape:"square",icon:e(k,{name:"user-solid"})}),e(R,{shape:"square",size:"small",icon:e(k,{name:"user-solid"})})]})]}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u6807\u7B7E\u7684\u7528\u6CD5\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6DFB\u52A0 closable \u53D8\u4E3A\u53EF\u5173\u95ED\u6807\u7B7E\u3002\u53EF\u5173\u95ED\u6807\u7B7E\u5177\u6709 onClose \u4E8B\u4EF6\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height200",readOnly:!0,defaultValue:c})})]})})}function Uo(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Avatar } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Avatar>U</Avatar>
		<Avatar src="https://joeschmoe.io/api/v1/random" alt='\u65E0\u6CD5\u663E\u793A' draggable={true} onError={onError1} />
		<Avatar src={<img src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:o("div",{children:[e(R,{children:"U"}),e(R,{src:"https://joeschmoe.io/api/v1/random",alt:"\u65E0\u6CD5\u663E\u793A",draggable:!0,onError:()=>{console.log("onError",11)}}),e(R,{src:e("img",{src:"https://joeschmoe.io/api/v1/random",style:{width:32}})})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u6807\u7B7E\u7684\u7528\u6CD5\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6DFB\u52A0 closable \u53D8\u4E3A\u53EF\u5173\u95ED\u6807\u7B7E\u3002\u53EF\u5173\u95ED\u6807\u7B7E\u5177\u6709 onClose \u4E8B\u4EF6\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let h=document.getElementById("globalInputCopy");h.value=c,h.select(),document.execCommand("copy"),h=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height200",readOnly:!0,defaultValue:c})})]})})}function Lo(){return o(A,{children:[e("h2",{className:"intro-title",children:"Avatar \u5934\u50CF"}),e("p",{className:"intro-content",children:"\u7528\u6765\u4EE3\u8868\u7528\u6237\u6216\u4E8B\u7269\uFF0C\u652F\u6301\u56FE\u7247\u3001\u56FE\u6807\u6216\u5B57\u7B26\u5C55\u793A\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(zo,{}),e(Uo,{}),e("h3",{className:"base-title",children:"Attributes"}),o("table",{className:"attri-table",children:[e("thead",{children:o("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),o("tbody",{children:[o("tr",{children:[e("td",{children:"alt"}),e("td",{children:"\u56FE\u50CF\u65E0\u6CD5\u663E\u793A\u65F6\u7684\u66FF\u4EE3\u6587\u672C"}),e("td",{children:"string"}),e("td",{children:"--"})]}),o("tr",{children:[e("td",{children:"src"}),e("td",{children:"\u56FE\u7247\u7C7B\u5934\u50CF\u7684\u8D44\u6E90\u5730\u5740\u6216\u8005\u56FE\u7247\u5143\u7D20"}),e("td",{children:"string | ReactNode"}),e("td",{children:"--"})]}),o("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B"}),e("td",{children:"string"}),e("td",{children:"--"})]}),o("tr",{children:[e("td",{children:"size"}),e("td",{children:"\u8BBE\u7F6E\u5934\u50CF\u7684\u5927\u5C0F"}),e("td",{children:"string"}),e("td",{children:"number | large | small"})]}),o("tr",{children:[e("td",{children:"onError"}),e("td",{children:"\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u7684\u4E8B\u4EF6\uFF0C\u8FD4\u56DE false \u4F1A\u5173\u95ED\u7EC4\u4EF6\u9ED8\u8BA4\u7684 fallback \u884C\u4E3A"}),e("td",{children:"--"}),e("td",{children:"--"})]}),o("tr",{children:[e("td",{children:"draggable"}),e("td",{children:"\u56FE\u7247\u662F\u5426\u5141\u8BB8\u62D6\u52A8"}),e("td",{children:"boolean | 'true' | 'false'"}),e("td",{children:"--"})]}),o("tr",{children:[e("td",{children:"shape"}),e("td",{children:"\u6307\u5B9A\u5934\u50CF\u7684\u5F62\u72B6"}),e("td",{children:"circle | square"}),e("td",{children:"circle"})]})]})]})]})}function Mo(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Avatar } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Badge count={5} className="mr20">
		    <Avatar shape="square" size="large" />
		</Badge>
		<Badge count={0} className="mr20">
		    <Avatar shape="square" size="large" />
		</Badge>
		<Badge count={0} showZero className="mr20">
		    <Avatar shape="square" size="large" />
		</Badge>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:o("div",{children:[e(z,{count:5,className:"mr20",children:e(R,{shape:"square",size:"large"})}),e(z,{count:0,className:"mr20",children:e(R,{shape:"square",size:"large"})}),e(z,{count:0,showZero:!0,className:"mr20",children:e(R,{shape:"square",size:"large"})})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u7B80\u5355\u7684\u5FBD\u7AE0\u5C55\u793A\uFF0C\u5F53 count \u4E3A 0 \u65F6\uFF0C\u9ED8\u8BA4\u4E0D\u663E\u793A\uFF0C\u4F46\u662F\u53EF\u4EE5\u4F7F\u7528 showZero \u4FEE\u6539\u4E3A\u663E\u793A\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",readOnly:!0,defaultValue:c})})]})})}function To(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Avatar } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Badge count={99} className="mr20" title='\u8FD9\u662F\u63D0\u793A\u8BED'>
		    <Avatar shape="square" size="large" />
		</Badge>
		<Badge count={100} className="mr20">
		    <Avatar shape="square" size="large" />
		</Badge>
		<Badge count={99} overflowCount={10} className="mr20">
		    <Avatar shape="square" size="large" />
		</Badge>
		<Badge count={1000} overflowCount={999} className="mr20">
		    <Avatar shape="square" size="large" />
		</Badge>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:o("div",{children:[e(z,{count:99,className:"mr20",title:"\u8FD9\u662F\u63D0\u793A\u8BED",children:e(R,{shape:"square",size:"large"})}),e(z,{count:100,className:"mr20",children:e(R,{shape:"square",size:"large"})}),e(z,{count:99,overflowCount:10,className:"mr20",children:e(R,{shape:"square",size:"large"})}),e(z,{count:1e3,overflowCount:999,className:"mr20",children:e(R,{shape:"square",size:"large"})})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u5C01\u9876\u6570\u5B57"}),e("div",{className:"code-box-description",children:"\u8D85\u8FC7 overflowCount \u7684\u4F1A\u663E\u793A\u4E3A overflowCount+\uFF0C\u9ED8\u8BA4\u7684 overflowCount \u4E3A 99\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height400",readOnly:!0,defaultValue:c})})]})})}function Ko(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Avatar } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Badge count={0} className="mr20" />
		<Badge count={25} className="mr20" />
		<Badge count={<Icon name="picture-outline"></Icon>} className="mr20" />
		<Badge count={109} className="mr20" style={{ backgroundColor: '#52c41a' }} />
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:o("div",{children:[e(z,{count:0,className:"mr20"}),e(z,{count:25,className:"mr20"}),e(z,{count:e(k,{name:"picture-outline"}),className:"mr20"}),e(z,{count:109,className:"mr20",style:{backgroundColor:"#52c41a"}})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u72EC\u7ACB\u4F7F\u7528"}),e("div",{className:"code-box-description",children:"\u4E0D\u5305\u88F9\u4EFB\u4F55\u5143\u7D20\u5373\u662F\u72EC\u7ACB\u4F7F\u7528\uFF0C\u53EF\u81EA\u5B9A\u6837\u5F0F\u5C55\u73B0\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height250",readOnly:!0,defaultValue:c})})]})})}function _o(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Avatar } from 'ygbh';
	ReactDOM.render(
	  <>
		<Badge size="default" count={5} className="mr20">
		    <Avatar shape="square" size="large" />
		</Badge>
		<Badge size="small" count={5} className="mr20">
		    <Avatar shape="square" size="large" />
		</Badge>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:o("div",{children:[e(z,{size:"default",count:5,className:"mr20",children:e(R,{shape:"square",size:"large"})}),e(z,{size:"small",count:5,className:"mr20",children:e(R,{shape:"square",size:"large"})})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u5927\u5C0F"}),e("div",{className:"code-box-description",children:"\u53EF\u4EE5\u8BBE\u7F6E\u6709\u6570\u5B57\u5FBD\u6807\u7684\u5927\u5C0F\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height250",readOnly:!0,defaultValue:c})})]})})}function Go(){return o(A,{children:[e("h2",{className:"intro-title",children:"Badge \u5FBD\u6807\u6570"}),e("p",{className:"intro-content",children:"\u56FE\u6807\u53F3\u4E0A\u89D2\u7684\u5706\u5F62\u5FBD\u6807\u6570\u5B57\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(Mo,{}),e(To,{}),e(Ko,{}),e(_o,{}),e("h3",{className:"base-title",children:"Attributes"}),o("table",{className:"attri-table",children:[e("thead",{children:o("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),o("tbody",{children:[o("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B"}),e("td",{children:"string"}),e("td",{children:"--"})]}),o("tr",{children:[e("td",{children:"count"}),e("td",{children:"\u5C55\u793A\u7684\u6570\u5B57\uFF0C\u5927\u4E8E overflowCount \u65F6\u663E\u793A\u4E3A overflowCount+\uFF0C\u4E3A 0 \u65F6\u9690\u85CF"}),e("td",{children:"ReactNode"}),e("td",{children:"--"})]}),o("tr",{children:[e("td",{children:"overflowCount"}),e("td",{children:"\u5C55\u793A\u5C01\u9876\u7684\u6570\u5B57\u503C"}),e("td",{children:"number"}),e("td",{children:"99"})]}),o("tr",{children:[e("td",{children:"showZero"}),e("td",{children:"\u5F53\u6570\u503C\u4E3A 0 \u65F6\uFF0C\u662F\u5426\u5C55\u793A Badge"}),e("td",{children:"boolean"}),e("td",{children:"false"})]}),o("tr",{children:[e("td",{children:"size"}),e("td",{children:"\u5728\u8BBE\u7F6E\u4E86 count \u7684\u524D\u63D0\u4E0B\u6709\u6548\uFF0C\u8BBE\u7F6E\u5C0F\u5706\u70B9\u7684\u5927\u5C0F"}),e("td",{children:"default | small"}),e("td",{children:"--"})]}),o("tr",{children:[e("td",{children:"title"}),e("td",{children:"\u8BBE\u7F6E\u9F20\u6807\u653E\u5728\u72B6\u6001\u70B9\u4E0A\u65F6\u663E\u793A\u7684\u6587\u5B57"}),e("td",{children:"string"}),e("td",{children:"--"})]})]})]})]})}function jo(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Avatar } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Button className="mr20">Default Button</Button>
		<Button className="mr20" type="primary">Primary Button</Button>
		<Button className="mr20" type="dashed">Dashed Button</Button>
	    </div>
	    <div>
		<Button className="mr20" type="text">Text Button</Button>
		<Button className="mr20" type="link">Link Button</Button>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[o("section",{className:"code-box-demo",children:[o("div",{className:"mb10",children:[e(F,{className:"mr20",children:"Default Button"}),e(F,{className:"mr20",type:"primary",children:"Primary Button"}),e(F,{className:"mr20",type:"dashed",children:"Dashed Button"})]}),o("div",{className:"mb10",children:[e(F,{className:"mr20",type:"text",children:"Text Button"}),e(F,{className:"mr20",type:"link",children:"Link Button"})]})]}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u6309\u94AE\u7C7B\u578B"}),e("div",{className:"code-box-description",children:"\u6309\u94AE\u6709\u4E94\u79CD\u7C7B\u578B\uFF1A\u4E3B\u6309\u94AE\u3001\u6B21\u6309\u94AE\u3001\u865A\u7EBF\u6309\u94AE\u3001\u6587\u672C\u6309\u94AE\u548C\u94FE\u63A5\u6309\u94AE\u3002\u4E3B\u6309\u94AE\u5728\u540C\u4E00\u4E2A\u64CD\u4F5C\u533A\u57DF\u6700\u591A\u51FA\u73B0\u4E00\u6B21\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height300",readOnly:!0,defaultValue:c})})]})})}function Ho(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Button } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Button size='large'>Default Button</Button>
		<Button size='large' type="primary">Primary Button</Button>
		<Button size='large' type="dashed">Dashed Button</Button>
	    </div>
	    <div>
		<Button>Default Button</Button>
		<Button className="mr20" type="primary">Primary Button</Button>
		<Button className="mr20" type="dashed">Dashed Button</Button>
	    </div>
	    <div>
		<Button size='small'>Default Button</Button>
		<Button size='small' type="primary">Primary Button</Button>
		<Button size='small' type="dashed">Dashed Button</Button>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[o("section",{className:"code-box-demo",children:[o("div",{className:"mb10",children:[e(F,{className:"mr20",size:"large",children:"Default Button"}),e(F,{className:"mr20",size:"large",type:"primary",children:"Primary Button"}),e(F,{className:"mr20",size:"large",type:"dashed",children:"Dashed Button"})]}),o("div",{className:"mb10",children:[e(F,{className:"mr20",children:"Default Button"}),e(F,{className:"mr20",type:"primary",children:"Primary Button"}),e(F,{className:"mr20",type:"dashed",children:"Dashed Button"})]}),o("div",{className:"mb10",children:[e(F,{className:"mr20",size:"small",children:"Default Button"}),e(F,{className:"mr20",size:"small",type:"primary",children:"Primary Button"}),e(F,{className:"mr20",size:"small",type:"dashed",children:"Dashed Button"})]})]}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u6309\u94AE\u5C3A\u5BF8"}),o("div",{className:"code-box-description",children:[e("div",{children:"\u6309\u94AE\u6709\u5927\u3001\u4E2D\u3001\u5C0F\u4E09\u79CD\u5C3A\u5BF8\u3002"}),e("div",{children:"\u901A\u8FC7\u8BBE\u7F6E size \u4E3A large small \u5206\u522B\u628A\u6309\u94AE\u8BBE\u4E3A\u5927\u3001\u5C0F\u5C3A\u5BF8\u3002\u82E5\u4E0D\u8BBE\u7F6E size\uFF0C\u5219\u5C3A\u5BF8\u4E3A\u4E2D\u3002"})]}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height300",readOnly:!0,defaultValue:c})})]})})}function qo(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Button } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Button className="mr20">Default Button</Button>
		<Button className="mr20" shape="circle">A</Button>
		<Button className="mr20" shape="round">Default Button</Button>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:o("div",{className:"mb10",children:[e(F,{className:"mr20",children:"Default Button"}),e(F,{className:"mr20",shape:"circle",children:"A"}),e(F,{className:"mr20",shape:"round",children:"Default Button"})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u8BBE\u7F6E\u6309\u94AE\u5F62\u72B6"}),e("div",{className:"code-box-description",children:e("div",{children:"\u901A\u8FC7\u8BBE\u7F6E shape \u4E3A circle round \u5206\u522B\u628A\u6309\u94AE\u8BBE\u4E3A\u5168\u5706\uFF0C\u5706\u89D2\u3002\u82E5\u4E0D\u8BBE\u7F6E shape\uFF0C\u5219\u5C3A\u5BF8\u4E3A\u76F4\u89D2\u3002"})}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height250",readOnly:!0,defaultValue:c})})]})})}function Zo(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Button } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Button block>Default Button</Button>
		<Button block>A</Button>
		<Button block>Default Button</Button>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:o("div",{className:"mb10",children:[e(F,{className:"mb20",block:!0,children:"Default Button"}),e(F,{className:"mb20",block:!0,children:"A"}),e(F,{className:"mb20",block:!0,children:"Default Button"})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"Block \u6309\u94AE"}),e("div",{className:"code-box-description",children:e("div",{children:"block \u5C5E\u6027\u5C06\u4F7F\u6309\u94AE\u9002\u5408\u5176\u7236\u5BBD\u5EA6\u3002"})}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height250",readOnly:!0,defaultValue:c})})]})})}function Jo(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Button } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Button className="mr20" type="primary" danger>Primary</Button>
		<Button className="mr20" danger>Default</Button>
		<Button className="mr20" type="dashed" danger>Dashed</Button>
		<Button className="mr20" type="text" danger>Text</Button>
		<Button className="mr20" type="link" danger>Link</Button>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:o("div",{className:"mb10",children:[e(F,{className:"mr20",type:"primary",danger:!0,children:"Primary"}),e(F,{className:"mr20",danger:!0,children:"Default"}),e(F,{className:"mr20",type:"dashed",danger:!0,children:"Dashed"}),e(F,{className:"mr20",type:"text",danger:!0,children:"Text"}),e(F,{className:"mr20",type:"link",danger:!0,children:"Link"})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u5371\u9669\u6309\u94AE"}),e("div",{className:"code-box-description",children:e("div",{children:"\u5371\u9669\u662F\u4E00\u79CD\u6309\u94AE\u5C5E\u6027\u3002"})}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height250",readOnly:!0,defaultValue:c})})]})})}function Wo(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Button } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Button className="mr20" icon={<Icon name="search"></Icon>} shape="circle"></Button>
		<Button className="mr20" icon={<Icon name="search"></Icon>} shape="circle" type='primary'></Button>
	    </div>
	    <div>
		<Button className="mr20" icon={<Icon name="search"></Icon>}>search</Button>
		<Button className="mr20" icon={<Icon name="search"></Icon>} type='primary'>search</Button>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[o("section",{className:"code-box-demo",children:[o("div",{className:"mb10",children:[e(F,{className:"mr20",icon:e(k,{name:"search"}),shape:"circle"}),e(F,{className:"mr20",icon:e(k,{name:"search"}),shape:"circle",type:"primary"})]}),o("div",{className:"mb10",children:[e(F,{className:"mr20",icon:e(k,{name:"search"}),children:"search"}),e(F,{className:"mr20",icon:e(k,{name:"search"}),type:"primary",children:"search"})]})]}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u56FE\u6807\u6309\u94AE"}),e("div",{className:"code-box-description",children:e("div",{children:"\u5F53\u9700\u8981\u5728 Button \u5185\u5D4C\u5165 Icon \u65F6\uFF0C\u53EF\u4EE5\u8BBE\u7F6E icon \u5C5E\u6027\uFF0C\u6216\u8005\u76F4\u63A5\u5728 Button \u5185\u4F7F\u7528 Icon \u7EC4\u4EF6\u3002"})}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height250",readOnly:!0,defaultValue:c})})]})})}const Qo="_ghostbackground1_1dwro_1";var Ae={ghostbackground1:Qo};function Xo(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Button } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div className="ghostbackground1">
		<Button type="primary" ghost>Primary</Button>
		<Button ghost>Default</Button>
		<Button type="dashed" ghost>Dashed</Button>
		<Button type="primary" danger ghost>Danger</Button>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a}),i=()=>{n(!a)},u=()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")};return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:o("div",{className:Ae.ghostbackground1,children:[e(F,{type:"primary",ghost:!0,children:"Primary"}),"\xA0\xA0",e(F,{ghost:!0,children:"Default"}),"\xA0\xA0",e(F,{type:"dashed",ghost:!0,children:"Dashed"}),"\xA0\xA0",e(F,{type:"primary",danger:!0,ghost:!0,children:"Danger"})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u5E7D\u7075\u6309\u94AE"}),e("div",{className:"code-box-description",children:"\u5E7D\u7075\u6309\u94AE\u5C06\u6309\u94AE\u7684\u5185\u5BB9\u53CD\u8272\uFF0C\u80CC\u666F\u53D8\u4E3A\u900F\u660E\uFF0C\u5E38\u7528\u5728\u6709\u8272\u80CC\u666F\u4E0A\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:u,children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:i})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height250",readOnly:!0,defaultValue:c})})]})})}function Yo(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Button } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Button type="primary">Primary</Button>
		<Button type="primary" disabled>Primary(disabled)</Button>
		<br />
		<Button>Default</Button>
		<Button disabled>Default(disabled)</Button>
		<br />
		<Button type="dashed">Dashed</Button>
		<Button type="dashed" disabled>Dashed(disabled)</Button>
		<br />
		<Button type="text">Text</Button>
		<Button type="text" disabled>Text(disabled)</Button>
		<br />
		<Button type="link">Link</Button>
		<Button type="link" disabled>Link(disabled)</Button>
		<br />
		<Button danger>Danger Default</Button>
		<Button danger disabled>Danger Default(disabled)</Button>
		<br />
		<Button danger type="text">Danger Text</Button>
		<Button danger type="text" disabled>Danger Text(disabled)</Button>
		<br />
		<Button type="link" danger>Danger Link</Button>
		<Button type="link" danger disabled>Danger Link(disabled)</Button>

		<div className="ghostbackground1">
			<Button ghost>Default</Button>&nbsp;&nbsp;
			<Button ghost disabled>Default</Button>
		</div>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a}),i=()=>{n(!a)},u=()=>{let h=document.getElementById("globalInputCopy");h.value=c,h.select(),document.execCommand("copy"),h=null,alert("\u590D\u5236\u6210\u529F")},l=()=>{alert("\u70B9\u51FB\u4E8B\u4EF61")};return e("div",{className:"demo-block",children:o("section",{className:d,children:[o("section",{className:"code-box-demo",children:[e(F,{type:"primary",onClick:l,children:"Primary"}),e(F,{type:"primary",disabled:!0,onClick:l,children:"Primary(disabled)"}),e("br",{}),e(F,{children:"Default"}),e(F,{disabled:!0,children:"Default(disabled)"}),e("br",{}),e(F,{type:"dashed",children:"Dashed"}),e(F,{type:"dashed",disabled:!0,children:"Dashed(disabled)"}),e("br",{}),e(F,{type:"text",children:"Text"}),e(F,{type:"text",disabled:!0,children:"Text(disabled)"}),e("br",{}),e(F,{type:"link",children:"Link"}),e(F,{type:"link",disabled:!0,children:"Link(disabled)"}),e("br",{}),e(F,{danger:!0,children:"Danger Default"}),e(F,{danger:!0,disabled:!0,children:"Danger Default(disabled)"}),e("br",{}),e(F,{danger:!0,type:"text",children:"Danger Text"}),e(F,{danger:!0,type:"text",disabled:!0,children:"Danger Text(disabled)"}),e("br",{}),e(F,{type:"link",danger:!0,children:"Danger Link"}),e(F,{type:"link",danger:!0,disabled:!0,children:"Danger Link(disabled)"}),o("div",{className:Ae.ghostbackground1,children:[e(F,{ghost:!0,children:"Default"}),"\xA0\xA0",e(F,{ghost:!0,disabled:!0,children:"Default"})]})]}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u4E0D\u53EF\u7528\u72B6\u6001"}),e("div",{className:"code-box-description",children:"\u6DFB\u52A0 disabled \u5C5E\u6027\u5373\u53EF\u8BA9\u6309\u94AE\u5904\u4E8E\u4E0D\u53EF\u7528\u72B6\u6001\uFF0C\u540C\u65F6\u6309\u94AE\u6837\u5F0F\u4E5F\u4F1A\u6539\u53D8\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:u,children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:i})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height600",readOnly:!0,defaultValue:c})})]})})}function ec(){return o(A,{children:[e("h2",{className:"intro-title",children:"Button \u6309\u94AE"}),e("p",{className:"intro-content",children:"\u6309\u94AE\u7528\u4E8E\u5F00\u59CB\u4E00\u4E2A\u5373\u65F6\u64CD\u4F5C\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(jo,{}),e(Ho,{}),e(qo,{}),e(Zo,{}),e(Jo,{}),e(Wo,{}),e(Xo,{}),e(Yo,{}),e("h3",{className:"base-title",children:"Attributes"}),o("table",{className:"attri-table",children:[e("thead",{children:o("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),o("tbody",{children:[o("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B"}),e("td",{children:"string"}),e("td",{children:"--"})]}),o("tr",{children:[e("td",{children:"type"}),e("td",{children:"\u8BBE\u7F6E\u6309\u94AE\u7C7B\u578B"}),e("td",{children:"primary | ghost | dashed | link | text | default"}),e("td",{children:"default"})]}),o("tr",{children:[e("td",{children:"size"}),e("td",{children:"\u8BBE\u7F6E\u6309\u94AE\u5927\u5C0F"}),e("td",{children:"large | middle | small"}),e("td",{children:"middle"})]}),o("tr",{children:[e("td",{children:"shape"}),e("td",{children:"\u8BBE\u7F6E\u6309\u94AE\u5F62\u72B6"}),e("td",{children:"default | circle | round"}),e("td",{children:"default"})]}),o("tr",{children:[e("td",{children:"block"}),e("td",{children:"\u5C06\u6309\u94AE\u5BBD\u5EA6\u8C03\u6574\u4E3A\u5176\u7236\u5BBD\u5EA6\u7684\u9009\u9879"}),e("td",{children:"boolean"}),e("td",{children:"false"})]}),o("tr",{children:[e("td",{children:"danger"}),e("td",{children:"\u8BBE\u7F6E\u5371\u9669\u6309\u94AE"}),e("td",{children:"boolean"}),e("td",{children:"false"})]}),o("tr",{children:[e("td",{children:"icon"}),e("td",{children:"\u8BBE\u7F6E\u6309\u94AE\u7684\u56FE\u6807\u7EC4\u4EF6"}),e("td",{children:"ReactNode"}),e("td",{children:"--"})]}),o("tr",{children:[e("td",{children:"ghost"}),e("td",{children:"\u5E7D\u7075\u5C5E\u6027\uFF0C\u4F7F\u6309\u94AE\u80CC\u666F\u900F\u660E"}),e("td",{children:"boolean"}),e("td",{children:"false"})]}),o("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u6309\u94AE\u5931\u6548\u72B6\u6001"}),e("td",{children:"boolean"}),e("td",{children:"false"})]})]})]})]})}function oc(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Input } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Input placeholder="Basic usage" maxLength='5' />
		<Input placeholder="Basic usage" defaultValue='5' />
		<Input placeholder="Basic usage" disabled />
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:o("div",{children:[e(P,{placeholder:"Basic usage",maxLength:"5"}),e(P,{placeholder:"Basic usage",defaultValue:"55"}),e(P,{placeholder:"Basic usage",disabled:!0})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C\u4F7F\u7528"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u4F7F\u7528\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height200",readOnly:!0,defaultValue:c})})]})})}const{TextArea:cc}=P;function tc(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Input } from 'ygbh';
	const { TextArea } = Input;
	ReactDOM.render(
	  <>
	    <div>
		<TextArea placeholder="Basic usage" />
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:e("div",{children:e(cc,{placeholder:"Basic usage"})})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u6587\u672C\u57DF"}),e("div",{className:"code-box-description",children:"\u7528\u4E8E\u591A\u884C\u8F93\u5165\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height200",readOnly:!0,defaultValue:c})})]})})}function ac(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Input } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Input placeholder="large size" size="large" />
		<Input placeholder="default size" />
		<Input placeholder="small size" size="small" />
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:o("div",{children:[e(P,{placeholder:"large size",size:"large"}),e(P,{placeholder:"default size"}),e(P,{placeholder:"small size",size:"small"})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u4E09\u79CD\u5927\u5C0F"}),e("div",{className:"code-box-description",children:"\u6211\u4EEC\u4E3A Input \u8F93\u5165\u6846\u5B9A\u4E49\u4E86\u4E09\u79CD\u5C3A\u5BF8\uFF08\u5927\u3001\u9ED8\u8BA4\u3001\u5C0F\uFF09\uFF0C\u9AD8\u5EA6\u5206\u522B\u4E3A 40px\u300132px \u548C 24px\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height200",readOnly:!0,defaultValue:c})})]})})}function lc(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Input, Icon } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
		<Input addonBefore={<Icon name="user-solid"></Icon>} addonAfter={<Icon name="search"></Icon>} defaultValue="mysite" />
		<Input prefix="http://" suffix=".com" defaultValue="mysite" />
		<Input addonBefore={<Icon name="user-solid"></Icon>} addonAfter={<Icon name="search"></Icon>} prefix="http://" suffix=".com" defaultValue="mysite" />
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:o("div",{children:[e(P,{addonBefore:"http://",addonAfter:".com",defaultValue:"mysite"}),e(P,{addonBefore:e(k,{name:"user-solid"}),addonAfter:e(k,{name:"search"}),defaultValue:"mysite"}),e(P,{prefix:"http://",suffix:".com",defaultValue:"mysite"}),e(P,{addonBefore:e(k,{name:"user-solid"}),addonAfter:e(k,{name:"search"}),prefix:"http://",suffix:".com",defaultValue:"mysite"})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u524D\u7F6E/\u540E\u7F6E\u6807\u7B7E"}),e("div",{className:"code-box-description",children:"\u7528\u4E8E\u914D\u7F6E\u4E00\u4E9B\u56FA\u5B9A\u7EC4\u5408\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height300",readOnly:!0,defaultValue:c})})]})})}function nc(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Input } from 'ygbh';
	const onChange = (e:any) => {
		console.log('onChange', e);
	}
	const onPressEnter = (e:any) => {
		console.log('onPressEnter', e);
	}
	ReactDOM.render(
	  <>
	    <div>
		<Input placeholder="Basic usage" allowClear defaultValue='5' onChange={onChange} />
		<Input placeholder="Basic usage" allowClear defaultValue='5' onPressEnter={onPressEnter} />
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:o("div",{children:[e(P,{placeholder:"Basic usage",allowClear:!0,defaultValue:"5",onChange:p=>{console.log("onChange",p)}}),e(P,{placeholder:"Basic usage",allowClear:!0,defaultValue:"5",onPressEnter:p=>{console.log("onPressEnter",p)}})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u5E26\u79FB\u9664\u56FE\u6807"}),e("div",{className:"code-box-description",children:"\u5E26\u79FB\u9664\u56FE\u6807\u7684\u8F93\u5165\u6846\uFF0C\u70B9\u51FB\u56FE\u6807\u5220\u9664\u6240\u6709\u5185\u5BB9\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let p=document.getElementById("globalInputCopy");p.value=c,p.select(),document.execCommand("copy"),p=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height300",readOnly:!0,defaultValue:c})})]})})}function sc(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Input } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Input placeholder="Borderless" bordered={false} />
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:e("div",{children:e(P,{placeholder:"Borderless",bordered:!1})})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u65E0\u8FB9\u6846"}),e("div",{className:"code-box-description",children:"\u6CA1\u6709\u8FB9\u6846\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height200",readOnly:!0,defaultValue:c})})]})})}function dc(){const s=[{val1:"className",val2:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B",val3:"string",val4:"--"},{val1:"defaultValue",val2:"\u8F93\u5165\u6846\u9ED8\u8BA4\u5185\u5BB9",val3:"string",val4:"--"},{val1:"addonAfter",val2:"\u5E26\u6807\u7B7E\u7684 input\uFF0C\u8BBE\u7F6E\u540E\u7F6E\u6807\u7B7E",val3:"ReactNode",val4:"--"},{val1:"addonBefore",val2:"\u5E26\u6807\u7B7E\u7684 input\uFF0C\u8BBE\u7F6E\u524D\u7F6E\u6807\u7B7E",val3:"ReactNode",val4:"--"},{val1:"prefix",val2:"\u5E26\u6709\u524D\u7F00\u56FE\u6807\u7684 input",val3:"ReactNode",val4:"--"},{val1:"suffix",val2:"\u5E26\u6709\u540E\u7F00\u56FE\u6807\u7684 input",val3:"ReactNode",val4:"--"},{val1:"maxLength",val2:"\u6700\u5927\u957F\u5EA6",val3:"number",val4:"--"},{val1:"disabled",val2:"\u662F\u5426\u7981\u7528\u72B6\u6001\uFF0C\u9ED8\u8BA4\u4E3A false",val3:"boolean",val4:"false"},{val1:"allowClear",val2:"\u53EF\u4EE5\u70B9\u51FB\u6E05\u9664\u56FE\u6807\u5220\u9664\u5185\u5BB9",val3:"boolean",val4:"--"},{val1:"bordered",val2:"\u662F\u5426\u6709\u8FB9\u6846",val3:"boolean",val4:"true"}];s.sort((c,a)=>c.val1.localeCompare(a.val1));const t=[{val1:"onChange",val2:"\u8F93\u5165\u6846\u5185\u5BB9\u53D8\u5316\u65F6\u7684\u56DE\u8C03",val3:"function(e)",val4:"--"},{val1:"onPressEnter",val2:"\u6309\u4E0B\u56DE\u8F66\u7684\u56DE\u8C03",val3:"function(e)",val4:"--"}];return t.sort((c,a)=>c.val1.localeCompare(a.val1)),o(A,{children:[e("h2",{className:"intro-title",children:"Input\u8F93\u5165\u6846"}),e("p",{className:"intro-content",children:"\u901A\u8FC7\u9F20\u6807\u6216\u952E\u76D8\u8F93\u5165\u5185\u5BB9\uFF0C\u662F\u6700\u57FA\u7840\u7684\u8868\u5355\u57DF\u7684\u5305\u88C5\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(oc,{}),e(tc,{}),e(ac,{}),e(lc,{}),e(nc,{}),e(sc,{}),e("h3",{className:"base-title",children:"API"}),e("h4",{className:"base-title",children:"Input"}),o("table",{className:"attri-table",children:[e("thead",{children:o("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),o("tbody",{children:[s.map(c=>o("tr",{children:[e("td",{children:c.val1}),e("td",{children:c.val2}),e("td",{children:c.val3}),e("td",{children:c.val4})]},c.val1)),t.map(c=>o("tr",{children:[e("td",{children:c.val1}),e("td",{children:c.val2}),e("td",{children:c.val3}),e("td",{children:c.val4})]},c.val1))]})]})]})}const{Option:ke}=ee;function ic(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Select } from 'ygbh';
	const { Option } = Select;
	ReactDOM.render(
	  <>
	    <div>
		<Select defaultValue="bbb">
			<Option value="aaa">111</Option>
			<Option value="bbb">222</Option>
		</Select>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:e("div",{children:o(ee,{defaultValue:"bbb",children:[e(ke,{value:"aaa",children:"111"}),e(ke,{value:"bbb",children:"222"})]})})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u7684\u7528\u6CD5\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"240px"},readOnly:!0,defaultValue:c})})]})})}function uc(){return o(A,{children:[e("h2",{className:"intro-title",children:"Select \u9009\u62E9\u5668"}),e("p",{className:"intro-content",children:"\u4E0B\u62C9\u9009\u62E9\u5668\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(ic,{}),e("h3",{className:"base-title",children:"API"}),o("table",{className:"attri-table",children:[e("thead",{children:o("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:o("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B"}),e("td",{children:"string"}),e("td",{children:"--"})]})})]})]})}function rc(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Row, Col } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Row>
		    <Col span={24}>col</Col>
		</Row>
		<Row>
			<Col span={12}>col-12</Col>
			<Col span={12}>col-12</Col>
		</Row>
		<Row>
			<Col span={8}>col-8</Col>
			<Col span={8}>col-8</Col>
			<Col span={8}>col-8</Col>
		</Row>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block demo-case demo-case1",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:o("div",{children:[e($,{children:e(x,{span:24,children:"col"})}),o($,{children:[e(x,{span:12,children:"col-12"}),e(x,{span:12,children:"col-12"})]}),o($,{children:[e(x,{span:8,children:"col-8"}),e(x,{span:8,children:"col-8"}),e(x,{span:8,children:"col-8"})]})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u7684\u7528\u6CD5\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"350px"},readOnly:!0,defaultValue:c})})]})})}function hc(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Row, Col } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Row align='top'>
		    <Col span={6}>col-6</Col>
			<Col span={6}>col-6</Col>
			<Col span={6}>col-6</Col>
			<Col span={6}>col-6</Col>
		</Row>
		<Row align='middle'>
			<Col span={6}>col-6</Col>
			<Col span={6}>col-6</Col>
			<Col span={6}>col-6</Col>
			<Col span={6}>col-6</Col>
		</Row>
		<Row align='bottom'>
			<Col span={6}>col-6</Col>
			<Col span={6}>col-6</Col>
			<Col span={6}>col-6</Col>
			<Col span={6}>col-6</Col>
		</Row>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block demo-case demo-case2",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:o("div",{children:[o($,{align:"top",children:[e(x,{span:6,children:"col-6"}),e(x,{span:6,children:"col-6"}),e(x,{span:6,children:"col-6"}),e(x,{span:6,children:"col-6"})]}),o($,{align:"middle",children:[e(x,{span:6,children:"col-6"}),e(x,{span:6,children:"col-6"}),e(x,{span:6,children:"col-6"}),e(x,{span:6,children:"col-6"})]}),o($,{align:"bottom",children:[e(x,{span:6,children:"col-6"}),e(x,{span:6,children:"col-6"}),e(x,{span:6,children:"col-6"}),e(x,{span:6,children:"col-6"})]})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u5BF9\u9F50"}),e("div",{className:"code-box-description",children:"\u5B50\u5143\u7D20\u5782\u76F4\u5BF9\u9F50\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",readOnly:!0,style:{height:"420px"},defaultValue:c})})]})})}function mc(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Row, Col, Divider } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Divider orientation="left">sub-element align left</Divider>
		<Row justify="start">
		  <Col span={4}>col-4</Col>
		  <Col span={4}>col-4</Col>
		  <Col span={4}>col-4</Col>
		  <Col span={4}>col-4</Col>
		</Row>

		<Divider orientation="left">sub-element align center</Divider>
		<Row justify="center">
		  <Col span={4}>col-4</Col>
		  <Col span={4}>col-4</Col>
		  <Col span={4}>col-4</Col>
		  <Col span={4}>col-4</Col>
		</Row>

		<Divider orientation="left">sub-element align right</Divider>
		<Row justify="end">
		  <Col span={4}>col-4</Col>
		  <Col span={4}>col-4</Col>
		  <Col span={4}>col-4</Col>
		  <Col span={4}>col-4</Col>
		</Row>

		<Divider orientation="left">sub-element monospaced arrangement</Divider>
		<Row justify="space-between">
		  <Col span={4}>col-4</Col>
		  <Col span={4}>col-4</Col>
		  <Col span={4}>col-4</Col>
		  <Col span={4}>col-4</Col>
		</Row>

		<Divider orientation="left">sub-element align full</Divider>
		<Row justify="space-around">
		  <Col span={4}>col-4</Col>
		  <Col span={4}>col-4</Col>
		  <Col span={4}>col-4</Col>
		  <Col span={4}>col-4</Col>
		</Row>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block demo-case demo-case3",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:o("div",{children:[e(O,{orientation:"left",children:"sub-element align left"}),o($,{justify:"start",children:[e(x,{span:4,children:"col-4"}),e(x,{span:4,children:"col-4"}),e(x,{span:4,children:"col-4"}),e(x,{span:4,children:"col-4"})]}),e(O,{orientation:"left",children:"sub-element align center"}),o($,{justify:"center",children:[e(x,{span:4,children:"col-4"}),e(x,{span:4,children:"col-4"}),e(x,{span:4,children:"col-4"}),e(x,{span:4,children:"col-4"})]}),e(O,{orientation:"left",children:"sub-element align right"}),o($,{justify:"end",children:[e(x,{span:4,children:"col-4"}),e(x,{span:4,children:"col-4"}),e(x,{span:4,children:"col-4"}),e(x,{span:4,children:"col-4"})]}),e(O,{orientation:"left",children:"sub-element monospaced arrangement"}),o($,{justify:"space-between",children:[e(x,{span:4,children:"col-4"}),e(x,{span:4,children:"col-4"}),e(x,{span:4,children:"col-4"}),e(x,{span:4,children:"col-4"})]}),e(O,{orientation:"left",children:"sub-element align full"}),o($,{justify:"space-around",children:[e(x,{span:4,children:"col-4"}),e(x,{span:4,children:"col-4"}),e(x,{span:4,children:"col-4"}),e(x,{span:4,children:"col-4"})]})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u6392\u7248"}),o("div",{className:"code-box-description",children:[e("div",{children:"\u5E03\u5C40\u57FA\u7840\u3002"}),e("div",{children:"\u5B50\u5143\u7D20\u6839\u636E\u4E0D\u540C\u7684\u503C start,center,end,space-between,space-around\uFF0C\u5206\u522B\u5B9A\u4E49\u5176\u5728\u7236\u8282\u70B9\u91CC\u9762\u7684\u6392\u7248\u65B9\u5F0F\u3002"})]}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",readOnly:!0,style:{height:"800px"},defaultValue:c})})]})})}function pc(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Row, Col, Divider } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Row>
			<Col span={6} order={4}>
			    1 col-order-4
			</Col>
			<Col span={6} order={3}>
			    2 col-order-3
			</Col>
			<Col span={6} order={2}>
			    3 col-order-2
			</Col>
			<Col span={6} order={1}>
			    4 col-order-1
			</Col>
		</Row>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block demo-case demo-case3",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:e("div",{children:o($,{children:[e(x,{span:6,order:4,children:"1 col-order-4"}),e(x,{span:6,order:3,children:"2 col-order-3"}),e(x,{span:6,order:2,children:"3 col-order-2"}),e(x,{span:6,order:1,children:"4 col-order-1"})]})})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u6392\u5E8F"}),e("div",{className:"code-box-description",children:"\u901A\u8FC7 order \u6765\u6539\u53D8\u5143\u7D20\u7684\u6392\u5E8F\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",readOnly:!0,style:{height:"400px"},defaultValue:c})})]})})}function bc(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Row, Col, Divider } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Divider orientation="left">sub-element align left</Divider>
		<Row justify="start">
		  <Col span={4}>col-4</Col>
		  <Col span={4}>col-4</Col>
		  <Col span={4}>col-4</Col>
		  <Col span={4}>col-4</Col>
		</Row>

		<Divider orientation="left">sub-element align center</Divider>
		<Row justify="center">
		  <Col span={4}>col-4</Col>
		  <Col span={4}>col-4</Col>
		  <Col span={4}>col-4</Col>
		  <Col span={4}>col-4</Col>
		</Row>

		<Divider orientation="left">sub-element align right</Divider>
		<Row justify="end">
		  <Col span={4}>col-4</Col>
		  <Col span={4}>col-4</Col>
		  <Col span={4}>col-4</Col>
		  <Col span={4}>col-4</Col>
		</Row>

		<Divider orientation="left">sub-element monospaced arrangement</Divider>
		<Row justify="space-between">
		  <Col span={4}>col-4</Col>
		  <Col span={4}>col-4</Col>
		  <Col span={4}>col-4</Col>
		  <Col span={4}>col-4</Col>
		</Row>

		<Divider orientation="left">sub-element align full</Divider>
		<Row justify="space-around">
		  <Col span={4}>col-4</Col>
		  <Col span={4}>col-4</Col>
		  <Col span={4}>col-4</Col>
		  <Col span={4}>col-4</Col>
		</Row>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block demo-case demo-case3",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:o("div",{children:[o($,{children:[e(x,{span:8,children:"col-8"}),e(x,{span:8,offset:8,children:"col-8"})]}),o($,{children:[e(x,{span:6,offset:6,children:"col-6 col-offset-6"}),e(x,{span:6,offset:6,children:"col-6 col-offset-6"})]})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u5DE6\u53F3\u504F\u79FB"}),o("div",{className:"code-box-description",children:[e("div",{children:"\u5217\u504F\u79FB\u3002"}),o("div",{children:["\u4F7F\u7528 offset \u53EF\u4EE5\u5C06\u5217\u5411\u53F3\u4FA7\u504F\u3002\u4F8B\u5982\uFF0Coffset=",4," \u5C06\u5143\u7D20\u5411\u53F3\u4FA7\u504F\u79FB\u4E86 4 \u4E2A\u5217\uFF08column\uFF09\u7684\u5BBD\u5EA6\u3002"]})]}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",readOnly:!0,style:{height:"800px"},defaultValue:c})})]})})}function Cc(){return o(A,{className:"demo-grid",children:[e("h2",{className:"intro-title",children:"Grid \u6805\u683C"}),e("p",{className:"intro-content",children:"24 \u6805\u683C\u7CFB\u7EDF\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(rc,{}),e(hc,{}),e(mc,{}),e(pc,{}),e(bc,{}),e("h3",{className:"base-title",children:"API"}),e("h4",{className:"base-title",children:"Row"}),o("table",{className:"attri-table",children:[e("thead",{children:o("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),o("tbody",{children:[o("tr",{children:[e("td",{children:"align"}),e("td",{children:"\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F"}),e("td",{children:"top | middle | bottom"}),e("td",{children:"top"})]}),o("tr",{children:[e("td",{children:"justify"}),e("td",{children:"\u6C34\u5E73\u6392\u5217\u65B9\u5F0F"}),e("td",{children:"start | end | center | space-around | space-between"}),e("td",{children:"start"})]}),o("tr",{children:[e("td",{children:"wrap"}),e("td",{children:"\u662F\u5426\u81EA\u52A8\u6362\u884C"}),e("td",{children:"boolean"}),e("td",{children:"true"})]})]})]}),e("h4",{className:"base-title",children:"Col"}),o("table",{className:"attri-table",children:[e("thead",{children:o("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),o("tbody",{children:[o("tr",{children:[e("td",{children:"span"}),e("td",{children:"\u6805\u683C\u5360\u4F4D\u683C\u6570\uFF0C\u4E3A 0 \u65F6\u76F8\u5F53\u4E8E display: none"}),e("td",{children:"number"}),e("td",{children:"--"})]}),o("tr",{children:[e("td",{children:"order"}),e("td",{children:"\u6805\u683C\u987A\u5E8F"}),e("td",{children:"number"}),e("td",{children:"0"})]}),o("tr",{children:[e("td",{children:"offset"}),e("td",{children:"\u6805\u683C\u5DE6\u4FA7\u7684\u95F4\u9694\u683C\u6570\uFF0C\u95F4\u9694\u5185\u4E0D\u53EF\u4EE5\u6709\u6805\u683C"}),e("td",{children:"number"}),e("td",{children:"0"})]})]})]})]})}const{Header:gc,Footer:Fc,Content:Nc,Sider:rt}=q;function xc(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Layout } from 'ygbh';
	const { Header, Footer, Content, Sider } = Layout;
	ReactDOM.render(
	  <>
	    <div>
		<Layout>
			<Header>Header</Header>
			<Content>Content</Content>
			<Footer>Footer</Footer>
		</Layout>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block demo-case demo-case1",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:e("div",{children:o(q,{children:[e(gc,{children:"Header"}),e(Nc,{children:"Content"}),e(Fc,{children:"Footer"})]})})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u7684\u7528\u6CD5\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"350px"},readOnly:!0,defaultValue:c})})]})})}function Ec(){const s=[{val1:"className",val2:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B",val3:"string",val4:"--"}];s.sort((c,a)=>c.val1.localeCompare(a.val1));const t=[{val1:"className",val2:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B",val3:"string",val4:"--"}];return t.sort((c,a)=>c.val1.localeCompare(a.val1)),o(A,{className:"demo-grid",children:[e("h2",{className:"intro-title",children:"Layout \u5E03\u5C40"}),e("p",{className:"intro-content",children:"\u534F\u52A9\u8FDB\u884C\u9875\u9762\u7EA7\u6574\u4F53\u5E03\u5C40\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(xc,{}),e("h3",{className:"base-title",children:"API"}),e("h4",{className:"base-title",children:"Layout"}),e("div",{className:"base-title-ms",children:"\u5E03\u5C40\u5BB9\u5668\u3002"}),o("table",{className:"attri-table",children:[e("thead",{children:o("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:s.map(c=>o("tr",{children:[e("td",{children:c.val1}),e("td",{children:c.val2}),e("td",{children:c.val3}),e("td",{children:c.val4})]},c.val1))})]}),e("h4",{className:"base-title",children:"Layout.Sider"}),e("div",{className:"base-title-ms",children:"\u5E03\u5C40\u5BB9\u5668\u3002"}),o("table",{className:"attri-table",children:[e("thead",{children:o("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:t.map(c=>o("tr",{children:[e("td",{children:c.val1}),e("td",{children:c.val2}),e("td",{children:c.val3}),e("td",{children:c.val4})]},c.val1))})]})]})}function vc(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Avatar } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Aaa>test01</Aaa>
		<Aaa>test02</Aaa>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:o("div",{children:[e(Y,{children:"test01"}),e(Y,{children:"test02"})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u7684\u7528\u6CD5\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"200px"},readOnly:!0,defaultValue:c})})]})})}function Bc(){return o(A,{children:[e("h2",{className:"intro-title",children:"Affix \u56FA\u9489"}),e("p",{className:"intro-content",children:"\u6F14\u793A\u7528"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(vc,{}),e("h3",{className:"base-title",children:"API"}),o("table",{className:"attri-table",children:[e("thead",{children:o("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:o("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B"}),e("td",{children:"string"}),e("td",{children:"--"})]})})]})]})}function fc(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Breadcrumb } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Breadcrumb>
		    <Breadcrumb.Item>Home</Breadcrumb.Item>
			<Breadcrumb.Item>
			    <a href="">Application Center</a>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
			    <a href="">Application List</a>
			</Breadcrumb.Item>
			<Breadcrumb.Item>An Application</Breadcrumb.Item>
		</Breadcrumb>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a}),i=()=>{n(!a)},u=()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")};return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:e("div",{children:o(H,{children:[e(H.Item,{children:"Home"}),e(H.Item,{children:e("a",{href:"",children:"Application Center"})}),e(H.Item,{children:e("a",{href:"",children:"Application List"})}),e(H.Item,{children:"An Application"})]})})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u7684\u7528\u6CD5\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:u,children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:i})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"300px"},readOnly:!0,defaultValue:c})})]})})}function yc(){return o(A,{children:[e("h2",{className:"intro-title",children:"Breadcrumb \u9762\u5305\u5C51"}),e("p",{className:"intro-content",children:"\u663E\u793A\u5F53\u524D\u9875\u9762\u5728\u7CFB\u7EDF\u5C42\u7EA7\u7ED3\u6784\u4E2D\u7684\u4F4D\u7F6E\uFF0C\u5E76\u80FD\u5411\u4E0A\u8FD4\u56DE\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(fc,{}),e("h3",{className:"base-title",children:"API"}),o("table",{className:"attri-table",children:[e("thead",{children:o("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:o("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B"}),e("td",{children:"string"}),e("td",{children:"--"})]})})]})]})}function Dc(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Pagination } from 'ygbh';
	const onChange = (page:number, pageSize:number) => {
		console.log(page, pageSize);
	}
	ReactDOM.render(
	  <>
	    <div>
		<Pagination defaultCurrent={2} total={50}></Pagination>
		<Pagination current={3} total={50}></Pagination>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:o("div",{children:[e(le,{defaultCurrent:2,total:50}),e(le,{current:3,total:50})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u7684\u7528\u6CD5\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"250px"},readOnly:!0,defaultValue:c})})]})})}function Ac(){return o(A,{children:[e("h2",{className:"intro-title",children:"Pagination \u5206\u9875"}),e("p",{className:"intro-content",children:"\u91C7\u7528\u5206\u9875\u7684\u5F62\u5F0F\u5206\u9694\u957F\u5217\u8868\uFF0C\u6BCF\u6B21\u53EA\u52A0\u8F7D\u4E00\u4E2A\u9875\u9762\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(Dc,{}),e("h3",{className:"base-title",children:"API"}),o("table",{className:"attri-table",children:[e("thead",{children:o("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:o("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B"}),e("td",{children:"string"}),e("td",{children:"--"})]})})]})]})}const{Step:ue}=ne;function kc(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Step } from 'ygbh';
	const { Step } = Steps;
	ReactDOM.render(
	  <>
	    <div>
		<Steps current={1}>
			<Step title="Finished" description="This is a description." />
			<Step title="In Progress" description="This is a description." />
			<Step title="Waiting" description="This is a description." />
		</Steps>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:e("div",{children:o(ne,{current:1,children:[e(ue,{title:"Finished",description:"This is a description."}),e(ue,{title:"In Progress",description:"This is a description."}),e(ue,{title:"Waiting",description:"This is a description."})]})})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u7684\u7528\u6CD5\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"240px"},readOnly:!0,defaultValue:c})})]})})}function wc(){return o(A,{children:[e("h2",{className:"intro-title",children:"Steps \u6B65\u9AA4\u6761"}),e("p",{className:"intro-content",children:"\u5F15\u5BFC\u7528\u6237\u6309\u7167\u6D41\u7A0B\u5B8C\u6210\u4EFB\u52A1\u7684\u5BFC\u822A\u6761\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(kc,{}),e("h3",{className:"base-title",children:"API"}),o("table",{className:"attri-table",children:[e("thead",{children:o("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:o("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B"}),e("td",{children:"string"}),e("td",{children:"--"})]})})]})]})}function Sc(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Checkbox } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Checkbox>Checkbox</Checkbox>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:o("div",{children:[e(oe,{children:"Checkbox"}),e("br",{}),e(oe,{checked:!0,children:"Checkbox"})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u7684\u7528\u6CD5\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"200px"},readOnly:!0,defaultValue:c})})]})})}function Rc(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Checkbox } from 'ygbh';
	ReactDOM.render(
		const [disabled, setDisabled] = useState(true);
		const toggleDisabled = () => {
			setDisabled(!disabled);
		}
	  <>
	    <div>
		<Checkbox disabled={disabled}>Checkbox</Checkbox>
		<br/>
		<Checkbox disabled={disabled} checked>Checkbox</Checkbox>
		<br /><br />
		<Button type="primary" onClick={toggleDisabled}>Toggle disabled</Button>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a}),i=()=>{n(!a)},u=()=>{let g=document.getElementById("globalInputCopy");g.value=c,g.select(),document.execCommand("copy"),g=null,alert("\u590D\u5236\u6210\u529F")},[l,h]=m.exports.useState(!0);return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:o("div",{children:[e(oe,{disabled:l,children:"Checkbox"}),e("br",{}),e(oe,{disabled:l,checked:!0,children:"Checkbox"}),e("br",{}),e("br",{}),e(F,{type:"primary",onClick:()=>{h(!l)},children:"Toggle disabled"})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u4E0D\u53EF\u7528"}),e("div",{className:"code-box-description",children:"checkbox \u4E0D\u53EF\u7528\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:u,children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:i})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"300px"},readOnly:!0,defaultValue:c})})]})})}function Ic(){const s=[{val1:"className",val2:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B",val3:"string",val4:"--"},{val1:"checked",val2:"\u6307\u5B9A\u5F53\u524D\u662F\u5426\u9009\u4E2D",val3:"boolean",val4:"false"},{val1:"disabled",val2:"\u7981\u7528 Checkbox",val3:"boolean",val4:"false"}];return s.sort((t,c)=>t.val1.localeCompare(c.val1)),o(A,{children:[e("h2",{className:"intro-title",children:"Checkbox \u591A\u9009\u6846"}),e("p",{className:"intro-content",children:"\u591A\u9009\u6846\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(Sc,{}),e(Rc,{}),e("h3",{className:"base-title",children:"API"}),o("table",{className:"attri-table",children:[e("thead",{children:o("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:s.map(t=>o("tr",{children:[e("td",{children:t.val1}),e("td",{children:t.val2}),e("td",{children:t.val3}),e("td",{children:t.val4})]},t.val1))})]})]})}function Pc(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Radio } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Radio></Radio>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:e("div",{children:e(se,{children:"Radio1"})})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u7684\u7528\u6CD5\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"200px"},readOnly:!0,defaultValue:c})})]})})}function $c(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Radio, Button } from 'ygbh';
	const [disabled, setDisabled] = useState(true);
	const toggleDisabled = () => {
		setDisabled(!disabled);
	}
	ReactDOM.render(
	  <>
	    <div>
		<Radio disabled={disabled} checked={true}>Disabled</Radio>
		<Radio disabled={disabled} checked={false}>Disabled</Radio>
		<br /><br />
		<Button type="primary" onClick={toggleDisabled}>Toggle disabled</Button>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a}),i=()=>{n(!a)},u=()=>{let g=document.getElementById("globalInputCopy");g.value=c,g.select(),document.execCommand("copy"),g=null,alert("\u590D\u5236\u6210\u529F")},[l,h]=m.exports.useState(!0);return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:o("div",{children:[e(se,{disabled:l,checked:!0,children:"Disabled"}),e(se,{disabled:l,checked:!1,children:"Disabled"}),e("br",{}),e("br",{}),e(F,{type:"primary",onClick:()=>{h(!l)},children:"Toggle disabled"})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u4E0D\u53EF\u7528"}),e("div",{className:"code-box-description",children:"Radio \u4E0D\u53EF\u7528\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:u,children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:i})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"250px"},readOnly:!0,defaultValue:c})})]})})}function Vc(){const s=[{val1:"className",val2:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B",val3:"string",val4:"--"},{val1:"checked",val2:"\u6307\u5B9A\u5F53\u524D\u662F\u5426\u9009\u4E2D",val3:"boolean",val4:"false"},{val1:"disabled",val2:"\u7981\u7528 Radio",val3:"boolean",val4:"false"}];return s.sort((t,c)=>t.val1.localeCompare(c.val1)),o(A,{children:[e("h2",{className:"intro-title",children:"Radio \u5355\u9009\u6846"}),e("p",{className:"intro-content",children:"\u5355\u9009\u6846\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(Pc,{}),e($c,{}),e("h3",{className:"base-title",children:"API"}),o("table",{className:"attri-table",children:[e("thead",{children:o("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:s.map(t=>o("tr",{children:[e("td",{children:t.val1}),e("td",{children:t.val2}),e("td",{children:t.val3}),e("td",{children:t.val4})]},t.val1))})]})]})}function Oc(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Rate } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Rate></Rate>
		<br/>
		<Rate count={8}></Rate>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:o("div",{children:[e(G,{onBlur:()=>{console.log("onBlur")},onChange:E=>{console.log("onChange",E)},onFocus:()=>{console.log("onFocus")},onHoverChange:E=>{console.log("onHoverChange",E)},onKeyDown:E=>{console.log("onKeyDown",E)}}),e("br",{}),e(G,{count:8})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let E=document.getElementById("globalInputCopy");E.value=c,E.select(),document.execCommand("copy"),E=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"200px"},readOnly:!0,defaultValue:c})})]})})}function zc(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Rate } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Rate character="A"></Rate>
		<br/>
		<Rate character="\u597D"></Rate>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:o("div",{children:[e(G,{character:"A"}),e("br",{}),e(G,{character:"\u597D"})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u5176\u4ED6\u5B57\u7B26"}),e("div",{className:"code-box-description",children:"\u53EF\u4EE5\u5C06\u661F\u661F\u66FF\u6362\u4E3A\u5176\u4ED6\u5B57\u7B26\uFF0C\u6BD4\u5982\u5B57\u6BCD\uFF0C\u6570\u5B57\uFF0C\u5B57\u4F53\u56FE\u6807\u751A\u81F3\u4E2D\u6587\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"200px"},readOnly:!0,defaultValue:c})})]})})}function Uc(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Rate } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Rate></Rate>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:e("div",{children:e(G,{disabled:!0,defaultValue:2})})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u53EA\u8BFB"}),e("div",{className:"code-box-description",children:"\u53EA\u8BFB\uFF0C\u65E0\u6CD5\u8FDB\u884C\u9F20\u6807\u4EA4\u4E92\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"200px"},readOnly:!0,defaultValue:c})})]})})}function Lc(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Rate } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Rate defaultValue={3}></Rate><span>allowClear: true</span>
		<br/>
		<Rate defaultValue={3} allowClear={false}></Rate><span>allowClear: false</span>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:o("div",{children:[e(G,{defaultValue:3}),e("span",{children:"allowClear: true"}),e("br",{}),e(G,{defaultValue:3,allowClear:!1}),e("span",{children:"allowClear: false"})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u6E05\u9664"}),e("div",{className:"code-box-description",children:"\u652F\u6301\u5141\u8BB8\u6216\u8005\u7981\u7528\u6E05\u9664\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"200px"},readOnly:!0,defaultValue:c})})]})})}function Mc(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Rate } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Rate></Rate>
		<br/>
		<Rate count={8}></Rate>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:e("div",{children:e(G,{tooltips:["terrible","bad","normal","good","wonderful"]})})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let h=document.getElementById("globalInputCopy");h.value=c,h.select(),document.execCommand("copy"),h=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"200px"},readOnly:!0,defaultValue:c})})]})})}function Tc(){return o(A,{children:[e("h2",{className:"intro-title",children:"Rate \u8BC4\u5206"}),e("p",{className:"intro-content",children:"\u8BC4\u5206\u7EC4\u4EF6\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(Oc,{}),e(zc,{}),e(Uc,{}),e(Lc,{}),e(Mc,{}),e("h3",{className:"base-title",children:"API"}),o("table",{className:"attri-table",children:[e("thead",{children:o("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),o("tbody",{children:[o("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B"}),e("td",{children:"string"}),e("td",{children:"--"})]}),o("tr",{children:[e("td",{children:"character"}),e("td",{children:"\u81EA\u5B9A\u4E49\u5B57\u7B26"}),e("td",{children:"string"}),e("td",{children:"\u2605"})]}),o("tr",{children:[e("td",{children:"count"}),e("td",{children:"star \u603B\u6570"}),e("td",{children:"number"}),e("td",{children:"5"})]}),o("tr",{children:[e("td",{children:"defaultValue"}),e("td",{children:"\u9ED8\u8BA4\u503C"}),e("td",{children:"number"}),e("td",{children:"0"})]}),o("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u53EA\u8BFB\uFF0C\u65E0\u6CD5\u8FDB\u884C\u4EA4\u4E92"}),e("td",{children:"boolean"}),e("td",{children:"false"})]}),o("tr",{children:[e("td",{children:"value"}),e("td",{children:"\u5F53\u524D\u6570\uFF0C\u53D7\u63A7\u503C"}),e("td",{children:"number"}),e("td",{children:"--"})]}),o("tr",{children:[e("td",{children:"allowClear"}),e("td",{children:"\u662F\u5426\u5141\u8BB8\u518D\u6B21\u70B9\u51FB\u540E\u6E05\u9664"}),e("td",{children:"boolean"}),e("td",{children:"true"})]}),o("tr",{children:[e("td",{children:"tooltips"}),e("td",{children:"\u81EA\u5B9A\u4E49\u6BCF\u9879\u7684\u63D0\u793A\u4FE1\u606F"}),e("td",{children:"string[]"}),e("td",{children:"--"})]}),o("tr",{children:[e("td",{children:"onBlur"}),e("td",{children:"\u5931\u53BB\u7126\u70B9\u65F6\u7684\u56DE\u8C03"}),e("td",{children:"function()"}),e("td",{children:"--"})]}),o("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u9009\u62E9\u65F6\u7684\u56DE\u8C03"}),e("td",{children:"function(value: number)"}),e("td",{children:"--"})]}),o("tr",{children:[e("td",{children:"onFocus"}),e("td",{children:"\u83B7\u53D6\u7126\u70B9\u65F6\u7684\u56DE\u8C03"}),e("td",{children:"function()"}),e("td",{children:"--"})]}),o("tr",{children:[e("td",{children:"onHoverChange"}),e("td",{children:"\u9F20\u6807\u7ECF\u8FC7\u65F6\u6570\u503C\u53D8\u5316\u7684\u56DE\u8C03"}),e("td",{children:"function(value: number)"}),e("td",{children:"--"})]}),o("tr",{children:[e("td",{children:"onKeyDown"}),e("td",{children:"\u6309\u952E\u56DE\u8C03"}),e("td",{children:"function(event)"}),e("td",{children:"--"})]})]})]})]})}function Kc(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Slider } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Slider defaultValue={30}></Slider>
		<Slider defaultValue={20}></Slider>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:o("div",{children:[e(ve,{defaultValue:30}),e(ve,{defaultValue:20})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u7684\u7528\u6CD5\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"200px"},readOnly:!0,defaultValue:c})})]})})}function _c(){return o(A,{children:[e("h2",{className:"intro-title",children:"Slider \u6ED1\u52A8\u8F93\u5165\u6761"}),e("p",{className:"intro-content",children:"\u6ED1\u52A8\u578B\u8F93\u5165\u5668\uFF0C\u5C55\u793A\u5F53\u524D\u503C\u548C\u53EF\u9009\u8303\u56F4\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(Kc,{}),e("h3",{className:"base-title",children:"API"}),o("table",{className:"attri-table",children:[e("thead",{children:o("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:o("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B"}),e("td",{children:"string"}),e("td",{children:"--"})]})})]})]})}function Gc(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Switch } from 'ygbh';
	function onChange(checked) {
		console.log(123);
	}
	function onClick(checked) {
		console.log(222);
	}
	ReactDOM.render(
	  <>
	    <div>
		<Switch defaultChecked onChange={onChange} onClick={onClick}></Switch>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a}),i=()=>{n(!a)},u=()=>{let p=document.getElementById("globalInputCopy");p.value=c,p.select(),document.execCommand("copy"),p=null,alert("\u590D\u5236\u6210\u529F")};function l(p){console.log(`switch to-change ${p}`)}function h(p){console.log(`switch to-click ${p}`)}return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:e("div",{children:e(K,{defaultChecked:!0,onChange:l,onClick:h})})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u7684\u7528\u6CD5\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:u,children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:i})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"280px"},readOnly:!0,defaultValue:c})})]})})}function jc(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Switch, Button } from 'ygbh';
	const [disabled, setDisabled] = useState(true);
	const toggle = () => {
	    setDisabled(!disabled);
	};
	ReactDOM.render(
	  <>
	    <div>
		<Switch disabled={disabled} defaultChecked />
		<br />
		<Button type="primary" onClick={toggle}>
		    Toggle disabled
		</Button>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a}),i=()=>{n(!a)},u=()=>{let g=document.getElementById("globalInputCopy");g.value=c,g.select(),document.execCommand("copy"),g=null,alert("\u590D\u5236\u6210\u529F")},[l,h]=m.exports.useState(!0);return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:o("div",{children:[e(K,{disabled:l,defaultChecked:!0}),e("br",{}),e(F,{type:"primary",onClick:()=>{h(!l)},children:"Toggle disabled"})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u4E0D\u53EF\u7528"}),e("div",{className:"code-box-description",children:"Switch \u5931\u6548\u72B6\u6001\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:u,children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:i})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"300px"},readOnly:!0,defaultValue:c})})]})})}function Hc(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Switch, Icon } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Switch checkedChildren="\u5F00\u542F" unCheckedChildren="\u5173\u95ED" defaultChecked />
		<br />
		<Switch checkedChildren={<Icon name="bottom"></Icon>} unCheckedChildren={<Icon name="top"></Icon>} defaultChecked />
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:o("div",{children:[e(K,{checkedChildren:"\u5F00\u542F",unCheckedChildren:"\u5173\u95ED",defaultChecked:!0}),e("br",{}),e(K,{checkedChildren:e(k,{name:"bottom"}),unCheckedChildren:e(k,{name:"top"}),defaultChecked:!0})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u6587\u5B57\u548C\u56FE\u6807"}),e("div",{className:"code-box-description",children:"\u5E26\u6709\u6587\u5B57\u548C\u56FE\u6807\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"280px"},readOnly:!0,defaultValue:c})})]})})}function qc(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Switch } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Switch defaultChecked />
		<br />
		<Switch size="small" defaultChecked />
		<br />
		<Switch size="small" defaultChecked checkedChildren="\u5F00\u542F" unCheckedChildren="\u5173\u95ED" />
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:o("div",{children:[e(K,{defaultChecked:!0}),e("br",{}),e(K,{size:"small",defaultChecked:!0}),e("br",{}),e(K,{size:"small",defaultChecked:!0,checkedChildren:"\u5F00\u542F",unCheckedChildren:"\u5173\u95ED"})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u4E24\u79CD\u5927\u5C0F"}),e("div",{className:"code-box-description",children:'size="small" \u8868\u793A\u5C0F\u53F7\u5F00\u5173\u3002'}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"280px"},readOnly:!0,defaultValue:c})})]})})}function Zc(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Switch } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Switch defaultChecked loading />
		<br />
		<Switch size="small" defaultChecked loading />
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:o("div",{children:[e(K,{defaultChecked:!0,loading:!0}),e("br",{}),e(K,{size:"small",defaultChecked:!0,loading:!0})]})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u52A0\u8F7D\u4E2D"}),e("div",{className:"code-box-description",children:"\u6807\u8BC6\u5F00\u5173\u64CD\u4F5C\u4ECD\u5728\u6267\u884C\u4E2D\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"200px"},readOnly:!0,defaultValue:c})})]})})}function Jc(){const s=[{val1:"className",val2:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B",val3:"string",val4:"--"},{val1:"checked",val2:"\u6307\u5B9A\u5F53\u524D\u662F\u5426\u9009\u4E2D",val3:"boolean",val4:"false"},{val1:"defaultChecked",val2:"\u521D\u59CB\u662F\u5426\u9009\u4E2D",val3:"boolean",val4:"false"},{val1:"disabled",val2:"\u662F\u5426\u7981\u7528",val3:"boolean",val4:"false"},{val1:"size",val2:"\u5F00\u5173\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\uFF1Adefault small",val3:"string",val4:"default"},{val1:"checkedChildren",val2:"\u9009\u4E2D\u65F6\u7684\u5185\u5BB9",val3:"ReactNode",val4:"--"},{val1:"unCheckedChildren",val2:"\u975E\u9009\u4E2D\u65F6\u7684\u5185\u5BB9",val3:"ReactNode",val4:"--"},{val1:"loading",val2:"\u52A0\u8F7D\u4E2D\u7684\u5F00\u5173",val3:"boolean",val4:"false"}];s.sort((c,a)=>c.val1.localeCompare(a.val1));const t=[{val1:"onChange",val2:"\u53D8\u5316\u65F6\u56DE\u8C03\u51FD\u6570",val3:"function(checked: boolean, event: Event)",val4:"--"},{val1:"onClick",val2:"\u70B9\u51FB\u65F6\u56DE\u8C03\u51FD\u6570",val3:"function(checked: boolean, event: Event)",val4:"--"}];return t.sort((c,a)=>c.val1.localeCompare(a.val1)),o(A,{children:[e("h2",{className:"intro-title",children:"Switch \u5F00\u5173"}),e("p",{className:"intro-content",children:"\u5F00\u5173\u9009\u62E9\u5668\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(Gc,{}),e(jc,{}),e(Hc,{}),e(qc,{}),e(Zc,{}),e("h3",{className:"base-title",children:"API"}),o("table",{className:"attri-table",children:[e("thead",{children:o("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),o("tbody",{children:[s.map(c=>o("tr",{children:[e("td",{children:c.val1}),e("td",{children:c.val2}),e("td",{children:c.val3}),e("td",{children:c.val4})]},c.val1)),t.map(c=>o("tr",{children:[e("td",{children:c.val1}),e("td",{children:c.val2}),e("td",{children:c.val3}),e("td",{children:c.val4})]},c.val1))]})]})]})}function Wc(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Card } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
			<p>Card content</p>
			<p>Card content</p>
			<p>Card content</p>
		</Card>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:e("div",{children:o(de,{title:"Default size card",extra:e("a",{href:"#",children:"More"}),style:{width:300},children:[e("p",{children:"Card content"}),e("p",{children:"Card content"}),e("p",{children:"Card content"})]})})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u5178\u578B\u5361\u7247"}),e("div",{className:"code-box-description",children:"\u5305\u542B\u6807\u9898\u3001\u5185\u5BB9\u3001\u64CD\u4F5C\u533A\u57DF\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"240px"},readOnly:!0,defaultValue:c})})]})})}function Qc(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Card } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
			<p>Card content</p>
			<p>Card content</p>
			<p>Card content</p>
		</Card>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:e("div",{style:{background:"#f1f1f1",padding:"20px"},children:o(de,{title:"Default size card",bordered:!1,extra:e("a",{href:"#",children:"More"}),style:{width:300},children:[e("p",{children:"Card content"}),e("p",{children:"Card content"}),e("p",{children:"Card content"})]})})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u65E0\u8FB9\u6846"}),e("div",{className:"code-box-description",children:"\u5728\u7070\u8272\u80CC\u666F\u4E0A\u4F7F\u7528\u65E0\u8FB9\u6846\u7684\u5361\u7247\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"240px"},readOnly:!0,defaultValue:c})})]})})}function Xc(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Card } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
			<p>Card content</p>
			<p>Card content</p>
			<p>Card content</p>
		</Card>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:e("div",{style:{background:"#f1f1f1",padding:"20px"},children:o(de,{style:{width:300},children:[e("p",{children:"Card content"}),e("p",{children:"Card content"}),e("p",{children:"Card content"})]})})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u7B80\u6D01\u5361\u7247"}),e("div",{className:"code-box-description",children:"\u53EA\u5305\u542B\u5185\u5BB9\u533A\u57DF\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"240px"},readOnly:!0,defaultValue:c})})]})})}function Yc(){const s=[{val1:"className",val2:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B",val3:"string",val4:"--"},{val1:"bordered",val2:"\u662F\u5426\u6709\u8FB9\u6846",val3:"boolean",val4:"true"},{val1:"extra",val2:"\u5361\u7247\u53F3\u4E0A\u89D2\u7684\u64CD\u4F5C\u533A\u57DF",val3:"ReactNode",val4:"--"},{val1:"title",val2:"\u5361\u7247\u6807\u9898",val3:"ReactNode",val4:"--"}];return s.sort((t,c)=>t.val1.localeCompare(c.val1)),o(A,{children:[e("h2",{className:"intro-title",children:"Card \u5361\u7247"}),e("p",{className:"intro-content",children:"\u901A\u7528\u5361\u7247\u5BB9\u5668\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(Wc,{}),e(Qc,{}),e(Xc,{}),e("h3",{className:"base-title",children:"API"}),o("table",{className:"attri-table",children:[e("thead",{children:o("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:s.map(t=>o("tr",{children:[e("td",{children:t.val1}),e("td",{children:t.val2}),e("td",{children:t.val3}),e("td",{children:t.val4})]},t.val1))})]})]})}const{Panel:re}=W;function et(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Collapse } from 'ygbh';
	const { Panel } = Collapse;
	ReactDOM.render(
	  <>
	    <div>
		<Collapse>
			<Panel header="This is panel header 1" key="1">
			    <div>11</div>
			</Panel>
			<Panel header="This is panel header 2" key="2">
			    <div>22</div>
			</Panel>
			<Panel header="This is panel header 3" key="3">
			    <div>33</div>
			</Panel>
		</Collapse>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:e("div",{children:o(W,{defaultActiveKey:["1"],children:[e(re,{header:"This is panel header 1",keya:"1",children:e("div",{children:"11"})}),e(re,{header:"This is panel header 2",keya:"2",children:e("div",{children:"22"})}),e(re,{header:"This is panel header 3",keya:"3",children:e("div",{children:"33"})})]})})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u7684\u7528\u6CD5\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"200px"},readOnly:!0,defaultValue:c})})]})})}const{Panel:we}=W;function ot(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Collapse } from 'ygbh';
	const { Panel } = Collapse;
	ReactDOM.render(
	  <>
	    <div>
		<Collapse>
			<Panel header="This is panel header 1" key="1">
			    <div>11</div>
			</Panel>
			<Panel header="This is panel header 2" key="2" showArrow={false}>
			    <div>22</div>
			</Panel>
		</Collapse>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:e("div",{children:o(W,{children:[e(we,{header:"This is panel header 1",children:e("div",{children:"11"})},"1"),e(we,{header:"This is panel header 2",showArrow:!1,children:e("div",{children:"22"})},"2")]})})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u9690\u85CF\u7BAD\u5934"}),o("div",{className:"code-box-description",children:["\u4F60\u53EF\u4EE5\u901A\u8FC7 showArrow=",!1," \u9690\u85CF CollapsePanel \u7EC4\u4EF6\u7684\u7BAD\u5934\u56FE\u6807\u3002"]}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"300px"},readOnly:!0,defaultValue:c})})]})})}function ct(){const s=[{val1:"className",val2:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B",val3:"string",val4:"--"}];s.sort((c,a)=>c.val1.localeCompare(a.val1));const t=[{val1:"header",val2:"\u9762\u677F\u5934\u5185\u5BB9",val3:"ReactNode",val4:"--"},{val1:"key",val2:"\u5BF9\u5E94 activeKey",val3:"string | number",val4:"--"},{val1:"showArrow",val2:"\u662F\u5426\u5C55\u793A\u5F53\u524D\u9762\u677F\u4E0A\u7684\u7BAD\u5934",val3:"boolean",val4:"true"}];return t.sort((c,a)=>c.val1.localeCompare(a.val1)),o(A,{children:[e("h2",{className:"intro-title",children:"Collapse \u6298\u53E0\u9762\u677F"}),e("p",{className:"intro-content",children:"\u53EF\u4EE5\u6298\u53E0/\u5C55\u5F00\u7684\u5185\u5BB9\u533A\u57DF\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(et,{}),e(ot,{}),e("h3",{className:"base-title",children:"API"}),e("h4",{className:"base-title",children:"Collapse"}),o("table",{className:"attri-table",children:[e("thead",{children:o("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:s.map(c=>o("tr",{children:[e("td",{children:c.val1}),e("td",{children:c.val2}),e("td",{children:c.val3}),e("td",{children:c.val4})]},c.val1))})]}),e("h4",{className:"base-title",children:"Collapse.Panel"}),o("table",{className:"attri-table",children:[e("thead",{children:o("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:t.map(c=>o("tr",{children:[e("td",{children:c.val1}),e("td",{children:c.val2}),e("td",{children:c.val3}),e("td",{children:c.val4})]},c.val1))})]})]})}function tt(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Descriptions } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Descriptions title="User Info">
			<Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
			<Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
			<Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
			<Descriptions.Item label="Remark">empty</Descriptions.Item>
		</Descriptions>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a}),i=()=>{n(!a)},u=()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")};return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:e("div",{children:o(U,{title:"User Info",children:[e(U.Item,{label:"UserName",children:"Zhou Maomao"}),e(U.Item,{label:"Telephone",children:"1810000000"}),e(U.Item,{label:"Live",children:"Hangzhou, Zhejiang"}),e(U.Item,{label:"Remark",children:"empty"})]})})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u7B80\u5355\u7684\u5C55\u793A\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:u,children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:i})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"250px"},readOnly:!0,defaultValue:c})})]})})}function at(s){const t="https://codepen.io/xiebaolin/pen/PoKGBRR",c=`
	import { Descriptions } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Descriptions title="User Info" column={2}>
			<Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
			<Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
			<Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
			<Descriptions.Item label="Remark">empty</Descriptions.Item>
		</Descriptions>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),d=r("source-case-mod",{"show-case-core":a}),i=()=>{n(!a)},u=()=>{let l=document.getElementById("globalInputCopy");l.value=c,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")};return e("div",{className:"demo-block",children:o("section",{className:d,children:[e("section",{className:"code-box-demo",children:e("div",{children:o(U,{title:"User Info",column:2,children:[e(U.Item,{label:"UserName",children:"Zhou Maomao"}),e(U.Item,{label:"Telephone",children:"1810000000"}),e(U.Item,{label:"Live",children:"Hangzhou, Zhejiang"}),e(U.Item,{label:"Remark",children:"empty"})]})})}),o("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u53EF\u9009\u62E9\u4E00\u884C\u663E\u793A\u591A\u5C11\u4E2A\u3002"}),o("div",{className:"code-box-actions",children:[e("a",{href:t,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:u,children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:i})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"250px"},readOnly:!0,defaultValue:c})})]})})}function lt(){return o(A,{children:[e("h2",{className:"intro-title",children:"Descriptions \u63CF\u8FF0\u5217\u8868"}),e("p",{className:"intro-content",children:"\u6210\u7EC4\u5C55\u793A\u591A\u4E2A\u53EA\u8BFB\u5B57\u6BB5\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(tt,{}),e(at,{}),e("h3",{className:"base-title",children:"API"}),e("h4",{className:"base-title",children:"Descriptions"}),o("table",{className:"attri-table",children:[e("thead",{children:o("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),o("tbody",{children:[o("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B"}),e("td",{children:"string"}),e("td",{children:"--"})]}),o("tr",{children:[e("td",{children:"title"}),e("td",{children:"\u63CF\u8FF0\u5217\u8868\u7684\u6807\u9898\uFF0C\u663E\u793A\u5728\u6700\u9876\u90E8"}),e("td",{children:"ReactNode"}),e("td",{children:"--"})]}),o("tr",{children:[e("td",{children:"column"}),e("td",{children:"\u4E00\u884C\u7684 DescriptionItems \u6570\u91CF"}),e("td",{children:"number"}),e("td",{children:"3"})]})]})]}),e("h4",{className:"base-title",children:"DescriptionItem"}),o("table",{className:"attri-table",children:[e("thead",{children:o("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:o("tr",{children:[e("td",{children:"label"}),e("td",{children:"\u5185\u5BB9\u7684\u63CF\u8FF0"}),e("td",{children:"ReactNode"}),e("td",{children:"--"})]})})]})]})}const nt=[{path:"/",component:xe},{path:"/component/installation",component:xe},{path:"/component/quickstart",component:Ye},{path:"/component/aaa",component:Bo},{path:"/component/aab",component:yo}],st=[{path:"/component/divider",component:ko},{path:"/component/tag",component:Io},{path:"/component/icon",component:Oo},{path:"/component/avatar",component:Lo},{path:"/component/badge",component:Go},{path:"/component/button",component:ec},{path:"/component/input",component:dc},{path:"/component/select",component:uc},{path:"/component/grid",component:Cc},{path:"/component/layout",component:Ec},{path:"/component/affix",component:Bc},{path:"/component/breadcrumb",component:yc},{path:"/component/pagination",component:Ac},{path:"/component/steps",component:wc},{path:"/component/checkbox",component:Ic},{path:"/component/radio",component:Vc},{path:"/component/rate",component:Tc},{path:"/component/slider",component:_c},{path:"/component/switch",component:Jc},{path:"/component/card",component:Yc},{path:"/component/collapse",component:ct},{path:"/component/descriptions",component:lt}];function dt(s){return e(j,{children:e(Ue,{children:e(m.exports.Suspense,{fallback:e("div",{children:"Loading..."}),children:o(Le,{children:[nt.map(t=>e(Fe,{exact:!0,path:t.path,component:t.component},t.path)),st.map(t=>e(Fe,{exact:!0,path:t.path,component:t.component},t.path))]})})})})}Me.render(e(ge.StrictMode,{children:e(dt,{})}),document.getElementById("root"));
