(this.webpackJsonpreactantd2=this.webpackJsonpreactantd2||[]).push([[0],{47:function(e,t,n){"use strict";var c=n(75),a=n(2),i=function(){return Object(a.jsx)("div",{className:"BaseLayout-header",children:"header--111"})},r=n(51),o=(n(60),c.a.Content);t.a=function(e){return Object(a.jsxs)("div",{className:"view-BaseLayout",children:[Object(a.jsx)(i,{}),Object(a.jsxs)("div",{className:"BaseLayout-mainer",children:[Object(a.jsx)("div",{className:"BaseLayout-l-side",children:Object(a.jsx)(r.a,{})}),Object(a.jsx)("div",{className:"BaseLayout-r-side",children:Object(a.jsx)(c.a,{children:Object(a.jsx)(o,{children:e.children})})})]})]})}},51:function(e,t,n){"use strict";var c=n(18),a=n(2);t.a=function(){return Object(a.jsx)("ul",{className:"ygbh-menu",children:[{title:"\u5b9e\u5217\u7fa4",children:[{title:"\u7528\u6237\u5217\u88681",href:"/ExampleList1"},{title:"\u7528\u6237\u5217\u88682",href:"/ExampleList2"},{title:"\u7528\u6237\u5217\u88683",href:"/ExampleList3"}]},{title:"react \u5b66\u4e60\u7b14\u8bb0 A",children:[{title:"hooks \u751f\u547d\u5468\u671f",href:"/NoteA/NoteA01"},{title:"hooks \u5b50\u7236\u901a\u4fe1",href:"/NoteA/NoteA02"},{title:"hooks \u6e32\u67d3\u4f18\u53161",href:"/NoteA/NoteA03"}]}].map((function(e){return Object(a.jsxs)("li",{className:"group-item",children:[Object(a.jsx)("div",{className:"group-item-title",children:e.title}),Object(a.jsx)("ul",{className:"group-hash-list",children:e.children.map((function(e){return Object(a.jsx)("li",{className:"group-hash-item",children:Object(a.jsx)(c.b,{to:e.href,children:e.title})},e.title)}))})]},e.title)}))})}},60:function(e,t,n){},66:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c={};n.r(c),n.d(c,"loginUser",(function(){return w})),n.d(c,"loginPerm",(function(){return k}));var a={};n.r(a),n.d(a,"commonData1",(function(){return M})),n.d(a,"commonData2",(function(){return I}));var i=n(0),r=n(21),o=n.n(r),l=(n(65),n(66),function(e){e&&e instanceof Function&&n.e(10).then(n.bind(null,271)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))}),s=n(18),u=n(5),j=n(3),h=n(13),d=n(26),b=n(2),p=["children","isLogin","component"],O=Object(d.b)((function(e){return{isLogin:e.loginUser.isLogin}}))((function(e){e.children;var t=e.isLogin,n=e.component,c=Object(h.a)(e,p);return console.log("\u8def\u7531\u76d1\u542c\u7ec4\u4ef6 PrivateRoute:",t,c),Object(b.jsx)(u.b,Object(j.a)(Object(j.a)({},c),{},{render:function(e){var c=e.location;return t?Object(b.jsx)(n,{}):Object(b.jsx)(u.a,{to:{pathname:"/Hello5",state:{redirect:c.pathname}}})}}))})),m=n(47),f=function(){return Object(b.jsx)("div",{children:"\u516c\u6709\u7ec4\u4ef6-Comp01"})},x=function(){return Object(b.jsx)("div",{children:"\u516c\u6709\u7ec4\u4ef6-Comp02"})},g=[{path:"/",component:function(){return Object(b.jsxs)(m.a,{children:["Home",Object(b.jsx)(f,{}),Object(b.jsx)(x,{})]})}}],v=[{path:"/ExampleList1",component:Object(i.lazy)((function(){return Promise.all([n.e(8),n.e(1)]).then(n.bind(null,279))}))},{path:"/ExampleList2",component:Object(i.lazy)((function(){return n.e(2).then(n.bind(null,272))}))},{path:"/ExampleList3",component:Object(i.lazy)((function(){return n.e(3).then(n.bind(null,281))}))}],N=[{path:"/NoteA/NoteA01",component:Object(i.lazy)((function(){return n.e(4).then(n.bind(null,273))}))},{path:"/NoteA/NoteA02",component:Object(i.lazy)((function(){return n.e(5).then(n.bind(null,274))}))},{path:"/NoteA/NoteA03",component:Object(i.lazy)((function(){return n.e(6).then(n.bind(null,280))}))}];var y=function(e){return Object(b.jsx)("div",{children:Object(b.jsx)(s.a,{children:Object(b.jsx)(i.Suspense,{fallback:Object(b.jsx)("div",{children:"Loading..."}),children:Object(b.jsxs)(u.d,{children:[g.map((function(e){return Object(b.jsx)(u.b,{exact:!0,path:e.path,component:e.component},e.path)})),v.map((function(e){return Object(b.jsx)(O,{exact:!0,path:e.path,component:e.component},e.path)})),N.map((function(e){return Object(b.jsx)(u.b,{exact:!0,path:e.path,component:e.component},e.path)}))]})})})})},A=n(27),L=n(4),E="SAVELOGINUSER",S="SAVELOGINPERM",C={imgpath:"imgpath11",name:"name11",orderSum:"orderSum11",phoneNo:"phoneNo11",isLogin:!0},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case E:return Object(j.a)(Object(j.a)({},e),Object(L.a)({},t.datatype,t.value));default:return e}},B={flag1:!1,flag2:!1,flag3:!1},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case S:return Object(j.a)(Object(j.a)({},e),Object(L.a)({},t.datatype,t.value));default:return e}},z="SAVECOMMONDATA1",P="SAVECOMMONDATA2",D={msg1:"11",msg2:"22"},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case z:return Object(j.a)(Object(j.a)({},e),Object(L.a)({},t.datatype,t.value));default:return e}},F={msg3:"11",msg4:"22"},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case P:return Object(j.a)(Object(j.a)({},e),Object(L.a)({},t.datatype,t.value));default:return e}},T=n(58),V=Object(A.c)(Object(A.b)(Object(j.a)(Object(j.a)({},c),a)),Object(A.a)(T.a));o.a.render(Object(b.jsx)("div",{children:Object(b.jsx)(d.a,{store:V,children:Object(b.jsx)(y,{})})}),document.getElementById("root")),l()}},[[72,7,9]]]);
//# sourceMappingURL=main.0a97c247.chunk.js.map