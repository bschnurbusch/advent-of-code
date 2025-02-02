const input = [
];

// small example
// const input = [
//   '###############',
//   '#.......#....E#',
//   '#.#.###.#.###.#',
//   '#.....#.#...#.#',
//   '#.###.#####.#.#',
//   '#.#.#.......#.#',
//   '#.#.#####.###.#',
//   '#...........#.#',
//   '###.#.#####.#.#',
//   '#...#.....#.#.#',
//   '#.#.#.###.#.#.#',
//   '#.....#...#.#.#',
//   '#.###.#.#.#.#.#',
//   '#S..#.....#...#',
//   '###############',
// ];

// large example
// const input = [
//   '#################',
//   '#...#...#...#..E#',
//   '#.#.#.#.#.#.#.#.#',
//   '#.#.#.#...#...#.#',
//   '#.#.#.#.###.#.#.#',
//   '#...#.#.#.....#.#',
//   '#.#.#.#.#.#####.#',
//   '#.#...#.#.#.....#',
//   '#.#.#####.#.###.#',
//   '#.#.#.......#...#',
//   '#.#.###.#####.###',
//   '#.#.#...#.....#.#',
//   '#.#.#.#####.###.#',
//   '#.#.#.........#.#',
//   '#.#.#.#########.#',
//   '#S#.............#',
//   '#################',
// ];

// custom
// const input = [
//   '###############',
//   '#.......#....E#',
//   '#.#.###.#.###.#',
//   '#.....#.#...#.#',
//   '#.###.#####.#.#',
//   '#.#.#.......#.#',
//   '#.#.#####.###.#',
//   '#...........#.#',
//   '###.#.#####.#.#',
//   '#...#.....#.#.#',
//   '#.#.#.###.#.#.#',
//   '#.....#...#.#.#',
//   '#.###.#.#.#.#.#',
//   '#S..#.....#...#',
//   '###############',
// ];

let result = Infinity;
let pathTotals = [];
let currentPoint;
let direction = 'right';

for (let i = 0; i < input.length; i += 1) {
  input[i] = input[i].split('');
}

for (let i = 0; i < input.length; i += 1) {
  for (let j = 0; j < input[0].length; j += 1) {
    if (input[i][j] === 'S') {
      currentPoint = [i, j];
      break;
    }
  }
}

// console.log(currentPoint);

// function walkPath(startingPoint, startingValue, direction) {
//   const startingRow = startingPoint[0];
//   const startingColumn = startingPoint[1];

//   if (direction === 'up') {
//     if (input[startingRow - 1][startingColumn] === 'E') {
//       // nothing yet
//       if (startingValue + 1 < result) {
//         result = startingValue + 1;
//       }
//     } else if (input[startingRow - 1][startingColumn] === '.') {
//       input[startingRow - 1][startingColumn] = startingValue + 1;
//       walkPath([startingRow - 1, startingColumn], startingValue + 1, 'up');
//     } else if (input[startingRow - 1][startingColumn] > startingValue + 1) {
//       input[startingRow - 1][startingColumn] = startingValue + 1;
//       walkPath([startingRow - 1, startingColumn], startingValue + 1, 'up');
//     }

//     if (input[startingRow][startingColumn - 1] === 'E') {
//       // nothing yet
//       if (startingValue + 1001 < result) {
//         result = startingValue + 1001;
//       }
//     } else if (input[startingRow][startingColumn - 1] === '.') {
//       input[startingRow][startingColumn - 1] = startingValue + 1001;
//       walkPath([startingRow, startingColumn - 1], startingValue + 1001, 'left');
//     } else if (input[startingRow][startingColumn - 1] > startingValue + 1001) {
//       input[startingRow][startingColumn - 1] = startingValue + 1001;
//       walkPath([startingRow, startingColumn - 1], startingValue + 1001, 'left');
//     }

//     if (input[startingRow][startingColumn + 1] === 'E') {
//       // nothing yet
//       if (startingValue + 1001 < result) {
//         result = startingValue + 1001;
//       }
//     } else if (input[startingRow][startingColumn + 1] === '.') {
//       input[startingRow][startingColumn + 1] = startingValue + 1001;
//       walkPath([startingRow, startingColumn + 1], startingValue + 1001, 'right');
//     } else if (input[startingRow][startingColumn + 1] > startingValue + 1001) {
//       input[startingRow][startingColumn + 1] = startingValue + 1001;
//       walkPath([startingRow, startingColumn + 1], startingValue + 1001, 'right');
//     }
//   }


//   if (direction === 'down') {
//     if (input[startingRow + 1][startingColumn] === 'E') {
//       // nothing yet
//       if (startingValue + 1 < result) {
//         result = startingValue + 1;
//       }
//     } else if (input[startingRow + 1][startingColumn] === '.') {
//       input[startingRow + 1][startingColumn] = startingValue + 1;
//       walkPath([startingRow + 1, startingColumn], startingValue + 1, 'down');
//     } else if (input[startingRow + 1][startingColumn] > startingValue + 1) {
//       input[startingRow + 1][startingColumn] = startingValue + 1;
//       walkPath([startingRow + 1, startingColumn], startingValue + 1, 'down');
//     }

//     if (input[startingRow][startingColumn - 1] === 'E') {
//       // nothing yet
//       if (startingValue + 1001 < result) {
//         result = startingValue + 1001;
//       }
//     } else if (input[startingRow][startingColumn - 1] === '.') {
//       input[startingRow][startingColumn - 1] = startingValue + 1001;
//       walkPath([startingRow, startingColumn - 1], startingValue + 1001, 'left');
//     } else if (input[startingRow][startingColumn - 1] > startingValue + 1001) {
//       input[startingRow][startingColumn - 1] = startingValue + 1001;
//       walkPath([startingRow, startingColumn - 1], startingValue + 1001, 'left');
//     }

//     if (input[startingRow][startingColumn + 1] === 'E') {
//       // nothing yet
//       if (startingValue + 1001 < result) {
//         result = startingValue + 1001;
//       }
//     } else if (input[startingRow][startingColumn + 1] === '.') {
//       input[startingRow][startingColumn + 1] = startingValue + 1001;
//       walkPath([startingRow, startingColumn + 1], startingValue + 1001, 'right');
//     } else if (input[startingRow][startingColumn + 1] > startingValue + 1001) {
//       input[startingRow][startingColumn + 1] = startingValue + 1001;
//       walkPath([startingRow, startingColumn + 1], startingValue + 1001, 'right');
//     }
//   }


