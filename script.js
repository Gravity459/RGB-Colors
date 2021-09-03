const button = document.querySelector('#btn');
console.log(button);

button.addEventListener('click', () => {
    const container = document.querySelector('.container');
    let val1 = Math.floor(Math.random() * 256);
    let val2 = Math.floor(Math.random() * 256);
    let val3 = Math.floor(Math.random() * 256);

    container.style.backgroundColor = `rgb(${val1}, ${val2}, ${val3})`;

    const rgbval = document.querySelector('#rgb-span');
    rgbval.innerText = `The RGB Code for the color is rgb(${val1}, ${val2}, ${val3})`;
});