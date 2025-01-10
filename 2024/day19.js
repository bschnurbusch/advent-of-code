// const towelsInput = '';

// const patterns = [
// ];

// example
const towelsInput = 'r, wr, b, g, bwu, rb, gb, br';

const patterns = [
  'brwrr',
  'bggr',
  'gbbr',
  'rrbgbr',
  'ubwu',
  'bwurrg',
  'brgr',
  'bbrgwb',
];

const towels = towelsInput.split(', ');
console.log(`towels: ${towels.length}`);
console.log(`patterns: ${patterns.length}`);

let result = 0;
let foundMatch = false;
let goodPatterns = [];
let attemptedPatterns = [];
let towelCount = 0;

function sortTowels(a, b) {
  return b.length - a.length;
}

towels.sort(sortTowels);
// console.log(towels);

function checkPattern(pattern) {
  const patternLength = pattern.length;
  for (let i = 0; i < towels.length; i += 1) {
    const towelLength = towels[i].length;
    // console.log(`towel: ${towels[i]}, length: ${towelLength}`);
    if (patternLength < towelLength) {
      // console.log('pattern too small for towel');
      continue;
    }

    const patternPart = pattern.slice(0, towelLength);
    if (patternPart === towels[i]) {
      console.log(`found match: ${patternPart}, ${towels[i]}`);
      // console.log('---------------');

      if (patternLength === towelLength) {
        foundMatch = true;
        towelCount += 1;
        // console.log('made it to the end once');
        // return;
      } else if (!attemptedPatterns.includes(pattern.slice(towelLength))) {
        attemptedPatterns.push(pattern.slice(towelLength));
        // towelCount += 1;
        checkPattern(pattern.slice(towelLength));
      }
      // checkPattern(pattern.slice(towelLength));
    }
  }
}

// let fullPattern = 'brwrr';
// checkPattern('brwrr');

// let fullPattern = 'gbbr';
// checkPattern('gbbr');

// checkPattern('rrbgbr');

// checkPattern('brgr');

// checkPattern('bwwgwrrururwwubrrgbuwwrrbguwguwbgrggrgurrgbrrubbwuwwgwwbwb');
// console.log(`attempted patterns: ${attemptedPatterns}`);
// console.log(`attempted patterns length: ${attemptedPatterns.length}`);
// console.log(`found match? ${foundMatch}`);

// for (let i = 0; i < patterns.length; i += 1) {
//   console.log('checking pattern');
//   foundMatch = false;
//   goodPatterns = [];
//   attemptedPatterns = [];
//   // console.log(patterns[i]);
//   checkPattern(patterns[i]);
//   if (foundMatch === true) {
//     result += 1;
//   }
// }

console.log(`Result: ${result}`);


// PART TWO

result = 0;
foundMatch = false;
goodPatterns = [];
attemptedPatterns = [];
towelCount = 0;
let repeats = [];

let newTest = {};

// function checkNewPattern(pattern) {
//   const patternLength = pattern.length;
//   for (let i = 0; i < towels.length; i += 1) {
//     const towelLength = towels[i].length;
//     // console.log(`towel: ${towels[i]}, length: ${towelLength}`);
//     if (patternLength < towelLength) {
//       // console.log('pattern too small for towel');
//       continue;
//     }

//     const patternPart = pattern.slice(0, towelLength);
//     if (patternPart === towels[i]) {
//       console.log(`found match: ${patternPart}, ${towels[i]}`);

//       if (patternLength === towelLength) {
//         foundMatch = true;
//         towelCount += 1;
//         // console.log('made it to the end once');
//         // return true;
//       } else {
//         remainingPattern = pattern.slice(towelLength);
//         let towelsToCheck = [];
//         for (let j = 0; j < towels.length; j += 1) {
//           const newTowelLength = towels[j].length;
//           const newPatternPart = pattern.slice(towelLength, newTowelLength);

//           if (newPatternPart === towels[j]) {
//           }
//         }
        
//         for (let j = 0; j < Object.keys(attemptedPatterns).length; j += 1) {
//           if (!attemptedPatterns[j].includes(newTowel)) {
//             checkNewPattern(remainingPattern);
//           }
//         }
//       }
      
      
      
      
//       else if (!attemptedPatterns.includes(pattern.slice(towelLength))) {
//         attemptedPatterns.push(pattern.slice(towelLength));
//         // towelCount += 1;
//         checkNewPattern(pattern.slice(towelLength));
//       }
//       // checkPattern(pattern.slice(towelLength));
//     }
//   }
// }




// let attempts = {};

// for (let i = 0; i < towels.length; i += 1) {
//   attempts[towels[i]] = [];
// }

// function checkNewPattern(pattern, towel) {
//   const towelLength = towel.length;
//   const patternPart = pattern.slice(0, towelLength);
//   const patternLength = pattern.length;

//   if (patternPart === towel) {
//     if (towelLength === patternLength) {
//       towelCount += 1;
//     } else {
//       const remainingPattern = pattern.slice(towelLength);

