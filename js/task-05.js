let inputEl = document.getElementById('name-input');
let outputEl = document.getElementById('name-output');

function fillIn(event) {
    if(event.currentTarget.value === ''){
        outputEl.textContent = "Anonymous";
    }
    else { outputEl.textContent = event.currentTarget.value;}
   
   
}

inputEl.addEventListener('input', fillIn);
