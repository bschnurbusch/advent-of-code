const newGrid = [];

// example
// const newGrid = [
//   '###############',
//   '#...#...#.....#',
//   '#.#.#.#.#.###.#',
//   '#S#...#.#.#...#',
//   '#######.#.#.###',
//   '#######.#.#...#',
//   '#######.#.###.#',
//   '###..E#...#...#',
//   '###.#######.###',
//   '#...###...#...#',
//   '#.#####.#.###.#',
//   '#.#...#.#.#...#',
//   '#.#.#.#.#.#.###',
//   '#...#...#...###',
//   '###############',
// ];

let result = 0;

for (let i = 0; i < newGrid.length; i += 1) {
  newGrid[i] = newGrid[i].split('');
}

// for (let i = 0; i < newGrid.length; i += 1) {
//   console.log(newGrid[i].join(''));
// }


let currentPoint;

for (let i = 0; i < newGrid.length; i += 1) {
  for (let j = 0; j < newGrid[0].length; j += 1) {
    if (newGrid[i][j] === 'S') {
      currentPoint = [i, j];
      break;
    }
  }
}

let walkSpots = 0;
for (let i = 0; i < newGrid.length; i += 1) {
  for (let j = 0; j < newGrid[0].length; j += 1) {
    if (newGrid[i][j] === '.') {
      walkSpots += 1;
    }
  }
}

console.log(`possible spots: ${walkSpots}`);

console.log(`current point: ${currentPoint}`);


// function walkPath(startingPoint, startingValue, direction) {
//   const startingRow = startingPoint[0];
//   const startingColumn = startingPoint[1];
//   // console.log(`walking: ${startingRow}, ${startingColumn}, ${direction}`);

//   if (direction === 'up') {
//     if (newGrid[startingRow - 1][startingColumn] === 'E') {
//       // nothing yet
//       if (startingValue + 1 < result) {
//         result = startingValue + 1;
//       }
//       newGrid[startingRow - 1][startingColumn] = startingValue + 1;
//     } else if (newGrid[startingRow - 1][startingColumn] === '.') {
//       newGrid[startingRow - 1][startingColumn] = startingValue + 1;
//       walkPath([startingRow - 1, startingColumn], startingValue + 1, 'up');
//     } else if (newGrid[startingRow - 1][startingColumn] > startingValue + 1) {
//       newGrid[startingRow - 1][startingColumn] = startingValue + 1;
//       walkPath([startingRow - 1, startingColumn], startingValue + 1, 'up');
//     } else if (newGrid[startingRow][startingColumn - 1] === 'E') {
//       // nothing yet
//       if (startingValue + 1 < result) {
//         result = startingValue + 1;
//       }
//       newGrid[startingRow][startingColumn - 1] = startingValue + 1;
//     } else if (newGrid[startingRow][startingColumn - 1] === '.') {
//       newGrid[startingRow][startingColumn - 1] = startingValue + 1;
//       walkPath([startingRow, startingColumn - 1], startingValue + 1, 'left');
//     } else if (newGrid[startingRow][startingColumn - 1] > startingValue + 1) {
//       newGrid[startingRow][startingColumn - 1] = startingValue + 1;
//       walkPath([startingRow, startingColumn - 1], startingValue + 1, 'left');
//     } else if (newGrid[startingRow][startingColumn + 1] === 'E') {
//       // nothing yet
//       if (startingValue + 1 < result) {
//         result = startingValue + 1;
//       }
//       newGrid[startingRow][startingColumn + 1] = startingValue + 1;
//     } else if (newGrid[startingRow][startingColumn + 1] === '.') {
//       newGrid[startingRow][startingColumn + 1] = startingValue + 1;
//       walkPath([startingRow, startingColumn + 1], startingValue + 1, 'right');
//     } else if (newGrid[startingRow][startingColumn + 1] > startingValue + 1) {
//       newGrid[startingRow][startingColumn + 1] = startingValue + 1;
//       walkPath([startingRow, startingColumn + 1], startingValue + 1, 'right');
//     }
//   }


