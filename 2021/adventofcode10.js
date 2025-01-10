const input = [];

// const input = [
// '[({(<(())[]>[[{[]{<()<>>',
// '[(()[<>])]({[<{<<[]>>(',
// '{([(<{}[<>[]}>{[]{[(<()>',
// '(((({<>}<{<{<>}{[]{[]{}',
// '[[<[([]))<([[{}[[()]]]',
// '[{[{({}]{}}([{[{{{}}([]',
// '{<[[]]>}<{[{[{[]{()[[[]',
// '[<(<(<(<{}))><([]([]()',
// '<{([([[(<>()){}]>(<<{{',
// '<{([{{}}[<[[[<>{}]]]>[]]',
// ];

for (let index = 0; index < input.length; index += 1) {
  input[index] = input[index].split('');
}
// console.log(input[0]);

let curvyCount = 0;
let squareCount = 0;
let curlyCount = 0;
let arrowCount = 0;

let lefts = [];
let rights = [];
let leftOptions = ['{', '[', '(', '<'];
let rightOptions = ['}', ']', ')', '>'];

let result = 0;
let indexToSplice = [];
let scores = [];
let scorePoints = [')', ']', '}', '>'];

for (let index = 0; index < input.length; index += 1) {
  for (let rowIndex = 0; rowIndex < input[index].length; rowIndex += 1) {
    if (leftOptions.includes(input[index][rowIndex])) {
      rights.push(rightOptions[leftOptions.indexOf(input[index][rowIndex])]);
      // console.log(rights);
    } else if (input[index][rowIndex] == rights[rights.length - 1]) {
      rights.splice(rights.length - 1, 1);
    } else if (input[index][rowIndex] != rights[rights.length - 1]) {
      // if (input[index][rowIndex] == ')') {
      //   result += 3;
      // }
      // if (input[index][rowIndex] == ']') {
      //   result += 57;
      // }
      // if (input[index][rowIndex] == '}') {
      //   result += 1197;
      // }
      // if (input[index][rowIndex] == '>') {
      //   result += 25137;
      // }
      indexToSplice.push(index);
      break;
    }
  }
}
// console.log(`index to splice: ${indexToSplice}`);

// for (let index = 0; index < indexToSplice.length; index += 1) {
//   input.splice(indexToSplice - (1 * index), 1);
// }
// // console.log(input.length);
// console.log(input);
// console.log(result);

for (let index = 0; index < input.length; index += 1) {
  let currentScore = 0;
  rights = [];
  if (!indexToSplice.includes(index)) {
    for (let rowIndex = 0; rowIndex < input[index].length; rowIndex += 1) {
      if (leftOptions.includes(input[index][rowIndex])) {
        rights.push(rightOptions[leftOptions.indexOf(input[index][rowIndex])]);
        // console.log(rights);
      } else if (input[index][rowIndex] == rights[rights.length - 1]) {
        rights.splice(rights.length - 1, 1);
      }
    }
    for (let rightsIndex = 0; rightsIndex < rights.length; rightsIndex += 1) {
      currentScore = (currentScore * 5) + (scorePoints.indexOf(rights[(rights.length - 1) - rightsIndex]) + 1);
    }
    scores.push(currentScore);
  }
}
console.log(scores);

scores.sort(function(a, b) {
  return a - b;
});

console.log(scores[(scores.length - 1) / 2]);
// console.log(input[0]);

// console.log(rights);

