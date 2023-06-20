const inputEl = document.getElementById('name-input');
const outputEl = document.getElementById('name-output');
function fillIn(event) {
    if(inputEl.textContent ===''){
        outputEl.textContent = "Anonymous";
    }
    else { outputEl.textContent = currentTarget.value;}}
    
inputEl.addEventListener('input', fillIn);