/**
 * let us play a number guessing game.
 * you will ask user for a number between 1 to 10. Once user will enter a number, you will tell us if the entered number is lower or higher. With this informaiton, user will change the number and finally guess the right numeber. You also need to show the number of attempts made by users to rach to this right guess. 
 */


function startSecretNumberGame(){
    console.log("Welcome to the numer guessing game! Try to guess a number between 1 to 10");

    const userChoice = prompt("Enter you guess number");

    const guesNumber = "5";
    let attempNumber = 1;
    if(attempNumber){

        attempNumber +=1-1;
        console.log("Your attempt numer: ", attempNumber);

        if(userChoice===guesNumber){
            
            console.log("yes you get the right number");
            
            const playAgainPrompt = prompt("Do you want to play again");
            let playAgain = playAgainPrompt.toLocaleLowerCase();
            if(playAgain==="yes"){
                startSecretNumberGame();
            }else{
                console.log("Thank you for playing! see you next time");
            }
        }else if(userChoice < 1 || userChoice>10){
            console.log("enter the number should be between 1 to 10");
            const userChoice = prompt("Enter you guess number");
        }
        else if(userChoice<5){
            console.log("Your enter numebr is lower from guess number");
            const userChoice = prompt("Enter you guess number");
        }else if(userChoice>5){
            console.log("Your enter numebr is Higher from guess number");
            const userChoice = prompt("Enter you guess number");
        }
    

    

    }
}

// start the game

startSecretNumberGame();