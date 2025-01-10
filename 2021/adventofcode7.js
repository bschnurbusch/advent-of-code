const input = [];

// const input = [16,1,2,0,4,2,7,1,2,14];
// let startingGuess = 0;
// let originalFuelSpent = 0;

// let result;

// let sortedInput = input.sort(function(a, b) {
//     return a - b;
// });

// if (input.length % 2 == 0) {
//     result = (input[Math.floor(input.length / 2)] + input[Math.ceil(input.length / 2)]) / 2;
// } else {
//     result = input[input.length / 2];
// }

// console.log(result);
// console.log(input[Math.floor(input.length / 2)]);
// console.log(input[Math.ceil(input.length / 2)]);

// console.log(input[499]);
// console.log(input[500]);
// console.log(input[501]);
// 0 -> 1 -> 3 -> 6 -> 10 -> 15 -> 21 -> 28 -> 36 -> 45 -> 55 -> 66 -> 78

// for (let index = 0; index < input.length; index += 1) {
//     fuelSpent += Math.abs(input[index] - 342);
// }

// console.log(`Fuel spent: ${fuelSpent}`);
// fuelSpent = 0;

// for (let index = 0; index < input.length; index += 1) {
//     fuelSpent += Math.abs(input[index] - 341);
// }

// console.log(`Fuel spent: ${fuelSpent}`);
// fuelSpent = 0;

// console.log(input[0]);
// console.log(input[999]);

let startingGuess = 0;
let originalFuelSpent = 0;

let result;

let sortedInput = input.sort(function(a, b) {
    return a - b;
});

for (let start = startingGuess; start <= 1991; start += 1) {
    let fuelSpent = 0;
    for (let index = 0; index < input.length; index += 1) {
        let steps = Math.abs(input[index] - start);
        for (let fuelStart = 0; fuelStart < steps; fuelStart += 1) {
            fuelSpent += 1 + (1 * fuelStart);
        }
    }

    if (start == startingGuess) {
        originalFuelSpent = fuelSpent;
    }
    if (fuelSpent <= originalFuelSpent) {
        originalFuelSpent = fuelSpent;
    } else {
        result = originalFuelSpent;
        break;
    }
}

console.log(`Fuel spent: ${result}`);
