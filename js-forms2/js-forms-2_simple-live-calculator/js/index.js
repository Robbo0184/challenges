console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');


firstInput.addEventListener('input', (e) => {
    const value1 = firstInput.value
    const value2 = secondInput.value
    result.innerHTML = +value1 * +value2
});

secondInput.addEventListener('input', (e) => {
    const value1 = firstInput.value
    const value2 = secondInput.value
    result.innerHTML = +value1 * +value2
});

