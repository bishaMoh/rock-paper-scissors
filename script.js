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

// palying a single round
function playRound(a, b){
    if (a === b){
        return "it is a draw";
    }else if (
        (a === "rock" && b === "paper") || (a === "scissors" && b === "rock") ||
        (a === "paper" && b === "scissors")
    ){
       computerScore++;
       console.log("you lost this round!");
       return computerScore; 
    }else{
        humanScore++;
        console.log("you won this round!");
        return humanScore;
    }
}



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

