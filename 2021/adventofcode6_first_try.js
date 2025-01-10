const input = [];

for (let day = 1; day <= 80; day += 1) {
  let newFish = 0;
  for (let index = 0; index < input.length; index += 1) {
    input[index] -= 1;
    if (input[index] < 0) {
      // input.push(8);
      newFish += 1;
      input[index] = 6;
    }
  }
  for (let fishIndex = 0; fishIndex < newFish; fishIndex += 1) {
    input.push(8);
  }
}

console.log(`Number of fish: ${input.length}`);





const input = [];

for (let day = 1; day <= 256; day += 1) {
  let newFish = 0;
  for (let index = 0; index < input.length; index += 1) {
    input[index] -= 1;
    if (input[index] < 0) {
      // input.push(8);
      newFish += 1;
      input[index] = 6;
    }
  }
  for (let fishIndex = 0; fishIndex < newFish; fishIndex += 1) {
    input.push(8);
  }
}

console.log(`Number of fish: ${input.length}`);




const input = [];

// const input = [1, 2];
// const input = [3,4,3,1,2];
const inputShortcut = [0, 1, 2, 3, 4, 5, 6];
const shortcutResults = [0, 0, 0, 0, 0, 0, 0];
let totalFish = input.length;
let result = 0;

function newFish(daysLeft, startingNumber) {
  if ((daysLeft - (startingNumber + 1)) >= 0) {
    const fishCreated = Math.floor((daysLeft - (startingNumber + 1)) / 7) + 1;
    totalFish += fishCreated;
    // console.log(`Fish created: ${fishCreated}`);
    // console.log(`Starting number: ${startingNumber}`);
    // console.log(`Days left: ${daysLeft}`);

    let count = 0;

    if (fishCreated > 0) {
      daysLeft -= (startingNumber + 1);
      while (daysLeft > 0) {
        newFish(daysLeft, 8);
        count += 1;
        daysLeft -= 7;
      }
    }
  }
}

for (let index = 0; index < inputShortcut.length; index += 1) {
  shortcutResults[index] = newFish(256, inputShortcut[index]);
}

for (let index = 0; index < input.length; index += 1) {
  result += shortcutResults[input[index]];
}

// console.log(`Total fish: ${totalFish}`);
console.log(`Real total fish: ${result}`);



let fishCount = input.length;

for (let index = 0; index < input.length; index += 1) {
  let repeatCount = newFish(256, input[index] + 1);
  fishCount += repeatCount;

  for (let repeatIndex = 0; repeatIndex < repeatCount; repeatIndex += 1) {
    let fishToAdd = newFish(256 - (input[index] + 1) - (repeatIndex * 7), 8);
  }
}














const input = [1, 2, 3, 4];

for (let day = 1; day <= 5; day += 1) {
  let newFish = 0;
  for (let index = 0; index < input.length; index += 1) {
    input[index] -= 1;
    if (input[index] < 0) {
      newFish += 1;
      input[index] = 6;
    }
  }
  for (let fishIndex = 0; fishIndex < newFish; fishIndex += 1) {
    input.push(8);
  }
  console.log(input);
  console.log(`Input length: ${input.length}`);
  console.log(`New fish today: ${newFish}`);
  console.log(`Day: ${day}`);
}

// const input = [1, 2, 3, 4];

// for (let index = 0; index < input.length; index += 1) {
//     input[index] -= 1;
//     if (input[index] < 0) {
//       input.push(8);
//       input[index] = 6;
//     }
//   }
//   console.log(input);

//   for (let index = 0; index < input.length; index += 1) {
//     input[index] -= 1;
//     if (input[index] < 0) {
//       input.push(8);
//       input[index] = 6;
//     }
//   }
//   console.log(input);

console.log(`Number of fish: ${input.length}`);
