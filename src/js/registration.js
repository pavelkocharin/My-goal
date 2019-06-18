'use strict';
//функция модальных окон

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
var openedModal = document.querySelectorAll('.popup-layout__modal-active');

Array.prototype.forEach.call(openModalButtons, (function(button){
  button.addEventListener('click', function(){
    var id = button.getAttribute('data-id');
    openModal(id);
  })
}));

function openModal (ident) {
  var modalWindow = document.getElementById(ident);
  var openedModal = document.querySelectorAll('.popup-layout__modal-active');
      
  if (!popup.classList.contains(popupActive)) {
    popup.classList.add(popupActive);
    closeMobileMenu.classList.add(closeMobileMenuUnactive);
    modalWindow.classList.add(modalActiveClass);

  } else if (openedModal) {
    Array.prototype.forEach.call(openedModal, (function(elem){
      elem.classList.remove(modalActiveClass);
    }));

    modalWindow.classList.add(modalActiveClass);
    closeMobileMenu.classList.add(closeMobileMenuUnactive);

    if (menuMobileGroup.firstElementChild) {
      menuMobileGroup.removeChild(entryForm);
      menuMobileGroup.removeChild(menu);
    };
  };
};

window.onresize = function updateOnresizeListener () {
  if (popup.classList.contains(popupActive) && document.body.clientWidth > 830) {
    menu.classList.remove(menuActive);
    entryForm.classList.remove(entryFormActive);
    popup.classList.add(popupActive);
    headerNav.appendChild(menu);
    headerTop.appendChild(entryForm);
  };
};

Array.prototype.forEach.call(closeModalButtons, function(button){
  button.addEventListener('click', function(){
    closeModal();
  });
});

function closeModal() {
  var modalActiveClass = '.popup-layout__modal-active';
  var modalWindow = document.querySelectorAll(modalActiveClass);

  popup.classList.remove(popupActive);
  Array.prototype.forEach.call(modalWindow, (function(elem){
      elem.classList.remove('popup-layout__modal-active');
  }));
};                     


//функция валидации полей форм (на предмет заполнения полей)
(function () {
var btnFormsValidate = document.querySelectorAll('.registration__button, .login__button, .recovery__button');
var errorTextMess = document.querySelectorAll('.profile-item__error-text-validate');
var errorTextMessActive = 'profile-item__error-text-validate--active';


  Array.prototype.forEach.call(btnFormsValidate, (function(buttonValidate){
    buttonValidate.addEventListener('click', function(event){
      event.preventDefault();
      var idVal = buttonValidate.getAttribute('data-id');
      validateForm();
      
      function validateForm (idVal) {
        var idVal = buttonValidate.getAttribute('data-id');
        var formInputsValidate = document.getElementsByClassName("" + idVal + "");
        
        Array.prototype.forEach.call(formInputsValidate, function (elem) {
          if (elem.value == 0) {
            Array.prototype.forEach.call(errorTextMess, function (el) {
              if (el.classList.contains("" + idVal + "")) {
                el.classList.add(errorTextMessActive);
              };
            });
            return false;
          } else if (elem.value !== 0) {
          return true;
          }
        });
      
      };
    })
  }));


}());