let e=document.createElement("style");e.innerHTML=".text1[data-v-1c405245]{color:var(--745841f5)}.text2[data-v-1c405245]{color:var(--745841f6)}",document.head.appendChild(e);import{g as t}from"./service.3f0d037f.js";import{u as a,p as s,a as o,o as l,c as n,w as c,b as d,d as r,e as m,f as p,r as i,g as u,h as f,t as x}from"./index.4178417d.js";const v={name:"Example01",props:{msg:String},setup:()=>({}),data:()=>({themeColor1:"#8841AB",themeColor2:"#999999"})},g=()=>{a((e=>({"745841f5":e.themeColor1,"745841f6":e.themeColor2})))},E=v.setup;v.setup=E?(e,t)=>(g(),E(e,t)):g;const h=c();s("data-v-1c405245");const C={class:"view-Example01"},_=d(" Example01 "),b=r("div",{class:"text1"},"text1",-1),L=r("div",{class:"text2"},"text2",-1);o();const k=h(((e,t,a,s,o,c)=>(l(),n("div",C,[_,b,L]))));v.render=k,v.__scopeId="data-v-1c405245";var w={name:"Example02",props:{msg:String},setup(e,t){const a=m(),{proxy:s}=u(),o=p((()=>a.state.loginUserNum));console.log("globaltest01",s.globaltest01);const l=i(0);return console.log(111111111111),console.log(e),console.log(t),{count:l,loginUserNum:o,add1:()=>l.value++,add2:()=>{a.dispatch("addUserNum")}}}};const N=c();s("data-v-fcaab886");const U={class:"view-Example02"},y=d(" Example02 "),A=d("双点击事件");o();const I=N(((e,t,a,s,o,c)=>{const m=f("el-button");return l(),n("div",U,[y,r(m,{onClick:s.add1},{default:N((()=>[d(x(s.count),1)])),_:1},8,["onClick"]),r(m,{onClick:s.add2},{default:N((()=>[d(x(s.loginUserNum),1)])),_:1},8,["onClick"]),r(m,{onClick:s.add1},{default:N((()=>[A])),_:1},8,["onClick"])])}));w.render=I,w.__scopeId="data-v-fcaab886";var S={name:"ExampleList1",props:{msg:String},setup(){console.log("ExampleA:")},components:{Example01:v,Example02:w},mounted(){this.searchList()},methods:{searchList(){t(this.$Api("queryExampleList"),{}).then((e=>{"0000"==e.flag&&console.log(e.data)}))}}};const j=c();s("data-v-f9fcfffc");const q={class:"view-ExampleList"},B=d(" ExampleList1 11 "),H=d("默认按钮");o();const M=j(((e,t,a,s,o,c)=>{const d=f("el-button"),m=f("Example01"),p=f("Example02");return l(),n("div",q,[B,r(d,null,{default:j((()=>[H])),_:1}),r(m,{name:11}),r(p)])}));S.render=M,S.__scopeId="data-v-f9fcfffc";export default S;
