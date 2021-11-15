var $e=Object.defineProperty,Ve=Object.defineProperties;var Oe=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var be=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var oe=(d,o,t)=>o in d?$e(d,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):d[o]=t,B=(d,o)=>{for(var t in o||(o={}))be.call(o,t)&&oe(d,t,o[t]);if(Q)for(var t of Q(o))Ce.call(o,t)&&oe(d,t,o[t]);return d},D=(d,o)=>Ve(d,Oe(o));var f=(d,o)=>{var t={};for(var a in d)be.call(d,a)&&o.indexOf(a)<0&&(t[a]=d[a]);if(d!=null&&Q)for(var a of Q(d))o.indexOf(a)<0&&Ce.call(d,a)&&(t[a]=d[a]);return t};var I=(d,o,t)=>(oe(d,typeof o!="symbol"?o+"":o,t),t);import{j as te,L as ae,r as m,c as r,R as ge,H as ze,S as Ue,a as Fe,b as Me}from"./vendor.7598792b.js";const Te=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}};Te();const e=te.exports.jsx,c=te.exports.jsxs,j=te.exports.Fragment;function Le(d){return e("div",{className:"ygbh-header",children:c("div",{className:"ygbh-header-inter",children:["ygbh-react",e("a",{href:"https://gitee.com/xiebaolin/ygbh-react",title:"GitHub",target:"_blank",className:"pull-right skip-link",children:e("img",{className:"skip-img",src:"https://gitee.com/static/images/logo-black.svg"})}),e("a",{href:"https://xbl13670280929.github.io/index.html",target:"_blank",className:"pull-right",children:"V2\u7248\u672C"}),e("a",{href:"https://xbl13670280929.github.io/ygbh-plus.html",target:"_blank",className:"pull-right",children:"V3\u7248\u672C"})]})})}const Ke={title:"\u5F00\u53D1\u6307\u5357",children:[{title:"\u5B89\u88C5",menuUrl:"/component/installation"},{title:"\u5FEB\u901F\u4E0A\u624B",menuUrl:"/component/quickstart"}]},_e={title:"Basic",children:[{title:"Grid \u6805\u683C",menuUrl:"/component/grid"},{title:"Layout \u5E03\u5C40",menuUrl:"/component/layout"},{title:"Icon \u56FE\u6807",menuUrl:"/component/icon"},{title:"Button \u6309\u94AE",menuUrl:"/component/button"}]},Ge={title:"Form",children:[{title:"Radio \u5355\u9009\u6846",menuUrl:"/component/radio"},{title:"Checkbox \u591A\u9009\u6846",menuUrl:"/component/checkbox"},{title:"Input \u8F93\u5165\u6846",menuUrl:"/component/input"},{title:"Select \u9009\u62E9\u5668",menuUrl:"/component/select"},{title:"Switch \u5F00\u5173",menuUrl:"/component/switch"},{title:"Slider \u6ED1\u5757",menuUrl:"/component/slider"},{title:"Rate \u8BC4\u5206",menuUrl:"/component/rate"}]},je={title:"Data",children:[{title:"Tag \u6807\u7B7E",menuUrl:"/component/tag"},{title:"Pagination \u5206\u9875",menuUrl:"/component/pagination"},{title:"Badge \u6807\u8BB0",menuUrl:"/component/badge"},{title:"Avatar \u5934\u50CF",menuUrl:"/component/avatar"},{title:"Descriptions \u63CF\u8FF0\u5217\u8868",menuUrl:"/component/descriptions"}]},He={title:"Notice",children:[]},qe={title:"Navigation",children:[{title:"Affix \u56FA\u9489",menuUrl:"/component/affix"},{title:"Breadcrumb \u9762\u5305\u5C51",menuUrl:"/component/breadcrumb"},{title:"Steps \u6B65\u9AA4\u6761",menuUrl:"/component/steps"}]},Ze={title:"Others",children:[{title:"Card \u5361\u7247",menuUrl:"/component/card"},{title:"Collapse \u6298\u53E0\u9762\u677F",menuUrl:"/component/collapse"},{title:"Divider \u5206\u5272\u7EBF",menuUrl:"/component/divider"}]};var Ne=[Ke,_e,Ge,je,He,qe,Ze];const Je=Ne.map(d=>{const o=d.children.map(t=>e("li",{className:"group-hash-item",children:e(ae,{to:t.menuUrl,children:t.title})},t.menuUrl));return c("div",{className:"group-item",children:[e("div",{className:"group-item-title",children:d.title}),e("ul",{className:"group-hash-list",children:o})]},d.title)});function We(d){return e("div",{className:"ygbh-menu",children:Je})}function X(){return{menuUrl:"",title:""}}function Qe(d){const[o,t]=m.exports.useState(X()),[a,n]=m.exports.useState(X()),s=i=>{let u={},l=!1,h=X(),p=X();Ne.forEach(g=>{g.children&&g.children.forEach(N=>{l&&(p=JSON.parse(JSON.stringify(N)),l=!1),N.menuUrl==i&&(h=JSON.parse(JSON.stringify(u)),l=!0),u=JSON.parse(JSON.stringify(N))})}),t(JSON.parse(JSON.stringify(h))),n(JSON.parse(JSON.stringify(p))),u={}};return m.exports.useEffect(()=>{s(location.hash.slice(1))},[]),c("div",{className:"ygbh-footer",children:[e("div",{className:"footer-l",children:o.menuUrl&&c(ae,{className:"footer-link",to:o.menuUrl,children:["<\xA0",o.title]})}),e("div",{className:"footer-r",children:a.menuUrl&&c(ae,{className:"footer-link",to:a.menuUrl,children:[a.title,"\xA0>"]})}),e("input",{id:"globalInputCopy"})]})}function A(d){const{className:o}=d,t=r("element-doc",o);return c(j,{children:[e(Le,{}),c("div",{className:"ygbh-container",children:[e("div",{className:"ygbh-l-side",children:e("div",{className:"ygbh-l-side-inter",children:e(We,{})})}),c("div",{className:"ygbh-r-side",children:[e("div",{className:t,children:d.children}),e(Qe,{})]})]})]})}function xe(){return e(A,{children:c("div",{className:"demo-block",style:{padding:"20px"},children:[e("h2",{className:"intro-title",children:"\u5B89\u88C5"}),e("h3",{className:"base-title",children:"npm \u5B89\u88C5"}),e("p",{className:"base-content",children:"\u63A8\u8350\u4F7F\u7528 npm \u7684\u65B9\u5F0F\u5B89\u88C5\uFF0C\u5B83\u80FD\u66F4\u597D\u5730\u548C webpack \u6253\u5305\u5DE5\u5177\u914D\u5408\u4F7F\u7528\u3002"}),e("code",{className:"base-code-area",children:"npm i ygbh-react -S"}),e("h3",{className:"base-title",children:"CDN"}),e("p",{className:"base-content",children:"\u76EE\u524D\u53EF\u4EE5\u901A\u8FC7 unpkg.com/ygbh \u83B7\u53D6\u5230\u6700\u65B0\u7248\u672C\u7684\u8D44\u6E90\uFF0C\u5728\u9875\u9762\u4E0A\u5F15\u5165 js \u548C css \u6587\u4EF6\u5373\u53EF\u5F00\u59CB\u4F7F\u7528\u3002"}),c("code",{className:"base-code-area",children:[e("textarea",{readOnly:!0,className:"demo-core-box height20",value:"<!-- \u5F15\u5165\u6837\u5F0F -->"}),e("textarea",{readOnly:!0,className:"demo-core-box height20",value:'<link rel="stylesheet" href="//unpkg.com/ygbh-react/ygbh.css">'}),e("textarea",{readOnly:!0,className:"demo-core-box height20",value:"<!-- \u5F15\u5165\u7EC4\u4EF6\u5E93 -->"}),e("textarea",{readOnly:!0,className:"demo-core-box height20",value:'<script src="//unpkg.com/ygbh-react/ygbh.js"><\/script>'})]})]})})}function Xe(){return e(A,{children:c("div",{className:"demo-block",style:{padding:"20px"},children:[e("h2",{className:"intro-title",children:"\u5FEB\u901F\u4E0A\u624B"}),e("p",{className:"intro-content",children:"\u672C\u8282\u5C06\u4ECB\u7ECD\u5982\u4F55\u5728\u9879\u76EE\u4E2D\u4F7F\u7528 ygbh"}),e("h3",{className:"base-title",children:"\u5B8C\u6574\u5F15\u5165 ygbh"}),e("p",{className:"base-content",children:"\u5728 main.js \u4E2D\u5199\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A"}),c("code",{className:"base-code-area",children:[e("textarea",{readOnly:!0,className:"demo-core-box height20",value:"import { Divider } from 'ygbh'"}),e("textarea",{readOnly:!0,className:"demo-core-box height20",value:"import 'ygbh-react/ygbh.css';"})]})]})})}function b(){return e("svg",{viewBox:"0 0 15 15",fill:"currentColor",children:e("path",{d:"M14.777304,4.75062256 L7.77734505,0.0839936563 C7.60939924,-0.0279665065 7.39060662,-0.0279665065 7.22266081,0.0839936563 L0.222701813,4.75062256 C0.0836082937,4.84334851 5.66973453e-05,4.99945222 4.6875e-05,5.16662013 L4.6875e-05,9.83324903 C4.6875e-05,10.0004355 0.0836088906,10.1565596 0.222701812,10.2492466 L7.22266081,14.9158755 C7.30662908,14.9718752 7.403316,14.999875 7.50000292,14.999875 C7.59668984,14.999875 7.69337678,14.9718752 7.77734505,14.9158755 L14.777304,10.2492466 C14.9163976,10.1565206 14.9999492,10.0004169 14.999959,9.83324903 L14.999959,5.16662013 C14.9999492,4.99945222 14.9163976,4.84334851 14.777304,4.75062256 Z M7.50000292,9.23237755 L4.90139316,7.4999502 L7.50000292,5.76755409 L10.0986127,7.4999502 L7.50000292,9.23237755 Z M8,4.89905919 L8,1.43423573 L13.598561,5.16665138 L10.9999824,6.89904747 L8,4.89905919 Z M7.00000586,4.89905919 L4.00002344,6.89904747 L1.40141366,5.16665138 L7.00000586,1.43423573 L7.00000586,4.89905919 Z M3.09865372,7.4999502 L1.00004102,8.89903575 L1.00004102,6.10089589 L3.09865372,7.4999502 Z M4.00002344,8.10085292 L7.00000586,10.1008412 L7.00000586,13.5656334 L1.40141366,9.83328028 L4.00002344,8.10085292 Z M8,10.1008412 L10.9999824,8.10085292 L13.5985922,9.83328028 L8,13.5656647 L8,10.1008412 L8,10.1008412 Z M11.9013521,7.4999502 L13.9999648,6.10089589 L13.9999648,8.899067 L11.9013521,7.4999502 Z"})})}function C(){return e("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"snippets",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",children:e("path",{d:"M832 112H724V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H500V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H320c-17.7 0-32 14.3-32 32v120h-96c-17.7 0-32 14.3-32 32v632c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32v-96h96c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM664 888H232V336h218v174c0 22.1 17.9 40 40 40h174v338zm0-402H514V336h.2L664 485.8v.2zm128 274h-56V456L544 264H360v-80h68v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h152v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h68v576z"})})}const Y=d=>{const o="bh-aaa",i=d,{children:t,className:a}=i,n=f(i,["children","className"]),s=r(o,a);return e("div",D(B({},n),{className:s,children:t}))},Ye=d=>{const o="bh-aab-item",i=d,{children:t,className:a}=i,n=f(i,["children","className"]),s=r(o,a,{[`${o}-type`]:!0});return e("div",D(B({},n),{className:s,children:t}))},le=d=>{const o="bh-Aab",i=d,{children:t,className:a}=i,n=f(i,["children","className"]),s=r(o,a,{[`${o}-type`]:!0});return e("div",D(B({},n),{className:s,children:t}))};le.AabItem=Ye;const O=d=>{const o="bh-divider",p=d,{type:t="horizontal",children:a,className:n,dashed:s,orientation:i="center"}=p,u=f(p,["type","children","className","dashed","orientation"]),l=!!a,h=r(o,`${o}-${t}`,n,{[`${o}-with-text`]:l,[`${o}-with-text-${i}`]:l,[`${o}-dashed`]:!!s});return e("div",D(B({},u),{className:h,children:a&&e("span",{className:`${o}-inner-text`,children:a})}))},T=d=>{const o="bh-tag",S=d,{children:t,className:a,closable:n=!1,closeIcon:s,icon:i,color:u,style:l,onClose:h}=S,p=f(S,["children","className","closable","closeIcon","icon","color","style","onClose"]),g=r(o,a,{[`${o}-has-color`]:u}),N=B({backgroundColor:u},l),E=M=>{M.stopPropagation(),h&&h(M)},v=i||null,y=v?c(j,{children:[v,e("span",{className:"has-icon-node",children:t})]}):t,w=()=>n?s?e("span",{className:`${o}-close-icon`,onClick:E,children:s}):e("span",{className:`${o}-close-icon`,onClick:E,children:e(k,{name:"close"})}):null;return c("div",D(B({},p),{className:g,style:N,children:[y,w()]}))},k=d=>{const o="bh-icon",u=d,{children:t,className:a,name:n}=u,s=f(u,["children","className","name"]),i=r(o,`${o}-${n}`,a);return e("i",D(B({},s),{className:i,children:t}))},R=d=>{const o="bh-avatar",M=d,{shape:t,children:a,className:n,alt:s,src:i,draggable:u,icon:l,size:h}=M,p=f(M,["shape","children","className","alt","src","draggable","icon","size"]),g=!!a;let N;const E=m.exports.isValidElement(i),v=r({[`${o}-lg`]:h==="large",[`${o}-sm`]:h==="small"}),y=r(o,v,n,{[`${o}-${t}`]:!!t,[`${o}-string`]:g}),w=typeof h=="number"?{width:h,height:h,lineHeight:`${h}px`,fontSize:l?h/2:18}:{};return E?N=i:typeof i=="string"?N=e("img",{src:i,alt:s,draggable:u,onError:()=>{const{onError:L}=d;L&&L()}}):l?N=l:N=e("span",{className:`${o}-string`,children:a}),e("div",D(B({},p),{className:y,style:B({},w),children:N}))},z=d=>{const o="bh-badge",S=d,{children:t,className:a,count:n,overflowCount:s=99,showZero:i=!1,style:u,size:l="default",title:h}=S,p=f(S,["children","className","count","overflowCount","showZero","style","size","title"]),g=r(o,a,{[`${o}-not-a-wrapper`]:!t}),N=r(`${o}-count`,{[`${o}-count-sm`]:l==="small"}),E=h||n||void 0,v=m.exports.useMemo(()=>!i&&n==0,[n,i]);let y="";return Number(n)>s?y=s+"+":y=n+"",c("span",D(B({className:g},p),{children:[t,v,!v&&e("sup",{className:N,style:u,title:E,children:y})]}))};function ec(d){return d?e("span",{children:d}):null}const F=d=>{const o="bh-btn",y=d,{children:t,className:a,type:n,size:s,shape:i,block:u=!1,danger:l=!1,ghost:h=!1,icon:p}=y,g=f(y,["children","className","type","size","shape","block","danger","ghost","icon"]);let N="";switch(s){case"large":N="lg";break;case"small":N="sm";break}const E=r(o,a,{[`${o}-${n}`]:n,[`${o}-${N}`]:N,[`${o}-${i}`]:i!=="default"&&i,[`${o}-block`]:u,[`${o}-dangerous`]:!!l,[`${o}-background-ghost`]:h}),v=t?ec(t):null;return c("button",D(B({},g),{className:E,children:[p,v]}))};function cc(d,o,t,a){t&&t(o)}function oc(d){const v=d,{prefixCls:o,onPressEnter:t,addonBefore:a,addonAfter:n,prefix:s,suffix:i,allowClear:u,defaultValue:l,size:h,inputType:p,bordered:g,htmlSize:N}=v;return f(v,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","size","inputType","bordered","htmlSize"])}class P extends m.exports.Component{constructor(){super(...arguments);I(this,"input");I(this,"renderInput",()=>{const{children:o,className:t,size:a,addonBefore:n,addonAfter:s,allowClear:i,bordered:u=!0}=this.props,l=oc(this.props);let h="";switch(a){case"large":h="lg";break;case"small":h="sm";break}const p="bh-input",g=r(p,t,{[`${p}-${h}`]:h,[`${p}-borderless`]:!u});return e("input",D(B({},l),{className:g,onChange:this.handleChange,onKeyDown:this.handleKeyDown,ref:this.saveInput}))});I(this,"saveInput",o=>{this.input=o});I(this,"handleKeyDown",o=>{const{onPressEnter:t,onKeyDown:a}=this.props;t&&o.keyCode===13&&t(o),a==null||a(o)});I(this,"handleChange",o=>{this.setValue(o.target.value),cc(this.input,o,this.props.onChange)});I(this,"renderComponent",()=>{const o="bh-input",{addonBefore:t,addonAfter:a,prefix:n,suffix:s,value:i,allowClear:u}=this.props,l=!!t||!!a||!!n||!!s,h=!0,p=r(`${o}-suffix`,{[`${o}-clear-icon-hidden`]:!h}),g=()=>!!n||!!s||!!u?c("span",{className:"bh-input-affix-wrapper",children:[n&&e("span",{className:"bh-input-prefix",children:n}),this.renderInput(),s&&e("span",{className:"bh-input-suffix",children:s}),u&&e("span",{className:p,children:e("i",{className:"bh-input-clear-icon bh-icon bh-icon-close"})})]}):e(j,{children:this.renderInput()});return l?e("span",{className:"bh-input-group-wrapper",children:c("span",{className:"bh-input-wrapper bh-input-group",children:[t&&e("span",{className:"bh-input-group-addon",children:t}),g(),a&&e("span",{className:"bh-input-group-addon",children:a})]})}):u?e(j,{children:g()}):this.renderInput()})}setValue(o,t){this.props.value===void 0?this.setState({value:o},t):t==null||t()}render(){return e(j,{children:this.renderComponent()})}}I(P,"TextArea");class tc extends m.exports.Component{constructor(){super(...arguments);I(this,"renderInput",()=>{const{children:o,className:t}=this.props,n=r("bh-input",t);return e("textarea",{className:n})});I(this,"renderComponent",()=>this.renderInput())}render(){return e("span",{children:this.renderComponent()})}}P.TextArea=tc;class ee extends ge.Component{render(){const o="bh-select",N=this.props,{children:t,className:a,defaultValue:n}=N,s=f(N,["children","className","defaultValue"]);let i=n;const u=r(o,a,`${o}-single`,`${o}-show-arrow`),l=m.exports.createRef(),h=m.exports.createRef();let p=!1;const g=E=>{E.stopPropagation(),p=!0;const v=l.current.getBoundingClientRect(),y=v.left+document.documentElement.scrollLeft,w=v.top+document.documentElement.scrollTop;console.log("offset",v),h.current.style.display="block",h.current.style.left=y+"px",h.current.style.width=l.current.clientWidth+"px",h.current.style.top=w+46+"px"};return document.addEventListener("click",E=>{p&&(console.log("all click"),E.target.classList.contains("bh-select-item-option")&&(console.log(E.target.classList),i=E.target.attributes.value||"",console.log(i)),h.current.style.display="none",p=!1)}),setTimeout(()=>{try{document.body.appendChild(h.current)}catch{}},200),c("div",D(B({},s),{className:u,ref:l,onClick:g,children:[c("span",{className:"bh-select-selector",children:[e("span",{className:"bh-select-selection-search",children:e("input",{className:"bh-select-selection-search-input"})}),e("span",{className:"bh-select-selection-item",children:i})]}),e("span",{className:"bh-select-arrow",children:e("i",{className:"bh-icon bh-icon-arrow-down"})}),e("div",{className:"bh-select-dropdown",ref:h,children:e("div",{className:"bh-select-dropdown-inter",children:t})})]}))}}I(ee,"Option");const ac=d=>{const o="bh-select",i=d,{children:t,className:a}=i,n=f(i,["children","className"]),s=r(a,`${o}-item`,`${o}-item-option`);return e("div",D(B({},n),{className:s,children:t}))};ee.Option=ac;const x=d=>{const o="bh-col",h=d,{children:t,className:a,span:n,order:s,offset:i}=h,u=f(h,["children","className","span","order","offset"]),l=r(o,a,{[`${o}-${n}`]:n!==void 0,[`${o}-order-${s}`]:s,[`${o}-offset-${i}`]:i});return e("div",D(B({},u),{className:l,children:t}))},$=d=>{const o="bh-row",h=d,{children:t,className:a,align:n,justify:s,wrap:i}=h,u=f(h,["children","className","align","justify","wrap"]),l=r(o,a,{[`${o}-${n}`]:n,[`${o}-${s}`]:s,[`${o}-no-wrap`]:i===!1});return e("div",D(B({},u),{className:l,children:t}))},lc=d=>{const o="bh-breadcrumb",s=d,{children:t,className:a}=s,n=f(s,["children","className"]);return r(o,a),c("span",{children:[e("span",{className:"bh-breadcrumb-link",children:t}),e("span",{className:"bh-breadcrumb-separator",children:"/"})]})},nc=d=>{const o="bh-breadcrumb",i=d,{children:t,className:a}=i,n=f(i,["children","className"]),s=r(o,a);return e("div",D(B({},n),{className:s,children:t}))},H=nc;H.Item=lc;const sc=d=>{const o=`${d.rootPrefixCls}-item`,t=r(o,`${o}-${d.page}`,{[`${o}-active`]:d.active,[`${o}-disabled`]:!d.page}),a=d.page+"";return e("li",{className:t,onClick:()=>{d.onClick&&d.onClick(d.page||1)},title:a,children:e("a",{rel:"nofollow",children:d.page})},d.page)};function Ee(d,o,t){const a=typeof d=="undefined"?o.pageSize:d;return Math.floor((t.total-1)/a)+1}class ne extends m.exports.Component{constructor(o){super(o);I(this,"hasPrev",()=>this.state.current>1);I(this,"prev",()=>{if(this.state.current,this.hasPrev()){let o=this.state.current-1;this.setState({current:o})}});I(this,"hasNext",()=>this.state.current<Ee(void 0,this.state,this.props));I(this,"next",()=>{if(this.hasNext()){let o=this.state.current+1;this.setState({current:o})}});I(this,"handleChange",o=>{o!==this.state.current&&this.setState({current:o})});const t=o.current||o.defaultCurrent||1,a=o.pageSize||o.defaultPageSize||10;this.state={current:t,pageSize:a}}render(){const y=this.props,{children:o,className:t,defaultCurrent:a,total:n,defaultPageSize:s,prefixCls:i}=y,u=f(y,["children","className","defaultCurrent","total","defaultPageSize","prefixCls"]),{current:l,pageSize:h}=this.state,p=r(i,t),g=Ee(void 0,this.state,this.props),N=[],E=!this.hasPrev()||!g,v=!this.hasNext()||!g;for(let w=1;w<=g;w++){const S=l===w;N.push(e(sc,{rootPrefixCls:i,active:S,onClick:this.handleChange,page:w},w))}return c("ul",D(B({},u),{className:p,children:[e("li",{onClick:this.prev,className:r(`${i}-prev`,{[`${i}-disabled`]:E}),title:"\u4E0A\u4E00\u9875",children:e("button",{className:"bh-pagination-item-link",children:e("i",{className:"bh-icon bh-icon-arrow-left"})})}),N,e("li",{onClick:this.next,className:r(`${i}-next`,{[`${i}-disabled`]:v}),title:"\u4E0B\u4E00\u9875",children:e("button",{className:"bh-pagination-item-link",children:e("i",{className:"bh-icon bh-icon-arrow-right"})})})]}))}}I(ne,"defaultProps",{defaultCurrent:1,total:0,defaultPageSize:10,className:"",prefixCls:"bh-pagination"});const dc=d=>{const o="bh-steps-item",l=d,{children:t,className:a,title:n,description:s}=l,i=f(l,["children","className","title","description"]),u=r(o,a,{[`${o}-finish`]:!0,[`${o}-process`]:!0});return e("div",D(B({},i),{className:u,children:c("div",{className:"bh-steps-item-container",children:[e("div",{className:"bh-steps-item-tail"}),e("div",{className:"bh-steps-item-icon",children:e("span",{className:"bh-steps-icon",children:"2"})}),c("div",{className:"bh-steps-item-content",children:[c("div",{className:"bh-steps-item-title",children:[n,e("div",{className:"bh-steps-item-subtitle"})]}),e("div",{className:"bh-steps-item-description",children:s})]})]})}))},se=d=>{const o="bh-steps",i=d,{children:t,className:a}=i,n=f(i,["children","className"]),s=r(o,a,{[`${o}-horizontal`]:!0,[`${o}-label-horizontal`]:!0});return e("div",D(B({},n),{className:s,children:t}))};se.Step=dc;const ce=d=>{const o="bh-checkbox",N=d,{children:t,className:a,checked:n,disabled:s}=N,i=f(N,["children","className","checked","disabled"]),[u,l]=m.exports.useState(!!n),h=r(`${o}-wrapper`,a,{[`${o}-wrapper-checked`]:u,[`${o}-wrapper-disabled`]:s}),p=r(o,a,{[`${o}-checked`]:u,[`${o}-disabled`]:s}),g=()=>{s||l(!u)};return c("div",D(B({},i),{className:h,onClick:g,children:[c("span",{className:p,children:[e("input",{type:"checkbox",className:"bh-checkbox-input"}),e("span",{className:"bh-checkbox-inner"})]}),e("span",{children:t})]}))},de=d=>{const o="bh-radio",N=d,{children:t,className:a,checked:n=!1,disabled:s=!1}=N,i=f(N,["children","className","checked","disabled"]),[u,l]=m.exports.useState(!!n),h=r(`${o}-wrapper`,a,{[`${o}-wrapper-checked`]:u,[`${o}-wrapper-disabled`]:s}),p=r(o,a,{[`${o}-checked`]:u,[`${o}-disabled`]:s}),g=()=>{s||l(!0)};return c("label",D(B({},i),{className:h,onClick:g,children:[c("span",{className:p,children:[e("input",{type:"radio",className:"bh-radio-input"}),e("span",{className:"bh-radio-inner"})]}),e("span",{children:t})]}))},ve=d=>{const o="bh-slider",u=d,{children:t,className:a,defaultValue:n}=u,s=f(u,["children","className","defaultValue"]),i=r(o,a);return c("div",D(B({},s),{className:i,children:[e("div",{className:"bh-slider-rail"}),e("div",{className:"bh-slider-track"}),e("div",{className:"bh-slider-step"}),e("div",{className:"bh-slider-handle"}),e("div",{className:"bh-slider-mark"})]}))},K=d=>{const o="bh-switch",L=d,{children:t,className:a,checked:n=!1,defaultChecked:s=!1,disabled:i=!1,size:u,loading:l=!1,checkedChildren:h,unCheckedChildren:p,onChange:g,onClick:N}=L,E=f(L,["children","className","checked","defaultChecked","disabled","size","loading","checkedChildren","unCheckedChildren","onChange","onClick"]),[v,y]=m.exports.useState(s),w=r(o,a,{[`${o}-checked`]:v,[`${o}-disabled`]:i||l,[`${o}-small`]:u=="small"}),S=Z=>{if(i||l)return;let J=!v;y(J),g&&g(J,Z),N&&N(J,Z)},M=()=>v&&h?h:!v&&p?p:null;return c("button",D(B({type:"button"},E),{className:w,onClick:S,children:[e("div",{className:"bh-switch-inner",children:M()}),e("div",{className:"bh-switch-handle",children:l&&e("i",{className:"bh-switch-loading-icon bh-icon bh-icon-loading"})})]}))},ic=d=>{const o="bh-rate-star",w=d,{children:t,className:a,index:n=0,disabled:s,character:i,value:u=-1,tooltip:l,count:h,onClick:p,onHover:g}=w,N=f(w,["children","className","index","disabled","character","value","tooltip","count","onClick","onHover"]),E=r(o,{[`${o}-full`]:u>=n}),v=S=>{g&&g(S)},y=S=>{p&&p(S)};return e("li",{onMouseEnter:()=>v(n),onClick:()=>y(n),title:l,className:E,children:c("div",{children:[e("div",{className:"bh-rate-star-first",children:i}),e("div",{className:"bh-rate-star-second",children:i})]})},n)},G=d=>{const o="bh-rate",pe=d,{children:t,className:a,character:n="\u2605",count:s=5,value:i=2,disabled:u=!1,allowClear:l=!0,defaultValue:h=0,tooltips:p=[],onBlur:g,onChange:N,onFocus:E,onHoverChange:v,onKeyDown:y}=pe,w=f(pe,["children","className","character","count","value","disabled","allowClear","defaultValue","tooltips","onBlur","onChange","onFocus","onHoverChange","onKeyDown"]),S=r(o,a,{[`${o}-disabled`]:u}),[M,L]=m.exports.useState(-1),[Z,J]=m.exports.useState(i),Se=()=>{L(-1),g&&g()},Re=V=>{y&&y(V)},Ie=V=>{u||(L(V),v&&v(V),E&&E())},Pe=V=>{if(u)return;let _=V;l&&V==Z?(L(-1),_=-1):_=V,J(_),N&&N(_)};let me=[];for(let V=0;V<s;V++)me.push(V);return e("ul",D(B({},w),{className:S,onMouseLeave:Se,onClick:Re,children:me.map((V,_)=>e(ic,{index:_,character:n,disabled:u,count:s,value:M===-1?Z:M,onClick:Pe,onHover:Ie,tooltip:p[_]},_))}))},uc=d=>e("header",{className:"ant-layout-header",children:d.children}),rc=d=>e("footer",{className:"ant-layout-footer",children:d.children}),hc=d=>e("main",{className:"ant-layout-content",children:d.children}),mc=d=>e("aside",{className:"ant-layout-sider",children:d.children}),pc=d=>e("section",{className:"ant-layout",children:d.children}),q=pc;q.Header=uc;q.Footer=rc;q.Content=hc;q.Sider=mc;const ie=d=>{const o="bh-card",g=d,{children:t,className:a,title:n,bordered:s=!0,extra:i,style:u}=g,l=f(g,["children","className","title","bordered","extra","style"]),h=!!n,p=r(o,a,{[`${o}-bordered`]:s});return c("div",D(B({},l),{className:p,style:u,children:[h&&e("div",{className:"bh-card-head",children:c("div",{className:"bh-card-head-wrapper",children:[e("div",{className:"bh-card-head-title",children:n}),e("div",{className:"bh-card-extra",children:i})]})}),e("div",{className:"bh-card-body",children:t})]}))},bc=d=>{const o="bh-collapse-item",w=d,{children:t,className:a,header:n,keya:s="",key:i,showArrow:u=!0,activearr:l=[],clickitemfn:h}=w,p=f(w,["children","className","header","keya","key","showArrow","activearr","clickitemfn"]);let g=l.includes(s);const[N,E]=m.exports.useState(g),v=r(o,a,{[`${o}-active`]:N}),y=()=>{let S=!N;E(S),h&&h(s,S)};return m.exports.createElement("div",D(B({},p),{className:v,key:n}),c("div",{className:"bh-collapse-header",onClick:y,children:[u&&e("div",{children:e("span",{className:"bh-collapse-arrow",children:e("i",{className:"bh-icon bh-icon-arrow-right"})})}),n]}),e("div",{className:"bh-collapse-content",children:e("div",{className:"bh-collapse-content-box",children:t})}))},W=d=>{const o="bh-collapse",g=d,{children:t,className:a,defaultActiveKey:n}=g,s=f(g,["children","className","defaultActiveKey"]),[i,u]=m.exports.useState(n),l=r(o,a),h=(N,E)=>{console.log(N,E)},p=()=>{const{children:N}=d;return Array.prototype.slice.call(N).map((v,y)=>{const w=v.key||String(y),S=D(B({},v.props),{key:w,activearr:i,clickitemfn:h});return console.log(S),m.exports.cloneElement(v,S)})};return e("div",D(B({},s),{className:l,children:p()}))};W.Panel=bc;const Cc=d=>{const o="bh-descriptions-row",u=d,{children:t,className:a,label:n}=u,s=f(u,["children","className","label"]),i=r(o,a);return e("tr",D(B({},s),{className:i,children:e("td",{className:"bh-descriptions-item",children:c("div",{className:"bh-descriptions-item-container",children:[e("span",{className:"bh-descriptions-item-label",children:n}),e("span",{className:"bh-descriptions-item-content",children:t})]})})}))};function gc(d,o){return m.exports.cloneElement(e("tr",{className:"bh-descriptions-row",children:d},o))}function Fc(d,o){const{children:t,label:a}=d.props;return m.exports.cloneElement(e("td",{className:"bh-descriptions-item",children:c("div",{className:"bh-descriptions-item-container",children:[e("span",{className:"bh-descriptions-item-label",children:a}),e("span",{className:"bh-descriptions-item-content",children:t})]})},o))}function Nc(d,o){const t=Array.prototype.slice.call(d),a=[];let n=[],s=o,i=1;return t.forEach((u,l)=>{s&&(n.push(Fc(u,l)),s--),(s==0||s&&l==t.length-1)&&(a.push(gc(n,i++)),s=o,n=[])}),a}const U=d=>{const o="bh-descriptions",h=d,{children:t,className:a,title:n,column:s=3}=h,i=f(h,["children","className","title","column"]),u=r(o,a),l=Nc(t,s);return c("div",D(B({},i),{className:u,children:[e("div",{className:"bh-descriptions-header",children:e("div",{className:"bh-descriptions-title",children:n})}),e("div",{className:"bh-descriptions-view",children:e("table",{children:e("tbody",{children:l})})})]}))};U.Item=Cc;function xc(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:c("div",{children:[e(Y,{children:"test01"}),e(Y,{children:"test02"})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u7684\u7528\u6CD5\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"200px"},readOnly:!0,defaultValue:t})})]})})}function Ec(){const d=[{val1:"className",val2:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B",val3:"string",val4:"--"}];return d.sort((o,t)=>o.val1.localeCompare(t.val1)),c(A,{children:[e("h2",{className:"intro-title",children:"Aaa \u5934\u50CF"}),e("p",{className:"intro-content",children:"\u6F14\u793A\u7528"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(xc,{}),e("h3",{className:"base-title",children:"API"}),c("table",{className:"attri-table",children:[e("thead",{children:c("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:d.map(o=>c("tr",{children:[e("td",{children:o.val1}),e("td",{children:o.val2}),e("td",{children:o.val3}),e("td",{children:o.val4})]},o.val1))})]})]})}const{AabItem:ue}=le;function vc(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:e("div",{children:c(le,{children:[e(ue,{children:"11"}),e(ue,{children:"22"}),e(ue,{children:"33"})]})})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u7684\u7528\u6CD5\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"200px"},readOnly:!0,defaultValue:t})})]})})}function Bc(){return c(A,{children:[e("h2",{className:"intro-title",children:"Aab \u6F14\u793A"}),e("p",{className:"intro-content",children:"\u6F14\u793A\u4E2D"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(vc,{}),e("h3",{className:"base-title",children:"API"}),c("table",{className:"attri-table",children:[e("thead",{children:c("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:c("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B"}),e("td",{children:"string"}),e("td",{children:"--"})]})})]})]})}const fc="https://codepen.io/xiebaolin/pen/PoKGBRR",Be=`
import { Divider } from 'antd';
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
`,Dc="https://codepen.io/xiebaolin/pen/PoKGBRR",fe=`
import { Divider } from 'antd';
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
`;function yc(){const[d,o]=m.exports.useState(!1),t=r("source-case-mod",{"show-case-core":d}),a=()=>{o(!d)},n=()=>{let p=document.getElementById("globalInputCopy");p.value=Be,p.select(),document.execCommand("copy"),p=null},[s,i]=m.exports.useState(!1),u=r("source-case-mod",{"show-case-core":s});return c(A,{children:[e("h2",{className:"intro-title",children:"Divider \u5206\u5272\u7EBF"}),e("p",{className:"intro-content",children:"\u533A\u9694\u5185\u5BB9\u7684\u5206\u5272\u7EBF\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e("div",{className:"demo-block",children:c("section",{className:t,children:[c("section",{className:"code-box-demo",children:[c("div",{children:[e("span",{children:"\u5185\u5BB91-1"}),e(O,{}),e("span",{children:"\u5185\u5BB91-2"}),e(O,{dashed:!0}),e("span",{children:"\u5185\u5BB91-3"})]}),c("div",{children:[e("span",{children:"\u5185\u5BB92-1"}),e(O,{type:"vertical"}),e("span",{children:"\u5185\u5BB92-2"}),e(O,{dashed:!0,type:"vertical"}),e("span",{children:"\u5185\u5BB92-3"}),e(O,{className:"divider01",type:"vertical"}),e("span",{children:"\u5185\u5BB92-4"})]})]}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u9ED8\u8BA4\u4E3A\u6C34\u5E73\u5206\u5272\u7EBF\uFF0C\u53EF\u5728\u4E2D\u95F4\u52A0\u5165\u6587\u5B57\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:fc,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:n,children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:a})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height400",readOnly:!0,defaultValue:Be})})]})}),e("div",{className:"demo-block",children:c("section",{className:u,children:[e("section",{className:"code-box-demo",children:c("div",{children:[e("span",{children:"\u5185\u5BB93-1"}),e(O,{children:"Text1"}),e("span",{children:"\u5185\u5BB93-2"}),e(O,{orientation:"left",children:"Text2"}),e("span",{children:"\u5185\u5BB93-3"}),e(O,{orientation:"right",children:"Text3"}),e("span",{children:"\u5185\u5BB93-4"})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u9ED8\u8BA4\u4E3A\u6C34\u5E73\u5206\u5272\u7EBF\uFF0C\u53EF\u5728\u4E2D\u95F4\u52A0\u5165\u6587\u5B57\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:Dc,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let p=document.getElementById("globalInputCopy");p.value=fe,p.select(),document.execCommand("copy"),p=null},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{i(!s)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",readOnly:!0,defaultValue:fe})})]})}),e("h3",{className:"base-title",children:"Attributes"}),c("table",{className:"attri-table",children:[e("thead",{children:c("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),c("tbody",{children:[c("tr",{children:[e("td",{children:"type"}),e("td",{children:"\u8BBE\u7F6E\u5206\u5272\u7EBF\u65B9\u5411"}),e("td",{children:"horizontal / vertical"}),e("td",{children:"horizontal"})]}),c("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B"}),e("td",{children:"string"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"dashed"}),e("td",{children:"\u662F\u5426\u865A\u7EBF"}),e("td",{children:"boolean"}),e("td",{children:"false"})]}),c("tr",{children:[e("td",{children:"orientation"}),e("td",{children:"\u5206\u5272\u7EBF\u6807\u9898\u7684\u4F4D\u7F6E"}),e("td",{children:"left | right | center"}),e("td",{children:"center"})]}),c("tr",{children:[e("td",{children:"style"}),e("td",{children:"\u5206\u5272\u7EBF\u6837\u5F0F\u5BF9\u8C61"}),e("td",{children:"CSSProperties"}),e("td",{children:"--"})]})]})]})]})}function Ac(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
	import { Tag } from 'antd';
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:c("div",{children:[e(T,{children:"Tag 1"}),e(T,{children:e("a",{href:"https://gitee.com/xiebaolin/ygbh-react",children:"Link"})}),e(T,{closable:!0,onClose:h=>{console.log("onClose01",h)},children:"Tag 2"}),e(T,{closable:!0,closeIcon:e(k,{name:"delete"}),children:"Tag 2"})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u6807\u7B7E\u7684\u7528\u6CD5\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6DFB\u52A0 closable \u53D8\u4E3A\u53EF\u5173\u95ED\u6807\u7B7E\u3002\u53EF\u5173\u95ED\u6807\u7B7E\u5177\u6709 onClose \u4E8B\u4EF6\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let h=document.getElementById("globalInputCopy");h.value=t,h.select(),document.execCommand("copy"),h=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height200",readOnly:!0,defaultValue:t})})]})})}function kc(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
	import { Tag } from 'antd';
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:c("div",{children:[e(T,{color:"#f50",children:"#f50"}),e(T,{color:"#2db7f5",children:"#2db7f5"}),e(T,{color:"#87d068",children:"#87d068"})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u591A\u5F69\u6807\u7B7E"}),e("div",{className:"code-box-description",children:"\u6211\u4EEC\u6DFB\u52A0\u4E86\u591A\u79CD\u9884\u8BBE\u8272\u5F69\u7684\u6807\u7B7E\u6837\u5F0F\uFF0C\u7528\u4F5C\u4E0D\u540C\u573A\u666F\u4F7F\u7528\u3002\u5982\u679C\u9884\u8BBE\u503C\u4E0D\u80FD\u6EE1\u8DB3\u4F60\u7684\u9700\u6C42\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u5177\u4F53\u7684\u8272\u503C\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height200",readOnly:!0,defaultValue:t})})]})})}function wc(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
	import { Tag, Icon } from 'antd';
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:c("div",{children:[e(T,{color:"#55acee",icon:e(k,{name:"picture-outline"}),children:"\u56FE\u68071"}),e(T,{color:"#cd201f",icon:e(k,{name:"circle-check"}),children:"\u56FE\u68072"}),e(T,{color:"#3b5999",icon:e(k,{name:"plus"}),children:"\u56FE\u68073"})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u591A\u5F69\u6807\u7B7E"}),e("div",{className:"code-box-description",children:"\u6211\u4EEC\u6DFB\u52A0\u4E86\u591A\u79CD\u9884\u8BBE\u8272\u5F69\u7684\u6807\u7B7E\u6837\u5F0F\uFF0C\u7528\u4F5C\u4E0D\u540C\u573A\u666F\u4F7F\u7528\u3002\u5982\u679C\u9884\u8BBE\u503C\u4E0D\u80FD\u6EE1\u8DB3\u4F60\u7684\u9700\u6C42\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u5177\u4F53\u7684\u8272\u503C\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height200",readOnly:!0,defaultValue:t})})]})})}function Sc(){return c(A,{children:[e("h2",{className:"intro-title",children:"Tag \u6807\u7B7E"}),e("p",{className:"intro-content",children:"\u8FDB\u884C\u6807\u8BB0\u548C\u5206\u7C7B\u7684\u5C0F\u6807\u7B7E\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(Ac,{}),e(kc,{}),e(wc,{}),e("h3",{className:"base-title",children:"Attributes"}),c("table",{className:"attri-table",children:[e("thead",{children:c("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),c("tbody",{children:[c("tr",{children:[e("td",{children:"closable"}),e("td",{children:"\u6807\u7B7E\u662F\u5426\u53EF\u4EE5\u5173\u95ED\uFF08\u70B9\u51FB\u9ED8\u8BA4\u5173\u95ED\uFF09"}),e("td",{children:"boolean"}),e("td",{children:"false"})]}),c("tr",{children:[e("td",{children:"closeIcon"}),e("td",{children:"\u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE"}),e("td",{children:"ReactNode"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"color"}),e("td",{children:"\u6807\u7B7E\u8272"}),e("td",{children:"string"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"icon"}),e("td",{children:"\u8BBE\u7F6E\u56FE\u6807"}),e("td",{children:"ReactNode"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"onClose"}),e("td",{children:"\u5173\u95ED\u65F6\u7684\u56DE\u8C03\uFF08\u53EF\u901A\u8FC7 e.preventDefault() \u6765\u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A\uFF09"}),e("td",{children:"--"}),e("td",{children:"--"})]})]})]})]})}const Rc="_codeboxdemo_1gh88_1",Ic="_codeboxitem_1gh88_6";var De={codeboxdemo:Rc,codeboxitem:Ic};const Pc="https://codepen.io/xiebaolin/pen/mdMBKBm",ye=`
import { Icon } from 'antd';
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
`;function $c(){const[d,o]=m.exports.useState(!1),t=r("source-case-mod",{"show-case-core":d}),a=()=>{o(!d)},n=()=>{let u=document.getElementById("globalInputCopy");u.value=ye,u.select(),document.execCommand("copy"),u=null,alert("\u590D\u5236\u6210\u529F")},s=u=>{let l=document.getElementById("globalInputCopy");l.value=`<Icon name="${u}"></Icon>`,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},i=[{name:"edit"},{name:"share"},{name:"delete"},{name:"search"},{name:"back"},{name:"right"},{name:"bottom"},{name:"top"},{name:"close"},{name:"check"},{name:"minus"},{name:"plus"},{name:"star-on"},{name:"star-off"},{name:"arrow-left"},{name:"arrow-right"},{name:"user-solid"},{name:"picture-outline"},{name:"circle-check"},{name:"warning-outline"},{name:"info"},{name:"success"}];return c(A,{children:[e("h2",{className:"intro-title",children:"Icon \u56FE\u6807"}),e("p",{className:"intro-content",children:"\u8BED\u4E49\u5316\u7684\u77E2\u91CF\u56FE\u5F62\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e("div",{className:"demo-block",children:c("section",{className:t,children:[e("section",{className:"code-box-demo",children:e("div",{className:De.codeboxdemo,children:i.map(u=>e("div",{className:De.codeboxitem,onClick:l=>{s(u.name)},children:e(k,{name:u.name})},u.name))})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description"}),c("div",{className:"code-box-actions",children:[e("a",{href:Pc,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:n,children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:a})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height200",readOnly:!0,defaultValue:ye})})]})})]})}function Vc(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
	import { Avatar } from 'antd';
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[c("section",{className:"code-box-demo",children:[c("div",{children:[e(R,{size:64,icon:e(k,{name:"user-solid"})}),e(R,{size:"large",icon:e(k,{name:"user-solid"})}),e(R,{icon:e(k,{name:"user-solid"})}),e(R,{size:"small",icon:e(k,{name:"user-solid"})})]}),c("div",{children:[e(R,{shape:"square",size:64,icon:e(k,{name:"user-solid"})}),e(R,{shape:"square",size:"large",icon:e(k,{name:"user-solid"})}),e(R,{shape:"square",icon:e(k,{name:"user-solid"})}),e(R,{shape:"square",size:"small",icon:e(k,{name:"user-solid"})})]})]}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u6807\u7B7E\u7684\u7528\u6CD5\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6DFB\u52A0 closable \u53D8\u4E3A\u53EF\u5173\u95ED\u6807\u7B7E\u3002\u53EF\u5173\u95ED\u6807\u7B7E\u5177\u6709 onClose \u4E8B\u4EF6\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height200",readOnly:!0,defaultValue:t})})]})})}function Oc(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
	import { Avatar } from 'antd';
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:c("div",{children:[e(R,{children:"U"}),e(R,{src:"https://joeschmoe.io/api/v1/random",alt:"\u65E0\u6CD5\u663E\u793A",draggable:!0,onError:()=>{console.log("onError",11)}}),e(R,{src:e("img",{src:"https://joeschmoe.io/api/v1/random",style:{width:32}})})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u6807\u7B7E\u7684\u7528\u6CD5\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6DFB\u52A0 closable \u53D8\u4E3A\u53EF\u5173\u95ED\u6807\u7B7E\u3002\u53EF\u5173\u95ED\u6807\u7B7E\u5177\u6709 onClose \u4E8B\u4EF6\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let h=document.getElementById("globalInputCopy");h.value=t,h.select(),document.execCommand("copy"),h=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height200",readOnly:!0,defaultValue:t})})]})})}function zc(){return c(A,{children:[e("h2",{className:"intro-title",children:"Avatar \u5934\u50CF"}),e("p",{className:"intro-content",children:"\u7528\u6765\u4EE3\u8868\u7528\u6237\u6216\u4E8B\u7269\uFF0C\u652F\u6301\u56FE\u7247\u3001\u56FE\u6807\u6216\u5B57\u7B26\u5C55\u793A\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(Vc,{}),e(Oc,{}),e("h3",{className:"base-title",children:"Attributes"}),c("table",{className:"attri-table",children:[e("thead",{children:c("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),c("tbody",{children:[c("tr",{children:[e("td",{children:"alt"}),e("td",{children:"\u56FE\u50CF\u65E0\u6CD5\u663E\u793A\u65F6\u7684\u66FF\u4EE3\u6587\u672C"}),e("td",{children:"string"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"src"}),e("td",{children:"\u56FE\u7247\u7C7B\u5934\u50CF\u7684\u8D44\u6E90\u5730\u5740\u6216\u8005\u56FE\u7247\u5143\u7D20"}),e("td",{children:"string | ReactNode"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B"}),e("td",{children:"string"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"size"}),e("td",{children:"\u8BBE\u7F6E\u5934\u50CF\u7684\u5927\u5C0F"}),e("td",{children:"string"}),e("td",{children:"number | large | small"})]}),c("tr",{children:[e("td",{children:"onError"}),e("td",{children:"\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u7684\u4E8B\u4EF6\uFF0C\u8FD4\u56DE false \u4F1A\u5173\u95ED\u7EC4\u4EF6\u9ED8\u8BA4\u7684 fallback \u884C\u4E3A"}),e("td",{children:"--"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"draggable"}),e("td",{children:"\u56FE\u7247\u662F\u5426\u5141\u8BB8\u62D6\u52A8"}),e("td",{children:"boolean | 'true' | 'false'"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"shape"}),e("td",{children:"\u6307\u5B9A\u5934\u50CF\u7684\u5F62\u72B6"}),e("td",{children:"circle | square"}),e("td",{children:"circle"})]})]})]})]})}function Uc(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
	import { Avatar } from 'antd';
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:c("div",{children:[e(z,{count:5,className:"mr20",children:e(R,{shape:"square",size:"large"})}),e(z,{count:0,className:"mr20",children:e(R,{shape:"square",size:"large"})}),e(z,{count:0,showZero:!0,className:"mr20",children:e(R,{shape:"square",size:"large"})})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u7B80\u5355\u7684\u5FBD\u7AE0\u5C55\u793A\uFF0C\u5F53 count \u4E3A 0 \u65F6\uFF0C\u9ED8\u8BA4\u4E0D\u663E\u793A\uFF0C\u4F46\u662F\u53EF\u4EE5\u4F7F\u7528 showZero \u4FEE\u6539\u4E3A\u663E\u793A\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",readOnly:!0,defaultValue:t})})]})})}function Mc(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
	import { Avatar } from 'antd';
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:c("div",{children:[e(z,{count:99,className:"mr20",title:"\u8FD9\u662F\u63D0\u793A\u8BED",children:e(R,{shape:"square",size:"large"})}),e(z,{count:100,className:"mr20",children:e(R,{shape:"square",size:"large"})}),e(z,{count:99,overflowCount:10,className:"mr20",children:e(R,{shape:"square",size:"large"})}),e(z,{count:1e3,overflowCount:999,className:"mr20",children:e(R,{shape:"square",size:"large"})})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u5C01\u9876\u6570\u5B57"}),e("div",{className:"code-box-description",children:"\u8D85\u8FC7 overflowCount \u7684\u4F1A\u663E\u793A\u4E3A overflowCount+\uFF0C\u9ED8\u8BA4\u7684 overflowCount \u4E3A 99\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height400",readOnly:!0,defaultValue:t})})]})})}function Tc(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
	import { Avatar } from 'antd';
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:c("div",{children:[e(z,{count:0,className:"mr20"}),e(z,{count:25,className:"mr20"}),e(z,{count:e(k,{name:"picture-outline"}),className:"mr20"}),e(z,{count:109,className:"mr20",style:{backgroundColor:"#52c41a"}})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u72EC\u7ACB\u4F7F\u7528"}),e("div",{className:"code-box-description",children:"\u4E0D\u5305\u88F9\u4EFB\u4F55\u5143\u7D20\u5373\u662F\u72EC\u7ACB\u4F7F\u7528\uFF0C\u53EF\u81EA\u5B9A\u6837\u5F0F\u5C55\u73B0\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height250",readOnly:!0,defaultValue:t})})]})})}function Lc(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
	import { Avatar } from 'antd';
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:c("div",{children:[e(z,{size:"default",count:5,className:"mr20",children:e(R,{shape:"square",size:"large"})}),e(z,{size:"small",count:5,className:"mr20",children:e(R,{shape:"square",size:"large"})})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u5927\u5C0F"}),e("div",{className:"code-box-description",children:"\u53EF\u4EE5\u8BBE\u7F6E\u6709\u6570\u5B57\u5FBD\u6807\u7684\u5927\u5C0F\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height250",readOnly:!0,defaultValue:t})})]})})}function Kc(){return c(A,{children:[e("h2",{className:"intro-title",children:"Badge \u5FBD\u6807\u6570"}),e("p",{className:"intro-content",children:"\u56FE\u6807\u53F3\u4E0A\u89D2\u7684\u5706\u5F62\u5FBD\u6807\u6570\u5B57\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(Uc,{}),e(Mc,{}),e(Tc,{}),e(Lc,{}),e("h3",{className:"base-title",children:"Attributes"}),c("table",{className:"attri-table",children:[e("thead",{children:c("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),c("tbody",{children:[c("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B"}),e("td",{children:"string"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"count"}),e("td",{children:"\u5C55\u793A\u7684\u6570\u5B57\uFF0C\u5927\u4E8E overflowCount \u65F6\u663E\u793A\u4E3A overflowCount+\uFF0C\u4E3A 0 \u65F6\u9690\u85CF"}),e("td",{children:"ReactNode"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"overflowCount"}),e("td",{children:"\u5C55\u793A\u5C01\u9876\u7684\u6570\u5B57\u503C"}),e("td",{children:"number"}),e("td",{children:"99"})]}),c("tr",{children:[e("td",{children:"showZero"}),e("td",{children:"\u5F53\u6570\u503C\u4E3A 0 \u65F6\uFF0C\u662F\u5426\u5C55\u793A Badge"}),e("td",{children:"boolean"}),e("td",{children:"false"})]}),c("tr",{children:[e("td",{children:"size"}),e("td",{children:"\u5728\u8BBE\u7F6E\u4E86 count \u7684\u524D\u63D0\u4E0B\u6709\u6548\uFF0C\u8BBE\u7F6E\u5C0F\u5706\u70B9\u7684\u5927\u5C0F"}),e("td",{children:"default | small"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"title"}),e("td",{children:"\u8BBE\u7F6E\u9F20\u6807\u653E\u5728\u72B6\u6001\u70B9\u4E0A\u65F6\u663E\u793A\u7684\u6587\u5B57"}),e("td",{children:"string"}),e("td",{children:"--"})]})]})]})]})}function _c(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
	import { Avatar } from 'antd';
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[c("section",{className:"code-box-demo",children:[c("div",{className:"mb10",children:[e(F,{className:"mr20",children:"Default Button"}),e(F,{className:"mr20",type:"primary",children:"Primary Button"}),e(F,{className:"mr20",type:"dashed",children:"Dashed Button"})]}),c("div",{className:"mb10",children:[e(F,{className:"mr20",type:"text",children:"Text Button"}),e(F,{className:"mr20",type:"link",children:"Link Button"})]})]}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u6309\u94AE\u7C7B\u578B"}),e("div",{className:"code-box-description",children:"\u6309\u94AE\u6709\u4E94\u79CD\u7C7B\u578B\uFF1A\u4E3B\u6309\u94AE\u3001\u6B21\u6309\u94AE\u3001\u865A\u7EBF\u6309\u94AE\u3001\u6587\u672C\u6309\u94AE\u548C\u94FE\u63A5\u6309\u94AE\u3002\u4E3B\u6309\u94AE\u5728\u540C\u4E00\u4E2A\u64CD\u4F5C\u533A\u57DF\u6700\u591A\u51FA\u73B0\u4E00\u6B21\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height300",readOnly:!0,defaultValue:t})})]})})}function Gc(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
	import { Button } from 'antd';
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[c("section",{className:"code-box-demo",children:[c("div",{className:"mb10",children:[e(F,{className:"mr20",size:"large",children:"Default Button"}),e(F,{className:"mr20",size:"large",type:"primary",children:"Primary Button"}),e(F,{className:"mr20",size:"large",type:"dashed",children:"Dashed Button"})]}),c("div",{className:"mb10",children:[e(F,{className:"mr20",children:"Default Button"}),e(F,{className:"mr20",type:"primary",children:"Primary Button"}),e(F,{className:"mr20",type:"dashed",children:"Dashed Button"})]}),c("div",{className:"mb10",children:[e(F,{className:"mr20",size:"small",children:"Default Button"}),e(F,{className:"mr20",size:"small",type:"primary",children:"Primary Button"}),e(F,{className:"mr20",size:"small",type:"dashed",children:"Dashed Button"})]})]}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u6309\u94AE\u5C3A\u5BF8"}),c("div",{className:"code-box-description",children:[e("div",{children:"\u6309\u94AE\u6709\u5927\u3001\u4E2D\u3001\u5C0F\u4E09\u79CD\u5C3A\u5BF8\u3002"}),e("div",{children:"\u901A\u8FC7\u8BBE\u7F6E size \u4E3A large small \u5206\u522B\u628A\u6309\u94AE\u8BBE\u4E3A\u5927\u3001\u5C0F\u5C3A\u5BF8\u3002\u82E5\u4E0D\u8BBE\u7F6E size\uFF0C\u5219\u5C3A\u5BF8\u4E3A\u4E2D\u3002"})]}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height300",readOnly:!0,defaultValue:t})})]})})}function jc(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
	import { Button } from 'antd';
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:c("div",{className:"mb10",children:[e(F,{className:"mr20",children:"Default Button"}),e(F,{className:"mr20",shape:"circle",children:"A"}),e(F,{className:"mr20",shape:"round",children:"Default Button"})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u8BBE\u7F6E\u6309\u94AE\u5F62\u72B6"}),e("div",{className:"code-box-description",children:e("div",{children:"\u901A\u8FC7\u8BBE\u7F6E shape \u4E3A circle round \u5206\u522B\u628A\u6309\u94AE\u8BBE\u4E3A\u5168\u5706\uFF0C\u5706\u89D2\u3002\u82E5\u4E0D\u8BBE\u7F6E shape\uFF0C\u5219\u5C3A\u5BF8\u4E3A\u76F4\u89D2\u3002"})}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height250",readOnly:!0,defaultValue:t})})]})})}function Hc(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
	import { Button } from 'antd';
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:c("div",{className:"mb10",children:[e(F,{className:"mb20",block:!0,children:"Default Button"}),e(F,{className:"mb20",block:!0,children:"A"}),e(F,{className:"mb20",block:!0,children:"Default Button"})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"Block \u6309\u94AE"}),e("div",{className:"code-box-description",children:e("div",{children:"block \u5C5E\u6027\u5C06\u4F7F\u6309\u94AE\u9002\u5408\u5176\u7236\u5BBD\u5EA6\u3002"})}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height250",readOnly:!0,defaultValue:t})})]})})}function qc(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
	import { Button } from 'antd';
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:c("div",{className:"mb10",children:[e(F,{className:"mr20",type:"primary",danger:!0,children:"Primary"}),e(F,{className:"mr20",danger:!0,children:"Default"}),e(F,{className:"mr20",type:"dashed",danger:!0,children:"Dashed"}),e(F,{className:"mr20",type:"text",danger:!0,children:"Text"}),e(F,{className:"mr20",type:"link",danger:!0,children:"Link"})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u5371\u9669\u6309\u94AE"}),e("div",{className:"code-box-description",children:e("div",{children:"\u5371\u9669\u662F\u4E00\u79CD\u6309\u94AE\u5C5E\u6027\u3002"})}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height250",readOnly:!0,defaultValue:t})})]})})}function Zc(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
	import { Button } from 'antd';
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[c("section",{className:"code-box-demo",children:[c("div",{className:"mb10",children:[e(F,{className:"mr20",icon:e(k,{name:"search"}),shape:"circle"}),e(F,{className:"mr20",icon:e(k,{name:"search"}),shape:"circle",type:"primary"})]}),c("div",{className:"mb10",children:[e(F,{className:"mr20",icon:e(k,{name:"search"}),children:"search"}),e(F,{className:"mr20",icon:e(k,{name:"search"}),type:"primary",children:"search"})]})]}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u56FE\u6807\u6309\u94AE"}),e("div",{className:"code-box-description",children:e("div",{children:"\u5F53\u9700\u8981\u5728 Button \u5185\u5D4C\u5165 Icon \u65F6\uFF0C\u53EF\u4EE5\u8BBE\u7F6E icon \u5C5E\u6027\uFF0C\u6216\u8005\u76F4\u63A5\u5728 Button \u5185\u4F7F\u7528 Icon \u7EC4\u4EF6\u3002"})}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height250",readOnly:!0,defaultValue:t})})]})})}const Jc="_ghostbackground1_1dwro_1";var Ae={ghostbackground1:Jc};function Wc(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
	import { Button } from 'antd';
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a}),i=()=>{n(!a)},u=()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")};return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:c("div",{className:Ae.ghostbackground1,children:[e(F,{type:"primary",ghost:!0,children:"Primary"}),"\xA0\xA0",e(F,{ghost:!0,children:"Default"}),"\xA0\xA0",e(F,{type:"dashed",ghost:!0,children:"Dashed"}),"\xA0\xA0",e(F,{type:"primary",danger:!0,ghost:!0,children:"Danger"})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u5E7D\u7075\u6309\u94AE"}),e("div",{className:"code-box-description",children:"\u5E7D\u7075\u6309\u94AE\u5C06\u6309\u94AE\u7684\u5185\u5BB9\u53CD\u8272\uFF0C\u80CC\u666F\u53D8\u4E3A\u900F\u660E\uFF0C\u5E38\u7528\u5728\u6709\u8272\u80CC\u666F\u4E0A\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:u,children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:i})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height250",readOnly:!0,defaultValue:t})})]})})}function Qc(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
	import { Button } from 'antd';
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a}),i=()=>{n(!a)},u=()=>{let h=document.getElementById("globalInputCopy");h.value=t,h.select(),document.execCommand("copy"),h=null,alert("\u590D\u5236\u6210\u529F")},l=()=>{alert("\u70B9\u51FB\u4E8B\u4EF61")};return e("div",{className:"demo-block",children:c("section",{className:s,children:[c("section",{className:"code-box-demo",children:[e(F,{type:"primary",onClick:l,children:"Primary"}),e(F,{type:"primary",disabled:!0,onClick:l,children:"Primary(disabled)"}),e("br",{}),e(F,{children:"Default"}),e(F,{disabled:!0,children:"Default(disabled)"}),e("br",{}),e(F,{type:"dashed",children:"Dashed"}),e(F,{type:"dashed",disabled:!0,children:"Dashed(disabled)"}),e("br",{}),e(F,{type:"text",children:"Text"}),e(F,{type:"text",disabled:!0,children:"Text(disabled)"}),e("br",{}),e(F,{type:"link",children:"Link"}),e(F,{type:"link",disabled:!0,children:"Link(disabled)"}),e("br",{}),e(F,{danger:!0,children:"Danger Default"}),e(F,{danger:!0,disabled:!0,children:"Danger Default(disabled)"}),e("br",{}),e(F,{danger:!0,type:"text",children:"Danger Text"}),e(F,{danger:!0,type:"text",disabled:!0,children:"Danger Text(disabled)"}),e("br",{}),e(F,{type:"link",danger:!0,children:"Danger Link"}),e(F,{type:"link",danger:!0,disabled:!0,children:"Danger Link(disabled)"}),c("div",{className:Ae.ghostbackground1,children:[e(F,{ghost:!0,children:"Default"}),"\xA0\xA0",e(F,{ghost:!0,disabled:!0,children:"Default"})]})]}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u4E0D\u53EF\u7528\u72B6\u6001"}),e("div",{className:"code-box-description",children:"\u6DFB\u52A0 disabled \u5C5E\u6027\u5373\u53EF\u8BA9\u6309\u94AE\u5904\u4E8E\u4E0D\u53EF\u7528\u72B6\u6001\uFF0C\u540C\u65F6\u6309\u94AE\u6837\u5F0F\u4E5F\u4F1A\u6539\u53D8\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:u,children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:i})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height600",readOnly:!0,defaultValue:t})})]})})}function Xc(){return c(A,{children:[e("h2",{className:"intro-title",children:"Button \u6309\u94AE"}),e("p",{className:"intro-content",children:"\u6309\u94AE\u7528\u4E8E\u5F00\u59CB\u4E00\u4E2A\u5373\u65F6\u64CD\u4F5C\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(_c,{}),e(Gc,{}),e(jc,{}),e(Hc,{}),e(qc,{}),e(Zc,{}),e(Wc,{}),e(Qc,{}),e("h3",{className:"base-title",children:"Attributes"}),c("table",{className:"attri-table",children:[e("thead",{children:c("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),c("tbody",{children:[c("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B"}),e("td",{children:"string"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"type"}),e("td",{children:"\u8BBE\u7F6E\u6309\u94AE\u7C7B\u578B"}),e("td",{children:"primary | ghost | dashed | link | text | default"}),e("td",{children:"default"})]}),c("tr",{children:[e("td",{children:"size"}),e("td",{children:"\u8BBE\u7F6E\u6309\u94AE\u5927\u5C0F"}),e("td",{children:"large | middle | small"}),e("td",{children:"middle"})]}),c("tr",{children:[e("td",{children:"shape"}),e("td",{children:"\u8BBE\u7F6E\u6309\u94AE\u5F62\u72B6"}),e("td",{children:"default | circle | round"}),e("td",{children:"default"})]}),c("tr",{children:[e("td",{children:"block"}),e("td",{children:"\u5C06\u6309\u94AE\u5BBD\u5EA6\u8C03\u6574\u4E3A\u5176\u7236\u5BBD\u5EA6\u7684\u9009\u9879"}),e("td",{children:"boolean"}),e("td",{children:"false"})]}),c("tr",{children:[e("td",{children:"danger"}),e("td",{children:"\u8BBE\u7F6E\u5371\u9669\u6309\u94AE"}),e("td",{children:"boolean"}),e("td",{children:"false"})]}),c("tr",{children:[e("td",{children:"icon"}),e("td",{children:"\u8BBE\u7F6E\u6309\u94AE\u7684\u56FE\u6807\u7EC4\u4EF6"}),e("td",{children:"ReactNode"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"ghost"}),e("td",{children:"\u5E7D\u7075\u5C5E\u6027\uFF0C\u4F7F\u6309\u94AE\u80CC\u666F\u900F\u660E"}),e("td",{children:"boolean"}),e("td",{children:"false"})]}),c("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u6309\u94AE\u5931\u6548\u72B6\u6001"}),e("td",{children:"boolean"}),e("td",{children:"false"})]})]})]})]})}function Yc(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
	import { Input } from 'antd';
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:c("div",{children:[e(P,{placeholder:"Basic usage",maxLength:"5"}),e(P,{placeholder:"Basic usage",defaultValue:"55"}),e(P,{placeholder:"Basic usage",disabled:!0})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C\u4F7F\u7528"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u4F7F\u7528\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height200",readOnly:!0,defaultValue:t})})]})})}const{TextArea:eo}=P;function co(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
	import { Input } from 'antd';
	const { TextArea } = Input;
	ReactDOM.render(
	  <>
	    <div>
		<TextArea placeholder="Basic usage" />
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:e("div",{children:e(eo,{placeholder:"Basic usage"})})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u6587\u672C\u57DF"}),e("div",{className:"code-box-description",children:"\u7528\u4E8E\u591A\u884C\u8F93\u5165\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height200",readOnly:!0,defaultValue:t})})]})})}function oo(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
	import { Input } from 'antd';
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:c("div",{children:[e(P,{placeholder:"large size",size:"large"}),e(P,{placeholder:"default size"}),e(P,{placeholder:"small size",size:"small"})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u4E09\u79CD\u5927\u5C0F"}),e("div",{className:"code-box-description",children:"\u6211\u4EEC\u4E3A Input \u8F93\u5165\u6846\u5B9A\u4E49\u4E86\u4E09\u79CD\u5C3A\u5BF8\uFF08\u5927\u3001\u9ED8\u8BA4\u3001\u5C0F\uFF09\uFF0C\u9AD8\u5EA6\u5206\u522B\u4E3A 40px\u300132px \u548C 24px\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height200",readOnly:!0,defaultValue:t})})]})})}function to(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
	import { Input, Icon } from 'antd';
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:c("div",{children:[e(P,{addonBefore:"http://",addonAfter:".com",defaultValue:"mysite"}),e(P,{addonBefore:e(k,{name:"user-solid"}),addonAfter:e(k,{name:"search"}),defaultValue:"mysite"}),e(P,{prefix:"http://",suffix:".com",defaultValue:"mysite"}),e(P,{addonBefore:e(k,{name:"user-solid"}),addonAfter:e(k,{name:"search"}),prefix:"http://",suffix:".com",defaultValue:"mysite"})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u524D\u7F6E/\u540E\u7F6E\u6807\u7B7E"}),e("div",{className:"code-box-description",children:"\u7528\u4E8E\u914D\u7F6E\u4E00\u4E9B\u56FA\u5B9A\u7EC4\u5408\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height300",readOnly:!0,defaultValue:t})})]})})}function ao(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
	import { Input } from 'antd';
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:c("div",{children:[e(P,{placeholder:"Basic usage",allowClear:!0,defaultValue:"5",onChange:p=>{console.log("onChange",p)}}),e(P,{placeholder:"Basic usage",allowClear:!0,defaultValue:"5",onPressEnter:p=>{console.log("onPressEnter",p)}})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u5E26\u79FB\u9664\u56FE\u6807"}),e("div",{className:"code-box-description",children:"\u5E26\u79FB\u9664\u56FE\u6807\u7684\u8F93\u5165\u6846\uFF0C\u70B9\u51FB\u56FE\u6807\u5220\u9664\u6240\u6709\u5185\u5BB9\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let p=document.getElementById("globalInputCopy");p.value=t,p.select(),document.execCommand("copy"),p=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height300",readOnly:!0,defaultValue:t})})]})})}function lo(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
	import { Input } from 'antd';
	ReactDOM.render(
	  <>
	    <div>
		<Input placeholder="Borderless" bordered={false} />
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:e("div",{children:e(P,{placeholder:"Borderless",bordered:!1})})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u65E0\u8FB9\u6846"}),e("div",{className:"code-box-description",children:"\u6CA1\u6709\u8FB9\u6846\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height200",readOnly:!0,defaultValue:t})})]})})}function no(){return c(A,{children:[e("h2",{className:"intro-title",children:"Input\u8F93\u5165\u6846"}),e("p",{className:"intro-content",children:"\u901A\u8FC7\u9F20\u6807\u6216\u952E\u76D8\u8F93\u5165\u5185\u5BB9\uFF0C\u662F\u6700\u57FA\u7840\u7684\u8868\u5355\u57DF\u7684\u5305\u88C5\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(Yc,{}),e(co,{}),e(oo,{}),e(to,{}),e(ao,{}),e(lo,{}),e("h3",{className:"base-title",children:"API"}),e("h4",{className:"base-title",children:"Input"}),c("table",{className:"attri-table",children:[e("thead",{children:c("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),c("tbody",{children:[c("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B"}),e("td",{children:"string"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"defaultValue"}),e("td",{children:"\u8F93\u5165\u6846\u9ED8\u8BA4\u5185\u5BB9"}),e("td",{children:"string"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"addonAfter"}),e("td",{children:"\u5E26\u6807\u7B7E\u7684 input\uFF0C\u8BBE\u7F6E\u540E\u7F6E\u6807\u7B7E"}),e("td",{children:"ReactNode"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"addonBefore"}),e("td",{children:"\u5E26\u6807\u7B7E\u7684 input\uFF0C\u8BBE\u7F6E\u524D\u7F6E\u6807\u7B7E"}),e("td",{children:"ReactNode"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"prefix"}),e("td",{children:"\u5E26\u6709\u524D\u7F00\u56FE\u6807\u7684 input"}),e("td",{children:"ReactNode"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"suffix"}),e("td",{children:"\u5E26\u6709\u540E\u7F00\u56FE\u6807\u7684 input"}),e("td",{children:"ReactNode"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"maxLength"}),e("td",{children:"\u6700\u5927\u957F\u5EA6"}),e("td",{children:"number"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u7981\u7528\u72B6\u6001\uFF0C\u9ED8\u8BA4\u4E3A false"}),e("td",{children:"boolean"}),e("td",{children:"false"})]}),c("tr",{children:[e("td",{children:"allowClear"}),e("td",{children:"\u53EF\u4EE5\u70B9\u51FB\u6E05\u9664\u56FE\u6807\u5220\u9664\u5185\u5BB9"}),e("td",{children:"boolean"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u8F93\u5165\u6846\u5185\u5BB9\u53D8\u5316\u65F6\u7684\u56DE\u8C03"}),e("td",{children:"function(e)"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"onPressEnter"}),e("td",{children:"\u6309\u4E0B\u56DE\u8F66\u7684\u56DE\u8C03"}),e("td",{children:"function(e)"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"bordered"}),e("td",{children:"\u662F\u5426\u6709\u8FB9\u6846"}),e("td",{children:"boolean"}),e("td",{children:"true"})]})]})]})]})}const{Option:ke}=ee;function so(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
	import { Select } from 'antd';
	ReactDOM.render(
	  <>
	    <div>
		<Aaa>test01</Aaa>
		<Aaa>test02</Aaa>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:e("div",{children:c(ee,{defaultValue:"bbb",children:[e(ke,{value:"aaa",children:"111"}),e(ke,{value:"bbb",children:"222"})]})})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u7684\u7528\u6CD5\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box height200",readOnly:!0,defaultValue:t})})]})})}function io(){return c(A,{children:[e("h2",{className:"intro-title",children:"Select \u9009\u62E9\u5668"}),e("p",{className:"intro-content",children:"\u4E0B\u62C9\u9009\u62E9\u5668\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(so,{}),e("h3",{className:"base-title",children:"API"}),c("table",{className:"attri-table",children:[e("thead",{children:c("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:c("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B"}),e("td",{children:"string"}),e("td",{children:"--"})]})})]})]})}function uo(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
	import { Row, Col } from 'antd';
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block demo-case demo-case1",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:c("div",{children:[e($,{children:e(x,{span:24,children:"col"})}),c($,{children:[e(x,{span:12,children:"col-12"}),e(x,{span:12,children:"col-12"})]}),c($,{children:[e(x,{span:8,children:"col-8"}),e(x,{span:8,children:"col-8"}),e(x,{span:8,children:"col-8"})]})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u7684\u7528\u6CD5\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"350px"},readOnly:!0,defaultValue:t})})]})})}function ro(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
	import { Row, Col } from 'antd';
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block demo-case demo-case2",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:c("div",{children:[c($,{align:"top",children:[e(x,{span:6,children:"col-6"}),e(x,{span:6,children:"col-6"}),e(x,{span:6,children:"col-6"}),e(x,{span:6,children:"col-6"})]}),c($,{align:"middle",children:[e(x,{span:6,children:"col-6"}),e(x,{span:6,children:"col-6"}),e(x,{span:6,children:"col-6"}),e(x,{span:6,children:"col-6"})]}),c($,{align:"bottom",children:[e(x,{span:6,children:"col-6"}),e(x,{span:6,children:"col-6"}),e(x,{span:6,children:"col-6"}),e(x,{span:6,children:"col-6"})]})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u5BF9\u9F50"}),e("div",{className:"code-box-description",children:"\u5B50\u5143\u7D20\u5782\u76F4\u5BF9\u9F50\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",readOnly:!0,style:{height:"420px"},defaultValue:t})})]})})}function ho(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
	import { Row, Col, Divider } from 'antd';
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block demo-case demo-case3",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:c("div",{children:[e(O,{orientation:"left",children:"sub-element align left"}),c($,{justify:"start",children:[e(x,{span:4,children:"col-4"}),e(x,{span:4,children:"col-4"}),e(x,{span:4,children:"col-4"}),e(x,{span:4,children:"col-4"})]}),e(O,{orientation:"left",children:"sub-element align center"}),c($,{justify:"center",children:[e(x,{span:4,children:"col-4"}),e(x,{span:4,children:"col-4"}),e(x,{span:4,children:"col-4"}),e(x,{span:4,children:"col-4"})]}),e(O,{orientation:"left",children:"sub-element align right"}),c($,{justify:"end",children:[e(x,{span:4,children:"col-4"}),e(x,{span:4,children:"col-4"}),e(x,{span:4,children:"col-4"}),e(x,{span:4,children:"col-4"})]}),e(O,{orientation:"left",children:"sub-element monospaced arrangement"}),c($,{justify:"space-between",children:[e(x,{span:4,children:"col-4"}),e(x,{span:4,children:"col-4"}),e(x,{span:4,children:"col-4"}),e(x,{span:4,children:"col-4"})]}),e(O,{orientation:"left",children:"sub-element align full"}),c($,{justify:"space-around",children:[e(x,{span:4,children:"col-4"}),e(x,{span:4,children:"col-4"}),e(x,{span:4,children:"col-4"}),e(x,{span:4,children:"col-4"})]})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u6392\u7248"}),c("div",{className:"code-box-description",children:[e("div",{children:"\u5E03\u5C40\u57FA\u7840\u3002"}),e("div",{children:"\u5B50\u5143\u7D20\u6839\u636E\u4E0D\u540C\u7684\u503C start,center,end,space-between,space-around\uFF0C\u5206\u522B\u5B9A\u4E49\u5176\u5728\u7236\u8282\u70B9\u91CC\u9762\u7684\u6392\u7248\u65B9\u5F0F\u3002"})]}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",readOnly:!0,style:{height:"800px"},defaultValue:t})})]})})}function mo(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
	import { Row, Col, Divider } from 'antd';
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block demo-case demo-case3",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:e("div",{children:c($,{children:[e(x,{span:6,order:4,children:"1 col-order-4"}),e(x,{span:6,order:3,children:"2 col-order-3"}),e(x,{span:6,order:2,children:"3 col-order-2"}),e(x,{span:6,order:1,children:"4 col-order-1"})]})})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u6392\u5E8F"}),e("div",{className:"code-box-description",children:"\u901A\u8FC7 order \u6765\u6539\u53D8\u5143\u7D20\u7684\u6392\u5E8F\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",readOnly:!0,style:{height:"400px"},defaultValue:t})})]})})}function po(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
	import { Row, Col, Divider } from 'antd';
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block demo-case demo-case3",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:c("div",{children:[c($,{children:[e(x,{span:8,children:"col-8"}),e(x,{span:8,offset:8,children:"col-8"})]}),c($,{children:[e(x,{span:6,offset:6,children:"col-6 col-offset-6"}),e(x,{span:6,offset:6,children:"col-6 col-offset-6"})]})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u5DE6\u53F3\u504F\u79FB"}),c("div",{className:"code-box-description",children:[e("div",{children:"\u5217\u504F\u79FB\u3002"}),c("div",{children:["\u4F7F\u7528 offset \u53EF\u4EE5\u5C06\u5217\u5411\u53F3\u4FA7\u504F\u3002\u4F8B\u5982\uFF0Coffset=",4," \u5C06\u5143\u7D20\u5411\u53F3\u4FA7\u504F\u79FB\u4E86 4 \u4E2A\u5217\uFF08column\uFF09\u7684\u5BBD\u5EA6\u3002"]})]}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",readOnly:!0,style:{height:"800px"},defaultValue:t})})]})})}function bo(){return c(A,{className:"demo-grid",children:[e("h2",{className:"intro-title",children:"Grid \u6805\u683C"}),e("p",{className:"intro-content",children:"24 \u6805\u683C\u7CFB\u7EDF\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(uo,{}),e(ro,{}),e(ho,{}),e(mo,{}),e(po,{}),e("h3",{className:"base-title",children:"API"}),e("h4",{className:"base-title",children:"Row"}),c("table",{className:"attri-table",children:[e("thead",{children:c("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),c("tbody",{children:[c("tr",{children:[e("td",{children:"align"}),e("td",{children:"\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F"}),e("td",{children:"top | middle | bottom"}),e("td",{children:"top"})]}),c("tr",{children:[e("td",{children:"justify"}),e("td",{children:"\u6C34\u5E73\u6392\u5217\u65B9\u5F0F"}),e("td",{children:"start | end | center | space-around | space-between"}),e("td",{children:"start"})]}),c("tr",{children:[e("td",{children:"wrap"}),e("td",{children:"\u662F\u5426\u81EA\u52A8\u6362\u884C"}),e("td",{children:"boolean"}),e("td",{children:"true"})]})]})]}),e("h4",{className:"base-title",children:"Col"}),c("table",{className:"attri-table",children:[e("thead",{children:c("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),c("tbody",{children:[c("tr",{children:[e("td",{children:"span"}),e("td",{children:"\u6805\u683C\u5360\u4F4D\u683C\u6570\uFF0C\u4E3A 0 \u65F6\u76F8\u5F53\u4E8E display: none"}),e("td",{children:"number"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"order"}),e("td",{children:"\u6805\u683C\u987A\u5E8F"}),e("td",{children:"number"}),e("td",{children:"0"})]}),c("tr",{children:[e("td",{children:"offset"}),e("td",{children:"\u6805\u683C\u5DE6\u4FA7\u7684\u95F4\u9694\u683C\u6570\uFF0C\u95F4\u9694\u5185\u4E0D\u53EF\u4EE5\u6709\u6805\u683C"}),e("td",{children:"number"}),e("td",{children:"0"})]})]})]})]})}const{Header:Co,Footer:go,Content:Fo,Sider:ut}=q;function No(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block demo-case demo-case1",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:e("div",{children:c(q,{children:[e(Co,{children:"Header"}),e(Fo,{children:"Content"}),e(go,{children:"Footer"})]})})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u7684\u7528\u6CD5\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"350px"},readOnly:!0,defaultValue:t})})]})})}function xo(){return c(A,{className:"demo-grid",children:[e("h2",{className:"intro-title",children:"Layout \u5E03\u5C40"}),e("p",{className:"intro-content",children:"\u534F\u52A9\u8FDB\u884C\u9875\u9762\u7EA7\u6574\u4F53\u5E03\u5C40\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(No,{}),e("h3",{className:"base-title",children:"API"}),e("h4",{className:"base-title",children:"Row"}),c("table",{className:"attri-table",children:[e("thead",{children:c("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),c("tbody",{children:[c("tr",{children:[e("td",{children:"align"}),e("td",{children:"\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F"}),e("td",{children:"top | middle | bottom"}),e("td",{children:"top"})]}),c("tr",{children:[e("td",{children:"justify"}),e("td",{children:"\u6C34\u5E73\u6392\u5217\u65B9\u5F0F"}),e("td",{children:"start | end | center | space-around | space-between"}),e("td",{children:"start"})]}),c("tr",{children:[e("td",{children:"wrap"}),e("td",{children:"\u662F\u5426\u81EA\u52A8\u6362\u884C"}),e("td",{children:"boolean"}),e("td",{children:"true"})]})]})]}),e("h4",{className:"base-title",children:"Col"}),c("table",{className:"attri-table",children:[e("thead",{children:c("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),c("tbody",{children:[c("tr",{children:[e("td",{children:"span"}),e("td",{children:"\u6805\u683C\u5360\u4F4D\u683C\u6570\uFF0C\u4E3A 0 \u65F6\u76F8\u5F53\u4E8E display: none"}),e("td",{children:"number"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"order"}),e("td",{children:"\u6805\u683C\u987A\u5E8F"}),e("td",{children:"number"}),e("td",{children:"0"})]}),c("tr",{children:[e("td",{children:"offset"}),e("td",{children:"\u6805\u683C\u5DE6\u4FA7\u7684\u95F4\u9694\u683C\u6570\uFF0C\u95F4\u9694\u5185\u4E0D\u53EF\u4EE5\u6709\u6805\u683C"}),e("td",{children:"number"}),e("td",{children:"0"})]})]})]})]})}function Eo(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
	import { Avatar } from 'antd';
	ReactDOM.render(
	  <>
	    <div>
		<Aaa>test01</Aaa>
		<Aaa>test02</Aaa>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:c("div",{children:[e(Y,{children:"test01"}),e(Y,{children:"test02"})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u7684\u7528\u6CD5\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"200px"},readOnly:!0,defaultValue:t})})]})})}function vo(){return c(A,{children:[e("h2",{className:"intro-title",children:"Affix \u56FA\u9489"}),e("p",{className:"intro-content",children:"\u6F14\u793A\u7528"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(Eo,{}),e("h3",{className:"base-title",children:"API"}),c("table",{className:"attri-table",children:[e("thead",{children:c("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:c("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B"}),e("td",{children:"string"}),e("td",{children:"--"})]})})]})]})}function Bo(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a}),i=()=>{n(!a)},u=()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")};return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:e("div",{children:c(H,{children:[e(H.Item,{children:"Home"}),e(H.Item,{children:e("a",{href:"",children:"Application Center"})}),e(H.Item,{children:e("a",{href:"",children:"Application List"})}),e(H.Item,{children:"An Application"})]})})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u7684\u7528\u6CD5\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:u,children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:i})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"200px"},readOnly:!0,defaultValue:t})})]})})}function fo(){return c(A,{children:[e("h2",{className:"intro-title",children:"Breadcrumb \u9762\u5305\u5C51"}),e("p",{className:"intro-content",children:"\u663E\u793A\u5F53\u524D\u9875\u9762\u5728\u7CFB\u7EDF\u5C42\u7EA7\u7ED3\u6784\u4E2D\u7684\u4F4D\u7F6E\uFF0C\u5E76\u80FD\u5411\u4E0A\u8FD4\u56DE\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(Bo,{}),e("h3",{className:"base-title",children:"API"}),c("table",{className:"attri-table",children:[e("thead",{children:c("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:c("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B"}),e("td",{children:"string"}),e("td",{children:"--"})]})})]})]})}function Do(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:c("div",{children:[e(ne,{defaultCurrent:2,total:50}),e(ne,{current:3,total:50})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u7684\u7528\u6CD5\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"250px"},readOnly:!0,defaultValue:t})})]})})}function yo(){return c(A,{children:[e("h2",{className:"intro-title",children:"Pagination \u5206\u9875"}),e("p",{className:"intro-content",children:"\u91C7\u7528\u5206\u9875\u7684\u5F62\u5F0F\u5206\u9694\u957F\u5217\u8868\uFF0C\u6BCF\u6B21\u53EA\u52A0\u8F7D\u4E00\u4E2A\u9875\u9762\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(Do,{}),e("h3",{className:"base-title",children:"API"}),c("table",{className:"attri-table",children:[e("thead",{children:c("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:c("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B"}),e("td",{children:"string"}),e("td",{children:"--"})]})})]})]})}const{Step:re}=se;function Ao(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:e("div",{children:c(se,{current:1,children:[e(re,{title:"Finished",description:"This is a description."}),e(re,{title:"In Progress",description:"This is a description."}),e(re,{title:"Waiting",description:"This is a description."})]})})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u7684\u7528\u6CD5\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"200px"},readOnly:!0,defaultValue:t})})]})})}function ko(){return c(A,{children:[e("h2",{className:"intro-title",children:"Steps \u6B65\u9AA4\u6761"}),e("p",{className:"intro-content",children:"\u5F15\u5BFC\u7528\u6237\u6309\u7167\u6D41\u7A0B\u5B8C\u6210\u4EFB\u52A1\u7684\u5BFC\u822A\u6761\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(Ao,{}),e("h3",{className:"base-title",children:"API"}),c("table",{className:"attri-table",children:[e("thead",{children:c("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:c("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B"}),e("td",{children:"string"}),e("td",{children:"--"})]})})]})]})}function wo(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
	import { Checkbox } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Checkbox>Checkbox</Checkbox>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:c("div",{children:[e(ce,{children:"Checkbox"}),e("br",{}),e(ce,{checked:!0,children:"Checkbox"})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u7684\u7528\u6CD5\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"200px"},readOnly:!0,defaultValue:t})})]})})}function So(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a}),i=()=>{n(!a)},u=()=>{let g=document.getElementById("globalInputCopy");g.value=t,g.select(),document.execCommand("copy"),g=null,alert("\u590D\u5236\u6210\u529F")},[l,h]=m.exports.useState(!0);return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:c("div",{children:[e(ce,{disabled:l,children:"Checkbox"}),e("br",{}),e(ce,{disabled:l,checked:!0,children:"Checkbox"}),e("br",{}),e("br",{}),e(F,{type:"primary",onClick:()=>{h(!l)},children:"Toggle disabled"})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u4E0D\u53EF\u7528"}),e("div",{className:"code-box-description",children:"checkbox \u4E0D\u53EF\u7528\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:u,children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:i})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"300px"},readOnly:!0,defaultValue:t})})]})})}function Ro(){const d=[{val1:"className",val2:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B",val3:"string",val4:"--"},{val1:"checked",val2:"\u6307\u5B9A\u5F53\u524D\u662F\u5426\u9009\u4E2D",val3:"boolean",val4:"false"},{val1:"disabled",val2:"\u7981\u7528 Checkbox",val3:"boolean",val4:"false"}];return d.sort((o,t)=>o.val1.localeCompare(t.val1)),c(A,{children:[e("h2",{className:"intro-title",children:"Checkbox \u591A\u9009\u6846"}),e("p",{className:"intro-content",children:"\u591A\u9009\u6846\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(wo,{}),e(So,{}),e("h3",{className:"base-title",children:"API"}),c("table",{className:"attri-table",children:[e("thead",{children:c("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:d.map(o=>c("tr",{children:[e("td",{children:o.val1}),e("td",{children:o.val2}),e("td",{children:o.val3}),e("td",{children:o.val4})]},o.val1))})]})]})}function Io(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
	import { Radio } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Radio></Radio>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:e("div",{children:e(de,{children:"Radio1"})})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u7684\u7528\u6CD5\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"200px"},readOnly:!0,defaultValue:t})})]})})}function Po(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a}),i=()=>{n(!a)},u=()=>{let g=document.getElementById("globalInputCopy");g.value=t,g.select(),document.execCommand("copy"),g=null,alert("\u590D\u5236\u6210\u529F")},[l,h]=m.exports.useState(!0);return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:c("div",{children:[e(de,{disabled:l,checked:!0,children:"Disabled"}),e(de,{disabled:l,checked:!1,children:"Disabled"}),e("br",{}),e("br",{}),e(F,{type:"primary",onClick:()=>{h(!l)},children:"Toggle disabled"})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u4E0D\u53EF\u7528"}),e("div",{className:"code-box-description",children:"Radio \u4E0D\u53EF\u7528\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:u,children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:i})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"250px"},readOnly:!0,defaultValue:t})})]})})}function $o(){const d=[{val1:"className",val2:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B",val3:"string",val4:"--"},{val1:"checked",val2:"\u6307\u5B9A\u5F53\u524D\u662F\u5426\u9009\u4E2D",val3:"boolean",val4:"false"},{val1:"disabled",val2:"\u7981\u7528 Radio",val3:"boolean",val4:"false"}];return d.sort((o,t)=>o.val1.localeCompare(t.val1)),c(A,{children:[e("h2",{className:"intro-title",children:"Radio \u5355\u9009\u6846"}),e("p",{className:"intro-content",children:"\u5355\u9009\u6846\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(Io,{}),e(Po,{}),e("h3",{className:"base-title",children:"API"}),c("table",{className:"attri-table",children:[e("thead",{children:c("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:d.map(o=>c("tr",{children:[e("td",{children:o.val1}),e("td",{children:o.val2}),e("td",{children:o.val3}),e("td",{children:o.val4})]},o.val1))})]})]})}function Vo(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:c("div",{children:[e(G,{onBlur:()=>{console.log("onBlur")},onChange:E=>{console.log("onChange",E)},onFocus:()=>{console.log("onFocus")},onHoverChange:E=>{console.log("onHoverChange",E)},onKeyDown:E=>{console.log("onKeyDown",E)}}),e("br",{}),e(G,{count:8})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let E=document.getElementById("globalInputCopy");E.value=t,E.select(),document.execCommand("copy"),E=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"200px"},readOnly:!0,defaultValue:t})})]})})}function Oo(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:c("div",{children:[e(G,{character:"A"}),e("br",{}),e(G,{character:"\u597D"})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u5176\u4ED6\u5B57\u7B26"}),e("div",{className:"code-box-description",children:"\u53EF\u4EE5\u5C06\u661F\u661F\u66FF\u6362\u4E3A\u5176\u4ED6\u5B57\u7B26\uFF0C\u6BD4\u5982\u5B57\u6BCD\uFF0C\u6570\u5B57\uFF0C\u5B57\u4F53\u56FE\u6807\u751A\u81F3\u4E2D\u6587\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"200px"},readOnly:!0,defaultValue:t})})]})})}function zo(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
	import { Rate } from 'ygbh';
	ReactDOM.render(
	  <>
	    <div>
		<Rate></Rate>
	    </div>
	  </>,
	  mountNode,
	);
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:e("div",{children:e(G,{disabled:!0,defaultValue:2})})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u53EA\u8BFB"}),e("div",{className:"code-box-description",children:"\u53EA\u8BFB\uFF0C\u65E0\u6CD5\u8FDB\u884C\u9F20\u6807\u4EA4\u4E92\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"200px"},readOnly:!0,defaultValue:t})})]})})}function Uo(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:c("div",{children:[e(G,{defaultValue:3}),e("span",{children:"allowClear: true"}),e("br",{}),e(G,{defaultValue:3,allowClear:!1}),e("span",{children:"allowClear: false"})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u6E05\u9664"}),e("div",{className:"code-box-description",children:"\u652F\u6301\u5141\u8BB8\u6216\u8005\u7981\u7528\u6E05\u9664\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"200px"},readOnly:!0,defaultValue:t})})]})})}function Mo(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:e("div",{children:e(G,{tooltips:["terrible","bad","normal","good","wonderful"]})})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let h=document.getElementById("globalInputCopy");h.value=t,h.select(),document.execCommand("copy"),h=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"200px"},readOnly:!0,defaultValue:t})})]})})}function To(){return c(A,{children:[e("h2",{className:"intro-title",children:"Rate \u8BC4\u5206"}),e("p",{className:"intro-content",children:"\u8BC4\u5206\u7EC4\u4EF6\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(Vo,{}),e(Oo,{}),e(zo,{}),e(Uo,{}),e(Mo,{}),e("h3",{className:"base-title",children:"API"}),c("table",{className:"attri-table",children:[e("thead",{children:c("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),c("tbody",{children:[c("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B"}),e("td",{children:"string"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"character"}),e("td",{children:"\u81EA\u5B9A\u4E49\u5B57\u7B26"}),e("td",{children:"string"}),e("td",{children:"\u2605"})]}),c("tr",{children:[e("td",{children:"count"}),e("td",{children:"star \u603B\u6570"}),e("td",{children:"number"}),e("td",{children:"5"})]}),c("tr",{children:[e("td",{children:"defaultValue"}),e("td",{children:"\u9ED8\u8BA4\u503C"}),e("td",{children:"number"}),e("td",{children:"0"})]}),c("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u53EA\u8BFB\uFF0C\u65E0\u6CD5\u8FDB\u884C\u4EA4\u4E92"}),e("td",{children:"boolean"}),e("td",{children:"false"})]}),c("tr",{children:[e("td",{children:"value"}),e("td",{children:"\u5F53\u524D\u6570\uFF0C\u53D7\u63A7\u503C"}),e("td",{children:"number"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"allowClear"}),e("td",{children:"\u662F\u5426\u5141\u8BB8\u518D\u6B21\u70B9\u51FB\u540E\u6E05\u9664"}),e("td",{children:"boolean"}),e("td",{children:"true"})]}),c("tr",{children:[e("td",{children:"tooltips"}),e("td",{children:"\u81EA\u5B9A\u4E49\u6BCF\u9879\u7684\u63D0\u793A\u4FE1\u606F"}),e("td",{children:"string[]"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"onBlur"}),e("td",{children:"\u5931\u53BB\u7126\u70B9\u65F6\u7684\u56DE\u8C03"}),e("td",{children:"function()"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u9009\u62E9\u65F6\u7684\u56DE\u8C03"}),e("td",{children:"function(value: number)"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"onFocus"}),e("td",{children:"\u83B7\u53D6\u7126\u70B9\u65F6\u7684\u56DE\u8C03"}),e("td",{children:"function()"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"onHoverChange"}),e("td",{children:"\u9F20\u6807\u7ECF\u8FC7\u65F6\u6570\u503C\u53D8\u5316\u7684\u56DE\u8C03"}),e("td",{children:"function(value: number)"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"onKeyDown"}),e("td",{children:"\u6309\u952E\u56DE\u8C03"}),e("td",{children:"function(event)"}),e("td",{children:"--"})]})]})]})]})}function Lo(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:c("div",{children:[e(ve,{defaultValue:30}),e(ve,{defaultValue:20})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u7684\u7528\u6CD5\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"200px"},readOnly:!0,defaultValue:t})})]})})}function Ko(){return c(A,{children:[e("h2",{className:"intro-title",children:"Slider \u6ED1\u52A8\u8F93\u5165\u6761"}),e("p",{className:"intro-content",children:"\u6ED1\u52A8\u578B\u8F93\u5165\u5668\uFF0C\u5C55\u793A\u5F53\u524D\u503C\u548C\u53EF\u9009\u8303\u56F4\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(Lo,{}),e("h3",{className:"base-title",children:"API"}),c("table",{className:"attri-table",children:[e("thead",{children:c("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:c("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B"}),e("td",{children:"string"}),e("td",{children:"--"})]})})]})]})}function _o(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a}),i=()=>{n(!a)},u=()=>{let p=document.getElementById("globalInputCopy");p.value=t,p.select(),document.execCommand("copy"),p=null,alert("\u590D\u5236\u6210\u529F")};function l(p){console.log(`switch to-change ${p}`)}function h(p){console.log(`switch to-click ${p}`)}return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:e("div",{children:e(K,{defaultChecked:!0,onChange:l,onClick:h})})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u7684\u7528\u6CD5\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:u,children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:i})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"280px"},readOnly:!0,defaultValue:t})})]})})}function Go(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a}),i=()=>{n(!a)},u=()=>{let g=document.getElementById("globalInputCopy");g.value=t,g.select(),document.execCommand("copy"),g=null,alert("\u590D\u5236\u6210\u529F")},[l,h]=m.exports.useState(!0);return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:c("div",{children:[e(K,{disabled:l,defaultChecked:!0}),e("br",{}),e(F,{type:"primary",onClick:()=>{h(!l)},children:"Toggle disabled"})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u4E0D\u53EF\u7528"}),e("div",{className:"code-box-description",children:"Switch \u5931\u6548\u72B6\u6001\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:u,children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:i})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"300px"},readOnly:!0,defaultValue:t})})]})})}function jo(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:c("div",{children:[e(K,{checkedChildren:"\u5F00\u542F",unCheckedChildren:"\u5173\u95ED",defaultChecked:!0}),e("br",{}),e(K,{checkedChildren:e(k,{name:"bottom"}),unCheckedChildren:e(k,{name:"top"}),defaultChecked:!0})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u6587\u5B57\u548C\u56FE\u6807"}),e("div",{className:"code-box-description",children:"\u5E26\u6709\u6587\u5B57\u548C\u56FE\u6807\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"280px"},readOnly:!0,defaultValue:t})})]})})}function Ho(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:c("div",{children:[e(K,{defaultChecked:!0}),e("br",{}),e(K,{size:"small",defaultChecked:!0}),e("br",{}),e(K,{size:"small",defaultChecked:!0,checkedChildren:"\u5F00\u542F",unCheckedChildren:"\u5173\u95ED"})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u4E24\u79CD\u5927\u5C0F"}),e("div",{className:"code-box-description",children:'size="small" \u8868\u793A\u5C0F\u53F7\u5F00\u5173\u3002'}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"280px"},readOnly:!0,defaultValue:t})})]})})}function qo(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:c("div",{children:[e(K,{defaultChecked:!0,loading:!0}),e("br",{}),e(K,{size:"small",defaultChecked:!0,loading:!0})]})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u52A0\u8F7D\u4E2D"}),e("div",{className:"code-box-description",children:"\u6807\u8BC6\u5F00\u5173\u64CD\u4F5C\u4ECD\u5728\u6267\u884C\u4E2D\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"200px"},readOnly:!0,defaultValue:t})})]})})}function Zo(){const d=[{val1:"className",val2:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B",val3:"string",val4:"--"},{val1:"checked",val2:"\u6307\u5B9A\u5F53\u524D\u662F\u5426\u9009\u4E2D",val3:"boolean",val4:"false"},{val1:"defaultChecked",val2:"\u521D\u59CB\u662F\u5426\u9009\u4E2D",val3:"boolean",val4:"false"},{val1:"disabled",val2:"\u662F\u5426\u7981\u7528",val3:"boolean",val4:"false"},{val1:"size",val2:"\u5F00\u5173\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\uFF1Adefault small",val3:"string",val4:"default"},{val1:"checkedChildren",val2:"\u9009\u4E2D\u65F6\u7684\u5185\u5BB9",val3:"ReactNode",val4:"--"},{val1:"unCheckedChildren",val2:"\u975E\u9009\u4E2D\u65F6\u7684\u5185\u5BB9",val3:"ReactNode",val4:"--"},{val1:"loading",val2:"\u52A0\u8F7D\u4E2D\u7684\u5F00\u5173",val3:"boolean",val4:"false"}];d.sort((t,a)=>t.val1.localeCompare(a.val1));const o=[{val1:"onChange",val2:"\u53D8\u5316\u65F6\u56DE\u8C03\u51FD\u6570",val3:"function(checked: boolean, event: Event)",val4:"--"},{val1:"onClick",val2:"\u70B9\u51FB\u65F6\u56DE\u8C03\u51FD\u6570",val3:"function(checked: boolean, event: Event)",val4:"--"}];return o.sort((t,a)=>t.val1.localeCompare(a.val1)),c(A,{children:[e("h2",{className:"intro-title",children:"Switch \u5F00\u5173"}),e("p",{className:"intro-content",children:"\u5F00\u5173\u9009\u62E9\u5668\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(_o,{}),e(Go,{}),e(jo,{}),e(Ho,{}),e(qo,{}),e("h3",{className:"base-title",children:"API"}),c("table",{className:"attri-table",children:[e("thead",{children:c("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),c("tbody",{children:[d.map(t=>c("tr",{children:[e("td",{children:t.val1}),e("td",{children:t.val2}),e("td",{children:t.val3}),e("td",{children:t.val4})]},t.val1)),o.map(t=>c("tr",{children:[e("td",{children:t.val1}),e("td",{children:t.val2}),e("td",{children:t.val3}),e("td",{children:t.val4})]},t.val1))]})]})]})}function Jo(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:e("div",{children:c(ie,{title:"Default size card",extra:e("a",{href:"#",children:"More"}),style:{width:300},children:[e("p",{children:"Card content"}),e("p",{children:"Card content"}),e("p",{children:"Card content"})]})})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u5178\u578B\u5361\u7247"}),e("div",{className:"code-box-description",children:"\u5305\u542B\u6807\u9898\u3001\u5185\u5BB9\u3001\u64CD\u4F5C\u533A\u57DF\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"240px"},readOnly:!0,defaultValue:t})})]})})}function Wo(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:e("div",{style:{background:"#f1f1f1",padding:"20px"},children:c(ie,{title:"Default size card",bordered:!1,extra:e("a",{href:"#",children:"More"}),style:{width:300},children:[e("p",{children:"Card content"}),e("p",{children:"Card content"}),e("p",{children:"Card content"})]})})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u65E0\u8FB9\u6846"}),e("div",{className:"code-box-description",children:"\u5728\u7070\u8272\u80CC\u666F\u4E0A\u4F7F\u7528\u65E0\u8FB9\u6846\u7684\u5361\u7247\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"240px"},readOnly:!0,defaultValue:t})})]})})}function Qo(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:e("div",{style:{background:"#f1f1f1",padding:"20px"},children:c(ie,{style:{width:300},children:[e("p",{children:"Card content"}),e("p",{children:"Card content"}),e("p",{children:"Card content"})]})})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u7B80\u6D01\u5361\u7247"}),e("div",{className:"code-box-description",children:"\u53EA\u5305\u542B\u5185\u5BB9\u533A\u57DF\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"240px"},readOnly:!0,defaultValue:t})})]})})}function Xo(){const d=[{val1:"className",val2:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B",val3:"string",val4:"--"},{val1:"bordered",val2:"\u662F\u5426\u6709\u8FB9\u6846",val3:"boolean",val4:"true"},{val1:"extra",val2:"\u5361\u7247\u53F3\u4E0A\u89D2\u7684\u64CD\u4F5C\u533A\u57DF",val3:"ReactNode",val4:"--"},{val1:"title",val2:"\u5361\u7247\u6807\u9898",val3:"ReactNode",val4:"--"}];return d.sort((o,t)=>o.val1.localeCompare(t.val1)),c(A,{children:[e("h2",{className:"intro-title",children:"Card \u5361\u7247"}),e("p",{className:"intro-content",children:"\u901A\u7528\u5361\u7247\u5BB9\u5668\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(Jo,{}),e(Wo,{}),e(Qo,{}),e("h3",{className:"base-title",children:"API"}),c("table",{className:"attri-table",children:[e("thead",{children:c("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:d.map(o=>c("tr",{children:[e("td",{children:o.val1}),e("td",{children:o.val2}),e("td",{children:o.val3}),e("td",{children:o.val4})]},o.val1))})]})]})}const{Panel:he}=W;function Yo(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:e("div",{children:c(W,{defaultActiveKey:["1"],children:[e(he,{header:"This is panel header 1",keya:"1",children:e("div",{children:"11"})}),e(he,{header:"This is panel header 2",keya:"2",children:e("div",{children:"22"})}),e(he,{header:"This is panel header 3",keya:"3",children:e("div",{children:"33"})})]})})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u57FA\u672C\u7684\u7528\u6CD5\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"200px"},readOnly:!0,defaultValue:t})})]})})}const{Panel:we}=W;function et(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a});return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:e("div",{children:c(W,{children:[e(we,{header:"This is panel header 1",children:e("div",{children:"11"})},"1"),e(we,{header:"This is panel header 2",showArrow:!1,children:e("div",{children:"22"})},"2")]})})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u9690\u85CF\u7BAD\u5934"}),c("div",{className:"code-box-description",children:["\u4F60\u53EF\u4EE5\u901A\u8FC7 showArrow=",!1," \u9690\u85CF CollapsePanel \u7EC4\u4EF6\u7684\u7BAD\u5934\u56FE\u6807\u3002"]}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")},children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:()=>{n(!a)}})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"300px"},readOnly:!0,defaultValue:t})})]})})}function ct(){const d=[{val1:"className",val2:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B",val3:"string",val4:"--"}];d.sort((t,a)=>t.val1.localeCompare(a.val1));const o=[{val1:"header",val2:"\u9762\u677F\u5934\u5185\u5BB9",val3:"ReactNode",val4:"--"},{val1:"key",val2:"\u5BF9\u5E94 activeKey",val3:"string | number",val4:"--"},{val1:"showArrow",val2:"\u662F\u5426\u5C55\u793A\u5F53\u524D\u9762\u677F\u4E0A\u7684\u7BAD\u5934",val3:"boolean",val4:"true"}];return o.sort((t,a)=>t.val1.localeCompare(a.val1)),c(A,{children:[e("h2",{className:"intro-title",children:"Collapse \u6298\u53E0\u9762\u677F"}),e("p",{className:"intro-content",children:"\u53EF\u4EE5\u6298\u53E0/\u5C55\u5F00\u7684\u5185\u5BB9\u533A\u57DF\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(Yo,{}),e(et,{}),e("h3",{className:"base-title",children:"API"}),e("h4",{className:"base-title",children:"Collapse"}),c("table",{className:"attri-table",children:[e("thead",{children:c("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:d.map(t=>c("tr",{children:[e("td",{children:t.val1}),e("td",{children:t.val2}),e("td",{children:t.val3}),e("td",{children:t.val4})]},t.val1))})]}),e("h4",{className:"base-title",children:"Collapse.Panel"}),c("table",{className:"attri-table",children:[e("thead",{children:c("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:o.map(t=>c("tr",{children:[e("td",{children:t.val1}),e("td",{children:t.val2}),e("td",{children:t.val3}),e("td",{children:t.val4})]},t.val1))})]})]})}function ot(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a}),i=()=>{n(!a)},u=()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")};return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:e("div",{children:c(U,{title:"User Info",children:[e(U.Item,{label:"UserName",children:"Zhou Maomao"}),e(U.Item,{label:"Telephone",children:"1810000000"}),e(U.Item,{label:"Live",children:"Hangzhou, Zhejiang"}),e(U.Item,{label:"Remark",children:"empty"})]})})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u7B80\u5355\u7684\u5C55\u793A\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:u,children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:i})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"250px"},readOnly:!0,defaultValue:t})})]})})}function tt(d){const o="https://codepen.io/xiebaolin/pen/PoKGBRR",t=`
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
	`,[a,n]=m.exports.useState(!1),s=r("source-case-mod",{"show-case-core":a}),i=()=>{n(!a)},u=()=>{let l=document.getElementById("globalInputCopy");l.value=t,l.select(),document.execCommand("copy"),l=null,alert("\u590D\u5236\u6210\u529F")};return e("div",{className:"demo-block",children:c("section",{className:s,children:[e("section",{className:"code-box-demo",children:e("div",{children:c(U,{title:"User Info",column:2,children:[e(U.Item,{label:"UserName",children:"Zhou Maomao"}),e(U.Item,{label:"Telephone",children:"1810000000"}),e(U.Item,{label:"Live",children:"Hangzhou, Zhejiang"}),e(U.Item,{label:"Remark",children:"empty"})]})})}),c("section",{className:"code-box-meta",children:[e("div",{className:"code-box-title",children:"\u57FA\u672C"}),e("div",{className:"code-box-description",children:"\u53EF\u9009\u62E9\u4E00\u884C\u663E\u793A\u591A\u5C11\u4E2A\u3002"}),c("div",{className:"code-box-actions",children:[e("a",{href:o,className:"code-box-code-action code-box-code-action1",target:"_blank",title:"\u5728 CodePen \u4E2D\u6253\u5F00",children:e(b,{})}),e("span",{className:"code-box-code-action code-box-code-action2",title:"\u590D\u5236\u4EE3\u7801",onClick:u,children:e(C,{})}),e("span",{className:"code-box-code-action code-box-code-action3",title:"\u663E\u793A\u4EE3\u7801",onClick:i})]})]}),e("section",{className:"highlight-wrapper",children:e("textarea",{className:"demo-core-box",style:{height:"250px"},readOnly:!0,defaultValue:t})})]})})}function at(){return c(A,{children:[e("h2",{className:"intro-title",children:"Descriptions \u63CF\u8FF0\u5217\u8868"}),e("p",{className:"intro-content",children:"\u6210\u7EC4\u5C55\u793A\u591A\u4E2A\u53EA\u8BFB\u5B57\u6BB5\u3002"}),e("h3",{className:"show-case-title",children:"\u4EE3\u7801\u6F14\u793A"}),e(ot,{}),e(tt,{}),e("h3",{className:"base-title",children:"API"}),e("h4",{className:"base-title",children:"Descriptions"}),c("table",{className:"attri-table",children:[e("thead",{children:c("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),c("tbody",{children:[c("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B"}),e("td",{children:"string"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"title"}),e("td",{children:"\u63CF\u8FF0\u5217\u8868\u7684\u6807\u9898\uFF0C\u663E\u793A\u5728\u6700\u9876\u90E8"}),e("td",{children:"ReactNode"}),e("td",{children:"--"})]}),c("tr",{children:[e("td",{children:"column"}),e("td",{children:"\u4E00\u884C\u7684 DescriptionItems \u6570\u91CF"}),e("td",{children:"number"}),e("td",{children:"3"})]})]})]}),e("h4",{className:"base-title",children:"DescriptionItem"}),c("table",{className:"attri-table",children:[e("thead",{children:c("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:c("tr",{children:[e("td",{children:"label"}),e("td",{children:"\u5185\u5BB9\u7684\u63CF\u8FF0"}),e("td",{children:"ReactNode"}),e("td",{children:"--"})]})})]})]})}const lt=[{path:"/",component:xe},{path:"/component/installation",component:xe},{path:"/component/quickstart",component:Xe},{path:"/component/aaa",component:Ec},{path:"/component/aab",component:Bc}],nt=[{path:"/component/divider",component:yc},{path:"/component/tag",component:Sc},{path:"/component/icon",component:$c},{path:"/component/avatar",component:zc},{path:"/component/badge",component:Kc},{path:"/component/button",component:Xc},{path:"/component/input",component:no},{path:"/component/select",component:io},{path:"/component/grid",component:bo},{path:"/component/layout",component:xo},{path:"/component/affix",component:vo},{path:"/component/breadcrumb",component:fo},{path:"/component/pagination",component:yo},{path:"/component/steps",component:ko},{path:"/component/checkbox",component:Ro},{path:"/component/radio",component:$o},{path:"/component/rate",component:To},{path:"/component/slider",component:Ko},{path:"/component/switch",component:Zo},{path:"/component/card",component:Xo},{path:"/component/collapse",component:ct},{path:"/component/descriptions",component:at}];function st(d){return e(j,{children:e(ze,{children:e(m.exports.Suspense,{fallback:e("div",{children:"Loading..."}),children:c(Ue,{children:[lt.map(o=>e(Fe,{exact:!0,path:o.path,component:o.component},o.path)),nt.map(o=>e(Fe,{exact:!0,path:o.path,component:o.component},o.path))]})})})})}Me.render(e(ge.StrictMode,{children:e(st,{})}),document.getElementById("root"));