//   if (direction === 'down') {
//     if (newGrid[startingRow + 1][startingColumn] === 'E') {
//       // nothing yet
//       if (startingValue + 1 < result) {
//         result = startingValue + 1;
//       }
//       newGrid[startingRow + 1][startingColumn] = startingValue + 1;
//     } else if (newGrid[startingRow + 1][startingColumn] === '.') {
//       newGrid[startingRow + 1][startingColumn] = startingValue + 1;
//       walkPath([startingRow + 1, startingColumn], startingValue + 1, 'down');
//     } else if (newGrid[startingRow + 1][startingColumn] > startingValue + 1) {
//       newGrid[startingRow + 1][startingColumn] = startingValue + 1;
//       walkPath([startingRow + 1, startingColumn], startingValue + 1, 'down');
//     } else if (newGrid[startingRow][startingColumn - 1] === 'E') {
//       // nothing yet
//       if (startingValue + 1 < result) {
//         result = startingValue + 1;
//       }
//       newGrid[startingRow][startingColumn - 1] = startingValue + 1;
//     } else if (newGrid[startingRow][startingColumn - 1] === '.') {
//       newGrid[startingRow][startingColumn - 1] = startingValue + 1;
//       walkPath([startingRow, startingColumn - 1], startingValue + 1, 'left');
//     } else if (newGrid[startingRow][startingColumn - 1] > startingValue + 1) {
//       newGrid[startingRow][startingColumn - 1] = startingValue + 1;
//       walkPath([startingRow, startingColumn - 1], startingValue + 1, 'left');
//     } else if (newGrid[startingRow][startingColumn + 1] === 'E') {
//       // nothing yet
//       if (startingValue + 1 < result) {
//         result = startingValue + 1;
//       }
//       newGrid[startingRow][startingColumn + 1] = startingValue + 1;
//     } else if (newGrid[startingRow][startingColumn + 1] === '.') {
//       newGrid[startingRow][startingColumn + 1] = startingValue + 1;
//       walkPath([startingRow, startingColumn + 1], startingValue + 1, 'right');
//     } else if (newGrid[startingRow][startingColumn + 1] > startingValue + 1) {
//       newGrid[startingRow][startingColumn + 1] = startingValue + 1;
//       walkPath([startingRow, startingColumn + 1], startingValue + 1, 'right');
//     }
//   }


//   if (direction === 'left') {
//     if (newGrid[startingRow][startingColumn - 1] === 'E') {
//       // nothing yet
//       if (startingValue + 1 < result) {
//         result = startingValue + 1;
//       }
//       newGrid[startingRow][startingColumn - 1] = startingValue + 1;
//     } else if (newGrid[startingRow][startingColumn - 1] === '.') {
//       newGrid[startingRow][startingColumn - 1] = startingValue + 1;
//       walkPath([startingRow, startingColumn - 1], startingValue + 1, 'left');
//     } else if (newGrid[startingRow][startingColumn - 1] > startingValue + 1) {
//       newGrid[startingRow][startingColumn - 1] = startingValue + 1;
//       walkPath([startingRow, startingColumn - 1], startingValue + 1, 'left');
//     } else if (newGrid[startingRow - 1][startingColumn] === 'E') {
//       // nothing yet
//       if (startingValue + 1 < result) {
//         result = startingValue + 1;
//       }
//       newGrid[startingRow - 1][startingColumn] = startingValue + 1;
//     } else if (newGrid[startingRow - 1][startingColumn] === '.') {
//       newGrid[startingRow - 1][startingColumn] = startingValue + 1;
//       walkPath([startingRow - 1, startingColumn], startingValue + 1, 'up');
//     } else if (newGrid[startingRow - 1][startingColumn] > startingValue + 1) {
//       newGrid[startingRow - 1][startingColumn] = startingValue + 1;
//       walkPath([startingRow - 1, startingColumn], startingValue + 1, 'up');
//     } else if (newGrid[startingRow + 1][startingColumn] === 'E') {
//       // nothing yet
//       if (startingValue + 1 < result) {
//         result = startingValue + 1;
//       }
//       newGrid[startingRow + 1][startingColumn] = startingValue + 1;
//     } else if (newGrid[startingRow + 1][startingColumn] === '.') {
//       newGrid[startingRow + 1][startingColumn] = startingValue + 1;
//       walkPath([startingRow + 1, startingColumn], startingValue + 1, 'down');
//     } else if (newGrid[startingRow + 1][startingColumn] > startingValue + 1) {
//       newGrid[startingRow + 1][startingColumn] = startingValue + 1;
//       walkPath([startingRow + 1, startingColumn], startingValue + 1, 'down');
//     }
//   }


