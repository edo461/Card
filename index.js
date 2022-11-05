const button = document.querySelector('.button');


button.addEventListener('click', () => {
    const radioLevel = document.querySelector('.level-radio:checked')

    if (radioLevel) {
        const value = radioLevel.value
        window.application = {
            level: value
        };
    }

});