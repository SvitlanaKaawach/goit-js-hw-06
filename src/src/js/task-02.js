const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.getElementById('ingredients');
console.log(ingredientsList);

const fragmentList = document.createDocumentFragment();

ingredients.forEach(ingredient => {
  const ingredientsListElement = document.createElement('li');
  ingredientsListElement.textContent = ingredient;
  ingredientsListElement.classList.add('item');
  fragmentList.append(ingredientsListElement);
});

ingredientsList.append(fragmentList);
console.log(fragmentList);