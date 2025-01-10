const input = "";

const regex = /mul\((\d+),(\d+)\)/g;
const found = [...input.matchAll(regex)];
// console.log(found[0].index);

let result = 0;

for (let i = 0; i < found.length; i += 1) {
  const firstNumberMatch = found[i][1];
  const secondNumberMatch = found[i][2];

  const firstNumber = parseInt(firstNumberMatch, 10);
  const secondNumber = parseInt(secondNumberMatch, 10);

  result += (firstNumber * secondNumber);
}

console.log(`Result: ${result}`);

// PART TWO
result = 0;

const extraRegex = /do\(\)|don't\(\)/g
const extraFound = [...input.matchAll(extraRegex)];

let countThis = true;
for (let i = 0; i < found.length; i += 1) {
  const foundIndex = found[i].index;

  for (let j = 0; j < extraFound.length; j += 1) {
    if (extraFound[j].index > foundIndex) {
      break;
    }
    if (extraFound[j][0] === 'do()') {
      countThis = true;
    } else {
      countThis = false;
    }
  }

  if (countThis) {
    const firstNumberMatch = found[i][1];
    const secondNumberMatch = found[i][2];

    const firstNumber = parseInt(firstNumberMatch, 10);
    const secondNumber = parseInt(secondNumberMatch, 10);

    result += (firstNumber * secondNumber);
  }
}

console.log(`Result part 2: ${result}`);