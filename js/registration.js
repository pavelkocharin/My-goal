'use strict';
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
      elem.addEventListener( 'click', function (){
        if (!popup.classList.contains(popupActive)) {
          popup.classList.add(popupActive);
          closeMobileMenu.classList.add(closeMobileMenuUnactive);
          registrationField.classList.add(registrationFieldActive);
        } else {
          registrationField.classList.add(registrationFieldActive);
          closeMobileMenu.classList.add(closeMobileMenuUnactive);
          menuMobileGroup.removeChild(entryForm);
          menuMobileGroup.removeChild(menu);
        };

        window.onresize = function() {
          if (registrationField.classList.contains(registrationFieldActive) && document.body.clientWidth > 830) {
            menu.classList.remove(menuActive);
            entryForm.classList.remove(entryFormActive);
            popup.classList.add(popupActive);
            headerNav.appendChild(menu);
            headerTop.appendChild(entryForm);
          };
        };
      });

      if (registrationCloseBtn) {
        registrationCloseBtn.addEventListener( 'click', function (){
          popup.classList.remove(popupActive);
          registrationField.classList.remove(registrationFieldActive);
        });
      };
    });
  };

}()); 