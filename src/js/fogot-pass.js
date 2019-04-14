'use strict';
//функция восстановления пароля модальные окна на кнопки "забыли пароль" и "далее"

(function () {
  var popup = document.querySelector('.popup-layout');
  var popupActive = 'popup-layout--active';
  var recoveryField = document.querySelector('.popup-layout__recovery-field');
  var recoveryFieldActive = 'popup-layout__recovery-field--active';
  var recoveryCloseBtn = document.querySelector('.recovery__close-btn');
  var recoveryBtn = document.querySelector('.entry__button-recovery');
  var entryField = document.querySelector('.popup-layout__entry-field');
  var entryFieldActive = 'popup-layout__entry-field--active';
  var newPassCloseBtn = document.querySelector('.new-pass__close-btn');
  var newPassBtn = document.querySelector('.recovery__button');
  var newPassField = document.querySelector('.popup-layout__message-pass-field');
  var newPassFieldActive = 'popup-layout__message-pass-field--active';
  var closeMobileMenu = document.querySelector('.popup-layout__popup-menu-close');
  var closeMobileMenuUnactive = 'popup-layout__popup-menu-close--unactive';

  if (recoveryBtn) {
    recoveryBtn.addEventListener( 'click', function (){
      entryField.classList.remove(entryFieldActive);
      recoveryField.classList.add(recoveryFieldActive);
    });
  };

  if (recoveryCloseBtn) {
    recoveryCloseBtn.addEventListener( 'click', function (){
      popup.classList.remove(popupActive);
      recoveryField.classList.remove(recoveryFieldActive);
      newPassField.classList.add()
    });
  };

  if (newPassBtn) {
    newPassBtn.addEventListener( 'click', function (){
      recoveryField.classList.remove(recoveryFieldActive);
      newPassField.classList.add(newPassFieldActive);
    });
  };

  if (newPassCloseBtn) {
    newPassCloseBtn.addEventListener( 'click', function (){
      popup.classList.remove(popupActive);
      closeMobileMenu.classList.add(closeMobileMenuUnactive);
      recoveryField.classList.remove(recoveryFieldActive);
      newPassField.classList.remove(newPassFieldActive);
    });
  };

})();