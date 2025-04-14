# 🔢 Basic Calculator App

A simple calculator web application built with **HTML**, **CSS**, and **JavaScript**. This app performs the four basic arithmetic operations: **addition**, **subtraction**, **multiplication**, and **division**.

---

## 🚀 Features

- Perform basic calculations (+, -, ×, ÷)
- Clean and centered user interface
- Button-based input
- Handles divide-by-zero error
- Easy to understand code (perfect for beginners!)

---

## 🛠 Technologies Used

- **HTML5** – Structure of the calculator
- **CSS3** – Styling and layout
- **JavaScript (ES6)** – Functionality and logic

---

## 📁 File Structure

```
calculator-app/
├── index.html        # HTML markup
├── style.css         # Styling
└── script.js         # Logic
```

---

## 🧾 Code Explanation

### 📄 index.html

```html
<input type="text" id="display" disabled />
```
- This is the display screen of the calculator. It's an `<input>` field that shows the current number or result.
- `disabled` means the user can't type into it manually.

```html
<button onclick="appendNumber('7')">7</button>
```
- Each button has an `onclick` attribute to call a JavaScript function.
- For example, clicking this button calls `appendNumber('7')` to add the digit 7 to the input.

```html
<button onclick="setOperation('+')">+</button>
```
- This sets the operation (addition, subtraction, etc.) when an operator button is clicked.

```html
<button onclick="calculate()">=</button>
```
- Triggers the calculation using the selected operator and numbers.

```html
<button onclick="clearDisplay()">C</button>
```
- Clears all inputs and resets the calculator.

---

### 🎨 style.css

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```
- Centers the calculator both vertically and horizontally using Flexbox.

```css
.calculator {
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
}
```
- Styles the calculator box with padding, borders, and rounded corners.

```css
.buttons {
  display: grid;
  grid-template-columns: repeat(4, 60px);
  gap: 10px;
}
```
- Lays out buttons in a 4-column grid with spacing in between.

```css
button {
  background-color: #eee;
  border-radius: 5px;
  cursor: pointer;
}
```
- Gives the buttons a nice look and interactive hover effect.

---

### 🧠 script.js

```javascript
let currentInput = '';
let firstOperand = null;
let currentOperation = null;
```
- Stores the current number, the first number, and the selected operation.

```javascript
function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}
```
- Adds a digit to the screen when a number button is clicked.

```javascript
function setOperation(operator) {
  if (firstOperand === null) {
    firstOperand = parseFloat(currentInput);
  } else {
    firstOperand = operate(firstOperand, parseFloat(currentInput), currentOperation);
  }
  currentOperation = operator;
  currentInput = '';
  updateDisplay();
}
```
- Handles setting the operator (+, −, ×, ÷) and performs intermediate calculations if needed.

```javascript
function calculate() {
  const result = operate(firstOperand, parseFloat(currentInput), currentOperation);
  currentInput = result.toString();
  firstOperand = null;
  currentOperation = null;
  updateDisplay();
}
```
- Calculates the final result when `=` is pressed.

```javascript
function clearDisplay() {
  currentInput = '';
  firstOperand = null;
  currentOperation = null;
  updateDisplay();
}
```
- Resets all values.

```javascript
function updateDisplay() {
  document.getElementById('display').value = currentInput;
}
```
- Updates the calculator screen.

```javascript
function operate(a, b, operator) {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : 'Error';
  }
}
```
- Executes the math operation. Handles division by zero.

---

## 💡 How to Use

1. Clone or download this project.
2. Open the `index.html` file in a browser.
3. Use the buttons to perform calculations.

---

## 🔧 Future Improvements

- Add decimal support
- Enable keyboard input
- Add dark mode toggle
- Include a backspace (⌫) button

---

## 🙌 Acknowledgements

Made for learning and practicing web development basics.

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
