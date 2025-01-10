const input = [];

// const input = [
// '1163751742',
// '1381373672',
// '2136511328',
// '3694931569',
// '7463417111',
// '1319128137',
// '1359912421',
// '3125421639',
// '1293138521',
// '2311944581',
// ];

let newInput = new Array(500);
for (let index = 0; index < newInput.length; index += 1) {
  newInput[index] = new Array(500);
}

let results = [];
let finalCount = [];
let result = 15000;
let stepTracker = 0;
let riskArray = new Array(1000);
for (let index = 0; index < riskArray.length; index += 1) {
  riskArray[index] = 15000;
}

let basePath = new Array(500);
for (let index = 0; index < basePath.length; index += 1) {
  basePath[index] = new Array(500);
}
basePath[0][0] = 1;
// console.log(basePath);

for (let index = 0; index < input.length; index += 1) {
  input[index] = input[index].split('');
}

// let repeatCount = 0;
// for (let repeatRowIndex = 0; repeatRowIndex < 5; repeatRowIndex += 1) {
//   for (let repeatColumnIndex = 0; repeatColumnIndex < 5; repeatColumnIndex += 1) {
//     for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
//       for (let columnIndex = 0; columnIndex < input.length; columnIndex += 1) {
//         let rowCoord = rowIndex + (1 * repeatRowIndex);
//         let columnCoord = columnIndex + (1 * repeatColumnIndex);
//         let value = input[rowIndex][columnIndex] + (1 * (repeatRowIndex + repeatColumnIndex));
//         newInput[rowCoord][columnCoord] = value;
//       }
//     }
//   }
// }

for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < input.length; columnIndex += 1) {
    input[rowIndex][columnIndex] = parseInt(input[rowIndex][columnIndex]);
  }
}

for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < input.length; columnIndex += 1) {
    newInput[rowIndex][columnIndex] = input[rowIndex][columnIndex];
  }
}

for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < input.length; columnIndex += 1) {
    newInput[rowIndex][columnIndex + 100] = input[rowIndex][columnIndex] + 1;
  }
}

for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < input.length; columnIndex += 1) {
    newInput[rowIndex][columnIndex + 200] = input[rowIndex][columnIndex] + 2;
  }
}

for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < input.length; columnIndex += 1) {
    newInput[rowIndex][columnIndex + 300] = input[rowIndex][columnIndex] + 3;
  }
}

for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < input.length; columnIndex += 1) {
    newInput[rowIndex][columnIndex + 400] = input[rowIndex][columnIndex] + 4;
  }
}





for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < input.length; columnIndex += 1) {
    newInput[rowIndex + 100][columnIndex] = input[rowIndex][columnIndex] + 1;
  }
}

for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < input.length; columnIndex += 1) {
    newInput[rowIndex + 100][columnIndex + 100] = input[rowIndex][columnIndex] + 2;
  }
}

for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < input.length; columnIndex += 1) {
    newInput[rowIndex + 100][columnIndex + 200] = input[rowIndex][columnIndex] + 3;
  }
}

for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < input.length; columnIndex += 1) {
    newInput[rowIndex + 100][columnIndex + 300] = input[rowIndex][columnIndex] + 4;
  }
}

for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < input.length; columnIndex += 1) {
    newInput[rowIndex + 100][columnIndex + 400] = input[rowIndex][columnIndex] + 5;
  }
}




for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < input.length; columnIndex += 1) {
    newInput[rowIndex + 200][columnIndex] = input[rowIndex][columnIndex] + 2;
  }
}

for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < input.length; columnIndex += 1) {
    newInput[rowIndex + 200][columnIndex + 100] = input[rowIndex][columnIndex] + 3;
  }
}

for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < input.length; columnIndex += 1) {
    newInput[rowIndex + 200][columnIndex + 200] = input[rowIndex][columnIndex] + 4;
  }
}

for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < input.length; columnIndex += 1) {
    newInput[rowIndex + 200][columnIndex + 300] = input[rowIndex][columnIndex] + 5;
  }
}

for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < input.length; columnIndex += 1) {
    newInput[rowIndex + 200][columnIndex + 400] = input[rowIndex][columnIndex] + 6;
  }
}



for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < input.length; columnIndex += 1) {
    newInput[rowIndex + 300][columnIndex] = input[rowIndex][columnIndex] + 3;
  }
}

for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < input.length; columnIndex += 1) {
    newInput[rowIndex + 300][columnIndex + 100] = input[rowIndex][columnIndex] + 4;
  }
}

for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < input.length; columnIndex += 1) {
    newInput[rowIndex + 300][columnIndex + 200] = input[rowIndex][columnIndex] + 5;
  }
}

for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < input.length; columnIndex += 1) {
    newInput[rowIndex + 300][columnIndex + 300] = input[rowIndex][columnIndex] + 6;
  }
}

