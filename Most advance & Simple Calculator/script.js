// Input and Result Display
const inputField = document.getElementById('input');
const resultField = document.getElementById('result');

// Clear the display
function clearDisplay() {
  inputField.textContent = '0';
  resultField.textContent = '0';
}

// Append to display
function appendToDisplay(value) {
  if (inputField.textContent === '0' && value !== '.') {
    inputField.textContent = value;
  } else {
    inputField.textContent += value;
  }
}

// Add decimal
function appendDecimal() {
  if (!inputField.textContent.includes('.')) {
    inputField.textContent += '.';
  }
}

// Remove last digit
function removeLastDigit() {
  inputField.textContent = inputField.textContent.slice(0, -1) || '0';
}

// Calculate the result
function calculate() {
  let expression = inputField.textContent;
  expression = expression.replace(/×/g, '*').replace(/÷/g, '/');
  try {
    const result = eval(expression);
    resultField.textContent = result.toString();
  } catch (error) {
    resultField.textContent = 'Error';
  }
}
