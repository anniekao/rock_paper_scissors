let btnRock = document.querySelector('#rock');
let btnPaper = document.querySelector('#paper');
let btnScissors = document.querySelector('#scissors');

let resultDiv = document.getElementById('status');
let roundDiv = document.getElementById('round');
let playerScoreDiv = document.getElementById('playerScore');
let computerScoreDiv = document.getElementById('computerScore');

let computerScore = 0;
let playerScore = 0;
let roundCounter = 0;

function computerPlay () {
  let rando = Math.floor(Math.random() * 3);
  if (rando === 0) {
    return "r";
  }
  else if (rando === 1) {
    return "p";
  }
  else {
    return "s";
  }
}

function convertToPhrase(playerSelection, computerSelection) {
  if (playerSelection === "r" && computerSelection === "s" ||
    playerSelection === "s" && computerSelection === "r") {
    return "Rock breaks scissors. ";
  }
  else if (playerSelection === "s" && computerSelection === "p" ||
    playerSelection === "p" && computerSelection === "s") {
    return "Scissors cut paper. ";
  }
  else if (playerSelection === "p" && computerSelection === "r" ||
    playerSelection === "r" && computerSelection === "p") {
    return "Paper covers rock. ";
  }
}

function convertToWord(playerSelection) {
  if (playerSelection === "r") {return "rock";}
  else if (playerSelection === "p") {return "paper";}
  else {return "scissors";}
}

function win(playerSelection, computerSelection) {
  playerScore++;
  resultDiv.textContent = `${convertToPhrase(playerSelection, computerSelection)} You Win!`;
  playerScoreDiv.textContent = "Player: " + playerScore;
  evaluateScore(playerScore, computerScore);
}

function lose(playerSelection, computerSelection) {
  computerScore++;
  resultDiv.textContent = `${convertToPhrase(playerSelection, computerSelection)} You Lose!`;
  computerScoreDiv.textContent = "Computer: " + computerScore;
  evaluateScore(playerScore, computerScore);
}

function tie(playerSelection, computerSelection) {
  resultDiv.textContent = `You both chose ${convertToWord(playerSelection)}. It's a tie!`;
  evaluateScore(playerScore, computerScore);
}

function playRound (playerSelection){
  let computerSelection = computerPlay();

  switch (playerSelection + computerSelection) {
    case "pr":
    case "rs":
    case "sp":
      win(playerSelection, computerSelection);
      break;
    case "rp":
    case "sr":
    case "ps":
      lose(playerSelection, computerSelection);
      break;
    case "rr":
    case "ss":
    case "pp":
      tie(playerSelection, computerSelection);
      break;
  }
}

function reset () {
  playerScore = 0;
  computerScore = 0;
  roundCounter = -1;

  playerScoreDiv.textContent = "Player: " + playerScore;
  computerScoreDiv.textContent = "Computer: " + computerScore;
  roundDiv.textContent = "Round: 0";
}

function evaluateScore (playerScore, computerScore) {
  if (playerScore == 5) {
    console.log ("You got to 5 points first! You win!");
    reset();
  }
  else if (computerScore == 5) {
    console.log ("Computer got to 5 points first! You lose!");
    reset();
  }
  else if (playerScore == 5 && computerScore == 5){
    console.log ("You both scored 5 points!");
    reset();
  }
}


function main() {
  btnRock.addEventListener('click', function() {
    playRound ('r');
    roundCounter++
    roundDiv.textContent = "Round: " + roundCounter;
  });

  btnPaper.addEventListener('click', function() {
    playRound ('p');
    roundCounter++
    roundDiv.textContent = "Round: " + roundCounter;
  });

  btnScissors.addEventListener('click', function() {
    playRound ('s');
    roundCounter++
    roundDiv.textContent = "Round: " + roundCounter;
  });


}

main();
