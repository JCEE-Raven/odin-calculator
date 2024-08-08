//a calculator webpage built for the odin project 
// foundation course final assignment
//v0.2 Jaycee Raven 29-7-24

//variables
let currentNum = '',
    previousNum = '',
    operator = '';

//display
const currentDisplayNumber = document.querySelector('.display')
//function buttons
const equal = document.querySelector('.equal'),
    decimal = document.querySelector('.decimal'),
    clear = document.querySelector('.clear');
//operator buttons
const operatorButtons = document.querySelectorAll('.operatorButton');
//number buttons
const numberButtons = document.querySelectorAll('.numberButton');

//event listeners
numberButtons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        updateDisplay(event.target.textContent);
    })
})

operatorButtons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        assignOperator(event.target.textContent);
    })
})

//functions
// function add(num1, num2) {
//     return num1 + num2;
// }

// function subtract(num1, num2) {
//     return num1 - num2;
// }

// function multiply(num1, num2) {   //TEST FUNCTIONS
//     return num1 * num2;           //Moved functionality
// }                                 //Leaving here for now delete later

// function divide(num1, num2) {
//     if(secondNumber === 0) {
//         return 'Don\'t do that!!'
//     }
    
//     return num1 / num2
// }

function updateDisplay(number) {
    if(currentNum.length <= 11)
    {
        currentNum += number;
        currentDisplayNumber.textContent = currentNum;
    }
}

function assignOperator(operator) {
    operator = operator;
    previousNum = currentNum;
    currentNum = '';
    currentDisplayNumber.textContent = operator;
}

function operate(num1, num2, op) {
    switch (op) {
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            if(secondNumber === 0) {
                return 'Don\'t do that!!'
            }
            return num1 / num2
            break;
    }
}

//testing!!
// console.log('add function 1+1')
// console.log(operate(firstNumber = 1, secondNumber = 1, '+'));

// console.log('subtract function 2-1')
// console.log(operate(firstNumber = 2, secondNumber = 1, '-'));

// console.log('multiply function 10*2')
// console.log(operate(firstNumber = 10, secondNumber = 2, '*'));

// console.log('divide function 10/2')
// console.log(operate(firstNumber = 10, secondNumber = 2, '/'));
// console.log('divide by 0?')
// console.log(operate(firstNumber = 10, secondNumber = 0, '/'))
