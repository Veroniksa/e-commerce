'use strict';

const btnBars = document.querySelector('.button_1');
const boxDark = document.querySelector('.box_dark');
const btmMenuClosed = document.querySelector('.menuClosed');

btnBars.addEventListener('click', () => {
    if(btnBars.classList.contains('button_1_clicked')) {
        btnBars.classList.remove('button_1_clicked');
    }else{
        btnBars.classList.add('button_1_clicked');
    }
    boxDark.classList.toggle('hidden');
});

btmMenuClosed.addEventListener('click', () => {
    if(btnBars.classList.contains('button_1_clicked')) {
        btnBars.classList.remove('button_1_clicked');
    }else{
        btnBars.classList.add('button_1_clicked');
    }
    boxDark.classList.toggle('hidden');
});