//   if (direction === 'right') {
//     if (newGrid[startingRow][startingColumn + 1] === 'E') {
//       // nothing yet
//       if (startingValue + 1 < result) {
//         result = startingValue + 1;
//       }
//       newGrid[startingRow][startingColumn + 1] = startingValue + 1;
//     } else if (newGrid[startingRow][startingColumn + 1] === '.') {
//       newGrid[startingRow][startingColumn + 1] = startingValue + 1;
//       walkPath([startingRow, startingColumn + 1], startingValue + 1, 'right');
//     } else if (newGrid[startingRow][startingColumn + 1] > startingValue + 1) {
//       newGrid[startingRow][startingColumn + 1] = startingValue + 1;
//       walkPath([startingRow, startingColumn + 1], startingValue + 1, 'right');
//     } else if (newGrid[startingRow - 1][startingColumn] === 'E') {
//       // nothing yet
//       if (startingValue + 1 < result) {
//         result = startingValue + 1;
//       }
//       newGrid[startingRow - 1][startingColumn] = startingValue + 1;
//     } else if (newGrid[startingRow - 1][startingColumn] === '.') {
//       newGrid[startingRow - 1][startingColumn] = startingValue + 1;
//       walkPath([startingRow - 1, startingColumn], startingValue + 1, 'up');
//     } else if (newGrid[startingRow - 1][startingColumn] > startingValue + 1) {
//       newGrid[startingRow - 1][startingColumn] = startingValue + 1;
//       walkPath([startingRow - 1, startingColumn], startingValue + 1, 'up');
//     } else if (newGrid[startingRow + 1][startingColumn] === 'E') {
//       // nothing yet
//       if (startingValue + 1 < result) {
//         result = startingValue + 1;
//       }
//       newGrid[startingRow + 1][startingColumn] = startingValue + 1;
//     } else if (newGrid[startingRow + 1][startingColumn] === '.') {
//       newGrid[startingRow + 1][startingColumn] = startingValue + 1;
//       walkPath([startingRow + 1, startingColumn], startingValue + 1, 'down');
//     } else if (newGrid[startingRow + 1][startingColumn] > startingValue + 1) {
//       newGrid[startingRow + 1][startingColumn] = startingValue + 1;
//       walkPath([startingRow + 1, startingColumn], startingValue + 1, 'down');
//     }
//   }

// }

// walkPath(currentPoint, 0, 'right');

// for (let i = 0; i < newGrid.length; i += 1) {
//   console.log(newGrid[i]);
// }

function walkPath(startingPoint, startingVal, direction) {
  // console.log(`walking ${direction}, starting from ${startingPoint[0]}, ${startingPoint[1]}, starting val: ${startingVal}`);
  if (startingVal > 4999) {
    return;
  }
  const row = startingPoint[0];
  const column = startingPoint[1];

  const upSpot = newGrid[row - 1][column];
  const downSpot = newGrid[row + 1][column];
  const leftSpot = newGrid[row][column - 1];
  const rightSpot = newGrid[row][column + 1];

  if (direction === 'up') {
    if (upSpot === 'E') {
      newGrid[row - 1][column] = startingVal + 1;
    } else if (upSpot === '.') {
      newGrid[row - 1][column] = startingVal + 1;
      walkPath([row - 1, column], startingVal + 1, 'up');
    } else if (leftSpot === '.') {
      newGrid[row][column - 1] = startingVal + 1;
      walkPath([row, column - 1], startingVal + 1, 'left');
    } else if (rightSpot === '.') {
      newGrid[row][column + 1] = startingVal + 1;
      walkPath([row, column + 1], startingVal + 1, 'right');
    }
  } else if (direction === 'down') {
    if (downSpot === 'E') {
      newGrid[row + 1][column] = startingVal + 1;
    } else if (downSpot === '.') {
      newGrid[row + 1][column] = startingVal + 1;
      walkPath([row + 1, column], startingVal + 1, 'down');
    } else if (leftSpot === '.') {
      newGrid[row][column - 1] = startingVal + 1;
      walkPath([row, column - 1], startingVal + 1, 'left');
    } else if (rightSpot === '.') {
      newGrid[row][column + 1] = startingVal + 1;
      walkPath([row, column + 1], startingVal + 1, 'right');
    }
  } else if (direction === 'left') {
    if (leftSpot === 'E') {
      newGrid[row][column - 1] = startingVal + 1;
    } else if (leftSpot === '.') {
      newGrid[row][column - 1] = startingVal + 1;
      walkPath([row, column - 1], startingVal + 1, 'left');
    } else if (upSpot === '.') {
      newGrid[row - 1][column] = startingVal + 1;
      walkPath([row - 1, column], startingVal + 1, 'up');
    } else if (downSpot === '.') {
      newGrid[row + 1][column] = startingVal + 1;
      walkPath([row + 1, column], startingVal + 1, 'down');
    }
  } else if (direction === 'right') {
    if (rightSpot === 'E') {
      newGrid[row][column + 1] = startingVal + 1;
    } else if (rightSpot === '.') {
      newGrid[row][column + 1] = startingVal + 1;
      walkPath([row, column + 1], startingVal + 1, 'right');
    } else if (upSpot === '.') {
      newGrid[row - 1][column] = startingVal + 1;
      walkPath([row - 1, column], startingVal + 1, 'up');
    } else if (downSpot === '.') {
      newGrid[row + 1][column] = startingVal + 1;
      walkPath([row + 1, column], startingVal + 1, 'down');
    }
  }
}

