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
//Create way for display to move to the left and keep showing new #'s added.
let display = document.getElementById('display');

let a = 0;
let b = 0;
let o = '-';
let currentNum;

clearBtn.addEventListener('click', clearDisplay);
posNegBtn.addEventListener('click', changePosNeg);
divideBtn.addEventListener('click', dividePressed);
multiplyBtn.addEventListener('click', multiplyPressed);
subtractBtn.addEventListener('click', subtractPressed);
addBtn.addEventListener('click', addPressed);
equalBtn.addEventListener('click', equalPressed);
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
    currentNum = display.value;
}

function displayZero() {
    display.value += '0';
    currentNum = display.value;
}

function displayDec() {
    if (display.value.includes('.')) {
        display.value;
    } else {
        display.value += '.';
    }   
    currentNum = display.value;
}

function changePosNeg() {
    parseFloat(display.value *= -1);
    currentNum = display.value;
}

function display1() {
    if (display.value == '0') {
        display.value ='1';
    } else {
        display.value += '1';
    } 
    currentNum = display.value;
}

function display2() {
    if (display.value == '0') {
        display.value ='2';
    } else {
        display.value += '2';
    } 
    currentNum = display.value;
}

function display3() {
    if (display.value == '0') {
        display.value ='3';
    } else {
        display.value += '3';
    } 
    currentNum = display.value;
}

function display4() {
    if (display.value == '0') {
        display.value ='4';
    } else {
        display.value += '4';
    } 
    currentNum = display.value;
}

function display5() {
    if (display.value == '0') {
        display.value ='5';
    } else {
        display.value += '5';
    } 
    currentNum = display.value;
}

function display6() {
    if (display.value == '0') {
        display.value = '6';
    } else {
        display.value += '6';
    } 
    currentNum = display.value;
}

function display7() {
    if (display.value == '0') {
        display.value = '7';    
    } else {
        display.value += '7';
    } 
    currentNum = display.value;
}

function display8() {
    if (display.value == '0') {
        display.value = '8';
    } else {
        display.value += '8';
    } 
    currentNum = display.value;
}

function display9() {
    if (display.value == '0') {
        display.value = '9';
    } else {
        display.value += '9';
    } 
    currentNum = display.value;
}

function addPressed() {
    display.value = '';
    a = parseFloat(`${currentNum}`);
    o = '+';
}

function subtractPressed() {
    display.value = '';
    a = parseFloat(`${currentNum}`);
    o = '-';
}

function multiplyPressed() {
    display.value = '';
    o = '*';
    a = parseFloat(`${currentNum}`);
}

function dividePressed() {
    o = '/';
    display.value = '';
    a = parseFloat(`${currentNum}`);
}

function equalPressed() {
    b = parseFloat(`${currentNum}`);
    operate(o, a, b);
}

function add(a, b) {
    display.value = a + b;
    currentNum = display.value;
}

function subtract(a, b) {
    display.value = a - b;
    currentNum = display.value;
}

function multiply(a, b) {
    display.value = a * b;
    currentNum = display.value;
}

function divide(a, b) {
    display.value = a / b;
    currentNum = display.value;
}

function operate() {
    if (o == '-') {
        return subtract(a, b);
    } else if (o == '+') {
        return add(a, b);
    } else if (o == '*') {
        return multiply(a, b);
    } else if (o == '/') {
        return divide(a, b);
    }

}