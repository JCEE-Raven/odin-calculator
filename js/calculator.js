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

//Functions
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
            if(currentNum === 0) {
                currentDisplayNumber.textContent = 'Don\'t do that!!';
                currentNum = '';
                previousNum = '';
                operator = '';
                return;
            }
            previousNum /= previousNum;
            console.log(previousNum);
            break;
    }
    previousNum = previousNum.toString();
    currentDisplayNumber.textContent = previousNum;
    operator = '';
}
