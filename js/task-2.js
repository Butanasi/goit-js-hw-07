const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const listRef = document.querySelector('ul');
console.log(listRef);
const makeIngredients = ingredients => {
    return ingredients.map(ingredient => {
        const itemRef = document.createElement('li');
        itemRef.textContent = ingredient;
        return itemRef
    })
}
const elements = makeIngredients(ingredients)
listRef.append(...elements)
