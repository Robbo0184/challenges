console.clear();

const inputElement = document.querySelector('[data-js="toUpperCase"]');


inputElement.addEventListener('input', (e) => {
     inputElement.value = inputElement.value.toUpperCase()

     
     
})
