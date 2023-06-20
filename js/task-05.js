const inputEl = document.querySelector('#name-input');
const titleEl = document.querySelector('#name-output');


inputEl.addEventListener('input', onInputChange);



function onInputChange(event) {
    if (event.currentTarget.value !== '') {
        titleEl.textContent = event.currentTarget.value;
    } else {
        titleEl.textContent = 'Anonymous';
    };
};
