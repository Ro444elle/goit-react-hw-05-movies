"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[653],{26:function(e,t,r){r.d(t,{Df:function(){return s},M1:function(){return f},TP:function(){return v},tx:function(){return p},z1:function(){return u}});var n=r(861),c=r(757),o=r.n(c),a="b2e5d6ef71f6d003ae07c83bfe03fa15",i="https://api.themoviedb.org/3/",s=function(){var e=(0,n.Z)(o().mark((function e(){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(i,"trending/movie/week?api_key=").concat(a));case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(o().mark((function e(t){var r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(i,"search/movie?api_key=").concat(a,"&query=").concat(t));case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:throw e.prev=10,e.t0=e.catch(0),console.error("Error searching movies:",e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(o().mark((function e(t){var r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(i,"movie/").concat(t,"?api_key=").concat(a));case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:throw e.prev=10,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(o().mark((function e(t){var r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(a));case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:throw e.prev=10,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(o().mark((function e(t){var r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(a));case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:throw e.prev=10,e.t0=e.catch(0),console.error("Error fetching movie cast:",e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},653:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n=r(861),c=r(439),o=r(757),a=r.n(o),i=r(791),s=r(26),u={"movies-container":"Movies_movies-container__UaHeT",inputSearch:"Movies_inputSearch__LuSB9",searchButton:"Movies_searchButton__VlmGO","movie-list":"Movies_movie-list__T-yKh","movie-item":"Movies_movie-item__oDxxC","movie-poster":"Movies_movie-poster__nC0Hf","movie-title":"Movies_movie-title__WFXV1"},v=r(87),p=r(184);function f(){var e=(0,i.useState)(""),t=(0,c.Z)(e,2),r=t[0],o=t[1],f=(0,i.useState)([]),h=(0,c.Z)(f,2),l=h[0],m=h[1],d=function(){var e=(0,n.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.z1)(r);case 3:t=e.sent,m(t.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching movies search:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,p.jsxs)("div",{className:u["movie-container"],children:[(0,p.jsx)("input",{className:u.inputSearch,type:"text",placeholder:"Search for movies...",value:r,onChange:function(e){return o(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&d()}}),(0,p.jsx)("button",{onClick:d,className:u.searchButton,children:"Search"}),(0,p.jsx)("ul",{className:u["movie-list"],children:l.map((function(e){return(0,p.jsx)("li",{className:u["movie-item"],children:(0,p.jsxs)(v.rU,{to:"/movies/".concat(e.id),children:[(0,p.jsx)("p",{className:u["movie-title"],children:e.title}),(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(e.poster_path),alt:e.title,className:u["movie-poster"]})]})},e.id)}))})]})}},861:function(e,t,r){function n(e,t,r,n,c,o,a){try{var i=e[o](a),s=i.value}catch(u){return void r(u)}i.done?t(s):Promise.resolve(s).then(n,c)}function c(e){return function(){var t=this,r=arguments;return new Promise((function(c,o){var a=e.apply(t,r);function i(e){n(a,c,o,i,s,"next",e)}function s(e){n(a,c,o,i,s,"throw",e)}i(void 0)}))}}r.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=653.94993d8f.chunk.js.map