for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < input.length; columnIndex += 1) {
    newInput[rowIndex + 300][columnIndex + 400] = input[rowIndex][columnIndex] + 7;
  }
}




for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < input.length; columnIndex += 1) {
    newInput[rowIndex + 400][columnIndex] = input[rowIndex][columnIndex] + 4;
  }
}

for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < input.length; columnIndex += 1) {
    newInput[rowIndex + 400][columnIndex + 100] = input[rowIndex][columnIndex] + 5;
  }
}

for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < input.length; columnIndex += 1) {
    newInput[rowIndex + 400][columnIndex + 200] = input[rowIndex][columnIndex] + 6;
  }
}

for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < input.length; columnIndex += 1) {
    newInput[rowIndex + 400][columnIndex + 300] = input[rowIndex][columnIndex] + 7;
  }
}

for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < input.length; columnIndex += 1) {
    newInput[rowIndex + 400][columnIndex + 400] = input[rowIndex][columnIndex] + 8;
  }
}


for (let rowIndex = 0; rowIndex < newInput.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < newInput.length; columnIndex += 1) {
    newInput[rowIndex][columnIndex] = newInput[rowIndex][columnIndex] % 9 == 0 ? 9 : newInput[rowIndex][columnIndex] % 9
  }
}

console.log(newInput[48][0]);


let rowAdd = 0;
let columnAdd = 0;
for (let index = 0; index < 1; index += 1) {
  for (let columnIndex = 0; columnIndex < input[index].length; columnIndex += 1) {
    rowAdd += parseInt(input[index][columnIndex]);
  }
}
for (let index = 0; index < input.length; index += 1) {
  columnAdd += parseInt(input[index][0]);
}
console.log(`Use this: ${rowAdd + columnAdd}`);
// console.log(input.length);
// console.log(input[0].length);

function possiblePath(xStart, yStart, risk) {
  stepTracker += 1;
  let leftStep = xStart >= 1 ? newInput[xStart - 1][yStart] : undefined;
  let upStep = yStart >= 1 ? newInput[xStart][yStart - 1] : undefined;
  let rightStep = xStart < newInput.length - 1 ? newInput[xStart + 1][yStart] : undefined;
  let downStep = yStart < newInput.length - 1 ? newInput[xStart][yStart + 1] : undefined;

  let stopCheck = risk + (499 - xStart) + (499 - yStart);
  let stepCount = xStart + yStart;

  // if (risk >= riskArray[stepCount] && basePath[xStart][yStart] == 'x') {
  //   return;
  // }
  if (risk >= basePath[xStart][yStart]) {
    return;
  }
  basePath[xStart][yStart] = risk;

  if (leftStep) {
    let newRisk = risk + parseInt(newInput[xStart - 1][yStart]);
    if (newRisk < result && stopCheck < result) {
      possiblePath(xStart - 1, yStart, newRisk);
    }
  }

  if (upStep) {
    let newRisk = risk + parseInt(newInput[xStart][yStart - 1]);
    if (newRisk < result && stopCheck < result) {
      possiblePath(xStart, yStart - 1, newRisk);
    }
  }

  if (rightStep) {
    let newRisk = risk + parseInt(newInput[xStart + 1][yStart]);
    if (newRisk < riskArray[stepCount]) {
      riskArray[stepCount] = newRisk
    }
    if (xStart + 1 == 499 && yStart == 499) {
      if (newRisk < result) {
        result = newRisk;
      }
    } else if (newRisk < result && stopCheck < result) {
      possiblePath(xStart + 1, yStart, newRisk);
    }
  }

  if (downStep) {
    let newRisk = risk + parseInt(newInput[xStart][yStart + 1]);
    if (newRisk < riskArray[stepCount]) {
      riskArray[stepCount] = newRisk
    }
    if (xStart == 499 && yStart + 1 == 499) {
      if (newRisk < result) {
        result = newRisk;
      }
    } else if (newRisk < result && stopCheck < result) {
      possiblePath(xStart, yStart + 1, newRisk);
    }
  }
}

possiblePath(0, 0, 0);
// results.sort(function(a, b) {
//   return a - b;
// });
// console.log(results[0]);
console.log(result);
console.log(stepTracker);



// console.log(results[0]);

// for (let index = 0; index < results.length; index += 1) {
//   let currentCount = 0;
//   for (let rowIndex = 0; rowIndex < results[index].length; rowIndex += 1) {
//     for (let columnIndex = 0; columnIndex < results[index][rowIndex].length; columnIndex += 1) {
//       if (results[index][rowIndex][columnIndex] == 'x') {
//         currentCount += parseInt(input[rowIndex][columnIndex]);
//       }
//     }
//   }

//   finalCount.push(currentCount);
// }

// finalCount.sort(function(a, b) {
//   return a - b;
// });

// console.log(finalCount);
// console.log(finalCount[0]);
