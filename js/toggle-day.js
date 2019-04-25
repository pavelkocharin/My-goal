'use strict';
//функция сворачивания/разворачивания дней на странице "цели"
(function () {

  var goals = document.querySelector('.goals');
  
  if (goals) {
    goals.addEventListener('click', function(event){
      var dayId = event.target.getAttribute('data-toggle');
      
      if (dayId) {
        var day = document.querySelector('.day[data-id="' + dayId + '"]');
  
        if (day) {
          day.classList.toggle('day--open');
          day.scrollIntoView();
        }
      }
    });
  };

})();