const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const couterValue = document.querySelector("#value");
let newValue = 0

function increment() {
     newValue += 1;
    return couterValue.textContent = newValue
}

function decrement() {
    newValue -= 1
   return couterValue.textContent = newValue
}

btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment)
    