//   if (direction === 'left') {
//     if (input[startingRow][startingColumn - 1] === 'E') {
//       // nothing yet
//       if (startingValue + 1 < result) {
//         result = startingValue + 1;
//       }
//     } else if (input[startingRow][startingColumn - 1] === '.') {
//       input[startingRow][startingColumn - 1] = startingValue + 1;
//       walkPath([startingRow, startingColumn - 1], startingValue + 1, 'left');
//     } else if (input[startingRow][startingColumn - 1] > startingValue + 1) {
//       input[startingRow][startingColumn - 1] = startingValue + 1;
//       walkPath([startingRow, startingColumn - 1], startingValue + 1, 'left');
//     }

//     if (input[startingRow - 1][startingColumn] === 'E') {
//       // nothing yet
//       if (startingValue + 1001 < result) {
//         result = startingValue + 1001;
//       }
//     } else if (input[startingRow - 1][startingColumn] === '.') {
//       input[startingRow - 1][startingColumn] = startingValue + 1001;
//       walkPath([startingRow - 1, startingColumn], startingValue + 1001, 'up');
//     } else if (input[startingRow - 1][startingColumn] > startingValue + 1001) {
//       input[startingRow - 1][startingColumn] = startingValue + 1001;
//       walkPath([startingRow - 1, startingColumn], startingValue + 1001, 'up');
//     }

//     if (input[startingRow + 1][startingColumn] === 'E') {
//       // nothing yet
//       if (startingValue + 1001 < result) {
//         result = startingValue + 1001;
//       }
//     } else if (input[startingRow + 1][startingColumn] === '.') {
//       input[startingRow + 1][startingColumn] = startingValue + 1001;
//       walkPath([startingRow + 1, startingColumn], startingValue + 1001, 'down');
//     } else if (input[startingRow + 1][startingColumn] > startingValue + 1001) {
//       input[startingRow + 1][startingColumn] = startingValue + 1001;
//       walkPath([startingRow + 1, startingColumn], startingValue + 1001, 'down');
//     }
//   }


//   if (direction === 'right') {
//     if (input[startingRow][startingColumn + 1] === 'E') {
//       // nothing yet
//       if (startingValue + 1 < result) {
//         result = startingValue + 1;
//       }
//     } else if (input[startingRow][startingColumn + 1] === '.') {
//       input[startingRow][startingColumn + 1] = startingValue + 1;
//       walkPath([startingRow, startingColumn + 1], startingValue + 1, 'right');
//     } else if (input[startingRow][startingColumn + 1] > startingValue + 1) {
//       input[startingRow][startingColumn + 1] = startingValue + 1;
//       walkPath([startingRow, startingColumn + 1], startingValue + 1, 'right');
//     }

//     if (input[startingRow - 1][startingColumn] === 'E') {
//       // nothing yet
//       if (startingValue + 1001 < result) {
//         result = startingValue + 1001;
//       }
//     } else if (input[startingRow - 1][startingColumn] === '.') {
//       input[startingRow - 1][startingColumn] = startingValue + 1001;
//       walkPath([startingRow - 1, startingColumn], startingValue + 1001, 'up');
//     } else if (input[startingRow - 1][startingColumn] > startingValue + 1001) {
//       input[startingRow - 1][startingColumn] = startingValue + 1001;
//       walkPath([startingRow - 1, startingColumn], startingValue + 1001, 'up');
//     }

//     if (input[startingRow + 1][startingColumn] === 'E') {
//       // nothing yet
//       if (startingValue + 1001 < result) {
//         result = startingValue + 1001;
//       }
//     } else if (input[startingRow + 1][startingColumn] === '.') {
//       input[startingRow + 1][startingColumn] = startingValue + 1001;
//       walkPath([startingRow + 1, startingColumn], startingValue + 1001, 'down');
//     } else if (input[startingRow + 1][startingColumn] > startingValue + 1001) {
//       input[startingRow + 1][startingColumn] = startingValue + 1001;
//       walkPath([startingRow + 1, startingColumn], startingValue + 1001, 'down');
//     }
//   }


// }

// walkPath(currentPoint, 0, 'right');

// for (let i = 0; i < input.length; i += 1) {
//   console.log(input[i]);
// }

// console.log(`Result: ${result}`);


// PART TWO
let totalPoints = [];
const partOne = 7036;


for (let i = 0; i < input.length; i += 1) {
  for (let j = 0; j < input[0].length; j += 1) {
    if (input[i][j] === 'S') {
      currentPoint = [i, j];
      break;
    }
  }
}

let addLater = [];

