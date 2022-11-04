const button = document.querySelector('.button');


button.addEventListener('click', () => {
    const radioLevel = document.querySelector('.level-radio:checked')

    if (radioLevel) {
        const val = target.value
        window.application = val;
    }
    
});