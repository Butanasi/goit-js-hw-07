
const itemEl = document.querySelectorAll('.item h2')
itemEl.forEach(item =>
        console.log(`Категория: ${item.textContent}, 
        Количество элементов: ${item.nextElementSibling.children.length}`))
