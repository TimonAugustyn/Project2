(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{34:function(e,t,n){},4:function(e,t){e.exports={getUser:function(){var e=sessionStorage.getItem("user");return"undefined"!==e&&e?JSON.parse(e):null},getToken:function(){return sessionStorage.getItem("token")},setUserSession:function(e,t){sessionStorage.setItem("user",JSON.stringify(e)),sessionStorage.setItem("token",t)},resetUserSession:function(){sessionStorage.removeItem("user"),sessionStorage.removeItem("token")}}},62:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),r=n(28),c=n.n(r),i=(n(34),n(8)),o=n(10),u=n(2),j=n(1),b=function(){return Object(j.jsx)("div",{children:"This is the home page!"})},O=n(13),l=n.n(O),m=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)(""),c=Object(i.a)(r,2),o=c[0],u=c[1],b=Object(s.useState)(""),O=Object(i.a)(b,2),m=O[0],p=O[1],d=Object(s.useState)(""),h=Object(i.a)(d,2),x=h[0],g=h[1],v=Object(s.useState)(null),f=Object(i.a)(v,2),S=f[0],y=f[1];return Object(j.jsxs)("div",{children:[Object(j.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""!==m.trim()&&""!==o.trim()&&""!==n.trim()&&""!==x.trim()){y(null);var t={username:m,email:o,name:n,password:x};l.a.post("https://qumju8n29l.execute-api.us-east-2.amazonaws.com/prod/register",t,{headers:{"x-api-key":"neKKXeqoAs7i724un3NIOaZIm08rP8v37uT8lb4b"}}).then((function(e){y("Successfully Registered")})).catch((function(e){401===e.response.status||403===e.response.status?y(e.response.data.message):y("The server is down. Please try again after some time has passed.")}))}else y("All fields are required")},children:[Object(j.jsx)("h5",{children:"Register"}),"name: ",Object(j.jsx)("input",{type:"text",value:n,onChange:function(e){return a(e.target.value)}})," ",Object(j.jsx)("br",{}),"email: ",Object(j.jsx)("input",{type:"text",value:o,onChange:function(e){return u(e.target.value)}})," ",Object(j.jsx)("br",{}),"username: ",Object(j.jsx)("input",{type:"text",value:m,onChange:function(e){return p(e.target.value)}})," ",Object(j.jsx)("br",{}),"password: ",Object(j.jsx)("input",{type:"password",value:x,onChange:function(e){return g(e.target.value)}})," ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"submit",value:"Register"})]}),S&&Object(j.jsx)("p",{className:"message",children:S})]})},p=n(4),d=function(e){var t=Object(s.useState)(""),n=Object(i.a)(t,2),a=n[0],r=n[1],c=Object(s.useState)(""),o=Object(i.a)(c,2),u=o[0],b=o[1],O=Object(s.useState)(null),m=Object(i.a)(O,2),d=m[0],h=m[1];return Object(j.jsxs)("div",{children:[Object(j.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),""!==a.trim()&&""!==u.trim()){h(null);var n={username:a,password:u};l.a.post("https://qumju8n29l.execute-api.us-east-2.amazonaws.com/prod/login",n,{headers:{"x-api-key":"neKKXeqoAs7i724un3NIOaZIm08rP8v37uT8lb4b"}}).then((function(t){Object(p.setUserSession)(t.data.user,t.data.token),e.history.push("/premium-content")})).catch((function(e){401===e.response.status||403===e.response.status?h(e.response.data.message):h("The server is offline. Please try again at a later time.")}))}else h("Username or password is missing.")},children:[Object(j.jsx)("h5",{children:"Login"}),"username: ",Object(j.jsx)("input",{type:"text",value:a,onChange:function(e){return r(e.target.value)}})," ",Object(j.jsx)("br",{}),"password: ",Object(j.jsx)("input",{type:"password",value:u,onChange:function(e){return b(e.target.value)}})," ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"submit",value:"Login"})]}),d&&Object(j.jsx)("p",{className:"message",children:d})]})},h=function(e){var t=Object(p.getUser)(),n="undefined"!==t&&t?t.name:"";return Object(j.jsxs)("div",{children:["Hello ",n,"! You are logged in and can start sharing your images! ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"button",value:"Logout",onClick:function(){Object(p.resetUserSession)(),e.history.push("login")}})]})},x=n(11),g=n(15),v=["component"],f=function(e){var t=e.component,n=Object(g.a)(e,v);return Object(j.jsx)(u.b,Object(x.a)(Object(x.a)({},n),{},{render:function(e){return Object(p.getToken)()?Object(j.jsx)(u.a,{to:{pathname:"/premium-content"}}):Object(j.jsx)(t,Object(x.a)({},e))}}))},S=["component"],y=function(e){var t=e.component,n=Object(g.a)(e,S);return Object(j.jsx)(u.b,Object(x.a)(Object(x.a)({},n),{},{render:function(e){return Object(p.getToken)()?Object(j.jsx)(t,Object(x.a)({},e)):Object(j.jsx)(u.a,{to:{pathname:"/login"}})}}))};var k=function(){var e=Object(s.useState)(!0),t=Object(i.a)(e,2),n=t[0],a=t[1];Object(s.useEffect)((function(){var e=Object(p.getToken)();if("undefined"!==e&&void 0!==e&&null!==e&&e){var t={user:Object(p.getUser)(),token:e};l.a.post("https://qumju8n29l.execute-api.us-east-2.amazonaws.com/prod/verify",t,{headers:{"x-api-key":"neKKXeqoAs7i724un3NIOaZIm08rP8v37uT8lb4b"}}).then((function(e){Object(p.setUserSession)(e.data.user,e.data.token),a(!1)})).catch((function(){Object(p.resetUserSession)(),a(!1)}))}}),[]);var r=Object(p.getToken)();return n&&r?Object(j.jsx)("div",{className:"content",children:"Authenicating..."}):Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(o.a,{children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)(o.b,{exact:!0,activeClassName:"active",to:"/",children:"Home"}),Object(j.jsx)(o.b,{activeClassName:"active",to:"/register",children:"Register"}),Object(j.jsx)(o.b,{activeClassName:"active",to:"/login",children:"Login"}),Object(j.jsx)(o.b,{activeClassName:"active",to:"/premium-content",children:"Premium Content"})]}),Object(j.jsx)("div",{className:"content",children:Object(j.jsxs)(u.d,{children:[Object(j.jsx)(u.b,{exact:!0,path:"/",component:b}),Object(j.jsx)(f,{path:"/register",component:m}),Object(j.jsx)(f,{path:"/login",component:d}),Object(j.jsx)(y,{path:"/premium-content",component:h})]})})]})})};c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.35345832.chunk.js.map