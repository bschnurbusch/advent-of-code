// const regexA = /Register A: (\d+)/;
// const regexB = /Register B: (\d+)/;
// const regexC = /Register C: (\d+)/;

// example 1
// let registerA = 0;
// let registerB = 0;
// let registerC = 9;

// let program = '2,6';

// example 2
// let registerA = 10;
// let registerB = 0;
// let registerC = 0;

// let program = '5,0,5,1,5,4';

// example 3
// let registerA = 2024;
// let registerB = 0;
// let registerC = 0;

// let program = '0,1,5,4,3,0';

// example 4
// let registerA = 0;
// let registerB = 29;
// let registerC = 0;

// let program = '1,7';

// example 5
// let registerA = 0;
// let registerB = 2024;
// let registerC = 43690;

// let program = '4,0';

// big example
// let registerA = 729;
// let registerB = 0;
// let registerC = 0;

// let program = '0,1,5,4,3,0';

// part two example
// let registerA = 117440;
// let registerB = 0;
// let registerC = 0;

// let program = '0,3,5,4,3,0';

// real input
// let registerA = 27575648;
// let registerB = 0;
// let registerC = 0;

// let program = '2,4,1,2,7,5,4,1,1,3,5,5,0,3,3,0';

// testing
// try 4859823314775
// try 4860762838871
let registerA = 37221261688081;
let registerB = 0;
let registerC = 0;

let program = '2,4,1,2,7,5,4,1,1,3,5,5,0,3,3,0';
let matchThis = [2,4,1,2,7,5,4,1,1,3,5,5,0,3,3,0];



let programArray = program.split(',');
for (let i = 0; i < programArray.length; i += 1) {
  programArray[i] = parseInt(programArray[i], 10);
}

// console.log(programArray);

let pointer = 0;
let shouldIncrease = true;
let increaseAmount = 2;
let output = [];

function adv(value) {
  const result = registerA / (Math.pow(2, value));
  registerA = Math.trunc(result);
}

function bxl(value) {
  const result = registerB ^ value;
  registerB = result;
}

function bst(value) {
  const result = value % 8;
  registerB = result;
}

function jnz() {
  if (registerA === 0) {
    return false;
  }
  return true;
}

function bxc() {
  const result = registerB ^ registerC;
  registerB = result;
}

function out(value) {
  const result = value % 8;
  output.push(result);
}

function bdv(value) {
  const result = registerA / (Math.pow(2, value));
  registerB = Math.trunc(result);
}

function cdv(value) {
  const result = registerA / (Math.pow(2, value));
  registerC = Math.trunc(result);
}

function getComboValue(operand) {
  if (operand <= 3) {
    return operand;
  }
  if (operand === 4) {
    return registerA;
  }
  if (operand === 5) {
    return registerB;
  }
  if (operand === 6) {
    return registerC;
  }
}

for (let i = 0; i < programArray.length; i += increaseAmount) {
  increaseAmount = 2;

  const opcode = programArray[i];
  const operand = programArray[i + 1];

  if (opcode === 0) {
    const comboOperand = getComboValue(operand);
    adv(comboOperand);
  } else if (opcode === 1) {
    bxl(operand);
  } else if (opcode === 2) {
    const comboOperand = getComboValue(operand);
    bst(comboOperand);
  } else if (opcode === 3) {
    const jump = jnz(operand);
    if (jump) {
      i = operand;
      increaseAmount = 0;
    }
  } else if (opcode === 4) {
    bxc();
  } else if (opcode === 5) {
    const comboOperand = getComboValue(operand);
    out(comboOperand);
  } else if (opcode === 6) {
    const comboOperand = getComboValue(operand);
    bdv(comboOperand);
  } else if (opcode === 7) {
    const comboOperand = getComboValue(operand);
    cdv(comboOperand);
  }

  if (i > programArray.length) {
    break;
  }
}




console.log(`register A: ${registerA}`);
console.log(`register B: ${registerB}`);
console.log(`register C: ${registerC}`);
console.log(`output: ${output}`);
console.log(`output length: ${output.length}`);
console.log(`program: ${programArray.length}`);
console.log(`output matches? ${output.toString() === program}`);


// PART TWO

// let foundMatch = false;
// let moveOn = false;
// let startingA = 4652657710990;

