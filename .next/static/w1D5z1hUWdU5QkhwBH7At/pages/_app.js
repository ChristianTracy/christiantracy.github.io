(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{108:function(e,t,n){e.exports=n(107)},206:function(e,t,n){__NEXT_REGISTER_PAGE("/_app",function(){return e.exports=n(233),{page:e.exports.default}})},207:function(e,t,n){"use strict";var r=n(19),o=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.createUrl=_,t.Container=t.default=void 0;var a=o(n(42)),u=o(n(43)),l=o(n(208)),i=o(n(7)),c=o(n(8)),f=o(n(16)),p=o(n(17)),s=o(n(18)),h=o(n(13)),d=r(n(0)),v=o(n(29)),y=n(24),m=n(46),b=function(e){function t(){return(0,i.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}var n;return(0,s.default)(t,e),(0,c.default)(t,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,m.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=_(t);return d.default.createElement(w,null,d.default.createElement(n,(0,l.default)({},r,{url:o})))}}],[{key:"getInitialProps",value:(n=(0,u.default)(a.default.mark(function e(t){var n,r,o;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,t.router,r=t.ctx,e.next=3,(0,y.loadGetInitialProps)(n,r);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})}]),t}(d.Component);t.default=b,(0,h.default)(b,"childContextTypes",{headManager:v.default.object,router:v.default.object});var w=function(e){function t(){return(0,i.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(d.Component);t.Container=w;var E=(0,y.execOnce)(function(){0});function _(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return E(),r},get pathname(){return E(),t},get asPath(){return E(),n},back:function(){E(),e.back()},push:function(t,n){return E(),e.push(t,n)},pushTo:function(t,n){E();var r=n?t:null,o=n||t;return e.push(r,o)},replace:function(t,n){return E(),e.replace(t,n)},replaceTo:function(t,n){E();var r=n?t:null,o=n||t;return e.replace(r,o)}}}},208:function(e,t,n){var r=n(74);function o(){return e.exports=o=r||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}e.exports=o},209:function(e,t,n){"use strict";var r=n(19),o=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(210)),u=o(n(47)),l=o(n(7)),i=o(n(8)),c=o(n(16)),f=o(n(17)),p=o(n(18)),s=o(n(49)),h=o(n(13)),d=n(105),v=r(n(0)),y=(o(n(29)),r(n(46))),m=n(24);var b=function(e){function t(){var e,n,r,o,a,i;(0,l.default)(this,t);for(var p=arguments.length,v=new Array(p),b=0;b<p;b++)v[b]=arguments[b];return n=(0,c.default)(this,(e=(0,f.default)(t)).call.apply(e,[this].concat(v))),(0,h.default)((0,s.default)((0,s.default)(n)),"formatUrls",(r=function(e,t){return{href:e&&"object"===(0,u.default)(e)?(0,d.format)(e):e,as:t&&"object"===(0,u.default)(t)?(0,d.format)(t):t}},o=null,a=null,i=null,function(e,t){if(e===o&&t===a)return i;var n=r(e,t);return o=e,a=t,i=n,n})),(0,h.default)((0,s.default)((0,s.default)(n)),"linkClicked",function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=n.formatUrls(n.props.href,n.props.as),u=a.href,l=a.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(u)){var i=window.location.pathname;u=(0,d.resolve)(i,u),l=l?(0,d.resolve)(i,l):u,e.preventDefault();var c=n.props.scroll;null==c&&(c=l.indexOf("#")<0);var f=n.props.replace?"replace":"push";y.default[f](u,l,{shallow:n.props.shallow}).then(function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}).catch(function(e){n.props.onError&&n.props.onError(e)})}}}),n}return(0,p.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,a.default)(this.props.href)!==(0,a.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,d.resolve)(e,t);y.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"==typeof t&&(t=v.default.createElement("a",null,t));var a=v.Children.only(t),u={onClick:function(t){a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(u.href=o||r),u.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(u.href=(0,y._rewriteUrlForNextExport)(u.href)),v.default.cloneElement(a,u)}}]),t}(v.Component);t.default=b},210:function(e,t,n){e.exports=n(211)},211:function(e,t,n){var r=n(1),o=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},233:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(75),u=n.n(a),l=n(76),i=n.n(l),c=function(e){return o.a.createElement("div",null,o.a.createElement(i.a,{href:"/about"},o.a.createElement("a",null,"About")),o.a.createElement(i.a,{href:"/"},o.a.createElement("a",null,"Home")))},f=function(){return o.a.createElement("div",null,o.a.createElement(c,null))},p=n(108),s=n.n(p),h=function(){return o.a.createElement(s.a,null,o.a.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("title",null,"@chrisconh"))},d=function(e){var t=e.children;return o.a.createElement("div",null,o.a.createElement(h,null),o.a.createElement(f,null),t)};function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,b(t).apply(this,arguments))}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,u.a),n=t,(r=[{key:"render",value:function(){var e=this.props.Component;return o.a.createElement(a.Container,null,o.a.createElement(d,null,o.a.createElement(e,null)))}}])&&y(n.prototype,r),l&&y(n,l),t}();t.default=E},75:function(e,t,n){e.exports=n(207)},76:function(e,t,n){e.exports=n(209)}},[[206,1,0]]]);