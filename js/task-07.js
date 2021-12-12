const refs = {
    inputRef: document.querySelector('#font-size-control'),
    textRef: document.querySelector('#text'),
};



function onInputChange(event) {
    refs.textRef.style.fontSize = event.currentTarget.value+"px";
}
refs.inputRef.addEventListener('input', onInputChange);
