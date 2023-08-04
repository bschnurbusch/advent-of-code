let xOptions = [];

for (let xVel = 16; xVel <= 160; xVel += 1) {
  let lastX = 0;
  let initialX = xVel;
  while (initialX > 0 && (lastX + initialX <= 160)) {
    lastX += initialX;
    initialX -= 1;
  }

  if (lastX >= 128 && lastX <= 160) {
    xOptions.push(xVel);
  }
}

xOptions.sort(function(a, b) {
  return a - b;
});

console.log(xOptions);
console.log(xOptions.length);

let totalOptions = 0;

for (let xIndex = 0; xIndex < xOptions.length; xIndex += 1) {
  for (let yVel = -142; yVel <= 141; yVel += 1) {
    let lastX = 0;
    let lastY = 0;
    let initialX = xOptions[xIndex];
    let initialY = yVel;

    while ((lastX + initialX <= 160) && (lastY + initialY >= -142)) {
      lastX += initialX;
      lastY += initialY;

      if (initialX > 0) {
        initialX -= 1;
      }
      initialY -= 1;
    }

    if ((lastX >= 128 && lastX <= 160) && (lastY <= -88 && lastY >= -142)) {
      totalOptions += 1;
    }
  }
}

console.log(`Total options? ${totalOptions}`);
