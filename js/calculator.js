//a calculator webpage built for the odin project 
// foundation course final assignment
//v0.2 Jaycee Raven 29-7-24

//variables
let currentNum = '',
    previousNum = '',
    resultFlag = false,
    operator = '';

//display
const currentDisplayNumber = document.querySelector('.display')
//function buttons
const equalBTN = document.querySelector('.equal'),
    decimalBTN = document.querySelector('.decimal'),
    clearBTN = document.querySelector('.clear');
//operator buttons
const operatorButtons = document.querySelectorAll('.operatorButton');
//number buttons
const numberButtons = document.querySelectorAll('.numberButton');

//event listeners
numberButtons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        updateDisplay(event.target.textContent);
        console.log(event.target.textContent)
    })
})

operatorButtons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        assignOperator(event.target.textContent);
    })
})

equalBTN.addEventListener('click', operate);

clearBTN.addEventListener('click', clear);

//Functions
function updateDisplay(number) {
    console.log('in updateDisplay')
    if(resultFlag == true && operator === '') {
        currentNum = '';
        currentDisplayNumber.textContent = currentNum;
        resultFlag = false;
    }
    if(currentNum.length <= 11)
    {
        console.log(currentNum);
        currentNum += number;
        console.log(currentNum);
        currentDisplayNumber.textContent = currentNum;
        console.log(currentNum);
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
            previousNum += currentNum;
            displayResult();
            break;
        case '-':
            previousNum -= currentNum;
            displayResult();
            break;
        case '*':
            previousNum *= currentNum;
            displayResult();
            break;
        case '/':
            if(currentNum === 0) {
                currentDisplayNumber.textContent = 'Don\'t do that!!';
                currentNum = '';
                previousNum = '';
                operator = '';
                return;
            }
            previousNum /= currentNum;
            displayResult();
            break;
    }
    previousNum = previousNum.toString();
    currentNum = currentNum.toString();
}

function displayResult() {
    resultFlag = true;
    currentDisplayNumber.textContent = previousNum;
    currentNum = previousNum;
    previousNum = '';
    operator = '';
    
}

function clear() {
    currentDisplayNumber.textContent = '';
    currentNum = '';
    previousNum = '';
    operator = '';
    resultFlag = false;
}