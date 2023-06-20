const inputEl = document.querySelector('#name-input');
const titleEl = document.querySelector('#name-output');


inputEl.addEventListener("input", (event) => {
  outputEl.textContent = event.currentTarget.value || "Anonymous";
});
