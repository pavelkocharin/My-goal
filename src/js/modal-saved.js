'use strict';
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
      elem.addEventListener( 'click', function (event){
        event.preventDefault();
        popup.classList.add(popupActive);
        savedField.classList.add(popupSavedActive);
      });
    });
  };
  
  if (saveCloseBtn) {
    saveCloseBtn.addEventListener( 'click', function (){
      popup.classList.remove(popupActive);
      savedField.classList.remove(popupSavedActive);
    });
  };
  
  if (continueBtn) {
    continueBtn.addEventListener( 'click', function (){
      location.href='profile.html';
    });
  };
  
}());