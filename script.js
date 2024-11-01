let firstNumber = '';
let secondNumber = '';
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
	return b == 0 ? "Error! Cannot divide by zero." : a / b;
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

let gaveOperator = false;
let secondGiven = false;
let continuousExp = false

//function for clear button

clearBtn.addEventListener('click', () => {
	display.textContent = '';
	displayResult.textContent = '';
	firstNumber = '';
	secondNumber = '';
	operator = '';
	gaveOperator = false;
	secondGiven = false;
	continuousExp = false;
});

//function for delete button

deleteBtn.addEventListener('click', () => {
	if(!gaveOperator) {
		displayResult.textContent = displayResult.textContent.slice(0, -1);
		display.textContent = display.textContent.slice(0, -1);
		if(secondGiven) {
			secondNumber = secondNumber.slice(0, -1);
		}
		else {
			firstNumber = firstNumber.slice(0, -1);
		}
	}

});

//create a function that populates display on number/operation button click

numberBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		if(continuousExp) {
			secondNumber = '';
			displayResult.textContent = '';
			continuousExp = false;
		}
		display.textContent += btn.textContent;
		displayResult.textContent += btn.textContent;
		if(gaveOperator || secondGiven) {
			secondNumber += btn.textContent;
			secondGiven = true;
		}
		else {
			firstNumber += btn.textContent;
		}
		gaveOperator = false;
	})
});

operationBtns.forEach(btn => {
	btn.addEventListener('click', () => {

		if(secondGiven) {
			result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
			displayResult.textContent = result;
			firstNumber = result;
			secondNumber = '';
			secondGiven = false;
		}

		if(gaveOperator) {
			display.textContent = display.textContent.slice(0, -1);
		}

		operator = btn.textContent;
		display.textContent += btn.textContent;
		gaveOperator = true;
		continuousExp = true;
	})
});

equalBtn.addEventListener('click', () => {
	if (operator && secondNumber) {
		result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
		displayResult.textContent = result;
		firstNumber = result;
		secondNumber = '';
		operator = '';
		continuousExp = true;
	}
});