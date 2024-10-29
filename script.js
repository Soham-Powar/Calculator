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
	switch (operator) {
		case '+':
			add(num1, num2);
			break;
		
		case '-':
			subtract(num1, num2);
			break;

		case 'x':
			multiply(num1, num2);
			break;

		case '/':
			divide(num1, num2);
			break;
			
		default:
			break;
	}

}

//get all the buttons

const display = document.querySelector('.display');
const displayResult = document.querySelector('.displayResult');
const numberBtns = document.querySelectorAll('.number');
const operationBtns = document.querySelectorAll('.operation');
const equalBtn = document.querySelector('.equals');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');

//function for clear button

clearBtn.addEventListener('click', () => {
	display.textContent = '';
	displayResult.textContent = '';
});
//create a function that populates display on number/operation button click

numberBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		display.textContent += btn.textContent;
		displayResult.textContent += btn.textContent;
	})
});

operationBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		firstNumber = displayResult.textContent;
		operator = btn.textContent;
		display.textContent += btn.textContent;
		displayResult.textContent = '';
	})
});

equalBtn.addEventListener('click', () => {
	secondNumber = displayResult.textContent;
	operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
});