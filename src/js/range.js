'use strict';
//функция ползунка range страницы Цели

(function () {
  var activeClass = 'range-field__item--active';
  var rangeItems = document.querySelectorAll('.range-field__item');
  var BtnMinus = document.querySelectorAll('.range-field__btn--min');
  var BtnPlus = document.querySelectorAll('.range-field__btn--plus');

  function getActiveItem(id) {
    return document.querySelector('.range-field__item--active[data-id="' + id + '"]');
  };

  if (BtnPlus) {
    Array.prototype.forEach.call(rangeItems, function (elem) {
      elem.addEventListener( 'click', function () {
        var id = elem.getAttribute('data-id');
        var rangeItemActive = getActiveItem(id);
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
        var id = elem.getAttribute('data-id');
        var rangeItemActive = getActiveItem(id);
        if (rangeItemActive.nextElementSibling) {
          rangeItemActive.classList.remove(activeClass);
          rangeItemActive.nextElementSibling.classList.add(activeClass);
        } else {
          return null;
        };
      });
    });


    Array.prototype.forEach.call(BtnMinus, function (elem) {
      elem.addEventListener('click', function() {
        var id = elem.getAttribute('data-id');
        var rangeItemActive = getActiveItem(id);
        if (rangeItemActive.previousElementSibling) {
          rangeItemActive.classList.remove(activeClass);
          rangeItemActive.previousElementSibling.classList.add(activeClass);
        } else {
          return null;
        };
      });
    });

  };
})();
