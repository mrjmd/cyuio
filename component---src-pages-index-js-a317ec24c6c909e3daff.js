webpackJsonp([35783957827783],{96:function(t,e,n){"use strict";function r(t){return t}function o(t,e,n){function o(t,e){var n=g.hasOwnProperty(e)?g[e]:null;v.hasOwnProperty(e)&&c("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",e),t&&c("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",e)}function a(t,n){if(n){c("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),c(!e(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var r=t.prototype,a=r.__reactAutoBindPairs;n.hasOwnProperty(u)&&N.mixins(t,n.mixins);for(var i in n)if(n.hasOwnProperty(i)&&i!==u){var s=n[i],l=r.hasOwnProperty(i);if(o(l,i),N.hasOwnProperty(i))N[i](t,s);else{var p=g.hasOwnProperty(i),d="function"==typeof s,m=d&&!p&&!l&&n.autobind!==!1;if(m)a.push(i,s),r[i]=s;else if(l){var y=g[i];c(p&&("DEFINE_MANY_MERGED"===y||"DEFINE_MANY"===y),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",y,i),"DEFINE_MANY_MERGED"===y?r[i]=f(r[i],s):"DEFINE_MANY"===y&&(r[i]=h(r[i],s))}else r[i]=s}}}else;}function l(t,e){if(e)for(var n in e){var r=e[n];if(e.hasOwnProperty(n)){var o=n in N;c(!o,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var a=n in t;if(a){var i=b.hasOwnProperty(n)?b[n]:null;return c("DEFINE_MANY_MERGED"===i,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(t[n]=f(t[n],r))}t[n]=r}}}function p(t,e){c(t&&e&&"object"==typeof t&&"object"==typeof e,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in e)e.hasOwnProperty(n)&&(c(void 0===t[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),t[n]=e[n]);return t}function f(t,e){return function(){var n=t.apply(this,arguments),r=e.apply(this,arguments);if(null==n)return r;if(null==r)return n;var o={};return p(o,n),p(o,r),o}}function h(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function d(t,e){var n=e.bind(t);return n}function m(t){for(var e=t.__reactAutoBindPairs,n=0;n<e.length;n+=2){var r=e[n],o=e[n+1];t[r]=d(t,o)}}function y(t){var e=r(function(t,r,o){this.__reactAutoBindPairs.length&&m(this),this.props=t,this.context=r,this.refs=s,this.updater=o||n,this.state=null;var a=this.getInitialState?this.getInitialState():null;c("object"==typeof a&&!Array.isArray(a),"%s.getInitialState(): must return an object or null",e.displayName||"ReactCompositeComponent"),this.state=a});e.prototype=new I,e.prototype.constructor=e,e.prototype.__reactAutoBindPairs=[],E.forEach(a.bind(null,e)),a(e,_),a(e,t),a(e,D),e.getDefaultProps&&(e.defaultProps=e.getDefaultProps()),c(e.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var o in g)e.prototype[o]||(e.prototype[o]=null);return e}var E=[],g={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},b={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},N={displayName:function(t,e){t.displayName=e},mixins:function(t,e){if(e)for(var n=0;n<e.length;n++)a(t,e[n])},childContextTypes:function(t,e){t.childContextTypes=i({},t.childContextTypes,e)},contextTypes:function(t,e){t.contextTypes=i({},t.contextTypes,e)},getDefaultProps:function(t,e){t.getDefaultProps?t.getDefaultProps=f(t.getDefaultProps,e):t.getDefaultProps=e},propTypes:function(t,e){t.propTypes=i({},t.propTypes,e)},statics:function(t,e){l(t,e)},autobind:function(){}},_={componentDidMount:function(){this.__isMounted=!0}},D={componentWillUnmount:function(){this.__isMounted=!1}},v={replaceState:function(t,e){this.updater.enqueueReplaceState(this,t,e)},isMounted:function(){return!!this.__isMounted}},I=function(){};return i(I.prototype,t.prototype,v),y}var a,i=n(4),s=n(34),c=n(1),u="mixins";a={},t.exports=o},158:function(t,e){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,a=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,s=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,u=c&&c(Object);t.exports=function t(e,l,p){if("string"!=typeof l){if(u){var f=c(l);f&&f!==u&&t(e,f,p)}var h=a(l);i&&(h=h.concat(i(l)));for(var d=0;d<h.length;++d){var m=h[d];if(!(n[m]||r[m]||p&&p[m])){var y=s(l,m);try{o(e,m,y)}catch(t){}}}return e}return e}},4:function(t,e){"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function r(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(t){return e[t]});if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(t){o[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(t){return!1}}var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;t.exports=r()?Object.assign:function(t,e){for(var r,s,c=n(t),u=1;u<arguments.length;u++){r=Object(arguments[u]);for(var l in r)a.call(r,l)&&(c[l]=r[l]);if(o){s=o(r);for(var p=0;p<s.length;p++)i.call(r,s[p])&&(c[s[p]]=r[s[p]])}}return c}},203:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(5),a=r(o),i=n(154),s=(r(i),function(){return a.default.createElement("div",null,a.default.createElement("h1",null,"Welcome"),a.default.createElement("p",null,"This is a brand new site where I play around with decentralized web protocols and other fun stuff."),a.default.createElement("p",null,"I built it using ",a.default.createElement("a",{href:"https://www.gatsbyjs.org",target:"_blank"},"Gatsby")," and React."),a.default.createElement("p",null,"Insert circa-mid-90\\'s Under Construction animated gif here."),a.default.createElement("p",null,"There are several ways you can view this site. Using the traditional Internet you can visit its Github Pages home ",a.default.createElement("a",{href:"https://mrjmd.github.io/cyuio/"},"here"),"."),a.default.createElement("p",null,"This site is also available for viewing via ",a.default.createElement("a",{href:"https://ipfs.io",target:"_blank"},"IPFS")," by going ",a.default.createElement("a",{href:"https://gateway.ipfs.io/ipns/QmaLp9R3mX38RpFH2hiud6r3FbTGup5mDfbFuNCahBAXAw/"},"here"),"."),a.default.createElement("p",null,"If you are using Beaker Browser you can also access a p2p version of this site on the ",a.default.createElement("a",{href:"https://datproject.org/",target:"_blank"},"DAT Protocol")," by clicking ",a.default.createElement("a",{href:"dat://196c3058aaa82d964b6b4084f0076b3e4a5c45809cebc80f8a814cbce30af14a/"},"here"),"."))});e.default=s,t.exports=e.default}});
//# sourceMappingURL=component---src-pages-index-js-a317ec24c6c909e3daff.js.map