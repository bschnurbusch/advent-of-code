const board = [
];

// const board = [
//   '####################',
//   '##[].......[].[][]##',
//   '##[]...........[].##',
//   '##[]........[][][]##',
//   '##[]......[]....[]##',
//   '##..##......[]....##',
//   '##..[]............##',
//   '##..@......[].[][]##',
//   '##......[][]..[]..##',
//   '####################',
// ];

// small example
// const board = [
//   '########',
//   '#..O.O.#',
//   '##@.O..#',
//   '#...O..#',
//   '#.#.O..#',
//   '#...O..#',
//   '#......#',
//   '########',
// ];

// large example
// const board = [
//   '##########',
//   '#..O..O.O#',
//   '#......O.#',
//   '#.OO..O.O#',
//   '#..O@..O.#',
//   '#O#..O...#',
//   '#O..O..O.#',
//   '#.OO.O.OO#',
//   '#....O...#',
//   '##########',
// ];

// small example part two
// let board = [
//   '#######',
//   '#...#.#',
//   '#.....#',
//   '#..OO@#',
//   '#..O..#',
//   '#.....#',
//   '#######',
// ];

// custom example
// let board = [
//   '########',
//   '#......#',
//   '#....#.#',
//   '#...OO@#',
//   '#...O..#',
//   '#......#',
//   '########',
// ];

// example of completed board
// const board = [
//   '##########',
//   '#.O.O.OOO#',
//   '#........#',
//   '#OO......#',
//   '#OO@.....#',
//   '#O#.....O#',
//   '#O.....OO#',
//   '#O.....OO#',
//   '#OO....OO#',
//   '##########',
// ];

// small example
// const move = `
// <^^>>>vv<v>>v<<
// `;

// small example part two
// const move = `
// <vv<<^^<<^^
// `;

// const move = `
// <^<v
// `;

// custom move
// const move = `
// <>^^<<<vv
// `;

// large example
// const move = `
// <vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^
// vvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v
// ><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<
// <<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^
// ^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><
// ^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^
// >^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^
// <><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>
// ^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>
// v^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^
// `;

// const move = `
// ^>
// `;

const move = `
`;

let result = 0;
let robotSpot = [0, 0];

for (let i = 0; i < board.length; i += 1) {
  board[i] = board[i].split('');
}

for (let i = 0; i < board.length; i += 1) {
  for (let j = 0; j < board.length; j += 1) {
    if (board[i][j] === '@') {
      robotSpot = [i, j];
    }
  }
}

// console.log(robotSpot);

// for (let i = 0; i < board.length; i += 1) {
//   console.log(board[i]);
// }

function checkMove(move) {
  const startingRow = robotSpot[0];
  const startingColumn = robotSpot[1];

  // check up
  if (move === '^') {
    for (let i = startingRow; i >= 0; i -= 1) {
      if (board[i][startingColumn] === '.') {
        // console.log('up works');
        return [i, startingColumn];
      }

      if (board[i][startingColumn] === '#') {
        // console.log('up doesnt work');
        return false;
      }
    }
  }

  // check down
  if (move === 'v') {
    for (let i = startingRow; i < board.length; i += 1) {
      if (board[i][startingColumn] === '.') {
        // console.log('down works');
        return [i, startingColumn];
      }

      if (board[i][startingColumn] === '#') {
        // console.log('down doesnt work');
        return false;
      }
    }
  }

  // check left
  if (move === '<') {
    for (let i = startingColumn; i >= 0; i -= 1) {
      if (board[startingRow][i] === '.') {
        // console.log('left works');
        return [startingRow, i];
      }

      if (board[startingRow][i] === '#') {
        // console.log('left doesnt work');
        return false;
      }
    }
  }

  // check right
  if (move === '>') {
    for (let i = startingColumn; i < board[0].length; i += 1) {
      if (board[startingRow][i] === '.') {
        // console.log('right works');
        return [startingRow, i];
      }

      if (board[startingRow][i] === '#') {
        // console.log('right doesnt work');
        return false;
      }
    }
  }
}