function walkPath(startingPoint, startingValue, direction) {
  const startingRow = startingPoint[0];
  const startingColumn = startingPoint[1];

  if (direction === 'up') {
    if (input[startingRow - 1][startingColumn] === 'E') {
      // nothing yet
      if (startingValue + 1 < result) {
        result = startingValue + 1;
      }
    } else if (input[startingRow - 1][startingColumn] === '.') {
      input[startingRow - 1][startingColumn] = startingValue + 1;
      walkPath([startingRow - 1, startingColumn], startingValue + 1, 'up');
    } else if (input[startingRow - 1][startingColumn] > startingValue + 1) {
      input[startingRow - 1][startingColumn] = startingValue + 1;
      walkPath([startingRow - 1, startingColumn], startingValue + 1, 'up');
    }

    if (input[startingRow][startingColumn - 1] === 'E') {
      // nothing yet
      if (startingValue + 1001 < result) {
        result = startingValue + 1001;
      }
    } else if (input[startingRow][startingColumn - 1] === '.') {
      input[startingRow][startingColumn - 1] = startingValue + 1;
      addLater.push([startingRow, startingColumn - 1]);
      walkPath([startingRow, startingColumn - 1], startingValue + 1, 'left');
    } else if (input[startingRow][startingColumn - 1] > startingValue + 1) {
      input[startingRow][startingColumn - 1] = startingValue + 1;
      addLater.push([startingRow, startingColumn - 1]);
      walkPath([startingRow, startingColumn - 1], startingValue + 1, 'left');
    }

    if (input[startingRow][startingColumn + 1] === 'E') {
      // nothing yet
      if (startingValue + 1001 < result) {
        result = startingValue + 1001;
      }
    } else if (input[startingRow][startingColumn + 1] === '.') {
      input[startingRow][startingColumn + 1] = startingValue + 1;
      addLater.push([startingRow, startingColumn + 1]);
      walkPath([startingRow, startingColumn + 1], startingValue + 1, 'right');
    } else if (input[startingRow][startingColumn + 1] > startingValue + 1) {
      input[startingRow][startingColumn + 1] = startingValue + 1;
      addLater.push([startingRow, startingColumn + 1]);
      walkPath([startingRow, startingColumn + 1], startingValue + 1, 'right');
    }
  }


  if (direction === 'down') {
    if (input[startingRow + 1][startingColumn] === 'E') {
      // nothing yet
      if (startingValue + 1 < result) {
        result = startingValue + 1;
      }
    } else if (input[startingRow + 1][startingColumn] === '.') {
      input[startingRow + 1][startingColumn] = startingValue + 1;
      walkPath([startingRow + 1, startingColumn], startingValue + 1, 'down');
    } else if (input[startingRow + 1][startingColumn] > startingValue + 1) {
      input[startingRow + 1][startingColumn] = startingValue + 1;
      walkPath([startingRow + 1, startingColumn], startingValue + 1, 'down');
    }

    if (input[startingRow][startingColumn - 1] === 'E') {
      // nothing yet
      if (startingValue + 1001 < result) {
        result = startingValue + 1001;
      }
    } else if (input[startingRow][startingColumn - 1] === '.') {
      input[startingRow][startingColumn - 1] = startingValue + 1;
      addLater.push([startingRow, startingColumn - 1]);
      walkPath([startingRow, startingColumn - 1], startingValue + 1, 'left');
    } else if (input[startingRow][startingColumn - 1] > startingValue + 1) {
      input[startingRow][startingColumn - 1] = startingValue + 1;
      addLater.push([startingRow, startingColumn - 1]);
      walkPath([startingRow, startingColumn - 1], startingValue + 1, 'left');
    }

    if (input[startingRow][startingColumn + 1] === 'E') {
      // nothing yet
      if (startingValue + 1001 < result) {
        result = startingValue + 1001;
      }
    } else if (input[startingRow][startingColumn + 1] === '.') {
      input[startingRow][startingColumn + 1] = startingValue + 1;
      addLater.push([startingRow, startingColumn + 1]);
      walkPath([startingRow, startingColumn + 1], startingValue + 1, 'right');
    } else if (input[startingRow][startingColumn + 1] > startingValue + 1) {
      input[startingRow][startingColumn + 1] = startingValue + 1;
      addLater.push([startingRow, startingColumn + 1]);
      walkPath([startingRow, startingColumn + 1], startingValue + 1, 'right');
    }
  }


  if (direction === 'left') {
    if (input[startingRow][startingColumn - 1] === 'E') {
      // nothing yet
      if (startingValue + 1 < result) {
        result = startingValue + 1;
      }
    } else if (input[startingRow][startingColumn - 1] === '.') {
      input[startingRow][startingColumn - 1] = startingValue + 1;
      walkPath([startingRow, startingColumn - 1], startingValue + 1, 'left');
    } else if (input[startingRow][startingColumn - 1] > startingValue + 1) {
      input[startingRow][startingColumn - 1] = startingValue + 1;
      walkPath([startingRow, startingColumn - 1], startingValue + 1, 'left');
    }

    if (input[startingRow - 1][startingColumn] === 'E') {
      // nothing yet
      if (startingValue + 1001 < result) {
        result = startingValue + 1001;
      }
    } else if (input[startingRow - 1][startingColumn] === '.') {
      input[startingRow - 1][startingColumn] = startingValue + 1;
      addLater.push([startingRow - 1, startingColumn]);
      walkPath([startingRow - 1, startingColumn], startingValue + 1, 'up');
    } else if (input[startingRow - 1][startingColumn] > startingValue + 1) {
      input[startingRow - 1][startingColumn] = startingValue + 1;
      addLater.push([startingRow - 1, startingColumn]);
      walkPath([startingRow - 1, startingColumn], startingValue + 1, 'up');
    }

    if (input[startingRow + 1][startingColumn] === 'E') {
      // nothing yet
      if (startingValue + 1001 < result) {
        result = startingValue + 1001;
      }
    } else if (input[startingRow + 1][startingColumn] === '.') {
      input[startingRow + 1][startingColumn] = startingValue + 1;
      addLater.push([startingRow + 1, startingColumn]);
      walkPath([startingRow + 1, startingColumn], startingValue + 1, 'down');
    } else if (input[startingRow + 1][startingColumn] > startingValue + 1) {
      input[startingRow + 1][startingColumn] = startingValue + 1;
      addLater.push([startingRow + 1, startingColumn]);
      walkPath([startingRow + 1, startingColumn], startingValue + 1, 'down');
    }
  }


  if (direction === 'right') {
    if (input[startingRow][startingColumn + 1] === 'E') {
      // nothing yet
      if (startingValue + 1 < result) {
        result = startingValue + 1;
      }
    } else if (input[startingRow][startingColumn + 1] === '.') {
      input[startingRow][startingColumn + 1] = startingValue + 1;
      walkPath([startingRow, startingColumn + 1], startingValue + 1, 'right');
    } else if (input[startingRow][startingColumn + 1] > startingValue + 1) {
      input[startingRow][startingColumn + 1] = startingValue + 1;
      walkPath([startingRow, startingColumn + 1], startingValue + 1, 'right');
    }

    if (input[startingRow - 1][startingColumn] === 'E') {
      // nothing yet
      if (startingValue + 1001 < result) {
        result = startingValue + 1001;
      }
    } else if (input[startingRow - 1][startingColumn] === '.') {
      input[startingRow - 1][startingColumn] = startingValue + 1;
      addLater.push([startingRow - 1, startingColumn]);
      walkPath([startingRow - 1, startingColumn], startingValue + 1, 'up');
    } else if (input[startingRow - 1][startingColumn] > startingValue + 1) {
      input[startingRow - 1][startingColumn] = startingValue + 1;
      addLater.push([startingRow - 1, startingColumn]);
      walkPath([startingRow - 1, startingColumn], startingValue + 1, 'up');
    }

    if (input[startingRow + 1][startingColumn] === 'E') {
      // nothing yet
      if (startingValue + 1001 < result) {
        result = startingValue + 1001;
      }
    } else if (input[startingRow + 1][startingColumn] === '.') {
      input[startingRow + 1][startingColumn] = startingValue + 1;
      addLater.push([startingRow + 1, startingColumn]);
      walkPath([startingRow + 1, startingColumn], startingValue + 1, 'down');
    } else if (input[startingRow + 1][startingColumn] > startingValue + 1) {
      input[startingRow + 1][startingColumn] = startingValue + 1;
      addLater.push([startingRow + 1, startingColumn]);
      walkPath([startingRow + 1, startingColumn], startingValue + 1, 'down');
    }
  }

}

walkPath(currentPoint, 0, 'right');

// for (let i = 0; i < addLater.length; i += 1) {
//   const row = addLater[i][0];
//   const column = addLater[i][1];
//   input[row][column] += 1000;
// }



