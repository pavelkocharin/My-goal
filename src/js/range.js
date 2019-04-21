'use strict';
//функция ползунка range страницы Цели

(function () {
  var activeClass = 'range-field__item--active';
  var ItemActive = '.range-field__item--active'; 
  var rangeItems = document.querySelectorAll('.range-field__item');
  var BtnMinus = document.querySelectorAll('.range-field__btn--min');
  var BtnPlus = document.querySelectorAll('.range-field__btn--plus');
  
  var rangeItemActive;
  function getActiveItem() {
    rangeItemActive = document.querySelector('.range-field__item--active[data-id="range-day1"]');
  };
  
  if (BtnPlus) {
    Array.prototype.forEach.call(rangeItems, function (elem) {
      elem.addEventListener( 'click', function () {
        getActiveItem();
        if (elem !== rangeItemActive) {
          rangeItemActive.classList.remove(activeClass);
          elem.classList.add(activeClass);          
        } else {
          return null;
        };
      });
    });

    Array.prototype.forEach.call(BtnPlus, function (elem) {
      elem.addEventListener('click', function() {
        getActiveItem();
        if (rangeItemActive !== rangeItems[rangeItems.length-1]) {
          rangeItemActive.classList.remove(activeClass);
          rangeItemActive.nextElementSibling.classList.add(activeClass);
        } else {
          return null;
        };
      });
    })
    

    Array.prototype.forEach.call(BtnMinus, function (elem) {
      elem.addEventListener('click', function() {
        getActiveItem();
        if (rangeItemActive !== rangeItems[0]) {
          rangeItemActive.classList.remove(activeClass);
          rangeItemActive.previousElementSibling.classList.add(activeClass);
        } else {
          return null;
        };
      });
    })
    
    
  };
})();