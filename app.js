const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator')
const deleted = document.querySelector('.delete');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal');
const dot = document.querySelector('.dot');
const resultText = document.querySelector('.result-text');

let firstNum = "";
let secondNum = "";
let operator = "";
let result = "";


// if result is not empty, let first number value be result
function resultValid() {
    if(result !== '') {
        firstNum = result
    } else {
        result = '';
    }
};


// Gives numbers that is clicked a value
numbers.forEach(number => {
    number.addEventListener('click', function() {
        // if operator is empty and clicking an operator 
        if(operator === '' || operator !== '' && firstNum === '') {
            firstNum += this.value;
            resultText.innerHTML = firstNum;
        } else {
            secondNum += this.value;
            resultText.innerHTML = secondNum
        };
    });
});


//Gives operator a value when clicked
operators.forEach(operatorSel => {
    operatorSel.addEventListener('click', function() {
        operator = this.value;
        resultText.innerHTML = operator;
    });
});


// equal value
equal.addEventListener('click', function(){
    resultValid();
    if(operator === "+") {
       result = parseInt(firstNum) + parseInt(secondNum);
       resultText.innerHTML = result;
    } else if (operator === "-") {
        result = parseInt(firstNum) - parseInt(secondNum);
        resultText.innerHTML = result;
    } else if (operator === "/") {
        result = parseInt(firstNum) / parseInt(secondNum);
        resultText.innerHTML = result;
    } else if (operator === "*") {
        result = parseInt(firstNum) * parseInt(secondNum);
    } else {
        return
    }
});


// clears values
clear.addEventListener('click', function(){
    result = '';
    firstNum = '';
    secondNum = '';
    operator = '';
    resultText.innerHTML = result;
});


