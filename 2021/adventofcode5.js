const input = []
let xResults = [];
let xFinalCount = [];

let yResults = [];
let yFinalCount = [];

let count = 0;

let results = new Array(1000);
for (let index = 0; index < results.length; index += 1) {
  results[index] = new Array(1000);
}

for (let index = 0; index < input.length; index += 1) {
  input[index] = input[index].replace(/->/, '');
  input[index] = input[index].split('  ');
  const firstCoordsString = input[index][0].split(',');
  const firstCoordsX = parseInt(firstCoordsString[0]);
  const firstCoordsY = parseInt(firstCoordsString[1]);
  const secondCoordsString = input[index][1].split(',');
  const secondCoordsX = parseInt(secondCoordsString[0]);
  const secondCoordsY = parseInt(secondCoordsString[1]);

  if (firstCoordsX == secondCoordsX && firstCoordsY != secondCoordsY) {
    const startingPoint = firstCoordsY > secondCoordsY ? secondCoordsY : firstCoordsY;
    const endingPoint = firstCoordsY > secondCoordsY ? firstCoordsY : secondCoordsY;
    // console.log(`First coords: ${firstCoords}`);
    // console.log(`Second coords: ${secondCoords}`);
    // console.log(`Starting: ${startingPoint} -- Ending: ${endingPoint}`);

    for (let start = startingPoint; start <= endingPoint; start += 1) {
      if (yResults.includes(start) && !yFinalCount.includes(start)) {
        yFinalCount.push(start);
      }
      yResults.push(start);

      if (!results[firstCoordsX][start]) {
        results[firstCoordsX][start] = 1;
      } else {
        results[firstCoordsX][start] += 1;
      }
    }
  } else if (firstCoordsY == secondCoordsY && firstCoordsX != secondCoordsX) {
    const startingPoint = firstCoordsX > secondCoordsX ? secondCoordsX : firstCoordsX;
    const endingPoint = firstCoordsX > secondCoordsX ? firstCoordsX : secondCoordsX;
    // console.log(`First coords: ${firstCoords}`);
    // console.log(`Second coords: ${secondCoords}`);
    // console.log(`Starting: ${startingPoint} -- Ending: ${endingPoint}`);

    for (let start = startingPoint; start <= endingPoint; start += 1) {
      if (xResults.includes(start) && !xFinalCount.includes(start)) {
        xFinalCount.push(start);
      }
      xResults.push(start);

      if (!results[start][firstCoordsY]) {
        results[start][firstCoordsY] = 1;
      } else {
        results[start][firstCoordsY] += 1;
      }
    }
  } else {
    const xDirection = firstCoordsX - secondCoordsX > 0 ? -1 : 1;
    const yDirection = firstCoordsY - secondCoordsY > 0 ? -1 : 1;
    const stepsToTake = Math.abs(firstCoordsX - secondCoordsX);

    for (let start = 0; start <= stepsToTake; start += 1) {
      if (!results[firstCoordsX + (start * xDirection)][firstCoordsY + (start * yDirection)]) {
        results[firstCoordsX + (start * xDirection)][firstCoordsY + (start * yDirection)] = 1;
      } else {
        results[firstCoordsX + (start * xDirection)][firstCoordsY + (start * yDirection)] += 1;
      }
    }
  }
}

for (let xIndex = 0; xIndex < results.length; xIndex += 1) {
  for (let yIndex = 0; yIndex < results[xIndex].length; yIndex += 1) {
    if (results[xIndex][yIndex] >= 2) {
      count += 1;
    }
  }
}

// console.log(`Final count: ${xFinalCount.length} + ${yFinalCount.length} = ${xFinalCount.length + yFinalCount.length}`);
console.log(`Final count: ${count}`);
