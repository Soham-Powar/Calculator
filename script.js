let firstNumber;
let secondNumber;
let operator;


function add() {

}

function subtract() {

}

function multiply() {

}

function divide() {

}
   
function operate (operator, num1, num2) {

}

//create a function that populates display on button click

const display = document.querySelector('.display');
const btns = document.querySelectorAll('.number');

btns.forEach(btn => {
	btn.addEventListener('click', () => display.textContent = btn.textContent)
})