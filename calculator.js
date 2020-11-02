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

function operate(num1, num2) {
  if (num1 == null || num2 == null) return;
  else console.log(`first number: ${num1}, second one is ${num2}`);
}

let display = document.querySelector('#display');

const buttons = document.querySelectorAll('button');

let firstNumber = null;
let secondNumber = null;

function reset() {
  display.textContent = 0;
  firstNumber = null;
  secondNumber = null;
}

//add event listeners to all buttons
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(button.id);
    if (button.id == 'clear') {
      reset();
    }
    if (button.classList.contains('number')) {
      if (display.textContent.length > 9) return;
      if (display.textContent == 0) {
        display.textContent = button.id;
      } else {
        display.textContent += button.id;
      }
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

//if operator is pressed, save number from display to first var
//if number after that is pressed, clear display and add it to display
//if next button pressed is another operator or equals, compute result and show it in display