// '2,4,1,2,7,5,4,1,1,3,5,5,0,3,3,0'
// output = [2, 4, 1, 2, 7, 5, 4, 1, 1, 3, 5, 5, 0, 3, 3, 0];

// 10000000
// 27575648

// while (foundMatch === false) {
//   moveOn = false;
//   startingA += 1;
//   registerA = startingA;
//   // console.log(`trying: ${registerA}`);
//   registerB = 0;
//   registerC = 0;
//   // console.log(`trying: ${startingA}`);
//   // console.log('trying');
//   output = [];
//   for (let i = 0; i < programArray.length; i += increaseAmount) {
//     increaseAmount = 2;
  
//     const opcode = programArray[i];
//     const operand = programArray[i + 1];
  
//     if (opcode === 0) {
//       const comboOperand = getComboValue(operand);
//       adv(comboOperand);
//     } else if (opcode === 1) {
//       bxl(operand);
//     } else if (opcode === 2) {
//       const comboOperand = getComboValue(operand);
//       bst(comboOperand);
//     } else if (opcode === 3) {
//       const jump = jnz(operand);
//       if (jump) {
//         i = operand;
//         increaseAmount = 0;
//       }
//     } else if (opcode === 4) {
//       bxc();
//     } else if (opcode === 5) {
//       const comboOperand = getComboValue(operand);
//       out(comboOperand);
//       // if (output.length === 1 && output[0] === 2) {
//       //   console.log(`A value for ending point: ${startingA}`);
//       //   moveOn = true;
//       //   foundMatch = true;
//       // }
//       for (let j = 0; j < output.length; j += 1) {
//         // if (output[j] !== programArray[j]) {
//         //   moveOn = true;
//         //   if (j > 10) {
//         //     console.log(`locked in ${j} digits`);
//         //   }
//         //   // console.log('breaking early');
//         //   break;
//         // }


//         if (output[j] !== matchThis[j]) {
//           moveOn = true;
//           // console.log(`breaking early, ${output[j]} != ${matchThis[j]}`);
//           break;
//         }
//       }
//       if (moveOn) {
//         break;
//       }
//     } else if (opcode === 6) {
//       const comboOperand = getComboValue(operand);
//       bdv(comboOperand);
//     } else if (opcode === 7) {
//       const comboOperand = getComboValue(operand);
//       cdv(comboOperand);
//     }
  
//     if (i > programArray.length) {
//       break;
//     }
//   }

//   if (moveOn) {
//     continue;
//   }

//   // if (output.toString() === program) {
//   //   foundMatch = true;
//   //   console.log('found match');
//   //   console.log(`Result part two: ${startingA}`);
//   // }

//   if (output.toString() === matchThis.toString()) {
//     foundMatch = true;
//     console.log(`found match for output: ${output}`);
//     console.log(`Result part two: ${startingA}`);
//   }
// }

let a = 0;
let b = 0;
let c = 0;

function newAdv(value) {
  const result = a / (Math.pow(2, value));
  a = Math.trunc(result);
}

function newBxl(value) {
  const result = b ^ value;
  b = result;
}

function newBst(value) {
  const result = value % 8;
  b = result;
}

function newJnz() {
  if (a === 0) {
    return false;
  }
  return true;
}

function newBxc() {
  const result = b ^ c;
  b = result;
}

function newOut(value) {
  const result = value % 8;
  return result;
}

function newBdv(value) {
  const result = a / (Math.pow(2, value));
  b = Math.trunc(result);
}

function newCdv(value) {
  const result = a / (Math.pow(2, value));
  c = Math.trunc(result);
}

function getNewComboValue(operand) {
  if (operand <= 3) {
    return operand;
  }
  if (operand === 4) {
    return a;
  }
  if (operand === 5) {
    return b;
  }
  if (operand === 6) {
    return c;
  }
}





// let startingPoint = 1;
let expectedVal = [2,4,1,2,7,5,4,1,1,3,5,5,0,3,3,0];
// let expectedVal = [0,3,5,4,3,0];
let testVals = [[8,2]];
let results = [];
let foundIt = false;

// let a = startingPoint;
// let b = 0;
// let c = 0;
// let testOut;

// b = a % 8;
// b = b ^ 2;
// c = a / (Math.pow(2, b));
// b = b ^ c;
// b = b ^ 3;
// testOut = b % 8;
// if (testOut === expectedVal[]) {}

let attempts = [];

