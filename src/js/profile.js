'use strict';

(function () {
  var profile = document.querySelector('.main__profile');

  if (profile) {
    var saveTimezoneForm = document.getElementById('time-zone');
    var changePasswordForm = document.getElementById('change-password');

    //Строки ниже - исключительно в демонстрационных целях, чтобы модальное окно "данные сохранены"
    //появлялось при нажатии на кнопки "сохранить"
    if (changePasswordForm) {
      changePasswordForm.addEventListener('submit', function() {
        event.preventDefault();
        openModal('saved-modal');
      });
    }

    if (saveTimezoneForm) {
      saveTimezoneForm.addEventListener('submit', function(event) {
        event.preventDefault();
        openModal('saved-modal');
      });
    }
  }
}());
