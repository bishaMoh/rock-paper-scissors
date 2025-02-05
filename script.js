let humanScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];


// get the computer choice
function getComputerChoice(){
    const random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}
let computerSelection = getComputerChoice();



// palying a single round

function playRound(a, b){
    let result = "";

    if (a === b){
        result = `it is a tie! both chose ${a}`;

    }else if (
        (a === "rock" && b === "paper") || (a === "scissors" && b === "rock") ||
        (a === "paper" && b === "scissors")
    ){
       computerScore++;
 
        result = "you lost!";

        
    }else{
        humanScore++;

         result = "you won!";
    }
        document.querySelector("#result").textContent = result;
        document.querySelector("#result-text").textContent = `User: ${humanScore} - CPU: ${computerScore}`;
        
        if (humanScore === 5 || computerScore === 5) {
           announceWinner();
    }
}

function announceWinner() {
    let winnerText = '';
    if (humanScore === 5) {
        winnerText = 'Congratulations! You won the game!';
    } else {
        winnerText = 'Sorry, the computer won the game.';
    }

    // Update the winner text
    document.getElementById('winner-text').textContent = winnerText;

    document.querySelector('#btn1').disabled = true;
    document.querySelector('#btn2').disabled = true;
    document.querySelector('#btn3').disabled = true;
}

document.querySelector('#btn1').addEventListener('click', () => playRound("rock", computerSelection));
document.querySelector('#btn2').addEventListener('click', () => playRound("paper", computerSelection));
document.querySelector('#btn3').addEventListener('click', () => playRound("scissors", computerSelection));


