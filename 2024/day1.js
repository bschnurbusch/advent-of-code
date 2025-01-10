const input = [];
let leftList = [];
let rightList = [];
let result = 0

for (let i = 0; i < input.length; i += 1) {
  leftList.push(input[i][0]);
  rightList.push(input[i][1]);
}

leftList.sort();
rightList.sort();

for (let i = 0; i < leftList.length; i += 1) {
  let distance = Math.abs(leftList[i] - rightList[i]);
  result += distance;
}

console.log(`Result: ${result}`);

// PART TWO
result = 0

for (let i = 0; i < leftList.length; i += 1) {
  const filterList = rightList.filter((value) => value === leftList[i]);
  const appearanceCount = filterList.length;
  const score = leftList[i] * appearanceCount;
  result += score;
}

console.log(`Result part 2: ${result}`);
