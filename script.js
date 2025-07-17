// Write the logic to get the computer choice
function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3);

  if (randomChoice === 0) {
    return "rock";
  } else if (randomChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Write the logic to get the human choice
function getHumanChoice() {
  const humanChoice = prompt("Enter your choice: rock, paper, or scissors");
  return humanChoice;
}

// Write the logic to play the entire game
function playGame() {
  // Declare the players score variables
  let humanScore = 0;
  let computerScore = 0;

  // Write the logic to play a single round
  function playRound(humanChoice, computerChoice) {
    const playerSelection = humanChoice.toLowerCase();
    const computerSelection = computerChoice;
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")
    ) {
      humanScore++;
      console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    } else if (playerSelection === computerSelection) {
      console.log(`It's a tie! You both chose ${playerSelection}.`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    }
  }

  for (let i = 0; i < 5; i++) {
    console.log(`---------- Round ${i + 1} ----------`);
    playRound(getHumanChoice(), getComputerChoice());
    // Log the current score after each round.
    console.log(
      `Current Score -> Player: ${humanScore}, Computer: ${computerScore}`
    );
  }

  // After the loop finishes, declare the final winner.
  console.log("========== GAME OVER ==========");
  console.log(
    `Final Score -> Player: ${humanScore} | Computer: ${computerScore}`
  );

  if (humanScore > computerScore) {
    console.log("Congratulations! You are the overall winner! 🥳");
  } else if (computerScore > humanScore) {
    console.log("The computer won the match. Better luck next time! 🤖");
  } else {
    console.log("The match ended in a tie!");
  }
}

playGame();
