const btn1 = document.querySelector('#btn1');

function scream() {
    alert("SCREAMING!!!!!");
}

function calm() {
    alert("calming down.....");
}

btn1.onclick = scream;
btn1.onclic = calm;


const btn2 = document.querySelector('#btn2');

btn2.addEventListener('click', scream);
btn2.addEventListener('click', calm);

// -----------------------------------------------------------------

const btn3 = document.querySelector('#hello');
const btn4 = document.querySelector('#goodbye');

function hel() {
    console.log("hello");
}

function good() {
    console.log('goodbye');
}

btn1.addEventListener('click', hel);
btn2.addEventListener('click', good);