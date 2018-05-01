function computerPlay () {
  let rando = Math.floor(Math.random() * 3);
  if (rando === 0) {
    return "rock";
  }
  else if (rando === 1) {
    return "paper";
  }
  else {
    return "scissors";
  }
}

function playRound (playerSelection, computerSelection){
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection == "rock" && computerSelection == "scissors") {
    return ["pw", "Rock beats scissors! You win!"];
  }
  else if (playerSelection == "scissors" && computerSelection == "rock"){
    return ["cw","Rock beats scissors! You lose!"];
  }
  else if (playerSelection == "paper" && computerSelection == "rock"){
    return ["pw","Paper covers rock! You win!"];
  }
  else if (playerSelection == "rock" && computerSelection == "paper"){
    return ["cw","Paper covers rock! You lose!"];
  }
  else if (playerSelection == "scissors" && computerSelection == "paper"){
    return ["pw","Scissors cut paper! You win!"];
  }
  else if (playerSelection == "paper" && computerSelection == "scissors"){
    return ["cw","Scissors cut paper! You lose!"];
  }
  else {
    return ["tie","It's a tie!"];
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

let btnRock = document.querySelector('#rock');
let btnPaper = document.querySelector('#paper');
let btnScissors = document.querySelector('#scissors');
let computerSelection = computerPlay();

btnRock.addEventListener('click', function() {
  console.log(playRound('rock', computerSelection)[1]);
});

btnPaper.addEventListener('click', function() {
  console.log(playRound('paper', computerSelection)[1]);
});

btnScissors.addEventListener('click', function() {
  console.log(playRound('scissors', computerSelection)[1]);
});