
const refs={ 
 buttonCreate: document.querySelector('[data-create]'),
 buttonDestroy: document.querySelector('[data-destroy]'),
 newBox: document.querySelector('#boxes'),
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
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
    const div = document.createElement('div');
    const currentColor = getRandomHexColor();
    div.style.backgroundColor = currentColor;
    div.style.width = basicSize + '5px';
    div.style.height = basicSize + 'px';
    div.style.marginTop = '10px';
    fragment.appendChild(div);
    basicSize += 10;
    refs.newBox.append(fragment);
  }
 
}

function destroyBoxes() {
  
  refs.newBox.innerHTML = '';
}

