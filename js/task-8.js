const revs = {
    inputEL: document.querySelector('input'),
    renderBtn: document.querySelector('[data-action="render"]'),
    destroydBtn: document.querySelector('[data-action="destroy"]'),
    divEl: document.querySelector('#boxes')
}


revs.inputEL.addEventListener('input')