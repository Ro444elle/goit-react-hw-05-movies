"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[115],{26:function(r,e,t){t.d(e,{Df:function(){return o},M1:function(){return f},TP:function(){return i},tx:function(){return p},z1:function(){return s}});var n=t(861),a=t(757),c=t.n(a),u=t(243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"b2e5d6ef71f6d003ae07c83bfe03fa15"}}),o=function(){var r=(0,n.Z)(c().mark((function r(){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.get("/trending/movie/week");case 3:return e=r.sent,r.abrupt("return",e.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching trending movies:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),s=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.get("/search/movie",{params:{query:e}});case 3:return t=r.sent,r.abrupt("return",t.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error searching movies:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.get("/movies/".concat(e));case 3:return t=r.sent,r.abrupt("return",t.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie details:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.get("/movies/".concat(e,"/reviews"));case 3:return t=r.sent,r.abrupt("return",t.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie reviews:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.get("/movies/".concat(e,"/credits"));case 3:return t=r.sent,r.abrupt("return",t.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie cast",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()},115:function(r,e,t){t.r(e),t.d(e,{default:function(){return p}});var n=t(861),a=t(439),c=t(757),u=t.n(c),o=t(791),s=t(26),i=t(184);function p(){var r=(0,o.useState)(""),e=(0,a.Z)(r,2),t=e[0],c=e[1],p=(0,o.useState)([]),f=(0,a.Z)(p,2),v=f[0],h=f[1],l=function(){var r=(0,n.Z)(u().mark((function r(){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,s.z1)(t);case 3:e=r.sent,h(e.results),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("Error fetching movies search:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();return(0,i.jsxs)("div",{children:[(0,i.jsx)("input",{type:"text",placeholder:"Search for movies...",value:t,onChange:function(r){return c(r.target.value)}}),(0,i.jsx)("button",{onClick:l,children:"Search"}),(0,i.jsx)("ul",{children:v.map((function(r){return(0,i.jsx)("li",{children:r.title},r.id)}))})]})}}}]);
//# sourceMappingURL=115.575fa05e.chunk.js.map