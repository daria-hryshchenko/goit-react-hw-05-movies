"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[537],{600:function(e,n,t){t.d(n,{$u:function(){return u},Nj:function(){return o},kG:function(){return p},lc:function(){return s},mu:function(){return d}});var r=t(861),a=t(757),i=t.n(a),c=t(912),s=function(){var e=(0,r.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=d40d4389e7b694736d94163c6dd7b0a1");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=d40d4389e7b694736d94163c6dd7b0a1&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=d40d4389e7b694736d94163c6dd7b0a1&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=d40d4389e7b694736d94163c6dd7b0a1&language=en-US&page=1"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?api_key=d40d4389e7b694736d94163c6dd7b0a1&language=en-US&page=1&include_adult=false&query=".concat(n));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},537:function(e,n,t){t.r(n),t.d(n,{default:function(){return L}});var r,a,i,c,s,o,u,d,p,l,h,f=t(439),v=t(791),x=t(689),g=t(600),m=t(168),Z=t(444),j=t(87),b=Z.ZP.section(r||(r=(0,m.Z)(["\n  margin: 20px 20px;\n  padding: 0;\n"]))),w=(Z.ZP.button(a||(a=(0,m.Z)(["\n  border: none;\n  background: transparent;\n  padding: 20px;\n"]))),Z.ZP.div(i||(i=(0,m.Z)([""])))),k=Z.ZP.p(c||(c=(0,m.Z)([""]))),y=(0,Z.ZP)(j.OL)(s||(s=(0,m.Z)(["\n  text-decoration: none;\n  color: #1f85cf;\n"]))),_=Z.ZP.ul(o||(o=(0,m.Z)(["\n  display: flex;\n  gap: 30px;\n  margin: 0 auto;\n  padding: 30px;\n  list-style: none;\n"]))),P=Z.ZP.li(u||(u=(0,m.Z)([""]))),S=Z.ZP.h1(d||(d=(0,m.Z)(["\n  color: #1f85cf;\n"]))),U=Z.ZP.ul(p||(p=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin: 0 auto;\n  color: #1f85cf;\n"]))),O=Z.ZP.li(l||(l=(0,m.Z)(["\n  color: #1f85cf;\n"]))),C=Z.ZP.h2(h||(h=(0,m.Z)(["\n  font-size: 24px;\n"]))),G=t(664),N=t(184);function L(){var e,n,t=(0,x.TH)(),r=(0,v.useState)(null),a=(0,f.Z)(r,2),i=a[0],c=a[1],s=(0,v.useState)(!1),o=(0,f.Z)(s,2),u=o[0],d=o[1],p=(0,v.useState)(null),l=(0,f.Z)(p,2),h=l[0],m=l[1],Z=(0,x.UO)().movieId;(0,v.useEffect)((function(){d(!0),(0,g.Nj)(Z).then((function(e){c(e)})).catch((function(e){return m(e.message)})).finally(d(!1))}),[Z]);var j=null===i||void 0===i||null===(e=i.genres)||void 0===e?void 0:e.map((function(e){return e.name})).join(" ");return(0,N.jsxs)(b,{children:[(0,N.jsx)(y,{to:null!==(n=t.state)&&void 0!==n?n:"/",children:"\ud83e\udc50 Go back"}),u&&(0,N.jsx)(G.Z,{}),null!==i&&(0,N.jsxs)(w,{movie:i,children:[(0,N.jsxs)(_,{children:[(0,N.jsx)(P,{children:null!==i.poster_path?(0,N.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w300/").concat(i.poster_path),alt:i.title}):(0,N.jsx)("img",{src:"https://www.prokerala.com/movies/assets/img/no-poster-available.jpg",alt:"no img",width:"300"})}),(0,N.jsxs)(P,{children:[(0,N.jsxs)(S,{children:[i.title,"(",i.release_date.slice(0,4),")"]}),(0,N.jsxs)("p",{children:["User csore: ",Math.round(10*Number(i.vote_average)),"%"]}),(0,N.jsx)("h2",{children:"Owerview"}),(0,N.jsx)("p",{children:i.overview}),(0,N.jsx)("h2",{children:"Genres"}),(0,N.jsx)("p",{children:j})]})]}),(0,N.jsx)("hr",{}),(0,N.jsx)(C,{children:"Addition information"}),(0,N.jsxs)(U,{children:[(0,N.jsx)(O,{children:(0,N.jsx)(y,{to:"cast",children:"Cast"})}),(0,N.jsx)(O,{children:(0,N.jsx)(y,{to:"reviews",children:"Reviews"})})]})]}),(0,N.jsx)(v.Suspense,{fallback:(0,N.jsx)("div",{children:"Loading..."}),children:(0,N.jsx)(x.j3,{})}),h&&(0,N.jsxs)(k,{children:["Oops, some error occured... Message:",h]})]})}}}]);
//# sourceMappingURL=537.a75544fd.chunk.js.map