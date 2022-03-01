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
let negNum = "";
let re = /.00/g;


// formula
function calculate() {
    if(operator === "+") {
       result = parseFloat(firstNum) + parseFloat(secondNum);
       result = Number.parseFloat(result).toFixed(2);
       if(result.match(re)){
        result = Number.parseFloat(result).toFixed(0);
    };
       resultText.innerHTML = result;
    } else if (operator === "-") {
        result = parseFloat(firstNum) - parseFloat(secondNum);
        result = Number.parseFloat(result).toFixed(2);
        if(result.match(re)){
            result = Number.parseFloat(result).toFixed(0);
        };
        resultText.innerHTML = result;
    } else if (operator === "/") {
        result = parseFloat(firstNum) / parseFloat(secondNum);
        result = Number.parseFloat(result).toFixed(2);
        if(result.match(re)){
            result = Number.parseFloat(result).toFixed(0);
        };
        // if divided by second num display this error
        if(secondNum == 0) {
            result = "I'm broken :(";
        };
        resultText.innerHTML = result;
    } else if (operator === "*") {
        result = parseFloat(firstNum) * parseFloat(secondNum);
        result = Number.parseFloat(result).toFixed(2);
        if(result.match(re)){
            result = Number.parseFloat(result).toFixed(0);
        };
        resultText.innerHTML = result;
    } else {
        return
    };   
};



// Gives numbers that is clicked a value
numbers.forEach(number => {
    number.addEventListener('click', function() {
        
        // if operator is empty and first num is empty let num selected be first num
        if(operator == '') {
            firstNum += this.value;
            // if negNum is - add it to first num
            if(negNum == '-') {
                firstNum = negNum + firstNum;
            };
            resultText.innerHTML = firstNum;
            // if there is an operator and result is empty let secondNum be selected num
        } else if (result == '') {
            secondNum += this.value;
            resultText.innerHTML = secondNum
            // if result is not empty, let result be first num and reset result to run secondNum
        } else {
            negNum = '';
            firstNum = '';
            secondNum = '';
            firstNum = result;
            result = '';
        };
    });
});


//Gives operator a value when clicked
operators.forEach(operatorSel => {
    operatorSel.addEventListener('click', function() {
        // If user clicks - gives negNum = "-" value
        if(firstNum == '' && this.value == "-") {
            negNum = "-";
            operator = '';
            resultText.innerHTML = "-";
        // If operator is clicked let operator be nothing
        } else if (firstNum == '') {
            operator = '';
        // If operator is not empty calculate when clicking on operator
        // then empty operator and replace operator with clicked operator
        } else if (operator !== '') {
            calculate();
            resultText.innerHTML = result;
            operator = '';
            operator = this.value;
            resultText.innerHTML = result + " " + operator;
        } else {
            operator = this.value;
            resultText.innerHTML = operator;
            }
        })

    });


// equal value gives results
equal.addEventListener('click', calculate);


// clears values
clear.addEventListener('click', function(){
    result = '';
    firstNum = '';
    secondNum = '';
    operator = '';
    resultText.innerHTML = result;
});


// backspace on current number or function
deleted.addEventListener('click', function() {
    if(firstNum !== '' && secondNum !== '' && operator !== '') {
        secondNum = '';
        resultText.innerHTML = secondNum;
    } else if (firstNum !=='' && operator !== '') {
        operator = '';
        resultText.innerHTML = operator;
    } else {
        firstNum = '';
        resultText.innerHTML = firstNum;
    }
});



// keyboard listner
window.addEventListener('keydown', function(e){
    const key = document.querySelector(`button[data-key='${e.keyCode}']`);
    key.click();
});
