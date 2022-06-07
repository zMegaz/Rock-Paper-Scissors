const playerSelection = "Rock";
const computerSelection = computerPlay();

function computerPlay() {
  let computerPlay = ["Rock", "Paper", "Scissors"];
  let computerSelection = Math.floor(Math.random() * computerPlay.length);
  return computerSelection;
  /* if (computerSelection === 1) {
    console.log("Rock");
  } else if (computerSelection === 2) {
    console.log("Paper");
  } else if (computerSelection === 3) {
    console.log("scissors");
  }*/
}
/*function computerPlay() {
  let computerPlay = ["Rock", "Paper", "Scissors"];
  let computerSelection = Math.floor(Math.random() * computerPlay.length);
  return computerPlay[computerSelection];
  /*console.log(computerPlay[computerSelection]);
}*/

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "Rock" && computerSelection == 2) {
    console.log("Player wins");
  } else if (playerSelection == "Rock" && computerSelection == 3) {
    console.log("Computer wins!");
  } else if (playerSelection == "Rock" && computerSelection == 3) {
    console.log("Computer wins!");
  }
}

function game() {}

prompt();
