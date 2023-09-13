"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[150],{26:function(e,r,t){t.d(r,{Df:function(){return o},M1:function(){return v},TP:function(){return u},tx:function(){return l},z1:function(){return i}});var n=t(861),a=t(757),s=t.n(a),c=t(243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"b2e5d6ef71f6d003ae07c83bfe03fa15"}}),o=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get("/trending/movie/week");case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get("/search/movie",{params:{query:r}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error searching movies:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get("/movies/".concat(r));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get("/movies/".concat(r,"/reviews"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get("/movies/".concat(r,"/credits"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie cast",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()},150:function(e,r,t){t.r(r),t.d(r,{default:function(){return _}});var n=t(861),a=t(439),s=t(757),c=t.n(s),o=t(791),i=t(689),u=t(26),l="MovieDetails_movieDetailsContainer__JyHxn",v="MovieDetails_movieTitle__OFFDz",p="MovieDetails_movieOverview__qTZu7",f="MovieDetails_sectionTitle__PAn0W",h="MovieDetails_castList__oNLmA",m="MovieDetails_reviewList__E8tmJ",d="MovieDetails_castItem__ub2T3",x="MovieDetails_reviewItem__xHyLr",w=t(184);function _(){var e=(0,i.UO)().movieId,r=(0,o.useState)({}),t=(0,a.Z)(r,2),s=t[0],_=t[1],g=(0,o.useState)([]),k=(0,a.Z)(g,2),b=k[0],D=k[1],j=(0,o.useState)([]),y=(0,a.Z)(j,2),M=y[0],Z=y[1];return(0,o.useEffect)((function(){function r(){return(r=(0,n.Z)(c().mark((function r(){var t,n,a,s;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,u.TP)(e);case 3:return t=r.sent,_(t),r.next=7,(0,u.M1)(e);case 7:return n=r.sent,D(n.cast),r.next=11,(0,u.tx)(e);case 11:a=r.sent,Z(a.results),r.next=20;break;case 15:r.prev=15,r.t0=r.catch(0),console.error("Error fetching movie details:",r.t0),console.error("Error status:",null===(s=r.t0.response)||void 0===s?void 0:s.status),console.error("Error message:",r.t0.message);case 20:case"end":return r.stop()}}),r,null,[[0,15]])})))).apply(this,arguments)}console.log("MovieID:",e),function(){r.apply(this,arguments)}()}),[e]),(0,w.jsxs)("div",{className:l,children:[(0,w.jsx)("h2",{className:v,children:s.title}),(0,w.jsx)("p",{className:p,children:s.overview}),(0,w.jsx)("h3",{className:f,children:"Cast"}),(0,w.jsx)("ul",{className:h,children:b.map((function(e){return(0,w.jsx)("li",{className:d,children:e.name},e.id)}))}),(0,w.jsx)("h3",{className:f,children:"Reviews"}),(0,w.jsx)("ul",{className:m,children:M.map((function(e){return(0,w.jsxs)("li",{className:x,children:[(0,w.jsx)("p",{children:e.author}),(0,w.jsx)("p",{children:e.content})]},e.id)}))})]})}}}]);
//# sourceMappingURL=150.50d12627.chunk.js.map