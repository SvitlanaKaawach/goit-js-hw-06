const refs = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-input'),
};
refs.input.addEventListener('input', onChange);
function onChange(event) {
  refs.span.textContent = event.target.value;
}