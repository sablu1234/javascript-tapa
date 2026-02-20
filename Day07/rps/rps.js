/**
 * The rock 😁, paper ,or scissors game
 * The game will be played between the computer and human.Once human select rock ,paper, or secissors and in the next turn the computer will select rock ,papper or scissors.
 * The winner will be selected base on this rules :
 * - Rock can breaks scissors => Rock Wins
 * - Papper can wrap Rock => papper wins
 * -Scissors can cut Paper => Scissors wins
 * Ask the input from the user and randomly select a computer selection to continue the game
 * 
 */ 


// Assumptions
// 1. we have to prompt the user to get theit inputs
// 2. computer selection will be random
//  3. We have to compare user and computer's choice
//  4. We have to announce the winner .
//  5. After the winner announcement, we may want to ask the user to play again or quite from the game.

function rockPaperScissorsGame(){
    console.log("Getting Started with the Rock, Paper or Scissors Game");
    const userChoicePrompt = prompt("Enter Rock,Paper, or Scissors");
    const userChoice = userChoicePrompt.toLowerCase();
    let computerChoice;
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if(randomNumber === 1){
        computerChoice = "rock";
    }else if(randomNumber === 2){
        computerChoice = "paper";
    }else{
        computerChoice = "scissors";
    }

    console.log("User Selected", userChoice);
    console.log("Computer Selected", computerChoice);

    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")    
    ){
        console.log("You the User WIN,Yay!");
    }else if( userChoice===computerChoice){
        console.log("The Game is Tie");
    }else if(
        (userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "rock")
    ){
        console.log("Oh Ho....Computer Wins!!!");
    } else{
        console.log(" Please check the input , We did not understand it");
    }

    const playAgainPrompt = prompt("Do you want to play again? (yes/no)");
    const playAgain = playAgainPrompt ? playAgainPrompt.toLocaleLowerCase() : "no";

    if(playAgain === "yes"){
        rockPaperScissorsGame();
    }else{
        console.log("Thanks for playin! See you next time");
    }

}
// start the game
rockPaperScissorsGame();