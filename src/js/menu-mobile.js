window.onload = function() {
  var openMobileMenu = document.querySelector(".header-nav__mobile-btn");
  var closeMobileMenu = document.querySelector(".popup-layout__popup-menu-close");
  var popup = document.querySelector(".popup-layout");
  var menuMobileGroup = document.querySelector(".popup-layout__popup-menu");
  var popupStyle = getComputedStyle (popup);
  var menu = document.querySelector(".header-nav__list");
  var entryForm = document.querySelector(".header-form");
  var headerNav = document.querySelector(".header-nav");
  var headerTop = document.querySelector(".header__top-content");
  var menuStyle = getComputedStyle (menu);
    
  openMobileMenu.onclick = function() {

    if (popupStyle.display == "none") {
      menu.classList.add("header-nav__list--active");
      entryForm.classList.add("header-form--active");
      popup.classList.add("popup-layout--active");
      menuMobileGroup.appendChild(menu);
      menuMobileGroup.appendChild(entryForm);

      window.onresize = function() {
        if (popup.classList.contains("popup-layout--active") && document.body.clientWidth > 830) {
          menu.classList.remove("header-nav__list--active");
          entryForm.classList.remove("header-form--active");
          popup.classList.remove("popup-layout--active");
          headerNav.appendChild(menu);
          headerTop.appendChild(entryForm);
        }
      }

    } else {
      return null;
    }
  }

  closeMobileMenu.onclick = function() {
    if (popupStyle.display == "block") {
      popup.classList.remove("popup-layout--active");
      menu.classList.remove("header-nav__list--active");
      entryForm.classList.remove("header-form--active");
      menuStyle.display == "block";
    } else {
      return null;
    }
  }

  //окно регистрации (кнопка Регистрация)
  var closeModalBtn = document.querySelector(".registration__close-btn");
  var registrationBtn = document.querySelector(".header-form__btn--reg");
  var registrationField = document.querySelector(".popup-layout__registration-field");

  //проверка на выполненный вход
  if (registrationBtn) {

    registrationBtn.onclick = function() {
    if (popup.classList.contains("popup-layout--active") == false) {
      popup.classList.add("popup-layout--active");
      closeMobileMenu.classList.add("popup-layout__popup-menu-close--unactive");
      registrationField.classList.add("popup-layout__registration-field--active");
      } else if (popup.classList.contains("popup-layout--active")) {
        registrationField.classList.add("popup-layout__registration-field--active");
        closeMobileMenu.classList.add("popup-layout__popup-menu-close--unactive");
        menuMobileGroup.removeChild(menu);
        menuMobileGroup.removeChild(entryForm);

      window.onresize = function() {
        if (registrationField.classList.contains("popup-layout__registration-field--active") && document.body.clientWidth > 830) {
          menu.classList.remove("header-nav__list--active");
          entryForm.classList.remove("header-form--active");
          popup.classList.add("popup-layout--active");
          headerNav.appendChild(menu);
          headerTop.appendChild(entryForm);
          }
        }
      } else {
        return null;
      }
    }

    closeModalBtn.onclick = function() {
      popup.classList.remove("popup-layout--active");
      closeMobileMenu.classList.remove("popup-layout__popup-menu-close--unactive");
      registrationField.classList.remove("popup-layout__registration-field--active");
    }
  }

  

  //Сообщение об успешной регистрации
  var closeModalBtnSuccess = document.querySelector(".success__close-btn");
  var sendRegistration = document.querySelector(".registration__button");
  var successField = document.querySelector(".popup-layout__success-field");

  sendRegistration.onclick = function() {
    registrationField.classList.remove("popup-layout__registration-field--active");
    successField.classList.add("popup-layout__success-field--active");   
  }

  closeModalBtnSuccess.onclick = function() {
    popup.classList.remove("popup-layout--active");
    closeMobileMenu.classList.remove("popup-layout__popup-menu-close--unactive");
    successField.classList.remove("popup-layout__success-field--active");
  }

  var btnIndex = document.querySelector(".success__button-index");
  btnIndex.onclick = function() {
    location.href="index.html";
  }
  
  //Вход в аккаунт (кнопка Вход)
  var closeModalBtnEntry = document.querySelector(".entry__close-btn");
  var entryBtn = document.querySelector(".header-form__btn--entry");
  var entryField = document.querySelector(".popup-layout__entry-field");

  //проверка на выполненный вход
  if (entryBtn) {
    entryBtn.onclick = function() {
      if (popup.classList.contains("popup-layout--active") == false) {
        popup.classList.add("popup-layout--active");
        closeMobileMenu.classList.add("popup-layout__popup-menu-close--unactive");
        entryField.classList.add("popup-layout__entry-field--active");
      } else if (popup.classList.contains("popup-layout--active")) {
        entryField.classList.add("popup-layout__entry-field--active");
        closeMobileMenu.classList.add("popup-layout__popup-menu-close--unactive");
        menuMobileGroup.removeChild(menu);
        menuMobileGroup.removeChild(entryForm);

        window.onresize = function() {
          if (entryField.classList.contains("popup-layout__entry-field--active") && document.body.clientWidth > 830) {
            menu.classList.remove("header-nav__list--active");
            entryForm.classList.remove("header-form--active");
            popup.classList.add("popup-layout--active");
            headerNav.appendChild(menu);
            headerTop.appendChild(entryForm);
          }
        }

      } else {
        return null;
      }
    }

    closeModalBtnEntry.onclick = function() {
      popup.classList.remove("popup-layout--active");
      closeMobileMenu.classList.remove("popup-layout__popup-menu-close--unactive");
      entryField.classList.remove("popup-layout__entry-field--active");
    }
  }

//восстановление пароля (кнопка Забыли пароль)
  var closeModalBtnRecovery = document.querySelector(".recovery__close-btn");
  var fogotPassBtn = document.querySelector(".entry__button-recovery");
  var recoveryField = document.querySelector(".popup-layout__recovery-field");

  fogotPassBtn.onclick = function() {
    
    entryField.classList.remove("popup-layout__entry-field--active");
    recoveryField.classList.add("popup-layout__recovery-field--active");    
  }

  closeModalBtnRecovery.onclick = function() {
    popup.classList.remove("popup-layout--active");
    closeMobileMenu.classList.remove("popup-layout__popup-menu-close--unactive");
    recoveryField.classList.remove("popup-layout__recovery-field--active");
  }

  //сообщение об отправке нового пароля (кнопка Далее на восстановлении пароля)
  var closeModalBtnNewpass = document.querySelector(".new-pass__close-btn");
  var newpassBtn = document.querySelector(".recovery__button");
  var newpassField = document.querySelector(".popup-layout__message-pass-field");
  var indexBtn = document.querySelector(".new-pass__button-index");

  newpassBtn.onclick = function() {
    recoveryField.classList.remove("popup-layout__recovery-field--active");
    newpassField.classList.add("popup-layout__message-pass-field--active");    
  }

  closeModalBtnNewpass.onclick = function() {
    popup.classList.remove("popup-layout--active");
    closeMobileMenu.classList.remove("popup-layout__popup-menu-close--unactive");
    closeMobileMenu.classList.remove("popup-layout__popup-menu-close--unactive");
    newpassField.classList.remove("popup-layout__message-pass-field--active");
  }

  indexBtn.onclick = function() {
    location.href="index.html";
  }



  //переход по кнопке "Стать участником" на страницу Цели
  var goalsLinks = document.querySelectorAll(".button-block__reg");

  for (var i=0; i < goalsLinks.length; i++) {
    goalsLinks[i].onclick = function() {
      location.href="goals.html";
      console.log("sf")
    }
  }

  //переход по кнопке "Профиль" на страницу личного кабинета
  var profileLink = document.querySelector(".header-form__btn--profile");

  if (profileLink) {
    profileLink.onclick = function() {
      location.href="profile.html";
    }
  }

}