"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{26:function(t,e,r){r.d(e,{Df:function(){return u},M1:function(){return v},TP:function(){return f},tx:function(){return p},z1:function(){return i}});var n=r(861),c=r(757),a=r.n(c),o="b2e5d6ef71f6d003ae07c83bfe03fa15",s="https://api.themoviedb.org/3/",u=function(){var t=(0,n.Z)(a().mark((function t(){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(s,"trending/movie/week?api_key=").concat(o));case 3:return e=t.sent,t.next=6,e.json();case 6:return r=t.sent,t.abrupt("return",r);case 10:throw t.prev=10,t.t0=t.catch(0),console.error("Error fetching trending movies:",t.t0),t.t0;case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(a().mark((function t(e){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(s,"search/movie?api_key=").concat(o,"&query=").concat(e));case 3:return r=t.sent,t.next=6,r.json();case 6:return n=t.sent,t.abrupt("return",n);case 10:throw t.prev=10,t.t0=t.catch(0),console.error("Error searching movies:",t.t0),t.t0;case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(a().mark((function t(e){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(s,"movie/").concat(e,"?api_key=").concat(o));case 3:return r=t.sent,t.next=6,r.json();case 6:return n=t.sent,t.abrupt("return",n);case 10:throw t.prev=10,t.t0=t.catch(0),console.error("Error fetching movie details:",t.t0),t.t0;case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(a().mark((function t(e){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(o));case 3:return r=t.sent,t.next=6,r.json();case 6:return n=t.sent,t.abrupt("return",n);case 10:throw t.prev=10,t.t0=t.catch(0),console.error("Error fetching movie reviews:",t.t0),t.t0;case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(a().mark((function t(e){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(s,"movie/").concat(e,"/credits?api_key=").concat(o));case 3:return r=t.sent,t.next=6,r.json();case 6:return n=t.sent,t.abrupt("return",n);case 10:throw t.prev=10,t.t0=t.catch(0),console.error("Error fetching movie cast:",t.t0),t.t0;case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},76:function(t,e,r){r.r(e),r.d(e,{default:function(){return m}});var n=r(861),c=r(439),a=r(757),o=r.n(a),s=r(791),u=r(689),i=r(26),f="Cast_cast-container__VofqV",p="Cast_cast-title__lvYvA",v="Cast_cast-list__ond-A",h="Cast_cast-item__6xvgR",l=r(184);var m=function(){var t=(0,u.UO)().movieId,e=(0,s.useState)([]),r=(0,c.Z)(e,2),a=r[0],m=r[1];return(0,s.useEffect)((function(){function e(){return(e=(0,n.Z)(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.M1)(t);case 3:r=e.sent,m(r.cast),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie cast:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),(0,l.jsxs)("div",{className:f,children:[(0,l.jsx)("h2",{className:p,children:"Cast"}),(0,l.jsx)("ul",{className:v,children:a.map((function(t){return(0,l.jsx)("li",{className:h,children:t.name},t.id)}))})]})}},861:function(t,e,r){function n(t,e,r,n,c,a,o){try{var s=t[a](o),u=s.value}catch(i){return void r(i)}s.done?e(u):Promise.resolve(u).then(n,c)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(c,a){var o=t.apply(e,r);function s(t){n(o,c,a,s,u,"next",t)}function u(t){n(o,c,a,s,u,"throw",t)}s(void 0)}))}}r.d(e,{Z:function(){return c}})}}]);
//# sourceMappingURL=76.f7a9adac.chunk.js.map