function makeMove(move, openSpot) {
  const startingRow = robotSpot[0];
  const startingColumn = robotSpot[1];

  const openRow = openSpot[0];
  const openColumn = openSpot[1];

  // move up
  if (move === '^') {
    // console.log('moving up');
    // console.log(`open row: ${openRow}`);
    // console.log(`open column: ${openColumn}`);
    for (let i = openRow; i < startingRow; i += 1) {
      const tempVal = board[i + 1][startingColumn];
      board[i][startingColumn] = tempVal;
      board[i + 1][startingColumn] = '.';

      if (tempVal === '@') {
        robotSpot = [i, startingColumn];
      }
    }
  }

  // move down
  if (move === 'v') {
    for (let i = openRow; i > startingRow; i -= 1) {
      const tempVal = board[i - 1][startingColumn];
      board[i][startingColumn] = tempVal;
      board[i - 1][startingColumn] = '.';

      if (tempVal === '@') {
        robotSpot = [i, startingColumn];
      }
    }
  }

  // move left
  if (move === '<') {
    for (let i = openColumn; i < startingColumn; i += 1) {
      const tempVal = board[startingRow][i + 1];
      board[startingRow][i] = tempVal;
      board[startingRow][i + 1] = '.';

      if (tempVal === '@') {
        robotSpot = [startingRow, i];
      }
    }
  }

  // move right
  if (move === '>') {
    // console.log('moving right');
    // console.log(`open row: ${openRow}`);
    // console.log(`open column: ${openColumn}`);
    for (let i = openColumn; i > startingColumn; i -= 1) {
      const tempVal = board[startingRow][i - 1];
      board[startingRow][i] = tempVal;
      board[startingRow][i - 1] = '.';

      if (tempVal === '@') {
        robotSpot = [startingRow, i];
      }
    }
  }
}

// for (let i = 0; i < move.length; i += 1) {
//   const moveHere = checkMove(move[i]);

//   if (moveHere) {
//     // console.log('moving');
//     makeMove(move[i], moveHere);
//   }
// }

for (let i = 0; i < board.length; i += 1) {
  for (let j = 0; j < board[i].length; j += 1) {
    if (board[i][j] === 'O') {
      result += (100 * i) + j;
    }
  }
}

// console.log(`Result: ${result}`);

// for (let i = 0; i < board.length; i += 1) {
//   console.log(board[i]);
// }
// console.log(board[0].length);


// PART TWO

result = 0;
let boxCount = 0;
let blockedMove = false;

for (let i = 0; i < board.length; i += 1) {
  for (let j = 0; j < (board.length * 2); j += 1) {
    if (board[i][j] === '@') {
      board[i].splice(j, 1, '@', '.');
    }

    if (board[i][j] === '#') {
      board[i].splice(j, 1, '#', '#');
    }

    if (board[i][j] === 'O') {
      boxCount += 1;
      board[i].splice(j, 1, '[', ']');
    }

    if (board[i][j] === '.') {
      board[i].splice(j, 1, '.', '.');
    }

    j += 1;
  }
}

for (let i = 0; i < board.length; i += 1) {
  for (let j = 0; j < board[0].length; j += 1) {
    if (board[i][j] === '@') {
      robotSpot = [i, j];
      // console.log(`robot start: ${i}, ${j}`);
    }
  }
}


