!function(e){var t={};function o(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="./",o(o.s=34)}([function(e,t,o){"use strict";!function(){var e,t="day__info-range-item--active",o=".day__info-range-item--active",n=Array.from(document.querySelectorAll(".day__info-range-item")),c=document.querySelector(".day__info-range-btn--min"),u=document.querySelector(".day__info-range-btn--plus");function r(){e=document.querySelector(o)}if(!u)return null;n.forEach(function(o){o.addEventListener("click",function(){if(r(),o===e)return null;o.classList.add(t),e.classList.remove(t)})}),u.addEventListener("click",function(){if(r(),e===n[n.length-1])return null;e.classList.remove(t),e.nextElementSibling.classList.add(t)}),c.addEventListener("click",function(){if(r(),e===n[0])return null;e.classList.remove(t),e.previousElementSibling.classList.add(t)})}()},function(e,t,o){"use strict";!function(){for(var e=document.links,t=0;t<e.length;t++)e[t].href==document.URL&&(e[t].style.cssText="text-decoration:underline")}()},function(e,t,o){"use strict";var n,c,u,r,i;n=document.querySelector(".popup-layout"),c=Array.from(document.querySelectorAll(".profile-item__form-button")),u=document.querySelector(".popup-layout__saved"),r=document.querySelector(".saved__close-btn"),i=document.querySelector(".saved__button"),c&&c.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),n.classList.add("popup-layout--active"),u.classList.add("popup-layout__saved--active")})}),r&&r.addEventListener("click",function(){n.classList.remove("popup-layout--active"),u.classList.remove("popup-layout__saved--active")}),i&&i.addEventListener("click",function(){location.href="profile.html"})},function(e,t,o){"use strict";!function(){var e=Array.from(document.querySelectorAll(".button-block__reg, .entry__button"));e&&e.forEach(function(e){e.addEventListener("click",function(){location.href="goals.html"})});var t=document.querySelector(".header-form__btn--profile");t&&t.addEventListener("click",function(){location.href="profile.html"});var o=document.querySelector(".new-pass__button-index");o&&o.addEventListener("click",function(){location.href="index.html"});var n=document.querySelector(".profile-item__button");n&&n.addEventListener("click",function(){location.href="payment.html"});var c=document.querySelector(".registration__button");c&&c.addEventListener("click",function(e){e.preventDefault(),location.href="wellcome.html"})}()},function(e,t,o){"use strict";var n,c,u,r,i,a,l,s,d,p,f,m;n=document.querySelector(".popup-layout"),c="popup-layout--active",u="popup-layout__registration-field--active",r=document.querySelector(".registration__close-btn"),i=Array.from(document.querySelectorAll(".header-form__btn--reg, .main__goals-status-link-reg")),a=document.querySelector(".popup-layout__registration-field"),l=document.querySelector(".popup-layout__popup-menu-close"),s=document.querySelector(".popup-layout__popup-menu"),d=document.querySelector(".header-nav__list"),p=document.querySelector(".header-form"),f=document.querySelector(".header-nav"),m=document.querySelector(".header__top-content"),i&&i.forEach(function(e){e.addEventListener("click",function(){n.classList.contains(c)?(a.classList.add(u),l.classList.add("popup-layout__popup-menu-close--unactive"),s.removeChild(p),s.removeChild(d)):(n.classList.add(c),l.classList.add("popup-layout__popup-menu-close--unactive"),a.classList.add(u)),window.onresize=function(){a.classList.contains(u)&&document.body.clientWidth>830&&(d.classList.remove("header-nav__list--active"),p.classList.remove("header-form--active"),n.classList.add(c),f.appendChild(d),m.appendChild(p))}}),r&&r.addEventListener("click",function(){n.classList.remove(c),a.classList.remove(u)})})},function(e,t,o){"use strict";var n,c,u,r,i,a,l,s,d,p,f;n=document.querySelector(".header-nav__mobile-btn"),c=document.querySelector(".popup-layout__popup-menu-close"),u=document.querySelector(".popup-layout"),r="popup-layout--active",i=document.querySelector(".popup-layout__popup-menu"),a=document.querySelector(".header-nav__list"),l="header-nav__list--active",s=document.querySelector(".header-form"),d=document.querySelector(".header-nav"),p=document.querySelector(".header__top-content"),f=getComputedStyle(a),n&&n.addEventListener("click",function(){a.classList.add(l),s.classList.add("header-form--active"),u.classList.add(r),i.appendChild(a),i.appendChild(s),window.onresize=function(){u.classList.contains(r)&&document.body.clientWidth>830&&(a.classList.remove(l),s.classList.remove("header-form--active"),u.classList.remove(r),d.appendChild(a),p.appendChild(s))}}),c&&c.addEventListener("click",function(){u.classList.remove(r),a.classList.remove(l),s.classList.remove("header-form--active"),f.display})},function(e,t,o){"use strict";var n,c,u,r,i,a,l,s,d,p,f,m;n=document.querySelector(".popup-layout"),c="popup-layout--active",u=document.querySelector(".popup-layout__popup-menu-close"),r=document.querySelector(".popup-layout__popup-menu"),i=document.querySelector(".header-nav__list"),a=document.querySelector(".header-form"),l=document.querySelector(".header-nav"),s=document.querySelector(".header__top-content"),d=document.querySelector(".entry__close-btn"),p=document.querySelectorAll(".header-form__btn--entry, .main__goals-status-link-entry"),f=document.querySelector(".popup-layout__entry-field"),m="popup-layout__entry-field--active",p&&p.forEach(function(e){e.addEventListener("click",function(){n.classList.contains(c)?(f.classList.add(m),u.classList.add("popup-layout__popup-menu-close--unactive"),r.removeChild(a),r.removeChild(i)):(n.classList.add(c),u.classList.add("popup-layout__popup-menu-close--unactive"),f.classList.add(m)),window.onresize=function(){f.classList.contains(m)&&document.body.clientWidth>830&&(i.classList.remove("header-nav__list--active"),a.classList.remove("header-form--active"),n.classList.add(c),l.appendChild(i),s.appendChild(a))}}),d&&d.addEventListener("click",function(){n.classList.remove(c),f.classList.remove(m)})})},function(e,t,o){"use strict";var n,c,u,r,i,a,l,s,d,p;n=document.querySelector(".popup-layout"),c=document.querySelector(".popup-layout__recovery-field"),u="popup-layout__recovery-field--active",r=document.querySelector(".recovery__close-btn"),i=document.querySelector(".entry__button-recovery"),a=document.querySelector(".popup-layout__entry-field"),l=document.querySelector(".new-pass__close-btn"),s=document.querySelector(".recovery__button"),d=document.querySelector(".popup-layout__message-pass-field"),p=document.querySelector(".popup-layout__popup-menu-close"),i&&i.addEventListener("click",function(){a.classList.remove("popup-layout__entry-field--active"),c.classList.add(u)}),r&&r.addEventListener("click",function(){n.classList.remove("popup-layout--active"),c.classList.remove(u),d.classList.add()}),s&&s.addEventListener("click",function(){c.classList.remove(u),d.classList.add("popup-layout__message-pass-field--active")}),l&&l.addEventListener("click",function(){n.classList.remove("popup-layout--active"),p.classList.add("popup-layout__popup-menu-close--unactive"),c.classList.remove(u),d.classList.remove("popup-layout__message-pass-field--active")})},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);o(0),o(1),o(2),o(3),o(4),o(5),o(6),o(7),o(8),o(9),o(10),o(11),o(12),o(13),o(14),o(15),o(16),o(17),o(18),o(19),o(20),o(21),o(22),o(23),o(24),o(25),o(26),o(27),o(28),o(29),o(30),o(31),o(32),o(33)}]);