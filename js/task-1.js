const ulEl = document.querySelector('#categories');
console.log(ulEl);


const liRef = document.querySelectorAll('.item');
console.log(liRef);
console.log('Кількість елементів:', liRef.length);


const titleRef = document.querySelectorAll('.item h2');
console.log(titleRef);
console.log(titleRef[0].textContent);
console.log(titleRef[1].textContent);
console.log(titleRef[2].textContent);

console.log(liRef[0].children);
console.log(liRef[0].childNodes.length);
console.log(liRef[1].children);
console.log(liRef[1].childNodes.length);
console.log(liRef[2].children);
console.log(liRef[2].childNodes.length);