let input = '';

// let input = '8A004A801A8002F478';
// let input = '620080001611562C8802118E34';
// let input = 'C0015000016115A2E0802F182340';
// let input = 'A0016C880162017C3686B18A3D4780';
// let input = 'C200B40A82';
// let input = '04005AC33890';
// let input = '880086C3E88112';
// let input = 'CE00C43D881120';
// let input = 'D8005AC2A8F0';
// let input = 'F600BC2D8F';
// let input = '9C005AC2F8F0';
// let input = '9C0141080250320F1802104A08';
// console.log(input.length);

let reference = {
}

let newInput = '';

let versionCount = 0;


input = input.split('');

for (let index = 0; index < input.length; index += 1) {
  newInput += reference[input[index]];
}

// console.log(newInput);
// console.log(newInput.length);

// console.log(newInput[0] + newInput[1] + newInput[2]);
// console.log(newInput[3] + newInput[4] + newInput[5]);
// console.log(newInput[6]);

// function evaluateOperator(lengthId, startingIndex) {
//   if (lengthId == '0') {
//     let newIndex = startingIndex + 15;
//     let findBitsLength = '';
//     for (let bitsIndex = 0; bitsIndex < startingIndex + 15; bitsIndex += 1) {
//       findBitsLength += newInput[bitsIndex];
//     }

//     let bitsLength = parseInt(findBitsLength, 2);
//     for (let futureBitsIndex = 1; futureBitsIndex <= bitsLength; futureBitsIndex += 1) {
//       let packetVersion = parseInt(newInput[startingIndex + (15 * futureBitsIndex)] + newInput[startingIndex + (16 * futureBitsIndex)] + newInput[startingIndex + (17 * futureBitsIndex)], 2);
//       let packetType = parseInt(newInput[startingIndex + (18 * futureBitsIndex)] + newInput[startingIndex + (19 * futureBitsIndex)] + newInput[startingIndex + (20 * futureBitsIndex)], 2);
//       return evaluatePackets(packetVersion, packetType, newIndex);
//     }
//   } else if (lengthId == '1') {
//     let newIndex = startingIndex + 11;
//     let findSubPacks = '';
//     for (let subIndex = 0; subIndex < startingIndex + 11; subIndex += 1) {
//       findSubPacks += newInput[subIndex];
//     }

//     let subPacks = parseInt(findSubPacks, 2);
//     for (let futureSubIndex = 1; futureSubIndex <= subPacks; futureSubIndex += 1) {
//       let packetVersion = parseInt(newInput[startingIndex + (11 * futureSubIndex)] + newInput[startingIndex + (12 * futureSubIndex)] + newInput[startingIndex + (13 * futureSubIndex)], 2);
//       let packetType = parseInt(newInput[startingIndex + (14 * futureSubIndex)] + newInput[startingIndex + (15 * futureSubIndex)] + newInput[startingIndex + (16 * futureSubIndex)], 2);
//       return evaluatePackets(packetVersion, packetType, newIndex);
//     }
//   }
// }


// function evaluatePackets(packetVersion, packetType, startingIndex) {
//   let newIndex = startingIndex + 7
//   versionCount += packetVersion;
//   if (packetType != 4) {
//     let lengthId = newInput[startingIndex + 6];
//     return evaluateOperator(lengthId, newIndex);
//   } else {
//     return;
//   }
// }



// function evaluateOperator(lengthId, depth) {
//   if (lengthId == '0') {
//     let findBitsLength = '';
//     for (let bitsIndex = 0; bitsIndex < 15; bitsIndex += 1) {
//       findBitsLength += newInput[bitsIndex];
//     }

