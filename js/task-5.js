const inputEl = document.querySelector('#name-input');
const nameSpan = document.querySelector('#name-output');

inputEl.addEventListener('input', onInput)


function onInput(event) {
    if (event.currentTarget.value !== '') {
        nameSpan.textContent = event.currentTarget.value
    } else {
        nameSpan.textContent = 'незнакомец!'
    }
}