// for (let i = 0; i < input.length; i += 1) {
//   for (let j = 0; j < input[0].length; j += 1) {
//     if (typeof input[i][j] === 'number' && input[i][j] > result) {
//       input[i][j] = '|';
//     } else if (typeof input[i][j] === 'number') {
//       input[i][j] = '-';
//     }
//   }
// }

// for (let i = 0; i < input.length; i += 1) {
//   console.log(input[i]);
// }

function addPoints(pointsToAdd) {
  console.log('adding points');
  for (let i = 0; i < pointsToAdd.length; i += 1) {
    let existingPoint = false;
    for (let j = 0; j < totalPoints.length; j += 1) {
      if (totalPoints[j][0] === pointsToAdd[i][0] && totalPoints[j][1] === pointsToAdd[i][1]) {
        existingPoint = true;
        break;
      }
    }

    if (!existingPoint) {
      totalPoints.push([pointsToAdd[i][0], pointsToAdd[i][1]]);
    }
  }
}

// function walkNewPath(startingPoint, startingValue, direction, pointsVisited) {
//   const startingRow = startingPoint[0];
//   const startingColumn = startingPoint[1];
//   pointsVisited.push([startingRow, startingColumn]);

//   if (direction === 'up') {
//     if (input[startingRow - 1][startingColumn] === 'E') {
//       // nothing yet
//       // if (startingValue + 1 < result) {
//       //   result = startingValue + 1;
//       // }
//       addPoints(pointsVisited);
//     } else if (input[startingRow - 1][startingColumn] === '.') {
//       // input[startingRow - 1][startingColumn] = startingValue + 1;
//       // walkNewPath([startingRow - 1, startingColumn], startingValue + 1, 'up');

//       // nothing yet
//     } else if (input[startingRow - 1][startingColumn] >= startingValue + 1) {
//       // input[startingRow - 1][startingColumn] = startingValue + 1;
//       walkNewPath([startingRow - 1, startingColumn], startingValue + 1, 'up', pointsVisited);
//     }

//     if (input[startingRow][startingColumn - 1] === 'E') {
//       // nothing yet
//       // if (startingValue + 1001 < result) {
//       //   result = startingValue + 1001;
//       // }
//       addPoints(pointsVisited);
//     } else if (input[startingRow][startingColumn - 1] === '.') {
//       // input[startingRow][startingColumn - 1] = startingValue + 1001;
//       // walkNewPath([startingRow, startingColumn - 1], startingValue + 1001, 'left');

//       // nothing yet
//     } else if (input[startingRow][startingColumn - 1] >= startingValue + 1001) {
//       // input[startingRow][startingColumn - 1] = startingValue + 1001;
//       walkNewPath([startingRow, startingColumn - 1], startingValue + 1001, 'left', pointsVisited);
//     }

//     if (input[startingRow][startingColumn + 1] === 'E') {
//       // nothing yet
//       // if (startingValue + 1001 < result) {
//       //   result = startingValue + 1001;
//       // }
//       addPoints(pointsVisited);
//     } else if (input[startingRow][startingColumn + 1] === '.') {
//       // input[startingRow][startingColumn + 1] = startingValue + 1001;
//       // walkNewPath([startingRow, startingColumn + 1], startingValue + 1001, 'right');

//       // nothing yet
//     } else if (input[startingRow][startingColumn + 1] >= startingValue + 1001) {
//       // input[startingRow][startingColumn + 1] = startingValue + 1001;
//       walkNewPath([startingRow, startingColumn + 1], startingValue + 1001, 'right', pointsVisited);
//     }
//   }


//   if (direction === 'down') {
//     if (input[startingRow + 1][startingColumn] === 'E') {
//       // nothing yet
//       // if (startingValue + 1 < result) {
//       //   result = startingValue + 1;
//       // }
//       addPoints(pointsVisited);
//     } else if (input[startingRow + 1][startingColumn] === '.') {
//       // input[startingRow + 1][startingColumn] = startingValue + 1;
//       // walkNewPath([startingRow + 1, startingColumn], startingValue + 1, 'down');

//       // nothing yet
//     } else if (input[startingRow + 1][startingColumn] >= startingValue + 1) {
//       // input[startingRow + 1][startingColumn] = startingValue + 1;
//       walkNewPath([startingRow + 1, startingColumn], startingValue + 1, 'down', pointsVisited);
//     }

//     if (input[startingRow][startingColumn - 1] === 'E') {
//       // nothing yet
//       // if (startingValue + 1001 < result) {
//       //   result = startingValue + 1001;
//       // }
//       addPoints(pointsVisited);
//     } else if (input[startingRow][startingColumn - 1] === '.') {
//       // input[startingRow][startingColumn - 1] = startingValue + 1001;
//       // walkNewPath([startingRow, startingColumn - 1], startingValue + 1001, 'left');

//       // nothing yet
//     } else if (input[startingRow][startingColumn - 1] >= startingValue + 1001) {
//       // input[startingRow][startingColumn - 1] = startingValue + 1001;
//       walkNewPath([startingRow, startingColumn - 1], startingValue + 1001, 'left', pointsVisited);
//     }

//     if (input[startingRow][startingColumn + 1] === 'E') {
//       // nothing yet
//       // if (startingValue + 1001 < result) {
//       //   result = startingValue + 1001;
//       // }
//       addPoints(pointsVisited);
//     } else if (input[startingRow][startingColumn + 1] === '.') {
//       // input[startingRow][startingColumn + 1] = startingValue + 1001;
//       // walkNewPath([startingRow, startingColumn + 1], startingValue + 1001, 'right');

//       // nothing yet
//     } else if (input[startingRow][startingColumn + 1] >= startingValue + 1001) {
//       // input[startingRow][startingColumn + 1] = startingValue + 1001;
//       walkNewPath([startingRow, startingColumn + 1], startingValue + 1001, 'right', pointsVisited);
//     }
//   }


//   if (direction === 'left') {
//     if (input[startingRow][startingColumn - 1] === 'E') {
//       // nothing yet
//       // if (startingValue + 1 < result) {
//       //   result = startingValue + 1;
//       // }
//       addPoints(pointsVisited);
//     } else if (input[startingRow][startingColumn - 1] === '.') {
//       // input[startingRow][startingColumn - 1] = startingValue + 1;
//       // walkNewPath([startingRow, startingColumn - 1], startingValue + 1, 'left');

//       // nothing yet
//     } else if (input[startingRow][startingColumn - 1] >= startingValue + 1) {
//       // input[startingRow][startingColumn - 1] = startingValue + 1;
//       walkNewPath([startingRow, startingColumn - 1], startingValue + 1, 'left', pointsVisited);
//     }

