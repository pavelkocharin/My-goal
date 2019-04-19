/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //функция ползунка range страницы Цели

(function () {
  var activeClass = 'range-field__item--active';
  var ItemActive = '.range-field__item--active';
  var rangeItems = document.querySelectorAll('.range-field__item');
  var BtnMinus = document.querySelector('.range-field__btn--min');
  var BtnPlus = document.querySelector('.range-field__btn--plus');
  var rangeItemActive;

  function getActiveItem() {
    rangeItemActive = document.querySelector(ItemActive);
  }

  ;

  if (BtnPlus) {
    Array.prototype.forEach.call(rangeItems, function (elem) {
      elem.addEventListener('click', function () {
        getActiveItem();

        if (elem !== rangeItemActive) {
          elem.classList.add(activeClass);
          rangeItemActive.classList.remove(activeClass);
        } else {
          return null;
        }

        ;
      });
    });
    BtnPlus.addEventListener('click', function () {
      getActiveItem();

      if (rangeItemActive !== rangeItems[rangeItems.length - 1]) {
        rangeItemActive.classList.remove(activeClass);
        rangeItemActive.nextElementSibling.classList.add(activeClass);
      } else {
        return null;
      }

      ;
    });
    BtnMinus.addEventListener('click', function () {
      getActiveItem();

      if (rangeItemActive !== rangeItems[0]) {
        rangeItemActive.classList.remove(activeClass);
        rangeItemActive.previousElementSibling.classList.add(activeClass);
      } else {
        return null;
      }

      ;
    });
  }

  ;
})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //функция модального окна "данные сохранены" страницы личного кабинета

(function () {
  var popup = document.querySelector('.popup-layout');
  var saveBtnClass = '.profile-item__form-button';
  var saveBtn = document.querySelectorAll(saveBtnClass);
  var savedField = document.querySelector('.popup-layout__saved');
  var saveCloseBtn = document.querySelector('.saved__close-btn');
  var continueBtn = document.querySelector('.saved__button');
  var popupActive = 'popup-layout--active';
  var popupSavedActive = 'popup-layout__saved--active';

  if (saveBtn) {
    Array.prototype.forEach.call(saveBtn, function (elem) {
      elem.addEventListener('click', function (event) {
        event.preventDefault();
        popup.classList.add(popupActive);
        savedField.classList.add(popupSavedActive);
      });
    });
  }

  ;

  if (saveCloseBtn) {
    saveCloseBtn.addEventListener('click', function () {
      popup.classList.remove(popupActive);
      savedField.classList.remove(popupSavedActive);
    });
  }

  ;

  if (continueBtn) {
    continueBtn.addEventListener('click', function () {
      location.href = 'profile.html';
    });
  }

  ;
})();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //функция модального окна "регистрация"

(function () {
  var popup = document.querySelector('.popup-layout');
  var popupActive = 'popup-layout--active';
  var registrationFieldActive = 'popup-layout__registration-field--active';
  var registrationCloseBtn = document.querySelector('.registration__close-btn');
  var registrationBtn = document.querySelectorAll('.header-form__btn--reg, .main__goals-status-link-reg');
  var registrationField = document.querySelector('.popup-layout__registration-field');
  var closeMobileMenu = document.querySelector('.popup-layout__popup-menu-close');
  var closeMobileMenuUnactive = 'popup-layout__popup-menu-close--unactive';
  var menuMobileGroup = document.querySelector('.popup-layout__popup-menu');
  var menu = document.querySelector('.header-nav__list');
  var menuActive = 'header-nav__list--active';
  var entryForm = document.querySelector('.header-form');
  var entryFormActive = 'header-form--active';
  var headerNav = document.querySelector('.header-nav');
  var headerTop = document.querySelector('.header__top-content');

  if (registrationBtn) {
    Array.prototype.forEach.call(registrationBtn, function (elem) {
      elem.addEventListener('click', function () {
        if (!popup.classList.contains(popupActive)) {
          popup.classList.add(popupActive);
          closeMobileMenu.classList.add(closeMobileMenuUnactive);
          registrationField.classList.add(registrationFieldActive);
        } else {
          registrationField.classList.add(registrationFieldActive);
          closeMobileMenu.classList.add(closeMobileMenuUnactive);
          menuMobileGroup.removeChild(entryForm);
          menuMobileGroup.removeChild(menu);
        }

        ;

        window.onresize = function () {
          if (registrationField.classList.contains(registrationFieldActive) && document.body.clientWidth > 830) {
            menu.classList.remove(menuActive);
            entryForm.classList.remove(entryFormActive);
            popup.classList.add(popupActive);
            headerNav.appendChild(menu);
            headerTop.appendChild(entryForm);
          }

          ;
        };
      });

      if (registrationCloseBtn) {
        registrationCloseBtn.addEventListener('click', function () {
          popup.classList.remove(popupActive);
          registrationField.classList.remove(registrationFieldActive);
        });
      }

      ;
    });
  }

  ;
})();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //функция модального окна "меню" мобильной версии сайта

