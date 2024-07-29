//a calculator webpage built for the odin project 
// foundation course final assignment
//v0.1 Jaycee Raven 29-7-24

//Variables
let firstNumber = 0,
    secondNumber = 0,
    operator = null;


//Functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if(secondNumber === 0) {
        return 'Don\'t do that!!'
    }
    
    return num1 / num2
}


//testing!!
console.log('add function 1+1')
console.log(add(firstNumber = 1, secondNumber = 1));

console.log('subtract function 2-1')
console.log(subtract(firstNumber = 2, secondNumber = 1));

console.log('multiply function 10*2')
console.log(multiply(firstNumber = 10, secondNumber = 2));

console.log('divide function 10/2')
console.log(divide(firstNumber = 10, secondNumber = 2));
console.log('divide by 0?')
console.log(divide(firstNumber = 10, secondNumber = 0))