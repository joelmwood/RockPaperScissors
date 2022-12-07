
let userScore = 0;
let pcScore = 0;
let ties = 0;
let userGuess;
let pcGuess;


function playerChose(elem){
    // let test = elem.id;
    // console.log("player chose: " + test);
    userGuess = elem.id;
    let userChoiceText = "You chose: " + userGuess;
    document.getElementById("playerGuess").innerHTML = userChoiceText;
    let pcGuess = getComputerChoice();
    let pcChoiceText = "PC chose: " + pcGuess;
    document.getElementById("pcGuess").innerHTML = pcChoiceText;

    compareChoices(userGuess, pcGuess);

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
    // console.log("PC Chose: " + pcGuess);
    return pcGuess;
    
}

function compareChoices(userGuess, pcGuess){
    // rock beats scissors
    // if user guessed rock and pc guessed scissors
    // print user wins
    if (userGuess == "rock" && pcGuess === "scissors"){
        // console.log("You win!");
        increaseUserScore();
    }
    // if pc guessed rock and user guessed scissors
    // print pc wins
    if (userGuess == "scissors" && pcGuess === "rock"){
        // console.log("You lose...");
        increasePCScore();
    }

    // paper beats rock
    // if user guessed paper and pc guessed rock 
    // print user wins
    if (userGuess == "paper" && pcGuess === "rock"){
        // console.log("You win!");
        increaseUserScore();


    }
    // if pc guessed paper and user guessed rock 
    // print pc wins
    if (userGuess == "rock" && pcGuess === "paper"){
        // console.log("You lose...");
        // displayLoseRound(userGuess, pcGuess);
    }

    // scissors beats paper
    // if user guessed scissors and pc guessed paper
    // print user wins
    if (userGuess == "scissors" && pcGuess === "paper"){
        // console.log("You win!");
        increaseUserScore();

    }
    // if pc guessed scissors and user guessed paper
    // print pc wins
    if (userGuess == "paper" && pcGuess === "scissors"){
        // console.log("You lose...");
        increasePCScore();
    }

    // if user guess = pc guess
    // print tie
    if(userGuess === pcGuess){
        // console.log("It's a tie...");
        increaseTies();
    }
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

function increaseUserScore(){
    userScore +=1;
    let userScoreText = "User Score: " + userScore;
    document.getElementById("userScore").innerHTML = userScoreText;
    displayWinner("You!");
}
function increasePCScore(){
    pcScore +=1;
    let pcScoreText = "PC Score: " + pcScore;
    document.getElementById("pcScore").innerHTML = pcScoreText;
    displayWinner("PC :(");
}
function increaseTies(){
    ties +=1;
    let tiesScoreText = "Ties: " + ties;
    document.getElementById("ties").innerHTML = tiesScoreText;
    displayWinner("Tie Round, try again...");
}

function displayWinner(string){
    let winnerText = "Winner: " + string;
    document.getElementById("winnerOfRound").innerHTML = winnerText;
}