(function () {
  var openMobileMenu = document.querySelector('.header-nav__mobile-btn');
  var closeMobileMenu = document.querySelector('.popup-layout__popup-menu-close');
  var popup = document.querySelector('.popup-layout');
  var popupActive = 'popup-layout--active';
  var menuMobileGroup = document.querySelector('.popup-layout__popup-menu');
  var menu = document.querySelector('.header-nav__list');
  var menuActive = 'header-nav__list--active';
  var entryForm = document.querySelector('.header-form');
  var entryFormActive = 'header-form--active';
  var headerNav = document.querySelector('.header-nav');
  var headerTop = document.querySelector('.header__top-content');
  var menuStyle = getComputedStyle(menu);

  if (openMobileMenu) {
    openMobileMenu.addEventListener('click', function () {
      menu.classList.add(menuActive);
      entryForm.classList.add(entryFormActive);
      popup.classList.add(popupActive);
      menuMobileGroup.appendChild(menu);
      menuMobileGroup.appendChild(entryForm);

      window.onresize = function () {
        if (popup.classList.contains(popupActive) && document.body.clientWidth > 830) {
          menu.classList.remove(menuActive);
          entryForm.classList.remove(entryFormActive);
          popup.classList.remove(popupActive);
          headerNav.appendChild(menu);
          headerTop.appendChild(entryForm);
        } else if (!popup.classList.contains(popupActive) && document.body.clientWidth > 830) {
          headerNav.appendChild(menu);
          headerTop.appendChild(entryForm);
        }

        ;
      };
    });
  }

  ;

  if (closeMobileMenu) {
    closeMobileMenu.addEventListener('click', function () {
      popup.classList.remove(popupActive);
      menu.classList.remove(menuActive);
      entryForm.classList.remove(entryFormActive);
      menuStyle.display == "block";
    });
  }

  ;
})();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //функция модального окна "вход"

