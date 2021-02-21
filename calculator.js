function add(a, b) {
  return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
  return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
  return parseInt(a) * parseInt(b);
}

function divide(a, b) {
  return parseInt(a) / parseInt(b);
}

const prevValue = document.querySelector('.prev-value');
const currentValue = document.querySelector('.current-value');

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('#clear');
const equalsButton = document.querySelector('#equals');

let firstNumber = '';
let secondNumber = '';
let currentOperator = '';

function updateValues(operator) {
  if (currentValue.textContent == 0) return;
  //prevValue.textContent.slice(-1) == operator
  if (['+', '-', '÷', '*'].includes(prevValue.textContent.slice(-1))) {
    console.log('has operator');
    prevValue.textContent = `${prevValue.textContent} ${currentValue.textContent} ${operator}`;
  } else {
    prevValue.textContent = `${currentValue.textContent} ${operator}`;
  }
  currentValue.textContent = '';
}

//event listeners for all numbers
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(button.id);
    //edge case checking
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
    //todo: check if operator has been entered, replace with new one if yes
    if (['+', '-', '÷', '*'].includes(prevValue.textContent.slice(-1))) {
      prevValue.textContent.slice(0, -2);
    }

    firstNumber = currentValue.textContent;
    currentOperator = button.id;
    switch (button.id) {
      case '+':
        add(firstNumber, secondNumber);
        updateValues('+');
        break;
      case '-':
        subtract(firstNumber, secondNumber, '-');
        updateValues('-');
        break;
      case '÷':
        divide(firstNumber, secondNumber, '÷');
        updateValues('÷');
        break;
      case '*':
        multiply(firstNumber, secondNumber, '*');
        updateValues('*');
        break;
      //case 'equals':
      //  operate(firstNumber, secondNumber);
      default:
        break;
    }
  });
});

//clear fields btn
clearButton.addEventListener('click', () => {
  clear();
});

function clear() {
  prevValue.textContent = '';
  currentValue.textContent = '0';
  firstNumber = null;
  secondNumber = null;
}

equalsButton.addEventListener('click', () => {
  const activeOperand = prevValue.textContent.slice(-1);
  const firstNum = prevValue.textContent.slice(0, -2);
  const secondNum = currentValue.textContent;
  switch (activeOperand) {
    case '+':
      clear();
      currentValue.innerHTML = add(firstNum, secondNum);
      break;
    case '-':
      clear();
      currentValue.innerHTML = subtract(firstNum, secondNum);
      break;
    case '*':
      clear();
      currentValue.innerHTML = multiply(firstNum, secondNum);
      break;
    case '÷':
      clear();
      currentValue.innerHTML = divide(firstNum, secondNum);
      break;
    default:
      break;
  }
});
//do the operator

function reset() {
  display.textContent = 0;
  firstNumber = null;
  secondNumber = null;
}

//if operator is pressed, save number from display to first var
//if number after that is pressed, clear display and add it to display
//if next button pressed is another operator or equals, compute result and show it in display
