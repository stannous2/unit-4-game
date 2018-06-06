
//this function generates a random number
function generateRandNumber() {
    randomNumber = Math.floor(Math.random() * 101) + 19;
    console.log('random number: ' + randomNumber);
    return randomNumber;
}

//this function generates a random number for gem
function generateGemRandNumber() {
	for(i = 1; i < 5; i++){
		gemNumbers[i] = Math.floor(Math.random() * 12) + 1;
    	console.log('gem' + i + ' ' + gemNumbers[i]);

    	// this['gemNumber' + i] = gemNumbers[i];
    	// console.log('gemNumber' + i + "____" + this['gemNumber' + i])

    	// console.log ('gemNumber1___: ' + gem1);
    	// console.log ('gemNumber2___: ' + gemNumber2);
    	// console.log ('gemNumber3___: ' + gemNumber3);
    	// console.log ('gemNumber4___: ' + gemNumber4);
	}
    
}

//this function is display the random generated number to appropriate html field
function displayRandNumber(htmlTag) {
    randomNumber = generateRandNumber();
    htmlTag.html(randomNumber)
    console.log('Random number supposed to display : ' + randomNumber);
}






function startGame() {
    
        console.log("you just clicked to start the game...");
        // debugger;
        generateGemRandNumber();
        
        displayRandNumber(randNumberHtml);
    
}


// function startGame() {
//     document.addEventListener("click", () => {
//         console.log("you just clicked to start the game...");

//         //generateRandNumber();
//         generateGemRandNumber();
        
//         displayRandNumber(randNumberHtml);
//     });
// }
