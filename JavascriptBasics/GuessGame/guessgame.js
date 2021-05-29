let maxNum = parseInt(prompt("Enter the maximum number !"));

let guessNum = prompt("Enter your guess !");

let random = Math.floor(Math.random() * maxNum) + 1;
console.log(random);

let loop = false;
let num = 0;

while (loop != true) {
    num++;
    if (parseInt(guessNum) < random) {
        guessNum = prompt("You have entered a Smaller Number \n Enter your guess again !");
    } else if (parseInt(guessNum) > random) {
        guessNum = prompt("You have entered a Greater Number \n Enter your guess again !");
    }
    else if (guessNum == 'q') {
        break;
    }
    else {
        alert(`Hurray!! \nYour guess of ${guessNum} is correct!! \nAnd it took ${num} to Guess it Right!`)
        loop = true;
    }
}