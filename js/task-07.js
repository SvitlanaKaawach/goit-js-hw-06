const refs = {
    inputRef: document.querySelector('#font-size-control'),
    textRef: document.querySelector('#text'),
};

refs.inputRef.addEventListener('input', onInputChange);
refs.textRef.style.fontSize = refs.inputRef.value + 'px';

function onInputChange(event) {
    refs.textRef.style.fontSize = event.currentTarget.value+"px";
}
