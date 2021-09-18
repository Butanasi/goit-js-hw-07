const inputEl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text')
const head = document.querySelector('head')



inputEl.addEventListener('input', style);


function style(event) {
    textSpan.style.fontSize =
    `${inputEl.value}px`;
}
