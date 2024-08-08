//a calculator webpage built for the odin project 
// foundation course final assignment
//v0.2 Jaycee Raven 29-7-24

//variables
let currentNum = '',
    previousNum = '',
    result = '',
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

equal.addEventListener('click', operate);

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

function assignOperator(op) {
    operator = op;
    previousNum = currentNum;
    currentNum = '';
    currentDisplayNumber.textContent = operator;
}

function operate() {
    currentNum = Number(currentNum);
    previousNum = Number(previousNum);

    switch (operator) {
        case '+':
            previousNum += previousNum;
            console.log(previousNum);
            break;
        case '-':
            previousNum -= previousNum;
            console.log(previousNum);
            break;
        case '*':
            previousNum *= previousNum;
            console.log(previousNum);
            break;
        case '/':
            if(previousNum === 0) {
                currentDisplayNumber.textContent = 'Don\'t do that!!';
                currentNum = '';
                previousNum = '';
                operator = '';
            }
            previousNum /= previousNum;
            console.log(previousNum);
            break;
    }
    previousNum = previousNum.toString();
    currentDisplayNumber.textContent = previousNum;
    operator = '';
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
