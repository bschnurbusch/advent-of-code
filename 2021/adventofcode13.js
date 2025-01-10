const input = [];

// fold along x=655
// fold along y=447
// fold along x=327
// fold along y=223
// fold along x=163
// fold along y=111
// fold along x=81
// fold along y=55
// fold along x=40
// fold along y=27
// fold along y=13
// fold along y=6

// const input = [
// ];

// fold along y=7
// fold along x=5

let markedArray = new Array(893);
for (let index = 0; index < markedArray.length; index += 1) {
  markedArray[index] = new Array(1310);
}

// FOR TEST INPUT
// let markedArray = new Array(15);
// for (let index = 0; index < markedArray.length; index += 1) {
//   markedArray[index] = new Array(11);
// }

let maxX = 0;
let maxY = 0;
let result = 0;


for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
  input[rowIndex] = input[rowIndex].split(',');
  input[rowIndex][0] = parseInt(input[rowIndex][0]);
  input[rowIndex][1] = parseInt(input[rowIndex][1]);
  if (input[rowIndex][0] > maxX) {
    maxX = input[rowIndex][0];
  }
  if (input[rowIndex][1] > maxY) {
    maxY = input[rowIndex][1];
  }

  markedArray[input[rowIndex][1]][input[rowIndex][0]] = 'x';
}

for (let rowIndex = 0; rowIndex < markedArray.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < markedArray[rowIndex].length; columnIndex += 1) {
    if (markedArray[rowIndex][columnIndex] == 'x') {
      result += 1;
    }
  }
}

console.log(result);

result = 0;

// FOR TEST INPUT
// for (let rowIndex = 7; rowIndex < markedArray.length; rowIndex += 1) {
//   for (let columnIndex = 0; columnIndex < markedArray[rowIndex].length; columnIndex += 1) {
//     if (markedArray[rowIndex][columnIndex] == 'x') {
//       // console.log('flipped one number');
//       let yFlip = 7 - (rowIndex - 7);

//       // console.log(yFlip);
//       // console.log(`flipping ${columnIndex}, ${rowIndex}`);
//       // console.log(`to ${columnIndex}, ${yFlip}`);
      
//       markedArray[rowIndex][columnIndex] = 0;
//       markedArray[yFlip][columnIndex] = 'x';
//     }
//   }
// }
// markedArray.splice(7, markedArray.length);

// for (let rowIndex = 0; rowIndex < markedArray.length; rowIndex += 1) {
//   for (let columnIndex = 0; columnIndex < 5; columnIndex += 1) {
//     if (markedArray[rowIndex][columnIndex] == 'x') {
//       // console.log('flipped one number');
//       let xFlip = 5 + (5 - columnIndex);
//       // console.log(xFlip);
//       // console.log(`flipping ${columnIndex}, ${rowIndex}`);
//       // console.log(`to ${xFlip}, ${rowIndex}`);
      
//       markedArray[rowIndex][columnIndex] = 0;
//       markedArray[rowIndex][xFlip] = 'x';
//     }
//   }
// }
// for (let rowIndex = 0; rowIndex < markedArray.length; rowIndex += 1) {
//   markedArray[rowIndex].splice(0, 6);
// }

for (let rowIndex = 0; rowIndex < markedArray.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < 655; columnIndex += 1) {
    if (markedArray[rowIndex][columnIndex] == 'x') {
      // console.log('flipped one number');
      let xFlip = 655 + (655 - columnIndex);
      // console.log(xFlip);
      // console.log(`flipping ${columnIndex}, ${rowIndex}`);
      // console.log(`to ${xFlip}, ${rowIndex}`);
      
      markedArray[rowIndex][columnIndex] = 0;
      markedArray[rowIndex][xFlip] = 'x';
    }
  }
}
for (let rowIndex = 0; rowIndex < markedArray.length; rowIndex += 1) {
  markedArray[rowIndex].splice(0, 656);
}

