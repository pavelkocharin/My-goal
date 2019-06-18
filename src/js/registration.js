'use strict';
//функция модального окна "регистрация"

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
  var openModalButtons = document.querySelectorAll('.open-modal');
  var modalActiveClass = 'popup-layout__modal-active';
  var closeModalButtons = document.querySelectorAll('.close-modal');

  openModalButtons.forEach(function(button){
    button.addEventListener('click', function(){
      var id = button.getAttribute('data-id');
      var modalWindow = document.getElementById(id);
      openModal(id);
      
      function openModal (id) {

        var openedModale = document.querySelectorAll('.popup-layout__modal-active');
        if (!popup.classList.contains(popupActive)) {
          popup.classList.add(popupActive);
          closeMobileMenu.classList.add(closeMobileMenuUnactive);
          modalWindow.classList.add(modalActiveClass);

        } else if (openedModale) {
          
          openedModale.forEach(function(el){
            el.classList.remove(modalActiveClass);

          });

          modalWindow.classList.add(modalActiveClass);
          closeMobileMenu.classList.add(closeMobileMenuUnactive);

          if (menuMobileGroup.firstElementChild) {
            menuMobileGroup.removeChild(entryForm);
            menuMobileGroup.removeChild(menu);
          }
        };

        window.onresize = function() {
          if (modalWindow.classList.contains(modalActiveClass) && document.body.clientWidth > 830) {
            menu.classList.remove(menuActive);
            entryForm.classList.remove(entryFormActive);
            popup.classList.add(popupActive);
            headerNav.appendChild(menu);
            headerTop.appendChild(entryForm);
          };
        };
      };
    })
  });


  closeModalButtons.forEach(function(button){
    button.addEventListener('click', function(){
      closeModal();
    });

    function closeModal() {
      var modalActiveClass = '.popup-layout__modal-active';
      var modalWindow = document.querySelectorAll(modalActiveClass);

      popup.classList.remove(popupActive);
      modalWindow.forEach(function(elem){
          elem.classList.remove('popup-layout__modal-active');
      });
    }
  });
}()); 