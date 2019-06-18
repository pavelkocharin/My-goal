'use strict';
//функция модального окна "данные сохранены" страницы личного кабинета, валидация формы смены пароля на заполненность полей

(function () {
  var profile = document.querySelector('.main__profile');

  if (profile) {
    var popup = document.querySelector('.popup-layout');
    var saveBtnClass = '.profile-item__form-button';
    var saveBtn = document.querySelector(saveBtnClass);
    var savedField = document.querySelector('.popup-layout__saved');
    var saveCloseBtn = document.querySelector('.saved__close-btn');
    var continueBtn = document.querySelector('.saved__button');
    var popupActive = 'popup-layout--active';
    var popupModalActive = 'popup-layout__modal-active';
    var popupCloseBtn = document.querySelector('.popup-layout__popup-menu-close');
    var popupCloseBtnUnactive = 'popup-layout__popup-menu-close--unactive';
    var formChangePass = document.querySelector('.profile-item__form-password');
    var sendFormBtn = formChangePass.querySelector('.profile-item__form-button');
    var errorText = formChangePass.querySelector('.profile-item__error-text');
    var errorTextActive = 'profile-item__error-text--active';
    var formInputs = formChangePass.querySelectorAll('.profile-item__form-input');

  
    function formIsValid () {
      Array.prototype.forEach.call(formInputs, function (elem) {
        if (elem.value == 0) {
          errorText.classList.add(errorTextActive);
          return false;
        } else if (elem.value !== 0) {
          errorText.classList.remove(errorTextActive);
        }
      });
      if (!errorText.classList.contains(errorTextActive)) {
        return true;
      };
    };

    //функция для показа модального окна Данные сохранены после валидации формы
    (function openChat () {
      sendFormBtn.addEventListener( 'click', function (event){
        if (!formIsValid()) {
          event.preventDefault();
          return;
        } else {
          popup.classList.add(popupActive);
          savedField.classList.add(popupModalActive);
          popupCloseBtn.classList.add(popupCloseBtnUnactive);
        };
        
      });

      if (saveBtn) {
        saveBtn.addEventListener( 'click', function (event){
          event.preventDefault();
          popup.classList.add(popupActive);
          savedField.classList.add(popupModalActive);
          popupCloseBtn.classList.add(popupCloseBtnUnactive);
        });
      }
      
      if (saveCloseBtn) {
        saveCloseBtn.addEventListener( 'click', function (){
          popup.classList.remove(popupActive);
          savedField.classList.remove(popupModalActive);
        });
      };
      
      if (continueBtn) {
        continueBtn.addEventListener( 'click', function (){
          popup.classList.remove(popupActive);
          savedField.classList.remove(popupModalActive);
        });
      };
    }());


    
  }
  
}());