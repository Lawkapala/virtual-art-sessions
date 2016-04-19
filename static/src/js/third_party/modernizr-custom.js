/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-flexbox-flexboxlegacy-fullscreen-hashchange-history-performance-video-webgl-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,s,a;for(var l in x)if(x.hasOwnProperty(l)){if(e=[],n=x[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),g.push((o?"":"no-")+a.join("-"))}}function i(e){var n=C.className,t=Modernizr._config.classPrefix||"";if(w&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),w?C.className.baseVal=n:C.className=n)}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):w?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function l(e,n){return!!~(""+e).indexOf(n)}function f(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?f(o,t||n):o);return!1}function c(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(){var e=n.body;return e||(e=s(w?"svg":"body"),e.fake=!0),e}function p(e,t,r,o){var i,a,l,f,u="modernizr",c=s("div"),p=d();if(parseInt(r,10))for(;r--;)l=s("div"),l.id=o?o[r]:u+(r+1),c.appendChild(l);return i=s("style"),i.type="text/css",i.id="s"+u,(p.fake?p:c).appendChild(i),p.appendChild(c),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),c.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",f=C.style.overflow,C.style.overflow="hidden",C.appendChild(p)),a=t(c,e),p.fake?(p.parentNode.removeChild(p),C.style.overflow=f,C.offsetHeight):c.parentNode.removeChild(c),!!a}function v(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(c(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+c(n[o])+":"+r+")");return i=i.join(" or "),p("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function m(e,n,o,i){function f(){c&&(delete O.style,delete O.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var u=v(e,o);if(!r(u,"undefined"))return u}for(var c,d,p,m,y,h=["modernizr","tspan"];!O.style;)c=!0,O.modElem=s(h.shift()),O.style=O.modElem.style;for(p=e.length,d=0;p>d;d++)if(m=e[d],y=O.style[m],l(m,"-")&&(m=a(m)),O.style[m]!==t){if(i||r(o,"undefined"))return f(),"pfx"==n?m:!0;try{O.style[m]=o}catch(g){}if(O.style[m]!=y)return f(),"pfx"==n?m:!0}return f(),!1}function y(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+_.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?m(a,n,o,i):(a=(e+" "+P.join(s+" ")+s).split(" "),u(a,n,t))}function h(e,n,r){return y(e,t,t,n,r)}var g=[],x=[],b={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){x.push({name:e,fn:n,options:t})},addAsyncTest:function(e){x.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=b,Modernizr=new Modernizr,Modernizr.addTest("history",function(){var n=navigator.userAgent;return-1===n.indexOf("Android 2.")&&-1===n.indexOf("Android 4.0")||-1===n.indexOf("Mobile Safari")||-1!==n.indexOf("Chrome")||-1!==n.indexOf("Windows Phone")?e.history&&"pushState"in e.history:!1});var C=n.documentElement,w="svg"===C.nodeName.toLowerCase();Modernizr.addTest("video",function(){var e=s("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),n.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),n.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(t){}return n}),Modernizr.addTest("webgl",function(){var n=s("canvas"),t="probablySupportsContext"in n?"probablySupportsContext":"supportsContext";return t in n?n[t]("webgl")||n[t]("experimental-webgl"):"WebGLRenderingContext"in e});var S=function(){function e(e,n){var o;return e?(n&&"string"!=typeof n||(n=s(n||"div")),e="on"+e,o=e in n,!o&&r&&(n.setAttribute||(n=s("div")),n.setAttribute(e,""),o="function"==typeof n[e],n[e]!==t&&(n[e]=t),n.removeAttribute(e)),o):!1}var r=!("onblur"in n.documentElement);return e}();b.hasEvent=S,Modernizr.addTest("hashchange",function(){return S("hashchange",e)===!1?!1:n.documentMode===t||n.documentMode>7});var T="Moz O ms Webkit",_=b._config.usePrefixes?T.split(" "):[];b._cssomPrefixes=_;var E=function(n){var r,o=prefixes.length,i=e.CSSRule;if("undefined"==typeof i)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+n;for(var s=0;o>s;s++){var a=prefixes[s],l=a.toUpperCase()+"_"+r;if(l in i)return"@-"+a.toLowerCase()+"-"+n}return!1};b.atRule=E;var P=b._config.usePrefixes?T.toLowerCase().split(" "):[];b._domPrefixes=P;var A={elem:s("modernizr")};Modernizr._q.push(function(){delete A.elem});var O={style:A.elem.style};Modernizr._q.unshift(function(){delete O.style}),b.testAllProps=y;var z=b.prefixed=function(e,n,t){return 0===e.indexOf("@")?E(e):(-1!=e.indexOf("-")&&(e=a(e)),n?y(e,n,t):y(e,"pfx"))};Modernizr.addTest("fullscreen",!(!z("exitFullscreen",n,!1)&&!z("cancelFullScreen",n,!1))),Modernizr.addTest("performance",!!z("performance",e)),b.testAllProps=h,Modernizr.addTest("flexbox",h("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",h("boxDirection","reverse",!0)),o(),i(g),delete b.addTest,delete b.addAsyncTest;for(var L=0;L<Modernizr._q.length;L++)Modernizr._q[L]();e.Modernizr=Modernizr}(window,document);