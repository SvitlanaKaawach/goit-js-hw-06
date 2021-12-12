const inputEl = document.getElementById('validation-input');
const inputElLength = inputEl.dataset.length;

inputEl.addEventListener('focus', onFocus);
inputEl.addEventListener('blur', onBlur);

function onFocus(event) {
}
function onBlur(event) {
   if(event.currentTarget.value.length == inputElLength){
      event.currentTarget.classList.remove('invalid');
      event.currentTarget.classList.add('valid');
   } else {
      event.currentTarget.classList.remove('valid');
      event.currentTarget.classList.add('invalid');
   }
}