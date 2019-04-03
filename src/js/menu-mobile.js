window.onload = function() {
    var openPopup = document.querySelector(".header-nav__mobile-btn");
    var closePopup = document.querySelector(".body-page__popup-close");
    var popup = document.querySelector(".body-page__popup-layout");
    var menuMobileGroup = document.querySelector(".body-page__popup-menu");
    var popupStyle = getComputedStyle (popup);
    var menu = document.querySelector(".header-nav__list");
    var entryForm = document.querySelector(".header-form");
    var headerNav = document.querySelector(".header-nav");
    var headerTop = document.querySelector(".header__top-content");
    var menuStyle = getComputedStyle (menu);
    
    // && openPopupStyle.display == "block"
    openPopup.onclick = function() {
        if (popupStyle.display == "none") {
            menu.classList.add("header-nav__list--active");
            entryForm.classList.add("header-form--active");
            popup.classList.add("body-page__popup-layout--active");
            menuMobileGroup.appendChild(menu);
            menuMobileGroup.appendChild(entryForm);

            window.onresize = function() {
                if (popup.classList.contains("body-page__popup-layout--active") && document.body.clientWidth > 830) {
                    menu.classList.remove("header-nav__list--active");
                    entryForm.classList.remove("header-form--active");
                    popup.classList.remove("body-page__popup-layout--active");
                    headerNav.appendChild(menu);
                    headerTop.appendChild(entryForm);
                }
            }

        } else {
            return null;
        }
    }


    closePopup.onclick = function() {
        
        if (popupStyle.display == "block") {
            popup.classList.remove("body-page__popup-layout--active");
            menu.classList.remove("header-nav__list--active");
            entryForm.classList.remove("header-form--active");
            menuStyle.display == "block";
        } else {
            return null;
        }
    }
}