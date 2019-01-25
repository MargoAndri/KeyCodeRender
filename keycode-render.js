'use strict';

(function () {
    var keyCodeDisplay = document.querySelector('#code__display');
    var keyCodeBlock = document.querySelector('.code__display__block');
    var startButton = document.querySelector('#start__link');

    document.addEventListener('keydown', function (evt) {
            evt.preventDefault();
            keyCodeBlock.classList.remove('visually__hidden');
            startButton.classList.add('visually__hidden');
            keyCodeDisplay.textContent = evt.keyCode;
    });


})();