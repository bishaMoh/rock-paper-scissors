const choices = ["rock", "paper", "scissors"];


// get the computer choice
function getComputerChoice(){
    const random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}


// get the human choice
function getHumanChoice(){
    let human = prompt("what is your choice: ");
    let humanChoice = human.toLowerCase();
    for(i = 0; i < 3; i++){
        if (humanChoice === choices[i]){
            return humanChoice;
        }
    }
        return ("please inter a vaild choice!");
    
}


// declare the  players score variables




// palying a single round
function playRound(a, b){
    if(a === b){
        return "it's a draw";
    }else if (a === "rock" && b === "paper"){
        computerScore = computerScore + 1;
        console.log("you lose! paper beats rock");
        return computerScore;
    }else if (a === "rock" && b === "scissors"){
        humanScore = humanScore + 1;
        console.log("you win! rock beats scissors");
        return humanScore;
    }else if (a === "scissors" && b === "paper"){
        humanScore = humanScore + 1;
        console.log("you win! scissors beats paper");
        return humanScore;
    }else if (a === "scissors" && b === "rock"){
        computerScore = computerScore + 1;
        console.log("you lose! rock beats scissors");
        return computerScore;
    }else if (a === "paper" && b === "rock"){
        humanScore = humanScore + 1;
        console.log("you win! paper beats rock");
        return humanScore;
    }else if (a === "paper" && b === "scissors"){
        computerScore = computerScore + 1;
        console.log("you lose! scissors beats paper");
        return computerScore;
    }
}
humanSelection = getHumanChoice();
computerSelection = getComputerChoice();


// playing intire game of 5 rounds
function playGame() {
    humanScore = 0;
    computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        console.log(`\nRound ${i + 1}`);
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("\nFinal Results:");
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Sorry, you lost the game!");
    } else {
        console.log("It's a tie!");
    }
}

// Start the game
playGame();

