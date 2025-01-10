const rules = [];

const updates = [];

let rulesOrder = {};

let goodUpdates = [];
let badUpdates = [];

let result = 0;

// set up rules
for (let i = 0; i < rules.length; i += 1) {
  const splitRule = rules[i].split('|');
  const firstNumber = splitRule[0];
  const secondNumber = splitRule[1];

  if (!rulesOrder[firstNumber]) {
    rulesOrder[firstNumber] = [secondNumber];
  } else {
    rulesOrder[firstNumber].push(secondNumber);
  }
}

// check rules
for (let i = 0; i < updates.length; i += 1) {
  let countThisArray = true;
  for (let k = 0; k < updates[i].length - 1; k += 1) {
    const remainingNumbers = updates[i].slice(k + 1);
    const keyLookUp = updates[i][k].toString();

    for (let j = 0; j < remainingNumbers.length; j += 1) {
      const checkNumber = remainingNumbers[j].toString();

      if (!rulesOrder[keyLookUp].includes(checkNumber)) {
        countThisArray = false;
        break;
      }
    }

    if (countThisArray === false) {
      break;
    }
  }

  if (countThisArray) {
    goodUpdates.push(updates[i]);
  } else {
    badUpdates.push(updates[i]);
  }
}

// count middle elements
for (let i = 0; i < goodUpdates.length; i += 1) {
  while (goodUpdates[i].length > 1) {
    goodUpdates[i].shift();
    goodUpdates[i].pop();
  }

  result += goodUpdates[i][0];
}

console.log(`Result: ${result}`);

// PART TWO

result = 0;

// reorder
for (let i = 0; i < badUpdates.length; i += 1) {
  let reorder = false;
  let indexToSplice;
  let indexToPutBefore;
  for (let k = 0; k < badUpdates[i].length - 1; k += 1) {
    const remainingNumbers = badUpdates[i].slice(k + 1);
    const keyLookUp = badUpdates[i][k].toString();

    for (let j = 0; j < remainingNumbers.length; j += 1) {
      const checkNumber = remainingNumbers[j].toString();

      if (!rulesOrder[keyLookUp].includes(checkNumber)) {
        indexToSplice = j + k + 1;
        indexToPutBefore = k;
        reorder = true;
        break;
      }
    }

    if (reorder) {
      const removedNumber = badUpdates[i].splice(indexToSplice, 1);
      if (indexToPutBefore === 0) {
        badUpdates[i].unshift(removedNumber[0]);
      } else {
        badUpdates[i].splice(indexToPutBefore, 0, removedNumber[0]);
      }

      i -= 1;
      break;
    }
  }
}

// count middle elements
for (let i = 0; i < badUpdates.length; i += 1) {
  while (badUpdates[i].length > 1) {
    badUpdates[i].shift();
    badUpdates[i].pop();
  }

  result += badUpdates[i][0];
}

console.log(`Result part two: ${result}`);