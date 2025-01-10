const input = `
`;

// const input = `
// p=0,4 v=3,-3
// p=6,3 v=-1,-3
// p=10,3 v=-1,2
// p=2,0 v=2,-1
// p=0,0 v=1,3
// p=3,0 v=-2,-2
// p=7,6 v=-1,-3
// p=3,0 v=-1,-2
// p=9,3 v=2,3
// p=7,3 v=-1,2
// p=2,4 v=2,-3
// p=9,5 v=-3,-3
// `;

// const input = `
// p=2,4 v=2,-3
// `;

let result = 0;

const roomWidth = 101;
const roomHeight = 103;
const seconds = 100;

let robotSpots = [];
let quadOne = 0;
let quadTwo = 0;
let quadThree = 0;
let quadFour = 0;

const regex = /p=(\d+),(\d+) v=(-*\d+),(-*\d+)/g;

const robots = [...input.matchAll(regex)];
// console.log(JSON.stringify(robots[0][4]));

for (let i = 0; i < robots.length; i += 1) {
  const startingRow = parseInt(robots[i][2], 10);
  const startingColumn = parseInt(robots[i][1], 10);
  const rowVelocity = parseInt(robots[i][4], 10);
  const columnVelocity = parseInt(robots[i][3], 10);

  let newRow = startingRow;
  let newColumn = startingColumn;

  // console.log(startingRow);
  // console.log(startingColumn);
  // console.log(rowVelocity);
  // console.log(columnVelocity);

  // const newRow = (rowVelocity * seconds) % roomWidth;
  // const newColumn = (columnVelocity * seconds) % roomHeight;

  let count = 0;
  while (count < seconds) {
    count += 1;
    // console.log('walked once');

    newRow += rowVelocity;
    newColumn += columnVelocity;
    // console.log(`walked to new row ${newRow}`);
    // console.log(`walked to new column ${newColumn}`);

    if (newRow < 0) {
      newRow = (roomHeight) + newRow;
    } else if (newRow > (roomHeight - 1)) {
      newRow = newRow - (roomHeight);
    }

    if (newColumn < 0) {
      newColumn = (roomWidth) + newColumn;
    } else if (newColumn > (roomWidth - 1)) {
      newColumn = newColumn - (roomWidth);
    }

  }

  // console.log(`new row: ${newRow}, new column: ${newColumn}`);
  robotSpots.push([newRow, newColumn]);
}

let partTwoGrid = new Array(roomHeight);
// console.log(partTwoGrid.length);
for (let i = 0; i < partTwoGrid.length; i += 1) {
  partTwoGrid[i] = new Array(roomWidth);
}

for (let i = 0; i < partTwoGrid.length; i += 1) {
  for (let j = 0; j < partTwoGrid[i].length; j += 1) {
    partTwoGrid[i][j] = '.';
  }
}

// for (let i = 0; i < partTwoGrid.length; i += 1) {
//   console.log(partTwoGrid[i]);
// }

for (let i = 0; i < robotSpots.length; i += 1) {
  const rowSpot = robotSpots[i][0];
  const columnSpot = robotSpots[i][1];
  partTwoGrid[rowSpot][columnSpot] = '#';
  if (robotSpots[i][0] === Math.floor(roomHeight / 2) || robotSpots[i][1] === Math.floor(roomWidth / 2)) {
    continue;
  }

  if (rowSpot < Math.floor(roomHeight / 2) && columnSpot < Math.floor(roomWidth / 2)) {
    quadOne += 1;
  }

  if (rowSpot > Math.floor(roomHeight / 2) && columnSpot < Math.floor(roomWidth / 2)) {
    quadThree += 1;
  }

  if (rowSpot < Math.floor(roomHeight / 2) && columnSpot > Math.floor(roomWidth / 2)) {
    quadTwo += 1;
  }

  if (rowSpot > Math.floor(roomHeight / 2) && columnSpot > Math.floor(roomWidth / 2)) {
    quadFour += 1;
  }
}

result = quadOne * quadTwo * quadThree * quadFour;
console.log(`Result: ${result}`);

// for (let i = 0; i < partTwoGrid.length; i += 1) {
//   console.log(`${partTwoGrid[i].join('')}`);
// }


// PART TWO

console.log('part two ===========================');


for (let i = 0; i < partTwoGrid.length; i += 1) {
  for (let j = 0; j < partTwoGrid[i].length; j += 1) {
    partTwoGrid[i][j] = '.';
  }
}

// for (let i = 0; i < partTwoGrid.length; i += 1) {
//   console.log(partTwoGrid[i]);
// }


function checkGrid(seconds) {
  for (let i = 0; i < partTwoGrid.length; i += 1) {
    let maxCount = 0;
    let pointCount = 0;
    for (let j = 0; j < partTwoGrid[0].length; j += 1) {
      if (partTwoGrid[i][j] === '#') {
        pointCount += 1;
      } else {
        if (pointCount > maxCount) {
          maxCount = pointCount;
        }
        pointCount = 0;
      }
    }

    if (maxCount > 20) {
      console.log(`hit a big one at: ${seconds}`);
      for (let k = 0; k < partTwoGrid.length; k += 1) {
        console.log(`${partTwoGrid[k].join('')}`);
      }
      break;
    }
  }
}


