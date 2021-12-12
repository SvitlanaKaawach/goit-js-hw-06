const categoriesRef = document.getElementById("categories");
console.log(`Number of categories: ${categoriesRef.children.length}`);

const listItemCategoriesRef = categoriesRef.querySelectorAll('.item');
listItemCategoriesRef.forEach(element =>{
const titleRef = element.querySelector('h2')
const listItemRef = element.querySelectorAll('li');
    console.log(`Category: ${titleRef.textContent}`);
    console.log(`Elements: ${listItemRef.length}`);
} );
