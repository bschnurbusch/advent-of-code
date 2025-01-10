// real
const input = [];

const gridSize = 71;
const seconds = 1024;

// example
// const input = [
//   [5,4],
//   [4,2],
//   [4,5],
//   [3,0],
//   [2,1],
//   [6,3],
//   [2,4],
//   [1,5],
//   [0,6],
//   [3,3],
//   [2,6],
//   [5,1],
//   [1,2],
//   [5,5],
//   [2,5],
//   [6,5],
//   [1,4],
//   [0,4],
//   [6,4],
//   [1,1],
//   [6,1],
//   [1,0],
//   [0,5],
//   [1,6],
//   [2,0],
// ];

// const gridSize = 7;
// const seconds = 12;

let result = Infinity;

const newGrid = new Array(gridSize);
for (let i = 0; i < newGrid.length; i += 1) {
  newGrid[i] = new Array(gridSize);
}

for (let i = 0; i < newGrid.length; i += 1) {
  for (let j = 0; j < newGrid[0].length; j += 1) {
    newGrid[i][j] = '.';
  }
}

newGrid[newGrid.length - 1][newGrid[0].length - 1] = 'E';

newGrid.unshift([]);
for (let i = 0; i < newGrid[1].length; i += 1) {
  newGrid[0].push('#');
}

newGrid.push([]);
for (let i = 0; i < newGrid[1].length; i += 1) {
  newGrid[newGrid.length - 1].push('#');
}

for (let i = 0; i < newGrid.length; i += 1) {
  newGrid[i].unshift('#');
  newGrid[i].push('#');
}

// for (let i = 0; i < newGrid.length; i += 1) {
//   console.log(newGrid[i].join(''));
// }

for (let i = 0; i < seconds; i += 1) {
  const row = input[i][1];
  const column = input[i][0];

  newGrid[row + 1][column + 1] = '#';
}

// for (let i = 0; i < newGrid.length; i += 1) {
//   console.log(newGrid[i].join(''));
// }

