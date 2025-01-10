const input = [];



function translate(inputCoords) {
  let translateArray = [];
  translateArray.push(inputCoords);

  // rotate around z +
  // for y ^, x >
  // this one is the given input

  // for y >, x v
  let rebuildArray1 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = inputCoords[translateIndex][1] * -1;
    let newY = inputCoords[translateIndex][0];
    let newZ = inputCoords[translateIndex][2];
    rebuildArray1[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray1);

  // for y v, < x
  let rebuildArray2 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = inputCoords[translateIndex][0] * -1;
    let newY = inputCoords[translateIndex][1] * -1;
    let newZ = inputCoords[translateIndex][2];
    rebuildArray2[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray2);

  // for < y, x ^
  let rebuildArray3 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = rebuildArray1[translateIndex][0] * -1;
    let newY = rebuildArray1[translateIndex][1] * -1;
    let newZ = rebuildArray1[translateIndex][2];
    rebuildArray3[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray3);


  // ===========================
  // rotate around z -
  // ===========================
  // for x >, y v
  let rebuildArray4 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = inputCoords[translateIndex][0];
    let newY = inputCoords[translateIndex][1] * -1;
    let newZ = inputCoords[translateIndex][2] * -1;
    rebuildArray4[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray4);

  // for x v, < y
  let rebuildArray5 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = rebuildArray4[translateIndex][1];
    let newY = rebuildArray4[translateIndex][0] * -1;
    let newZ = rebuildArray4[translateIndex][2];
    rebuildArray5[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray5);

  // for < x, y ^
  let rebuildArray6 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = rebuildArray4[translateIndex][0] * -1;
    let newY = rebuildArray4[translateIndex][1] * -1;
    let newZ = rebuildArray4[translateIndex][2];
    rebuildArray6[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray6);

  // for x ^, y >
  let rebuildArray7 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = rebuildArray5[translateIndex][0] * -1;
    let newY = rebuildArray5[translateIndex][1] * -1;
    let newZ = rebuildArray5[translateIndex][2];
    rebuildArray7[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray7);


  // ===========================
  // rotate around y +
  // ===========================
  // for z- ^, x >
  let rebuildArray8 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = inputCoords[translateIndex][0];
    let newY = inputCoords[translateIndex][2];
    let newZ = inputCoords[translateIndex][1] * -1;
    rebuildArray8[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray8);

  // for z- >, x v
  let rebuildArray9 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = rebuildArray8[translateIndex][2];
    let newY = rebuildArray8[translateIndex][1];
    let newZ = rebuildArray8[translateIndex][0] * -1;
    rebuildArray9[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray9);

  // for z- v, < x
  let rebuildArray10 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = rebuildArray8[translateIndex][0] * -1;
    let newY = rebuildArray8[translateIndex][1];
    let newZ = rebuildArray8[translateIndex][2] * -1;
    rebuildArray10[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray10);

  // for < z-, x^
  let rebuildArray11 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = rebuildArray9[translateIndex][0] * -1;
    let newY = rebuildArray9[translateIndex][1];
    let newZ = rebuildArray9[translateIndex][2] * -1;
    rebuildArray11[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray11);


  // ===========================
  // rotate around y -
  // ===========================
  // for z ^, x >
  let rebuildArray12 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = inputCoords[translateIndex][0];
    let newY = inputCoords[translateIndex][2] * -1;
    let newZ = inputCoords[translateIndex][1];
    rebuildArray12[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray12);

  // for z >, x v
  let rebuildArray13 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = rebuildArray12[translateIndex][2] * -1;
    let newY = rebuildArray12[translateIndex][1];
    let newZ = rebuildArray12[translateIndex][0];
    rebuildArray13[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray13);

  // for z v, < x
  let rebuildArray14 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = rebuildArray12[translateIndex][0] * -1;
    let newY = rebuildArray12[translateIndex][1];
    let newZ = rebuildArray12[translateIndex][2] * -1;
    rebuildArray14[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray14);

  // for < z, x ^
  let rebuildArray15 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = rebuildArray13[translateIndex][0] * -1;
    let newY = rebuildArray13[translateIndex][1];
    let newZ = rebuildArray13[translateIndex][2] * -1;
    rebuildArray15[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray15);


  // ===========================
  // rotate around x +
  // ===========================
  // for y ^, z- >
  let rebuildArray16 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = inputCoords[translateIndex][2];
    let newY = inputCoords[translateIndex][1];
    let newZ = inputCoords[translateIndex][0] * -1;
    rebuildArray16[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray16);

  // for y >, z- v
  let rebuildArray17 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = rebuildArray16[translateIndex][0];
    let newY = rebuildArray16[translateIndex][2] * -1;
    let newZ = rebuildArray16[translateIndex][1];
    rebuildArray17[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray17);

  // for y v, < z-
  let rebuildArray18 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = rebuildArray16[translateIndex][0];
    let newY = rebuildArray16[translateIndex][1] * -1;
    let newZ = rebuildArray16[translateIndex][2] * -1;
    rebuildArray18[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray18);

  // for < y, z- ^
  let rebuildArray19 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = rebuildArray17[translateIndex][0];
    let newY = rebuildArray17[translateIndex][1] * -1;
    let newZ = rebuildArray17[translateIndex][2] * -1;
    rebuildArray19[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray19);


  // ===========================
  // rotate around x -
  // ===========================
  // for y ^, z >
  let rebuildArray20 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = inputCoords[translateIndex][2] * -1;
    let newY = inputCoords[translateIndex][1];
    let newZ = inputCoords[translateIndex][0];
    rebuildArray20[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray20);

  // for y >, z v
  let rebuildArray21 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = rebuildArray20[translateIndex][0];
    let newY = rebuildArray20[translateIndex][2];
    let newZ = rebuildArray20[translateIndex][1] * -1;
    rebuildArray21[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray21);

  // for y v, < z
  let rebuildArray22 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = rebuildArray20[translateIndex][0];
    let newY = rebuildArray20[translateIndex][1] * -1;
    let newZ = rebuildArray20[translateIndex][2] * -1;
    rebuildArray22[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray22);

  // for < y, z ^
  let rebuildArray23 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = rebuildArray21[translateIndex][0];
    let newY = rebuildArray21[translateIndex][1] * -1;
    let newZ = rebuildArray21[translateIndex][2] * -1;
    rebuildArray23[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray23);


  return translateArray;
}