// flip y=447
for (let rowIndex = 447; rowIndex < markedArray.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < markedArray[rowIndex].length; columnIndex += 1) {
    if (markedArray[rowIndex][columnIndex] == 'x') {
      // console.log('flipped one number');
      let yFlip = 447 - (rowIndex - 447);

      // console.log(yFlip);
      // console.log(`flipping ${columnIndex}, ${rowIndex}`);
      // console.log(`to ${columnIndex}, ${yFlip}`);
      
      markedArray[rowIndex][columnIndex] = 0;
      markedArray[yFlip][columnIndex] = 'x';
    }
  }
}
markedArray.splice(447, markedArray.length);

for (let rowIndex = 0; rowIndex < markedArray.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < 327; columnIndex += 1) {
    if (markedArray[rowIndex][columnIndex] == 'x') {
      // console.log('flipped one number');
      let xFlip = 327 + (327 - columnIndex);
      // console.log(xFlip);
      // console.log(`flipping ${columnIndex}, ${rowIndex}`);
      // console.log(`to ${xFlip}, ${rowIndex}`);
      
      markedArray[rowIndex][columnIndex] = 0;
      markedArray[rowIndex][xFlip] = 'x';
    }
  }
}
for (let rowIndex = 0; rowIndex < markedArray.length; rowIndex += 1) {
  markedArray[rowIndex].splice(0, 328);
}

// flip y=223
for (let rowIndex = 223; rowIndex < markedArray.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < markedArray[rowIndex].length; columnIndex += 1) {
    if (markedArray[rowIndex][columnIndex] == 'x') {
      // console.log('flipped one number');
      let yFlip = 223 - (rowIndex - 223);

      // console.log(yFlip);
      // console.log(`flipping ${columnIndex}, ${rowIndex}`);
      // console.log(`to ${columnIndex}, ${yFlip}`);
      
      markedArray[rowIndex][columnIndex] = 0;
      markedArray[yFlip][columnIndex] = 'x';
    }
  }
}
markedArray.splice(223, markedArray.length);

for (let rowIndex = 0; rowIndex < markedArray.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < 163; columnIndex += 1) {
    if (markedArray[rowIndex][columnIndex] == 'x') {
      // console.log('flipped one number');
      let xFlip = 163 + (163 - columnIndex);
      // console.log(xFlip);
      // console.log(`flipping ${columnIndex}, ${rowIndex}`);
      // console.log(`to ${xFlip}, ${rowIndex}`);
      
      markedArray[rowIndex][columnIndex] = 0;
      markedArray[rowIndex][xFlip] = 'x';
    }
  }
}
for (let rowIndex = 0; rowIndex < markedArray.length; rowIndex += 1) {
  markedArray[rowIndex].splice(0, 164);
}

// flip y=111
for (let rowIndex = 111; rowIndex < markedArray.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < markedArray[rowIndex].length; columnIndex += 1) {
    if (markedArray[rowIndex][columnIndex] == 'x') {
      // console.log('flipped one number');
      let yFlip = 111 - (rowIndex - 111);

      // console.log(yFlip);
      // console.log(`flipping ${columnIndex}, ${rowIndex}`);
      // console.log(`to ${columnIndex}, ${yFlip}`);
      
      markedArray[rowIndex][columnIndex] = 0;
      markedArray[yFlip][columnIndex] = 'x';
    }
  }
}
markedArray.splice(111, markedArray.length);

for (let rowIndex = 0; rowIndex < markedArray.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < 81; columnIndex += 1) {
    if (markedArray[rowIndex][columnIndex] == 'x') {
      // console.log('flipped one number');
      let xFlip = 81 + (81 - columnIndex);
      // console.log(xFlip);
      // console.log(`flipping ${columnIndex}, ${rowIndex}`);
      // console.log(`to ${xFlip}, ${rowIndex}`);
      
      markedArray[rowIndex][columnIndex] = 0;
      markedArray[rowIndex][xFlip] = 'x';
    }
  }
}
for (let rowIndex = 0; rowIndex < markedArray.length; rowIndex += 1) {
  markedArray[rowIndex].splice(0, 82);
}

