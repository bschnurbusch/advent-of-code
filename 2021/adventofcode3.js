const input = []
let positionOneCount = 0;
let positionTwoCount = 0;
let positionThreeCount = 0;
let positionFourCount = 0;
let positionFiveCount = 0;
let positionSixCount = 0;
let positionSevenCount = 0;
let positionEightCount = 0;
let positionNineCount = 0;
let positionTenCount = 0;
let positionElevenCount = 0;
let positionTwelveCount = 0;

let oneCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let oxygenList = input.slice(0);
let coList = input.slice(0);

// for (let index = 0; index < input.length; index += 1) {
//   let currentInput = input[index].split('');
//   for (let currentIndex = 0; currentIndex < currentInput.length; currentIndex += 1) {
//     if (parseInt(currentInput[currentIndex]) == 1) {
//       oneCount[currentIndex] += 1;
//     }
//   }
// }

// for (let index = 0; index < oneCount.length; index += 1) {
//   if (oneCount[index] > (input.length / 2)) {
//     result[index] = 1;
//   }
// }

// console.log(`One count: ${oneCount}`);
// console.log(`Final result: ${result}`);

// function findCoList(repeatCount) {
//   let count = 0;
//   for (let index = 0; index < coList.length; index += 1) {
//     let currentInput = coList[index].split('');
//     if (parseInt(currentInput[repeatCount]) == 1) {
//       count += 1;
//     }
//   }
//   let numberToKeep = count > (oxygenList.length / 2) ? 1 : 0;

//   for (let index = 0; index < coList.length; index += 1) {
//     let currentInput = coList[index].split('');
//     if (currentInput[repeatCount] != numberToKeep) {
//       coList = coList.splice(index, 1);
//       index -= 1;
//     }
//   }
//   if (coList.length > 1) {
//     return findCoList(repeatCount + 1);
//   }
//   return coList;
// }

// while (oxygenList.length > 1) {
//   console.log('oxygen list ran once');
//   let repeatCount = 0;
//   let count = 0;
//   console.log(`Oxygen list length: ${oxygenList.length}`);
//   for (let index = 0; index < oxygenList.length; index += 1) {
//     let currentInput = oxygenList[index].split('');
//     if (parseInt(currentInput[repeatCount]) == 1) {
//       count += 1;
//     }
//   }
//   let numberToKeep = count >= (oxygenList.length / 2) ? 1 : 0;
//   console.log(numberToKeep);

//   for (let index = 0; index < oxygenList.length; index += 1) {
//     let currentInput = oxygenList[index].split('');
//     if (parseInt(currentInput[repeatCount]) != numberToKeep) {
//       oxygenList.splice(index, 1);
//       index -= 1;
//     }
//     if (index >= oxygenList.length) {
//       break;
//     }
//   }
//   repeatCount += 1;
// }

// while (coList.length > 1) {
//   console.log('co list ran once');
//   let repeatCount = 0;
//   let count = 0;
//   console.log(`CO list length: ${coList.length}`);
//   for (let index = 0; index < coList.length; index += 1) {
//     let currentInput = coList[index].split('');
//     if (parseInt(currentInput[repeatCount]) == 1) {
//       count += 1;
//     }
//   }
//   let numberToKeep = count < (oxygenList.length / 2) ? 1 : 0;
//   console.log(numberToKeep);

//   for (let index = 0; index < coList.length; index += 1) {
//     let currentInput = coList[index].split('');
//     if (parseInt(currentInput[repeatCount]) != numberToKeep) {
//       coList.splice(index, 1);
//       index -= 1;
//     }
//     if (index >= coList.length) {
//       break;
//     }
//   }
//   repeatCount += 1;
// }

// function findOxygenList(inputArray, repeatCount) {
//   let count = 0;
//   let resultArray = [];
//   for (let index = 0; index < inputArray.length; index += 1) {
//     let currentInput = inputArray[index].split('');
//     if (parseInt(currentInput[repeatCount]) == 1) {
//       count += 1;
//     }
//   }
//   let numberToKeep = count >= (inputArray.length / 2) ? 1 : 0;

//   for (let index = 0; index < inputArray.length; index += 1) {
//     let currentInput = inputArray[index].split('');
//     if (parseInt(currentInput[repeatCount]) == numberToKeep) {
//       resultArray.push(inputArray[index]);
//     }
//   }
//   if (resultArray.length > 1) {
//     return findOxygenList(resultArray, repeatCount + 1);
//   }
//   return resultArray;
// }

function findCoList(inputArray, repeatCount) {
  let count = 0;
  let resultArray = [];
  for (let index = 0; index < inputArray.length; index += 1) {
    let currentInput = inputArray[index].split('');
    if (parseInt(currentInput[repeatCount]) == 1) {
      count += 1;
    }
  }
  let numberToKeep = count < (inputArray.length / 2) ? 1 : 0;

  for (let index = 0; index < inputArray.length; index += 1) {
    let currentInput = inputArray[index].split('');
    if (currentInput[repeatCount] == numberToKeep) {
      resultArray.push(inputArray[index]);
    }
  }
  if (resultArray.length > 1) {
    return findCoList(resultArray, repeatCount + 1);
  }
  return resultArray;
}

findCoList(input, 0);