function checkBoxUp(boxPosition, move = false) {
  const startingRow = boxPosition[0][0];
  const upSpotOne = boxPosition[0][1];
  const upSpotTwo = boxPosition[1][1];

  let leftBoxCanMove = true;
  let rightBoxCanMove = true;
  let middleBoxCanMove = true;

  if (board[startingRow - 1][upSpotOne] === '.' && board[startingRow - 1][upSpotTwo] === '.') {
    if (board[startingRow - 1][upSpotOne] === '#' || board[startingRow - 1][upSpotTwo] === '#') {
      console.log('you messed up here');
    }

    if (move === true) {
      board[startingRow - 1][upSpotOne] = '[';
      board[startingRow - 1][upSpotTwo] = ']';
      board[startingRow][upSpotOne] = '.';
      board[startingRow][upSpotTwo] = '.';
    }
    // board[startingRow - 1][upSpotOne] = '[';
    // board[startingRow - 1][upSpotTwo] = ']';
    // board[startingRow][upSpotOne] = '.';
    // board[startingRow][upSpotTwo] = '.';
    return true;
  }

  if (board[startingRow - 1][upSpotOne] === '#' || board[startingRow - 1][upSpotTwo] === '#') {
    // console.log('blocked going up');
    blockedMove = true;
    return false;
  }

  if (board[startingRow - 1][upSpotOne] === ']') {
    leftBoxCanMove = checkBoxUp([[startingRow - 1, upSpotOne - 1], [startingRow - 1, upSpotOne]], move);
  }
  if (board[startingRow - 1][upSpotTwo] === '[') {
    rightBoxCanMove = checkBoxUp([[startingRow - 1, upSpotTwo], [startingRow - 1, upSpotTwo + 1]], move);
  }
  if (board[startingRow - 1][upSpotOne] === '[') {
    middleBoxCanMove = checkBoxUp([[startingRow - 1, upSpotOne], [startingRow - 1, upSpotTwo]], move);
  }

  if (leftBoxCanMove && rightBoxCanMove && middleBoxCanMove) {
    if (board[startingRow - 1][upSpotOne] === '#' || board[startingRow - 1][upSpotTwo] === '#') {
      console.log('you messed up here');
    }
    if (move === true) {
      board[startingRow - 1][upSpotOne] = '[';
      board[startingRow - 1][upSpotTwo] = ']';
      board[startingRow][upSpotOne] = '.';
      board[startingRow][upSpotTwo] = '.';
    }
    // board[startingRow - 1][upSpotOne] = '[';
    // board[startingRow - 1][upSpotTwo] = ']';
    // board[startingRow][upSpotOne] = '.';
    // board[startingRow][upSpotTwo] = '.';
    return true;
  }
  // console.log('you messed up');
  return false;
}

function checkBoxDown(boxPosition, move = false) {
  const startingRow = boxPosition[0][0];
  const downSpotOne = boxPosition[0][1];
  const downSpotTwo = boxPosition[1][1];

  let leftBoxCanMove = true;
  let rightBoxCanMove = true;
  let middleBoxCanMove = true;

  if (board[startingRow + 1][downSpotOne] === '.' && board[startingRow + 1][downSpotTwo] === '.') {
    if (board[startingRow + 1][downSpotOne] === '#' || board[startingRow + 1][downSpotTwo] === '#') {
      console.log('you messed up');
    }

    if (move === true) {
      board[startingRow + 1][downSpotOne] = '[';
      board[startingRow + 1][downSpotTwo] = ']';
      board[startingRow][downSpotOne] = '.';
      board[startingRow][downSpotTwo] = '.';
    }
    // board[startingRow + 1][downSpotOne] = '[';
    // board[startingRow + 1][downSpotTwo] = ']';
    // board[startingRow][downSpotOne] = '.';
    // board[startingRow][downSpotTwo] = '.';
    return true;
  }

  if (board[startingRow + 1][downSpotOne] === '#' || board[startingRow + 1][downSpotTwo] === '#') {
    // console.log('blocked going down');
    blockedMove = true;
    return false;
  }

  if (board[startingRow + 1][downSpotOne] === ']') {
    leftBoxCanMove = checkBoxDown([[startingRow + 1, downSpotOne - 1], [startingRow + 1, downSpotOne]], move);
  }
  if (board[startingRow + 1][downSpotTwo] === '[') {
    rightBoxCanMove = checkBoxDown([[startingRow + 1, downSpotTwo], [startingRow + 1, downSpotTwo + 1]], move);
  }
  if (board[startingRow + 1][downSpotOne] === '[') {
    middleBoxCanMove = checkBoxDown([[startingRow + 1, downSpotOne], [startingRow + 1, downSpotTwo]], move);
  }

  if (leftBoxCanMove && rightBoxCanMove && middleBoxCanMove) {
    if (board[startingRow + 1][downSpotOne] === '#' || board[startingRow + 1][downSpotTwo] === '#') {
      console.log('you messed up');
    }
    if (move === true) {
      board[startingRow + 1][downSpotOne] = '[';
      board[startingRow + 1][downSpotTwo] = ']';
      board[startingRow][downSpotOne] = '.';
      board[startingRow][downSpotTwo] = '.';
    }
    // board[startingRow + 1][downSpotOne] = '[';
    // board[startingRow + 1][downSpotTwo] = ']';
    // board[startingRow][downSpotOne] = '.';
    // board[startingRow][downSpotTwo] = '.';
    return true;
  }
  // console.log('you messed up');
  return false;
}




