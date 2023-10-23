String.prototype.includes||(String.prototype.includes=function(t,e){"use strict";return"number"!=typeof e&&(e=0),!(e+t.length>this.length)&&-1!==this.indexOf(t,e)}),
/**
 * Array.prototype.includes() polyfill
 * @author Chris Ferdinandi
 * @license MIT
 */
Array.prototype.includes||(Array.prototype.includes=function(t,e){"use strict";if(t instanceof RegExp)throw TypeError("first argument must not be a RegExp");return void 0===e&&(e=0),-1!==this.indexOf(t,e)}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(t){if(null==this)throw new TypeError('"this" is null or not defined');var e=Object(this),n=e.length>>>0;if("function"!=typeof t)throw new TypeError("predicate must be a function");for(var i=arguments[1],r=0;r<n;){var s=e[r];if(t.call(i,s,r,e))return s;r++}},configurable:!0,writable:!0}),function(){for(var t=0,e=["ms","moz","webkit","o"],n=0;n<e.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[e[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[n]+"CancelAnimationFrame"]||window[e[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,n){var i=(new Date).getTime(),r=Math.max(0,16-(i-t)),s=window.setTimeout((function(){e(i+r)}),r);return t=i+r,s}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),Math.log10=Math.log10||function(t){return Math.log(t)*Math.LOG10E},Array.from||(Array.from=function(){var t;try{t=Symbol.iterator?Symbol.iterator:"Symbol(Symbol.iterator)"}catch(s){t="Symbol(Symbol.iterator)"}var e=Object.prototype.toString,n=function(t){return"function"==typeof t||"[object Function]"===e.call(t)},i=Math.pow(2,53)-1,r=function(t){var e=function(t){var e=Number(t);return isNaN(e)?0:0!==e&&isFinite(e)?(e>0?1:-1)*Math.floor(Math.abs(e)):e}(t);return Math.min(Math.max(e,0),i)};return function(e){var i=Object(e),s=n(i[t]);if(null==e&&!s)throw new TypeError("Array.from requires an array-like object or iterator - not null or undefined");var a,o=arguments.length>1?arguments[1]:void 0;if(void 0!==o){if(!n(o))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(a=arguments[2])}var c=r(i.length);return function(t,e,n,i,r,s){for(var a=0;a<n||r;){var o=i(a),c=r?o.value:o;if(r&&o.done)return e;e[a]=s?void 0===t?s(c,a):s.call(t,c,a):c,a+=1}if(r)throw new TypeError("Array.from: provided arrayLike or iterator has length more then 2 ** 52 - 1");return e.length=n,e}(a,n(this)?Object(new this(c)):new Array(c),c,function(e,n){var i=e&&n[t]();return function(t){return e?i.next():n[t]}}(s,i),s,o)}}()),"function"!=typeof Array.prototype.findIndex&&(Array.prototype.findIndex=function(t,e){if(null===this)throw new TypeError("Cannot read property 'findIndex' of null");if("function"!=typeof t)throw new TypeError(typeof t+" is not a function");for(var n=this.length,i=-1,r=0;r<n;r++)if(t.call(e,this[r],r,this)){i=r;break}return i}),String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(t,e){var n=e>0?0|e:0;return this.substring(n,n+t.length)===t}}),String.prototype.padStart||Object.defineProperty(String.prototype,"padStart",{configurable:!0,writable:!0,value:function(t,e){return t>>=0,e=String(void 0!==e?e:" "),this.length>t?String(this):((t-=this.length)>e.length&&(e+=e.repeat(t/e.length)),e.slice(0,t)+String(this))}}),[Element.prototype,Document.prototype,DocumentFragment.prototype].forEach((function(t){t.hasOwnProperty("prepend")||Object.defineProperty(t,"prepend",{configurable:!0,enumerable:!0,writable:!0,value:function(){var t=Array.prototype.slice.call(arguments),e=document.createDocumentFragment();t.forEach((function(t){var n=t instanceof Node;e.appendChild(n?t:document.createTextNode(String(t)))})),this.insertBefore(e,this.firstChild)}})})),"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(t,e){"use strict";if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(t),i=1;i<arguments.length;i++){var r=arguments[i];if(null!=r)for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])}return n},writable:!0,configurable:!0}),function(t){var e=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};function n(){this._events={},this._conf&&i.call(this,this._conf)}function i(t){t&&(this._conf=t,t.delimiter&&(this.delimiter=t.delimiter),t.maxListeners&&(this._events.maxListeners=t.maxListeners),t.wildcard&&(this.wildcard=t.wildcard),t.newListener&&(this.newListener=t.newListener),this.wildcard&&(this.listenerTree={}))}function r(t){this._events={},this.newListener=!1,i.call(this,t)}function s(t,e,n,i){if(!n)return[];var r,a,o,c,l,u,d,h=[],p=e.length,f=e[i],m=e[i+1];if(i===p&&n._listeners){if("function"==typeof n._listeners)return t&&t.push(n._listeners),[n];for(r=0,a=n._listeners.length;r<a;r++)t&&t.push(n._listeners[r]);return[n]}if("*"===f||"**"===f||n[f]){if("*"===f){for(o in n)"_listeners"!==o&&n.hasOwnProperty(o)&&(h=h.concat(s(t,e,n[o],i+1)));return h}if("**"===f){for(o in(d=i+1===p||i+2===p&&"*"===m)&&n._listeners&&(h=h.concat(s(t,e,n,p))),n)"_listeners"!==o&&n.hasOwnProperty(o)&&("*"===o||"**"===o?(n[o]._listeners&&!d&&(h=h.concat(s(t,e,n[o],p))),h=h.concat(s(t,e,n[o],i))):h=o===m?h.concat(s(t,e,n[o],i+2)):h.concat(s(t,e,n[o],i)));return h}h=h.concat(s(t,e,n[f],i+1))}if((c=n["*"])&&s(t,e,c,i+1),l=n["**"])if(i<p)for(o in l._listeners&&s(t,e,l,p),l)"_listeners"!==o&&l.hasOwnProperty(o)&&(o===m?s(t,e,l[o],i+2):o===f?s(t,e,l[o],i+1):((u={})[o]=l[o],s(t,e,{"**":u},i+1)));else l._listeners?s(t,e,l,p):l["*"]&&l["*"]._listeners&&s(t,e,l["*"],p);return h}function a(t,n){for(var i=0,r=(t="string"==typeof t?t.split(this.delimiter):t.slice()).length;i+1<r;i++)if("**"===t[i]&&"**"===t[i+1])return;for(var s=this.listenerTree,a=t.shift();a;){if(s[a]||(s[a]={}),s=s[a],0===t.length){if(s._listeners){if("function"==typeof s._listeners)s._listeners=[s._listeners,n];else if(e(s._listeners)&&(s._listeners.push(n),!s._listeners.warned)){var o=10;void 0!==this._events.maxListeners&&(o=this._events.maxListeners),o>0&&s._listeners.length>o&&(s._listeners.warned=!0)}}else s._listeners=n;return!0}a=t.shift()}return!0}r.prototype.delimiter=".",r.prototype.setMaxListeners=function(t){this._events||n.call(this),this._events.maxListeners=t,this._conf||(this._conf={}),this._conf.maxListeners=t},r.prototype.event="",r.prototype.once=function(t,e){return this.many(t,1,e),this},r.prototype.many=function(t,e,n){var i=this;if("function"!=typeof n)throw new Error("many only accepts instances of Function");function r(){0==--e&&i.off(t,r),n.apply(this,arguments)}return r._origin=n,this.on(t,r),i},r.prototype.emit=function(){this._events||n.call(this);var t,e=arguments[0];if("newListener"===e&&!this.newListener&&!this._events.newListener)return!1;if(this._all){for(var i=arguments.length,r=new Array(i-1),a=1;a<i;a++)r[a-1]=arguments[a];for(a=0,i=this._all.length;a<i;a++)this.event=e,this._all[a].apply(this,r)}if("error"===e&&!(this._all||this._events.error||this.wildcard&&this.listenerTree.error))throw arguments[1]instanceof Error?arguments[1]:new Error("Uncaught, unspecified 'error' event.");if(this.wildcard){t=[];var o="string"==typeof e?e.split(this.delimiter):e.slice();s.call(this,t,o,this.listenerTree,0)}else t=this._events[e];if("function"==typeof t){if(this.event=e,1===arguments.length)t.call(this);else if(arguments.length>1)switch(arguments.length){case 2:t.call(this,arguments[1]);break;case 3:t.call(this,arguments[1],arguments[2]);break;default:for(i=arguments.length,r=new Array(i-1),a=1;a<i;a++)r[a-1]=arguments[a];t.apply(this,r)}return!0}if(t){for(i=arguments.length,r=new Array(i-1),a=1;a<i;a++)r[a-1]=arguments[a];var c=t.slice();for(a=0,i=c.length;a<i;a++)this.event=e,c[a].apply(this,r);return c.length>0||!!this._all}return!!this._all},r.prototype.on=function(t,i){if("function"==typeof t)return this.onAny(t),this;if("function"!=typeof i)throw new Error("on only accepts instances of Function");if(this._events||n.call(this),this.emit("newListener",t,i),this.wildcard)return a.call(this,t,i),this;if(this._events[t]){if("function"==typeof this._events[t])this._events[t]=[this._events[t],i];else if(e(this._events[t])&&(this._events[t].push(i),!this._events[t].warned)){var r=10;void 0!==this._events.maxListeners&&(r=this._events.maxListeners),r>0&&this._events[t].length>r&&(this._events[t].warned=!0)}}else this._events[t]=i;return this},r.prototype.onAny=function(t){if("function"!=typeof t)throw new Error("onAny only accepts instances of Function");return this._all||(this._all=[]),this._all.push(t),this},r.prototype.addListener=r.prototype.on,r.prototype.off=function(t,n){if("function"!=typeof n)throw new Error("removeListener only takes instances of Function");var i,r=[];if(this.wildcard){var a="string"==typeof t?t.split(this.delimiter):t.slice();r=s.call(this,null,a,this.listenerTree,0)}else{if(!this._events[t])return this;i=this._events[t],r.push({_listeners:i})}for(var o=0;o<r.length;o++){var c=r[o];if(i=c._listeners,e(i)){for(var l=-1,u=0,d=i.length;u<d;u++)if(i[u]===n||i[u].listener&&i[u].listener===n||i[u]._origin&&i[u]._origin===n){l=u;break}if(l<0)continue;return this.wildcard?c._listeners.splice(l,1):this._events[t].splice(l,1),0===i.length&&(this.wildcard?delete c._listeners:delete this._events[t]),this}(i===n||i.listener&&i.listener===n||i._origin&&i._origin===n)&&(this.wildcard?delete c._listeners:delete this._events[t])}return this},r.prototype.offAny=function(t){var e,n=0,i=0;if(t&&this._all&&this._all.length>0){for(n=0,i=(e=this._all).length;n<i;n++)if(t===e[n])return e.splice(n,1),this}else this._all=[];return this},r.prototype.removeListener=r.prototype.off,r.prototype.removeAllListeners=function(t){if(0===arguments.length)return!this._events||n.call(this),this;if(this.wildcard)for(var e="string"==typeof t?t.split(this.delimiter):t.slice(),i=s.call(this,null,e,this.listenerTree,0),r=0;r<i.length;r++){i[r]._listeners=null}else{if(!this._events[t])return this;this._events[t]=null}return this},r.prototype.listeners=function(t){if(this.wildcard){var i=[],r="string"==typeof t?t.split(this.delimiter):t.slice();return s.call(this,i,r,this.listenerTree,0),i}return this._events||n.call(this),this._events[t]||(this._events[t]=[]),e(this._events[t])||(this._events[t]=[this._events[t]]),this._events[t]},r.prototype.listenersAny=function(){return this._all?this._all:[]},"function"==typeof define&&define.amd?define((function(){return r})):"object"==typeof exports?exports.EventEmitter2=r:window.EventEmitter2=r}(),window.Bootstrap={BACKDATA_PARAM:"sexp",Data:{},errorArguments:[],unhandledRejectionArguments:[]},function(t){window.onerror=function(){t.errorArguments.push(arguments)},t.handleUnhandledRejection=function(){t.unhandledRejectionArguments.push(arguments)},window.addEventListener("unhandledrejection",t.handleUnhandledRejection)}(Bootstrap),function(t){t.getAllHistoryState=function(){for(var t,e={},n=/\+/g,i=/([^&=]+)=?([^&]*)/g,r=(window.location.search+window.location.hash).substring(1),s=function(t){try{t=decodeURIComponent(t.replace(n," "))}catch(e){}return t};t=i.exec(r);)e[s(t[1])]=s(t[2]);return e},t.getHistoryState=function(e){return t.getAllHistoryState()[e]},t.isWindowsPhone=function(t){return t=t||navigator.userAgent.toLowerCase(),!!/windows phone/.test(t)},t.isOSX=function(t){return t=t||navigator.userAgent.toLowerCase(),!!/mac os x [0-9]/.test(t)},t.isIPadOS=function(e){return e=e||navigator.userAgent.toLowerCase(),t.isOSX(e)&&navigator.maxTouchPoints},t.isIPad=function(e){return e=e||navigator.userAgent.toLowerCase(),!(!t.isIPadOS(e)&&!/ipad/.test(e))},t.isIPhone=function(e){return e=e||navigator.userAgent.toLowerCase(),!(t.isWindowsPhone(e)||!/iphone/.test(e))},t.isIDevice=function(e){return e=e||navigator.userAgent.toLowerCase(),t.isIPad(e)||t.isIPhone(e)||/\Wios\W/.test(e)},t.isIOS8p=function(e){return e=e||navigator.userAgent.toLowerCase(),!(!t.isIDevice(e)||!t.isIPadOS(e)&&!/os (8|9|[1-9][0-9])|os 10_10/.test(e))},t.isFirefox=function(t){return t=t||navigator.userAgent.toLowerCase(),!!/firefox|fxios/.test(t)},t.isBrave=function(e){return e=e||navigator.userAgent.toLowerCase(),!!navigator.brave&&"function"==typeof navigator.brave.isBrave||t.isIOS8p(e)&&t.isFirefox(e)&&/(\d{2}\.){3}\d{2}/.test(e)||/brave chrome/.test(e)},t.isIE=function(t){return t=t||navigator.userAgent.toLowerCase(),!!/msie|trident/.test(t)},t.isDDGTest=function(t){return t=t||navigator.userAgent.toLowerCase(),!!/ddgtest/.test(t)},t.isOnion=function(t){return!!(t=t||window.location.host).match(/\.onion$/i)},t.isDDGApp=function(t,e){return t=t||navigator.userAgent.toLowerCase(),e=e||window.location.search,!!navigator.duckduckgo&&"ios"===navigator.duckduckgo.platform||!(!e||!e.match(/(\&|\?)t\=(ddg_ios|ddg_android)/))||/DuckDuckGo\/[0-9]/i.test(t)},t.isChrome=function(e){e=e||navigator.userAgent.toLowerCase();var n=!!/edge\//.test(e);return!(!!(!/chrome(?!frame)|crios/.test(e)||t.isIE(e)||n)||/opr\/[0-9][0-9]?/.test(e))},t.isEnglish=function(){return window.locale&&"en"===window.locale.substring(0,2)},t.hostRegion=(window._bootstrapBackendData||{}).hostRegion,t.isMobile=(window._bootstrapBackendData||{}).isMobile,t.isDesktop=(window._bootstrapBackendData||{}).isDesktop,t.bingMarket=(window._bootstrapBackendData||{}).bingMarket,t.isExtensionInstalled=function(){return"duckduckgo"in navigator&&"extension"===navigator.duckduckgo.platform},t.isExtensionInstalledLegacy=function(e,n){var i;if(e=e||navigator.userAgent.toLowerCase(),n=n||window.location.search,document.body){var r=document.createElement("div");r.className="ddg-extension-check ddg-extension-hide",document.body.appendChild(r),i="none"===window.getComputedStyle(r).display,document.body.removeChild(r)}else document.documentElement.classList.add("ddg-extension-check","ddg-extension-hide"),i="none"===window.getComputedStyle(document.documentElement).display,document.documentElement.classList.remove("ddg-extension-check","ddg-extension-hide");return i&&!t.isDDGApp(e,n)},t.PRODUCTS_META_IMAGE_VERTICAL_PRODUCT_ADS_EXPERIMENT={region:{"us-en":!0,"uk-en":!0},country:{US:!0,GB:!0}},t.DEFERRED_VERTICALS=["images","videos","news","maps_expanded","products","shopping"],t._region=(window._bootstrapBackendData||{})._region,t.getRegion=function(){if(null!=window.kl)return window.kl;if(t._region)return t._region;for(var e=document.cookie.split(";"),n=0;n<e.length;n++){var i=e[n].split("=");if(2===i.length){var r=i[0].trim(),s=i[1].trim();if("l"===r&&!/<|>|\//g.test(s))return s}}return""},t.isProductAdsMarket=function(){return!!(window._bootstrapBackendData||{}).showProductAds},t.isAutoAdsMarket=function(){return!!(window._bootstrapBackendData||{}).showAutoAds},t.isToursActivitiesMarket=function(){return!!(window._bootstrapBackendData||{}).showTourAds},t.isCreditCardsMarket=function(){return!!(window._bootstrapBackendData||{}).showCreditCardAds},t.isImageVerticalProductAdsMarket=function(e){var n=t.getRegion(),i=n&&"wt-wt"!==n;return!(""!==n&&"wt-wt"!==n||!t.PRODUCTS_META_IMAGE_VERTICAL_PRODUCT_ADS_EXPERIMENT.country[window.ct])||!(!i||!t.PRODUCTS_META_IMAGE_VERTICAL_PRODUCT_ADS_EXPERIMENT.region[n])},t.validateRequery=function(t){return["images","videos","news","maps","shopping"].indexOf(t)<0?null:t},t.TIMEOUT_DEEP_REQUEST=4e3,t.TIMEOUT_PRELOADED_DEEP_REQUEST=4750,t.shouldDeferDeep=function(e){var n=t.getAllHistoryState(),i=n.ia||!1,r=e?e(n.iar):n.iar,s=n.iax||!1,a=n.iaxm||!1,o=1===window.shfl;return"maps"===a||!!r&&"web"!==r||!!i&&(i===r&&"news"===i||i===s&&"news"!==s)&&t.DEFERRED_VERTICALS.indexOf(i)>-1&&!("shopping"===i&&i===s&&!o)},t.addFrontendQsToBackendDeepUrl=function(e,n,i){var r=(i=i||{}).skipLinksService,s=n.addExperimentParameters(e),a=window._bootstrapBackendData||{};return!/&ext=/.test(e)&&a.hasExtension&&(s+="&ext=1"),!/&bpa=/.test(e)&&a.showProductAds&&(s+="&bpa=1"),!/&baa=/.test(e)&&a.showAutoAds&&(s+="&baa=1"),/&wrap=/.test(e)||(s+="&wrap=1"),r?s:t.getLinksURL(s)},t.getLinksURL=function(e,n){n=n||window.location.host;return/^staging\./.test(n)?"//staging-links.duckduckgo.com"+e:window.testTrafficType&&window.baseLinkUrl&&"testing"==window.baseLinkEnvName?"//"+window.baseLinkUrl+e:t.isDev?"//"+n+"/links"+e:"//links.duckduckgo.com"+e}}(Bootstrap),function(t){function e(t){return((t||{}).state||{}).backData||{}}t.BackData=function(t){this._history=t||window.history,this._data=e(this._history),this.ready=!1,this.isLoadedFromBfCache=null,this.timeLoadedFromBfCache=null,this._boundHandlePageShow=this._handlePageShow.bind(this),window.addEventListener("pageshow",this._boundHandlePageShow)},t.BackData.prototype=Object.assign({},EventEmitter2.prototype,{destroy:function(){window.removeEventListener("pageshow",this._boundHandlePageShow),this.removeAllListeners()},_handlePageShow:function(t){this._data=e(this._history),t&&t.persisted?(this.isLoadedFromBfCache=!0,this.timeLoadedFromBfCache=Date.now()):(this.isLoadedFromBfCache=!1,this.timeLoadedFromBfCache=null),this._history&&this._history.replaceState&&this._history.state&&this._history.replaceState(Object.assign({},this._history.state,{backData:{isSerpReturn:!0}}),""),this.ready=!0,this.emit("ready",this.ready)},set:function(t,n,i){n&&n.timestamp&&delete(n=Object.assign({},n)).timestamp,i=Object.assign({isBounceSignal:!0},i),this._history&&this._history.replaceState&&this._history.replaceState(Object.assign({},this._history.state,{backData:{id:t,data:n,isSerpReturn:e(this._history).isSerpReturn,isBounceSignal:!!i.isBounceSignal}}),"")},getId:function(){return this._data.id},getData:function(){return this._data.data||{}},isBounceBack:function(){return!!this._data.isBounceSignal},isSerpReturn:function(){return!!this._data.isSerpReturn}})}(Bootstrap),Bootstrap.Data.SearchExperimentsDefinitions={biaexp:{allocation:1,assignment:"backend",variants:["b"],persistent:!1,services:["deep"]},msvrtexp:{allocation:1,assignment:"backend",variants:["b"],persistent:!1,services:["deep"]},ama5exp:{allocation:1,assignment:"frontend",variants:["b"],persistent:"bounce",services:["products"]},rspexp2:{allocation:0,assignment:"backend",variants:["a","b","e"],persistent:!1,services:["deep"]},videxp:{allocation:.05,assignment:"backend",variants:["a"],persistent:!1,services:["deep"]},uxexp:{allocation:0,assignment:"frontend",variants:["x","y","z"],persistent:"bounce"},tqcls:{allocation:0,assignment:"backend",variants:["a","b","c"],persistent:!1,services:["deep","products"]},qfcls:{allocation:0,assignment:"backend",variants:["a","b"],persistent:!1,services:["deep","products"]},eclsexp:{allocation:1,assignment:"backend",variants:["a","b"],persistent:!1,services:["deep","products"]},useclsexp:{allocation:.25,assignment:"backend",variants:["a","b"],persistent:!1,services:["deep","products"]},eslexp:{exclusionGroup:"ads",allocation:[0,0],assignment:"backend",variants:["a","b"],persistent:!1,services:["deep"]},btaaexp:{allocation:1,assignment:"backend",variants:["a","b"],persistent:!1,services:["deep"]},bccaexp:{allocation:1,assignment:"backend",variants:["a","b"],persistent:!1,services:["deep"]},"3adexp":{exclusionGroup:"ads",allocation:[.4,.5],assignment:"backend",variants:["a","b","c","d"],persistent:!1,services:["deep"]},autoadexp:{allocation:1,assignment:"backend",variants:["a","b"],persistent:!1,services:["deep"]},related_click:{allocation:0,assignment:"backend",variants:["a","b"],persistent:!1,services:["deep","products"]},related_requery:{allocation:0,assignment:"backend",variants:["a","b"],persistent:!1,services:["deep","products"]},related_done:{allocation:0,assignment:"backend",variants:["a","b"],persistent:!1,services:["deep","products"]},related:{allocation:0,assignment:"backend",variants:["a","b"],persistent:!1,services:["deep","products"]},msnexp:{allocation:0,assignment:"backend",variants:["a","b","c","d"],persistent:!1,services:["deep","news"]},dexp2:{allocation:1,assignment:"backend",variants:["f"],persistent:!1},pctaexp:{allocation:0,assignment:"frontend",variants:["b"],persistent:"bounce"},infoboxexp:{allocation:0,assignment:"backend",variants:["a","b","c","d","e","f","g","h","i","j"],services:["deep"],persistent:!1},litexp:{allocation:1,assignment:"backend",variants:["a","b","c"],services:["deep"],persistent:!1},duckassistexp:{allocation:1,assignment:"frontend",variants:["a","c"],persistent:!1},svpadexp:{allocation:.5,assignment:"backend",variants:["a","b"],persistent:!1,services:["products"]},svpamexp:{allocation:.5,assignment:"backend",variants:["a","b"],persistent:!1,services:["products"]},chrome_ntp_exp:{allocation:1,assignment:"frontend",variants:["b"],persistent:!1},cast_exp:{assignment:"backend",persistent:!1,variants:["a"],allocation:1,services:["deep"]},typeexp:{assignment:"backend",persistent:!1,variants:["b"],allocation:1,services:["deep"]},wiki_mainline_exp:{assignment:"frontend",persistent:!1,allocation:1,variants:["b"]},wiki_mainline_exp_rel:{assignment:"frontend",persistent:!1,allocation:1,variants:["a","b"]},animated_download_exp:{assignment:"frontend",persistent:!1,allocation:1,variants:["d","e"]},duckchat_alpha:{assignment:"frontend",persistent:!1,allocation:0,variants:["b"]},privacy_reminder_exp:{assignment:"frontend",persistent:!1,allocation:1,variants:["wa","wb"]}},window.Bootstrap.SearchExperimentsData=[],function(t){var e={deep:["d.js","t.js"],local:["local.js","spice/maps/places","spice/maps/maps"],news:["news.js","spice/news"],images:["i.js","spice/images"],videos:["v.js","spice/videos"],products:["m.js","spice/amazon"],embed:["f.js"],nlp:["a.js"]},n=/^\/?((?:d|t|local|news|i|v|m|f|a).js)|\/js\/(spice\/.*)\//;function i(n,r,s,a){if(this._backData=a,this._experiments=Object.keys(n).sort().map((function(e){var i=n[e],s=!(t.isDDGTest()||"backend"!==i.assignment||!r||!(e in r));return Object.assign({},i,{key:e,assigned:s,active:!!s&&r[e].active,assignedVariant:s?r[e].assignedVariant:null})})),this._byKey=this._experiments.reduce((function(t,e){return t[e.key]=e,t}),{}),this._bounceDataAtInstantiation={},this._backData.isBounceBack()){var o=this._backData.getData();if(o){var c=o[i.BACKDATA_PARAM];c&&Object.keys(c).forEach((function(t){n[t]&&"bounce"===n[t].persistent&&"string"==typeof c[t]&&(this._bounceDataAtInstantiation[t]=c[t])}),this)}}this._urlDataAtInstantiation={};var l=t.getAllHistoryState();Object.keys(l).forEach((function(t){t in n&&"string"==typeof l[t]&&(this._urlDataAtInstantiation[t]=l[t])}),this),this._restoredExclusionGroups={},this._serviceForUrlPart=Object.keys(e).reduce((function(t,n){return e[n].forEach((function(e){t[e]=n})),t}),{}),this._eclusionGroupsRandomNumbers=this._experiments.reduce((function(t,e){return"exclusionGroup"in e&&!(e.exclusionGroup in t)&&"frontend"===e.assignment&&(t[e.exclusionGroup]=Math.random()),t}),s||{}),this._activeExperiments=null,this._pixelParams=null}i.BACKDATA_PARAM=t.BACKDATA_PARAM||"sexp",i.prototype.assign=function(e,n){if(t.isDDGTest())return!1;var i=this._byKey[e];if(!i)return!1;if("frontend"!==i.assignment)return!1;if(i.assigned)return!1;if(this._clearCache(),i.assigned=!0,n&&n.filter&&!n.filter.call(this))return!1;if("exclusionGroup"in i&&i.exclusionGroup&&!this._restoredExclusionGroups[i.exclusionGroup]){this._restoredExclusionGroups[i.exclusionGroup]=!0;var r=i.exclusionGroup,s=this._experiments.filter((function(t){return"exclusionGroup"in t&&t.exclusionGroup===r}));if(!(r in this._eclusionGroupsRandomNumbers))return s.forEach((function(t){t.allocation=[0,0]})),!1;var a=s.some((function(t){return"backend"===t.assignment}));if(a){var o=s.some((function(t){return t.persistent}));if(o)return s.forEach((function(t){t.allocation=[0,0]})),!1}var c=s.find((function(t){return t.key in this._urlDataAtInstantiation}),this);c||(c=s.find((function(t){return null!==this._getPersistedVariant(t)}),this)),c&&s.forEach((function(t){t!==c&&(t.allocation=[0,0])}))}var l=this._urlDataAtInstantiation[e];if(l)i.variants.includes(l)&&(i.assignedVariant=l,n&&n.deactivated||(i.active=!0));else{if("number"==typeof i.allocation&&i.allocation<=0||Array.isArray(i.allocation)&&i.allocation[0]<=0&&i.allocation[1]<=0)return!1;var u=i.persistent?this._getPersistedVariant(i):null;if(this._backData.isBounceBack()&&null===u&&"bounce"===i.persistent)return!1;if(null===u){if("exclusionGroup"in i||"number"!=typeof i.allocation)"exclusionGroup"in i&&Array.isArray(i.allocation)&&this._eclusionGroupsRandomNumbers[i.exclusionGroup]>=i.allocation[0]&&(this._eclusionGroupsRandomNumbers[i.exclusionGroup]<i.allocation[1]||1===i.allocation[1]&&this._eclusionGroupsRandomNumbers[i.exclusionGroup]===i.allocation[1])&&(u=i.variants[Math.floor(i.variants.length*Math.random())]);else{var d=Math.random();if(d>i.allocation)return!1;var h=i.allocation/i.variants.length,p=Math.floor(d/h);u=i.variants[p]}if(n&&n.postEnrollment&&null!==u){var f=n.postEnrollment.call(this,u,i.variants);i.variants.includes(f),u=f}}null!==u&&(i.assignedVariant=u,n&&n.deactivated||(i.active=!0))}return i.assigned},i.prototype.activate=function(t){var e=this._byKey[t];e&&null!==e.assignedVariant&&(this._clearCache(),e.active=!0)},i.prototype.deactivate=function(t){var e=this._byKey[t];e&&null!==e.assignedVariant&&(this._clearCache(),e.active=!1)},i.prototype.isActive=function(t){var e=this._byKey[t];return!(!e||!e.active)},i.prototype.getActiveVariant=function(t){var e=this._byKey[t];if(e)return e.active?e.assignedVariant:null},i.prototype.getExperimentGroup=function(t){return this.getActiveVariant(t)},i.prototype.getAssignedVariant=function(t){var e=this._byKey[t];if(e)return e.assignedVariant},i.prototype.addExperimentParameters=function(t){var e=t.match(n),i=e&&(e[1]||e[2]);if(!i)return t;var r=this._serviceForUrlPart[i];if(!r)return t;var s=[];if(this._experiments.forEach((function(t){t.services&&t.services.includes(r)&&s.push(t)})),!s.length)return t;var a=s.filter((function(e){if("deep"===r){var n=new RegExp("(\\?|&)"+e.key+"=");return e.active&&!n.test(t)}return e.active})).map((function(t){return t.key+"="+t.assignedVariant}));if(a.length){var o=-1===t.indexOf("?")?"?":"&";t+=o+a.join("&")}return t},i.prototype.getPixelParameters=function(){return null!==this._pixelParams?this._pixelParams:this._pixelParams=this._getActiveExperiments().map((function(t){return t.key+"="+t.assignedVariant})).join("&")},i.prototype.getActiveAssignments=function(){return this._getActiveExperiments().reduce((function(t,e){return null!==e.assignedVariant&&(t[e.key]=e.assignedVariant),t}),{})},i.prototype.hasActiveExperiments=function(){return!!this._getActiveExperiments().length},i.prototype._getActiveExperiments=function(){return null!==this._activeExperiments?this._activeExperiments:this._activeExperiments=this._experiments.filter((function(t){return t.active}))},i.prototype._clearCache=function(){this._pixelParams=null,this._activeExperiments=null},i.prototype._getPersistedVariant=function(t){return"bounce"===t.persistent&&t.key in this._bounceDataAtInstantiation?this._bounceDataAtInstantiation[t.key]:null},t.SearchExperiments=i}(Bootstrap),function(t){t.DeepPreloader=function(){this.status="idle",this.afterTimeoutStatus="idle",this.startFetchTime=null,this.endFetchTime=null,this._onLoad=null,this._onError=null,this._onTimeout=null,this._onLoadAfterTimeout=null,this._onErrorAfterTimeout=null},t.DeepPreloader.prototype.fetch=function(t,e){this.startFetchTime=Date.now(),this.endFetchTime=null,this.status="pending",this.afterTimeoutStatus="pending";var n=document.createElement("script"),i=document.createElement("link");i.rel="preload",i.as="script",i.href=t,document.head.appendChild(i);var r=function(){this._onLoad=null,this._onError=null,this._onTimeout=null,this._onLoadAfterTimeout=null,this._onErrorAfterTimeout=null,n&&(n.onload=null,n.onerror=null,document.head.removeChild(n),n=null),i&&(document.head.removeChild(i),i=null)}.bind(this);if(e>0)var s=setTimeout(function(){this.status="timeout",this._onTimeout&&this._onTimeout(),this._onLoad=null,this._onError=null,this._onTimeout=null}.bind(this),e);n.onload=function(){clearTimeout(s),this.endFetchTime=Date.now();var t=this.endFetchTime-this.startFetchTime;"timeout"===this.status?(this.afterTimeoutStatus="success",this._onLoadAfterTimeout&&this._onLoadAfterTimeout(t)):(this.status="success",this._onLoad&&this._onLoad(t)),r()}.bind(this),n.onerror=function(){clearTimeout(s),this.endFetchTime=Date.now();var t=this.endFetchTime-this.startFetchTime;"timeout"===this.status?(this.afterTimeoutStatus="error",this._onErrorAfterTimeout&&this._onErrorAfterTimeout(t)):(this.status="error",this._onError&&this._onError(t)),r()}.bind(this),n.src=t,document.head.appendChild(n)},t.DeepPreloader.prototype.addEventListener=function(t,e){switch(t){case"load":this._onLoad=e;break;case"error":this._onError=e;break;case"timeout":this._onTimeout=e;break;case"loadAfterTimeout":this._onLoadAfterTimeout=e;break;case"errorAfterTimeout":this._onErrorAfterTimeout=e}}}(Bootstrap),function(t){t.backData=new t.BackData(window.history);var e=t.searchExperiments=new t.SearchExperiments(t.Data.SearchExperimentsDefinitions,window.backendExperimentAssignments||{},window.backendRandomNumbers||{},t.backData);e.assign("ama5exp",{filter:function(){return"US"===window.ct||"DE"===window.ct}}),e.assign("uxexp"),e.assign("mxmexp"),e.assign("wiki_mainline_exp"),e.assign("duckchat_alpha"),e.assign("privacy_reminder_exp",{filter:function(){return t&&t.isDesktop&&t.isEnglish()},postEnrollment:function(){var t=window.location.search||"";if(t){var e=t.substring(1).split("&").find((function(t){return"atb"===t.substring(0,3)}));if(e){var n=e.slice(-2);if(-1!==["wa","wb"].indexOf(n))return n}}}}),window.serpStoreDispatchQueue=[],t.safeSerpStoreDispatch=function(t){if(window.serpStore&&window.stores&&window.stores[t.actionCreatorFnName]){var e=window.stores[t.actionCreatorFnName].apply(null,t.params);window.serpStore.dispatch(e)}else window.serpStoreDispatchQueue.push({actionCreatorFnName:t.actionCreatorFnName,params:t.params})}}(Bootstrap);