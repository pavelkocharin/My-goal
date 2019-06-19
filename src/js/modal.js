'use strict';

(function(window) {
  //функция модальных окон
  var overlay = document.querySelector('.popup-layout');
  var overlayActiveClass = 'popup-layout--active';
  var entryForm = document.querySelector('.header-form');
  var entryFormActive = 'header-form--active';
  var headerNav = document.querySelector('.header-nav');
  var headerTop = document.querySelector('.header__top-content');
  var openModalButtons = document.querySelectorAll('.open-modal');
  var menu = document.querySelector('.header-nav__list');
  var menuActive = 'header-nav__list--active';
  var modalActiveClass = 'popup-layout__modal-active';
  var closeModalButtons = document.querySelectorAll('.close-modal');

  makeArray(openModalButtons)
    .forEach(openModalButtonListener);

  makeArray(closeModalButtons)
    .forEach(closeModalButtonListener);

  function closeMobileMenu() {
    var closeMobileMenu = document.querySelector('.popup-layout__popup-menu-close');
    var closeMobileMenuUnactive = 'popup-layout__popup-menu-close--unactive';
    var menuMobileGroup = document.querySelector('.popup-layout__popup-menu');

    closeMobileMenu.classList.add(closeMobileMenuUnactive);

    if (menuMobileGroup.firstElementChild) {
      menuMobileGroup.removeChild(entryForm);
      menuMobileGroup.removeChild(menu);
    };
  }

  function closeAllModals() {
    var activeModals = getActiveModals();

    activeModals.forEach(function(modal) {
      var id = modal.getAttribute('id');

      closeModal(id);
    });
  }

  function closeModal(id) {
    var activeModal = getModalById(id);

    if (activeModal) {
      activeModal.classList.remove(modalActiveClass);
    }

    if (getActiveModals().length === 0) {
      overlay.classList.remove(overlayActiveClass);
    }
  }

  function closeModalButtonListener(button) {
    button.addEventListener('click', function(){
      var id = getModalIdByCloseButton(button);

      closeModal(id);
    });
  }

  function getActiveModals() {
    return makeArray(document.querySelectorAll('.' + modalActiveClass));
  }

  function getModalById(id) {
    return document.getElementById(id);
  }

  function getModalIdByCloseButton(button) {
    var result = button.parentNode;
    var id = null;

    while (result.parentNode && !id) {
      id = result.getAttribute('id');
      result = result.parentNode;
    }

    return id;
  }

  function makeArray(list) {
    return Array.prototype.slice.call(list);
  }

  function openModal(id) {
    var modal = getModalById(id);

    overlay.classList.add(overlayActiveClass);
    modal.classList.add(modalActiveClass);
    closeMobileMenu();
  };

  function openModalButtonListener(button) {
    button.addEventListener('click', function(){
      var id = button.getAttribute('data-id');
      openModal(id);
    });
  }

  window.onresize = function updateOnresizeListener () {
    if (overlay.classList.contains(overlayActiveClass) && document.body.clientWidth > 830) {
      menu.classList.remove(menuActive);
      entryForm.classList.remove(entryFormActive);
      overlay.classList.add(overlayActiveClass);
      headerNav.appendChild(menu);
      headerTop.appendChild(entryForm);
    };
  };

  window.closeModal = closeModal;
  window.closeAllModals = closeAllModals;
  window.makeArray = makeArray;
  window.openModal = openModal;
}(window));
