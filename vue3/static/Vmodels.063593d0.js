let a=document.createElement("style");a.innerHTML="",document.head.appendChild(a);import{p as e,b as n,o as t,d as l,e as m,w as o,a as d,c as u,i,j as p,y as s,B as r}from"./index.87946821.js";var v={name:"Vmodel1Child",props:{modelValue:String},emits:["update:modelValue"],setup:(a,e)=>({onNameInput1:a=>{console.log(11),e.emit("update:modelValue",a.target.value)}})};const c=o();e("data-v-172a9511");const V={class:"view-Vmodel1Child"},I=m("br",null,null,-1);n();const D=c(((a,e,n,o,d,u)=>(t(),l("div",V,[m("input",{type:"text",value:n.modelValue,onInput:e[1]||(e[1]=(...a)=>o.onNameInput1&&o.onNameInput1(...a))},null,40,["value"]),I]))));v.render=D,v.__scopeId="data-v-172a9511";var f={name:"Vmodel1",components:{Vmodel1Child:v},setup:()=>({mainData:d({name1:"11",name2:"22"})})};const h=o();e("data-v-fd72a02c");const _=m("hr",null,null,-1);n();const N=h(((a,e,n,o,d,s)=>{const r=u("Vmodel1Child");return t(),l("div",null,[_,i(" compositionAPI:v-model-单个 "+p(o.mainData.name1)+" ",1),m(r,{modelValue:o.mainData.name1,"onUpdate:modelValue":e[1]||(e[1]=a=>o.mainData.name1=a)},null,8,["modelValue"])])}));f.render=N,f.__scopeId="data-v-fd72a02c";var C={name:"Vmodel2Child",props:{name1:String,name2:String},emits:["update:name1","update:name2"],setup:(a,e)=>({onNameInput1:a=>{console.log(11),e.emit("update:name1",a.target.value)},onNameInput2:a=>{console.log(22),e.emit("update:name2",a.target.value)}})};const b=o();e("data-v-5efbe946");const g=m("br",null,null,-1);n();const y=b(((a,e,n,o,d,u)=>(t(),l("div",null,[m("input",{type:"text",value:n.name1,onInput:e[1]||(e[1]=(...a)=>o.onNameInput1&&o.onNameInput1(...a))},null,40,["value"]),g,m("input",{type:"text",value:n.name2,onInput:e[2]||(e[2]=(...a)=>o.onNameInput2&&o.onNameInput2(...a))},null,40,["value"])]))));C.render=y,C.__scopeId="data-v-5efbe946";var x={name:"Vmodel2",components:{Vmodel2Child:C},setup:()=>({mainData:d({name1:"11",name2:"22"})})};const U=o();e("data-v-ba632fe0");const M=m("hr",null,null,-1);n();const S=U(((a,e,n,o,d,s)=>{const r=u("Vmodel2Child");return t(),l("div",null,[M,i(" compositionAPI:v-model-多个 "+p(o.mainData.name1)+":"+p(o.mainData.name2)+" ",1),m(r,{name1:o.mainData.name1,"onUpdate:name1":e[1]||(e[1]=a=>o.mainData.name1=a),name2:o.mainData.name2,"onUpdate:name2":e[2]||(e[2]=a=>o.mainData.name2=a)},null,8,["name1","name2"])])}));x.render=S,x.__scopeId="data-v-ba632fe0";var j={name:"Vmodel3Child",props:{name4:String,name4Modifiers:{type:Object}},emits:["update:name4"],setup:(a,e)=>({onNameInput1:n=>{let t=n.target.value;a.name4Modifiers.test1&&(t+="--"),e.emit("update:name4",t)}})};const w=o();e("data-v-5127b70d");const A=m("br",null,null,-1);n();const P=w(((a,e,n,o,d,u)=>(t(),l("div",null,[m("input",{type:"text",value:n.name4,onInput:e[1]||(e[1]=(...a)=>o.onNameInput1&&o.onNameInput1(...a))},null,40,["value"]),A]))));j.render=P,j.__scopeId="data-v-5127b70d";var z={name:"Vmodel3Child2",props:{modelValue:String,modelModifiers:{default:()=>({})}},emits:["update:modelValue"],setup:(a,e)=>({onNameInput1:n=>{let t=n.target.value;a.modelModifiers.test2&&(t+="=="),e.emit("update:modelValue",t)}})};const B=o();e("data-v-21f1650e");const E=m("br",null,null,-1);n();const H=B(((a,e,n,o,d,u)=>(t(),l("div",null,[m("input",{type:"text",value:n.modelValue,onInput:e[1]||(e[1]=(...a)=>o.onNameInput1&&o.onNameInput1(...a))},null,40,["value"]),E]))));z.render=H,z.__scopeId="data-v-21f1650e";var L={name:"Vmodel3",components:{Vmodel3Child:j,Vmodel3Child2:z},setup:()=>({mainData:d({name1:"11",name2:"22",name3:"33",name4:"44",name5:"55"})})};const O=o();e("data-v-aac9f29a");const T=m("hr",null,null,-1),k=m("div",null,"内置修饰符",-1),q=m("hr",null,null,-1);n();const F=O(((a,e,n,o,d,i)=>{const v=u("Vmodel3Child"),c=u("Vmodel3Child2");return t(),l("div",null,[T,k,s(m("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=a=>o.mainData.name1=a)},null,512),[[r,o.mainData.name1,void 0,{trim:!0}]]),m("div",null,p(o.mainData.name1),1),s(m("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=a=>o.mainData.name2=a)},null,512),[[r,o.mainData.name2,void 0,{number:!0}]]),m("div",null,p(o.mainData.name2),1),s(m("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=a=>o.mainData.name3=a)},null,512),[[r,o.mainData.name3,void 0,{lazy:!0}]]),m("div",null,p(o.mainData.name3),1),q,m(v,{name4:o.mainData.name4,"onUpdate:name4":e[4]||(e[4]=a=>o.mainData.name4=a),name4Modifiers:{test1:!0}},null,8,["name4"]),m("div",null,p(o.mainData.name4),1),m(c,{modelValue:o.mainData.name5,"onUpdate:modelValue":e[5]||(e[5]=a=>o.mainData.name5=a),modelModifiers:{test2:!0}},null,8,["modelValue"]),m("div",null,p(o.mainData.name5),1)])}));L.render=F,L.__scopeId="data-v-aac9f29a";var G={name:"Vmodels",components:{Vmodel1:f,Vmodel2:x,Vmodel3:L},setup(){}};const J=o()(((a,e,n,o,d,i)=>{const p=u("Vmodel1"),s=u("Vmodel2"),r=u("Vmodel3");return t(),l("div",null,[m(p),m(s),m(r)])}));G.render=J,G.__scopeId="data-v-25a302fa";export default G;