// flip y=55
for (let rowIndex = 55; rowIndex < markedArray.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < markedArray[rowIndex].length; columnIndex += 1) {
    if (markedArray[rowIndex][columnIndex] == 'x') {
      // console.log('flipped one number');
      let yFlip = 55 - (rowIndex - 55);

      // console.log(yFlip);
      // console.log(`flipping ${columnIndex}, ${rowIndex}`);
      // console.log(`to ${columnIndex}, ${yFlip}`);
      
      markedArray[rowIndex][columnIndex] = 0;
      markedArray[yFlip][columnIndex] = 'x';
    }
  }
}
markedArray.splice(55, markedArray.length);

for (let rowIndex = 0; rowIndex < markedArray.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < 40; columnIndex += 1) {
    if (markedArray[rowIndex][columnIndex] == 'x') {
      // console.log('flipped one number');
      let xFlip = 40 + (40 - columnIndex);
      // console.log(xFlip);
      // console.log(`flipping ${columnIndex}, ${rowIndex}`);
      // console.log(`to ${xFlip}, ${rowIndex}`);
      
      markedArray[rowIndex][columnIndex] = 0;
      markedArray[rowIndex][xFlip] = 'x';
    }
  }
}
for (let rowIndex = 0; rowIndex < markedArray.length; rowIndex += 1) {
  markedArray[rowIndex].splice(0, 41);
}

// flip y=27
for (let rowIndex = 27; rowIndex < markedArray.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < markedArray[rowIndex].length; columnIndex += 1) {
    if (markedArray[rowIndex][columnIndex] == 'x') {
      // console.log('flipped one number');
      let yFlip = 27 - (rowIndex - 27);

      // console.log(yFlip);
      // console.log(`flipping ${columnIndex}, ${rowIndex}`);
      // console.log(`to ${columnIndex}, ${yFlip}`);
      
      markedArray[rowIndex][columnIndex] = 0;
      markedArray[yFlip][columnIndex] = 'x';
    }
  }
}
markedArray.splice(27, markedArray.length);

// flip y=13
for (let rowIndex = 13; rowIndex < markedArray.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < markedArray[rowIndex].length; columnIndex += 1) {
    if (markedArray[rowIndex][columnIndex] == 'x') {
      // console.log('flipped one number');
      let yFlip = 13 - (rowIndex - 13);

      // console.log(yFlip);
      // console.log(`flipping ${columnIndex}, ${rowIndex}`);
      // console.log(`to ${columnIndex}, ${yFlip}`);
      
      markedArray[rowIndex][columnIndex] = 0;
      markedArray[yFlip][columnIndex] = 'x';
    }
  }
}
markedArray.splice(13, markedArray.length);

// flip y=6
for (let rowIndex = 6; rowIndex < markedArray.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < markedArray[rowIndex].length; columnIndex += 1) {
    if (markedArray[rowIndex][columnIndex] == 'x') {
      // console.log('flipped one number');
      let yFlip = 6 - (rowIndex - 6);

      // console.log(yFlip);
      // console.log(`flipping ${columnIndex}, ${rowIndex}`);
      // console.log(`to ${columnIndex}, ${yFlip}`);
      
      markedArray[rowIndex][columnIndex] = 0;
      markedArray[yFlip][columnIndex] = 'x';
    }
  }
}
markedArray.splice(6, markedArray.length);

for (let rowIndex = 0; rowIndex < markedArray.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < markedArray[rowIndex].length; columnIndex += 1) {
    if (markedArray[rowIndex][columnIndex] == 'x') {
      result += 1;
    }
  }
}

// console.log(maxX);
// console.log(maxY);

// console.log(markedArray);
console.log(`RESULT: ${result}`);
// console.log(markedArray);

for (let rowIndex = 0; rowIndex < markedArray.length; rowIndex += 1) {
  let rowText = '';
  for (let columnIndex = 0; columnIndex < markedArray[rowIndex].length; columnIndex += 1) {
    let textToAdd = markedArray[rowIndex][columnIndex] == 'x' ? ' ' + markedArray[rowIndex][columnIndex] : ' .';
    rowText += textToAdd;
  }
  console.log(`${rowText}`);
}
