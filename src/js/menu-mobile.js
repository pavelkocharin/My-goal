window.onload = function() {
    var menu = document.querySelector(".header-nav__list");
    var openMenu = document.querySelector(".header-nav__mobile-btn");
    var menuStyle = getComputedStyle (menu);
    
    openMenu.onclick = function() {
        if (menuStyle.display =="none") {
            menu.classList.add("header-nav__list--active")
            this.innerHTML = "Закрыть"
        } else {
            menu.classList.remove("header-nav__list--active")
            this.innerHTML = "BTN"
        }
    }
}