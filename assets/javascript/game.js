//this function generates a random number
function generateRandNumber() {
    randomNumber = Math.floor(Math.random() * 101) + 19;
    console.log('random number: ' + randomNumber);
    return randomNumber;
}
//this function generates a random number for gem
function generateGemRandNumber() {
    for (i = 1; i < 5; i++) {
        let gemNumber = Math.floor(Math.random() * 12) + 1;
        buttons.push(gemNumber)
    }
}

function appendNumber2Total(gemNum) {}
//this function is display the random generated number to appropriate html field
function displayRandNumber(htmlTag) {
    randomNumber = generateRandNumber();
    htmlTag.html(randomNumber)
}

function startGame() {
    console.log("you just clicked to start the game...");
    // debugger;
    generateGemRandNumber();
    displayRandNumber(randNumberHtml);
}

function resetGame() {
    sum = 0;
    $('#your-guess').html(sum);
    buttons.length = 0
    generateGemRandNumber();
    displayRandNumber(randNumberHtml);
}