!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="./",o(o.s=26)}([function(e,t){window.onload=function(){var e=document.querySelector(".header-nav__mobile-btn"),t=document.querySelector(".popup-layout__popup-menu-close"),o=document.querySelector(".popup-layout"),n=document.querySelector(".popup-layout__popup-menu"),r=getComputedStyle(o),i=document.querySelector(".header-nav__list"),c=document.querySelector(".header-form"),a=document.querySelector(".header-nav"),s=document.querySelector(".header__top-content"),u=getComputedStyle(i);e.onclick=function(){if("none"!=r.display)return null;i.classList.add("header-nav__list--active"),c.classList.add("header-form--active"),o.classList.add("popup-layout--active"),n.appendChild(i),n.appendChild(c),window.onresize=function(){o.classList.contains("popup-layout--active")&&document.body.clientWidth>830&&(i.classList.remove("header-nav__list--active"),c.classList.remove("header-form--active"),o.classList.remove("popup-layout--active"),a.appendChild(i),s.appendChild(c))}},t.onclick=function(){if("block"!=r.display)return null;o.classList.remove("popup-layout--active"),i.classList.remove("header-nav__list--active"),c.classList.remove("header-form--active"),u.display};var l=document.querySelector(".registration__close-btn"),p=document.querySelector(".header-form__btn--reg"),d=document.querySelector(".popup-layout__registration-field");p&&(p.onclick=function(){if(0==o.classList.contains("popup-layout--active"))o.classList.add("popup-layout--active"),t.classList.add("popup-layout__popup-menu-close--unactive"),d.classList.add("popup-layout__registration-field--active");else{if(!o.classList.contains("popup-layout--active"))return null;d.classList.add("popup-layout__registration-field--active"),t.classList.add("popup-layout__popup-menu-close--unactive"),n.removeChild(i),n.removeChild(c),window.onresize=function(){d.classList.contains("popup-layout__registration-field--active")&&document.body.clientWidth>830&&(i.classList.remove("header-nav__list--active"),c.classList.remove("header-form--active"),o.classList.add("popup-layout--active"),a.appendChild(i),s.appendChild(c))}}},l.onclick=function(){o.classList.remove("popup-layout--active"),t.classList.remove("popup-layout__popup-menu-close--unactive"),d.classList.remove("popup-layout__registration-field--active")});var f=document.querySelector(".success__close-btn"),v=document.querySelector(".registration__button"),y=document.querySelector(".popup-layout__success-field");v.onclick=function(){d.classList.remove("popup-layout__registration-field--active"),y.classList.add("popup-layout__success-field--active")},f.onclick=function(){o.classList.remove("popup-layout--active"),t.classList.remove("popup-layout__popup-menu-close--unactive"),y.classList.remove("popup-layout__success-field--active")},document.querySelector(".success__button-index").onclick=function(){location.href="index.html"};var m=document.querySelector(".entry__close-btn"),_=document.querySelector(".header-form__btn--entry"),h=document.querySelector(".popup-layout__entry-field");_&&(_.onclick=function(){if(0==o.classList.contains("popup-layout--active"))o.classList.add("popup-layout--active"),t.classList.add("popup-layout__popup-menu-close--unactive"),h.classList.add("popup-layout__entry-field--active");else{if(!o.classList.contains("popup-layout--active"))return null;h.classList.add("popup-layout__entry-field--active"),t.classList.add("popup-layout__popup-menu-close--unactive"),n.removeChild(i),n.removeChild(c),window.onresize=function(){h.classList.contains("popup-layout__entry-field--active")&&document.body.clientWidth>830&&(i.classList.remove("header-nav__list--active"),c.classList.remove("header-form--active"),o.classList.add("popup-layout--active"),a.appendChild(i),s.appendChild(c))}}},m.onclick=function(){o.classList.remove("popup-layout--active"),t.classList.remove("popup-layout__popup-menu-close--unactive"),h.classList.remove("popup-layout__entry-field--active")});var b=document.querySelector(".recovery__close-btn"),L=document.querySelector(".entry__button-recovery"),g=document.querySelector(".popup-layout__recovery-field");L.onclick=function(){h.classList.remove("popup-layout__entry-field--active"),g.classList.add("popup-layout__recovery-field--active")},b.onclick=function(){o.classList.remove("popup-layout--active"),t.classList.remove("popup-layout__popup-menu-close--unactive"),g.classList.remove("popup-layout__recovery-field--active")};var S=document.querySelector(".new-pass__close-btn"),w=document.querySelector(".recovery__button"),q=document.querySelector(".popup-layout__message-pass-field"),C=document.querySelector(".new-pass__button-index");w.onclick=function(){g.classList.remove("popup-layout__recovery-field--active"),q.classList.add("popup-layout__message-pass-field--active")},S.onclick=function(){o.classList.remove("popup-layout--active"),t.classList.remove("popup-layout__popup-menu-close--unactive"),t.classList.remove("popup-layout__popup-menu-close--unactive"),q.classList.remove("popup-layout__message-pass-field--active")},C.onclick=function(){location.href="index.html"};for(var x=document.querySelectorAll(".button-block__reg"),k=0;k<x.length;k++)x[k].onclick=function(){location.href="goals.html",console.log("sf")};var j=document.querySelector(".header-form__btn--profile");j&&(j.onclick=function(){location.href="profile.html"})}},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){var n=o(22);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(23)(n,r);n.locals&&(e.exports=n.locals)},function(e,t,o){},function(e,t,o){var n,r,i={},c=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=n.apply(this,arguments)),r}),a=function(e){var t={};return function(e,o){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,o);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),s=null,u=0,l=[],p=o(24);function d(e,t){for(var o=0;o<e.length;o++){var n=e[o],r=i[n.id];if(r){r.refs++;for(var c=0;c<r.parts.length;c++)r.parts[c](n.parts[c]);for(;c<n.parts.length;c++)r.parts.push(h(n.parts[c],t))}else{var a=[];for(c=0;c<n.parts.length;c++)a.push(h(n.parts[c],t));i[n.id]={id:n.id,refs:1,parts:a}}}}function f(e,t){for(var o=[],n={},r=0;r<e.length;r++){var i=e[r],c=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};n[c]?n[c].parts.push(a):o.push(n[c]={id:c,parts:[a]})}return o}function v(e,t){var o=a(e.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=l[l.length-1];if("top"===e.insertAt)n?n.nextSibling?o.insertBefore(t,n.nextSibling):o.appendChild(t):o.insertBefore(t,o.firstChild),l.push(t);else if("bottom"===e.insertAt)o.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(e.insertAt.before,o);o.insertBefore(t,r)}}function y(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function m(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=function(){0;return o.nc}();n&&(e.attrs.nonce=n)}return _(t,e.attrs),v(e,t),t}function _(e,t){Object.keys(t).forEach(function(o){e.setAttribute(o,t[o])})}function h(e,t){var o,n,r,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var c=u++;o=s||(s=m(t)),n=g.bind(null,o,c,!1),r=g.bind(null,o,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",_(t,e.attrs),v(e,t),t}(t),n=function(e,t,o){var n=o.css,r=o.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(n=p(n));r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var c=new Blob([n],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(c),a&&URL.revokeObjectURL(a)}.bind(null,o,t),r=function(){y(o),o.href&&URL.revokeObjectURL(o.href)}):(o=m(t),n=function(e,t){var o=t.css,n=t.media;n&&e.setAttribute("media",n);if(e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}.bind(null,o),r=function(){y(o)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=c()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var o=f(e,t);return d(o,t),function(e){for(var n=[],r=0;r<o.length;r++){var c=o[r];(a=i[c.id]).refs--,n.push(a)}e&&d(f(e,t),t);for(r=0;r<n.length;r++){var a;if(0===(a=n[r]).refs){for(var s=0;s<a.parts.length;s++)a.parts[s]();delete i[a.id]}}}};var b,L=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function g(e,t,o,n){var r=o?"":n.css;if(e.styleSheet)e.styleSheet.cssText=L(t,r);else{var i=document.createTextNode(r),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var o=t.protocol+"//"+t.host,n=o+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?o+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,t,o){},function(e,t,o){"use strict";o.r(t);o(0),o(1),o(2),o(3),o(4),o(5),o(6),o(7),o(8),o(9),o(10),o(11),o(12),o(13),o(14),o(15),o(16),o(17),o(18),o(19),o(20),o(21),o(25)}]);