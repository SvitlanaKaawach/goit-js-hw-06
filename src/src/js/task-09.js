function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColorEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

btnChangeColorEl.addEventListener("click", onBtnChangeColor);

function onBtnChangeColor() {
  const currentColor = getRandomHexColor();
  document.body.style.backgroundColor = currentColor;
  spanEl.textContent = currentColor;
}