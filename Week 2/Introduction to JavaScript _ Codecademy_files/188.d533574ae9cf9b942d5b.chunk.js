(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[188],{MrLm:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return i});var r=n("o0o1"),c=n.n(r),a=n("YA6q");function asyncGeneratorStep(e,t,n,r,c,a,o){try{var i=e[a](o),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,c)}var o=function fetchPracticePack(e,t){return Object(a.a)({endpoint:"/recommendations/v1/practice",query:{id:e,container_type:t,include_ecas:!0}}).then(Object(a.b)({errorMessage:"Practice pack fetch failed for ".concat(t," ").concat(e),logAndSwallowErrors:!0}))},i=function(){var e=function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise(function(r,c){var a=e.apply(t,n);function _next(e){asyncGeneratorStep(a,r,c,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(a,r,c,_next,_throw,"throw",e)}_next(void 0)})}}(c.a.mark(function _callee(e,t,n,r){var a,o,i;return c.a.wrap(function _callee$(c){for(;;)switch(c.prev=c.next){case 0:if(e&&0!==t){c.next=2;break}return c.abrupt("return",!1);case 2:return c.next=4,u.fetchPracticePack(n,r);case 4:return a=c.sent,o=a.items,i=void 0===o?[]:o,c.abrupt("return",i.length>0);case 8:case"end":return c.stop()}},_callee,this)}));return function checkPracticeAvailability(t,n,r,c){return e.apply(this,arguments)}}(),u={fetchPracticePack:o}}}]);
//# sourceMappingURL=188.d533574ae9cf9b942d5b.chunk.js.map