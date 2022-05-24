let clearBtn = document.getElementById('clearBtn');
let posNegBtn = document.getElementById('posNegBtn');
let divideBtn = document.getElementById('divideBtn');
let multiplyBtn = document.getElementById('multiplyBtn');
let subtractBtn = document.getElementById('subtractBtn');
let addBtn = document.getElementById('addBtn');
let equalBtn = document.getElementById('equalBtn');
let zero = document.getElementById('zero');
let decimalBtn = document.getElementById('decimalBtn');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let display = document.getElementById('display');

clearBtn.addEventListener('click', clearDisplay);
posNegBtn.addEventListener('click', changePosNeg);
//divideBtn.addEventListener('click', );
//multiplyBtn.addEventListener('click', );
//subtractBtn.addEventListener('click', );
//addBtn.addEventListener('click', );
//equalBtn.addEventListener('click', );
zero.addEventListener('click', displayZero);
decimalBtn.addEventListener('click', displayDec);
one.addEventListener('click', display1);
two.addEventListener('click', display2);
three.addEventListener('click', display3);
four.addEventListener('click', display4);
five.addEventListener('click', display5);
six.addEventListener('click', display6);
seven.addEventListener('click', display7);
eight.addEventListener('click', display8);
nine.addEventListener('click', display9);

function clearDisplay() {
    display.value = '0';
}
function displayZero() {
    display.value += '0';
}

function displayDec() {
    if (display.value.includes('.')) {
        return display.value;
    } else {
        display.value += '.';
    }   
}

function changePosNeg() {
    parseFloat(display.value *= -1);
}

function display1() {
    if (display.value == '0') {
        display.value ='1';
    } else {
        display.value += '1';
    } 
}

function display2() {
    if (display.value == '0') {
        display.value ='2';
    } else {
        display.value += '2';
    } 
}

function display3() {
    if (display.value == '0') {
        display.value ='3';
    } else {
        display.value += '3';
    } 
}

function display4() {
    if (display.value == '0') {
        display.value ='4';
    } else {
        display.value += '4';
    } 
}

function display5() {
    if (display.value == '0') {
        display.value ='5';
    } else {
        display.value += '5';
    } 
}

function display6() {
    if (display.value == '0') {
        display.value = '6';
    } else {
        display.value += '6';
    } 
}

function display7() {
    if (display.value == '0') {
        display.value = '7';    
    } else {
        display.value += '7';
    } 
}

function display8() {
    if (display.value == '0') {
        display.value = '8';
    } else {
        display.value += '8';
    } 
}

function display9() {
    if (display.value == '0') {
        display.value = '9';
    } else {
        display.value += '9';
    } 
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(o, a, b) {
    if (o = '+') {
        return add(a, b);
    } else if (o = '-') {
        return subtract(a, b);
    } else if (o = '*') {
        return multiply(a, b);
    } else if (o = '/') {
        return divide(a, b);
    }

}