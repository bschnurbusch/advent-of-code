const input = [];
let increaseCount = 0;

for (let index = 3; index < input.length; index += 1) {
  let currentWindow = input[index] + input[index - 1] + input[index - 2];
  let previousWindow = input[index - 1] + input[index - 2] + input[index - 3];
  if (currentWindow > previousWindow) {
    increaseCount += 1;
  }
}

console.log(`Increase count: ${increaseCount}`);