function checkTree() {
  let quadOneMatches = 0;
  let quadThreeMatches = 0;
  let thatsATree = false;
  for (let i = 0; i < quadOnePoints.length; i += 1) {
    const ownRow = quadOnePoints[i][0];
    const ownColumn = quadOnePoints[i][1];

    for (let j = 0; j < quadTwoPoints.length; j += 1) {
      if (quadTwoPoints[j][1] === ((roomWidth - 1) - ownColumn) && quadTwoPoints[j][0] === ownRow) {
        // console.log('found mirror for quad one and two');
        quadOneMatches += 1;
        break;
      }
    }
  }

  for (let i = 0; i < quadThreePoints.length; i += 1) {
    const ownRow = quadThreePoints[i][0];
    const ownColumn = quadThreePoints[i][1];

    for (let j = 0; j < quadFourPoints.length; j += 1) {
      if (quadFourPoints[j][1] === ((roomWidth - 1) - ownColumn) && quadFourPoints[j][0] === ownRow) {
        // console.log('found mirror for quad three and four');
        quadThreeMatches += 1;
        break;
      }
    }
  }

  // if (quadOneMatches === quadOnePoints.length && quadOnePoints.length === quadTwoPoints.length) {
  //   if (quadThreeMatches === quadThreePoints.length && quadThreePoints.length === quadFourPoints.length) {
  //     thatsATree = true;
  //   }
  // }

  // if (quadOnePoints.length === quadTwoPoints.length) {
  //   if (quadThreePoints.length === quadFourPoints.length) {
  //     thatsATree = true;
  //   }
  // }

  if (quadOnePoints.length - quadOneMatches < 50) {
    if (quadThreePoints.length - quadThreeMatches < 50) {
      thatsATree = true;
    }
  }

  return thatsATree;
}

let count = 0;
let quadOnePoints = [];
let quadTwoPoints = [];
let quadThreePoints = [];
let quadFourPoints = [];
let foundTree = false;

while (foundTree === false && count < 9870) {
  quadOnePoints = [];
  quadTwoPoints = [];
  quadThreePoints = [];
  quadFourPoints = [];
  for (let i = 0; i < partTwoGrid.length; i += 1) {
    for (let j = 0; j < partTwoGrid[i].length; j += 1) {
      partTwoGrid[i][j] = '.';
    }
  }

  for (let i = 0; i < robots.length; i += 1) {
    const startingRow = parseInt(robots[i][2], 10);
    const startingColumn = parseInt(robots[i][1], 10);
    const rowVelocity = parseInt(robots[i][4], 10);
    const columnVelocity = parseInt(robots[i][3], 10);

    let newRow = startingRow;
    let newColumn = startingColumn;

    newRow += rowVelocity;
    newColumn += columnVelocity;
    // console.log(`walked to new row ${newRow}`);
    // console.log(`walked to new column ${newColumn}`);

    if (newRow < 0) {
      newRow = (roomHeight) + newRow;
    } else if (newRow > (roomHeight - 1)) {
      newRow = newRow - (roomHeight);
    }

    if (newColumn < 0) {
      newColumn = (roomWidth) + newColumn;
    } else if (newColumn > (roomWidth - 1)) {
      newColumn = newColumn - (roomWidth);
    }


    // console.log(`new row: ${newRow}, new column: ${newColumn}`);
    // robotSpots.push([newRow, newColumn]);

    robots[i][2] = newRow;
    robots[i][1] = newColumn;
    partTwoGrid[newRow][newColumn] = '#';

    if (newRow < Math.floor(roomHeight / 2) && newColumn < Math.floor(roomWidth / 2)) {
      quadOnePoints.push([newRow, newColumn]);
    }
    if (newRow < Math.floor(roomHeight / 2) && newColumn > Math.floor(roomWidth / 2)) {
      quadTwoPoints.push([newRow, newColumn]);
    }
    if (newRow > Math.floor(roomHeight / 2) && newColumn < Math.floor(roomWidth / 2)) {
      quadThreePoints.push([newRow, newColumn]);
    }
    if (newRow > Math.floor(roomHeight / 2) && newColumn > Math.floor(roomWidth / 2)) {
      quadFourPoints.push([newRow, newColumn]);
    }
  }

  count += 1;
  // if (count > 9499 && count < 9870) {
  //   console.log(`${count}:`);
  //   console.log(`${partTwoGrid[partTwoGrid.length - 4].join('')}`);
  //   console.log(`${partTwoGrid[partTwoGrid.length - 3].join('')}`);
  //   console.log(`${partTwoGrid[partTwoGrid.length - 2].join('')}`);
  //   console.log(`${partTwoGrid[partTwoGrid.length - 1].join('')}`);
  //   console.log('     ');
  //   // for (let i = 0; i < partTwoGrid.length; i += 1) {
  //   //   console.log(`${partTwoGrid[i].join('')}`);
  //   // }
  // }

  // check full
  // if (count === 9690) {
  //   for (let i = 0; i < partTwoGrid.length; i += 1) {
  //     console.log(`${partTwoGrid[i].join('')}`);
  //   }
  // }
  checkGrid(count);


  // console.log(`counting seconds ${count}`);
  // console.log(`quad one points: ${quadOnePoints.length}`);
  // console.log(`quad two points: ${quadTwoPoints.length}`);
  // console.log(`quad three points: ${quadThreePoints.length}`);
  // console.log(`quad four points: ${quadFourPoints.length}`);

  // const treeTime = checkTree();
  // if (treeTime && count !== 3276 && count !== 3831) {
  //   foundTree = true;
  // }
}

// console.log(`Result part two: ${count}`);