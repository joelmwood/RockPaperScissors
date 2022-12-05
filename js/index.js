
// TODO
// set playerWantsToContinue = true
let playerWantsToContinue = true;
let pcGuess;
// while (playerWantsToContinue = true){
while (playerWantsToContinue){
        let userScore = 0;
        let pcScore = 0;
    
    for (let numOfGames = 1; numOfGames <= 1; numOfGames++){
        // Ask user for guess (rock, paper, or scissor), sets it to lower case,
        // and keeps asking until user provides requested input
        alert("Round: " + numOfGames);
        let userGuessLowerCase;
        getPlayerChoice();
        function getPlayerChoice(){
            let userGuess;
            let userPickedValidOption = false;
            while(!userPickedValidOption){
                userGuess = prompt("Please type Rock, Paper, or Scissors:");    
                userGuessLowerCase = userGuess.toLowerCase();
                if(userGuessLowerCase==="rock" || 
                   userGuessLowerCase === "paper" || 
                   userGuessLowerCase==="scissors"){
                    userPickedValidOption = true;
                    // console.log("User guess is: " + userGuessLowerCase);
                }{
                    // console.log("User didn't pick a valid choice");
                }
            }   
        }
        // set pc guess = generate random number between 1 - 3
        getComputerChoice();

        // rock beats scissors
        // if user guessed rock and pc guessed scissors
        // print user wins
        if (userGuessLowerCase == "rock" && pcGuess === "scissors"){
            // console.log("You win!");
            displayWinRound(userGuessLowerCase, pcGuess);
            // alert("You guessed " + userGuessLowerCase + "\nPC guessed " + pcGuess + "\nYou win!");
            userScore += 1;
        }
        // if pc guessed rock and user guessed scissors
        // print pc wins
        if (userGuessLowerCase == "scissors" && pcGuess === "rock"){
            // console.log("You lose...");
            displayLoseRound(userGuessLowerCase, pcGuess);
            // alert("You guessed " + userGuessLowerCase + "\nPC guessed " + pcGuess + "\nYou lose...");
            pcScore += 1;
        }

        // paper beats rock
        // if user guessed paper and pc guessed rock 
        // print user wins
        if (userGuessLowerCase == "paper" && pcGuess === "rock"){
            // console.log("You win!");
            displayWinRound(userGuessLowerCase, pcGuess);
            // alert("You guessed " + userGuessLowerCase + "\nPC guessed " + pcGuess + "\nYou win!");
            userScore += 1;

        }
        // if pc guessed paper and user guessed rock 
        // print pc wins
        if (userGuessLowerCase == "rock" && pcGuess === "paper"){
            // console.log("You lose...");
            displayLoseRound(userGuessLowerCase, pcGuess);
            // alert("You guessed " + userGuessLowerCase + "\nPC guessed " + pcGuess + "\nYou lose...");
            pcScore += 1;
        }

        // scissors beats paper
        // if user guessed scissors and pc guessed paper
        // print user wins
        if (userGuessLowerCase == "scissors" && pcGuess === "paper"){
            // console.log("You win!");
            displayWinRound(userGuessLowerCase, pcGuess);
            // alert("You guessed " + userGuessLowerCase + "\nPC guessed " + pcGuess + "\nYou win!");
            userScore += 1;
        }
        // if pc guessed scissors and user guessed paper
        // print pc wins
        if (userGuessLowerCase == "paper" && pcGuess === "scissors"){
            // console.log("You lose...");
            displayLoseRound(userGuessLowerCase, pcGuess);
            // alert("You guessed " + userGuessLowerCase + "\nPC guessed " + pcGuess + "\nYou lose...");
            pcScore += 1;
        }

        // if user guess = pc guess
        // print tie
        if(userGuessLowerCase === pcGuess){
            // console.log("It's a tie...");
            displayTieRound(userGuessLowerCase, pcGuess);
            // alert("You guessed " + userGuessLowerCase + "\nPC guessed " + pcGuess + "\nIt's a tie...");

        }

    }
    displayFinalScores(userScore, pcScore);
    
    // set playerWantsToContinue = ask if player wants to continue (y for yes, n for no)
    let text;
    if (confirm("OK to play again, or Cancel to stop playing") == true) {
        text = "You voted to continue";
        playerWantsToContinue = true;
    } else {
        text = "You canceled the game";
        playerWantsToContinue = false;
    }
    // console.log(text);    
    
// 
}

function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3);
    // 1 is rock, 2 is rock, 3 is scissors
    if (randomNum === 1){
        pcGuess = "rock";
    }else if(randomNum === 2){
        pcGuess = "paper";
    }else{
        pcGuess = "scissors";
    }
    // console.log("PC guess is: " + pcGuess);
}

function displayWinRound(userGuessLowerCase, pcGuess){
    alert("You guessed " + userGuessLowerCase + "\nPC guessed " + pcGuess + "\nYou win the round!");
}

function displayLoseRound(userGuessLowerCase, pcGuess){
    alert("You guessed " + userGuessLowerCase + "\nPC guessed " + pcGuess + "\nYou lose the round...");
}

function displayTieRound(userGuessLowerCase, pcGuess){
    alert("You guessed " + userGuessLowerCase + "\nPC guessed " + pcGuess + "\nIt's a tie this round...");
    
}

function displayFinalScores(userScore, pcScore){
    if(userScore > pcScore){
        alert("UserScore is " + userScore +"\nPCScore is "+  pcScore + "\nYou Win the game!");
    }else if (userScore === pcScore){
        alert("UserScore is " + userScore +"\nPCScore is " + pcScore + "\nIt's a tie...");

    } else{
        alert("UserScore is " + userScore +"\nPCScore is "+  pcScore + "\nYou Lost the game!");
    }
}