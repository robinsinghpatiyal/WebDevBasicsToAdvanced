const bttn1 = document.querySelector("#p1Button");
const bttn2 = document.querySelector("#p2Button");
const reset = document.querySelector("#reset");

const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const playTo = document.querySelector('#playTo');

let winningScore = 2;

playTo.addEventListener('change', () => {
    winningScore = parseInt(playTo.value);
    // alert(typeof (winningScore));
    resetScore();
});


let gameOver = false;


bttn1.addEventListener('click', function () {
    let a = parseInt(p1.innerHTML);
    if (!gameOver) {
        if (a < winningScore) {
            a += 1;
            p1.innerHTML = a;
        }
        if (a == winningScore) {
            gameOver = true;
            p1.classList.add('winner');
            p2.classList.add('looser');
        }
    }
})


bttn2.addEventListener('click', function () {

    let a = parseInt(p2.innerHTML);
    if (!gameOver) {
        if (a < winningScore) {
            a += 1;
            p2.innerHTML = a;
        }
        if (a == winningScore) {
            gameOver = true;
            p2.classList.add('winner');
            p1.classList.add('looser');
        }
    }
})


reset.addEventListener('click', resetScore)

function resetScore() {
    p1.innerHTML = parseInt(0);
    p2.innerHTML = parseInt(0);
    gameOver = false;
    p1.classList.remove('winner', 'looser');
    p2.classList.remove('winner', 'looser');

}
