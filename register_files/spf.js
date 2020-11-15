(function(){/*

SPF
(c) 2012-2017 Google Inc.
https://ajax.googleapis.com/ajax/libs/spf/2.4.0/LICENSE
*/
var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof l&&l];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var ca=ba(this);
function da(a,b){if(b)a:{var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}function ea(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
da("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}function c(e,f){this.a=e;aa(this,"description",{configurable:!0,writable:!0,value:f})}if(a)return a;c.prototype.toString=function(){return this.a};var d=0;return b});
da("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ca[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&aa(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(ea(this))}})}return a});function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function ha(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};e[Symbol.iterator]=function(){return e};return e}da("Array.prototype.keys",function(a){return a?a:function(){return ha(this,function(b){return b})}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ia=this||self;function ja(a,b){function c(){}c.prototype=b.prototype;a.U=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.T=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}function ka(a){return a};function la(a){if(Error.captureStackTrace)Error.captureStackTrace(this,la);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}ja(la,Error);la.prototype.name="CustomError";function ma(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");la.call(this,c+a[d])}ja(ma,la);ma.prototype.name="AssertionError";function na(a,b){throw new ma("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var oa;function pa(a,b,c){this.a=c===qa?a:""}pa.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};function ra(a){if(a instanceof pa&&a.constructor===pa)return a.a;var b=typeof a;na("expected object of type SafeHtml, got '"+a+"' of type "+("object"!=b?b:a?Array.isArray(a)?"array":b:"null"));return"type_error:SafeHtml"}var qa={},sa=new pa(ia.trustedTypes&&ia.trustedTypes.emptyHTML||"",0,qa);var ta={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},va=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){if("undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);if(!a.firstChild)return!1;b=a.firstChild.firstChild;a.innerHTML=ra(sa);return!b.parentElement});
function wa(a,b){if(a.tagName&&ta[a.tagName.toUpperCase()])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+a.tagName+".");if(va())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=ra(b)};function xa(a){if(void 0===oa){var b=null;var c=ia.trustedTypes;if(c&&c.createPolicy){try{b=c.createPolicy("goog#html",{createHTML:ka,createScript:ka,createScriptURL:ka})}catch(d){ia.console&&ia.console.error(d.message)}oa=b}else oa=b}a=(b=oa)?b.createHTML(a):a;return new pa(a,null,qa)};function n(a,b,c){var d=Array.prototype.slice.call(arguments,2);return function(){var e=d.slice();e.push.apply(e,arguments);return a.apply(b,e)}}function ya(a,b){if(a){var c=Array.prototype.slice.call(arguments,1);try{return a.apply(null,c)}catch(d){return d}}}function p(a,b){if(document.createEvent){var c=document.createEvent("CustomEvent");c.initCustomEvent(a,!0,!0,b);return document.dispatchEvent(c)}return!0}
var q=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function za(){};function r(a,b){if(a.forEach)a.forEach(b,void 0);else for(var c=0,d=a.length;c<d;c++)c in a&&b.call(void 0,a[c],c,a)}function Aa(a,b){if(a.every)return a.every(b,void 0);for(var c=0,d=a.length;c<d;c++)if(c in a&&!b.call(void 0,a[c],c,a))return!1;return!0}function Ba(a,b){if(a.some)return a.some(b,void 0);for(var c=0,d=a.length;c<d;c++)if(c in a&&b.call(void 0,a[c],c,a))return!0;return!1}
function Ca(a,b){if(a.filter)return a.filter(b,void 0);var c=[];r(a,function(d,e,f){b.call(void 0,d,e,f)&&c.push(d)});return c}function Da(a,b){if(a.map)return a.map(b,void 0);var c=[];c.length=a.length;r(a,function(d,e,f){c[e]=b.call(void 0,d,e,f)});return c}function v(a){return"[object Array]"==Object.prototype.toString.call(a)?a:[a]};function w(a,b){return x[a]=b}var x=window._spf_state||{};window._spf_state=x;function y(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}function Ea(a){return"[object String]"==Object.prototype.toString.call(a)}var Fa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^\s+|\s+$/g,"")};function z(a,b){a=a.split(b);var c=1==a.length;return[a[0],c?"":b,c?"":a.slice(1).join(b)]}function Ga(){return"spfName".replace(/([A-Z])/g,"-$1").toLowerCase()};function Ha(a){a.data&&Ea(a.data)&&0==a.data.lastIndexOf("spf:",0)&&Ia(a.data.substring(4))}function Ia(a){var b=Ja[a];b&&(delete Ja[a],b())}function Ka(a){window.addEventListener?window.addEventListener("message",a,!1):window.attachEvent&&window.attachEvent("onmessage",a)}function La(a){window.removeEventListener?window.removeEventListener("message",a,!1):window.detachEvent&&window.detachEvent("onmessage",a)}
var Ma=function(){function a(){b=!1}if(!window.postMessage)return!1;var b=!0;Ka(a);window.postMessage("","*");La(a);return b}(),Ja={};"async-defers"in x||w("async-defers",Ja);Ja=x["async-defers"];Ma&&("async-listener"in x&&La(x["async-listener"]),Ka(Ha),w("async-listener",Ha));var Na={"animation-class":"spf-animate","animation-duration":425,"cache-lifetime":6E5,"cache-max":50,"cache-unified":!1,"link-class":"spf-link","nolink-class":"spf-nolink","navigate-limit":20,"navigate-lifetime":864E5,"reload-identifier":null,"request-timeout":0,"url-identifier":"?spf=__type__"},A={};"config"in x||w("config",A);A=x.config;function Oa(a){var b=D();a in b&&delete b[a]}function Pa(){var a=D();for(b in a)Qa(a[b])||delete a[b];a=D();var b=parseInt(A["cache-max"],10);b=isNaN(b)?Infinity:b;b=Object.keys(a).length-b;if(!(0>=b))for(var c=0;c<b;c++){var d=Infinity,e;for(e in a)if(a[e].count<d){var f=e;d=a[e].count}delete a[f]}}function Qa(a){if(!(a&&"data"in a))return!1;var b=a.life;b=isNaN(b)?Infinity:b;a=a.time;return q()-a<b}function Ra(a){var b=parseInt(x["cache-counter"],10)||0;b++;w("cache-counter",b);a.count=b}
function D(a){return!a&&"cache-storage"in x?x["cache-storage"]:w("cache-storage",a||{})};function Sa(a){return a.classList?a.classList:a.className&&a.className.match(/\S+/g)||[]}function Ta(a,b){if(b){if(a.classList)return a.classList.contains(b);a=Sa(a);return Ba(a,function(c){return c==b})}return!1}function E(a,b){b&&(a.classList?a.classList.add(b):Ta(a,b)||(a.className+=" "+b))}function F(a,b){if(b)if(a.classList)a.classList.remove(b);else{var c=Sa(a);c=Ca(c,function(d){return d!=b});a.className=c.join(" ")}};function Ua(a){var b=document.body;b.dataset?b.dataset.spfName=a:b.setAttribute("data-"+Ga(),a)};function Va(a,b){b=b||document;return b.querySelectorAll?b.querySelectorAll(a):[]}function Xa(a,b,c){for(;a;){if(b(a))return a;if(c&&a==c)break;a=a.parentNode}return null}function Ya(a,b,c){b=b||document;var d=b.createElement("iframe");d.id=a||"";d.src='javascript:""';d.style.display="none";c&&(d.onload=n(c,null,d));b.body.appendChild(d);return d};function Za(a,b,c){var d=null,e=window.history.state;if(e){d={};for(var f in e)d[f]=e[f]}if(b)for(f in d=d||{},b)d[f]=b[f];$a(!0,a,d,c)}function $a(a,b,c,d){if(b||c){b=b||window.location.href;c=c||{};var e=q();w("history-timestamp",e);c["spf-timestamp"]=e;if(a)ab(c,b);else if(a=bb().contentWindow.history.pushState,"function"==typeof a)a.call(window.history,c,"",b);else throw Error("history.pushState is not a function.");w("history-url",b);d&&(d=x["history-callback"])&&d(b,c)}}
function cb(a){var b=window.location.href;if(x["history-ignore-pop"])w("history-ignore-pop",!1);else if(a.state){a=a.state;var c=a["spf-timestamp"];b==x["history-url"]?(w("history-timestamp",c),ab(a,b)):(a["spf-back"]=c<parseInt(x["history-timestamp"],10),a["spf-current"]=x["history-url"],w("history-timestamp",c),w("history-url",b),(c=x["history-callback"])&&c(b,a))}}
function ab(a,b){var c=bb().contentWindow.history.replaceState;if("function"==typeof c)c.call(window.history,a,"",b);else throw Error("history.replaceState is not a function");}function bb(){var a=document.getElementById("history-iframe");a||(a=Ya("history-iframe"));return a};function db(a,b){a&&b&&(a in G||(G[a]=[]),G[a].push(b))}function eb(a,b){a in G&&b&&Aa(G[a],function(c,d,e){return c==b?(e[d]=null,!1):!0})}function fb(a){a in G&&r(G[a],function(b,c,d){d[c]=null;b&&b()})}var G={};"ps-s"in x||w("ps-s",G);G=x["ps-s"];function J(a,b,c){var d=K[a];return a&&b?(d||(d=K[a]={items:[],o:0,m:0,B:1}),d.items.push({D:b,delay:c||0})):d&&d.items.length||0}function L(a,b){var c=K[a];if(c){var d=!!c.o||!!c.m;0<c.B&&(b||!d)&&gb(a,b)}}function hb(a){(a=K[a])&&a.B--}function ib(a,b){var c=K[a];c&&(c.B++,L(a,b))}function jb(a){var b=K[a];b&&(kb(b),delete K[a])}
function gb(a,b){var c=K[a];if(c&&(kb(c),0<c.B&&c.items.length)){var d=c.items[0];d&&(a=n(function(e,f){f();e()},null,n(gb,null,a,b)),b?(c.items.shift(),a(d.D)):lb(c,d,a))}}function lb(a,b,c){b.delay?(c=n(c,null,za),a.m=setTimeout(c,b.delay),b.delay=0):(a.items.shift(),c=n(c,null,b.D),(b=(b=A["advanced-task-scheduler"])&&b.addTask)?a.o=b(c):a.m=setTimeout(c,0))}function kb(a){if(a.o){var b=A["advanced-task-scheduler"];(b=b&&b.cancelTask)&&b(a.o);a.o=0}a.m&&(clearTimeout(a.m),a.m=0)}var K={};function mb(a){var b=document.createElement("a");b.href=a;b.href=b.href;a={href:b.href,protocol:b.protocol,host:b.host,hostname:b.hostname,port:b.port,pathname:b.pathname,search:b.search,hash:b.hash,username:b.username,password:b.password};a.origin=a.protocol+"//"+a.host;a.pathname&&"/"==a.pathname[0]||(a.pathname="/"+a.pathname);return a}function N(a,b){a=mb(a);return b?a.href:z(a.href,"#")[0]}
function nb(a,b){var c=z(a,"#");a=c[0];r(b,function(d){a=a.replace(new RegExp("([?&])"+d+"(?:=[^&]*)?(?:(?=[&])|$)","g"),function(e,f){return"?"==f?f:""})});y(a,"?")&&(a=a.slice(0,-1));return a+c[1]+c[2]}function ob(a){var b=A["advanced-persistent-parameters"]||"",c=z(a,"#");a=c[0];var d=-1!=a.indexOf("?")?"&":"?";return a+(b?d+b:"")+c[1]+c[2]};function pb(a,b,c,d){var e="js"==a;b=O(a,b);var f=c||"^"+b,g=P(a,f),h;c&&(h=Q[P(a,c)])&&b!=h&&(p(e?"spfjsbeforeunload":"spfcssbeforeunload",{name:c,url:h}),e=h,delete Q[P(a,c)],e&&delete S[P(a,e)],delete G[P(a,c)],db(g,n(qb,null,a,c,h)));if((e=S[P(a,b)])&&f!=e){delete Q[P(a,e)];delete S[P(a,b)];var k=P(a,e);k&&g&&k in G&&(G[g]=(G[g]||[]).concat(G[k]),delete G[k])}S[P(a,b)]=f;Q[P(a,f)]=b;db(g,d);d=n(rb,null,a);T[P(a,b,void 0)]?(e&&f!=e&&(a=sb(a,b))&&a.setAttribute("name",c||""),d()):(a=tb(a,b,d,void 0,
void 0,h))&&c&&a.setAttribute("name",c)}function ub(a,b){var c=Q[P(a,b)];delete Q[P(a,b)];c&&delete S[P(a,c)];delete G[P(a,b)];qb(a,b,c)}function qb(a,b,c){c&&(p("js"==a?"spfjsunload":"spfcssunload",{name:b,url:c}),vb(a,c))}function rb(a){var b=P(a,""),c;for(c in G)0==c.indexOf(b)&&Aa(c.substring(b.length).split("|"),n(wb,null,a))&&fb(c)}
function tb(a,b,c,d,e,f){function g(){T[P(a,b,e)]&&(T[P(a,b,e)]=2);h&&m&&m.parentNode&&k==document&&m.parentNode.removeChild(m);c&&setTimeout(c,0);return null}var h="js"==a;b=O(a,b);T[P(a,b,e)]=1;var k=d||document,m=k.createElement(h?"script":"link");if(!b)return g();d=xb(b);m.className=P(a,d);"onload"in m?m.onerror=m.onload=g:m.onreadystatechange=function(){/^c|loade/.test(m.readyState)&&g()};d=k.getElementsByTagName("head")[0]||k.body;h?(m.async=!0,m.src=b,d.insertBefore(m,d.firstChild)):(m.rel=
"stylesheet",m.href=b,(f=f?sb(a,f,d):null)?d.insertBefore(m,f):d.appendChild(m));return m}function vb(a,b){b=O(a,b);var c=sb(a,b,void 0);c&&c.parentNode&&c.parentNode.removeChild(c);delete T[P(a,b)]}function sb(a,b,c){b=xb(b);return Va("."+P(a,b),c)[0]}
function yb(a){var b="js"==a,c=[];r(Va(b?"script[src]":'link[rel~="stylesheet"]'),function(d){var e=b?d.src:d.href;e=O(a,e);if(!T[P(a,e,void 0)]){T[P(a,e,void 0)]=2;var f=xb(e);E(d,P(a,f));if(f=d.getAttribute("name"))S[P(a,e)]=f,Q[P(a,f)]=e;c.push(d)}})}
function zb(a,b,c){if(b&&(b=O(a,b),c||!T[P(a,b,void 0)]))if(c&&"img"==a)Ab(b);else{var d=xb(b),e=P(a,d),f=P(a,"prefetch");d=document.getElementById(f);if(!d)d=Ya(f,null,function(g){g.title=f;L(f,!0)});else if(!c&&d.contentWindow.document.getElementById(e))return;a=n(Bb,null,d,a,b,e,f);d.title?a():J(f,a)}}
function Bb(a,b,c,d,e){var f="js"==b,g="css"==b;a=a.contentWindow.document;var h=a.getElementById(d);h&&h.parentNode.removeChild(h);f?(h=a.createElement("object"),Cb?a.createElement("script").src=c:h.data=c,h.id=d,a.body.appendChild(h)):g?(h=tb(b,c,null,a,e),h.id=d):(h=a.createElement("img"),Cb&&(c=c+"#"+q()),h.src=c,h.id=d,a.body.appendChild(h))}function Ab(a){var b=new Image;Cb&&(a=a+"#"+q());b.src=a}
function Db(a,b,c){var d="js"==a,e=Q[P(a,c)],f=b.replace(/\s/g,"");f=f||"";for(var g=0,h=0,k=f.length;h<k;++h)g=31*g+f.charCodeAt(h),g%=4294967296;f="hash-"+g;Q[P(a,c)]=f;!Eb(a,f)&&(b=Fb(a,b))&&(T[P(a,f,void 0)]=2,b&&!d&&(d=xb(f),b.className=P(a,d),b.setAttribute("name",c)),(e=e&&e[0])&&vb(a,e))}
function Fb(a,b){b=Fa(b);if(!b)return null;var c=document.getElementsByTagName("head")[0]||document.body;"js"==a?(a=document.createElement("script"),a.text=b,c.appendChild(a),c.removeChild(a)):(a=document.createElement("style"),c.appendChild(a),"styleSheet"in a?a.styleSheet.cssText=b:a.appendChild(document.createTextNode(b)));return a}
function O(a,b){var c="rsrc-p-"+a;if(b){var d=b.indexOf("//");if(0>d){if(0==b.lastIndexOf("hash-",0))return b;c=x[c]||"";if(Ea(c))b=c+b;else for(var e in c)b=b.replace(e,c[e]);"img"!=a&&(b=0>b.indexOf("."+a)?b+"."+a:b);b=N(b)}else 0==d&&(b=N(b))}return b}function P(a,b,c){return a+"-"+b+(c?"-"+c:"")}function xb(a){return a?String(a).replace(/[^\w]/g,""):""}function Eb(a,b){a=T[P(a,b,void 0)];return""==b||2==a}function wb(a,b){b=Q[P(a,b)];return void 0!=b&&Eb(a,b)}var T={},S={},Q={},Cb=-1!=navigator.userAgent.indexOf(" Trident/");
"rsrc-s"in x||w("rsrc-s",T);T=x["rsrc-s"];"rsrc-n"in x||w("rsrc-n",S);S=x["rsrc-n"];"rsrc-u"in x||w("rsrc-u",Q);Q=x["rsrc-u"];function Gb(a){a=v(a);r(a,function(b){zb("img",b,!0)})};function Hb(a,b,c){pb("js",a,b,c)}function Ib(a){ub("js",a)}function Jb(a,b){tb("js",a,b)}function Kb(a){a=v(a);r(a,function(b){zb("js",b)})}function Lb(a,b,c){a=v(a);a=Ca(a,function(g){return!!g});var d=[];r(a,function(g){void 0==Q[P("js",g)]&&d.push(g)});var e=!d.length;if(b){var f=Aa(a,n(wb,null,"js"));e&&f?b():(a=P("js",a.sort().join("|")),db(a,b))}c&&!e&&c(d)}function Mb(a,b){a=v(a);r(a,function(c){if(c){var d=Nb[c]||c;d=O("js",d);var e=Q[P("js",c)];e&&d!=e&&Ob(c)}});Lb(a,b,Pb)}
function Pb(a){r(a,function(b){function c(){Hb(e,b)}var d=U[b],e=Nb[b]||b;d?Mb(d,c):c()})}function Ob(a){a=v(a);r(a,function(b){var c=[],d;for(d in U){var e=U[d];e=v(e);r(e,function(f){f==b&&c.push(d)})}r(c,function(f){Ob(f)});Ib(b)})}function Qb(a,b){Db("js",a,b)}function Rb(a){Fb("js",a)}var U={};"js-d"in x||w("js-d",U);U=x["js-d"];var Nb={};"js-u"in x||w("js-u",Nb);Nb=x["js-u"];function Sb(a,b,c){pb("css",a,b,c)}function Tb(a,b){tb("css",a,b)}function Ub(a){a=v(a);r(a,function(b){zb("css",b)})};function Vb(a,b,c){if(b){b=[];var d=0;c&&(a+="\r\n");var e=a.indexOf("[\r\n",d);for(-1<e&&(d=e+3);-1<(e=a.indexOf(",\r\n",d));){var f=Fa(a.substring(d,e));d=e+3;f&&b.push(JSON.parse(f))}e=a.indexOf("]\r\n",d);-1<e&&(f=Fa(a.substring(d,e)),d=e+3,f&&b.push(JSON.parse(f)));f="";a.length>d&&(f=a.substring(d),c&&y(f,"\r\n")&&(f=f.substring(0,f.length-2)));b=Wb(b);return{A:b,g:f}}a=JSON.parse(a);b=Wb(v(a));return{A:b,g:""}}
function V(a,b,c,d){var e=c&&0==c.type.lastIndexOf("navigate",0),f=c&&c.reverse,g=c&&!!c.position,h=c&&c.j,k=b.name||"",m="process "+N(a),B=!A["experimental-process-async"];var u=0;b.timing||(b.timing={});b.title&&(document.title=b.title);e&&b.url&&N(b.url)!=N(window.location.href)&&Za(b.url+window.location.hash);b.head&&(u=n(function(t,C){t=W(t);Xb(t);Yb(t);hb(m);Zb(t,function(){C.spfProcessHead=q();ib(m,B)})},null,b.head,b.timing),u=J(m,u));b.attr&&(u=n(function(t,C){for(var H in t){var M=document.getElementById(H);
if(M){var R=void 0,$b=t[H];for(R in $b){var ua=$b[R];"class"==R?M.className=ua:"style"==R?M.style.cssText=ua:(M.setAttribute(R,ua),"value"==R&&(M[R]=ua))}}}C.spfProcessAttr=q()},null,b.attr,b.timing),u=J(m,u));var I=b.body||{},$c=u,Wa;for(Wa in I)u=n(function(t,C){if(t=document.getElementById(t)){!e||g||h||(w("nav-scroll-position",null),w("nav-scroll-url",null),window.scroll(0,0),h=!0,c&&(c.j=!0));var H=W(C);Yb(H);var M=function(){hb(m);Zb(H,function(){ib(m,B)})};C=A["animation-class"];ac&&Ta(t,C)?
(t=new bc(t,H.html,C,k,!!f),hb(m),L(t.key,!0),J(t.key,n(cc,null,t),0),J(t.key,n(dc,null,t),17),J(t.key,n(ec,null,t),t.duration),J(t.key,n(function(){M();ib(m,B)},null),0),L(t.key)):(C=A["experimental-html-handler"])?(hb(m),C(H.html,t,function(){M();ib(m,B)})):(wa(t,xa(H.html)),M())}},null,Wa,I[Wa],b.timing),u=J(m,u);I=u-$c;b.foot?(u=n(function(t,C,H){H&&(C.spfProcessBody=q());t=W(t);Yb(t);hb(m);Zb(t,function(){C.spfProcessFoot=q();ib(m,B)})},null,b.foot,b.timing,I),u=J(m,u)):I&&(u=n(function(t){t.spfProcessBody=
q()},null,b.timing),u=J(m,u));d&&(u=J(m,n(d,null,a,b)));L(m,B)}function fc(a,b,c,d){c="preprocess "+N(a);if(b.head){var e=n(function(h){h=W(h);Xb(h);gc(h);hc(h)},null,b.head);J(c,e)}var f=b.body||{},g;for(g in f)f[g]&&(e=n(function(h,k){h=W(k);gc(h);hc(h)},null,g,f[g]),J(c,e));b.foot&&(e=n(function(h){h=W(h);gc(h);hc(h)},null,b.foot),J(c,e));d&&J(c,n(d,null,a,b));L(c)}
function cc(a){E(a.a,a.s);E(a.a,a.H);E(a.a,a.K);E(a.a,a.I);E(a.a,a.J);a.l=document.createElement("div");a.l.className=a.S;var b=a.a,c=a.l;if(c){for(var d;d=b.firstChild;)c.appendChild(d);b.appendChild(c)}a.f=document.createElement("div");a.f.className=a.R;wa(a.f,xa(a.P));a.reverse?(b=a.l,b.parentNode.insertBefore(a.f,b)):(b=a.l,b.parentNode.insertBefore(a.f,b.nextSibling))}function dc(a){F(a.a,a.I);F(a.a,a.J);E(a.a,a.F);E(a.a,a.G)}
function ec(a){a.a.removeChild(a.l);var b=a.f,c,d=b.parentNode;if(d&&11!=d.nodeType)if(b.removeNode)b.removeNode(!1);else{for(;c=b.firstChild;)d.insertBefore(c,b);d.removeChild(b)}F(a.a,a.F);F(a.a,a.G);F(a.a,a.H);F(a.a,a.K);F(a.a,a.s)}function Wb(a){r(v(a),function(b){if(b){b.head&&(b.head=W(b.head));if(b.body)for(var c in b.body)b.body[c]=W(b.body[c]);b.foot&&(b.foot=W(b.foot))}});return a}
function W(a){var b=new ic;if(!a)return b;if(!Ea(a))return a.scripts&&r(a.scripts,function(c){b.scripts.push({url:c.url||"",text:c.text||"",name:c.name||"",async:c.async||!1})}),a.styles&&r(a.styles,function(c){b.styles.push({url:c.url||"",text:c.text||"",name:c.name||""})}),a.links&&r(a.links,function(c){"spf-preconnect"==c.rel&&b.links.push({url:c.url||"",rel:c.rel||""})}),b.html=a.html||"",b;a=a.replace(jc,function(c,d,e,f){if("script"==d){d=(d=e.match(kc))?d[1]:"";var g=e.match(lc);g=g?g[1]:"";
var h=mc.test(e);e=nc.exec(e);return(e=!e||-1!=e[1].indexOf("/javascript")||-1!=e[1].indexOf("/x-javascript")||-1!=e[1].indexOf("/ecmascript"))?(b.scripts.push({url:g,text:f,name:d,async:h}),""):c}return"style"==d&&(d=(d=e.match(kc))?d[1]:"",e=nc.exec(e),e=!e||-1!=e[1].indexOf("text/css"))?(b.styles.push({url:"",text:f,name:d}),""):c});a=a.replace(oc,function(c,d){var e=d.match(pc);e=e?e[1]:"";return"stylesheet"==e?(e=(e=d.match(kc))?e[1]:"",d=(d=d.match(qc))?d[1]:"",b.styles.push({url:d,text:"",
name:e}),""):"spf-preconnect"==e?(d=(d=d.match(qc))?d[1]:"",b.links.push({url:d,rel:e}),""):c});b.html=a;return b}function Zb(a,b){if(0>=a.scripts.length)b&&b();else{var c=-1,d=function(){c++;if(c<a.scripts.length){var e=a.scripts[c],f=function(){};e.url?f=e.name?n(Hb,null,e.url,e.name):n(Jb,null,e.url):e.text&&(f=e.name?n(Qb,null,e.text,e.name):n(Rb,null,e.text));e.url&&!e.async?f(d):(f(),d())}else b&&b()};d()}}
function hc(a){0>=a.scripts.length||(a=Da(a.scripts,function(b){return b.url}),Kb(a))}function Yb(a){0>=a.styles.length||r(a.styles,function(b){b.url?b.name?Sb(b.url,b.name):Tb(b.url):b.text&&(b.name?Db("css",b.text,b.name):Fb("css",b.text))})}function gc(a){0>=a.styles.length||(a=Da(a.styles,function(b){return b.url}),Ub(a))}function Xb(a){0>=a.links.length||(a=Da(a.links,function(b){return"spf-preconnect"==b.rel?b.url:""}),Gb(a))}
function bc(a,b,c,d,e){var f=parseInt(A["animation-duration"],10);this.a=a;this.P=b;this.duration=f;this.reverse=e;b=document.body;b=(b.dataset?b.dataset.spfName:b.getAttribute("data-"+Ga()))||"";f=parseInt(x.uid,10)||0;f++;this.key=a["spf-key"]||(a["spf-key"]=""+w("uid",f));this.H=b&&c+"-from-"+b;this.K=d&&c+"-to-"+d;this.l=null;this.S=c+"-old";this.f=null;this.R=c+"-new";this.s=c+(e?"-reverse":"-forward");this.I=c+"-start";this.J=this.s+"-start";this.F=c+"-end";this.G=this.s+"-end"}
function ic(){this.html="";this.scripts=[];this.styles=[];this.links=[]}
var ac=function(){var a=document.createElement("div");return"transition"in a.style?!0:Ba(["webkit","Moz","Ms","O","Khtml"],function(b){return b+"Transition"in a.style})}(),oc=/\x3clink([\s\S]*?)\x3e/ig,jc=/\x3c(script|style)([\s\S]*?)\x3e([\s\S]*?)\x3c\/\1\x3e/ig,mc=/(?:\s|^)async(?:\s|=|$)/i,qc=/(?:\s|^)href\s*=\s*["']?([^\s"']+)/i,kc=/(?:\s|^)name\s*=\s*["']?([^\s"']+)/i,pc=/(?:\s|^)rel\s*=\s*["']?([^\s"']+)/i,lc=/(?:\s|^)src\s*=\s*["']?([^\s"']+)/i,nc=/(?:\s|^)type\s*=\s*["']([^"']+)["']/i;/*

 SPF
 (c) 2012-2017 Google Inc.
 https://ajax.googleapis.com/ajax/libs/spf/2.4.0/LICENSE
*/
function rc(a,b,c,d){var e=d||{},f=!1,g=0,h,k=new XMLHttpRequest;k.open(a,b,!0);k.timing={};var m=k.abort;k.abort=function(){clearTimeout(h);k.onreadystatechange=null;m.call(k)};k.onreadystatechange=function(){var u=k.timing;if(2==k.readyState){u.responseStart=u.responseStart||q();if("json"==k.responseType)f=!1;else if(A["assume-all-json-requests-chunked"]||-1<(k.getResponseHeader("Transfer-Encoding")||"").toLowerCase().indexOf("chunked"))f=!0;else{u=k.getResponseHeader("X-Firefox-Spdy");var I=window.chrome&&
chrome.loadTimes&&chrome.loadTimes();I=I&&I.wasFetchedViaSpdy;f=!(!u&&!I)}e.M&&e.M(k)}else 3==k.readyState?f&&e.u&&(u=k.responseText.substring(g),g=k.responseText.length,e.u(k,u)):4==k.readyState&&(u.responseEnd=u.responseEnd||q(),window.performance&&window.performance.getEntriesByName&&(k.resourceTiming=window.performance.getEntriesByName(b).pop()),f&&e.u&&k.responseText.length>g&&(u=k.responseText.substring(g),g=k.responseText.length,e.u(k,u)),clearTimeout(h),e.L&&e.L(k))};"responseType"in k&&"json"==
e.responseType&&(k.responseType="json");e.withCredentials&&(k.withCredentials=e.withCredentials);d="FormData"in window&&c instanceof FormData;a="POST"==a&&!d;if(e.headers)for(var B in e.headers)k.setRequestHeader(B,e.headers[B]),"content-type"==B.toLowerCase()&&(a=!1);a&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");0<e.O&&(h=setTimeout(function(){k.abort();e.N&&e.N(k)},e.O));k.timing.fetchStart=q();k.send(c);return k};function sc(a,b){b=b||{};b.method=((b.method||"GET")+"").toUpperCase();b.type=b.type||"request";var c=a,d=A["url-identifier"]||"";if(d){d=d.replace("__type__",b.type||"");var e=z(c,"#"),f=z(e[0],"?");c=f[0];var g=f[1];f=f[2];var h=e[1];e=e[2];if(0==d.lastIndexOf("?",0))g&&(d=d.replace("?","&")),f+=d;else{if(0==d.lastIndexOf(".",0))if(y(c,"/"))d="index"+d;else{var k=c.lastIndexOf(".");-1<k&&(c=c.substring(0,k))}else y(c,"/")&&0==d.lastIndexOf("/",0)&&(d=d.substring(1));c+=d}c=c+g+f+h+e}d=N(c);c={};
c.spfUrl=d;c.startTime=q();c.fetchStart=c.startTime;g=tc(a,b.current,null,b.type,!1);g=uc(g,b.current);c.spfPrefetched=!!g&&"prefetch"==g.type;c.spfCached=!!g;if(g){a=n(vc,null,a,b,c,g.key,g.response);b=window._spf_state=window._spf_state||{};var m=parseInt(b.uid,10)||0;m++;b=b.uid=m;Ja[b]=a;Ma?window.postMessage("spf:"+b,"*"):window.setTimeout(n(Ia,null,b),0);return null}g={};if(f=A["request-headers"])for(m in f)h=f[m],g[m]=null==h?"":String(h);if(b.headers)for(m in b.headers)h=b.headers[m],g[m]=
null==h?"":String(h);null!=b.c&&(g["X-SPF-Referer"]=b.c);null!=b.current&&(g["X-SPF-Previous"]=b.current);if(m=A["advanced-header-identifier"])g["X-SPF-Request"]=m.replace("__type__",b.type),g.Accept="application/json";m=new wc;f=n(xc,null,a,b,c,m);a={headers:g,O:A["request-timeout"],M:n(yc,null,a,m),u:n(zc,null,a,b,c,m),L:f,N:f};b.withCredentials&&(a.withCredentials=b.withCredentials);A["advanced-response-type-json"]&&(a.responseType="json");return"POST"==b.method?rc("POST",d,b.C,a):rc("GET",d,null,
a)}function vc(a,b,c,d,e){var f=!1;c.responseStart=c.responseEnd=q();b.type&&0==b.type.lastIndexOf("navigate",0)&&(c.navigationStart=c.startTime,A["cache-unified"]||(Oa(d),f=!0));b.i&&"multipart"==e.type&&r(e.parts,function(g){g.timing||(g.timing={});g.timing.spfCached=!!c.spfCached;g.timing.spfPrefetched=!!c.spfPrefetched;b.i(a,g)});Ac(a,b,c,e,f)}function yc(a,b,c){a=c.getResponseHeader("X-SPF-Response-Type")||"";b.f=-1!=a.toLowerCase().indexOf("multipart")}
function zc(a,b,c,d,e,f,g){if(d.f){f=d.g+f;try{var h=Vb(f,!0,g)}catch(k){e.abort();b.h&&b.h(a,k,e);return}b.i&&r(h.A,function(k){k.timing||(k.timing={});k.timing.spfCached=!!c.spfCached;k.timing.spfPrefetched=!!c.spfPrefetched;b.i(a,k)});d.a=d.a.concat(h.A);d.g=h.g}}
function xc(a,b,c,d,e){if(e.timing)for(var f in e.timing)c[f]=e.timing[f];if(e.resourceTiming)if("load"==b.type)for(var g in e.resourceTiming)c[g]=e.resourceTiming[g];else if(window.performance&&window.performance.timing&&(f=window.performance.timing.navigationStart,f+e.resourceTiming.startTime>=c.startTime))for(var h in e.resourceTiming)g=e.resourceTiming[h],void 0!==g&&(y(h,"Start")||y(h,"End")||"startTime"==h)&&(c[h]=f+Math.round(g));"load"!=b.type&&(c.navigationStart=c.startTime);d.a.length&&
(d.g=Fa(d.g),d.g&&zc(a,b,c,d,e,"",!0));if("json"==e.responseType){if(!e.response){b.h&&b.h(a,Error("JSON response parsing failed"),e);return}var k=Wb(v(e.response))}else try{k=Vb(e.responseText).A}catch(B){b.h&&b.h(a,B,e);return}if(b.i&&1<k.length)for(d=d.a.length;d<k.length;d++)e=k[d],e.timing||(e.timing={}),e.timing.spfCached=!!c.spfCached,e.timing.spfPrefetched=!!c.spfPrefetched,b.i(a,e);if(1<k.length){var m;r(k,function(B){B.cacheType&&(m=B.cacheType)});k={parts:k,type:"multipart"};m&&(k.cacheType=
m)}else k=1==k.length?k[0]:{};Ac(a,b,c,k,!0)}function Ac(a,b,c,d,e){if(e&&"POST"!=b.method&&(e=tc(a,b.current,d.cacheType,b.type,!0))){d.cacheKey=e;var f={response:d,type:b.type||""},g=parseInt(A["cache-lifetime"],10),h=parseInt(A["cache-max"],10);0>=g||0>=h||(h=D(),f={data:f,life:g,time:q(),count:0},Ra(f),h[e]=f,setTimeout(Pa,1E3))}d.timing=c;b.v&&b.v(a,d)}
function tc(a,b,c,d,e){a=N(a);var f;A["cache-unified"]?f=a:"navigate-back"==d||"navigate-forward"==d?f="history "+a:"navigate"==d?f=(e?"history ":"prefetch ")+a:"prefetch"==d&&(f=e?"prefetch "+a:"");b&&"url"==c?f+=" previous "+b:b&&"path"==c&&(f+=" previous "+mb(b).pathname);return f||""}
function uc(a,b){var c=[];b&&(c.push(a+" previous "+b),c.push(a+" previous "+mb(b).pathname));c.push(a);var d=null;Ba(c,function(e){a:{var f=D();if(e in f){f=f[e];if(Qa(f)){Ra(f);f=f.data;break a}Oa(e)}f=void 0}f&&(d={key:e,response:f.response,type:f.type});return!!f});return d}function wc(){this.f=!1;this.g="";this.a=[]};function Bc(a){return Xa(a,function(b){return Ta(b,A["link-class"])})}function Cc(a){return Xa(a,function(b){return Ta(b,A["nolink-class"])})}function Dc(a,b){return Xa(a,function(c){return c.href&&"img"!=c.tagName.toLowerCase()},b)}function Ec(a){if(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey||0<a.button)return null;var b=Bc(a.target);return!b||A["nolink-class"]&&Cc(a.target)?null:(a=Dc(a.target,b))?a.href:null}function Fc(a){return mb(a).origin!=mb(window.location.href).origin?!1:!0}
function Gc(){if(!x["nav-init"])return!1;var a=parseInt(x["nav-counter"],10)||0;a++;var b=parseInt(A["navigate-limit"],10);b=isNaN(b)?Infinity:b;if(a>b)return!1;a=parseInt(x["nav-init-time"],10);a--;a=q()-a;b=parseInt(A["navigate-lifetime"],10);b=isNaN(b)?Infinity:b;return a>b?!1:!0}function Hc(a,b){b=b||window.location.href;return-1!=a.indexOf("#")&&(a=N(a),b=N(b),a==b)?!1:!0}
function Ic(a){if(!a.defaultPrevented){var b=Ec(a);b&&(b=ob(b),Fc(b)&&Gc()&&p("spfclick",{url:b,target:a.target})&&(Jc(b,{},new Kc),a.preventDefault()))}}function Lc(a){var b=Ec(a);b&&setTimeout(function(){Mc(b)},0)}function Nc(){var a=x["nav-scroll-position"]||null;var b=x["nav-scroll-url"]||"";a=a&&b==window.location.href?a:null;Oc();a&&window.scroll.apply(null,a)}
function Pc(a,b){b=new Kc({current:b&&b["spf-current"],history:!0,position:b&&b["spf-position"],c:b&&b["spf-referer"],reverse:!(!b||!b["spf-back"])});var c=A["reload-identifier"];c&&(a=nb(a,[c]));Fc(a)?Gc()?p("spfhistory",{url:a,referer:b.c,previous:b.current})&&(b.position&&(w("nav-scroll-position",[window.pageXOffset,window.pageYOffset]),w("nav-scroll-url",window.location.href)),Jc(a,{},b)):X(a,"1"):X(a,"9")}
function Jc(a,b,c){Qc();if(Hc(a,c.current))if(Rc(a,c.c,c.current,b)){w("nav-counter",(parseInt(x["nav-counter"],10)||0)+1);Sc(a);var d=N(a),e="preprocess "+N(d);for(f in K)e!=f&&0==f.lastIndexOf("preprocess",0)&&jb(f);d=Tc()[d];w("nav-request",d);w("nav-promote",null);w("nav-promote-time",null);if(d&&4!=d.readyState)d="preprocess "+N(a),e="promote "+N(a),w("nav-promote",a),w("nav-promote-time",q()),jb(d),L(e,!0),c.history||Uc(a,c.c,n(Y,null,b));else{d=n(Y,null,b);e=n(Vc,null,b,c);var f=n(Wc,null,
b,c);A["advanced-navigate-persist-timing"]||Xc();c.type="navigate";c.history&&(c.type+=c.reverse?"-back":"-forward");b=sc(a,{method:b.method,headers:b.headers,i:e,h:d,v:f,C:b.postData,type:c.type,current:c.current,c:c.c});w("nav-request",b);c.history||Uc(a,c.c,d)}}else X(a,"2");else c.history||Uc(a,c.c,n(Y,null,b)),Yc(a,c)}
function Yc(a,b){if(b.position)Oc(),window.scroll.apply(null,b.position),b.j=!0;else if(a=z(a,"#"),a[2]){if(a=document.getElementById(a[2]))Oc(),a.scrollIntoView(),b.j=!0}else b.j||(Oc(),window.scroll(0,0),b.j=!0)}function Uc(a,b,c){try{Za(null,{"spf-position":[window.pageXOffset,window.pageYOffset]}),N(a,!0)!=window.location.href&&$a(!1,a,{"spf-referer":b},void 0)}catch(d){Qc(),c(a,d)}}function Y(a,b,c,d){w("nav-request",null);Zc(b,c,a,void 0,d)&&X(b,"10",c)}
function Vc(a,b,c,d){if(ad(c,d,a))if(d.reload)X(c,"5");else if(d.redirect)bd(a,d.redirect);else try{V(c,d,b,function(){cd(c,d,a)})}catch(e){Y(a,c,e)}else X(c,"3")}
function Wc(a,b,c,d){w("nav-request",null);if(x["nav-promote"]==b.b){var e=d.timing||{};e.navigationStart=x["nav-promote-time"];e.spfPrefetched=!0}var f="multipart"==d.type;if(!f){if(!dd(c,d,a)){X(c,"4");return}if(d.reload){X(c,"5");return}if(d.redirect){bd(a,d.redirect);return}}try{V(c,f?{}:d,b,function(){var g=d.name||"";f&&r(d.parts,function(h){g=h.name||g});Ua(g);Yc(c,b);ed(c,d,a)})}catch(g){Y(a,c,g)}}function bd(a,b){try{b+=window.location.hash,Za(b,null,!0)}catch(c){Qc(),Y(a,b,c)}}
function Qc(){var a=x["nav-request"];a&&(a.abort(),w("nav-request",null))}function Z(a,b){if(a){var c=Array.prototype.slice.call(arguments);c[0]=a;c=ya.apply(null,c)}return!1!==c}
function X(a,b,c){c=c?c.message:"";Qc();Sc();var d=b;c&&(d+=" Message: "+c);p("spfreload",{url:a,reason:d});var e=window.location.href;A["experimental-remove-history"]&&e==a&&(w("history-ignore-pop",!0),window.history.back());setTimeout(function(){var f=A["reload-identifier"];if(f){var g={};g[f]=encodeURIComponent(b);f=a;var h=z(f,"#");f=h[0];var k=-1!=f.indexOf("?")?"&":"?",m;for(m in g)f+=k+m,g[m]&&(f+="="+g[m]),k="&";a=f+h[1]+h[2]}window.location.href=a;Hc(a,e)||window.location.reload()},0)}
function fd(a,b,c){c.b=c.b||a;if(Rc(a,void 0,void 0,b,!0)){var d=n(gd,null,!1,b,c),e=n(hd,null,!1,b,c),f=n(id,null,!1,b,c);c.type="load";sc(a,{method:b.method,headers:b.headers,i:e,h:d,v:f,C:b.postData,type:c.type,withCredentials:b.withCredentials})}}function Mc(a,b){a=ob(a);jd(a,b||{},new Kc)}
function jd(a,b,c){c.b=c.b||a;if(Rc(a,void 0,void 0,b,!0)){var d=n(gd,null,!0,b,c),e=n(hd,null,!0,b,c),f=n(id,null,!0,b,c);c.type="prefetch";b=sc(a,{method:b.method,headers:b.headers,i:e,h:d,v:f,C:b.postData,type:c.type,current:c.current});a=N(a);Tc()[a]=b}}function gd(a,b,c,d,e){a&&kd(d);a&&x["nav-promote"]==c.b?Y(b,d,e):Zc(d,e,b,!0)}
function hd(a,b,c,d,e){if(ad(d,e,b,!0)){if(e.reload){if(!a)return;if(x["nav-promote"]==c.b){X(d,"5");return}}if(e.redirect)ld(a,b,c,e.redirect);else{if(a){var f=n(Vc,null,b,c,d,e),g="promote "+N(c.b);J(g,f);if(x["nav-promote"]==c.b){L(g,!0);return}}(a?fc:V)(d,e,c,function(){cd(d,e,b,!0)})}}}
function id(a,b,c,d,e){var f="multipart"==e.type;if(!f){if(!dd(d,e,b,!0)){X(d,"4");return}if(e.reload){if(!a)return;if(x["nav-promote"]==c.b){X(d,"5");return}}if(e.redirect){ld(a,b,c,e.redirect);return}}var g="promote "+N(c.b);if(a){kd(d);if(x["nav-promote"]==c.b){J(g,n(Wc,null,b,c,d,e));L(g,!0);return}jb(g)}g=a?fc:V;try{g(d,f?{}:e,c,function(){ed(d,e,b,!0)})}catch(h){gd(a,b,c,d,h)}}
function ld(a,b,c,d){a=a?jd:fd;var e={};r("onError onRequest onPartProcess onPartDone onProcess onDone".split(" "),function(f){e[f]=b[f]});a(d,e,c)}function Zc(a,b,c,d,e){a={url:a,err:b,xhr:e};(c=Z((c||{}).onError,a))&&!d&&(c=p("spferror",a));return c}function Rc(a,b,c,d,e){a={url:a,referer:b,previous:c};(d=Z((d||{}).onRequest,a))&&!e&&(d=p("spfrequest",a));return d}function ad(a,b,c,d){a={url:a,part:b};(c=Z((c||{}).onPartProcess,a))&&!d&&(c=p("spfpartprocess",a));return c}
function cd(a,b,c,d){a={url:a,part:b};Z((c||{}).onPartDone,a)&&!d&&p("spfpartdone",a)}function dd(a,b,c,d){a={url:a,response:b};(c=Z((c||{}).onProcess,a))&&!d&&(c=p("spfprocess",a));return c}function ed(a,b,c,d){a={url:a,response:b};Z((c||{}).onDone,a)&&!d&&p("spfdone",a)}function kd(a){a=N(a);var b=Tc(),c=b[a];c&&c.abort();delete b[a]}function Sc(a){var b=Tc();a=a&&N(a);for(var c in b)a!=c&&kd(c)}
var Xc,md=window.performance&&(window.performance.clearResourceTimings||window.performance.webkitClearResourceTimings||window.performance.mozClearResourceTimings||window.performance.msClearResourceTimings||window.performance.oClearResourceTimings);Xc=md?n(md,window.performance):za;function Tc(){return"nav-prefetches"in x?x["nav-prefetches"]:w("nav-prefetches",{})}function Oc(){w("nav-scroll-position",null);w("nav-scroll-url",null)}
function Kc(a){a=a||{};this.current=a.history&&a.current?a.current:window.location.href;this.history=!!a.history;this.b=a.b||"";this.position=a.position||null;this.c=void 0!=a.c?a.c:window.location.href;this.reverse=!!a.reverse;this.j=!!a.j;this.type=a.type||""};function nd(){yb("js");yb("css");"complete"==document.readyState&&(document.removeEventListener?document.removeEventListener("DOMContentLoaded",nd,!1):document.detachEvent&&document.detachEvent("onreadystatechange",nd))}document.addEventListener?document.addEventListener("DOMContentLoaded",nd,!1):document.attachEvent&&document.attachEvent("onreadystatechange",nd);nd();
var od={init:function(a){var b=!("function"!=typeof window.history.pushState&&!bb().contentWindow.history.pushState);a=a||{};for(var c in Na)A[c]=c in a?a[c]:Na[c];for(c in a)c in Na||(A[c]=a[c]);if(b){c=Zc;if(!x["history-init"]&&window.addEventListener){a=window.location.href;window.addEventListener("popstate",cb,!1);w("history-init",!0);w("history-callback",Pc);w("history-error-callback",c);w("history-listener",cb);w("history-url",a);w("history-timestamp",q());var d={"spf-referer":document.referrer};
try{Za(a,d)}catch(e){c&&c(a,e)}}!x["nav-init"]&&document.addEventListener&&(w("nav-init",!0),w("nav-init-time",q()),w("nav-counter",0),document.addEventListener("click",Ic,!1),w("nav-listener",Ic),!A["experimental-prefetch-mousedown"]||"ontouchstart"in window||0<window.navigator.maxTouchPoints||0<window.navigator.msMaxTouchPoints||(document.addEventListener("mousedown",Lc,!1),w("nav-mousedown-listener",Lc)),document.addEventListener("scroll",Nc,!1),w("nav-scroll-listener",Nc))}return b},dispose:function(){"undefined"!=
typeof History&&History.prototype.pushState&&(Qc(),x["nav-init"]&&(document.removeEventListener&&(document.removeEventListener("click",x["nav-listener"],!1),document.removeEventListener("mousedown",x["nav-mousedown-listener"],!1),document.removeEventListener("scroll",x["nav-scroll-listener"],!1)),w("nav-listener",null),w("nav-mousedown-listener",null),w("nav-scroll-listener",null),w("nav-scroll-position",null),w("nav-scroll-url",null),w("nav-init",!1),w("nav-init-time",null),w("nav-counter",null)),
x["history-init"]&&(window.removeEventListener&&window.removeEventListener("popstate",x["history-listener"],!1),w("history-init",!1),w("history-callback",null),w("history-error-callback",null),w("history-listener",null),w("history-url",null),w("history-timestamp",0)));for(var a in A)delete A[a]},navigate:function(a,b){a&&(a=ob(a),Fc(a)?Gc()?Jc(a,b||{},new Kc):X(a,"1"):X(a,"9"))},load:function(a,b){a=ob(a);fd(a,b||{},new Kc)},prefetch:Mc,process:function(a,b){function c(f,g,h,k){f==g&&b&&b(k)}var d=
window.location.href;if("multipart"==a.type){a=a.parts;var e=a.length-1;r(a,function(f,g){V(d,f,null,n(c,null,g,e))})}else V(d,a,null,n(c,null,0,0))}},pd={cache:{remove:Oa,clear:function(){D({})}},script:{load:Hb,get:Jb,ready:Lb,done:function(a){Q[P("js",a)]="";rb("js")},require:Mb,declare:function(a,b){if(a){for(var c in a)U[c]=a[c];if(b)for(c in b)Nb[c]=b[c]}},path:function(a){w("rsrc-p-js",a)},unload:Ib,ignore:function(a,b){a=v(a);a=P("js",a.sort().join("|"));eb(a,b)},unrequire:Ob,prefetch:Kb},
style:{load:Sb,get:Tb,unload:function(a){ub("css",a)},path:function(a){w("rsrc-p-css",a)},prefetch:Ub}},l=this;l.spf=l.spf||{};var qd=l.spf,rd;for(rd in od)qd[rd]=od[rd];for(var sd in pd)for(var td in pd[sd])qd[sd]=qd[sd]||{},qd[sd][td]=pd[sd][td];p("spfready");}).call(this);
