let btnRock = document.querySelector('#rock');
let btnPaper = document.querySelector('#paper');
let btnScissors = document.querySelector('#scissors');

let resultDiv = document.getElementById('status');
let roundDiv = document.getElementById('round');
let playerScoreDiv = document.getElementById('playerScore');
let computerScoreDiv = document.getElementById('computerScore');

let computerScore = 0;
let playerScore = 0;

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
  else {
    return "Paper covers rock. ";
  }
}

function win(playerSelection, computerSelection) {
  playerScore++;
  resultDiv.textContent = convertToPhrase(playerSelection, computerSelection) + "You Win!";
  playerScoreDiv.textContent = "Player: " + playerScore;
}

function lose(playerSelection, computerSelection) {
  computerScore++;
  resultDiv.textContent = convertToPhrase(playerSelection, computerSelection) + "You Lose!";
  computerScoreDiv.textContent = "Computer: " + computerScore;
}

function tie(playerSelection, computerSelection) {
  resultDiv.textContent = "It's a tie!";
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

function evaluateScore (playerScore, computerScore) {
  if (playerScore > computerScore) {
    return ["Player has won!", "Player score: " + playerScore + "// " + "Computer score: "
      + computerScore];
  }
  else if (computerScore > playerScore) {
    return ["Computer has won!", "Player score: " + playerScore + "// " + "Computer score: "
      + computerScore];
  }
  else {
    return ["It was a tie!", "Player score: " + playerScore + "// " + "Computer score: "
      + computerScore];
  }
}


function main() {
  let roundCounter = 0;

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
