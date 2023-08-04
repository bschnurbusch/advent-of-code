// const input = [
// '7232374314',
// '8531113786',
// '3411787828',
// '5482241344',
// '5856827742',
// '7614532764',
// '5311321758',
// '1255116187',
// '5821277714',
// '2623834788',
// ];

const input = [
'5483143223',
'2745854711',
'5264556173',
'6141336146',
'6357385478',
'4167524645',
'2176841721',
'6882881134',
'4846848554',
'5283751526',
];

let flashCheck = new Array(10);
for (let index = 0; index < flashCheck.length; index += 1) {
  flashCheck[index] = new Array(10);
}

let flashCount = 0;

for (let index = 0; index < input.length; index += 1) {
  input[index] = input[index].split('');
}
// console.log(input);

for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < input[rowIndex].length; columnIndex += 1) {
    input[rowIndex][columnIndex] = parseInt(input[rowIndex][columnIndex]);
  }
}
// console.log(input);

function flash(centerX, centerY) {
  // flashCount += 1;
  flashCheck[centerX][centerY] = 'x';
  let leftPoint = centerX >= 1 ? input[centerX - 1][centerY] : undefined;
  let topLeftPoint = (centerX >= 1 && centerY >= 1) ? input[centerX - 1][centerY - 1] : undefined;
  let upPoint = centerY >= 1 ? input[centerX][centerY - 1] : undefined;
  let topRightPoint = (centerX < (input.length - 1) && centerY >= 1) ? input[centerX + 1][centerY - 1] : undefined;
  let rightPoint = centerX < (input.length - 1) ? input[centerX + 1][centerY] : undefined;
  let bottomRightPoint = (centerX < (input.length - 1) && centerY < (input[centerX].length - 1)) ? input[centerX + 1][centerY + 1] : undefined;
  let downPoint = centerY < (input[centerX].length - 1) ? input[centerX][centerY + 1] : undefined;
  let bottomLeftPoint = (centerX >= 1 && centerY < (input[centerX].length - 1)) ? input[centerX - 1][centerY + 1] : undefined;

  // if (leftPoint && (leftPoint <= 9) && (leftPoint + 1 > 9)) {
  //   flash(centerX - 1, centerY);
  // }
  // if (topLeftPoint && (topLeftPoint <= 9) && (topLeftPoint + 1 > 9)) {
  //   flash(centerX - 1, centerY - 1);
  // }
  // if (upPoint && (upPoint <= 9) && (upPoint + 1 > 9)) {
  //   flash(centerX, centerY - 1);
  // }
  // if (topRightPoint && (topRightPoint <= 9) && (topRightPoint + 1 > 9)) {
  //   flash(centerX + 1, centerY - 1);
  // }
  // if (rightPoint && (rightPoint <= 9) && (rightPoint + 1 > 9)) {
  //   flash(centerX + 1, centerY);
  // }
  // if (bottomRightPoint && (bottomRightPoint <= 9) && (bottomRightPoint + 1 > 9)) {
  //   flash(centerX + 1, centerY + 1);
  // }
  // if (downPoint && (downPoint <= 9) && (downPoint + 1 > 9)) {
  //   flash(centerX, centerY + 1);
  // }
  // if (bottomLeftPoint && (bottomLeftPoint <= 9) && (bottomLeftPoint + 1 > 9)) {
  //   flash(centerX - 1, centerY + 1);
  // }
  if (typeof leftPoint != 'undefined') {
    leftPoint += 1;
    input[centerX - 1][centerY] += 1;
  }
  if (typeof topLeftPoint != 'undefined') {
    topLeftPoint += 1;
    input[centerX - 1][centerY - 1] += 1;
  }
  if (typeof upPoint != 'undefined') {
    upPoint += 1;
    input[centerX][centerY - 1] += 1;
  }
  if (typeof topRightPoint != 'undefined') {
    topRightPoint += 1;
    input[centerX + 1][centerY - 1] += 1;
  }
  if (typeof rightPoint != 'undefined') {
    rightPoint += 1;
    input[centerX + 1][centerY] += 1;
  }
  if (typeof bottomRightPoint != 'undefined') {
    bottomRightPoint += 1;
    input[centerX + 1][centerY + 1] += 1;
  }
  if (typeof downPoint != 'undefined') {
    downPoint += 1;
    input[centerX][centerY + 1] += 1;
  }
  if (typeof bottomLeftPoint != 'undefined') {
    bottomLeftPoint += 1;
    input[centerX - 1][centerY + 1] += 1;
  }
  // if (centerX == 4 && centerY == 9) {
  //   console.log(flashCheck);
  //   console.log(flashCheck[centerX][centerY - 1]);
  // }


  if ((leftPoint > 9) && flashCheck[centerX - 1][centerY] != 'x') {
    flash(centerX - 1, centerY);
  }
  if ((topLeftPoint > 9) && flashCheck[centerX - 1][centerY - 1] != 'x') {
    flash(centerX - 1, centerY - 1);
  }
  if ((upPoint > 9) && flashCheck[centerX][centerY - 1] != 'x') {
    flash(centerX, centerY - 1);
  }
  if ((topRightPoint > 9) && flashCheck[centerX + 1][centerY - 1] != 'x') {
    flash(centerX + 1, centerY - 1);
  }
  if ((rightPoint > 9) && flashCheck[centerX + 1][centerY] != 'x') {
    flash(centerX + 1, centerY);
  }
  if ((bottomRightPoint > 9) && flashCheck[centerX + 1][centerY + 1] != 'x') {
    flash(centerX + 1, centerY + 1);
  }
  if ((downPoint > 9) && flashCheck[centerX][centerY + 1] != 'x') {
    flash(centerX, centerY + 1);
  }
  if ((bottomLeftPoint > 9) && flashCheck[centerX - 1][centerY + 1] != 'x') {
    flash(centerX - 1, centerY + 1);
  }
}

for (let steps = 0; steps < 10000; steps += 1) {
  flashCount = 0
  for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
    for (let columnIndex = 0; columnIndex < input[rowIndex].length; columnIndex += 1) {
      input[rowIndex][columnIndex] += 1;
      // if ((input[rowIndex][columnIndex] - 1 <= 9) && (input[rowIndex][columnIndex] > 9)) {
      //   flash(rowIndex, columnIndex);
      // }
    }
  }

  for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
    for (let columnIndex = 0; columnIndex < input[rowIndex].length; columnIndex += 1) {
      if (input[rowIndex][columnIndex] > 9 && flashCheck[rowIndex][columnIndex] != 'x') {
        flash(rowIndex, columnIndex);
      }
    }
  }

  for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
    for (let columnIndex = 0; columnIndex < input[rowIndex].length; columnIndex += 1) {
      if (input[rowIndex][columnIndex] > 9) {
        input[rowIndex][columnIndex] = 0;
      }
    }
  }
  for (let rowIndex = 0; rowIndex < flashCheck.length; rowIndex += 1) {
    for (let columnIndex = 0; columnIndex < flashCheck[rowIndex].length; columnIndex += 1) {
      if (flashCheck[rowIndex][columnIndex] == 'x') {
        flashCount += 1;
      }
    }
  }
  if (flashCount == 100) {
    console.log(`All flashing on step: ${steps}`);
    break;
  }
  flashCheck = new Array(10);
  for (let index = 0; index < flashCheck.length; index += 1) {
    flashCheck[index] = new Array(10);
  }

}
// console.log(input);
 

// console.log(flashCheck);
console.log(flashCount);
