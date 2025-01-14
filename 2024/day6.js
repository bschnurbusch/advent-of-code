const input = [];

// const input = [
//   '....#.....',
//   '.........#',
//   '..........',
//   '..#.......',
//   '.......#..',
//   '..........',
//   '.#..^.....',
//   '........#.',
//   '#.........',
//   '......#...',
// ];

let result = 0;

let guardRow;
let guardColumn;
let direction = 'up';

// find starting point
for (let i = 0; i < input.length; i += 1) {
  let foundStartingPoint = false;
  for (let j = 0; j < input[i].length; j += 1) {
    if (input[i][j] === '^') {
      guardRow = i;
      guardColumn = j;
      foundStartingPoint = true;
      break;
    }
  }

  if (foundStartingPoint) {
    break;
  }
}

// console.log(guardRow);
// console.log(guardColumn);

while ((guardRow >= 0 && guardRow <= input.length - 1) && (guardColumn >= 0 && guardColumn <= input[0].length - 1)) {
  const splitRow = input[guardRow].split('');
  splitRow[guardColumn] = 'X';

  const updatedRow = splitRow.join('');
  input[guardRow] = updatedRow;

  let newDirection = direction;
  if (direction === 'up') {
    if (guardRow === 0) {
      break;
    }

    if (input[guardRow - 1][guardColumn] === '#') {
      newDirection = 'right';
      guardColumn += 1;
    } else {
      guardRow -= 1;
    }
  }

  if (direction === 'down') {
    if (guardRow === input.length - 1) {
      break;
    }

    if (input[guardRow + 1][guardColumn] === '#') {
      newDirection = 'left';
      guardColumn -= 1;
    } else {
      guardRow += 1;
    }
  }

  if (direction === 'left') {
    if (guardColumn === 0) {
      break;
    }

    if (input[guardRow][guardColumn - 1] === '#') {
      newDirection = 'up';
      guardRow -= 1;
    } else {
      guardColumn -= 1;
    }
  }

  if (direction === 'right') {
    if (guardColumn === input[0].length - 1) {
      break;
    }

    if (input[guardRow][guardColumn + 1] === '#') {
      newDirection = 'down';
      guardRow += 1;
    } else {
      guardColumn += 1;
    }
  }

  direction = newDirection;
}

for (let i = 0; i < input.length; i += 1) {
  for (let j = 0; j < input[i].length; j += 1) {
    if (input[i][j] === 'X') {
      result += 1;
    }
  }
}

// for (let i = 0; i < input.length; i += 1) {
//   console.log(input[i]);
// }

console.log(`Result: ${result}`);

// PART TWO
result = 0;

function constructNewInput(rowToUpdate, columnToUpdate) {
  const splitRow = input[rowToUpdate].split('');
  splitRow[columnToUpdate] = '#';

  const updatedRow = splitRow.join('');
  const newInput = input.toSpliced(rowToUpdate, 1, updatedRow);

  // for (let i = 0; i < newInput.length; i += 1) {
  //   console.log(newInput[i]);
  // }

  return newInput;
}

function checkNewInput(inputArray) {
  // console.log('checking new input');
  let isLoop = false;

  let guardRow = 48;
  let guardColumn = 85;

  // testing
  // let guardRow = 6;
  // let guardColumn = 4;
  let direction = 'up';

  let trackingLoop = true;
  let trackStartingRow;
  let trackStartingColumn;

  while ((guardRow >= 0 && guardRow <= inputArray.length - 1) && (guardColumn >= 0 && guardColumn <= inputArray[0].length - 1)) {
    const splitRow = inputArray[guardRow].split('');
    if (splitRow[guardColumn] === '#') {
      console.log('PROBLEM');
    }


    if (splitRow[guardColumn] === '3' && trackingLoop === false) {
      trackStartingRow = guardRow;
      trackStartingColumn = guardColumn;
      trackingLoop = true;
    } else if (splitRow[guardColumn] === '3' && trackingLoop === true) {
      if (trackStartingRow === guardRow && trackStartingColumn === guardColumn) {
        isLoop = true;
        break;
      }
    } else {
      trackingLoop = false;
    }




    splitRow[guardColumn] = '3';
  
    const updatedRow = splitRow.join('');
    inputArray[guardRow] = updatedRow;
  
    let newDirection = direction;
    if (direction === 'up') {
      if (guardRow === 0) {
        break;
      }
  
      if (inputArray[guardRow - 1][guardColumn] === '#') {
        if (inputArray[guardRow][guardColumn + 1] === '#') {
          newDirection = 'down';
          guardRow += 1;
        } else {
          newDirection = 'right';
          guardColumn += 1;
        }
      } else {
        guardRow -= 1;
      }
    }
  
    if (direction === 'down') {
      if (guardRow === inputArray.length - 1) {
        break;
      }
  
      if (inputArray[guardRow + 1][guardColumn] === '#') {
        if (inputArray[guardRow][guardColumn - 1] === '#') {
          newDirection = 'up';
          guardRow -= 1;
        } else {
          newDirection = 'left';
          guardColumn -= 1;
        }
      } else {
        guardRow += 1;
      }
    }
  
    if (direction === 'left') {
      if (guardColumn === 0) {
        break;
      }
  
      if (inputArray[guardRow][guardColumn - 1] === '#') {
        if (inputArray[guardRow - 1][guardColumn] === '#') {
          newDirection = 'right';
          guardColumn += 1;
        } else {
          newDirection = 'up';
          guardRow -= 1;
        }
      } else {
        guardColumn -= 1;
      }
    }
  
    if (direction === 'right') {
      if (guardColumn === inputArray[0].length - 1) {
        break;
      }
  
      if (inputArray[guardRow][guardColumn + 1] === '#') {
        if (inputArray[guardRow + 1][guardColumn] === '#') {
          newDirection = 'left';
          guardColumn -= 1;
        } else {
          newDirection = 'down';
          guardRow += 1;
        }
      } else {
        guardColumn += 1;
      }
    }
  
    direction = newDirection;
  }

  return isLoop;
}

for (let i = 0; i < input.length; i += 1) {
  for (let j = 0; j < input[0].length; j += 1) {
    if (i === 48 && j === 85) {
      // console.log('skipping starting point');
      continue;
    }
    if (input[i][j] === 'X') {
      const newInputAttempt = constructNewInput(i, j);
      const loopedInput = checkNewInput(newInputAttempt);

      if (loopedInput) {
        result += 1;
      }
    }
  }
}

console.log(`Result part two: ${result}`);

// for (let i = 0; i < input.length; i += 1) {
//   console.log(input[i]);
// }