function checkNewMove(move) {
  const startingRow = robotSpot[0];
  const startingColumn = robotSpot[1];

  // check up
  if (move === '^') {
    for (let i = startingRow; i >= 0; i -= 1) {
      if (board[i][startingColumn] === '.') {
        // console.log('up works');
        return [i, startingColumn];
      }

      if (board[i][startingColumn] === '[') {
        const outcome = checkBoxUp([[i, startingColumn], [i, startingColumn + 1]]);
        // console.log(`here: ${outcome}`);
        if (outcome === true) {
          checkBoxUp([[i, startingColumn], [i, startingColumn + 1]], true);
        }
        return outcome;
        // return checkBoxUp([[i, startingColumn], [i, startingColumn + 1]]);
      }

      if (board[i][startingColumn] === ']') {
        const outcome = checkBoxUp([[i, startingColumn - 1], [i, startingColumn]]);
        // console.log(`there: ${outcome}`);
        if (outcome === true) {
          checkBoxUp([[i, startingColumn - 1], [i, startingColumn]], true);
        }
        return outcome;
        // return checkBoxUp([[i, startingColumn - 1], [i, startingColumn]]);
      }

      if (board[i][startingColumn] === '#') {
        // console.log('up doesnt work');
        return false;
      }
    }
  }

  // check down
  if (move === 'v') {
    for (let i = startingRow; i < board.length; i += 1) {
      if (board[i][startingColumn] === '.') {
        // console.log('down works');
        return [i, startingColumn];
      }

      if (board[i][startingColumn] === '[') {
        const outcome = checkBoxDown([[i, startingColumn], [i, startingColumn + 1]]);
        if (outcome === true) {
          checkBoxDown([[i, startingColumn], [i, startingColumn + 1]], true);
        }
        return outcome;
      }

      if (board[i][startingColumn] === ']') {
        const outcome = checkBoxDown([[i, startingColumn - 1], [i, startingColumn]]);
        if (outcome === true) {
          checkBoxDown([[i, startingColumn - 1], [i, startingColumn]], true);
        }
        return outcome;
      }

      if (board[i][startingColumn] === '#') {
        // console.log('down doesnt work');
        return false;
      }
    }
  }

  // check left
  if (move === '<') {
    for (let i = startingColumn; i >= 0; i -= 1) {
      if (board[startingRow][i] === '.') {
        // console.log('left works');
        return [startingRow, i];
      }

      if (board[startingRow][i] === '#') {
        // console.log('left doesnt work');
        return false;
      }
    }
  }

  // check right
  if (move === '>') {
    for (let i = startingColumn; i < board[0].length; i += 1) {
      if (board[startingRow][i] === '.') {
        // console.log('right works');
        return [startingRow, i];
      }

      if (board[startingRow][i] === '#') {
        // console.log('right doesnt work');
        return false;
      }
    }
  }
}