//     let bitsLength = parseInt(findBitsLength, 2);
//     for (let futureBitsIndex = 1; futureBitsIndex <= bitsLength; futureBitsIndex += 1) {
//       let packetVersion = parseInt(newInput[15] + newInput[16] + newInput[17], 2);
//       let packetType = parseInt(newInput[18] + newInput[19] + newInput[20], 2);
//       newInput = newInput.slice(15);
//       return evaluatePackets(packetVersion, packetType);
//     }
//   } else if (lengthId == '1') {
//     let findSubPacks = '';
//     for (let subIndex = 0; subIndex < 11; subIndex += 1) {
//       findSubPacks += newInput[subIndex];
//     }

//     let subPacks = parseInt(findSubPacks, 2);
//     for (let futureSubIndex = 1; futureSubIndex <= subPacks; futureSubIndex += 1) {
//       let packetVersion = parseInt(newInput[11] + newInput[12] + newInput[13], 2);
//       let packetType = parseInt(newInput[14] + newInput[15] + newInput[16], 2);
//       newInput = newInput.slice(11);
//       return evaluatePackets(packetVersion, packetType);
//     }
//   }
// }


// function evaluatePackets(packetVersion, packetType, depth) {
//   console.log(`Evaluating packet ${packetVersion}, type: ${packetType}`);
//   if (packetVersion) {
//     versionCount += packetVersion;
//   }
//   if (packetType != 4) {
//     let lengthId = newInput[6];

//     if (packetType == 0) {

//     } else if (packetType == 1) {
//     } else if (packetType == 2) {

//     } else if (packetType == 3) {

//     } else if (packetType == 5) {

//     } else if (packetType == 6) {

//     } else if (packetType == 7) {

//     }

//     newInput = newInput.slice(7);
//     return evaluateOperator(lengthId);
//   } else {
//     newInput = newInput.slice(6);
//     while (newInput[0] == '1') {
//       newInput = newInput.slice(5)
//     }
//     newInput = newInput.slice(5);
//     let newPacketVersion = parseInt(newInput[0] + newInput[1] + newInput[2], 2);
//     let newPacketType = parseInt(newInput[3] + newInput[4] + newInput[5], 2);
//     return evaluatePackets(newPacketVersion, newPacketType);
//   }
// }


// TRYING PART 2
// function evaluateOperator(lengthId, depth) {
//   if (lengthId == '0') {
//     let findBitsLength = '';
//     for (let bitsIndex = 0; bitsIndex < 15; bitsIndex += 1) {
//       findBitsLength += newInput[bitsIndex];
//     }

//     let bitsLength = parseInt(findBitsLength, 2);
//     for (let futureBitsIndex = 1; futureBitsIndex <= bitsLength; futureBitsIndex += 1) {
//       let packetVersion = parseInt(newInput[15] + newInput[16] + newInput[17], 2);
//       let packetType = parseInt(newInput[18] + newInput[19] + newInput[20], 2);
//       newInput = newInput.slice(15);
//       return evaluatePackets(packetVersion, packetType);
//     }
//   } else if (lengthId == '1') {
//     let findSubPacks = '';
//     for (let subIndex = 0; subIndex < 11; subIndex += 1) {
//       findSubPacks += newInput[subIndex];
//     }

//     let subPacks = parseInt(findSubPacks, 2);
//     for (let futureSubIndex = 1; futureSubIndex <= subPacks; futureSubIndex += 1) {
//       let packetVersion = parseInt(newInput[11] + newInput[12] + newInput[13], 2);
//       let packetType = parseInt(newInput[14] + newInput[15] + newInput[16], 2);
//       newInput = newInput.slice(11);
//       return evaluatePackets(packetVersion, packetType);
//     }
//   }
// }


// function evaluatePackets(packetVersion, packetType, depth) {
//   console.log(`Evaluating packet ${packetVersion}, type: ${packetType}`);
//   if (packetVersion) {
//     versionCount += packetVersion;
//   }
//   if (packetType != 4) {
//     let lengthId = newInput[6];

//     if (packetType == 0) {

//     } else if (packetType == 1) {
//     } else if (packetType == 2) {

//     } else if (packetType == 3) {

