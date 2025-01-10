const input = [
];

// const input = [
// '2199943210',
// '3987894921',
// '9856789892',
// '8767896789',
// '9899965678',
// ];

let result = 0;
let lowPoints = [];
let basinSizes = [];
let currentBasin = 0;

for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
  input[rowIndex] = input[rowIndex].split('');
}

for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < input[rowIndex].length; columnIndex += 1) {
    let leftPoint = rowIndex >= 1 ? input[rowIndex - 1][columnIndex] : undefined;
    let upPoint = columnIndex >= 1 ? input[rowIndex][columnIndex - 1] : undefined;
    let rightPoint = rowIndex < (input.length - 1) ? input[rowIndex + 1][columnIndex] : undefined;
    let downPoint = columnIndex < (input[rowIndex].length - 1) ? input[rowIndex][columnIndex + 1] : undefined;
    let currentPoint = input[rowIndex][columnIndex];

    if ((!leftPoint || leftPoint > currentPoint) && (!upPoint || upPoint > currentPoint) && (!rightPoint || rightPoint > currentPoint) && (!downPoint || downPoint > currentPoint)) {
      // console.log(`Point found: ${parseInt(currentPoint)}`);
      // console.log(`X coord: ${rowIndex}`);
      // console.log(`Y coord: ${columnIndex}`);
      // if (rowIndex == 1) {
      //   console.log(leftPoint);
      //   console.log(upPoint);
      //   console.log(rightPoint);
      //   console.log(downPoint);
      // }
      result += (parseInt(currentPoint) + 1);
      let xCoord = rowIndex;
      let yCoord = columnIndex;
      lowPoints.push([xCoord, yCoord]);
    }
  }
}

let pointsCounted = new Array(100);
for (let index = 0; index < pointsCounted.length; index += 1) {
  pointsCounted[index] = new Array(100);
}

function pointCheck(centerX, centerY) {
  // currentBasin += 1;
  let leftPoint = centerX >= 1 ? input[centerX - 1][centerY] : undefined;
  let upPoint = centerY >= 1 ? input[centerX][centerY - 1] : undefined;
  let rightPoint = centerX < (input.length - 1) ? input[centerX + 1][centerY] : undefined;
  let downPoint = centerY < (input[centerX].length - 1) ? input[centerX][centerY + 1] : undefined;

  if (leftPoint && (parseInt(leftPoint) < 9) && pointsCounted[centerX - 1][centerY] != 'x') {
    // currentBasin += 1;
    pointsCounted[centerX - 1][centerY] = 'x';
    pointCheck(centerX - 1, centerY);
  }
  if (upPoint && (parseInt(upPoint) < 9) && pointsCounted[centerX][centerY - 1] != 'x') {
    // currentBasin += 1;
    pointsCounted[centerX][centerY - 1] = 'x';
    pointCheck(centerX, centerY - 1);
  }
  if (rightPoint && (parseInt(rightPoint) < 9) && pointsCounted[centerX + 1][centerY] != 'x') {
    // currentBasin += 1;
    pointsCounted[centerX + 1][centerY] = 'x';
    pointCheck(centerX + 1, centerY);
  }
  if (downPoint && (parseInt(downPoint) < 9) && pointsCounted[centerX][centerY + 1] != 'x') {
    // currentBasin += 1;
    pointsCounted[centerX][centerY + 1] = 'x';
    pointCheck(centerX, centerY + 1);
  }
}

// console.log(`Low points: ${lowPoints}`);
// console.log(lowPoints.length);

for (let lowPointIndex = 0; lowPointIndex < lowPoints.length; lowPointIndex += 1) {
  currentBasin = 0;
  pointsCounted = new Array(100);
  for (let index = 0; index < pointsCounted.length; index += 1) {
    pointsCounted[index] = new Array(100);
  }
  pointCheck(lowPoints[lowPointIndex][0], lowPoints[lowPointIndex][1]);
  // basinSizes.push(currentBasin);
  // console.log(`Points counted:`);
  // console.log(pointsCounted[0]);
  // console.log(pointsCounted[1]);
  // console.log(pointsCounted[2]);
  // console.log(pointsCounted[3]);
  // console.log(pointsCounted[4]);
  // console.log(pointsCounted[5]);
  for (let xIndex = 0; xIndex < pointsCounted.length; xIndex += 1) {
    for (let yIndex = 0; yIndex < pointsCounted[xIndex].length; yIndex += 1) {
      if (pointsCounted[xIndex][yIndex] == 'x') {
        currentBasin += 1;
      }
    }
  }
  basinSizes.push(currentBasin);
}

basinSizes.sort(function(a, b) {
  return a - b;
});

// console.log(basinSizes);

let highOne = basinSizes[basinSizes.length - 1];
let highTwo = basinSizes[basinSizes.length - 2];
let highThree = basinSizes[basinSizes.length - 3];
// console.log(`one: ${highOne}`);
// console.log(`two: ${highTwo}`);
// console.log(`three: ${highThree}`);

console.log(`Result: ${highOne * highTwo * highThree}`)

// console.log(result);
