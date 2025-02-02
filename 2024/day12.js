const input = [];

// const input = [
//   'AAAA',
//   'BBCD',
//   'BBCC',
//   'EEEC',
// ];

// const input = [
//   'OOOOO',
//   'OXOXO',
//   'OOOOO',
//   'OXOXO',
//   'OOOOO',
// ];

// const input = [
//   'RRRRIICCFF',
//   'RRRRIICCCF',
//   'VVRRRCCFFF',
//   'VVRCCCJFFF',
//   'VVVVCJJCFE',
//   'VVIVCCJJEE',
//   'VVIIICJJEE',
//   'MIIIIIJJEE',
//   'MIIISIJEEE',
//   'MMMISSJEEE',
// ];

// const input = [
//   'EEEEE',
//   'EXXXX',
//   'EEEEE',
//   'EXXXX',
//   'EEEEE',
// ];

// const input = [
//   'AAAAAA',
//   'AAABBA',
//   'AAABBA',
//   'ABBAAA',
//   'ABBAAA',
//   'AAAAAA',
// ];

let inputCopy = input.slice();

let result = 0;
let area = 0;
let perimeter = 0;
let regionPoints = [];

function findRegion(startingRow, startingColumn, character) {
  // console.log(`finding region for ${character}`);
  for (let i = 0; i < regionPoints.length; i += 1) {
    if (regionPoints[i][0] === startingRow && regionPoints[i][1] === startingColumn) {
      // console.log('breaking early');
      return;
    }
  }

  regionPoints.push([startingRow, startingColumn]);
  area += 1;
  checkPerimeter(startingRow, startingColumn, character);

  // check up
  if (startingRow > 0 && inputCopy[startingRow - 1][startingColumn] === character) {
    findRegion(startingRow - 1, startingColumn, character);
  }

  // check down
  if (startingRow < inputCopy.length - 1 && inputCopy[startingRow + 1][startingColumn] === character) {
    findRegion(startingRow + 1, startingColumn, character);
  }

  // check left
  if (startingColumn > 0 && inputCopy[startingRow][startingColumn - 1] === character) {
    findRegion(startingRow, startingColumn - 1, character);
  }

  // check right
  if (startingColumn < inputCopy[0].length - 1 && inputCopy[startingRow][startingColumn + 1] === character) {
    findRegion(startingRow, startingColumn + 1, character);
  }
}

function checkPerimeter(startingRow, startingColumn, character) {
  // check up
  if (startingRow === 0) {
    perimeter += 1;
  } else if (inputCopy[startingRow - 1][startingColumn] !== character) {
    perimeter += 1;
  }

  // check down
  if (startingRow === inputCopy.length - 1) {
    perimeter += 1;
  } else if (inputCopy[startingRow + 1][startingColumn] !== character) {
    perimeter += 1;
  }

  // check left
  if (startingColumn === 0) {
    perimeter += 1;
  } else if (inputCopy[startingRow][startingColumn - 1] !== character) {
    perimeter += 1;
  }

  // check right
  if (startingColumn === inputCopy[0].length - 1) {
    perimeter += 1;
  } else if (inputCopy[startingRow][startingColumn + 1] !== character) {
    perimeter += 1;
  }
}

function clearRegion() {
  for (let i = 0; i < regionPoints.length; i += 1) {
    const pointRow = regionPoints[i][0];
    const pointColumn = regionPoints[i][1];

    const splitRow = inputCopy[pointRow].split('');
    splitRow.splice(pointColumn, 1, '#');
    inputCopy[pointRow] = splitRow.join('');
  }
}


// for (let i = 0; i < inputCopy.length; i += 1) {
//   for (let j = 0; j < inputCopy[0].length; j += 1) {
//     if (inputCopy[i][j] !== '#') {
//       area = 0;
//       perimeter = 0;
//       regionPoints = [];

//       findRegion(i, j, inputCopy[i][j]);
//       clearRegion();

//       result += area * perimeter;
//     }
//   }
// }

// // for (let i = 0; i < inputCopy.length; i += 1) {
// //   console.log(inputCopy[i]);
// // }
// // console.log('=====================');
// console.log(`Result: ${result}`);



// PART TWO

result = 0;
area = 0;
perimeter = 0;
let sideRowPoints = {};
let sideColumnPoints = {};

