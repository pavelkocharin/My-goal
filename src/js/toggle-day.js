'use strict';
//функция сворачивания/разворачивания дней на странице "цели"
//элементами массива регулируется показ кнопки "посмотреть" и краткого меню (день 1 - элемент 0)
(function () {
  var btnShowDay = document.querySelectorAll('.day__goal-result-show');
  var btnCloseDay = document.querySelectorAll('.day__close-btn');
  var btnCloseDayUnactive = 'day__close-btn-display-none';
  var unactive = 'unactive';
  var unactiveElDayPast = document.querySelectorAll("*[data-id='day1']");
  var unactiveElDayNow = document.querySelectorAll("*[data-id='day2']");
  var dayTableResult = document.querySelectorAll('.day-table__column--mobile-display-none');
  var dayTableResultUnactive = 'day-table__column--mobile-display-none';
  var dayTableResultFlexRow = document.querySelectorAll('.day-table__column--flex-row');

  //сворачивание при загрузке страницы прошлого и не наступившего дней
  for (let el of unactiveElDayPast) {
    el.classList.add(unactive);
  };
  //кнопку посмотреть отобразить
  if (btnShowDay[0]) {
    btnShowDay[0].classList.remove(unactive);
    // краткие итоги дня отобразить
    dayTableResultFlexRow[0].classList.remove(dayTableResultUnactive);
  }
  
  
  
  //проверка на развёрнутость дня, если развёрнутo - сворачиваем 
  Array.prototype.forEach.call(btnCloseDay, function (elem) {

    if (!elem.classList.contains(btnCloseDayUnactive)) {

      var attrBtnClose = elem.getAttribute('data-id');
      var btnShowDay = document.getElementById(attrBtnClose);

      elem.addEventListener('click', function (){

        if (attrBtnClose == 'day1-close') {
          for (let el of unactiveElDayPast) {
            el.classList.add(unactive);
            btnShowDay.classList.remove(unactive);
            dayTableResultFlexRow[0].classList.remove(dayTableResultUnactive);
          }
        } else if (attrBtnClose == 'day2-close') {
          for (let el of unactiveElDayNow) {
            el.classList.add(unactive);
            btnShowDay.classList.remove(unactive);
            dayTableResultFlexRow[1].classList.remove(dayTableResultUnactive);
          }
        }
      })
    };
  });

  //обработчик на кнопки Посмотреть для раскрытия дня
  if (btnShowDay) {
    Array.prototype.forEach.call(btnShowDay, function (elem) {

      var attrBtnShow = elem.getAttribute('id');
      elem.addEventListener( 'click', function(){

        if (attrBtnShow == 'day1-close') {
          for (let el of unactiveElDayPast) {
            el.classList.remove(unactive);
            dayTableResult[0].classList.remove(dayTableResultUnactive);
            dayTableResultFlexRow[0].classList.add(dayTableResultUnactive);
          };
        } else if (attrBtnShow == 'day2-close') {
          for (let el of unactiveElDayNow) {
            el.classList.remove(unactive);
            dayTableResult[1].classList.remove(dayTableResultUnactive);
            dayTableResultFlexRow[1].classList.add(dayTableResultUnactive);
          }
        };
        elem.classList.add(unactive);

      })
    })
  }
})();