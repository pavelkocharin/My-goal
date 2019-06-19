'use strict';
//функция отслеживания Checkbox для подкрашивания целей и подсчёта выполненных (подкрашенных) целей
(function () {
  var goals = document.querySelector('.goals');
  var tableColumn = document.querySelectorAll('.day-table__column');
  var tableSuccess = 'day-table__column--success';
  var checkboxClass = '.goal-list__item-checkbox';

  if (goals) {
    //функция мониторинга состояния колонок (при первой загрузке и клике)
    var firstCheckDay = function(){
      Array.prototype.forEach.call(tableColumn, function (elem) {
        var tableCheckboxes = elem.querySelectorAll(checkboxClass);

        Array.prototype.forEach.call(tableCheckboxes, function (el) {
          if (el.hasAttribute('checked')) {
            elem.classList.add(tableSuccess);
          } else if (!elem.querySelector('.goal-list__item-checkbox[checked]')) {
            elem.classList.remove(tableSuccess);
          };
        });
      });
    };

    //выставление в результатах количества выполненных целей (не знаю нужна ли или на сервере, на всякий)
    var allDays = document.querySelectorAll('.day');
    var tableColumnSuccessClass = '.day-table__column--success';
    var goalNumberSuccessClass = '.day__goal-result-short--success';

    var checkGoalsSuccess = function(){
      Array.prototype.forEach.call(allDays, function (day) {
        var goalColumnSuccess = day.querySelectorAll(tableColumnSuccessClass);
        var goalNumberSuccess = day.querySelectorAll(goalNumberSuccessClass);

        Array.prototype.forEach.call(goalNumberSuccess, function (element) {
          var daySuccess = goalColumnSuccess.length;
          element.innerHTML = daySuccess;
        });
      });
    };

    //запуск первого мониторинга
    firstCheckDay();
    //проверка количества выполненных целей
    checkGoalsSuccess();

    //обработчик на клик чекбокса (по атрибуту)
    Array.prototype.forEach.call(tableColumn, function (elem) {
      var tableCheckboxes = elem.querySelectorAll(checkboxClass);

      Array.prototype.forEach.call(tableCheckboxes, function (el) {
        el.addEventListener('click', function(){
          if (!el.hasAttribute('checked')){
            el.setAttribute('checked', '');
          } else {
            el.removeAttribute('checked');
          }
          firstCheckDay();
          checkGoalsSuccess();
        });
      });
    });
  };
})();
