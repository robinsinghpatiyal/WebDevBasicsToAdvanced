const h1 = document.querySelector('h1');
const input = document.querySelector('input');

input.addEventListener('input', function (e) {
    if (input.value === '') {
        h1.innerHTML = "Enter Your Username"
    }
    else {
        h1.innerHTML = "Welcome ";
        h1.innerHTML += input.value;
    }

});