//     if (input[startingRow - 1][startingColumn] === 'E') {
//       // nothing yet
//       // if (startingValue + 1001 < result) {
//       //   result = startingValue + 1001;
//       // }
//       addPoints(pointsVisited);
//     } else if (input[startingRow - 1][startingColumn] === '.') {
//       // input[startingRow - 1][startingColumn] = startingValue + 1001;
//       // walkNewPath([startingRow - 1, startingColumn], startingValue + 1001, 'up');

//       // nothing yet
//     } else if (input[startingRow - 1][startingColumn] >= startingValue + 1001) {
//       // input[startingRow - 1][startingColumn] = startingValue + 1001;
//       walkNewPath([startingRow - 1, startingColumn], startingValue + 1001, 'up', pointsVisited);
//     }

//     if (input[startingRow + 1][startingColumn] === 'E') {
//       // nothing yet
//       // if (startingValue + 1001 < result) {
//       //   result = startingValue + 1001;
//       // }
//       addPoints(pointsVisited);
//     } else if (input[startingRow + 1][startingColumn] === '.') {
//       // input[startingRow + 1][startingColumn] = startingValue + 1001;
//       // walkNewPath([startingRow + 1, startingColumn], startingValue + 1001, 'down');

//       // nothing yet
//     } else if (input[startingRow + 1][startingColumn] >= startingValue + 1001) {
//       // input[startingRow + 1][startingColumn] = startingValue + 1001;
//       walkNewPath([startingRow + 1, startingColumn], startingValue + 1001, 'down', pointsVisited);
//     }
//   }


//   if (direction === 'right') {
//     if (input[startingRow][startingColumn + 1] === 'E') {
//       // nothing yet
//       // if (startingValue + 1 < result) {
//       //   result = startingValue + 1;
//       // }
//       addPoints(pointsVisited);
//     } else if (input[startingRow][startingColumn + 1] === '.') {
//       // input[startingRow][startingColumn + 1] = startingValue + 1;
//       // walkNewPath([startingRow, startingColumn + 1], startingValue + 1, 'right');

//       // nothing yet
//     } else if (input[startingRow][startingColumn + 1] >= startingValue + 1) {
//       // input[startingRow][startingColumn + 1] = startingValue + 1;
//       walkNewPath([startingRow, startingColumn + 1], startingValue + 1, 'right', pointsVisited);
//     }

//     if (input[startingRow - 1][startingColumn] === 'E') {
//       // nothing yet
//       // if (startingValue + 1001 < result) {
//       //   result = startingValue + 1001;
//       // }
//       addPoints(pointsVisited);
//     } else if (input[startingRow - 1][startingColumn] === '.') {
//       // input[startingRow - 1][startingColumn] = startingValue + 1001;
//       // walkNewPath([startingRow - 1, startingColumn], startingValue + 1001, 'up');

//       // nothing yet
//     } else if (input[startingRow - 1][startingColumn] >= startingValue + 1001) {
//       // input[startingRow - 1][startingColumn] = startingValue + 1001;
//       walkNewPath([startingRow - 1, startingColumn], startingValue + 1001, 'up', pointsVisited);
//     }

//     if (input[startingRow + 1][startingColumn] === 'E') {
//       // nothing yet
//       // if (startingValue + 1001 < result) {
//       //   result = startingValue + 1001;
//       // }
//       addPoints(pointsVisited);
//     } else if (input[startingRow + 1][startingColumn] === '.') {
//       // input[startingRow + 1][startingColumn] = startingValue + 1001;
//       // walkNewPath([startingRow + 1, startingColumn], startingValue + 1001, 'down');

//       // nothing yet
//     } else if (input[startingRow + 1][startingColumn] >= startingValue + 1001) {
//       // input[startingRow + 1][startingColumn] = startingValue + 1001;
//       walkNewPath([startingRow + 1, startingColumn], startingValue + 1001, 'down', pointsVisited);
//     }
//   }


// }

let checkThis = [];

// function walkNewPath(startingPoint, startingValue, direction, pointsVisited) {
//   // if (totalPoints.length > 0) {
//   //   return;
//   // }
//   // console.log('running this');
//   const startingRow = startingPoint[0];
//   const startingColumn = startingPoint[1];
//   let points = pointsVisited;
//   points.push([startingRow, startingColumn]);
//   checkThis.push([startingRow, startingColumn]);

//   if (direction === 'up') {
//     let shouldBonk = false;
//     let hasBonked = false;
    

//     if (input[startingRow][startingColumn - 1] === 'E') {
//       // nothing yet
//       if (startingValue + 1001 === partOne) {
//         console.log(`adding points because ${startingValue + 1001} === ${partOne}`);
//         addPoints(points);
//       }
//     } else if (input[startingRow][startingColumn - 1] === '.') {
//       input[startingRow][startingColumn - 1] = startingValue + 1001;
//       if (shouldBonk && !hasBonked) {
//         input[startingRow][startingColumn] += 1000;
//         hasBonked = true;
//       }
//       walkNewPath([startingRow, startingColumn - 1], startingValue + 1001, 'left', points);
//     } else if (input[startingRow][startingColumn - 1] >= startingValue + 1001) {
//       input[startingRow][startingColumn - 1] = startingValue + 1001;
//       if (shouldBonk && !hasBonked) {
//         input[startingRow][startingColumn] += 1000;
//         hasBonked = true;
//       }
//       walkNewPath([startingRow, startingColumn - 1], startingValue + 1001, 'left', points);
//     }

//     if (input[startingRow][startingColumn + 1] === 'E') {
//       // nothing yet
//       if (startingValue + 1001 === partOne) {
//         console.log(`adding points because ${startingValue + 1001} === ${partOne}`);
//         addPoints(points);
//       }
//     } else if (input[startingRow][startingColumn + 1] === '.') {
//       input[startingRow][startingColumn + 1] = startingValue + 1001;
//       if (shouldBonk && !hasBonked) {
//         input[startingRow][startingColumn] += 1000;
//         hasBonked = true;
//       }
//       walkNewPath([startingRow, startingColumn + 1], startingValue + 1001, 'right', points);
//     } else if (input[startingRow][startingColumn + 1] >= startingValue + 1001) {
//       input[startingRow][startingColumn + 1] = startingValue + 1001;
//       if (shouldBonk && !hasBonked) {
//         input[startingRow][startingColumn] += 1000;
//         hasBonked = true;
//       }
//       walkNewPath([startingRow, startingColumn + 1], startingValue + 1001, 'right', points);
//     }

