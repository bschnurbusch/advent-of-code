const input = [
    ];
    
    // let input = [
    // [[[0,[5,8]],[[1,7],[9,6]]],[[4,[1,2]],[[1,4],2]]],
    // [[[5,[2,8]],4],[5,[[9,9],0]]],
    // [6,[[[6,2],[5,6]],[[7,6],[4,7]]]],
    // [[[6,[0,7]],[0,9]],[4,[9,[9,0]]]],
    // [[[7,[6,4]],[3,[1,3]]],[[[5,5],1],9]],
    // [[6,[[7,3],[3,2]]],[[[3,8],[5,7]],4]],
    // [[[[5,4],[7,7]],8],[[8,3],8]],
    // [[9,3],[[9,9],[6,[4,9]]]],
    // [[2,[[7,7],7]],[[5,8],[[9,3],[0,2]]]],
    // [[[[5,2],5],[8,[3,7]]],[[5,[7,5]],[4,4]]],
    // ];
    
    // let fix = [
    // [[[0,[5,8]],[[1,7],[9,6]]],[[4,[1,2]],[[1,4],2]]],
    // [[[5,[2,8]],4],[5,[[9,9],0]]],
    // [6,[[[6,2],[5,6]],[[7,6],[4,7]]]],
    // [[[6,[0,7]],[0,9]],[4,[9,[9,0]]]],
    // [[[7,[6,4]],[3,[1,3]]],[[[5,5],1],9]],
    // [[6,[[7,3],[3,2]]],[[[3,8],[5,7]],4]],
    // [[[[5,4],[7,7]],8],[[8,3],8]],
    // [[9,3],[[9,9],[6,[4,9]]]],
    // [[2,[[7,7],7]],[[5,8],[[9,3],[0,2]]]],
    // [[[[5,2],5],[8,[3,7]]],[[5,[7,5]],[4,4]]],
    // ];
 
    function explode(inputArray) {
      let flatArray = inputArray.flat(3);
      let newArray = new Array(flatArray.length);
    
      for (let flatIndex = 0; flatIndex < flatArray.length; flatIndex += 1) {
        if (typeof flatArray[flatIndex] != 'number') {
          newArray[flatIndex] = [,];
          newArray[flatIndex][0] = flatArray[flatIndex].slice(0, 1)[0];
          newArray[flatIndex][1] = flatArray[flatIndex].slice(1, 2)[0];
        } else {
          newArray[flatIndex] = flatArray.slice(flatIndex, flatIndex + 1)[0];
        }
      }
      // console.log('from the top');
      // console.log(flatArray.length);
      // console.log(newArray.length);
      // console.dir(newArray, {depth: null});
      // console.dir(flatArray, {depth: null});
    
      for (let flatIndex = 0; flatIndex < flatArray.length; flatIndex += 1) {
        if (typeof flatArray[flatIndex] != 'number') {
          if (flatIndex > 0) {
            if (typeof flatArray[flatIndex - 1] == 'number') {
              // flatArray[flatIndex - 1] += flatArray[flatIndex][0];
              newArray[flatIndex - 1] = flatArray.slice(flatIndex - 1, flatIndex)[0] + flatArray[flatIndex].slice(0, 1)[0];
            }
          }
          if (flatIndex <= flatArray.length - 2) {
            if (typeof flatArray[flatIndex + 1] == 'number') {
              // flatArray[flatIndex + 1] += flatArray[flatIndex][1];
              // console.log(flatArray.slice(flatIndex + 1, 1)[0]);
              // console.log(flatArray[flatIndex].slice(1, 1)[0]);
              newArray[flatIndex + 1] = flatArray.slice(flatIndex + 1, flatIndex + 2)[0] + flatArray[flatIndex].slice(1, 2)[0];
            } else {
              // flatArray[flatIndex + 1][0] += flatArray[flatIndex][1];
              // console.log(flatArray[flatIndex + 1].slice(0, 1)[0]);
              // console.log(flatArray[flatIndex].slice(1, 2)[0]);
              newArray[flatIndex + 1][0] = flatArray[flatIndex + 1].slice(0, 1)[0] + flatArray[flatIndex].slice(1, 2)[0];
            }
          }
    
          // flatArray[flatIndex] = 0;
          newArray[flatIndex] = 0;
          break;
        }
      }
      // console.dir(newArray, {depth: null});
    
      // console.dir(input[0], {depth: null});
    
      let rebuild0 = inputArray.flat(0);
      let rebuild1 = inputArray.flat(1);
      let rebuild2 = inputArray.flat(2);
      let pushCount = 0;
    
      let rebuiltArray = [];
    
      for (let rebuildIndex = 0; rebuildIndex < rebuild2.length; rebuildIndex += 1) {
        if (typeof rebuild2[rebuildIndex] != 'number') {
          rebuild2[rebuildIndex] = [newArray[rebuildIndex + pushCount], newArray[rebuildIndex + pushCount + 1]];
          pushCount += 1;
        } else {
          rebuild2[rebuildIndex] = newArray[rebuildIndex + pushCount];
        }
      }
    
      pushCount = 0;
    
      for (let rebuildIndex = 0; rebuildIndex < rebuild1.length; rebuildIndex += 1) {
        if (typeof rebuild1[rebuildIndex] != 'number') {
          rebuild1[rebuildIndex] = [rebuild2[rebuildIndex + pushCount], rebuild2[rebuildIndex + pushCount + 1]];
          pushCount += 1;
        } else {
          rebuild1[rebuildIndex] = rebuild2[rebuildIndex + pushCount];
        }
      }
    
      pushCount = 0;
    
      for (let rebuildIndex = 0; rebuildIndex < rebuild0.length; rebuildIndex += 1) {
        if (typeof rebuild0[rebuildIndex] != 'number') {
          rebuild0[rebuildIndex] = [rebuild1[rebuildIndex + pushCount], rebuild1[rebuildIndex + pushCount + 1]];
          pushCount += 1;
        } else {
          rebuild0[rebuildIndex] = rebuild1[rebuildIndex + pushCount];
        }
      }
      // console.dir(input[0], {depth: null});
    
      return rebuild0;
    }
    
    let splitComplete = false;
    
    function split(inputArray) {
      let flatArray = inputArray.flat(3);
      for (let flatIndex = 0; flatIndex < flatArray.length; flatIndex += 1) {
        if (flatArray[flatIndex] >= 10) {
          let newLeft = Math.floor(flatArray[flatIndex] / 2);
          let newRight = Math.ceil(flatArray[flatIndex] / 2);
          flatArray[flatIndex] = [newLeft, newRight];
          break;
        }
      }
    
      let rebuild0 = inputArray.flat(0);
      let rebuild1 = inputArray.flat(1);
      let rebuild2 = inputArray.flat(2);
    
      let pushCount = 0;
    
      let rebuiltArray = [];
    
      for (let rebuildIndex = 0; rebuildIndex < rebuild2.length; rebuildIndex += 1) {
        if (typeof rebuild2[rebuildIndex] != 'number') {
          rebuild2[rebuildIndex] = [flatArray[rebuildIndex + pushCount], flatArray[rebuildIndex + pushCount + 1]];
          pushCount += 1;
        } else {
          rebuild2[rebuildIndex] = flatArray[rebuildIndex + pushCount];
        }
      }
    
      pushCount = 0;
    
      for (let rebuildIndex = 0; rebuildIndex < rebuild1.length; rebuildIndex += 1) {
        if (typeof rebuild1[rebuildIndex] != 'number') {
          rebuild1[rebuildIndex] = [rebuild2[rebuildIndex + pushCount], rebuild2[rebuildIndex + pushCount + 1]];
          pushCount += 1;
        } else {
          rebuild1[rebuildIndex] = rebuild2[rebuildIndex + pushCount];
        }
      }
    
      pushCount = 0;
    
      for (let rebuildIndex = 0; rebuildIndex < rebuild0.length; rebuildIndex += 1) {
        if (typeof rebuild0[rebuildIndex] != 'number') {
          rebuild0[rebuildIndex] = [rebuild1[rebuildIndex + pushCount], rebuild1[rebuildIndex + pushCount + 1]];
          pushCount += 1;
        } else {
          rebuild0[rebuildIndex] = rebuild1[rebuildIndex + pushCount];
        }
      }
      
    
      return rebuild0;
    }
    
    
    function findMag(inputArray) {
      let flatArray = inputArray.flat(3);
    
      let rebuild0 = inputArray.flat(0);
      let rebuild1 = inputArray.flat(1);
      let rebuild2 = inputArray.flat(2);
    
      let pushCount = 0;
    
      let rebuiltArray = [];
    
      for (let rebuildIndex = 0; rebuildIndex < rebuild2.length; rebuildIndex += 1) {
        if (typeof rebuild2[rebuildIndex] != 'number') {
          rebuild2[rebuildIndex] = (3 * rebuild2[rebuildIndex][0]) + (2 * rebuild2[rebuildIndex][1]);
        }
      }
    
      pushCount = 0;
    
      for (let rebuildIndex = 0; rebuildIndex < rebuild1.length; rebuildIndex += 1) {
        if (typeof rebuild1[rebuildIndex] != 'number') {
          rebuild1[rebuildIndex] = (3 * rebuild2[rebuildIndex + pushCount]) + (2 * rebuild2[rebuildIndex + pushCount + 1]);
          pushCount += 1;
        } else {
          rebuild1[rebuildIndex] = rebuild2[rebuildIndex + pushCount];
        }
      }
    
      pushCount = 0;
    
      for (let rebuildIndex = 0; rebuildIndex < rebuild0.length; rebuildIndex += 1) {
        if (typeof rebuild0[rebuildIndex] != 'number') {
          rebuild0[rebuildIndex] = (3 * rebuild1[rebuildIndex + pushCount]) + (2 * rebuild1[rebuildIndex + pushCount + 1]);
          pushCount += 1;
        } else {
          rebuild0[rebuildIndex] = rebuild1[rebuildIndex + pushCount];
        }
      }
      
    
      return rebuild0;
    }
    
    
    let highestAnswer = 0;
    let newInput = [];
    let manualCheck = [];
    
    for (let trialIndex = 0; trialIndex < input.length; trialIndex += 1) {
      for (let individualIndex = 0; individualIndex < input.length; individualIndex += 1) {
        if (individualIndex != trialIndex) {
          newInput.push([input[trialIndex].concat(), input[individualIndex].concat()]);
        }
      }
    }
    
    // console.dir(newInput, {depth: null});
    
    
    
    for (let trialIndex = 0; trialIndex < input.length; trialIndex += 1) {
      for (let individualIndex = 0; individualIndex < input.length; individualIndex += 1) {
        if (individualIndex != trialIndex) {
          // console.log(`Trying ${trialIndex} + ${individualIndex}`);
          // console.dir(input[trialIndex], {depth: null});
          // console.dir(input[individualIndex], {depth: null});
          let buildingInput = [input[trialIndex], input[individualIndex]];
          
          let done = false;
          while (done != true) {
            let testInput = buildingInput.flat(3);
            done = true;
            let stepDone = false;
    
            for (let testIndex = 0; testIndex < testInput.length; testIndex += 1) {
              if (typeof testInput[testIndex] != 'number') {
                buildingInput = explode(buildingInput);
                done = false;
                stepDone = true;
                
                break;
              }
            }
    
            if (stepDone == false) {
              for (let testIndex = 0; testIndex < testInput.length; testIndex += 1) {
                if (typeof testInput[testIndex] == 'number' && testInput[testIndex] >= 10) {
                  buildingInput = split(buildingInput);
                  splitComplete = false;
                  done = false;
                  
                  break;
                }
              }
            }
            
          }
          
    
    
          let finalArray = findMag(buildingInput);
          
          let finalAnswer = (3 * finalArray[0]) + (2 * finalArray[1]);
          // console.log(`interim answer ${finalAnswer}`);
          if (finalAnswer > highestAnswer) {
            highestAnswer = finalAnswer;
          }
        }
        
      }
      
    }
    
    
    
    // for (let trialIndex = 0; trialIndex < input.length; trialIndex += 1) {
    //       // console.log(`Trying ${trialIndex} + ${individualIndex}`);
    //       // console.dir(input[trialIndex], {depth: null});
    //       // console.dir(input[individualIndex], {depth: null});
    //       let buildingInput = input[trialIndex];
          
    //       let done = false;
    //       while (done != true) {
    //         let testInput = buildingInput.flat(3);
    //         done = true;
    //         let stepDone = false;
    
    //         for (let testIndex = 0; testIndex < testInput.length; testIndex += 1) {
    //           if (typeof testInput[testIndex] != 'number') {
    //             buildingInput = explode(buildingInput);
    //             done = false;
    //             stepDone = true;
                
    //             break;
    //           }
    //         }
    
    //         if (stepDone == false) {
    //           for (let testIndex = 0; testIndex < testInput.length; testIndex += 1) {
    //             if (typeof testInput[testIndex] == 'number' && testInput[testIndex] >= 10) {
    //               buildingInput = split(buildingInput);
    //               splitComplete = false;
    //               done = false;
                  
    //               break;
    //             }
    //           }
    //         }
            
    //       }
          
    
    
    //       let finalArray = findMag(buildingInput);
          
    //       let finalAnswer = (3 * finalArray[0]) + (2 * finalArray[1]);
    //       manualCheck.push(finalAnswer);
    //       // console.log(`interim answer ${finalAnswer}`);
    //       // if (finalAnswer > highestAnswer) {
    //       //   highestAnswer = finalAnswer;
    //       // }
        
      
    // }
    
    
    console.log(`Highest answer: ${highestAnswer}`);
    
    console.dir(input[0], {depth: null});
    console.dir(input[1], {depth: null});
    console.dir(input[2], {depth: null});
