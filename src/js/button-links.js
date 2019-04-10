"use strict";
//функция перехода по кнопкам на страницы

(function () {
  //переход по кнопке "Стать участником" c главной страницы на страницу Цели, а также с окна входа по кнопке "войти"
  var goalsLinks = Array.from(document.querySelectorAll('.button-block__reg, .entry__button'));

  if (goalsLinks) {
    goalsLinks.forEach(function(elem) {
      elem.addEventListener( 'click', function (){
        location.href='goals.html';
      })
    })
  };

  //переход по кнопке "Профиль" на страницу личного кабинета
  var profileLink = document.querySelector('.header-form__btn--profile');

  if (profileLink) {
    profileLink.addEventListener( 'click', function (){
      location.href='profile.html';
    })
  };

  //переход по кнопке "Перейти на сайт" модального окна восстановления пароля на главную страницу
  var indexLink = document.querySelector('.new-pass__button-index');

  if (indexLink) {
    indexLink.addEventListener( 'click', function (){
      location.href='index.html';
    })
  };

  //переход по кнопке "пополнить баланс" личного кабинета на страницу оплаты
  var paymentLink = document.querySelector('.profile-item__button');

  if (paymentLink) {
    paymentLink.addEventListener( 'click', function (){
      location.href='payment.html';
    })
  };

  //переход по кнопке "продолжить" окна регистрации на страницу "добро пожаловать"
  var wellcomeLink = document.querySelector('.registration__button');

  if (wellcomeLink) {
    wellcomeLink.addEventListener( 'click', function (event){
      event.preventDefault();
      location.href='wellcome.html';
    })
  };

}());