while (testVals.length > 0) {
  const regA = testVals.shift();
  // console.log(regA);
  let minVal = regA[0];
  let targetIndex = regA[1];
  let maxVal = regA[0] + 18;
  let targetVal = expectedVal[expectedVal.length - targetIndex];

  // if (targetVal === 2) {
  //   maxVal = minVal + 18;
  // }
  // console.log(`min val: ${minVal}`);
  // console.log(`max vaL: ${maxVal - 1}`);

  // console.log(`match this: ${targetVal}`);
  // attempts = [];

  for (let i = minVal; i < maxVal; i += 1) {
    a = i;
    b = 0;
    c = 0;
    let testOut;

    // a = Math.trunc(a / 8);

    b = a % 8;
    // newBst(a);


    b = b ^ 2;
    // newBxl(2);


    let test = Math.pow(2, b)
    c = Math.trunc((a / test));
    // newCdv(b);


    b = b ^ c;
    // newBxc();


    b = b ^ 3;
    // newBxl(3);


    testOut = b % 8;
    // testOut = newOut(b);


    // console.log(`test out: ${testOut}`);
    // a = Math.trunc(a / 8);
    // if (a === 0) {
    //   console.log('done with loop');
    // }
    if (targetIndex === 16) {
      // console.log(`test out: ${testOut}`);
    }

    if (testOut === targetVal) {
      // console.log(`found something for ${i}`);
      if (attempts.includes(i)) {
        continue;
      } else {
        attempts.push(i);
      }
      
      if (targetIndex === 16) {
        console.log(`found one?: ${i}`);
        registerA = i;
        registerB = 0;
        registerC = 0;

        program = '2,4,1,2,7,5,4,1,1,3,5,5,0,3,3,0';
        matchThis = [2,4,1,2,7,5,4,1,1,3,5,5,0,3,3,0];

        programArray = program.split(',');
        for (let i = 0; i < programArray.length; i += 1) {
          programArray[i] = parseInt(programArray[i], 10);
        }

        pointer = 0;
        shouldIncrease = true;
        increaseAmount = 2;
        output = [];

        for (let i = 0; i < programArray.length; i += increaseAmount) {
          increaseAmount = 2;
        
          const opcode = programArray[i];
          const operand = programArray[i + 1];
        
          if (opcode === 0) {
            const comboOperand = getComboValue(operand);
            adv(comboOperand);
          } else if (opcode === 1) {
            bxl(operand);
          } else if (opcode === 2) {
            const comboOperand = getComboValue(operand);
            bst(comboOperand);
          } else if (opcode === 3) {
            const jump = jnz(operand);
            if (jump) {
              i = operand;
              increaseAmount = 0;
            }
          } else if (opcode === 4) {
            bxc();
          } else if (opcode === 5) {
            const comboOperand = getComboValue(operand);
            out(comboOperand);
          } else if (opcode === 6) {
            const comboOperand = getComboValue(operand);
            bdv(comboOperand);
          } else if (opcode === 7) {
            const comboOperand = getComboValue(operand);
            cdv(comboOperand);
          }
        
          if (i > programArray.length) {
            break;
          }
        }

        if (output.toString() === program) {
          console.log(`FOUND FOR REAL: ${i}`);
          testVals = [];
          break;
        }
      }
      testVals.push([i * 8, targetIndex + 1]);
    }
  }
}

// console.log(testVals);


// while (testVals.length > 0) {
//   const regA = testVals.shift();
//   console.log(regA);
//   let minVal = regA[0];
//   let maxVal = regA[0] + 8;
//   let targetIndex = regA[1];
//   let targetVal = expectedVal[expectedVal.length - targetIndex];
//   console.log(`min val: ${minVal}`);
//   console.log(`max vaL: ${maxVal}`);

//   console.log(`match this: ${targetVal}`);

//   for (let i = minVal; i < maxVal; i += 1) {
//     let a = i;
//     let b = 0;
//     let c = 0;
//     let testOut;

//     a = Math.trunc(a / 8);
//     testOut = a % 8;
//     // console.log(`test out: ${testOut}`);

//     // const matching = checkOutput(testOut);
//     if (testOut === targetVal) {
//       console.log(`found something for ${i}`);
//       if (targetIndex === 6) {
//         console.log(`FOUND ONE: ${i}`);
//       }
//       testVals.push([i * 8, targetIndex + 1]);
//     }
//   }
// }