function walkPath(startingPoint, startingValue, direction) {
  const startingRow = startingPoint[0];
  const startingColumn = startingPoint[1];
  // console.log(`walking: ${startingRow}, ${startingColumn}, ${direction}`);

  if (direction === 'up') {
    if (newGrid[startingRow - 1][startingColumn] === 'E') {
      // nothing yet
      if (startingValue + 1 < result) {
        result = startingValue + 1;
      }
    } else if (newGrid[startingRow - 1][startingColumn] === '.') {
      newGrid[startingRow - 1][startingColumn] = startingValue + 1;
      walkPath([startingRow - 1, startingColumn], startingValue + 1, 'up');
    } else if (newGrid[startingRow - 1][startingColumn] > startingValue + 1) {
      newGrid[startingRow - 1][startingColumn] = startingValue + 1;
      walkPath([startingRow - 1, startingColumn], startingValue + 1, 'up');
    }

    if (newGrid[startingRow][startingColumn - 1] === 'E') {
      // nothing yet
      if (startingValue + 1 < result) {
        result = startingValue + 1;
      }
    } else if (newGrid[startingRow][startingColumn - 1] === '.') {
      newGrid[startingRow][startingColumn - 1] = startingValue + 1;
      walkPath([startingRow, startingColumn - 1], startingValue + 1, 'left');
    } else if (newGrid[startingRow][startingColumn - 1] > startingValue + 1) {
      newGrid[startingRow][startingColumn - 1] = startingValue + 1;
      walkPath([startingRow, startingColumn - 1], startingValue + 1, 'left');
    }

    if (newGrid[startingRow][startingColumn + 1] === 'E') {
      // nothing yet
      if (startingValue + 1 < result) {
        result = startingValue + 1;
      }
    } else if (newGrid[startingRow][startingColumn + 1] === '.') {
      newGrid[startingRow][startingColumn + 1] = startingValue + 1;
      walkPath([startingRow, startingColumn + 1], startingValue + 1, 'right');
    } else if (newGrid[startingRow][startingColumn + 1] > startingValue + 1) {
      newGrid[startingRow][startingColumn + 1] = startingValue + 1;
      walkPath([startingRow, startingColumn + 1], startingValue + 1, 'right');
    }
  }


  if (direction === 'down') {
    if (newGrid[startingRow + 1][startingColumn] === 'E') {
      // nothing yet
      if (startingValue + 1 < result) {
        result = startingValue + 1;
      }
    } else if (newGrid[startingRow + 1][startingColumn] === '.') {
      newGrid[startingRow + 1][startingColumn] = startingValue + 1;
      walkPath([startingRow + 1, startingColumn], startingValue + 1, 'down');
    } else if (newGrid[startingRow + 1][startingColumn] > startingValue + 1) {
      newGrid[startingRow + 1][startingColumn] = startingValue + 1;
      walkPath([startingRow + 1, startingColumn], startingValue + 1, 'down');
    }

    if (newGrid[startingRow][startingColumn - 1] === 'E') {
      // nothing yet
      if (startingValue + 1 < result) {
        result = startingValue + 1;
      }
    } else if (newGrid[startingRow][startingColumn - 1] === '.') {
      newGrid[startingRow][startingColumn - 1] = startingValue + 1;
      walkPath([startingRow, startingColumn - 1], startingValue + 1, 'left');
    } else if (newGrid[startingRow][startingColumn - 1] > startingValue + 1) {
      newGrid[startingRow][startingColumn - 1] = startingValue + 1;
      walkPath([startingRow, startingColumn - 1], startingValue + 1, 'left');
    }

    if (newGrid[startingRow][startingColumn + 1] === 'E') {
      // nothing yet
      if (startingValue + 1 < result) {
        result = startingValue + 1;
      }
    } else if (newGrid[startingRow][startingColumn + 1] === '.') {
      newGrid[startingRow][startingColumn + 1] = startingValue + 1;
      walkPath([startingRow, startingColumn + 1], startingValue + 1, 'right');
    } else if (newGrid[startingRow][startingColumn + 1] > startingValue + 1) {
      newGrid[startingRow][startingColumn + 1] = startingValue + 1;
      walkPath([startingRow, startingColumn + 1], startingValue + 1, 'right');
    }
  }


  if (direction === 'left') {
    if (newGrid[startingRow][startingColumn - 1] === 'E') {
      // nothing yet
      if (startingValue + 1 < result) {
        result = startingValue + 1;
      }
    } else if (newGrid[startingRow][startingColumn - 1] === '.') {
      newGrid[startingRow][startingColumn - 1] = startingValue + 1;
      walkPath([startingRow, startingColumn - 1], startingValue + 1, 'left');
    } else if (newGrid[startingRow][startingColumn - 1] > startingValue + 1) {
      newGrid[startingRow][startingColumn - 1] = startingValue + 1;
      walkPath([startingRow, startingColumn - 1], startingValue + 1, 'left');
    }

    if (newGrid[startingRow - 1][startingColumn] === 'E') {
      // nothing yet
      if (startingValue + 1 < result) {
        result = startingValue + 1;
      }
    } else if (newGrid[startingRow - 1][startingColumn] === '.') {
      newGrid[startingRow - 1][startingColumn] = startingValue + 1;
      walkPath([startingRow - 1, startingColumn], startingValue + 1, 'up');
    } else if (newGrid[startingRow - 1][startingColumn] > startingValue + 1) {
      newGrid[startingRow - 1][startingColumn] = startingValue + 1;
      walkPath([startingRow - 1, startingColumn], startingValue + 1, 'up');
    }

    if (newGrid[startingRow + 1][startingColumn] === 'E') {
      // nothing yet
      if (startingValue + 1 < result) {
        result = startingValue + 1;
      }
    } else if (newGrid[startingRow + 1][startingColumn] === '.') {
      newGrid[startingRow + 1][startingColumn] = startingValue + 1;
      walkPath([startingRow + 1, startingColumn], startingValue + 1, 'down');
    } else if (newGrid[startingRow + 1][startingColumn] > startingValue + 1) {
      newGrid[startingRow + 1][startingColumn] = startingValue + 1;
      walkPath([startingRow + 1, startingColumn], startingValue + 1, 'down');
    }
  }


  if (direction === 'right') {
    if (newGrid[startingRow][startingColumn + 1] === 'E') {
      // nothing yet
      if (startingValue + 1 < result) {
        result = startingValue + 1;
      }
    } else if (newGrid[startingRow][startingColumn + 1] === '.') {
      newGrid[startingRow][startingColumn + 1] = startingValue + 1;
      walkPath([startingRow, startingColumn + 1], startingValue + 1, 'right');
    } else if (newGrid[startingRow][startingColumn + 1] > startingValue + 1) {
      newGrid[startingRow][startingColumn + 1] = startingValue + 1;
      walkPath([startingRow, startingColumn + 1], startingValue + 1, 'right');
    }

    if (newGrid[startingRow - 1][startingColumn] === 'E') {
      // nothing yet
      if (startingValue + 1 < result) {
        result = startingValue + 1;
      }
    } else if (newGrid[startingRow - 1][startingColumn] === '.') {
      newGrid[startingRow - 1][startingColumn] = startingValue + 1;
      walkPath([startingRow - 1, startingColumn], startingValue + 1, 'up');
    } else if (newGrid[startingRow - 1][startingColumn] > startingValue + 1) {
      newGrid[startingRow - 1][startingColumn] = startingValue + 1;
      walkPath([startingRow - 1, startingColumn], startingValue + 1, 'up');
    }

    if (newGrid[startingRow + 1][startingColumn] === 'E') {
      // nothing yet
      if (startingValue + 1 < result) {
        result = startingValue + 1;
      }
    } else if (newGrid[startingRow + 1][startingColumn] === '.') {
      newGrid[startingRow + 1][startingColumn] = startingValue + 1;
      walkPath([startingRow + 1, startingColumn], startingValue + 1, 'down');
    } else if (newGrid[startingRow + 1][startingColumn] > startingValue + 1) {
      newGrid[startingRow + 1][startingColumn] = startingValue + 1;
      walkPath([startingRow + 1, startingColumn], startingValue + 1, 'down');
    }
  }


}

// newGrid[1][2] = '#';
// newGrid[2][1] = '#';
walkPath([1, 1], 0, 'right');

// for (let i = 0; i < newGrid.length; i += 1) {
//   console.log(newGrid[i]);
// }

console.log(`Result: ${result}`);



// PART TWO

function resetGrid() {
  for (let i = 0; i < newGrid.length; i += 1) {
    for (let j = 0; j < newGrid.length; j += 1) {
      if (typeof newGrid[i][j] === 'number') {
        newGrid[i][j] = '.';
      }
    }
  }
}

for (let i = seconds; i < input.length; i += 1) {
  result = Infinity;
  resetGrid();
  const row = input[i][1];
  const column = input[i][0];

  newGrid[row + 1][column + 1] = '#';
  walkPath([1, 1], 0, 'right');

  if (result === Infinity) {
    console.log(`broke at: ${column}, ${row}`);
    break;
  }

  // console.log(`result: ${result}`);
}

// for (let i = 0; i < newGrid.length; i += 1) {
//   console.log(newGrid[i]);
// }