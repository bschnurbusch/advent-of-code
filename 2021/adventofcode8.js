const input = [
  ];

  // const input = [
  //   'be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb | fdgacbe cefdb cefbgd gcbe',
  //   'edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | fcgedb cgb dgebacf gc',
  //   'fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef | cg cg fdcagb cbg',
  //   'fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega | efabcd cedba gadfec cb',
  //   'aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga | gecf egdcabf bgf bfgea',
  //   'fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf | gebdcfa ecba ca fadegcb',
  //   'dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf | cefg dcbef fcge gbcadfe',
  //   'bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd | ed bcgafe cdgba cbgef',
  //   'egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg | gbdfcae bgc cg cgb',
  //   'gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc | fgae cfgab fg bagce',
  //   ]

  // const input = [
  //   'fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega | efabcd cedba gadfec cb',
  //   ]
// const input = ['acedgfb cdfbe gcdfa fbcad dab cefabd cdfgeb eafb cagedb ab | cdfeb fcadb cdfeb cdbaf'];
  let finalOrder = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let resultNumber = [];

  for (let index = 0; index < input.length; index += 1) {
    input[index] = input[index].split('|');
  }

  for (let index = 0; index < input.length; index += 1) {
    input[index][1] = input[index][1].trim();
    input[index][0] = input[index][0].trim();
    let outputArray = input[index][1].split(' ');
    let inputArray = input[index][0].split(' ');
    // for (let outputIndex = 0; outputIndex < outputArray.length; outputIndex += 1) {
    //   if (outputArray[outputIndex].length == 2 || outputArray[outputIndex].length == 3 || outputArray[outputIndex].length == 4 || outputArray[outputIndex].length == 7) {
    //     result += 1;
    //   }
    // }
    let translation = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (let inputIndex = 0; inputIndex < inputArray.length; inputIndex += 1) {
      if (inputArray[inputIndex].length == 2) {
        translation[1] = inputArray[inputIndex];
        translation[1] = translation[1].split('');
        translation[1].sort();
      }
      if (inputArray[inputIndex].length == 3) {
        translation[7] = inputArray[inputIndex];
        translation[7] = translation[7].split('');
        translation[7].sort();
      }
      if (inputArray[inputIndex].length == 4) {
        translation[4] = inputArray[inputIndex];
        translation[4] = translation[4].split('');
        translation[4].sort();
      }
      if (inputArray[inputIndex].length == 7) {
        translation[8] = inputArray[inputIndex];
        translation[8] = translation[8].split('');
        translation[8].sort();
      }
    }
    // console.log(translation);
    // console.log(translation[1]);
    // console.log(translation[7]);
    for (let numberIndex = 0; numberIndex < translation[7].length; numberIndex += 1) {
      if (!translation[1].includes(translation[7][numberIndex])) {
        finalOrder[1] = translation[7][numberIndex];
      }
    }
    // console.log(`Final Order 1: ${finalOrder[1]}`);

    let fiveOptions = [];
    for (let fiveIndex = 0; fiveIndex < translation[4].length; fiveIndex += 1) {
      if (!translation[1].includes(translation[4][fiveIndex])) {
        fiveOptions.push(translation[4][fiveIndex]);
      }
    }
    // console.log(`Five options: ${fiveOptions}`);

    // FINDING NUMBER 3
    for (let inputIndex = 0; inputIndex < inputArray.length; inputIndex += 1) {
      let threeCheck = inputArray[inputIndex].split('');
      let threeCombo = [finalOrder[1], translation[1][0], translation[1][1]];
      threeCombo.sort();
      // if (inputArray[inputIndex].length == 5 && inputArray[inputIndex].includes(threeCombo[0]) && inputArray[inputIndex].includes(threeCombo[1]) && inputArray[inputIndex].includes(threeCombo[2])) {
      if (threeCheck.length == 5 && threeCheck.includes(finalOrder[1]) && threeCheck.includes(translation[1][0]) && threeCheck.includes(translation[1][1])) {
        // translation[3] = inputArray[inputIndex];
        // translation[3] = translation[3].split('');
        // translation[3].sort();
        translation[3] = threeCheck;
        translation[3].sort();
        for (let finalFiveIndex = 0; finalFiveIndex < translation[3].length; finalFiveIndex += 1) {
          if (translation[3][finalFiveIndex] != finalOrder[1] && translation[3][finalFiveIndex] != translation[1][0] && translation[3][finalFiveIndex] != translation[1][1] && translation[3][finalFiveIndex] != fiveOptions[0] && translation[3][finalFiveIndex] != fiveOptions[1]) {
            finalOrder[5] = translation[3][finalFiveIndex];
          }
        }
      }
    }
    // console.log(`Final order 5: ${finalOrder[5]}`);

    // FINDING NUMBER 5
    for (let inputIndex = 0; inputIndex < inputArray.length; inputIndex += 1) {
      if (inputArray[inputIndex].length == 5 && inputArray[inputIndex].includes(finalOrder[1]) && inputArray[inputIndex].includes(fiveOptions[0]) && inputArray[inputIndex].includes(fiveOptions[1]) && inputArray[inputIndex].includes(finalOrder[5])) {
        translation[5] = inputArray[inputIndex];
        translation[5] = translation[5].split('');
        translation[5].sort();
      }
    }

    
    // FINDING NUMBER 2
    for (let inputIndex = 0; inputIndex < inputArray.length; inputIndex += 1) {
      if (inputArray[inputIndex].length == 5) {
        let twoCheck = inputArray[inputIndex].split('');
        twoCheck.sort();
        // console.log(twoCheck);
        // console.log(`3: ${translation[3]}`);
        // console.log(`5: ${translation[5]}`);
        // console.log(twoCheck.join('') == translation[3].join(''));
        // console.log(twoCheck.join('') == translation[5].join(''));
        if (twoCheck.join('') != translation[3].join('') && twoCheck.join('') != translation[5].join('')) {
          translation[2] = twoCheck;
        }
      }
    }
    // console.log(`Translation 2: ${translation[2]}`);

    // FINDING NUMBER 9
    for (let inputIndex = 0; inputIndex < inputArray.length; inputIndex += 1) {
      if (inputArray[inputIndex].length == 6) {
        let nineCheck = inputArray[inputIndex].split('');
        if (nineCheck.includes(fiveOptions[0]) && nineCheck.includes(fiveOptions[1]) && nineCheck.includes(translation[1][0]) && nineCheck.includes(translation[1][1]) && nineCheck.includes(finalOrder[1]) && nineCheck.includes(finalOrder[5])) {
          translation[9] = nineCheck;
          translation[9].sort();
        }
      }
    }

    // FINDING NUMBER 6
    for (let inputIndex = 0; inputIndex < inputArray.length; inputIndex += 1) {
      if (inputArray[inputIndex].length == 6) {
        let sixCheck = inputArray[inputIndex].split('');
        if ((!sixCheck.includes(translation[1][0]) && sixCheck.includes(translation[1][1])) || (sixCheck.includes(translation[1][0]) && !sixCheck.includes(translation[1][1]))) {
          translation[6] = sixCheck;
          translation[6].sort();
        }
      }
    }

    // FINDING NUMBER 0
    for (let inputIndex = 0; inputIndex < inputArray.length; inputIndex += 1) {
      let zeroCheck = inputArray[inputIndex].split('');
      zeroCheck.sort();
      if (zeroCheck.length == 6) {
        let zeroFound = true;
        for (let translateIndex = 1; translateIndex < translation.length; translateIndex += 1) {
          // console.log(`Translate: ${translation[translateIndex]}`);
          // console.log(`Zero check: ${zeroCheck}`);
          // console.log(translation[translateIndex] == zeroCheck);
          // console.log(`Translate length: ${translation[translateIndex].length}`);
          // console.log(`Zero check length: ${zeroCheck.length}`);
          if (translation[translateIndex].join('') == zeroCheck.join('')) {
            // console.log('setting to false');
            zeroFound = false;
          }
        }
        if (zeroFound == true) {
          translation[0] = zeroCheck;
        }
      }
    }

    // CALCULATE
    let result = [];
    let resultString = '';
    // console.log(outputArray.length);
    // console.log(`Output array: ${outputArray}`);
    for (let outputIndex = 0; outputIndex < outputArray.length; outputIndex += 1) {
      let outputTranslated = outputArray[outputIndex].split('');
      outputTranslated.sort();
      for (let translateIndex = 0; translateIndex < translation.length; translateIndex += 1) {
        if (outputTranslated.join('') == translation[translateIndex].join('')) {
          // console.log(`Adding ${translateIndex}`);
          // console.log(`part 1: ${outputTranslated.join('')}`);
          // console.log(`part 2: ${translation[translateIndex].join('')}`);
          result.push(translateIndex);
          resultString = result.join('');
        }
      }
    }
    resultNumber.push(parseInt(resultString));


    
    // console.log(translation);
    // console.log(result);
    // console.log(resultString);
    // console.log(parseInt(resultString));
    // console.log(resultNumber);
  }

  let finalResult = 0;
  // console.log(resultNumber.length);
  // console.log(resultNumber);
  for (let index = 0; index < resultNumber.length; index += 1) {
    finalResult += resultNumber[index];
  }
  console.log(`Final addition: ${finalResult}`);

  // console.log(result);

