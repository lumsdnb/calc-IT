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

<<<<<<< HEAD
function operate(num1, num2) {
  if (num1 == null || num2 == null) return;
  else console.log(`first number: ${num1}, second one is ${num2}`);
}
=======
function operate(num1, num2, operator) {
  if (num1 === '' || num2 === '') return;
  switch (operator) {
    case value:
      break;
>>>>>>> a845ddbbf63893b12dc3b4879925a7d5004ec201

    default:
      break;
  }
}

function appendNumber(number) {}

const prevValue = document.querySelector('.prev-value');
const currentValue = document.querySelector('.current-value');

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('#clear');

let firstNumber = '';
let secondNumber = '';

function updateDisplay(operator) {
  prevValue.textContent = `${currentValue.textContent} ${operator}`;
  currentValue.textContent = '0';
}

//event listeners for all numbers
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(button.id);
    if (currentValue.textContent.length > 9) return;
    if (currentValue.textContent == 0) {
      currentValue.textContent = button.id;
    } else {
      currentValue.textContent += button.id;
    }
  });
});

//event listeners for all operators
operatorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    firstNumber = currentValue.textContent;
    switch (button.id) {
      case 'plus':
        updateDisplay('+');
        operate(firstNumber, secondNumber, plus);
        break;
      case 'minus':
        updateDisplay('-');
        break;
      case 'divide':
        updateDisplay('÷');
        break;
      case 'multiply':
        updateDisplay('*');
        break;
      case 'equals':
      default:
        break;
    }
  });
});

//clear button
clearButton.addEventListener('click', () => {
  prevValue.textContent = '';
  currentValue.textContent = '0';
  firstNumber = null;
  secondNumber = null;
});

function reset() {
  display.textContent = 0;
  firstNumber = null;
  secondNumber = null;
}

//add event listeners to all buttons
/*
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(button.id);
<<<<<<< HEAD
    if (button.id == 'clear') {
      reset();
    }
=======
>>>>>>> a845ddbbf63893b12dc3b4879925a7d5004ec201
    if (button.classList.contains('number')) {
    }
    if (button.classList.contains('operator')) {
      if (!firstNumber) {
        firstNumber = display.textContent;
      } else if (firstNumber && !secondNumber) {
        secondNumber = display.textContent;
        operate(firstNumber, secondNumber);
      }
    }
  });
});
*/

//if operator is pressed, save number from display to first var
//if number after that is pressed, clear display and add it to display
//if next button pressed is another operator or equals, compute result and show it in display
