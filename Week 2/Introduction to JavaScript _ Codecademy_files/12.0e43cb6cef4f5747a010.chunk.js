(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[12],{"7V7D":function(e,t,o){e.exports={toggle:"toggle__3szlvGns4ctzptRSxBW7sy",menu:"menu__1AfYFtFYdqxwHtktzinK",profileItem:"profileItem__1e8yX3wmIX1SKK9xX5i3Fn",profileImage:"profileImage__pLTJCJW_5ybO_YZ9rU9N0",profileDescription:"profileDescription__3ZqywQgSQH7jyKLkQwB9Rx",name:"name__2PYuyJ1JQlAJ9FKFq769Jb",points:"points__PY78wAUKMpYZEZxB2fjGd",menuItem:"menuItem__28u20ypRAyAvlHBP5pXU5s"}},"8pQy":function(e,t,o){e.exports={bell:"bell__AzBwO6vfXd1vBBNs_toEi",dark:"dark__tUtbWGVdx7P8NeSNe8VfG",light:"light__2QkOxErjEG_gJjXx-P0vkr",unread:"unread__CEzUq-gsL9aPdjh-k_4RR",ring:"ring__C8pkxyECPU6OcGZUFeBT4"}},"96qd":function(e,t,o){"use strict";var n=o("mwIZ"),r=o.n(n),i=o("q1tI"),a=o.n(i),c=o("udU5"),s=o("fLhW"),u=o("g3jP"),f=o.n(u);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var l={"location/DASHBOARD":"dashboard_v2","location/CATALOG":"catalog","location/COURSE":"course_landing_page","location/PATH":"path_landing_page","location/COURSE_CONTENT_ITEM":"le_course_content_item","location/PATH_CONTENT_ITEM":"le_path_content_item"},p=function(e){function NotificationsList(){var e,t;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,NotificationsList);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(t=_possibleConstructorReturn(this,(e=_getPrototypeOf(NotificationsList)).call.apply(e,[this].concat(n)))).trackNotificationClick=function(e){var o=t.props.locationType;Object(s.b)("notification","clicked",{target:"notification_bell_cta",page_name:o&&l[o]||null,event_id:e.id,context:e.campaign})},t.componentWillUnmount=function(){t.props.notificationsMarkedRead(t.props.notifications.map(function(e){return e._id}))},t.getImageType=function(e){var t=e.type,o=e.img;if("achievement"===t)return{icon:"trophy",url:null};if("streak"===t)return{icon:null,url:f.a};var n=r()(o,"type"),i=r()(o,"slug");return{icon:"icon"===n?i:null,url:"url"===n?i:null}},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(NotificationsList,i["Component"]),function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}(NotificationsList,[{key:"render",value:function render(){var e=this,t=this.props.notifications.map(function(t){var o=e.getImageType(t),n=o.icon,r=o.url;return{date:t.time,id:t._id,iconSettings:{color:"#141e3b"},iconSlug:n,imageUrl:r,link:t.href,text:t.description,unread:"1"===t.status,campaign:t.campaign_name}});return a.a.createElement(c.a,{className:this.props.className,notifications:t,onNotificationClick:this.trackNotificationClick})}}]),NotificationsList}();t.a=p},AE77:function(e,t,o){e.exports={avatar:"avatar__iqYIJGZkmbmobKVXphmgz",image:"image__2I01llemOYC8w-ZOLGFJEz",round:"round__2bsFO3dpI65-ZHgfEiQ3vx",small:"small__FMJauFN27Is17k4uexjiK",large:"large__3wxECCf3cs4FCq2m6ngHdx"}},MAbI:function(e,t,o){"use strict";var n=o("TSYQ"),r=o.n(n),i=o("q1tI"),a=o.n(i),c=o("AE77"),s=o.n(c);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var u=function(e){function Avatar(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Avatar),_possibleConstructorReturn(this,_getPrototypeOf(Avatar).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(Avatar,a.a.Component),function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}(Avatar,[{key:"render",value:function render(){var e=r()({[s.a.avatar]:!0,[s.a.round]:this.props.round,[s.a.small]:this.props.small,[s.a.large]:this.props.large});return a.a.createElement("div",{className:e},a.a.createElement("img",{alt:"Avatar","aria-label":"my account dropdown toggle",className:s.a.image,src:this.props.imageUrl}))}}]),Avatar}();u.defaultProps={small:!1,large:!1,round:!0},t.a=u},"P9M/":function(e,t,o){"use strict";var n=o("q1tI"),r=o.n(n),i=o("G9Ht"),a=o.n(i),c=o("NuJE"),s=o("y3J+"),u=o("eikI"),f=o("7V7D"),l=o.n(f),p=o("MAbI"),y=function ClickTarget(e){var t=e.profileImage,o=e.onClick;return r.a.createElement("button",{"aria-label":"my account dropdown toggle",className:l.a.toggle,id:"dropdown-toggle",onClick:o,type:"button"},r.a.createElement(p.a,{small:!0,imageUrl:t}))},_=o("npf3"),d=o("TSYQ"),b=o.n(d),m=o("b0K7"),h=o("RsCp"),g=o("c3k/");function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function _toConsumableArray(e){return function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}(e)||function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var O=function(e){function MenuItems(){var e,t;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,MenuItems);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=_possibleConstructorReturn(this,(e=_getPrototypeOf(MenuItems)).call.apply(e,[this].concat(n)))).generateMenuItems=function(){var e=t.props,o=e.showNavItems,n=e.isMobile,r=e.showProAds,i=e.isAdmin,a=e.isCustomerService,c=e.isPro,s={href:m.U,children:"Upgrade to Pro",visible:n||o};return[r&&s].concat(_toConsumableArray(Object(h.a)({isAdmin:i,isCustomerService:a,isPro:c}))).filter(function(e){return!!e})},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(MenuItems,r.a.Component),function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}(MenuItems,[{key:"render",value:function render(){var e=this.generateMenuItems(),t=b()([l.a.menuItem],"no-underline");return r.a.createElement("div",null,e.filter(function(e){return e.visible}).map(function(e){return r.a.createElement("a",_extends({"data-testid":e.id,key:"link-to-".concat(e.href),className:t},Object(g.a)(["visible","children"],e)),e.children,e.badge?r.a.createElement(_.a,null,e.badge):null)}))}}]),MenuItems}();function MeDropdown_typeof(e){return(MeDropdown_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function MeDropdown_defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function MeDropdown_possibleConstructorReturn(e,t){return!t||"object"!==MeDropdown_typeof(t)&&"function"!=typeof t?function MeDropdown_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function MeDropdown_getPrototypeOf(e){return(MeDropdown_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function MeDropdown_setPrototypeOf(e,t){return(MeDropdown_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){function MeDropdown(){return function MeDropdown_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,MeDropdown),MeDropdown_possibleConstructorReturn(this,MeDropdown_getPrototypeOf(MeDropdown).apply(this,arguments))}return function MeDropdown_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&MeDropdown_setPrototypeOf(e,t)}(MeDropdown,r.a.Component),function MeDropdown_createClass(e,t,o){return t&&MeDropdown_defineProperties(e.prototype,t),o&&MeDropdown_defineProperties(e,o),e}(MeDropdown,[{key:"render",value:function render(){var e=this.props,t=e.profileImage,o=e.showNavItems,n=e.showProAds,i=e.inTrialPlanInTrialPeriod;return r.a.createElement(s.a,{clickTarget:r.a.createElement(y,{profileImage:t})},r.a.createElement(c.a,{column:!0,className:l.a.menu},r.a.createElement("nav",null,r.a.createElement(O,{showNavItems:o,showProAds:n,isMobile:a.a.any,isAdmin:u.a.isAdmin(),isCustomerService:u.a.isCustomerService(),isPro:u.a.isPro()&&!i}))))}}]),MeDropdown}();v.defaultProps={showNavItems:!1};t.a=v},g3jP:function(e,t,o){e.exports=o.p+"2e7770af3a38c3442e7802f2f6a91a6f.svg"},gnd6:function(e,t,o){"use strict";var n=o("q1tI"),r=o.n(n),i=o("NuJE"),a=o("y3J+"),c=o("Xxlx"),s=o("96qd"),u=o("tFdb"),f=o("QJz3"),l=o("ixXQ"),p=o("hAE0"),y=o.n(p);function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}t.a=function NotificationsDropdown(e){var t=Object(f.a)(l.a.HEADER_AREA),o=t.data,n=t.actions,p=o.notifications,_=o.hasUnread,d=n.notificationsMarkedRead,b=e.locationType,m=r.a.createElement(i.a,{center:!0,className:y.a.menuBell},r.a.createElement(c.a,_extends({},{category:"user",data:{target:"notification_bell"}},{"aria-label":"notifications"}),r.a.createElement(u.a,{theme:e.theme,key:"notification-bell",hasUnread:_})));return r.a.createElement(a.a,{clickTarget:m},r.a.createElement(i.a,{column:!0,className:y.a.dropdown},r.a.createElement(s.a,{className:y.a.notifications,notifications:p,notificationsMarkedRead:d,locationType:b})))}},hAE0:function(e,t,o){e.exports={dropdown:"dropdown__1F_fcRWv-pe25RtHTZdeFh",notifications:"notifications__dQ5YhPElQyuN4YvV60puJ",menuBell:"menuBell__3g4iBnjXjfVM0Q6IKDdIdT"}},tFdb:function(e,t,o){"use strict";var n=o("Y+p1"),r=o.n(n),i=o("QqFe"),a=o("buhq"),c=o("q1tI"),s=o.n(c),u=o("TSYQ"),f=o.n(u),l=o("8pQy"),p=o.n(l);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function NotificationBell(){var e,t;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,NotificationBell);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(t=_possibleConstructorReturn(this,(e=_getPrototypeOf(NotificationBell)).call.apply(e,[this].concat(n)))).state={threshold:0},t.componentDidMount=function(){t.favicon=window.document.querySelector('link[rel="shortcut icon"]')},t.shouldComponentUpdate=function(e,o){return!r()(e.hasUnread,t.props.hasUnread)||(o.threshold>10||0===o.threshold)},t.componentDidUpdate=function(e){e.hasUnread!==t.props.hasUnread&&(t.favicon.href="/favicon".concat(t.props.hasUnread?"-unread":"",".ico"))},t.onMouseOut=function(){window.setTimeout(t.decay,2e3),t.setState(function(e){return{threshold:e.threshold+1}})},t.decay=function(){t.setState(function(e){return{threshold:e.threshold-1}})},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(NotificationBell,c["Component"]),function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}(NotificationBell,[{key:"render",value:function render(){var e=f()(this.props.className,p.a.bell,p.a["".concat(this.props.theme)],{[p.a.unread]:this.props.hasUnread,[p.a.ring]:this.state.threshold>10});return s.a.createElement(i.a,{as:this.props.tagName,className:e,flat:!0,onBlur:this.onMouseOut,onMouseOut:this.onMouseOut,theme:"brand-dark-blue",type:"button"},s.a.createElement(a.a,null))}}]),NotificationBell}();y.defaultProps={theme:"dark",tagName:"button"},t.a=y},yEoe:function(e,t,o){var n={"./en-SG":"KRKD","./en-SG.js":"KRKD","./en-au":"1Cp/","./en-au.js":"1Cp/","./en-ca":"yZHi","./en-ca.js":"yZHi","./en-gb":"V6vJ","./en-gb.js":"V6vJ","./en-ie":"cDkf","./en-ie.js":"cDkf","./en-il":"yN3b","./en-il.js":"yN3b","./en-nz":"cYJB","./en-nz.js":"cYJB"};function webpackContext(e){var t=webpackContextResolve(e);return o(t)}function webpackContextResolve(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}webpackContext.keys=function webpackContextKeys(){return Object.keys(n)},webpackContext.resolve=webpackContextResolve,e.exports=webpackContext,webpackContext.id="yEoe"}}]);
//# sourceMappingURL=12.0e43cb6cef4f5747a010.chunk.js.map