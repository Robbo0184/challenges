console.clear();

const form = document.querySelector('[data-js="form"]');
const ageInput = document.querySelector('#age');
const badnessInput = document.querySelector('#badness');
let age = +ageInput.value 
let badness = +badnessInput.value

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const age = +data.age
    const badness = +data.badness
    const ageBadnessSum = age + badness
    console.log(`The age-badness-sum of ${data.firstName} is ${ageBadnessSum}`)
    console.log(data)
    console.log()
})

