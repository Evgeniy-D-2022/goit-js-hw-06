const categoriesQuantity = document.querySelectorAll('ul#categories .item');
console.log(`Number of categories: ${categoriesQuantity.length}`);

const categoryQuantity = document.querySelector('ul#categories .item');

categoriesQuantity.forEach(el => console.log(`Category: ${el.firstElementChild.textContent} 
Elements:  ${el.lastElementChild.childElementCount}`));