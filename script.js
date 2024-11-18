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
let continuousExp = false;
let periodEntered = false;

clearBtn.addEventListener('click', handleClear);
deleteBtn.addEventListener('click', handleDelete);
numberBtns.forEach(btn => {
	btn.addEventListener('click', () => handleNumber(btn.textContent));
});
operationBtns.forEach(btn => {
	btn.addEventListener('click', () => handleOperator(btn.textContent)); 
});
equalBtn.addEventListener('click', handleEqual);



//Keyboard support
window.addEventListener('keydown', keyCheck);


//function for delete button
function handleDelete() {
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
}

//create a function that populates display on number/operation button click
function handleNumber(btnText) {
		if(btnText === '.') {
			if(periodEntered) return;
			periodEntered = true;
		}

		if(continuousExp) {
			secondNumber = '';
			displayResult.textContent = '';
			continuousExp = false;
		}

		display.textContent += btnText;
		displayResult.textContent += btnText;

		if(gaveOperator || secondGiven) {
			secondNumber += btnText;
			secondGiven = true;
		}
		else {
			firstNumber += btnText;
		}
		gaveOperator = false;
}

function handleOperator (btnText) {
		if(secondGiven) {
			result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
			displayResult.textContent = result;
			firstNumber = result;
			secondNumber = '';
			secondGiven = false;
		}

		periodEntered = false;

		if(gaveOperator) {
			display.textContent = display.textContent.slice(0, -1);
		}

		operator = btnText;
		display.textContent += btnText;
		gaveOperator = true;
		continuousExp = true;
}

function handleEqual() {
	if (operator && secondNumber) {
		result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
		displayResult.textContent = result;
		firstNumber = result;
		secondNumber = '';
		operator = '';
		continuousExp = true;
		periodEntered = false;
		secondGiven = false;
	}
}

function handleClear() {
	display.textContent = '';
	displayResult.textContent = '';
	firstNumber = '';
	secondNumber = '';
	operator = '';
	gaveOperator = false;
	secondGiven = false;
	continuousExp = false;
	periodEntered = false;
}

//check which key is pressed and call appropriate fns

function keyCheck(e) {
	if((e.key >= 0 && e.key <= 9) || e.key === '.') {
		handleNumber(e.key);
	}
	else if(e.key === '=' || e.key === 'Enter') {
		handleEqual();
	}
	else if(e.key === '+' || e.key === '-' || e.key === 'x' || e.key === '/') {
		handleOperator(e.key);
	}
	else if (e.key === 'Backspace') {
		handleDelete();
	}
	else if(e.key === 'Delete') {
		handleClear();
	}
}