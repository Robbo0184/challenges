console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('#tos');
const successMessage = document.querySelector('#success')

function hideTosError() {
  tosError.setAttribute("hidden", "");
}
hideTosError()

function showTosError() {
  tosError.removeAttribute("hidden");
}

function hideSuccessMessage() {
  successMessage.setAttribute("hidden", "");
};
hideSuccessMessage();

function showSuccessMessage() {
  successMessage.removeAttribute("hidden");
}



form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  if
    (tosCheckbox.checked) {
    showSuccessMessage()
  }
  if (!tosCheckbox.checked) {
    showTosError()
    return
  }


  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});








