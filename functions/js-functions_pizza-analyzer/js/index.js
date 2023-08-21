console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');
const pizzaSize1 = pizzaInput1.value;
const pizzaSize2 = pizzaInput2.value;
const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // write your code here
  let pizzaSize1 = pizzaInput1.value;
  updatePizzaDisplay(pizza1, pizzaSize1)
  calculatePizzaGain(pizzaSize1, pizzaSize2)
  updateOutputColor(pizzaSize1, pizzaSize2)

});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  let pizzaSize2 = pizzaInput2.value;
  updatePizzaDisplay(pizza2, pizzaSize2)
  calculatePizzaGain(pizzaSize1, pizzaSize2)
  updateOutputColor(pizzaSize1, pizzaSize2)
})

// Task 1
// define the function calculatePizzaGain here
const calculatePizzaGain = (diameter1, diameter2) => {
  let pizza1Radius = diameter1 / 2;
  let pizza2Radius = diameter2 / 2;
  let pizza1Area = pizza1Radius * pizza1Radius * Math.PI;
  let pizza2Area = pizza2Radius * pizza2Radius * Math.PI;
  let pizzaGain = (pizza2Area - pizza1Area) / pizza1Area * 100;

  output.textContent = Math.round(pizzaGain)

}


// Task 2
// define the function updatePizzaDisplay here
const updatePizzaDisplay = (pizzaElement, newSize) => {
  let displaySize = (newSize / 24) * 100
  pizzaElement.style.width = displaySize + "px"
}
// Task 3
// define the function updateOutputColor here
const updateOutputColor = (size1, size2) => {
  if (size2 < size1) {
    outputSection.style.backgroundColor = "var(--red)";
  } else {
    outputSection.style.backgroundColor = "var(--green)";

  }

}


