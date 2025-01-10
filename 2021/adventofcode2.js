const input = []
let horizontal = 0;
let depth = 0;
let aim = 0;

for (let index = 0; index < input.length; index += 1) {
  const directions = input[index].split(' ');
  if (directions[0] == 'forward') {
    horizontal += parseInt(directions[1]);
    depth += aim * parseInt(directions[1]);
  } else if (directions[0] == 'up') {
    aim -= parseInt(directions[1]);
  } else if (directions[0] == 'down') {
    aim += parseInt(directions[1]);
  }
}

console.log(`Horizontal: ${horizontal}`);
console.log(`Depth: ${depth}`);
console.log(`Combined: ${horizontal * depth}`);
