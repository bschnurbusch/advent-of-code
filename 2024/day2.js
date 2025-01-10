const input = [];

let result = 0;

for (let i = 0; i < input.length; i += 1) {
  const report = input[i].split(' ');
  for (let j = 0; j < report.length; j += 1) {
    report[j] = parseInt(report[j], 10);
  }

  const direction = Math.sign(report[1] - report[0]);
  if (direction !== 1 && direction !== -1) {
    continue;
  }

  let goodReport = true;
  for (let j = 1; j < report.length; j += 1) {
    const currentDirection = Math.sign(report[j] - report[j - 1]);
    if (currentDirection !== direction || currentDirection === 0 || currentDirection === -0) {
      goodReport = false;
      break;
    }

    if (Math.abs(report[j] - report[j - 1]) > 3) {
      goodReport = false;
      break;
    }
  }

  if (goodReport) {
    result += 1;
  }
}

console.log(`Result: ${result}`);

// PART TWO

result = 0;

for (let i = 0; i < input.length; i += 1) {
  const report = input[i].split(' ');
  for (let j = 0; j < report.length; j += 1) {
    report[j] = parseInt(report[j], 10);
  }
  
  let foundGoodReport = false;
  for (let k = 0; k < report.length; k += 1) {
    const newReport = report.toSpliced(k, 1);

    const direction = Math.sign(newReport[1] - newReport[0]);
    if (direction !== 1 && direction !== -1) {
      continue;
    }

    let goodReport = true;
    for (let j = 1; j < newReport.length; j += 1) {
      const currentDirection = Math.sign(newReport[j] - newReport[j - 1]);
      if (currentDirection !== direction || currentDirection === 0 || currentDirection === -0) {
        goodReport = false;
        break;
      }

      if (Math.abs(newReport[j] - newReport[j - 1]) > 3) {
        goodReport = false;
        break;
      }
    }

    if (goodReport) {
      foundGoodReport = true;
      break;
    }
  }

  if (foundGoodReport) {
    result += 1;
  }
}

console.log(`Result part two: ${result}`);