"use strict";
//функция ползунка range страницы Цели

(function () {
  var activeClass = 'day__info-range-item--active';
  var ItemActive = '.day__info-range-item--active'; 
  var rangeItems = Array.from(document.querySelectorAll('.day__info-range-item'));
  var BtnMinus = document.querySelector('.day__info-range-btn--min');
  var BtnPlus = document.querySelector('.day__info-range-btn--plus');
  
  var rangeItemActive;
  function getActiveItem() {
    rangeItemActive = document.querySelector(ItemActive);
  }
  
  if (BtnPlus) {

    rangeItems.forEach(function(elem) {
      elem.addEventListener( 'click', function () {
        getActiveItem();
        if (elem !== rangeItemActive) {
          elem.classList.add(activeClass);
          rangeItemActive.classList.remove(activeClass);
        } else {
          return null;
        }
      })
    });

    BtnPlus.addEventListener('click', function() {
      getActiveItem();
      if (rangeItemActive !== rangeItems[rangeItems.length-1]) {
        rangeItemActive.classList.remove(activeClass);
        rangeItemActive.nextElementSibling.classList.add(activeClass);
      } else {
        return null;
      }
    });
    
    BtnMinus.addEventListener('click', function() {
      getActiveItem();
      if (rangeItemActive !== rangeItems[0]) {
        rangeItemActive.classList.remove(activeClass);
        rangeItemActive.previousElementSibling.classList.add(activeClass);
      } else {
        return null;
      }
    });
  } else {
    return null;
  }
})();