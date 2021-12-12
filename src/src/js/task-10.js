function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs={ 
 buttonCreate: document.querySelector('[data-create]'),
 buttonDestroy: document.querySelector('[data-destroy]'),
 newBox: document.querySelector('#boxes'),
}


refs.buttonCreate.addEventListener('click', createBox);
refs.buttonDestroy.addEventListener('click', destroyBoxes);

function createBox() {
  let amount = + document.querySelector('#controls input').value;
  createBoxes(amount);
  
}

function createBoxes(amount) { 
  let basicSize = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) { 
    let size = basicSize + i * 10;
    let div = document.createElement('div');
    const currentColor = getRandomHexColor();
    div.style.backgroundColor = currentColor;
    div.style.width = `${size} px`;
    div.style.height = `${size} px`;
    fragment.appendChild(div);
  }
  refs.newBox.append(fragment);
}

function destroyBoxes () {
  refs.newBox.innerHTML = '';
}