let test = [
[653,279,-501],
[679,389,-558],
[450,-411,508],
[-695,711,321],
[-488,-362,828],
[617,622,535],
[-596,-479,787],
[728,-588,-541],
[616,666,636],
[-519,-440,-646],
[469,-429,698],
[-635,554,281],
[640,303,-449],
[-770,512,-877],
[-529,-488,839],
[-786,405,-744],
[767,-717,-435],
[548,579,606],
[790,-625,-462],
[-720,477,-784],
[377,-427,714],
[-568,-589,-703],
[-84,-26,-131],
[-732,508,283],
[-563,-492,-674],
];


// let result = translate(test);
// console.log(result.length);
// console.log(result);



let translatedInput = [];

for (let index = 1; index < input.length; index += 1) {
  translatedInput.push(translate(input[index]));
}
translatedInput.unshift(input[0]);


let scannerCoords = new Array(38);
scannerCoords[0] = [0, 0, 0];
for (let index = 1; index < scannerCoords.length; index += 1) {
  scannerCoords[index] = [,,];
}


let indexsToCheck = new Array(38);
for (let index = 0; index < indexsToCheck.length; index += 1) {
  indexsToCheck[index] = index;
}

function findScannerMatch(baseScanner) {
  // console.log(`base scanner: ${baseScanner}`);
  // indexsToCheck.splice(indexsToCheck.indexOf(baseScanner), 1);
  // console.log(`Indexs to check: ${indexsToCheck}`);

  for (let indexToCheck = 0; indexToCheck < indexsToCheck.length; indexToCheck += 1) {
    // console.log(`Checking against index: ${indexsToCheck[otherScannerIndex]}`);
    let otherScannerIndex = indexsToCheck[indexToCheck];
    let stepsToTake = [];
    for (let originalIndex = 0; originalIndex < translatedInput[baseScanner].length; originalIndex += 1) {
      stepsToTake = [];
      for (let pairIndex = 0; pairIndex < translatedInput[baseScanner].length; pairIndex += 1) {
        if (originalIndex != pairIndex) {
          let xSteps = translatedInput[baseScanner][pairIndex][0] - translatedInput[baseScanner][originalIndex][0];
          let ySteps = translatedInput[baseScanner][pairIndex][1] - translatedInput[baseScanner][originalIndex][1];
          let zSteps = translatedInput[baseScanner][pairIndex][2] - translatedInput[baseScanner][originalIndex][2];
          stepsToTake.push([xSteps, ySteps, zSteps]);
        }
      }
      for (let otherTranslatedIndex = 0; otherTranslatedIndex < translatedInput[otherScannerIndex].length; otherTranslatedIndex += 1) {
        if (typeof translatedInput[otherScannerIndex][0][0] == 'number') {
          break;
        }
        for (let otherOriginalIndex = 0; otherOriginalIndex < translatedInput[otherScannerIndex][otherTranslatedIndex].length; otherOriginalIndex += 1) {
          let checkCoords = [];
          for (let stepsIndex = 0; stepsIndex < stepsToTake.length; stepsIndex += 1) {
            let newX = translatedInput[otherScannerIndex][otherTranslatedIndex][otherOriginalIndex][0] + stepsToTake[stepsIndex][0];
            let newY = translatedInput[otherScannerIndex][otherTranslatedIndex][otherOriginalIndex][1] + stepsToTake[stepsIndex][1];
            let newZ = translatedInput[otherScannerIndex][otherTranslatedIndex][otherOriginalIndex][2] + stepsToTake[stepsIndex][2];
            checkCoords.push([newX, newY, newZ]);
          }

          let matchCount = 0;
          let foundMatch = false;
          for (let checkCoordIndex = 0; checkCoordIndex < checkCoords.length; checkCoordIndex += 1) {
            for (let compareIndex = 0; compareIndex < translatedInput[otherScannerIndex][otherTranslatedIndex].length; compareIndex += 1) {
              if (translatedInput[otherScannerIndex][otherTranslatedIndex][compareIndex][0] == checkCoords[checkCoordIndex][0] && translatedInput[otherScannerIndex][otherTranslatedIndex][compareIndex][1] == checkCoords[checkCoordIndex][1] && translatedInput[otherScannerIndex][otherTranslatedIndex][compareIndex][2] == checkCoords[checkCoordIndex][2]) {
                matchCount += 1;
                // console.log('found one match');
                break;
              }
            }
            if (matchCount >= 11) {
              // this is the right orientation for the scanner and it overlaps with scanner0
              // console.log('found a big match');
              // console.log(`Scanner: ${baseScanner}, matched with scanner: ${otherScannerIndex}, using orientation: ${otherTranslatedIndex}`);
              foundMatch = true;
              break;
            }
          }

          if (foundMatch == true) {
            // determine x,y,z of the scanner
            scannerCoords[otherScannerIndex][0] = translatedInput[baseScanner][originalIndex][0] + (translatedInput[otherScannerIndex][otherTranslatedIndex][otherOriginalIndex][0] * -1);
            scannerCoords[otherScannerIndex][1] = translatedInput[baseScanner][originalIndex][1] + (translatedInput[otherScannerIndex][otherTranslatedIndex][otherOriginalIndex][1] * -1);
            scannerCoords[otherScannerIndex][2] = translatedInput[baseScanner][originalIndex][2] + (translatedInput[otherScannerIndex][otherTranslatedIndex][otherOriginalIndex][2] * -1);

            // splice out other coord sets for this scanner
            let newCoords = [];
            for (let newCoordIndex = 0; newCoordIndex < translatedInput[otherScannerIndex][otherTranslatedIndex].length; newCoordIndex += 1) {
              let adjustedX = translatedInput[otherScannerIndex][otherTranslatedIndex][newCoordIndex][0] + scannerCoords[otherScannerIndex][0];
              let adjustedY = translatedInput[otherScannerIndex][otherTranslatedIndex][newCoordIndex][1] + scannerCoords[otherScannerIndex][1];
              let adjustedZ = translatedInput[otherScannerIndex][otherTranslatedIndex][newCoordIndex][2] + scannerCoords[otherScannerIndex][2];
              newCoords.push([adjustedX, adjustedY, adjustedZ]);
            }

            translatedInput[otherScannerIndex] = newCoords;

            // run again with matched scanner as the base
            findScannerMatch(otherScannerIndex);
            break;
          }
        }
      }
    }
  }
}

