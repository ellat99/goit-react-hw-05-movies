"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(t,e,a){a.r(e),a.d(e,{default:function(){return f}});var r=a(861),n=a(439),c=a(757),s=a.n(c),o=a(791),i=a(340),u=a(689),p="Cast_castList__ARoWn",l="Cast_castMember__RY3Nk",h=a(184);var f=function(){var t=(0,u.UO)().movieId,e=(0,o.useState)([]),a=(0,n.Z)(e,2),c=a[0],f=a[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat("47654636e0a81733a8194af924ebd404"));case 3:a=e.sent,f(a.data.cast),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Failed to fetch cast:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,h.jsx)("div",{className:p,children:c.map((function(t){return(0,h.jsxs)("div",{className:l,children:[(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.profile_path),alt:t.name,onError:function(t){t.target.onerror=null,t.target.src="https://via.placeholder.com/200x300?text=No+Image"}}),(0,h.jsx)("p",{children:t.name}),(0,h.jsxs)("p",{children:["as ",t.character]})]},t.cast_id)}))})}}}]);
//# sourceMappingURL=76.0d4c17a8.chunk.js.map