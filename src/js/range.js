'use strict';
//функция ползунка range страницы Цели

(function () {
  var activeClass = 'range-field__item--active';
  var ItemActive = '.range-field__item--active'; 
  var rangeItems = Array.from(document.querySelectorAll('.range-field__item'));
  var BtnMinus = document.querySelector('.range-field__btn--min');
  var BtnPlus = document.querySelector('.range-field__btn--plus');
  
  var rangeItemActive;
  function getActiveItem() {
    rangeItemActive = document.querySelector(ItemActive);
  };
  
  if (BtnPlus) {
    rangeItems.forEach(function(elem) {
      elem.addEventListener( 'click', function () {
        getActiveItem();
        if (elem !== rangeItemActive) {
          elem.classList.add(activeClass);
          rangeItemActive.classList.remove(activeClass);
        } else {
          return null;
        };
      });
    });

    BtnPlus.addEventListener('click', function() {
      getActiveItem();
      if (rangeItemActive !== rangeItems[rangeItems.length-1]) {
        rangeItemActive.classList.remove(activeClass);
        rangeItemActive.nextElementSibling.classList.add(activeClass);
      } else {
        return null;
      };
    });
    
    BtnMinus.addEventListener('click', function() {
      getActiveItem();
      if (rangeItemActive !== rangeItems[0]) {
        rangeItemActive.classList.remove(activeClass);
        rangeItemActive.previousElementSibling.classList.add(activeClass);
      } else {
        return null;
      };
    });
  } else {
    return null;
  };
})();