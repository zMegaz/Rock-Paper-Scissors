/*function computerPlay() {
  let myArray = ["Rock", "Paper", "Scissors"];
  let rand = Math.floor(Math.random() * myArray.length);
  if (rand === 1) {
    console.log("Rock");
  } else if (rand === 2) {
    console.log("Paper");
  } else if (rand === 3) {
    console.log("scissors");
  }
}
computerPlay();*/

let computerPlay = ["Rock", "Paper", "Scissors"];
let rand = Math.floor(Math.random() * computerPlay.length);
console.log(rand, computerPlay[rand]);
