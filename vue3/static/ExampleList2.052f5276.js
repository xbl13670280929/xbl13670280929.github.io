let e=document.createElement("style");e.innerHTML=".text1[data-v-1c405245]{color:var(--745841f5)}.text2[data-v-1c405245]{color:var(--745841f6)}",document.head.appendChild(e);import{g as t}from"./service.3f0d037f.js";import{m as a,p as s,b as o,o as l,d as n,w as c,i as d,e as r,n as m,q as p,r as i,g as u,c as x,j as v}from"./index.87946821.js";const g={name:"Example01",props:{msg:String},setup:()=>({}),data:()=>({themeColor1:"#8841AB",themeColor2:"#999999"})},f=()=>{a((e=>({"745841f5":e.themeColor1,"745841f6":e.themeColor2})))},E=g.setup;g.setup=E?(e,t)=>(f(),E(e,t)):f;const h=c();s("data-v-1c405245");const b={class:"view-Example01"},C=d(" Example01 "),_=r("div",{class:"text1"},"text1",-1),L=r("div",{class:"text2"},"text2",-1);o();const k=h(((e,t,a,s,o,c)=>(l(),n("div",b,[C,_,L]))));g.render=k,g.__scopeId="data-v-1c405245";var w={name:"Example02",props:{msg:String},setup(e,t){const a=m(),{proxy:s}=u(),o=p((()=>a.state.loginUserNum));console.log("globaltest01",s.globaltest01);const l=i(0);return console.log(111111111111),console.log(e),console.log(t),{count:l,loginUserNum:o,add1:()=>l.value++,add2:()=>{a.dispatch("addUserNum")}}}};const N=c();s("data-v-fcaab886");const U={class:"view-Example02"},j=d(" Example02 "),y=d("双点击事件");o();const A=N(((e,t,a,s,o,c)=>{const m=x("el-button");return l(),n("div",U,[j,r(m,{onClick:s.add1},{default:N((()=>[d(v(s.count),1)])),_:1},8,["onClick"]),r(m,{onClick:s.add2},{default:N((()=>[d(v(s.loginUserNum),1)])),_:1},8,["onClick"]),r(m,{onClick:s.add1},{default:N((()=>[y])),_:1},8,["onClick"])])}));w.render=A,w.__scopeId="data-v-fcaab886";var I={name:"ExampleList2",props:{msg:String},setup(){console.log("ExampleA:")},components:{Example01:g,Example02:w},mounted(){this.searchList()},methods:{searchList(){t(this.$Api("queryExampleList"),{}).then((e=>{"0000"==e.flag&&console.log(e.data)}))}}};const S=c();s("data-v-0b1bc5c0");const q={class:"view-ExampleList"},B=d(" ExampleList1 11 "),H=d("默认按钮");o();const M=S(((e,t,a,s,o,c)=>{const d=x("el-button"),m=x("Example01"),p=x("Example02");return l(),n("div",q,[B,r(d,null,{default:S((()=>[H])),_:1}),r(m,{name:11}),r(p)])}));I.render=M,I.__scopeId="data-v-0b1bc5c0";export default I;