function walkNewPath(startingPoint, startingVal, direction) {
  // console.log(`NEW walking ${direction}, starting from ${startingPoint[0]}, ${startingPoint[1]}, starting val: ${startingVal}`);
  // if (startingVal > 4999) {
  //   return;
  // }
  const row = startingPoint[0];
  const column = startingPoint[1];

  const upSpot = newGrid[row - 1][column];
  const downSpot = newGrid[row + 1][column];
  const leftSpot = newGrid[row][column - 1];
  const rightSpot = newGrid[row][column + 1];

  if (direction === 'up') {
    if (upSpot === 'E') {
      newGrid[row - 1][column] = startingVal + 1;
    } else if (upSpot === '.') {
      newGrid[row - 1][column] = startingVal + 1;
      walkNewPath([row - 1, column], startingVal + 1, 'up');
    } else if (leftSpot === '.') {
      newGrid[row][column - 1] = startingVal + 1;
      walkNewPath([row, column - 1], startingVal + 1, 'left');
    } else if (rightSpot === '.') {
      newGrid[row][column + 1] = startingVal + 1;
      walkNewPath([row, column + 1], startingVal + 1, 'right');
    }
  } else if (direction === 'down') {
    if (downSpot === 'E') {
      newGrid[row + 1][column] = startingVal + 1;
    } else if (downSpot === '.') {
      newGrid[row + 1][column] = startingVal + 1;
      walkNewPath([row + 1, column], startingVal + 1, 'down');
    } else if (leftSpot === '.') {
      newGrid[row][column - 1] = startingVal + 1;
      walkNewPath([row, column - 1], startingVal + 1, 'left');
    } else if (rightSpot === '.') {
      newGrid[row][column + 1] = startingVal + 1;
      walkNewPath([row, column + 1], startingVal + 1, 'right');
    }
  } else if (direction === 'left') {
    if (leftSpot === 'E') {
      newGrid[row][column - 1] = startingVal + 1;
    } else if (leftSpot === '.') {
      newGrid[row][column - 1] = startingVal + 1;
      walkNewPath([row, column - 1], startingVal + 1, 'left');
    } else if (upSpot === '.') {
      newGrid[row - 1][column] = startingVal + 1;
      walkNewPath([row - 1, column], startingVal + 1, 'up');
    } else if (downSpot === '.') {
      newGrid[row + 1][column] = startingVal + 1;
      walkNewPath([row + 1, column], startingVal + 1, 'down');
    }
  } else if (direction === 'right') {
    if (rightSpot === 'E') {
      newGrid[row][column + 1] = startingVal + 1;
    } else if (rightSpot === '.') {
      newGrid[row][column + 1] = startingVal + 1;
      walkNewPath([row, column + 1], startingVal + 1, 'right');
    } else if (upSpot === '.') {
      newGrid[row - 1][column] = startingVal + 1;
      walkNewPath([row - 1, column], startingVal + 1, 'up');
    } else if (downSpot === '.') {
      newGrid[row + 1][column] = startingVal + 1;
      walkNewPath([row + 1, column], startingVal + 1, 'down');
    }
  }
}

// walkPath(currentPoint, 0, 'right');
// walkNewPath([83, 67], 5000, 'down');


