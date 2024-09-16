let score = {
  computer: 0,
  user: 0,
  tie: 0,
  updateScore: function () {
    this.saveScore();
    document.querySelector("#score").innerHTML = `
  User Won: ${this.user} <br>
  Computer Won: ${this.computer} <br>
  Tie: ${this.tie}`;
  },
  saveScore: function () {
    let scoreStr = JSON.stringify(this);
    localStorage.setItem("score", scoreStr);
    console.log(`Score Saved: ${scoreStr}`);
  },
};

function resetScore() {
  score.computer = 0;
  score.user = 0;
  score.tie = 0;
  score.updateScore();
  //Optional
  localStorage.removeItem("score");
}

function initialize() {
  let scoreStr = localStorage.getItem("score");
  if (scoreStr) {
    console.log(`Previous Score Found: ${scoreStr}`);
    let scoreVal = JSON.parse(scoreStr);
    score.computer = scoreVal.computer;
    score.user = scoreVal.user;
    score.tie = scoreVal.tie;
    score.updateScore();
  }
}

function getRandomChoice() {
  let randomChoice = Math.floor(Math.random() * 3 + 1);
  return randomChoice;
}

function getComputerChoice() {
  let randomChoice = getRandomChoice();
  let computerChoice;
  if (randomChoice === 1) {
    computerChoice = "👊 Rock";
  } else if (randomChoice === 2) {
    computerChoice = "✋ Paper";
  } else {
    computerChoice = "✌️ Scissors";
  }
  return computerChoice;
}

function updateResult(userChoice, computerChoice, result) {
  // document.querySelector("#score").innerHTML=`
  // Score: Computer Won ${score.computer}, User Won: ${score.user}, Tie: ${score.tie},`

  document.getElementById("result").innerHTML = `You chose ${userChoice}. <br>
    Computer choice ${computerChoice}. <br>
    And the result is: ${result}`;

  // alert(`
  // You chose ${userChoice}.
  // Computer choice ${computerChoice}.
  // And the result is: ${result}`);
}

function getResult(userChoice, computerChoice) {
  let result;
  if (computerChoice === userChoice) {
    result = "Tie";
    score.tie++;
  } else if (
    (computerChoice === "👊 Rock" && userChoice === "✌️ Scissors") ||
    (computerChoice === "✋ Paper" && userChoice === "👊 Rock") ||
    (computerChoice === "✌️ Scissors" && userChoice === "✋ Paper")
  ) {
    result = "I won";
    score.computer++;
  } else {
    result = "You won";
    score.user++;
  }
  score.updateScore();
  return result;
}

function rockClicked() {
  const userChoice = "👊 Rock";
  let computerChoice = getComputerChoice();
  let result = getResult(userChoice, computerChoice);
  updateResult(userChoice, computerChoice, result);
}

function paperClicked() {
  const userChoice = "✋ Paper";
  let computerChoice = getComputerChoice();
  let result = getResult(userChoice, computerChoice);
  updateResult(userChoice, computerChoice, result);
}

function scissorsClicked() {
  const userChoice = "✌️ Scissors";
  let computerChoice = getComputerChoice();
  let result = getResult(userChoice, computerChoice);
  updateResult(userChoice, computerChoice, result);
}

initialize();
