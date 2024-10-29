let firstNumber;
let secondNumber;
let operator;
let result;


function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}
   
function operate (operator, num1, num2) {
	switch (operator) {
		case '+':
			return add(num1, num2);
		
		case '-':
			return subtract(num1, num2);

		case 'x':
			return multiply(num1, num2);

		case '/':
			return divide(num1, num2);

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
	result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
	displayResult.textContent = result;
});