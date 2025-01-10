let playerOnePositions = [
]


let playerOneScore = 0;
let playerTwoScore = 0;
let playerOnePosition = 0;
let playerTwoPosition = 0;
let diceRolls = 0;
let nextDiceRoll = 1;

while (playerOneScore < 1000 && playerTwoScore < 1000) {
  playerOnePosition += nextDiceRoll;
  nextDiceRoll += 1;
  diceRolls += 1;
  if (nextDiceRoll > 100) {
    nextDiceRoll = 1;
  }
  playerOnePosition += nextDiceRoll;
  nextDiceRoll += 1;
  diceRolls += 1;
  if (nextDiceRoll > 100) {
    nextDiceRoll = 1;
  }
  playerOnePosition += nextDiceRoll;
  nextDiceRoll += 1;
  diceRolls += 1;
  if (nextDiceRoll > 100) {
    nextDiceRoll = 1;
  }

  playerOnePosition = playerOnePosition % 10 == 0 ? 10 : playerOnePosition % 10;
  playerOneScore += playerOnePosition;

  if (playerOneScore >= 1000) {
    break;
  }

  playerTwoPosition += nextDiceRoll;
  nextDiceRoll += 1;
  diceRolls += 1;
  if (nextDiceRoll > 100) {
    nextDiceRoll = 1;
  }
  playerTwoPosition += nextDiceRoll;
  nextDiceRoll += 1;
  diceRolls += 1;
  if (nextDiceRoll > 100) {
    nextDiceRoll = 1;
  }
  playerTwoPosition += nextDiceRoll;
  nextDiceRoll += 1;
  diceRolls += 1;
  if (nextDiceRoll > 100) {
    nextDiceRoll = 1;
  }

  playerTwoPosition = playerTwoPosition % 10 == 0 ? 10 : playerTwoPosition % 10;
  playerTwoScore += playerTwoPosition;
}

console.log(`Player 1 score: ${playerOneScore}`);
console.log(`Player 2 score: ${playerTwoScore}`);
console.log(`Dice rolls: ${diceRolls}`);

let playerOneWins = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let playerOneTotalRounds = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let playerTwoWins = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let playerTwoTotalRounds = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function evalPlayerOne(startingPosition, startingScore, turn) {
  for (let firstRollIndex = 1; firstRollIndex <= 3; firstRollIndex += 1) {
    for (let secondRollIndex = 1; secondRollIndex <= 3; secondRollIndex += 1) {
      for (let thirdRollIndex = 1; thirdRollIndex <= 3; thirdRollIndex += 1) {
        let scoreToAdd = (startingPosition + firstRollIndex + secondRollIndex + thirdRollIndex) % 10 == 0 ? 10 : (startingPosition + firstRollIndex + secondRollIndex + thirdRollIndex) % 10;
        let newScore = startingScore + scoreToAdd;
        playerOneTotalRounds[turn] += 1;
        if (newScore >= 21) {
          playerOneWins[turn] += 1;
        } else {
          let newStartingPosition = scoreToAdd;
          evalPlayerOne(newStartingPosition, newScore, turn + 1);
        }
      }
    }
  }
}

function evalPlayerTwo(startingPosition, startingScore, turn) {
  for (let firstRollIndex = 1; firstRollIndex <= 3; firstRollIndex += 1) {
    for (let secondRollIndex = 1; secondRollIndex <= 3; secondRollIndex += 1) {
      for (let thirdRollIndex = 1; thirdRollIndex <= 3; thirdRollIndex += 1) {
        let scoreToAdd = (startingPosition + firstRollIndex + secondRollIndex + thirdRollIndex) % 10 == 0 ? 10 : (startingPosition + firstRollIndex + secondRollIndex + thirdRollIndex) % 10;
        let newScore = startingScore + scoreToAdd;
        // if (turn == 1) {
        //   console.log(`Starting position: ${startingPosition}`);
        //   console.log(`starting score: ${startingScore}`);
        //   console.log(`score to add: ${scoreToAdd}`);
        //   console.log(`newScore: ${newScore}`);
        // }
        playerTwoTotalRounds[turn] += 1;
        if (newScore >= 21) {
          playerTwoWins[turn] += 1;
        } else {
          let newStartingPosition = scoreToAdd;
          evalPlayerTwo(newStartingPosition, newScore, turn + 1);
        }
      }
    }
  }
}

evalPlayerOne(4, 0, 1);
evalPlayerTwo(9, 0, 1);
console.log(playerOneWins);
console.log(playerOneTotalRounds);
console.log('--------------------');
console.log(playerTwoWins);
console.log(playerTwoTotalRounds);

let playerOneCount = 0;

for (let index = 1; index < playerOneWins.length; index += 1) {
  playerOneCount += playerOneWins[index] * (playerTwoTotalRounds[index - 1] - playerTwoWins[index - 1]);
}

console.log(`player one wins: ${playerOneCount}`);

let playerTwoCount = 0;

for (let index = 1; index < playerTwoWins.length; index += 1) {
  playerTwoCount += playerTwoWins[index] * (playerOneTotalRounds[index] - playerOneWins[index]);
}

console.log(`player two wins: ${playerTwoCount}`);
