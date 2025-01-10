const input = [];

let result = 0;

function findMatches(startingRow, startingColumn) {
  let foundMatches = 0;

  // check up
  if (startingRow >= 3) {
    const secondLetter = input[startingRow - 1][startingColumn];
    const thirdLetter = input[startingRow - 2][startingColumn];
    const fourthLetter = input[startingRow - 3][startingColumn];

    if (secondLetter === 'M' && thirdLetter === 'A' && fourthLetter === 'S') {
      foundMatches += 1;
    }
  }

  // check down
  if (startingRow <= (input.length - 4)) {
    const secondLetter = input[startingRow + 1][startingColumn];
    const thirdLetter = input[startingRow + 2][startingColumn];
    const fourthLetter = input[startingRow + 3][startingColumn];

    if (secondLetter === 'M' && thirdLetter === 'A' && fourthLetter === 'S') {
      foundMatches += 1;
    }
  }

  // check left
  if (startingColumn >= 3) {
    const secondLetter = input[startingRow][startingColumn - 1];
    const thirdLetter = input[startingRow][startingColumn - 2];
    const fourthLetter = input[startingRow][startingColumn - 3];

    if (secondLetter === 'M' && thirdLetter === 'A' && fourthLetter === 'S') {
      foundMatches += 1;
    }
  }

  // check right
  if (startingColumn <= (input[0].length - 4)) {
    const secondLetter = input[startingRow][startingColumn + 1];
    const thirdLetter = input[startingRow][startingColumn + 2];
    const fourthLetter = input[startingRow][startingColumn + 3];

    if (secondLetter === 'M' && thirdLetter === 'A' && fourthLetter === 'S') {
      foundMatches += 1;
    }
  }

  // check diag up left
  if (startingRow >= 3 && startingColumn >= 3) {
    const secondLetter = input[startingRow - 1][startingColumn - 1];
    const thirdLetter = input[startingRow - 2][startingColumn - 2];
    const fourthLetter = input[startingRow - 3][startingColumn - 3];

    if (secondLetter === 'M' && thirdLetter === 'A' && fourthLetter === 'S') {
      foundMatches += 1;
    }
  }

  // check diag up right
  if (startingRow >= 3 && startingColumn <= (input[0].length - 4)) {
    const secondLetter = input[startingRow - 1][startingColumn + 1];
    const thirdLetter = input[startingRow - 2][startingColumn + 2];
    const fourthLetter = input[startingRow - 3][startingColumn + 3];

    if (secondLetter === 'M' && thirdLetter === 'A' && fourthLetter === 'S') {
      foundMatches += 1;
    }
  }

  // check diag down left
  if (startingRow <= (input.length - 4) && startingColumn >= 3) {
    const secondLetter = input[startingRow + 1][startingColumn - 1];
    const thirdLetter = input[startingRow + 2][startingColumn - 2];
    const fourthLetter = input[startingRow + 3][startingColumn - 3];

    if (secondLetter === 'M' && thirdLetter === 'A' && fourthLetter === 'S') {
      foundMatches += 1;
    }
  }

  // check diag down right
  if (startingRow <= (input.length - 4) && startingColumn <= (input[0].length - 4)) {
    const secondLetter = input[startingRow + 1][startingColumn + 1];
    const thirdLetter = input[startingRow + 2][startingColumn + 2];
    const fourthLetter = input[startingRow + 3][startingColumn + 3];

    if (secondLetter === 'M' && thirdLetter === 'A' && fourthLetter === 'S') {
      foundMatches += 1;
    }
  }

  return foundMatches;
}

for (let i = 0; i < input.length; i += 1) {
  for (let j = 0; j < input[i].length; j += 1) {
    if (input[i][j] === 'X') {
      const matches = findMatches(i, j);
      result += matches;
    }
  }
}

console.log(`Result: ${result}`);

// PART TWO

result = 0;

function findMatch(startingRow, startingColumn) {
  let foundMatch = false;
  let cornerOne = false;
  let cornerTwo = false;

  if ((startingRow >= 1 && startingRow <= input.length - 2) && (startingColumn <= (input[0].length - 2) && startingColumn >= 1)) {
    // check top left -> bottom right
    const topLeft = input[startingRow - 1][startingColumn - 1];
    const bottomRight = input[startingRow + 1][startingColumn + 1];
    if ((topLeft === 'M' && bottomRight === 'S') || (topLeft === 'S' && bottomRight === 'M')) {
      cornerOne = true;
    }

    // check top right -> bottom left
    const topRight = input[startingRow - 1][startingColumn + 1];
    const bottomLeft = input[startingRow + 1][startingColumn - 1];
    if ((topRight === 'M' && bottomLeft === 'S') || (topRight === 'S' && bottomLeft === 'M')) {
      cornerTwo = true;
    }

    if (cornerOne && cornerTwo) {
      foundMatch = true;
    }
  }

  return foundMatch;
}

for (let i = 0; i < input.length; i += 1) {
  for (let j = 0; j < input[i].length; j += 1) {
    if (input[i][j] === 'A') {
      const match = findMatch(i, j);
      if (match) {
        result += 1;
      }
    }
  }
}

console.log(`Result part two: ${result}`);
