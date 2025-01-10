let input = [];

// let input = [
//   '0123',
//   '1234',
//   '8765',
//   '9876',
// ];

// let input = [
//   '89010123',
//   '78121874',
//   '87430965',
//   '96549874',
//   '45678903',
//   '32019012',
//   '01329801',
//   '10456732',
// ];

let result = 0;
const rowLimitMin = 0;
const rowLimitMax = input.length - 1;
const columnLimitMin = 0;
const columnLimitMax = input[0].length - 1;

let foundPoints = [];
let score = 0;

for (let i = 0; i < input.length; i += 1) {
  const splitRow = input[i].split('');
  for (let j = 0; j < splitRow.length; j += 1) {
    splitRow[j] = parseInt(splitRow[j], 10);
  }

  input[i] = splitRow;
}

// to display graph
// for (let i = 0; i < input.length; i += 1) {
//   console.log(input[i]);
// }

function walkTrail(startingRow, startingColumn, startingValue) {
  const newValue = startingValue + 1;

  // check up
  if (startingRow - 1 >= rowLimitMin) {
    if (input[startingRow - 1][startingColumn] === newValue && newValue < 9) {
      // console.log(`walking trail for ${startingRow - 1}, ${startingColumn}, found new val ${newValue}`);
      walkTrail(startingRow - 1, startingColumn, newValue);
    } else if (input[startingRow - 1][startingColumn] === newValue && newValue === 9) {
      const uniquePoint = checkPoint(startingRow - 1, startingColumn);
      if (uniquePoint) {
        // console.log(`found a nine at ${startingRow - 1}, ${startingColumn}`);
        foundPoints.push([startingRow - 1, startingColumn]);
        score += 1;
      }
    }
  }

  // check down
  if (startingRow + 1 <= rowLimitMax) {
    if (input[startingRow + 1][startingColumn] === newValue && newValue < 9) {
      // console.log(`walking trail for ${startingRow + 1}, ${startingColumn}, found new val ${newValue}`);
      walkTrail(startingRow + 1, startingColumn, newValue);
    } else if (input[startingRow + 1][startingColumn] === newValue && newValue === 9) {
      const uniquePoint = checkPoint(startingRow + 1, startingColumn);
      if (uniquePoint) {
        // console.log(`found a nine at ${startingRow + 1}, ${startingColumn}`);
        foundPoints.push([startingRow + 1, startingColumn]);
        score += 1;
      }
    }
  }

  // check left
  if (startingColumn - 1 >= columnLimitMin) {
    if (input[startingRow][startingColumn - 1] === newValue && newValue < 9) {
      // console.log(`walking trail for ${startingRow}, ${startingColumn - 1}, found new val ${newValue}`);
      walkTrail(startingRow, startingColumn - 1, newValue);
    } else if (input[startingRow][startingColumn - 1] === newValue && newValue === 9) {
      const uniquePoint = checkPoint(startingRow, startingColumn - 1);
      if (uniquePoint) {
        // console.log(`found a nine at ${startingRow}, ${startingColumn - 1}`);
        foundPoints.push([startingRow, startingColumn - 1]);
        score += 1;
      }
    }
  }

  // check right
  if (startingColumn + 1 <= columnLimitMax) {
    if (input[startingRow][startingColumn + 1] === newValue && newValue < 9) {
      // console.log(`walking trail for ${startingRow}, ${startingColumn + 1}, found new val ${newValue}`);
      walkTrail(startingRow, startingColumn + 1, newValue);
    } else if (input[startingRow][startingColumn + 1] === newValue && newValue === 9) {
      const uniquePoint = checkPoint(startingRow, startingColumn + 1);
      if (uniquePoint) {
        // console.log(`found a nine at ${startingRow}, ${startingColumn + 1}`);
        foundPoints.push([startingRow, startingColumn + 1]);
        score += 1;
      }
    }
  }
}

function checkPoint(row, column) {
  let addPoint = true;
  for (let i = 0; i < foundPoints.length; i += 1) {
    if (foundPoints[i][0] === row && foundPoints[i][1] === column) {
      addPoint = false;
      break;
    }
  }

  return addPoint;
}

for (let i = 0; i < input.length; i += 1) {
  for (let j = 0; j < input[0].length; j += 1) {
    if (input[i][j] === 0) {
      // console.log('doing this');
      score = 0;
      foundPoints = [];
      walkTrail(i, j, 0);
      result += score;
    }
  }
}

console.log(`Result: ${result}`);



// =============================================
// =============================================
// =============================================
// PART TWO
// =============================================
// =============================================
// =============================================

result = 0;
score = 0;

function walkFullTrail(startingRow, startingColumn, startingValue) {
  const newValue = startingValue + 1;

  // check up
  if (startingRow - 1 >= rowLimitMin) {
    if (input[startingRow - 1][startingColumn] === newValue && newValue < 9) {
      // console.log(`walking trail for ${startingRow - 1}, ${startingColumn}, found new val ${newValue}`);
      walkFullTrail(startingRow - 1, startingColumn, newValue);
    } else if (input[startingRow - 1][startingColumn] === newValue && newValue === 9) {
      score += 1;
    }
  }

  // check down
  if (startingRow + 1 <= rowLimitMax) {
    if (input[startingRow + 1][startingColumn] === newValue && newValue < 9) {
      // console.log(`walking trail for ${startingRow + 1}, ${startingColumn}, found new val ${newValue}`);
      walkFullTrail(startingRow + 1, startingColumn, newValue);
    } else if (input[startingRow + 1][startingColumn] === newValue && newValue === 9) {
      score += 1;
    }
  }

  // check left
  if (startingColumn - 1 >= columnLimitMin) {
    if (input[startingRow][startingColumn - 1] === newValue && newValue < 9) {
      // console.log(`walking trail for ${startingRow}, ${startingColumn - 1}, found new val ${newValue}`);
      walkFullTrail(startingRow, startingColumn - 1, newValue);
    } else if (input[startingRow][startingColumn - 1] === newValue && newValue === 9) {
      score += 1;
    }
  }

  // check right
  if (startingColumn + 1 <= columnLimitMax) {
    if (input[startingRow][startingColumn + 1] === newValue && newValue < 9) {
      // console.log(`walking trail for ${startingRow}, ${startingColumn + 1}, found new val ${newValue}`);
      walkFullTrail(startingRow, startingColumn + 1, newValue);
    } else if (input[startingRow][startingColumn + 1] === newValue && newValue === 9) {
      score += 1;
    }
  }
}

for (let i = 0; i < input.length; i += 1) {
  for (let j = 0; j < input[0].length; j += 1) {
    if (input[i][j] === 0) {
      // console.log('doing this');
      score = 0;
      walkFullTrail(i, j, 0);
      result += score;
    }
  }
}

console.log(`Result part two: ${result}`);