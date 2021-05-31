function calltwotimes(func) {
    func();
    func();
}

function rollDice() {
    console.log(Math.floor(Math.random() * 6) + 1);
}

calltwotimes(rollDice);