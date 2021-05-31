const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
    link.innerText = 'Im changed by JavaScript!';
}


document.querySelector('h1').innerHTML = "My Name is Robin Singh Patiyal !!"
document.querySelector('h1').innerHTML += '<sub> Welcome to My World! </sub>'

document.querySelector('input[type="text"').type = 'color';
