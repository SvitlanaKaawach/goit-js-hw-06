let inputEl = document.getElementById('name-input');
let outputEl = document.getElementById('name-output');

function fillIn(event) {
    if(inputEl.textContent === ''){
        outputEl.textContent = "Anonymous";
    }
    else { outputEl.textContent = event.currentTarget.value.trim();}
   
   
}

inputEl.addEventListener('input', fillIn);