newGrid[currentPoint[0]][currentPoint[1]] = '.'
// console.log(newGrid[currentPoint[0]][currentPoint[1]]=== '.');
let startTest = 0;
while (newGrid[currentPoint[0]][currentPoint[1]] === '.' || newGrid[currentPoint[0]][currentPoint[1]] === 'E') {
  // console.log('walking spot');
  // break;
  const row = currentPoint[0];
  const column = currentPoint[1];

  newGrid[row][column] = startTest;
  startTest += 1;

  const upSpot = newGrid[row -1][column];
  const downSpot = newGrid[row + 1][column];
  const leftSpot = newGrid[row][column - 1];
  const rightSpot = newGrid[row][column + 1];

  if (upSpot === '.' || upSpot === 'E') {
    currentPoint = [row - 1, column];
  } else if (downSpot === '.' || downSpot === 'E') {
    currentPoint = [row + 1, column];
  } else if (leftSpot === '.' || leftSpot === 'E') {
    currentPoint = [row, column - 1];
  } else if (rightSpot === '.' || rightSpot === 'E') {
    currentPoint = [row, column + 1];
  }
}

// console.log(`82, 67: ${newGrid[82][67]}`);
// console.log(`83, 67: ${newGrid[83][67]}`);
// console.log(`83, 66: ${newGrid[83][66]}`);
// for (let i = 0; i < newGrid.length; i += 1) {
//   console.log(newGrid[i]);
// }

let checkThis = 0;
for (let i = 0; i < newGrid.length; i += 1) {
  for (let j = 0; j < newGrid[0].length; j += 1) {
    if (typeof newGrid[i][j] === 'number') {
      checkThis += 1;
    }
    if (newGrid[i][j] === 'S') {
      console.log('forgot this S');
    }

    if (newGrid[i][j] === 'E') {
      console.log('forgot this E');
    }
  }
}
// console.log(`filled spots: ${checkThis}`);

let cheatSaves = [];


function checkSkip(row, column) {
  // console.log(`checking for ${row}, ${column}`);
  const upSpot = newGrid[row - 1][column];
  const downSpot = newGrid[row + 1][column];
  const leftSpot = newGrid[row][column - 1];
  const rightSpot = newGrid[row][column + 1];

  if (typeof upSpot === 'number' && typeof downSpot === 'number') {
    // console.log('up down skip');
    const bigNumber = Math.max(upSpot, downSpot);
    const lowNumber = Math.min(upSpot, downSpot);

    const timeSave = bigNumber - (lowNumber + 2);
    cheatSaves.push(timeSave);
  }
  if (typeof leftSpot === 'number' && typeof rightSpot === 'number') {
    // console.log('left right skip');
    const bigNumber = Math.max(leftSpot, rightSpot);
    const lowNumber = Math.min(leftSpot, rightSpot);

    const timeSave = bigNumber - (lowNumber + 2);
    cheatSaves.push(timeSave);
  }

  // if (typeof upSpot === 'number' && typeof downSpot === 'number' && typeof leftSpot === 'number' && typeof rightSpot === 'number') {
  //   console.log('UH OH');
  // }
}

for (let i = 1; i < newGrid.length - 1; i += 1) {
  for (let j = 1; j < newGrid[i].length - 1; j += 1) {
    if (newGrid[i][j] === '#') {
      checkSkip(i, j);
    }
  }
}

// console.log(cheatSaves);
let testResult = 0;
for (let i = 0; i < cheatSaves.length; i += 1) {
  if (cheatSaves[i] >= 100) {
    testResult += 1;
  }
}
console.log(`test result: ${testResult}`);


// PART TWO

let bigSavers = 0;

function checkNewSkip(row, column, startingVal) {
  for (let i = row - 20; i <= row + 20; i += 1) {
    for (let j = column - 20; j <= column + 20; j += 1) {
      if ((i < 1 || i > (newGrid.length - 2)) || (j < 1 || j > (newGrid[0].length - 2))) {
        continue;
      }
      const rowDistance = Math.abs(row - i);
      const columnDistance = Math.abs(column - j);
      const totalDistance = rowDistance + columnDistance;

      if (totalDistance <= 20 && newGrid[i][j] - (startingVal + totalDistance) >= 100) {
        bigSavers += 1;
      }
    }
  }
}

for (let i = 0; i < newGrid.length - 1; i += 1) {
  for (let j = 0; j < newGrid[0].length - 1; j += 1) {
    if (typeof newGrid[i][j] === 'number') {
      // check if there are possible 100+ second time saves
      checkNewSkip(i, j, newGrid[i][j]);
    }
  }
}

console.log(`big savers: ${bigSavers}`);