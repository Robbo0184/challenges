const icon = document.querySelector('[data-js="icon"]');
const button3 = document.querySelector('[data-js="sleep-3-button"]');
const button5 = document.querySelector('[data-js="sleep-5-button"]');
const button10 = document.querySelector('[data-js="sleep-10-button"]');
const body = document.body;

// --v-- code here --v--

button3.addEventListener("click", async () => {
  icon.textContent = "💤";
  document.body.classList.add('dark')
  await sleep(3);
  document.body.classList.remove('dark')
  icon.textContent = "⏰";
});

button5.addEventListener("click", async () => {
  icon.textContent = "💤";
  document.body.classList.add('dark')
  await sleep(5);
  icon.textContent = "⏰";
  document.body.classList.remove('dark')
});

async function handleSleepFor10Button() {
  icon.textContent = "💤";
  document.body.classList.add('dark')
  await sleep(10);
  icon.textContent = "⏰";
  document.body.classList.remove('dark')
}

button10.addEventListener("click", handleSleepFor10Button);

// --^-- code here --^--

// returns a Promise that resolves after x seconds
function sleep(seconds) {
  const sleepPromise = new Promise((resolve) => {
    setTimeout(() => resolve(), seconds * 1000);
  });
  return sleepPromise;
}
