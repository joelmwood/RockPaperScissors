
// TODO
// set playerWantsToContinue = true
let playerWantsToContinue = true;
// while (playerWantsToContinue = true){
while (playerWantsToContinue){
    // Ask user for guess (rock, paper, or scissor), sets it to lower case, and keeps asking until user provides requested input
    

    let userGuess
    let userGuessLowerCase
    let userPickedValidOption = false;
    while(!userPickedValidOption){
        userGuess = prompt("Please type Rock, Paper, or Scissors:");    
        userGuessLowerCase = userGuess.toLowerCase();
        if(userGuessLowerCase==="rock" || userGuessLowerCase === "paper" || userGuessLowerCase==="scissors"){
            userPickedValidOption = true;
            // console.log("User guess is: " + userGuessLowerCase);
        }else{
            // console.log("User didn't pick a valid choice");
        }
    }

    // set pc guess = generate random number between 1 - 3
    let randomNum = Math.floor(Math.random() * 3);
    let pcGuess;
    // 1 is rock, 2 is rock, 3 is scissors
    if (randomNum === 1){
        pcGuess = "rock";
    }else if(randomNum === 2){
        pcGuess = "paper";
    }else{
        pcGuess = "scissors";
    }
    // console.log("PC guess is: " + pcGuess);

    // rock beats scissors
    // if user guessed rock and pc guessed scissors
    // print user wins
    if (userGuessLowerCase == "rock" && pcGuess === "scissors"){
        // console.log("You win!");
        alert("You guessed " + userGuessLowerCase + "\nPC guessed " + pcGuess + "\nYou win!");
    }
    // if pc guessed rock and user guessed scissors
    // print pc wins
    if (userGuessLowerCase == "scissors" && pcGuess === "rock"){
        // console.log("You lose...");
        alert("You guessed " + userGuessLowerCase + "\nPC guessed " + pcGuess + "\nYou lose...");
    }

    // paper beats rock
    // if user guessed paper and pc guessed rock 
    // print user wins
    if (userGuessLowerCase == "paper" && pcGuess === "rock"){
        // console.log("You win!");
        alert("You guessed " + userGuessLowerCase + "\nPC guessed " + pcGuess + "\nYou win!");
    }
    // if pc guessed paper and user guessed rock 
    // print pc wins
    if (userGuessLowerCase == "rock" && pcGuess === "paper"){
        // console.log("You lose...");
        alert("You guessed " + userGuessLowerCase + "\nPC guessed " + pcGuess + "\nYou lose...");

    }

    // scissors beats paper
    // if user guessed scissors and pc guessed paper
    // print user wins
    if (userGuessLowerCase == "scissors" && pcGuess === "paper"){
        // console.log("You win!");
        alert("You guessed " + userGuessLowerCase + "\nPC guessed " + pcGuess + "\nYou win!");

    }
    // if pc guessed scissors and user guessed paper
    // print pc wins
    if (userGuessLowerCase == "paper" && pcGuess === "scissors"){
        // console.log("You lose...");
        alert("You guessed " + userGuessLowerCase + "\nPC guessed " + pcGuess + "\nYou lose...");

    }

    // if user guess = pc guess
    // print tie
    if(userGuessLowerCase === pcGuess){
        // console.log("It's a tie...");
        alert("You guessed " + userGuessLowerCase + "\nPC guessed " + pcGuess + "\nIt's a tie...");

    }

    // set playerWantsToContinue = ask if player wants to continue (y for yes, n for no)
    let text;
    if (confirm("OK to play again, or Cancel to stop playing") == true) {
        text = "You voted to continue";
        playerWantsToContinue = true;
    } else {
        text = "You canceled the game";
        playerWantsToContinue = false;
    }
    console.log(text);    
    
// 
}