function findNewRegion(startingRow, startingColumn, character) {
  // console.log(`finding region for ${character}`);
  for (let i = 0; i < regionPoints.length; i += 1) {
    if (regionPoints[i][0] === startingRow && regionPoints[i][1] === startingColumn) {
      // console.log('breaking early');
      return;
    }
  }

  regionPoints.push([startingRow, startingColumn]);
  area += 1;
  checkNewPerimeter(startingRow, startingColumn, character);

  // check up
  if (startingRow > 0 && inputCopy[startingRow - 1][startingColumn] === character) {
    findNewRegion(startingRow - 1, startingColumn, character);
  }

  // check down
  if (startingRow < inputCopy.length - 1 && inputCopy[startingRow + 1][startingColumn] === character) {
    findNewRegion(startingRow + 1, startingColumn, character);
  }

  // check left
  if (startingColumn > 0 && inputCopy[startingRow][startingColumn - 1] === character) {
    findNewRegion(startingRow, startingColumn - 1, character);
  }

  // check right
  if (startingColumn < inputCopy[0].length - 1 && inputCopy[startingRow][startingColumn + 1] === character) {
    findNewRegion(startingRow, startingColumn + 1, character);
  }
}

function addRowSidePoint(row, ogRow, column) {
  if (!sideRowPoints[row]) {
    sideRowPoints[row] = [[ogRow, column]];
  } else {
    sideRowPoints[row].push([ogRow, column]);
  }
}

function addColumnSidePoint(row, column, ogColumn) {
  if (!sideColumnPoints[column]) {
    sideColumnPoints[column] = [[row, ogColumn]];
  } else {
    sideColumnPoints[column].push([row, ogColumn]);
  }
};

function checkNewPerimeter(startingRow, startingColumn, character) {
  // check up
  if (startingRow === 0) {
    addRowSidePoint(startingRow - 0.5, startingRow, startingColumn);
  } else if (inputCopy[startingRow - 1][startingColumn] !== character) {
    addRowSidePoint(startingRow - 0.5, startingRow, startingColumn);
  }

  // check down
  if (startingRow === inputCopy.length - 1) {
    addRowSidePoint(startingRow + 0.5, startingRow, startingColumn);
  } else if (inputCopy[startingRow + 1][startingColumn] !== character) {
    addRowSidePoint(startingRow + 0.5, startingRow, startingColumn);
  }

  // check left
  if (startingColumn === 0) {
    addColumnSidePoint(startingRow, startingColumn - 0.5, startingColumn);
  } else if (inputCopy[startingRow][startingColumn - 1] !== character) {
    addColumnSidePoint(startingRow, startingColumn - 0.5, startingColumn);
  }

  // check right
  if (startingColumn === inputCopy[0].length - 1) {
    addColumnSidePoint(startingRow, startingColumn + 0.5, startingColumn);
  } else if (inputCopy[startingRow][startingColumn + 1] !== character) {
    addColumnSidePoint(startingRow, startingColumn + 0.5, startingColumn);
  }
}

function sortByColumn(a, b) {
  return a[1] - b[1];
}

function sortByRow(a, b) {
  return a[0] - b[0];
}

for (let i = 0; i < inputCopy.length; i += 1) {
  for (let j = 0; j < inputCopy[0].length; j += 1) {
    if (inputCopy[i][j] !== '#') {
      area = 0;
      perimeter = 0;
      regionPoints = [];
      sideRowPoints = {};
      sideColumnPoints = {};

      // console.log(`new region: ${inputCopy[i][j]}`);
      findNewRegion(i, j, inputCopy[i][j]);
      // console.log('row:');
      // console.log(JSON.stringify(sideRowPoints));
      // console.log('column:');
      // console.log(JSON.stringify(sideColumnPoints));

      for (let k = 0; k < Object.keys(sideRowPoints).length; k += 1) {
        const checkKey = Object.keys(sideRowPoints)[k];
        const points = sideRowPoints[checkKey];

        points.sort(sortByColumn);

        perimeter += 1;
        let startingColumn = points[0][1];
        let startingRow = points[0][0];
        for (let m = 0; m < points.length - 1; m += 1) {
          if (points[m + 1][1] - points[m][1] > 1) {
            // console.log('adding row');
            perimeter += 1;
            startingColumn = points[m + 1][1];
          } else if (points[m + 1][0] !== points[m][0]) {
            perimeter += 1;
            startingRow = points[m + 1][0];
          }
        }
      }

      for (let k = 0; k < Object.keys(sideColumnPoints).length; k += 1) {
        const checkKey = Object.keys(sideColumnPoints)[k];
        const points = sideColumnPoints[checkKey];

        points.sort(sortByRow);

        perimeter += 1;
        let startingRow = points[0][0];
        let startingColumn = points[0][1];
        for (let m = 0; m < points.length - 1; m += 1) {
          if (points[m + 1][0] - points[m][0] > 1) {
            // console.log('adding col');
            perimeter += 1;
            startingRow = points[m + 1][0];
          } else if (points[m + 1][1] !== points[m][1]) {
            perimeter += 1;
            startingColumn = points[m + 1][1];
          }
        }
      }






      clearRegion();
      // for (let i = 0; i < inputCopy.length; i += 1) {
      //   console.log(inputCopy[i]);
      // }
      // console.log('=====================');

      // console.log(`adding to result: ${area * perimeter}`);
      result += area * perimeter;
    }
  }
}

console.log(`Result part two: ${result}`);