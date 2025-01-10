const input = `
`;

// const input = `
// Button A: X+94, Y+34
// Button B: X+22, Y+67
// Prize: X=8400, Y=5400

// Button A: X+26, Y+66
// Button B: X+67, Y+21
// Prize: X=12748, Y=12176

// Button A: X+17, Y+86
// Button B: X+84, Y+37
// Prize: X=7870, Y=6450

// Button A: X+69, Y+23
// Button B: X+27, Y+71
// Prize: X=18641, Y=10279
// `;

// // first claw
// const input = `
// Button A: X+94, Y+34
// Button B: X+22, Y+67
// Prize: X=8400, Y=5400
// `;

// second claw
// const input = `
// Button A: X+26, Y+66
// Button B: X+67, Y+21
// Prize: X=12748, Y=12176
// `;

// fourth claw
// const input = `
// Button A: X+69, Y+23
// Button B: X+27, Y+71
// Prize: X=18641, Y=10279
// `;

// example claw that broke
// const input = `
// Button A: X+16, Y+51
// Button B: X+66, Y+37
// Prize: X=19072, Y=5135
// `;

let machines = [];
let spentTokens = 0;
let foundWinsPart1 = 0;
let foundWinsPart2 = 0;
let debugTrack = [];

const regexA = /Button A: X\+(\d+), Y\+(\d+)/g;
const regexB = /Button B: X\+(\d+), Y\+(\d+)/g;
const regexPrize = /Prize: X=(\d+), Y=(\d+)/g;

const matchA = [...input.matchAll(regexA)];
const matchB = [...input.matchAll(regexB)];
const matchPrize = [...input.matchAll(regexPrize)];

// console.log(matchA[0][1]);

for (let i = 0; i < matchA.length; i += 1) {
  const buttonA = [matchA[i][1], matchA[i][2]];
  const buttonB = [matchB[i][1], matchB[i][2]];
  const prize = [matchPrize[i][1], matchPrize[i][2]];

  machines.push([buttonA, buttonB, prize]);
}

// console.log(JSON.stringify(machines));

function checkMachine(targetMachine) {
  let tokenCost = Infinity;
  let foundWin = false;

  const buttonOneX = parseInt(targetMachine[0][0], 10);
  const buttonOneY = parseInt(targetMachine[0][1], 10);

  const buttonTwoX = parseInt(targetMachine[1][0], 10);
  const buttonTwoY = parseInt(targetMachine[1][1], 10);

  const prizeX = parseInt(targetMachine[2][0], 10);
  const prizeY = parseInt(targetMachine[2][1], 10);

  // console.log(buttonOneX);
  // console.log(buttonOneY);
  // console.log(buttonTwoX);
  // console.log(buttonTwoY);
  // console.log(prizeX);
  // console.log(prizeY);
  
  for (let i = 0; i < 100; i += 1) {
    for (let j = 0; j < 100; j += 1) {
      if (i === 79 && j === 39) {
        // console.log('trying this');
        // console.log(`x? ${buttonOneX * (i + 1) + buttonTwoX * (j + 1)}`);
        // console.log(`y? ${buttonOneY * (i + 1) + buttonTwoY * (j + 1)}`);
        // console.log(`prizeX? ${prizeX}`);
        // console.log(`prizeY? ${prizeY}`);
      }
      if ((buttonOneX * (i + 1)) + (buttonTwoX * (j + 1)) === prizeX && (buttonOneY * (i + 1) + (buttonTwoY * (j + 1))) === prizeY) {
        // console.log(`found win for ${targetMachine}, adding 3 * ${i + 1} + ${j + 1}, total: ${(3 * (i + 1)) + (j + 1)}`);
        foundWinsPart1 += 1;
        if (foundWin === false) {
          foundWin = true;
        }

        const localCost = (3 * (i + 1)) + (j + 1);
        if (localCost < tokenCost) {
          tokenCost = localCost;
        }
      }
    }
  }

  if (foundWin) {
    // console.log('found win');
    spentTokens += tokenCost;
  }
}

for (let i = 0; i < machines.length; i += 1) {
  checkMachine(machines[i]);
}

// console.log(`Result: ${spentTokens}`);


// PART TWO

spentTokens = 0;

let scaleCount = 0;

function scaleValue(value) {
  for (let i = 0; i < scaleCount; i += 1) {
    value = value / 2;
  }

  return value;
}

function checkNewMachine(targetMachine) {
  const buttonOneX = parseInt(targetMachine[0][0], 10);
  const buttonOneY = parseInt(targetMachine[0][1], 10);

  const buttonTwoX = parseInt(targetMachine[1][0], 10);
  const buttonTwoY = parseInt(targetMachine[1][1], 10);

  let prizeX = parseInt(targetMachine[2][0], 10) + 10000000000000;
  let prizeY = parseInt(targetMachine[2][1], 10) + 10000000000000;

  // console.log(`x? ${prizeX === 10000000012748}`);
  // console.log(`y? ${prizeY === 10000000012176}`);

  // let prizeX = parseInt(targetMachine[2][0], 10);
  // let prizeY = parseInt(targetMachine[2][1], 10);



  // console.log(`button one x: ${buttonOneX}`);
  // console.log(`button one y: ${buttonOneY}`);
  // console.log(`button two x: ${buttonTwoX}`);
  // console.log(`button two y: ${buttonTwoY}`);
  // console.log(`prize x: ${prizeX}`);
  // console.log(`prize y: ${prizeY}`);
  let b = ((prizeY / buttonOneY) - (prizeX / buttonOneX)) / ((buttonTwoY / buttonOneY) - (buttonTwoX / buttonOneX));
  // console.log(`b: ${b % 1}`);
  let a = (prizeX - (b * buttonTwoX)) / buttonOneX;
  // console.log(`b: ${b}`);
  // console.log(`a: ${a}`);

  b = Math.round(b);
  a = Math.round(a);
  let win = ((buttonOneX * a) + (buttonTwoX * b) === prizeX) && ((buttonOneY * a) + (buttonTwoY * b) === prizeY);
  if (win) {
    foundWinsPart2 += 1;
    spentTokens += (3 * a) + b;
  }

}

for (let i = 0; i < machines.length; i += 1) {
  checkNewMachine(machines[i]);
}

console.log(`Result part two: ${spentTokens}`);

// console.log(`part 1 wins: ${foundWinsPart1}, part 2 wins: ${foundWinsPart2}`);
