let currentInput = '';
let firstOperand = null;
let currentOperation = null;

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function setOperation(operator) {
  if (currentInput === '') return;

  if (firstOperand === null) {
    firstOperand = parseFloat(currentInput);
  } else {
    firstOperand = operate(firstOperand, parseFloat(currentInput), currentOperation);
  }

  currentOperation = operator;
  currentInput = '';
  updateDisplay();
}

function calculate() {
  if (firstOperand === null || currentInput === '') return;

  const result = operate(firstOperand, parseFloat(currentInput), currentOperation);
  currentInput = result.toString();
  firstOperand = null;
  currentOperation = null;
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  firstOperand = null;
  currentOperation = null;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}

function operate(a, b, operator) {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : 'Error';
    default: return b;
  }
}
