"use strict";
//функция подчеркивания ссылки меню на активной странице

(function () {
	var lnk = document.links;
	for (var i = 0; i < lnk.length; i++) {
		if (lnk [i].href == document.URL) {
			lnk [i].style.cssText = 'text-decoration:underline';
		}
	}
}());