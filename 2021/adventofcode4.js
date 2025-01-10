const bingoInput = [];

const bingoBoards = [];
let hasWon = [];
let hasLastWon = false;
let rowOne = [];
let rowTwo = [];
let rowThree = [];
let rowFour = [];
let rowFive = [];
let lastNumberCalled = 100;
let lastIndex = 0;

console.log(bingoBoards[120]);
console.log(bingoBoards[121]);
console.log(bingoBoards[122]);
console.log(bingoBoards[123]);
console.log(bingoBoards[124]);

// remove double spaces
for (let index = 0; index < bingoBoards.length; index += 1) {
  bingoBoards[index] = bingoBoards[index].trim();
  bingoBoards[index] = bingoBoards[index].replace(/\s\s/, ' ');
}

for (let index = 0; index < bingoBoards.length; index += 1) {
  bingoBoards[index] = bingoBoards[index].split(' ');
}

// parse bingo number call outs
for (let index = 0; index < bingoInput.length; index += 1) {
  // parse through each row of bingo boards
  for (let boardIndex = 0; boardIndex < bingoBoards.length; boardIndex += 1) {
    // parse through each element from that row
    for (let boardRowIndex = 0; boardRowIndex < bingoBoards[boardIndex].length; boardRowIndex += 1) {
      if (bingoBoards[boardIndex][boardRowIndex] == bingoInput[index]) {
        bingoBoards[boardIndex][boardRowIndex] = 100;
      }
    }
  }

  // after calling out 5 numbers, start checking for winners
  // if a board has a 100 in it
  // if the first row has a 100 in it, check if it has 5 100s
  // if it doesnt have 5 100s, check columns
  // after first row, dont need to check columns
  if (index >= 4) {
    // parse through each row of bingo boards
    for (let boardIndex = 0; boardIndex < bingoBoards.length; boardIndex += 5) {
      // win if first row is all 100s
      if (bingoBoards[boardIndex][0] == 100 && bingoBoards[boardIndex][1] == 100 && bingoBoards[boardIndex][2] == 100 && bingoBoards[boardIndex][3] == 100 && bingoBoards[boardIndex][4] == 100) {
        // console.log(`Winning board with index ${boardIndex}`);
        // console.log(`Last number called: ${bingoInput[index]}`);
        // console.log('Winning spaces:');
        // console.log(`${bingoBoards[boardIndex]}`);
        // console.log(`${bingoBoards[boardIndex + 1]}`);
        // console.log(`${bingoBoards[boardIndex + 2]}`);
        // console.log(`${bingoBoards[boardIndex + 3]}`);
        // console.log(`${bingoBoards[boardIndex + 4]}`);

        rowOne = bingoBoards[boardIndex];
        rowTwo = bingoBoards[boardIndex + 1];
        rowThree = bingoBoards[boardIndex + 2];
        rowFour = bingoBoards[boardIndex + 3];
        rowFive = bingoBoards[boardIndex + 4];
        lastNumberCalled = bingoInput[index];
        lastIndex = boardIndex;
        if (!hasWon.includes(boardIndex)) {
          hasWon.push(boardIndex);
          if (hasWon.length >= 100) {
            console.log('Last board to win:');
            console.log(`${rowOne}`);
            console.log(`${rowTwo}`);
            console.log(`${rowThree}`);
            console.log(`${rowFour}`);
            console.log(`${rowFive}`);
            console.log(`Last number called: ${lastNumberCalled}`);
            console.log(`Last board index: ${lastIndex}`);
            hasLastWon = true;
          }
        }
      }

      // check columns
      for (let boardRowIndex = 0; boardRowIndex < bingoBoards[boardIndex].length; boardRowIndex += 1) {
        if (bingoBoards[boardIndex][boardRowIndex] == 100) {
          if (bingoBoards[boardIndex + 1][boardRowIndex] == 100 && bingoBoards[boardIndex + 2][boardRowIndex] == 100 && bingoBoards[boardIndex + 3][boardRowIndex] == 100 && bingoBoards[boardIndex + 4][boardRowIndex] == 100) {
            // console.log(`Winning board with index ${boardIndex}`);
            // console.log(`Last number called: ${bingoInput[index]}`);
            // console.log('Winning spaces:');
            // console.log(`${bingoBoards[boardIndex]}`);
            // console.log(`${bingoBoards[boardIndex + 1]}`);
            // console.log(`${bingoBoards[boardIndex + 2]}`);
            // console.log(`${bingoBoards[boardIndex + 3]}`);
            // console.log(`${bingoBoards[boardIndex + 4]}`);

            rowOne = bingoBoards[boardIndex];
            rowTwo = bingoBoards[boardIndex + 1];
            rowThree = bingoBoards[boardIndex + 2];
            rowFour = bingoBoards[boardIndex + 3];
            rowFive = bingoBoards[boardIndex + 4];
            lastNumberCalled = bingoInput[index];
            lastIndex = boardIndex;
            if (!hasWon.includes(boardIndex)) {
              hasWon.push(boardIndex);
              if (hasWon.length >= 100) {
                console.log('Last board to win:');
                console.log(`${rowOne}`);
                console.log(`${rowTwo}`);
                console.log(`${rowThree}`);
                console.log(`${rowFour}`);
                console.log(`${rowFive}`);
                console.log(`Last number called: ${lastNumberCalled}`);
                console.log(`Last board index: ${lastIndex}`);
                hasLastWon = true;
              }
            }
          }
        }
      }

      // check remaining rows
      const allOneHundred = (currentValue) => currentValue == 100;
      if (bingoBoards[boardIndex + 1].every(allOneHundred) || bingoBoards[boardIndex + 2].every(allOneHundred) || bingoBoards[boardIndex + 3].every(allOneHundred) || bingoBoards[boardIndex + 4].every(allOneHundred)) {
        // console.log(`Winning board with index ${boardIndex}`);
        // console.log(`Last number called: ${bingoInput[index]}`);
        // console.log('Winning spaces:');
        // console.log(`${bingoBoards[boardIndex]}`);
        // console.log(`${bingoBoards[boardIndex + 1]}`);
        // console.log(`${bingoBoards[boardIndex + 2]}`);
        // console.log(`${bingoBoards[boardIndex + 3]}`);
        // console.log(`${bingoBoards[boardIndex + 4]}`);

        rowOne = bingoBoards[boardIndex];
        rowTwo = bingoBoards[boardIndex + 1];
        rowThree = bingoBoards[boardIndex + 2];
        rowFour = bingoBoards[boardIndex + 3];
        rowFive = bingoBoards[boardIndex + 4];
        lastNumberCalled = bingoInput[index];
        lastIndex = boardIndex;
        if (!hasWon.includes(boardIndex)) {
          hasWon.push(boardIndex);
          if (hasWon.length >= 100) {
            console.log('Last board to win:');
            console.log(`${rowOne}`);
            console.log(`${rowTwo}`);
            console.log(`${rowThree}`);
            console.log(`${rowFour}`);
            console.log(`${rowFive}`);
            console.log(`Last number called: ${lastNumberCalled}`);
            console.log(`Last board index: ${lastIndex}`);
            hasLastWon = true;
          }
        }
      }
    }

    // for (let spliceIndex = 0; spliceIndex < hasWon.length; spliceIndex += 1) {
    //   bingoBoards.splice((hasWon[spliceIndex] - (5 * spliceIndex)), 5);
    // }
  }

  // if (bingoBoards.length < 1) {
  //   console.log('Last board to win:');
  //   console.log(`${rowOne}`);
  //   console.log(`${rowTwo}`);
  //   console.log(`${rowThree}`);
  //   console.log(`${rowFour}`);
  //   console.log(`${rowFive}`);
  //   console.log(`Last number called: ${lastNumberCalled}`);
  //   // console.log(`Last board index: ${lastIndex}`);
  //   break;
  // }
  if (hasLastWon == true) {
    break;
  }
}
