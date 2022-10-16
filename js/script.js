'use strict';

const title = document.getElementsByTagName('h1'); //заголовок "Калькулятор верстки"
const nameCalculate = title[0];


const buttons = document.getElementsByClassName('handler_btn'); //кнопки "Рассчитать" и "Сброс"
const сalculate = buttons[0]; //кнопки "Рассчитать"
const reset = buttons[1]; //кнопки "Сброс"
 

const plus = document.querySelector('.screen-btn');//кнопку "+"

const otherItemsPercent = document.querySelectorAll('.other-items.percent'); //элементы с классом other-items класс percent

const otherItemsNumber = document.querySelectorAll('.other-items.number'); //элементы с классом other-items класс number

const rollback = document.querySelector(".rollback input[type=range]"); //input type=range через его родителя

const list = document.getElementsByClassName("total-input"); //все инпуты с классом total-input справа
for (let item of list) {
    console.log(item);
}

const span = document.querySelector(".rollback .range-value"); //span с классом range-value 

let screen  = document.querySelectorAll('.screen'); //все блоки с классом screen

console.log(nameCalculate); //заголовок "Калькулятор верстки"
console.log(сalculate); //кнопки "Рассчитать"
console.log(reset); //кнопки "Сброс"
console.log(plus); //кнопку "+"
console.log(otherItemsPercent); //элементы с классом other-items класс percent
console.log(otherItemsNumber); //элементы с классом other-items класс number
console.log(rollback); //input type=range через его родителя
console.log(span); //span с классом range-value 
console.log(screen); //все блоки с классом screen



