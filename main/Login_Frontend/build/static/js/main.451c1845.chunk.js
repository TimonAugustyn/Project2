(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{39:function(e,t,n){},5:function(e,t){e.exports={getUser:function(){var e=sessionStorage.getItem("user");return"undefined"!==e&&e?JSON.parse(e):null},getToken:function(){return sessionStorage.getItem("token")},setUserSession:function(e,t){sessionStorage.setItem("user",JSON.stringify(e)),sessionStorage.setItem("token",t)},resetUserSession:function(){sessionStorage.removeItem("user"),sessionStorage.removeItem("token")}}},68:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),r=n(32),c=n.n(r),i=(n(39),n(4)),o=n(11),u=n(2),j=n(0),b=function(){return Object(j.jsxs)("div",{children:["Welcome! On this website you will be able to register to an AWS database. To do that go to the Register page. ",Object(j.jsx)("br",{}),"After you have registered you may proceed to the Login page to log into that account. ",Object(j.jsx)("br",{}),"After you have logged in you will be redirected to your profile page where you can upload images and store them on an AWS S3 bucket. ",Object(j.jsx)("br",{}),"Enjoy!"]})},l=n(10),p=n.n(l),O=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)(""),c=Object(i.a)(r,2),o=c[0],u=c[1],b=Object(s.useState)(""),l=Object(i.a)(b,2),O=l[0],m=l[1],d=Object(s.useState)(""),g=Object(i.a)(d,2),h=g[0],f=g[1],x=Object(s.useState)(null),v=Object(i.a)(x,2),y=v[0],S=v[1];return Object(j.jsxs)("div",{children:[Object(j.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""!==O.trim()&&""!==o.trim()&&""!==n.trim()&&""!==h.trim()){S(null);var t={username:O,email:o,name:n,password:h};p.a.post("https://qumju8n29l.execute-api.us-east-2.amazonaws.com/prod/register",t,{headers:{"x-api-key":"neKKXeqoAs7i724un3NIOaZIm08rP8v37uT8lb4b"}}).then((function(e){S("Successfully Registered")})).catch((function(e){401===e.response.status||403===e.response.status?S(e.response.data.message):S("The server is down. Please try again after some time has passed.")}))}else S("All fields are required")},children:[Object(j.jsx)("h5",{children:"Register"}),"name: ",Object(j.jsx)("input",{type:"text",value:n,onChange:function(e){return a(e.target.value)}})," ",Object(j.jsx)("br",{}),"email: ",Object(j.jsx)("input",{type:"text",value:o,onChange:function(e){return u(e.target.value)}})," ",Object(j.jsx)("br",{}),"username: ",Object(j.jsx)("input",{type:"text",value:O,onChange:function(e){return m(e.target.value)}})," ",Object(j.jsx)("br",{}),"password: ",Object(j.jsx)("input",{type:"password",value:h,onChange:function(e){return f(e.target.value)}})," ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"btn",type:"submit",value:"Register Account"})]}),y&&Object(j.jsx)("p",{className:"message",children:y})]})},m=n(5),d=function(e){var t=Object(s.useState)(""),n=Object(i.a)(t,2),a=n[0],r=n[1],c=Object(s.useState)(""),o=Object(i.a)(c,2),u=o[0],b=o[1],l=Object(s.useState)(null),O=Object(i.a)(l,2),d=O[0],g=O[1];return Object(j.jsxs)("div",{children:[Object(j.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),""!==a.trim()&&""!==u.trim()){g(null);var n={username:a,password:u};p.a.post("https://qumju8n29l.execute-api.us-east-2.amazonaws.com/prod/login",n,{headers:{"x-api-key":"neKKXeqoAs7i724un3NIOaZIm08rP8v37uT8lb4b"}}).then((function(t){Object(m.setUserSession)(t.data.user,t.data.token),e.history.push("./profile")})).catch((function(e){401===e.response.status||403===e.response.status?g(e.response.data.message):g("The server is offline. Please try again at a later time.")}))}else g("Username or password is missing.")},children:[Object(j.jsx)("h5",{children:"Login"}),"username: ",Object(j.jsx)("input",{type:"text",value:a,onChange:function(e){return r(e.target.value)}})," ",Object(j.jsx)("br",{}),"password: ",Object(j.jsx)("input",{type:"password",value:u,onChange:function(e){return b(e.target.value)}})," ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"btn",type:"submit",value:"Login"})]}),d&&Object(j.jsx)("p",{className:"message",children:d})]})},g=n(12),h=n(18),f=["component"],x=function(e){var t=e.component,n=Object(h.a)(e,f);return Object(j.jsx)(u.b,Object(g.a)(Object(g.a)({},n),{},{render:function(e){return Object(m.getToken)()?Object(j.jsx)(u.a,{to:{pathname:"/profile"}}):Object(j.jsx)(t,Object(g.a)({},e))}}))},v=["component"],y=function(e){var t=e.component,n=Object(h.a)(e,v);return Object(j.jsx)(u.b,Object(g.a)(Object(g.a)({},n),{},{render:function(e){return Object(m.getToken)()?Object(j.jsx)(t,Object(g.a)({},e)):Object(j.jsx)(u.a,{to:{pathname:"/login"}})}}))},S=n(16),w=n.n(S),k=n(34),N=n(23);function C(e){return I.apply(this,arguments)}function I(){return(I=Object(N.a)(w.a.mark((function e(t){var n,s,a,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.image,s=t.description,(a=new FormData).append("image",n),a.append("description",s),e.next=6,p.a.post("/images",a,{headers:{"Content-Type":"multipart/form-data"}});case 6:return r=e.sent,e.abrupt("return",r.data);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=function(e){var t=Object(s.useState)(),n=Object(i.a)(t,2),a=n[0],r=n[1],c=Object(s.useState)(""),o=Object(i.a)(c,2),u=o[0],b=o[1],l=Object(s.useState)([]),p=Object(i.a)(l,2),O=p[0],d=p[1],g=function(){var e=Object(N.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,C({image:a,description:u});case 3:n=e.sent,d([n.image].concat(Object(k.a)(O)));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=Object(m.getUser)(),f="undefined"!==h&&h?h.name:"";return Object(j.jsxs)("div",{className:"Profile",children:[Object(j.jsxs)("form",{onSubmit:g,children:[Object(j.jsx)("input",{onChange:function(e){var t=e.target.files[0];r(t)},type:"file",accept:"image/*"}),Object(j.jsx)("input",{value:u,onChange:function(e){return b(e.target.value)},type:"text"}),Object(j.jsx)("button",{className:"btn",type:"submit",children:"Submit"})]}),O.map((function(e){return Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:e})},e)})),Object(j.jsxs)("div",{children:["Hello ",f,"! You are logged in and can start sharing your images! ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"btn",type:"button",value:"Logout",onClick:function(){Object(m.resetUserSession)(),e.history.push("login")}})]})]})};var A=function(){var e=Object(s.useState)(!0),t=Object(i.a)(e,2),n=t[0],a=t[1];Object(s.useEffect)((function(){var e=Object(m.getToken)();if("undefined"!==e&&void 0!==e&&null!==e&&e){var t={user:Object(m.getUser)(),token:e};p.a.post("https://qumju8n29l.execute-api.us-east-2.amazonaws.com/prod/verify",t,{headers:{"x-api-key":"neKKXeqoAs7i724un3NIOaZIm08rP8v37uT8lb4b"}}).then((function(e){Object(m.setUserSession)(e.data.user,e.data.token),a(!1)})).catch((function(){Object(m.resetUserSession)(),a(!1)}))}}),[]);var r=Object(m.getToken)();return n&&r?Object(j.jsx)("div",{className:"content",children:"Authenicating..."}):Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(o.a,{children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)(o.b,{exact:!0,activeClassName:"active",to:"/",children:"Home"}),Object(j.jsx)(o.b,{activeClassName:"active",to:"/register",children:"Register"}),Object(j.jsx)(o.b,{activeClassName:"active",to:"/login",children:"Login"}),Object(j.jsx)(o.b,{activeClassName:"active",to:"/profile",children:"Profile"})]}),Object(j.jsx)("div",{className:"content",children:Object(j.jsxs)(u.d,{children:[Object(j.jsx)(u.b,{exact:!0,path:"/",component:b}),Object(j.jsx)(x,{path:"/register",component:O}),Object(j.jsx)(x,{path:"/login",component:d}),Object(j.jsx)(y,{path:"/profile",component:T})]})})]})})};c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(A,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.451c1845.chunk.js.map