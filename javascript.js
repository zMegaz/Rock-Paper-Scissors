const playerSelection = prompt("Please input Rock,Paper or Scissors");
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
  //rock
  if (playerSelection === "Rock" && computerSelection == 1) {
    console.log("Tie");
  } else if (playerSelection == "Rock" && computerSelection == 2) {
    console.log("Computer wins!");
  } else if (playerSelection == "Rock" && computerSelection == 3) {
    console.log("Player wins!");
    //paper
  } else if (playerSelection == "Paper" && computerSelection == 1) {
    console.log("Player wins!");
  } else if (playerSelection == "Paper" && computerSelection == 2) {
    console.log("Tie!");
  } else if (playerSelection == "Paper" && computerSelection == 3) {
    console.log("Computer wins!");
  }
  //Scissors
  else if (playerSelection == "Scissors" && computerSelection == 1) {
    console.log("Computer wins!");
  } else if (playerSelection == "Scissors" && computerSelection == 2) {
    console.log("Player wins!");
  } else if (playerSelection == "Scissors" && computerSelection == 3) {
    console.log("Tie!");
  } else {
    ("Please input Rock, Paper or Scissors");
  }
}
playRound(playerSelection, computerSelection);
/*function game() {
  //Play game 5 times
  for (let i = 0; i < 5; i++) {
    const playerSelection = "Rock";
    const computerSelection = computerPlay();
    // Call playRound function, passing in newly returned values
    // from the playerPlay and computerPlay functions
    const currentRound = playRound(playerSelection, computerSelection);
    // Log our result
    console.log(currentRound);
  }
}*/