//     if (input[startingRow - 1][startingColumn] === 'E') {
//       // nothing yet
//       if (startingValue + 1 === partOne) {
//         console.log(`adding points because ${startingValue + 1} === ${partOne}`);
//         addPoints(points);
//       }
//     } else if (input[startingRow - 1][startingColumn] === '.') {
//       input[startingRow - 1][startingColumn] = startingValue + 1;
//       walkNewPath([startingRow - 1, startingColumn], startingValue + 1, 'up', points);
//     } else if (input[startingRow - 1][startingColumn] >= startingValue + 1) {
//       input[startingRow - 1][startingColumn] = startingValue + 1;
//       walkNewPath([startingRow - 1, startingColumn], startingValue + 1, 'up', points);
//     } else if (input[startingRow - 1][startingColumn] === '#') {
//       input[startingRow][startingColumn] += 1000;
//       // shouldBonk = true;
//     } else if (input[startingRow - 2][startingColumn] >= startingValue + 2) {
//       input[startingRow - 2][startingColumn] = startingValue + 2;
//       walkNewPath([startingRow - 2, startingColumn], startingValue + 2, 'up', points);
//     }
//   }


    


//   if (direction === 'right') {
//     let shouldBonk = false;
//     let hasBonked = false;
    

//     if (input[startingRow - 1][startingColumn] === 'E') {
//       // nothing yet
//       if (startingValue + 1001 === partOne) {
//         console.log(`adding points because ${startingValue + 1001} === ${partOne}`);
//         addPoints(points);
//       }
//     } else if (input[startingRow - 1][startingColumn] === '.') {
//       input[startingRow - 1][startingColumn] = startingValue + 1001;
//       if (shouldBonk && !hasBonked) {
//         input[startingRow][startingColumn] += 1000;
//         hasBonked = true;
//       }
//       walkNewPath([startingRow - 1, startingColumn], startingValue + 1001, 'up', points);
//     } else if (input[startingRow - 1][startingColumn] >= startingValue + 1001) {
//       input[startingRow - 1][startingColumn] = startingValue + 1001;
//       if (shouldBonk && !hasBonked) {
//         input[startingRow][startingColumn] += 1000;
//         hasBonked = true;
//       }
//       walkNewPath([startingRow - 1, startingColumn], startingValue + 1001, 'up', points);
//     }

//     if (input[startingRow + 1][startingColumn] === 'E') {
//       // nothing yet
//       if (startingValue + 1001 === partOne) {
//         console.log(`adding points because ${startingValue + 1001} === ${partOne}`);
//         addPoints(points);
//       }
//     } else if (input[startingRow + 1][startingColumn] === '.') {
//       input[startingRow + 1][startingColumn] = startingValue + 1001;
//       if (shouldBonk && !hasBonked) {
//         input[startingRow][startingColumn] += 1000;
//         hasBonked = true;
//       }
//       walkNewPath([startingRow + 1, startingColumn], startingValue + 1001, 'down', points);
//     } else if (input[startingRow + 1][startingColumn] >= startingValue + 1001) {
//       input[startingRow + 1][startingColumn] = startingValue + 1001;
//       if (shouldBonk && !hasBonked) {
//         input[startingRow][startingColumn] += 1000;
//         hasBonked = true;
//       }
//       walkNewPath([startingRow + 1, startingColumn], startingValue + 1001, 'down', points);
//     }

//     if (input[startingRow][startingColumn + 1] === 'E') {
//       // nothing yet
//       if (startingValue + 1 === partOne) {
//         console.log(`adding points because ${startingValue + 1} === ${partOne}`);
//         addPoints(points);
//       }
//     } else if (input[startingRow][startingColumn + 1] === '.') {
//       input[startingRow][startingColumn + 1] = startingValue + 1;
//       walkNewPath([startingRow, startingColumn + 1], startingValue + 1, 'right', points);
//     } else if (input[startingRow][startingColumn + 1] >= startingValue + 1) {
//       input[startingRow][startingColumn + 1] = startingValue + 1;
//       walkNewPath([startingRow, startingColumn + 1], startingValue + 1, 'right', points);
//     } else if (input[startingRow][startingColumn + 1] === '#') {
//       input[startingRow][startingColumn] += 1000;
//       // shouldBonk = true;
//     } else if (input[startingRow][startingColumn + 2] >= startingValue + 2) {
//       input[startingRow][startingColumn + 2] = startingValue + 2;
//       walkNewPath([startingRow, startingColumn + 2], startingValue + 2, 'right', points);
//     }
//   }



//   if (direction === 'left') {
//     let shouldBonk = false;
//     let hasBonked = false;
    

//     if (input[startingRow - 1][startingColumn] === 'E') {
//       // nothing yet
//       if (startingValue + 1001 === partOne) {
//         console.log(`adding points because ${startingValue + 1001} === ${partOne}`);
//         addPoints(points);
//       }
//     } else if (input[startingRow - 1][startingColumn] === '.') {
//       input[startingRow - 1][startingColumn] = startingValue + 1001;
//       if (shouldBonk && !hasBonked) {
//         input[startingRow][startingColumn] += 1000;
//         hasBonked = true;
//       }
//       walkNewPath([startingRow - 1, startingColumn], startingValue + 1001, 'up', points);
//     } else if (input[startingRow - 1][startingColumn] >= startingValue + 1001) {
//       input[startingRow - 1][startingColumn] = startingValue + 1001;
//       if (shouldBonk && !hasBonked) {
//         input[startingRow][startingColumn] += 1000;
//         hasBonked = true;
//       }
//       walkNewPath([startingRow - 1, startingColumn], startingValue + 1001, 'up', points);
//     }

//     if (input[startingRow + 1][startingColumn] === 'E') {
//       // nothing yet
//       if (startingValue + 1001 === partOne) {
//         console.log(`adding points because ${startingValue + 1001} === ${partOne}`);
//         addPoints(points);
//       }
//     } else if (input[startingRow + 1][startingColumn] === '.') {
//       input[startingRow + 1][startingColumn] = startingValue + 1001;
//       if (shouldBonk && !hasBonked) {
//         input[startingRow][startingColumn] += 1000;
//         hasBonked = true;
//       }
//       walkNewPath([startingRow + 1, startingColumn], startingValue + 1001, 'down', points);
//     } else if (input[startingRow + 1][startingColumn] >= startingValue + 1001) {
//       input[startingRow + 1][startingColumn] = startingValue + 1001;
//       if (shouldBonk && !hasBonked) {
//         input[startingRow][startingColumn] += 1000;
//         hasBonked = true;
//       }
//       walkNewPath([startingRow + 1, startingColumn], startingValue + 1001, 'down', points);
//     }

