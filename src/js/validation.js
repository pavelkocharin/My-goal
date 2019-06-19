'use strict';

//функция валидации полей форм (на предмет заполнения полей)
(function () {
  var btnFormsValidate = makeArray(document.querySelectorAll('.js-validate-form'));

  btnFormsValidate.forEach(validateFormListener);

  function validateAllRequiredFields(form) {
    var inputs = makeArray(form.querySelectorAll('.js-is-required'));
    var hasErrors = inputs.some(function(field){
      return field.value.trim().length === 0;
    });

    var errorMessage = form.querySelector('.js-error-all-fields-are-required');

    if (errorMessage) {
      errorMessage.style.display = hasErrors ? 'block' : 'none';
    }

    return !hasErrors;
  }

  function validateFormListener(button) {
    button.addEventListener('click', function(event){
      var form = button.form;
      var isValid = validateAllRequiredFields(form);

      if (!isValid) {
        event.preventDefault();
      }
    });
  }
}());
