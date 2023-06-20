const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
	output.textContent = event.target.value

	if (event.target.value === '') {
		output.textContent = 'Anonymous';
	}
	
});