function makeNewMove(move, openSpot) {
  const startingRow = robotSpot[0];
  const startingColumn = robotSpot[1];

  const openRow = openSpot[0];
  const openColumn = openSpot[1];

  // move up
  if (move === '^') {
    // console.log('moving up');
    // console.log(`open row: ${openRow}`);
    // console.log(`open column: ${openColumn}`);
    // for (let i = openRow; i < startingRow; i += 1) {
    //   const tempVal = board[i + 1][startingColumn];
    //   board[i][startingColumn] = tempVal;
    //   board[i + 1][startingColumn] = '.';

    //   if (tempVal === '@') {
    //     robotSpot = [i, startingColumn];
    //   }
    // }
    
    board[startingRow - 1][startingColumn] = '@';
    board[startingRow][startingColumn] = '.';
    robotSpot = [startingRow - 1, startingColumn];
  }

  // move down
  if (move === 'v') {
    // for (let i = openRow; i > startingRow; i -= 1) {
    //   const tempVal = board[i - 1][startingColumn];
    //   board[i][startingColumn] = tempVal;
    //   board[i - 1][startingColumn] = '.';

    //   if (tempVal === '@') {
    //     robotSpot = [i, startingColumn];
    //   }
    // }

    board[startingRow + 1][startingColumn] = '@';
    board[startingRow][startingColumn] = '.';
    robotSpot = [startingRow + 1, startingColumn];
  }

  // move left
  if (move === '<') {
    // console.log('moving left');
    // console.log(`open row: ${openRow}`);
    // console.log(`open column: ${openColumn}`);
    // console.log(`starting row: ${startingRow}`);
    // console.log(`starting column: ${startingColumn}`);
    for (let i = openColumn; i < startingColumn; i += 1) {
      const tempVal = board[startingRow][i + 1];
      board[startingRow][i] = tempVal;
      board[startingRow][i + 1] = '.';

      if (tempVal === '@') {
        robotSpot = [startingRow, i];
      }
    }
  }

  // move right
  if (move === '>') {
    // console.log('moving right');
    // console.log(`open row: ${openRow}`);
    // console.log(`open column: ${openColumn}`);
    for (let i = openColumn; i > startingColumn; i -= 1) {
      const tempVal = board[startingRow][i - 1];
      board[startingRow][i] = tempVal;
      board[startingRow][i - 1] = '.';

      if (tempVal === '@') {
        robotSpot = [startingRow, i];
      }
    }
  }
}


// console.log(`move length: ${move.length}`);
for (let i = 0; i < move.length; i += 1) {
  const moveHere = checkNewMove(move[i]);
  // if (blockedMove) {
  //   if (i < 3945) {
  //     blockedMove = false;
  //   } else {
  //     console.log(`blocked at ${i}`);
  //     break;
  //   }
  // }

  if (moveHere) {
    // console.log('moving');
    makeNewMove(move[i], moveHere);
  }
}

// console.log(`result? ${result}`);
let newBoxCount = 0;
for (let i = 0; i < board.length; i += 1) {
  for (let j = 0; j < board[i].length; j += 1) {
    if (board[i][j] === '[') {
      newBoxCount += 1;
      result += (100 * i) + j;

      // const rowDistanceOne = i;
      // const rowDistanceTwo = (board.length - 1) - i;

      // const columnDistanceOne = j;
      // const columnDistanceTwo = (board[0].length - 1) - (j + 1);

      // result += (100 * (Math.min(rowDistanceOne, rowDistanceTwo))) + (Math.min(columnDistanceOne, columnDistanceTwo));
    }
  }
}

console.log(`Result part two: ${result}`);
// console.log(board[24][48]);
// console.log(`original box: ${boxCount}, final box: ${newBoxCount}`);
// for (let i = 0; i < board.length; i += 1) {
//   console.log(board[i].join(''));
// }