//       for (let i = 0; i < towels.length; i += 1) {
//         if (!attempts[towels[i]].includes(remainingPattern)) {
//           attempts[towels[i]].push(remainingPattern);
//           checkNewPattern(remainingPattern, towels[i]);
//         }
//       }
//     }
//   }
// }

// for (let i = 0; i < 1; i += 1) {
//   attempts = {};
//   for (let k = 0; k < towels.length; k += 1) {
//     attempts[towels[k]] = [];
//   }
//   for (let j = 0; j < towels.length; j += 1) {
//     checkNewPattern(patterns[i], towels[j]);
//   }
//   // console.log(`attempts: ${JSON.stringify(attempts)}`);
// }

// function checkNewPattern(pattern, startingVal, test) {
//   let matches = startingVal;
//   const patternLength = pattern.length;
//   for (let i = 0; i < towels.length; i += 1) {
//     const towelLength = towels[i].length;
//     // console.log(`towel: ${towels[i]}, length: ${towelLength}`);
//     if (patternLength < towelLength) {
//       // console.log('pattern too small for towel');
//       continue;
//     }

//     const patternPart = pattern.slice(0, towelLength);
//     if (patternPart === towels[i]) {
//       // console.log(`found match: ${patternPart}, ${towels[i]}`);
//       // console.log('---------------');

//       if (patternLength === towelLength) {
//         foundMatch = true;
//         // towelCount += startingVal;
//         towelCount += matches;
//         // newTest[pattern] = startingVal;
//         // console.log('made it to the end once');
//         console.log(`made it to the end with: ${patternPart}, starting val: ${startingVal}, starting pattern: ${pattern}, matches? ${matches}`);
//         // return;
//       } else if (!attemptedPatterns.includes(pattern.slice(towelLength))) {
//         attemptedPatterns.push(pattern.slice(towelLength));
//         matches += 1;
//         console.log(`checking new pattern: ${pattern.slice(towelLength)}, starting val: ${startingVal}, starting pattern: ${pattern}, matches? ${matches}`);
//         // towelCount += 1;
//         checkNewPattern(pattern.slice(towelLength), startingVal + 1, matches);
//       } else {
//         console.log(`already hit: ${pattern.slice(towelLength)}, starting val: ${startingVal}, starting pattern: ${pattern}, matches? ${matches}`);
//         // towelCount += 1;
//         // towelCount += newTest[pattern.slice(towelLength)];
//         // repeats.push(pattern.slice(towelLength));
//       }
//       // checkNewPattern(pattern.slice(towelLength));
//     }
//   }
// }

let otherPatterns = {};

function checkNewPattern(pattern) {
  let otherPaths = 0;
  const patternLength = pattern.length;

  // loop through towels to see if any match the front of the pattern
  for (let i = 0; i < towels.length; i += 1) {
    const towelLength = towels[i].length;
    if (patternLength < towelLength) {
      continue;
    }

    const patternPart = pattern.slice(0, towelLength);
    // found a towel that fits in the front of the pattern
    if (patternPart === towels[i]) {

      if (patternLength === towelLength) {
        // found a towel that finishes the pattern
        console.log(`setting ${patternPart} to one, ? ${patternPart === pattern}`);
        otherPatterns[patternPart] = 1;
        return 1;
      } else if (Object.keys(otherPatterns).includes(pattern.slice(towelLength) + patternPart)) {
        // found a towel that leaves a remainder pattern to check for, already know how many paths the remainder pattern produces
        // console.log(`returning: ${otherPatterns[pattern.slice(towelLength)]}`);
        return otherPatterns[pattern.slice(towelLength) + patternPart];
      } else {
        // found a towel that leaves a remainder pattern to check for, havent calculated how many paths the remainder pattern produces
        otherPaths = checkNewPattern(pattern.slice(towelLength)) + checkNewPattern(patternPart);
        otherPatterns[pattern.slice(towelLength) + patternPart] = otherPaths;
        return otherPaths;
      }

    }
  }
}

// checkNewPattern('brgr', 0, 0);

towelCount = checkNewPattern('rrbgbr');
// checkNewPattern('rrbgbrrrbgbrrrbgbr');

// towelCount = checkNewPattern('gbbr');

// checkNewPattern('brwrr', 0, 0);

// checkNewPattern('bwwgwrrururwwubrrgbuwwrrbguwguwbgrggrgurrgbrrubbwuwwgwwbwb');


// for (let i = 0; i < patterns.length; i += 1) {
//   console.log('checking pattern');
//   // console.log(`checking pattern: ${patterns[i]}`);
//   foundMatch = false;
//   goodPatterns = [];
//   attemptedPatterns = [];
//   // console.log(patterns[i]);
//   checkNewPattern(patterns[i]);
// }

// console.log(`attempted patterns: ${attemptedPatterns}`);
// console.log(`attempted patterns length: ${attemptedPatterns.length}`);

console.log(`other patterns: ${JSON.stringify(otherPatterns)}`);
console.log(`other patterns length: ${Object.keys(otherPatterns).length}`);

// console.log(`repeats: ${repeats}`);
// console.log(`repeats length: ${repeats.length}`);



console.log(`Result part two: ${towelCount}`);