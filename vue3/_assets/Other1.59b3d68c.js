let o=document.createElement("style");o.innerHTML="",document.head.appendChild(o);import{h as e,o as t,c as s,d as n,b as a,t as l,w as r,r as c,p as d,a as u,I as p,T as i,J as v}from"./index.d8c7239a.js";const C=r();var m={setup(o){console.log("setup",11);const r=()=>{console.log(22)};return(o,c)=>{const d=e("el-button");return t(),s("div",null,[n(d,{onClick:r},{default:C((()=>[a("按钮:"+l("xx1"))])),_:1})])}},__scopeId:"data-v-36e23d60"},f={name:"Other1",components:{Setup1:m},setup(o,e){const t=c("red");return{color1:t,fnColor1:()=>{console.log(11),t.value="#999"}}}};const h=r();d("data-v-08004193");const _={class:"view-Other1"},x=n("div",null,"我是来自 teleport 的代码块",-1),b=a("自写义指令-testColor");u();const g=h(((o,a,l,r,c,d)=>{const u=e("Setup1"),C=p("testColor");return t(),s("div",_,[n(u),(t(),s(i,{to:"body"},[x])),v(n("span",{onClick:a[1]||(a[1]=(...o)=>r.fnColor1&&r.fnColor1(...o))},[b],512),[[C,r.color1]])])}));f.render=g,f.__scopeId="data-v-08004193";export default f;