findScannerMatch(0);
console.log(translatedInput);
// console.log(translatedInput[0].length);
// console.log(translatedInput[1].length);
// console.log(translatedInput[2].length);
// console.log(translatedInput[25].length);
// console.log(translatedInput[31]);

let uniqueBeacons = [];

for (let index = 0; index < translatedInput.length; index += 1) {
  for (let coordIndex = 0; coordIndex < translatedInput[index].length; coordIndex += 1) {
    let addThisPoint = true;
    for (let checkIndex = 0; checkIndex < uniqueBeacons.length; checkIndex +=1) {
      if (translatedInput[index][coordIndex][0] == uniqueBeacons[checkIndex][0] && translatedInput[index][coordIndex][1] == uniqueBeacons[checkIndex][1] && translatedInput[index][coordIndex][2] == uniqueBeacons[checkIndex][2]) {
        addThisPoint = false;
      }
    }

    if (addThisPoint == true) {
      uniqueBeacons.push([translatedInput[index][coordIndex][0], translatedInput[index][coordIndex][1], translatedInput[index][coordIndex][2]]);
    }
  }
}

// console.log(`Unique beacons? ${uniqueBeacons.length}`);

// console.log(scannerCoords);
let distance = [];

for (let index = 0; index < scannerCoords.length - 1; index += 1) {
  for (let compareIndex = index + 1; compareIndex < scannerCoords.length; compareIndex += 1) {
    let distanceX;
    let distanceY;
    let distanceZ;

    if (Math.sign(scannerCoords[index][0]) == Math.sign(scannerCoords[compareIndex][0])) {
      distanceX = Math.abs(Math.abs(scannerCoords[index][0]) - Math.abs(scannerCoords[compareIndex][0]));
    } else {
      distanceX = Math.abs(scannerCoords[index][0]) + Math.abs(scannerCoords[compareIndex][0]);
    }

    if (Math.sign(scannerCoords[index][1]) == Math.sign(scannerCoords[compareIndex][1])) {
      distanceY = Math.abs(Math.abs(scannerCoords[index][1]) - Math.abs(scannerCoords[compareIndex][1]));
    } else {
      distanceY = Math.abs(scannerCoords[index][1]) + Math.abs(scannerCoords[compareIndex][1]);
    }

    if (Math.sign(scannerCoords[index][2]) == Math.sign(scannerCoords[compareIndex][2])) {
      distanceZ = Math.abs(Math.abs(scannerCoords[index][2]) - Math.abs(scannerCoords[compareIndex][2]));
    } else {
      distanceZ = Math.abs(scannerCoords[index][2]) + Math.abs(scannerCoords[compareIndex][2]);
    }

    // let distanceX = scannerCoords[index][0] + (scannerCoords[compareIndex][0] * -1);
    // let distanceY = scannerCoords[index][1] + (scannerCoords[compareIndex][1] * -1);
    // let distanceZ = scannerCoords[index][2] + (scannerCoords[compareIndex][2] * -1);
    let newDistance = distanceX + distanceY + distanceZ;
    distance.push(newDistance);
  }
}

distance.sort(function(a, b) {
  return a - b;
});

console.log(distance);
console.log(distance[distance.length - 1]);
