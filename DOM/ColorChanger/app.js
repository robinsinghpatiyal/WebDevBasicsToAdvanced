const btn = document.querySelector('#btn');
const btn1 = document.querySelector('#align');
const h1 = document.querySelector('h1');



btn1.addEventListener('click', function () {
    document.body.style.textAlign = 'center';
})
btn1.addEventListener('dblclick', function () {
    document.body.style.textAlign = 'left';
})


btn.addEventListener('click', function () {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    document.body.style.background = `rgb(${r},${g},${b})`;
    h1.innerHTML = `rgb(${r},${g},${b})`;

})