//     } else if (packetType == 5) {

//     } else if (packetType == 6) {

//     } else if (packetType == 7) {

//     }

//     newInput = newInput.slice(7);
//     return evaluateOperator(lengthId);
//   } else {
//     let literal = '';
//     newInput = newInput.slice(6);
//     while (newInput[0] == '1') {
//       literal += newInput.slice(1, 5);
//       newInput = newInput.slice(5);
//     }
//     literal += newInput.slice(1, 5);
//     newInput = newInput.slice(5);
//     let returnedLiteral = parseInt(literal, 2);
//     let newPacketVersion = parseInt(newInput[0] + newInput[1] + newInput[2], 2);
//     let newPacketType = parseInt(newInput[3] + newInput[4] + newInput[5], 2);
//     evaluatePackets(newPacketVersion, newPacketType);
//     return literal;
//   }
// }



function evaluateString() {
  let packetType = parseInt(newInput[3] + newInput[4] + newInput[5], 2);
  if (isNaN(packetType)) {
    return;
  }
  // console.log(`Evaluating packet type ${packetType}`);

  // chop off packet version and packet type
  newInput = newInput.slice(6);

  // if type is 4, figure out literal and chop out what you used to calculate it
  if (packetType == 4) {
    let literalParts = '';
    let literal = 0;
    while (newInput[0] == 1) {
      literalParts += newInput.slice(1, 5);
      newInput = newInput.slice(5);
    }
    literalParts += newInput.slice(1, 5);
    newInput = newInput.slice(5);

    literal = parseInt(literalParts, 2);
    return literal
  }


  let operateType = newInput[0];

  // chop off operator type
  newInput = newInput.slice(1);

  let values = [];

  let finalCount = 0;

  // chop off number of bits that describe sub packets
  if (operateType == '1') {
    let subPackets = newInput.slice(0, 11);
    let numSubPackets = parseInt(subPackets, 2);
    newInput = newInput.slice(11);

    for (let subIndex = 0; subIndex < numSubPackets; subIndex += 1) {
      values.push(evaluateString());
    }
  } else if (operateType == '0') {
    let bitLength = newInput.slice(0, 15);
    // console.log(`Bit binary: ${bitLength}`);
    let numBitLength = parseInt(bitLength, 2);
    // console.log(`Num bit length: ${numBitLength}`);
    newInput = newInput.slice(15);

    // console.log(newInput);
    let originalStringLength = newInput.length;
    // console.log(`original length: ${originalStringLength}`);
    let choppedBits = 0;
    let count = 0;

    while (choppedBits != numBitLength) {
      values.push(evaluateString());
      choppedBits = originalStringLength - newInput.length;
      // console.log(`New: ${newInput}`);
      // console.log(`Chopped: ${choppedBits}`);
    }
  }




  if (packetType == 0) {
    for (let index = 0; index < values.length; index += 1) {
      finalCount += values[index];
    }
  } else if (packetType == 1) {
    if (values.length == 1) {
      finalCount = values[0];
    } else {
      finalCount = values[0];
      for (let index = 1; index < values.length; index += 1) {
        finalCount *= values[index];
      }
    }
  } else if (packetType == 2) {
    values.sort(function(a, b) {
      return a - b;
    });
    finalCount = values[0];
  } else if (packetType == 3) {
    values.sort(function(a, b) {
      return a - b;
    });
    finalCount = values[values.length - 1];
  } else if (packetType == 5) {
    finalCount = values[0] > values[1] ? 1 : 0;
  } else if (packetType == 6) {
    finalCount = values[1] > values[0] ? 1 : 0;
  } else if (packetType == 7) {
    finalCount = values[0] == values[1] ? 1 : 0;
  }

  return finalCount;
}

// evaluatePackets(3, 0, 0);

// console.log(`Version count: ${versionCount}`);
let answer = evaluateString();
console.log(`ANSWER: ${answer}`);
console.log(newInput);
