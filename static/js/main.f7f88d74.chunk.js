(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(2),s=n.n(a),r=n(14),i=n.n(r),o=(n(22),n(5)),u=n.n(o),l=n(15),j=n(3),p=n(16),b=n.n(p),h=function(t){var e=t.posts;return t.loading?Object(c.jsx)("h2",{children:"Loading ....."}):Object(c.jsx)("ul",{className:"list-group mb-4",children:e.map((function(t){return Object(c.jsx)("li",{className:"list-group-item",children:t.title},t.id)}))})},d=function(t){for(var e=t.postsPerPage,n=t.totalPosts,a=t.paginate,s=[],r=1;r<=Math.ceil(n/e);r++)s.push(r);return Object(c.jsx)("nav",{children:Object(c.jsx)("ul",{className:"pagination",children:s.map((function(t){return Object(c.jsx)("li",{className:"page-item",children:Object(c.jsx)("a",{onClick:function(){return a(t)},href:"!#",className:"page-link",children:t})},t)}))})})};n(42);var f=function(){var t=Object(a.useState)([]),e=Object(j.a)(t,2),n=e[0],s=e[1],r=Object(a.useState)(!1),i=Object(j.a)(r,2),o=i[0],p=i[1],f=Object(a.useState)(1),O=Object(j.a)(f,2),g=O[0],m=O[1],x=Object(a.useState)(10),v=Object(j.a)(x,1)[0];Object(a.useEffect)((function(){(function(){var t=Object(l.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p(!0),t.next=3,b.a.get("https://jsonplaceholder.typicode.com/posts");case 3:e=t.sent,s(e.data),p(!1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var P=g*v,y=P-v,N=n.slice(y,P);return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{className:"text-primary mb-3",children:"My Blog"}),Object(c.jsx)(h,{posts:N,loading:o}),Object(c.jsx)(d,{postsPerPage:v,totalPosts:n.length,paginate:function(t){return m(t)}})]})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),s(t),r(t)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),O()}},[[43,1,2]]]);
//# sourceMappingURL=main.f7f88d74.chunk.js.map