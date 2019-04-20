'use strict';
//функция модального окна "меню" мобильной версии сайта

(function () {

  var openMobileMenu = document.querySelector('.header-nav__mobile-btn');

  var openMobileMenuStyle = getComputedStyle(openMobileMenu);

  var closeMobileMenu = document.querySelector('.popup-layout__popup-menu-close');
  var closeMobileMenuUnactive = 'popup-layout__popup-menu-close--unactive'
  var popup = document.querySelector('.popup-layout');
  var popupActive = 'popup-layout--active';
  var menuMobileGroup = document.querySelector('.popup-layout__popup-menu');
  var menu = document.querySelector('.header-nav__list');
  var menuActive = 'header-nav__list--active';
  var entryForm = document.querySelector('.header-form');
  var entryFormActive = 'header-form--active';
  var headerNav = document.querySelector('.header-nav');
  var headerTop = document.querySelector('.header__top-content');
  var menuStyle = getComputedStyle (menu);

  if (openMobileMenu) {
    openMobileMenu.addEventListener( 'click', function (){
      menu.classList.add(menuActive);
      entryForm.classList.add(entryFormActive);
      popup.classList.add(popupActive);
      menuMobileGroup.appendChild(menu);
      menuMobileGroup.appendChild(entryForm);
      closeMobileMenu.classList.remove(closeMobileMenuUnactive);

      window.onresize = function() {
        if (popup.classList.contains(popupActive) && openMobileMenuStyle.display == 'none') {
          menu.classList.remove(menuActive);
          entryForm.classList.remove(entryFormActive);
          popup.classList.remove(popupActive);
          headerNav.appendChild(menu);
          headerTop.appendChild(entryForm);
        } else if (!popup.classList.contains(popupActive) && openMobileMenuStyle.display == 'none') {
          headerNav.appendChild(menu);
          headerTop.appendChild(entryForm);
        }
      };
    });
  };

  if (closeMobileMenu) {
    closeMobileMenu.addEventListener( 'click', function (){
      popup.classList.remove(popupActive);
      menu.classList.remove(menuActive);
      entryForm.classList.remove(entryFormActive);
      menuStyle.display == 'block';
    });
  };

}());