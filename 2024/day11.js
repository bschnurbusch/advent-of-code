let input = [];
// let input = ['125', '17'];

// const blinkCount = 25;

// for (let j = 0; j < blinkCount; j += 1) {
//   console.log('blinking');
//   for (let i = 0; i < input.length; i += 1) {
//     if (parseInt(input[i], 10) === 0) {
//       input[i] = '1';
//     } else if (input[i].length % 2 === 0) {
//       const midPoint = input[i].length / 2;
//       const firstHalf = input[i].slice(0, midPoint);
//       let secondHalf = input[i].slice(midPoint);
//       if (parseInt(secondHalf, 10) === 0) {
//         secondHalf = '0';
//       } else {
//         secondHalf = secondHalf.replace(/0*/, '');
//       }

//       input.splice(i, 1, firstHalf, secondHalf);
//       i += 1;
//     } else {
//       const inputNumber = parseInt(input[i], 10);
//       const newNumber = inputNumber * 2024;
//       input[i] = newNumber.toString();
//     }
//   }
// }

// // console.log(input);
// console.log(input.length);



// PART TWO
let result = 0;

const blinkCount = 75;

let trackingObject = {};
let nextObject = {};

for (let i = 0; i < input.length; i += 1) {
  if (!trackingObject[input[i]]) {
    trackingObject[input[i]] = 1;
  } else {
    trackingObject[input[i]] += 1;
  }
}


function addToNextObject(value, count) {
  if (!nextObject[value]) {
    nextObject[value] = count;
  } else {
    nextObject[value] += count;
  }
}


for (let i = 0; i < blinkCount; i += 1) {
  console.log('blinking');
  for (let j = 0; j < Object.keys(trackingObject).length; j += 1) {
    const checkKey = Object.keys(trackingObject)[j];
    // console.log(`check key: ${checkKey}`);
    // console.log(trackingObject[checkKey]);


            if (parseInt(checkKey, 10) === 0) {
              addToNextObject('1', trackingObject[checkKey]);
            } else if (checkKey.length % 2 === 0) {
              const midPoint = checkKey.length / 2;
              const firstHalf = checkKey.slice(0, midPoint);
              let secondHalf = checkKey.slice(midPoint);
              if (parseInt(secondHalf, 10) === 0) {
                secondHalf = '0';
              } else {
                secondHalf = secondHalf.replace(/0*/, '');
              }

              addToNextObject(firstHalf, trackingObject[checkKey]);
              addToNextObject(secondHalf, trackingObject[checkKey]);
            } else {
              const inputNumber = parseInt(checkKey, 10);
              const newNumber = inputNumber * 2024;

              addToNextObject(newNumber.toString(), trackingObject[checkKey]);
            }

  }
  // console.log(`next obj: ${JSON.stringify(nextObject)}`);

  trackingObject = nextObject;
  nextObject = {};
}

for (let i = 0; i < Object.keys(trackingObject).length; i += 1) {
  const checkKey = Object.keys(trackingObject)[i];
  result += trackingObject[checkKey];
}

// console.log(trackingObject);
console.log(`Result part two: ${result}`);