//     if (input[startingRow][startingColumn - 1] === 'E') {
//       // nothing yet
//       if (startingValue + 1 === partOne) {
//         console.log(`adding points because ${startingValue + 1} === ${partOne}`);
//         addPoints(points);
//       }
//     } else if (input[startingRow][startingColumn - 1] === '.') {
//       input[startingRow][startingColumn - 1] = startingValue + 1;
//       walkNewPath([startingRow, startingColumn - 1], startingValue + 1, 'left', points);
//     } else if (input[startingRow][startingColumn - 1] >= startingValue + 1) {
//       input[startingRow][startingColumn - 1] = startingValue + 1;
//       walkNewPath([startingRow, startingColumn - 1], startingValue + 1, 'left', points);
//     } else if (input[startingRow][startingColumn - 1] === '#') {
//       input[startingRow][startingColumn] += 1000;
//       // shouldBonk = true;
//     } else if (input[startingRow][startingColumn - 2] >= startingValue + 2) {
//       input[startingRow][startingColumn - 2] = startingValue + 2;
//       walkNewPath([startingRow, startingColumn - 2], startingValue + 2, 'left', points);
//     }
//   }


//   if (direction === 'down') {
//     let shouldBonk = false;
//     let hasBonked = false;
    

//     if (input[startingRow][startingColumn - 1] === 'E') {
//       // nothing yet
//       if (startingValue + 1001 === partOne) {
//         console.log(`adding points because ${startingValue + 1001} === ${partOne}`);
//         addPoints(points);
//       }
//     } else if (input[startingRow][startingColumn - 1] === '.') {
//       input[startingRow][startingColumn - 1] = startingValue + 1001;
//       if (shouldBonk && !hasBonked) {
//         input[startingRow][startingColumn] += 1000;
//         hasBonked = true;
//       }
//       walkNewPath([startingRow, startingColumn - 1], startingValue + 1001, 'left', points);
//     } else if (input[startingRow][startingColumn - 1] >= startingValue + 1001) {
//       input[startingRow][startingColumn - 1] = startingValue + 1001;
//       if (shouldBonk && !hasBonked) {
//         input[startingRow][startingColumn] += 1000;
//         hasBonked = true;
//       }
//       walkNewPath([startingRow, startingColumn - 1], startingValue + 1001, 'left', points);
//     }

//     if (input[startingRow][startingColumn + 1] === 'E') {
//       // nothing yet
//       if (startingValue + 1001 === partOne) {
//         console.log(`adding points because ${startingValue + 1001} === ${partOne}`);
//         addPoints(points);
//       }
//     } else if (input[startingRow][startingColumn + 1] === '.') {
//       input[startingRow][startingColumn + 1] = startingValue + 1001;
//       if (shouldBonk && !hasBonked) {
//         input[startingRow][startingColumn] += 1000;
//         hasBonked = true;
//       }
//       walkNewPath([startingRow, startingColumn + 1], startingValue + 1001, 'right', points);
//     } else if (input[startingRow][startingColumn + 1] >= startingValue + 1001) {
//       input[startingRow][startingColumn + 1] = startingValue + 1001;
//       if (shouldBonk && !hasBonked) {
//         input[startingRow][startingColumn] += 1000;
//         hasBonked = true;
//       }
//       walkNewPath([startingRow, startingColumn + 1], startingValue + 1001, 'right', points);
//     }

//     if (input[startingRow + 1][startingColumn] === 'E') {
//       // nothing yet
//       if (startingValue + 1 === partOne) {
//         console.log(`adding points because ${startingValue + 1} === ${partOne}`);
//         addPoints(points);
//       }
//     } else if (input[startingRow + 1][startingColumn] === '.') {
//       input[startingRow + 1][startingColumn] = startingValue + 1;
//       walkNewPath([startingRow + 1, startingColumn], startingValue + 1, 'down', points);
//     } else if (input[startingRow + 1][startingColumn] >= startingValue + 1) {
//       input[startingRow + 1][startingColumn] = startingValue + 1;
//       walkNewPath([startingRow + 1, startingColumn], startingValue + 1, 'down', points);
//     } else if (input[startingRow + 1][startingColumn] === '#') {
//       input[startingRow][startingColumn] += 1000;
//       // shouldBonk = true;
//     }
//   }


// }

function fillDeadEnds() {
  let stillWorking = true;
  while (stillWorking === true) {
    console.log('filling dead ends');
    stillWorking = false;
    for (let i = 0; i < input.length; i += 1) {
      for (let j = 0; j < input[0].length; j += 1) {
        if (input[i][j] === '.') {
          // console.log('hello?');
          let cornerCount = 0;
          if (input[i - 1][j] === '#') {
            cornerCount += 1;
          }

          if (input[i + 1][j] === '#') {
            cornerCount += 1;
          }

          if (input[i][j - 1] === '#') {
            cornerCount += 1;
          }

          if (input[i][j + 1] === '#') {
            cornerCount += 1;
          }
          // console.log(`corner count: ${cornerCount}`);

          if (cornerCount >= 3) {
            input[i][j] = '#';
            // console.log(`dead end at ${i}, ${j}`);
            stillWorking = true;
          }
        }
      }
    }
  }
}

// console.log(input[13][4]);

// fillDeadEnds();
// walkNewPath(currentPoint, 0, 'right', []);

for (let i = 0; i < input.length; i += 1) {
  for (let j = 0; j < input[0].length; j += 1) {
    if (input[i][j] === '.') {
      // console.log(`missed a spot at ${i}, ${j}`);
    }
  }
}

console.log(`Result part two: ${totalPoints.length}`);

// for (let i = 0; i < checkThis.length; i += 1) {
//   console.log(checkThis[i].length);
// }

// console.log(checkThis[2]);

// for (let i = 0; i < input.length; i += 1) {
//   for (let j = 0; j < input[0].length; j += 1) {
//     if (typeof input[i][j] !== 'number') {
//       input[i][j] += '.';
//     }
//   }
// }

// real start
let pointsToCheck = [[1, 138]];
let finalPoints = [[1, 138]];

// small example start
// let pointsToCheck = [[2, 13]];
// let finalPoints = [[2, 13]];

// large example start
// let pointsToCheck = [[2, 15]];
// let finalPoints = [[2, 15]];


// console.log(`row length: ${input[0].length}`);
// console.log(input[1][138]);
// console.log(input[1][139]);
// console.log(input[2][139]);

