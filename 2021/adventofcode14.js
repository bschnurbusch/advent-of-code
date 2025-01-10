const input = [];

const inputObject = {}

const pairs = {}

// const input = [
// ];

// const inputObject = {
// }

// const pairs = {
// }

let result = {
  'A': 0,
  'B': 0,
  'C': 0,
  'D': 0,
  'E': 0,
  'F': 0,
  'G': 0,
  'H': 0,
  'I': 0,
  'J': 0,
  'K': 0,
  'L': 0,
  'M': 0,
  'N': 0,
  'O': 0,
  'P': 0,
  'Q': 0,
  'R': 0,
  'S': 0,
  'T': 0,
  'U': 0,
  'V': 0,
  'W': 0,
  'X': 0,
  'Y': 0,
  'Z': 0
}


for (let pairIndex = 0; pairIndex < (input[0].length - 1); pairIndex += 1) {
  let pair = input[0][pairIndex].concat(input[0][pairIndex + 1]);
  pairs[pair] += 1;
}


for (let steps = 0; steps < 40; steps += 1) {
  // let valuesToAdd = {
  // }

  let valuesToAdd = {
  }

  for (const property in pairs) {
    let splitLetters = property.split('');
    let replacement = inputObject[property];

    let firstPairToAdd = splitLetters[0].concat(replacement);
    let secondPairToAdd = replacement.concat(splitLetters[1]);

    valuesToAdd[firstPairToAdd] += pairs[property];
    valuesToAdd[secondPairToAdd] += pairs[property];
  }

  for (const property in pairs) {
    pairs[property] = valuesToAdd[property];
  }
}

console.log(pairs);

let lastLetter = input[0][input[0].length - 1];
// console.log(typeof lastLetter);

for (const property in pairs) {
  if (pairs[property] > 0) {
    let splitLetters = property.split('');
  
    if (splitLetters[0] != lastLetter) {
      result[splitLetters[0]] += pairs[property];
    }
    if (splitLetters[1] == lastLetter) {
      result[splitLetters[1]] += pairs[property];
    }
  }
}

console.log(result);
