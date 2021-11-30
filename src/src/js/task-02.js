const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsListRef = document.getElementById("ingredients");

const ingredientsEl = ingredients.map(ingredient => {
  const ingredientsList = document.createElement('li');
  ingredientsList.classList.add('item');
  ingredientsList.textContent = ingredient;

  return ingredientsList;
});
console.log(ingredientsEl);

// for (let i = 0; i < ingredients.length; i +=1 ) {
//   const ingredientsList = document.createElement('li');
//   ingredientsList.classList.add('item');
//   ingredientsList.textContent = ingredients[i];
//   ingredientsEl.push(ingredientsList);
 
// }


ingredientsListRef.append(...ingredientsEl);