while (pointsToCheck.length > 0) {
  // console.log('looping');
  const newPoints = [];
  for (let i = 0; i < pointsToCheck.length; i += 1) {
    const pointRow = pointsToCheck[i][0];
    const pointColumn = pointsToCheck[i][1];
    const pointVal = input[pointRow][pointColumn];
    // if (typeof pointVal !== 'number') {
    //   console.log('you messed up');
    //   continue;
    // }

    if (input[pointRow][pointColumn] === 'S') {
      console.log('dont care');
    }
    input[pointRow][pointColumn] = 'O';

    if (typeof input[pointRow - 1][pointColumn] === 'number' && input[pointRow - 1][pointColumn] < pointVal) {
      newPoints.push([pointRow - 1, pointColumn]);
      finalPoints.push([pointRow - 1, pointColumn]);
    }

    if (typeof input[pointRow + 1][pointColumn] === 'number' && input[pointRow + 1][pointColumn] < pointVal) {
      newPoints.push([pointRow + 1, pointColumn]);
      finalPoints.push([pointRow + 1, pointColumn]);
    }

    if (typeof input[pointRow][pointColumn - 1] === 'number' && input[pointRow][pointColumn - 1] < pointVal) {
      newPoints.push([pointRow, pointColumn - 1]);
      finalPoints.push([pointRow, pointColumn - 1]);
    }

    if (typeof input[pointRow][pointColumn + 1] === 'number' && input[pointRow][pointColumn + 1] < pointVal) {
      newPoints.push([pointRow, pointColumn + 1]);
      finalPoints.push([pointRow, pointColumn + 1]);
    }
  }

  pointsToCheck = newPoints;
  // console.log(pointsToCheck);
}

// console.log(finalPoints.length);
// for (let i = 0; i < finalPoints.length; i += 1) {
//   const updateRow = finalPoints[i][0];
//   const updateColumn = finalPoints[i][1];
//   input[updateRow][updateColumn] = 'O';
// }

let newResult = 0;
for (let i = 0; i < input.length; i += 1) {
  for (let j = 0; j < input[0].length; j += 1) {
    if (input[i][j] === 'O') {
      newResult += 1;
    }
  }
}





// console.log(input[1][133]);

// for (let i = 0; i < input.length; i += 1) {
//   for (let j = 0; j < input[0].length; j += 1) {
//     if (typeof input[i][j] === 'number') {
//       input[i][j] = '-';
//     }
//   }
// }



// let printList = [[13, 1]];
// let pathLength = Infinity;
// let foundSomething = 0;
// for (let i = 1; i < checkThis.length; i += 1) {
//   const row = checkThis[i][0];
//   const column = checkThis[i][1];
//   printList.push([row, column]);
//   if (row === 2 && column === 15) {
//     // console.log(JSON.stringify(printList));
//     // break;


//     console.log('found complete path');
//     // checkThis.splice(0, i + 1);
//     // console.log(`new start after ${i + 1} ${checkThis[0][0]}, ${checkThis[0][1]}`);
//     // console.log(`new start after ${i + 1} ${checkThis[1][0]}, ${checkThis[1][1]}`);
//     // printList = [[checkThis[0][0], checkThis[0][1]]];
//     for (let i = 0; i < printList.length; i += 1) {
//       const row = printList[i][0];
//       const column = printList[i][1];
//       input[row][column] = 'O';
//     }
//     foundSomething += 1;
//     if (foundSomething > 5) {
//       console.log('found all');
//       break;
//     }
//     checkThis.splice(0, i + 1);
//     console.log(`new start after ${i + 1} ${checkThis[0][0]}, ${checkThis[0][1]}`);
//     console.log(`new start after ${i + 1} ${checkThis[1][0]}, ${checkThis[1][1]}`);
//     printList = [[checkThis[0][0], checkThis[0][1]]];
//     i = 0;
//     continue;
//   }

//   if (row !== printList[printList.length - 2][0] && column !== printList[printList.length - 2][1]) {
//     // console.log(Math.abs(row - printList[printList.length - 2][0]));
//     // console.log(Math.abs(column - printList[printList.length - 2][1]));
//     // if (Math.abs(row - printList[printList.length - 2][0]) > 1 || Math.abs(column - printList[printList.length - 2][1]) > 1 || (Math.abs(row - printList[printList.length - 2][0]) === 1 && Math.abs(column - printList[printList.length - 2][1]) === 1)) {
//       // console.log(`dead end at ${row}, ${column}`);
//       // break;
//       console.log('cutting points');
//       checkThis.splice(i - 1, 1);
//       // printList.splice(printList.length - 2, 1);
//       // printList = [[13, 1]];
//       printList = [[checkThis[0][0], checkThis[0][1]]];
//       i = 0;
//       continue;
//       // console.log(`dead end at ${row}, ${column}`);
//       // break;
//     // }
//   }

//   if (Math.abs(row - printList[printList.length - 2][0]) > 1 || Math.abs(column - printList[printList.length - 2][1]) > 1 || (Math.abs(row - printList[printList.length - 2][0]) === 1 && Math.abs(column - printList[printList.length - 2][1]) === 1)) {
//     // console.log(`dead end at ${row}, ${column}`);
//     // break;
//     console.log('cutting points');
//     checkThis.splice(i - 1, 1);
//     // printList.splice(printList.length - 2, 1);
//     // printList = [[13, 1]];
//     printList = [[checkThis[0][0], checkThis[0][1]]];
//     i = 0;
//     // console.log(`dead end at ${row}, ${column}`);
//     // break;
//   }
//   // input[row][column] = 'O';
//   // if (input[row][column] !== 'S') {
//   //   input[row][column] += 100;
//   // }
//   // if (row === 8 && column === 3) {
//   //   console.log(`part of best path? ${input[row][column]}`);
//   // }
// }
// for (let i = 0; i < printList.length; i += 1) {
//   const row = printList[i][0];
//   const column = printList[i][1];
//   input[row][column] = 'O';
// }
// console.log(JSON.stringify(printList));
// console.log(printList.length);
// console.log(`found: ${foundSomething}`);
// checkThis.splice(0, 52);
// console.log(checkThis[0][0]);
// console.log(checkThis[0][1]);

// console.log(JSON.stringify(checkThis));

// for (let i = 0; i < input.length; i += 1) {
//   console.log(input[i]);
// }

// console.log(JSON.stringify(totalPoints));

// for (let i = 0; i < totalPoints.length; i += 1) {
//   const row = totalPoints[i][0];
//   const column = totalPoints[i][1];
//   input[row][column] = 'O';
// }

// for (let i = 0; i < printList.length; i += 1) {
//   const row = printList[i][0];
//   const column = printList[i][1];
//   input[row][column] = 'O';
// }

for (let i = 0; i < input.length; i += 1) {
  console.log(input[i]);
}

console.log(`New result: ${newResult + 2}`);
// for (let i = 0; i < input.length; i += 1) {
//   for (let j = 0; j < input[0].length; j += 1) {
//     if (input[i][j] === 'S') {
//       console.log('add one for S');
//     }

//     if (input[i][j] === 'E') {
//       console.log('add one for E');
//     }
//   }
// }

// console.log(input[input.length - 3]);
// console.log(input[input.length - 2]);