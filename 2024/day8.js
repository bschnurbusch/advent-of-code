const input = [
  '...d............................J.................',
  '......e.............................J.............',
  '..........6............7..........................',
  '........................P7........................',
  '..................................................',
  '.........6........................................',
  'e..........................x.................E....',
  '...G...A.......d...........................o......',
  '.....A.e...........................J......8.......',
  '................6....9.....J.............E.8......',
  '..........d.9.........7..K....E...................',
  '...e.....U....9................x..K...............',
  '......A......O...........P................o.......',
  '......................x..................M..E.....',
  '........................x........p................',
  '........A..................O......................',
  '.......r.f....O.......P9..G.........m.............',
  'u...df..r...............7.........................',
  '.....g.............nXu......N.........K...........',
  '..............l..........0..............p.........',
  '.......lu...................p......o..............',
  '....g..........l........0p..G.....F...............',
  '.....................................8......F.....',
  '...................................C..............',
  '....3................G0......................M....',
  '2...f....g..........3........P......O......F......',
  'g......3.....0....H......................F..M.....',
  '.............c................m...h.....M.........',
  '...........2....l.................................',
  '..U...c......2...........................K........',
  '.D....................r.....f.....................',
  '....................N.............................',
  '.U..............h.................................',
  '...a.............u..............C.................',
  'c...Uj....a..6...H...................R............',
  '...3....j................H...............m........',
  '.......................5.......C..........4....m..',
  '......................H.........R......N....X.....',
  '.........h..2.................R................N..',
  '.......................r...........q...n..........',
  '.....c..............5.............................',
  '..a..h....D.................................n.....',
  '......qk..................D............1.....X....',
  '.k..................................q.............',
  '..k..........a.............L................1....4',
  '......k..........RQ..5.L.j..1..................4..',
  '..................................................',
  '..............L.....................oX............',
  '........Q.............L.........n.................',
  '...........Q.D........5..........1............4...',
];

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