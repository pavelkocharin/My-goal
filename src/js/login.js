'use strict';
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
  var loginBtn = document.querySelectorAll('.header-form__btn--login, .main__goals-status-link-login');
  var loginField = document.querySelector('.popup-layout__login-field');
  var loginFieldActive = 'popup-layout__login-field--active';

  if (loginBtn) {
    loginBtn.forEach(function(elem) {
      elem.addEventListener( 'click', function (){
        if (!popup.classList.contains (popupActive)) {
          popup.classList.add(popupActive);
          closeMobileMenu.classList.add(closeMobileMenuUnactive);
          loginField.classList.add(loginFieldActive);
        } else {
          loginField.classList.add(loginFieldActive);
          closeMobileMenu.classList.add(closeMobileMenuUnactive);
          menuMobileGroup.removeChild(loginForm);
          menuMobileGroup.removeChild(menu);
        };
        window.onresize = function() {
          if (loginField.classList.contains(loginFieldActive) && document.body.clientWidth > 830) {
            menu.classList.remove(menuActive);
            loginForm.classList.remove(loginFormActive);
            popup.classList.add(popupActive);
            headerNav.appendChild(menu);
            headerTop.appendChild(loginForm);
          };
        };
      });

      if (loginCloseBtn) {
        loginCloseBtn.addEventListener( 'click', function (){
          popup.classList.remove(popupActive);
          loginField.classList.remove(loginFieldActive);
        });
      };
    });
  };

}()); 