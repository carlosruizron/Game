

function getRandomNumber(min, max) {
	return parseInt(Math.random() * ((max + 1) - min) + min);
}

let number = getRandomNumber(4,6);

function computerPlay () {
    let object = "";
    if (number == 4) {
        object = "rock";
    }
    else if (number == 5) {
        object = "paper";
    }
    else {
        object = "scissors";
    }
    return object;
}

let computerSelection =  computerPlay();
let message = "";
let letsGoGame = (realPlayer, pcPlayer) => {
    
    if (realPlayer == pcPlayer) {
        message = "Is tie"
    }
    else if (realPlayer == "rock" && pcPlayer == "paper") {
        message = "You lose"
    }
    else if (realPlayer == "paper" && pcPlayer == "rock") {
        message = "You win"
    }
    else if (realPlayer == "paper" && pcPlayer == "scissors") {
        message = "You lose"
    }
    else if (realPlayer == "scissors" && pcPlayer == "paper") {
        message = "You win" 
    }
    else if (realPlayer == "rock" && pcPlayer == "scissors") {
        message = "You win"
    }
    else if (realPlayer == "scissors" && pcPlayer == "rock") {
        message = "You lose"
    }
    return message;
}

let playerSelection = "";

function getPrompt () {
    playerSelection = prompt();
    playerSelection = playerSelection.toLowerCase();
}

// console.log("Computer throw: " + computerSelection);
// console.log("You throw: " + playerSelection);
// console.log(letsGoGame(playerSelection, computerSelection));

function game () {
    let points = 0;
    let finalMessage = "";
    for (let i = 0; i < 5; i++) {
        if (message == "Is tie") {
            points = points
            i = i - 1;
        }
        else if (message == "You win") {
            points++
        }
        else {
            points = points
        }
        getPrompt ()
        number = getRandomNumber(4,6);
        computerSelection = computerPlay();
        letsGoGame(playerSelection, computerSelection)
        console.log("Computer throw: " + computerSelection)
        console.log("You throw: " + playerSelection)
        console.log(message)
        
    }
    if (points >= 3) {
        finalMessage = "Congratulations!!! You win the Game!!!"
    }
    else {
        finalMessage = "Sorry, the next time!!!"
    }
    return finalMessage
}

console.log(game());