(function () {
  var popup = document.querySelector('.popup-layout');
  var popupActive = 'popup-layout--active';
  var closeMobileMenu = document.querySelector('.popup-layout__popup-menu-close');
  var closeMobileMenuUnactive = 'popup-layout__popup-menu-close--unactive';
  var menuMobileGroup = document.querySelector('.popup-layout__popup-menu');
  var menu = document.querySelector('.header-nav__list');
  var menuActive = 'header-nav__list--active';
  var loginForm = document.querySelector('.header-form');
  var loginFormActive = 'header-form--active';
  var headerNav = document.querySelector('.header-nav');
  var headerTop = document.querySelector('.header__top-content');
  var loginCloseBtn = document.querySelector('.login__close-btn');
  var loginBtn = document.querySelectorAll('.header-form__btn--login, .main__goals-status-link--login');
  var loginField = document.querySelector('.popup-layout__login-field');
  var loginFieldActive = 'popup-layout__login-field--active';

  if (loginBtn) {
    Array.prototype.forEach.call(loginBtn, function (elem) {
      elem.addEventListener('click', function () {
        if (!popup.classList.contains(popupActive)) {
          popup.classList.add(popupActive);
          closeMobileMenu.classList.add(closeMobileMenuUnactive);
          loginField.classList.add(loginFieldActive);
        } else {
          loginField.classList.add(loginFieldActive);
          closeMobileMenu.classList.add(closeMobileMenuUnactive);
          menuMobileGroup.removeChild(loginForm);
          menuMobileGroup.removeChild(menu);
        }

        ;

        window.onresize = function () {
          if (loginField.classList.contains(loginFieldActive) && document.body.clientWidth > 830) {
            menu.classList.remove(menuActive);
            loginForm.classList.remove(loginFormActive);
            popup.classList.add(popupActive);
            headerNav.appendChild(menu);
            headerTop.appendChild(loginForm);
          }

          ;
        };
      });

      if (loginCloseBtn) {
        loginCloseBtn.addEventListener('click', function () {
          popup.classList.remove(popupActive);
          loginField.classList.remove(loginFieldActive);
        });
      }

      ;
    });
  }

  ;
})();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //функция восстановления пароля модальные окна на кнопки "забыли пароль" и "далее"

(function () {
  var popup = document.querySelector('.popup-layout');
  var popupActive = 'popup-layout--active';
  var recoveryField = document.querySelector('.popup-layout__recovery-field');
  var recoveryFieldActive = 'popup-layout__recovery-field--active';
  var recoveryCloseBtn = document.querySelector('.recovery__close-btn');
  var recoveryBtn = document.querySelector('.login__button-recovery');
  var loginField = document.querySelector('.popup-layout__login-field');
  var loginFieldActive = 'popup-layout__login-field--active';
  var newPassCloseBtn = document.querySelector('.new-pass__close-btn');
  var newPassBtn = document.querySelector('.recovery__button');
  var newPassField = document.querySelector('.popup-layout__message-pass-field');
  var newPassFieldActive = 'popup-layout__message-pass-field--active';
  var closeMobileMenu = document.querySelector('.popup-layout__popup-menu-close');
  var closeMobileMenuUnactive = 'popup-layout__popup-menu-close--unactive';

  if (recoveryBtn) {
    recoveryBtn.addEventListener('click', function () {
      loginField.classList.remove(loginFieldActive);
      recoveryField.classList.add(recoveryFieldActive);
    });
  }

  ;

  if (recoveryCloseBtn) {
    recoveryCloseBtn.addEventListener('click', function () {
      popup.classList.remove(popupActive);
      recoveryField.classList.remove(recoveryFieldActive);
      newPassField.classList.add();
    });
  }

  ;

  if (newPassBtn) {
    newPassBtn.addEventListener('click', function () {
      recoveryField.classList.remove(recoveryFieldActive);
      newPassField.classList.add(newPassFieldActive);
    });
  }

  ;

  if (newPassCloseBtn) {
    newPassCloseBtn.addEventListener('click', function () {
      popup.classList.remove(popupActive);
      closeMobileMenu.classList.add(closeMobileMenuUnactive);
      recoveryField.classList.remove(recoveryFieldActive);
      newPassField.classList.remove(newPassFieldActive);
    });
  }

  ;
})();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/js/range.js
var range = __webpack_require__(0);

// EXTERNAL MODULE: ./src/js/modal-saved.js
var modal_saved = __webpack_require__(1);

// EXTERNAL MODULE: ./src/js/registration.js
var registration = __webpack_require__(2);

// EXTERNAL MODULE: ./src/js/mobile-menu.js
var mobile_menu = __webpack_require__(3);

// EXTERNAL MODULE: ./src/js/login.js
var login = __webpack_require__(4);

// EXTERNAL MODULE: ./src/js/fogot-pass.js
var fogot_pass = __webpack_require__(5);

// CONCATENATED MODULE: ./src/js/index.js






// EXTERNAL MODULE: ./src/scss/body-page.scss
var body_page = __webpack_require__(6);

