const input = [];

let result = 0;
let testCount = 0;
const inputRegex = /(\d+): (.+)/;

function operatorMath(inputArray) {
  // inputArray = inputArray.flat(Infinity);
  const valueOne = inputArray[0] + inputArray[1];
  const valueTwo = inputArray[0] * inputArray[1];

  if (inputArray.length > 2) {
    const updatedValueOne = operatorMath(inputArray.toSpliced(0, 2, valueOne)).flat(Infinity);
    const updatedValueTwo = operatorMath(inputArray.toSpliced(0, 2, valueTwo)).flat(Infinity);

    return [updatedValueOne, updatedValueTwo].flat(Infinity);
  } else {
    return [valueOne, valueTwo].flat(Infinity);
  }
}

for (let i = 0; i < input.length; i += 1) {
  const inputMatch = input[i].match(inputRegex);
  const testValueString = inputMatch[1];
  const testValue = parseInt(testValueString, 10);

  const inputNumbersString = inputMatch[2];
  const inputNumberArray = inputNumbersString.split(' ');
  for (let j = 0; j < inputNumberArray.length; j += 1) {
    inputNumberArray[j] = parseInt(inputNumberArray[j], 10);
  }

  const potentialValues = operatorMath(inputNumberArray);
  // if (i === 0) {
  //   console.log(JSON.stringify(potentialValues));
  // }

  for (let j = 0; j < potentialValues.length; j += 1) {
    if (potentialValues[j] === testValue) {
      result += testValue;
      testCount += 1;
      break;
    }
  }
}

console.log(`Result: ${result}`);
console.log(`Test count: ${testCount}`);

// PART TWO

result = 0;
testCount = 0;

function newOperatorMath(inputArray) {
  // inputArray = inputArray.flat(Infinity);
  const valueOne = inputArray[0] + inputArray[1];
  const valueTwo = inputArray[0] * inputArray[1];
  const valueThreeString = inputArray[0].toString() + inputArray[1].toString();
  const valueThree = parseInt(valueThreeString, 10);

  if (inputArray.length > 2) {
    const updatedValueOne = newOperatorMath(inputArray.toSpliced(0, 2, valueOne)).flat(Infinity);
    const updatedValueTwo = newOperatorMath(inputArray.toSpliced(0, 2, valueTwo)).flat(Infinity);
    const updatedValueThree = newOperatorMath(inputArray.toSpliced(0, 2, valueThree)).flat(Infinity);

    return [updatedValueOne, updatedValueTwo, updatedValueThree].flat(Infinity);
  } else {
    return [valueOne, valueTwo, valueThree].flat(Infinity);
  }
}

for (let i = 0; i < input.length; i += 1) {
  console.log('checking new values');
  const inputMatch = input[i].match(inputRegex);
  const testValueString = inputMatch[1];
  const testValue = parseInt(testValueString, 10);

  const inputNumbersString = inputMatch[2];
  const inputNumberArray = inputNumbersString.split(' ');
  for (let j = 0; j < inputNumberArray.length; j += 1) {
    inputNumberArray[j] = parseInt(inputNumberArray[j], 10);
  }

  const potentialValues = newOperatorMath(inputNumberArray);
  // if (i === 0) {
  //   console.log(JSON.stringify(potentialValues));
  // }

  for (let j = 0; j < potentialValues.length; j += 1) {
    if (potentialValues[j] === testValue) {
      result += testValue;
      testCount += 1;
      break;
    }
  }
}

console.log(`Result part two: ${result}`);
console.log(`Test count part two: ${testCount}`);