const input = [];

// const input = [
//   'T.........',
//   '...T......',
//   '.T........',
//   '..........',
//   '..........',
//   '..........',
//   '..........',
//   '..........',
//   '..........',
//   '..........',
// ];

// const input = [
//   '............',
//   '........0...',
//   '.....0......',
//   '.......0....',
//   '....0.......',
//   '......A.....',
//   '............',
//   '............',
//   '........A...',
//   '.........A..',
//   '............',
//   '............',
// ];

let trackResult = input.slice();
let antiNodes = [];
let result = 0;

// console.log(trackResult[0]);

function findMatching(character, startingRow, startingColumn) {
  let matches = [];
  for (let i = 0; i < input.length; i += 1) {
    for (let j = 0; j < input[0].length; j += 1) {
      if (input[i][j] === character && startingRow !== i && startingColumn !== j) {
        matches.push([i, j]);
      }
    }
  }

  return matches;
}

for (let i = 0; i < input.length; i += 1) {
  for (let j = 0; j < input[0].length; j += 1) {
    if (input[i][j] !== '.') {
      const matchingAntennas = findMatching(input[i][j], i, j);
      // if (i === 0 && j === 3) {
      //   console.log(JSON.stringify(matchingAntennas))
      // }

      for (let k = 0; k < matchingAntennas.length; k += 1) {
        const rowDistance = matchingAntennas[k][0] - i;
        const columnDistance = matchingAntennas[k][1] - j;

        antiNodes.push([i + (rowDistance * 2), j + (columnDistance * 2)]);
        antiNodes.push([i - rowDistance, j - columnDistance]);
      }
    }
  }
}

for (let i = 0; i < antiNodes.length; i += 1) {
  const row = antiNodes[i][0];
  const column = antiNodes[i][1];

  if ((row >= 0 && row < input.length) && (column >= 0 && column < input[0].length)) {
    // console.log(`updating: ${row}, ${column}`);
    const rowSplit = trackResult[row].split('');
    rowSplit[column] = '#';
    const updatedRow = rowSplit.join('');
    trackResult[row] = updatedRow;
  }
}

for (let i = 0; i < trackResult.length; i += 1) {
  for (let j = 0; j < trackResult[0].length; j += 1) {
    if (trackResult[i][j] === '#') {
      result += 1;
    }
  }
}

console.log(`Result: ${result}`);

// for (let i = 0; i < trackResult.length; i += 1) {
//   console.log(trackResult[i]);
// }

// PART TWO

trackResult = input.slice();
antiNodes = [];
result = 0;

for (let i = 0; i < input.length; i += 1) {
  for (let j = 0; j < input[0].length; j += 1) {
    if (input[i][j] !== '.') {
      const matchingAntennas = findMatching(input[i][j], i, j);
      // if (i === 0 && j === 3) {
      //   console.log(JSON.stringify(matchingAntennas))
      // }

      for (let k = 0; k < matchingAntennas.length; k += 1) {
        const rowDistance = matchingAntennas[k][0] - i;
        const columnDistance = matchingAntennas[k][1] - j;

        // antiNodes.push([i - rowDistance, j - columnDistance]);

        let pointAdjustment = 2;
        let extraAntiNodeRow = i + (rowDistance * pointAdjustment);
        let extraAntiNodeColumn = j + (columnDistance * pointAdjustment);

        while ((extraAntiNodeRow >= 0 && extraAntiNodeRow < input.length) && (extraAntiNodeColumn >= 0 && extraAntiNodeColumn < input[0].length)) {
          antiNodes.push([i + (rowDistance * pointAdjustment), j + (columnDistance * pointAdjustment)]);
          pointAdjustment += 1;
          extraAntiNodeRow = i + (rowDistance * pointAdjustment);
          extraAntiNodeColumn = j + (columnDistance * pointAdjustment);
        }

        pointAdjustment = 1;
        extraAntiNodeRow = i - (rowDistance * pointAdjustment);
        extraAntiNodeColumn = j - (columnDistance * pointAdjustment);

        while ((extraAntiNodeRow >= 0 && extraAntiNodeRow < input.length) && (extraAntiNodeColumn >= 0 && extraAntiNodeColumn < input[0].length)) {
          antiNodes.push([i - (rowDistance * pointAdjustment), j - (columnDistance * pointAdjustment)]);
          pointAdjustment += 1;
          extraAntiNodeRow = i - (rowDistance * pointAdjustment);
          extraAntiNodeColumn = j - (columnDistance * pointAdjustment);
        }
      }
    }
  }
}

for (let i = 0; i < antiNodes.length; i += 1) {
  const row = antiNodes[i][0];
  const column = antiNodes[i][1];

  if ((row >= 0 && row < input.length) && (column >= 0 && column < input[0].length)) {
    // console.log(`updating: ${row}, ${column}`);
    const rowSplit = trackResult[row].split('');
    rowSplit[column] = '#';
    const updatedRow = rowSplit.join('');
    trackResult[row] = updatedRow;
  }
}

for (let i = 0; i < trackResult.length; i += 1) {
  for (let j = 0; j < trackResult[0].length; j += 1) {
    if (trackResult[i][j] !== '.') {
      result += 1;
    }
  }
}

console.log(`Result part two: ${result}`);

// for (let i = 0; i < trackResult.length; i += 1) {
//   console.log(trackResult[i]);
// }