// EXTERNAL MODULE: ./src/scss/header.scss
var header = __webpack_require__(7);

// EXTERNAL MODULE: ./src/scss/header-logo.scss
var header_logo = __webpack_require__(8);

// EXTERNAL MODULE: ./src/scss/header-nav.scss
var header_nav = __webpack_require__(9);

// EXTERNAL MODULE: ./src/scss/header-form.scss
var header_form = __webpack_require__(10);

// EXTERNAL MODULE: ./src/scss/intro.scss
var intro = __webpack_require__(11);

// EXTERNAL MODULE: ./src/scss/main.scss
var main = __webpack_require__(12);

// EXTERNAL MODULE: ./src/scss/about-site.scss
var about_site = __webpack_require__(13);

// EXTERNAL MODULE: ./src/scss/about-author.scss
var about_author = __webpack_require__(14);

// EXTERNAL MODULE: ./src/scss/news-block.scss
var news_block = __webpack_require__(15);

// EXTERNAL MODULE: ./src/scss/questions.scss
var questions = __webpack_require__(16);

// EXTERNAL MODULE: ./src/scss/footer.scss
var footer = __webpack_require__(17);

// EXTERNAL MODULE: ./src/scss/button-block.scss
var button_block = __webpack_require__(18);

// EXTERNAL MODULE: ./src/scss/popup-layout.scss
var popup_layout = __webpack_require__(19);

// EXTERNAL MODULE: ./src/scss/registration.scss
var scss_registration = __webpack_require__(20);

// EXTERNAL MODULE: ./src/scss/login.scss
var scss_login = __webpack_require__(21);

// EXTERNAL MODULE: ./src/scss/recovery.scss
var recovery = __webpack_require__(22);

// EXTERNAL MODULE: ./src/scss/success.scss
var success = __webpack_require__(23);

// EXTERNAL MODULE: ./src/scss/new-pass.scss
var new_pass = __webpack_require__(24);

// EXTERNAL MODULE: ./src/scss/profile-item.scss
var profile_item = __webpack_require__(25);

// EXTERNAL MODULE: ./src/scss/payment.scss
var payment = __webpack_require__(26);

// EXTERNAL MODULE: ./src/scss/goals.scss
var goals = __webpack_require__(27);

// EXTERNAL MODULE: ./src/scss/day.scss
var day = __webpack_require__(28);

// EXTERNAL MODULE: ./src/scss/saved.scss
var saved = __webpack_require__(29);

// EXTERNAL MODULE: ./src/scss/promo.scss
var promo = __webpack_require__(30);

// EXTERNAL MODULE: ./src/scss/range-field.scss
var range_field = __webpack_require__(31);

// EXTERNAL MODULE: ./src/scss/day-info.scss
var day_info = __webpack_require__(32);

// EXTERNAL MODULE: ./src/scss/day-table.scss
var day_table = __webpack_require__(33);

// EXTERNAL MODULE: ./src/scss/about-goal-short.scss
var about_goal_short = __webpack_require__(34);

// EXTERNAL MODULE: ./src/scss/form.scss
var scss_form = __webpack_require__(35);

// EXTERNAL MODULE: ./src/scss/form-button.scss
var form_button = __webpack_require__(36);

// EXTERNAL MODULE: ./src/scss/score.scss
var score = __webpack_require__(37);

// EXTERNAL MODULE: ./src/scss/day-date.scss
var day_date = __webpack_require__(38);

// EXTERNAL MODULE: ./src/scss/part-result.scss
var part_result = __webpack_require__(39);

// EXTERNAL MODULE: ./src/scss/goal-list.scss
var goal_list = __webpack_require__(40);

// EXTERNAL MODULE: ./src/scss/variables.scss
var variables = __webpack_require__(41);

// EXTERNAL MODULE: ./src/scss/fonts.scss
var fonts = __webpack_require__(42);

// CONCATENATED MODULE: ./src/index.js
// JS - ./js/index.js
 // SCSS







































/***/ })
/******/ ]);