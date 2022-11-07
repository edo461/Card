const button = document.querySelector('.button_1');


button.addEventListener('click', () => {
    const radioLevel = document.querySelector('.level-radio:checked')

    if (radioLevel) {
        const value = radioLevel.value
        window.application = {
            level: value
        };
    }

});