console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

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

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  let value1 = event.target.elements.numberA.value
  let value2 = event.target.elements.numberB.value
  const operator = event.target.elements.operator.value


  // return result
  if (operator === 'addition') {
    result = add(+value1, +value2)
  } else if (operator === 'multiplication') {
    result = multiply(value1, value2)
  } else if (operator === 'division') {
    result = divide(value1, value2)
  } else if
    (operator === 'subtraction') {
    result = subtract(value1, value2)}

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
