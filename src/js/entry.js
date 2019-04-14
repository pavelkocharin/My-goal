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
  var entryForm = document.querySelector('.header-form');
  var entryFormActive = 'header-form--active';
  var headerNav = document.querySelector('.header-nav');
  var headerTop = document.querySelector('.header__top-content');
  var entryCloseBtn = document.querySelector('.entry__close-btn');
  var entryBtn = document.querySelectorAll('.header-form__btn--entry, .main__goals-status-link-entry');
  var entryField = document.querySelector('.popup-layout__entry-field');
  var entryFieldActive = 'popup-layout__entry-field--active';

  if (entryBtn) {
    entryBtn.forEach(function(elem) {
      elem.addEventListener( 'click', function (){
        if (!popup.classList.contains (popupActive)) {
          popup.classList.add(popupActive);
          closeMobileMenu.classList.add(closeMobileMenuUnactive);
          entryField.classList.add(entryFieldActive);
        } else {
          entryField.classList.add(entryFieldActive);
          closeMobileMenu.classList.add(closeMobileMenuUnactive);
          menuMobileGroup.removeChild(entryForm);
          menuMobileGroup.removeChild(menu);
        };
        window.onresize = function() {
          if (entryField.classList.contains(entryFieldActive) && document.body.clientWidth > 830) {
            menu.classList.remove(menuActive);
            entryForm.classList.remove(entryFormActive);
            popup.classList.add(popupActive);
            headerNav.appendChild(menu);
            headerTop.appendChild(entryForm);
          };
        };
      });

      if (entryCloseBtn) {
        entryCloseBtn.addEventListener( 'click', function (){
          popup.classList.remove(popupActive);
          entryField.classList.remove(entryFieldActive);
        });
      };
    });
  };

}()); 