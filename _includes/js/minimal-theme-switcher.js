/*!
 * Minimal theme switcher
 *
 * Pico.css - https://picocss.com
 * Copyright 2020 - Licensed under MIT
 */

(function() {
 var buttonsTheme = document.querySelectorAll('a[data-theme-switcher]');
 for (var i = 0; i < buttonsTheme.length; i++) {
   buttonsTheme[i].addEventListener('click', function(event) {
     event.preventDefault();
     document.querySelector('html').setAttribute(
       'data-theme',
       event.target.getAttribute('data-theme-switcher'));
   }, false);
 }
})();
