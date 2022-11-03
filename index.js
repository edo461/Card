const butt_one = document.querySelector('.box_1');
const butt_two = document.querySelector('.box_2');
const butt_three = document.querySelector('.box_3');
const button = document.querySelector('.button');
const boxes = document.querySelector('.boxes');

butt_one.addEventListener('click', (e) => {
    const target = e.target
    console.log(target);
});

butt_two.addEventListener('click', (a) => {
    const target = a.target
    console.log(target);
});

butt_three.addEventListener('click', (b) => {
    const target = b.target
    console.log(target);
});

button.addEventListener('click', () => {
    if (boxes.checked == true) 
    return;
});