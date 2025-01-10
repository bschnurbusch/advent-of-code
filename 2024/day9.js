const input = '';

// const input = '2333133121414131402'

let result = 0;
let trackFiles = [];

for (let i = 0; i < input.length; i += 1) {
  if (i % 2 === 0) {
    const fileCount = input[i];
    trackFiles.push(parseInt(fileCount, 10));
  }
}

let countingPosition = 0;
for (let i = 0; i < input.length; i += 1) {
  const sizeToCountString = input[i];
  let sizeToCount = parseInt(sizeToCountString, 10);

  if (i % 2 === 0) {
    while (sizeToCount > 0) {
      for (let j = 0; j < trackFiles.length; j += 1) {
        if (trackFiles[j] > 0) {
          result += j * countingPosition;
          trackFiles[j] -= 1;
          break;
        }
      }
      countingPosition += 1;
      sizeToCount -= 1;
    }
  } else {
    while (sizeToCount > 0) {
      for (let j = trackFiles.length - 1; j >= 0; j -= 1) {
        if (trackFiles[j] > 0) {
          result += j * countingPosition;
          trackFiles[j] -= 1;
          break;
        }
      }
      countingPosition += 1;
      sizeToCount -= 1;
    }
  }
}

// console.log(trackFiles);
console.log(`Result: ${result}`);

// PART TWO

result = 0;
trackFiles = [];
countingPosition = 0;

for (let i = 0; i < input.length; i += 1) {
  if (i % 2 === 0) {
    const fileCount = input[i];
    trackFiles.push(parseInt(fileCount, 10));
  }
}

// FIRST ATTEMPT AT PART TWO HERE VV

// for (let i = 0; i < input.length; i += 1) {
//   const sizeToCountString = input[i];
//   let sizeToCount = parseInt(sizeToCountString, 10);

//   if (i % 2 === 0) {
//     const countIndex = i / 2;
//     while (sizeToCount > 0) {
//       if (trackFiles[countIndex] > 0) {
//         result += countIndex * countingPosition;
//         trackFiles[countIndex] -= 1;
//       }
//       countingPosition += 1;
//       sizeToCount -= 1;
//     }
//   } else {
//     let countThis = false;
//     let countIndex;
//     let freeSpaceString = input[i];
//     let freeSpace = parseInt(freeSpaceString, 10);

//     while (sizeToCount > 0) {
//       for (let j = trackFiles.length - 1; j >= 0; j -= 1) {
//         if (trackFiles[j] <= freeSpace && trackFiles[j] > 0) {
//           countThis = true;
//           countIndex = j;
//           // console.log(`moving index: ${j}`);
//           break;
//         }
//       }
//       if (countThis) {
//         result += countIndex * countingPosition;
//         trackFiles[countIndex] -= 1;
//         freeSpace -= 1;
//         if (trackFiles[countIndex] === 0) {
//           countThis = false;
//         }
//         countingPosition += 1;
//         sizeToCount -= 1;
//       } else {
//         countingPosition += sizeToCount;
//         break;
//       }
//     }
//   }
// }

// FIRST ATTEMPT AT PART TWO ABOVE ^^


// slightly less complicated version, very small adjustments from part 1 vv
for (let i = 0; i < input.length; i += 1) {
  const sizeToCountString = input[i];
  let sizeToCount = parseInt(sizeToCountString, 10);

  if (i % 2 === 0) {
    const countIndex = i / 2;
    while (sizeToCount > 0) {
      if (trackFiles[countIndex] > 0) {
        result += countIndex * countingPosition;
        trackFiles[countIndex] -= 1;
      }
      countingPosition += 1;
      sizeToCount -= 1;
    }
  } else {
    let freeSpaceString = input[i];
    let freeSpace = parseInt(freeSpaceString, 10);
    while (sizeToCount > 0) {
      for (let j = trackFiles.length - 1; j >= 0; j -= 1) {
        if (trackFiles[j] > 0 && trackFiles[j] <= freeSpace) {
          result += j * countingPosition;
          trackFiles[j] -= 1;
          freeSpace -= 1;
          break;
        }
      }
      countingPosition += 1;
      sizeToCount -= 1;
    }
  }
}

// console.log(trackFiles);
console.log(`Result part two: ${result}`);