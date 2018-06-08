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

let randNumberHtml = $('#random-number');
        let randomNumber = 0;
        let buttons = []
        let sum = 0;
        let wins = 0;
        let losses = 0;

        $(document).ready(function () {
            startGame();


            let retrievedValue = 0;

            $('#red-crystal').attr('value', buttons[0]);
            retrievedValue = $('#red-crystal').attr('value');

            $('#blue-crystal').attr('value', buttons[1]);
            retrievedValue = $('#blue-crystal').attr('value');

            $('#yellow-crystal').attr('value', buttons[2]);
            retrievedValue = $('#yellow-crystal').attr('value');

            $('#green-crystal').attr('value', buttons[3]);
            retrievedValue = $('#green-crystal').attr('value');
        })


        $('button').on('click', function () {
            sum += parseInt($(this).attr('value'));
            console.log('The total is: ' + sum);
            $('#your-guess').html(sum);


            if (sum === randomNumber) {
                wins++;
                console.log('You win!!!')
                $('#wins').text('Wins: ' + wins)
                $('#status').text('Status: Winer')
                resetGame();
            } else if (sum > randomNumber) {
                losses++;
                console.log('you lose!!!!')
                $('#losses').text('Losses: ' + losses);
                $('#status').text('Status: Loser')
                resetGame();
            }
        })