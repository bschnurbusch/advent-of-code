const inputDecode = '';
// const inputDecode = '';
// const inputDecode = '';

const newInputDecode = inputDecode.split('');

let inputImage = [];


// const inputImage = [
// '...............',
// '...............',
// '...............',
// '...............',
// '...............',
// '.....#..#......',
// '.....#.........',
// '.....##..#.....',
// '.......#.......',
// '.......###.....',
// '...............',
// '...............',
// '...............',
// '...............',
// '...............',
// ];

let newInputImage = [];

let result = 0;

for (let index = 0; index < inputImage.length; index += 1) {
  newInputImage.push(inputImage[index].split(''));
}


let translatedArray = newInputImage;

for (let steps = 1; steps <= 50; steps += 1) {
  let bufferLetter = steps % 2 == 0 ? '#' : '.';
  let bufferArray = new Array(100 + ((steps) * 2));
  bufferArray.fill(bufferLetter);
  for (let rowIndex = 0; rowIndex < translatedArray.length; rowIndex += 1) {
    translatedArray[rowIndex].push(bufferLetter);
    translatedArray[rowIndex].unshift(bufferLetter);
  }
  translatedArray.push(bufferArray);
  translatedArray.unshift(bufferArray);

  let tempArray = new Array(translatedArray.length);
  for (let index = 0; index < tempArray.length; index += 1) {
    tempArray[index] = new Array(translatedArray.length);
  }

  // console.log(`Buffer letter: ${bufferLetter}`);
  // console.log(`Buffer array length: ${bufferArray.length}`);
  // console.log(`Translated array length: ${translatedArray.length}`);

  for (let rowIndex = 0; rowIndex < translatedArray.length; rowIndex += 1) {
    for (let columnIndex = 0; columnIndex < translatedArray[rowIndex].length; columnIndex += 1) {
      let topLeft = (rowIndex > 0 && columnIndex > 0) ? translatedArray[rowIndex - 1][columnIndex - 1] : bufferLetter;
      let topCenter = rowIndex > 0 ? translatedArray[rowIndex - 1][columnIndex] : bufferLetter;
      let topRight = rowIndex > 0 && columnIndex < translatedArray[rowIndex].length - 1 ? translatedArray[rowIndex - 1][columnIndex + 1] : bufferLetter;
      let centerLeft = columnIndex > 0 ? translatedArray[rowIndex][columnIndex - 1] : bufferLetter;
      let centerCenter = translatedArray[rowIndex][columnIndex];
      let centerRight = columnIndex < translatedArray[rowIndex].length - 1 ? translatedArray[rowIndex][columnIndex + 1] : bufferLetter;
      let bottomLeft = rowIndex < translatedArray.length - 1 && columnIndex > 0 ? translatedArray[rowIndex + 1][columnIndex - 1] : bufferLetter;
      let bottomCenter = rowIndex < translatedArray.length - 1 ? translatedArray[rowIndex + 1][columnIndex] : bufferLetter;
      let bottomRight = rowIndex < translatedArray.length - 1 && columnIndex < translatedArray[rowIndex].length - 1 ? translatedArray[rowIndex + 1][columnIndex + 1] : bufferLetter;

      let decodeString = '';
      decodeString += topLeft;
      decodeString += topCenter;
      decodeString += topRight;
      decodeString += centerLeft;
      decodeString += centerCenter;
      decodeString += centerRight;
      decodeString += bottomLeft;
      decodeString += bottomCenter;
      decodeString += bottomRight;
      // if (rowIndex == 0 && columnIndex == 0) {
      //   console.log(decodeString);
      // }

      let decodeStringSplit = decodeString.split('');
      let decodeBinaryString = '';
      for (let decodeIndex = 0; decodeIndex < decodeStringSplit.length; decodeIndex += 1) {
        if (decodeStringSplit[decodeIndex] == '#') {
          decodeBinaryString += '1';
        } else {
          decodeBinaryString += '0';
        }
      }

      let decodeBinaryIndex = parseInt(decodeBinaryString, 2);
      tempArray[rowIndex][columnIndex] = newInputDecode[decodeBinaryIndex];
    }
  }
  
  // for (let copyRowIndex = 0; copyRowIndex < tempArray.length; copyRowIndex += 1) {
  //   for (let copyColIndex = 0; copyColIndex < tempArray[copyRowIndex].length; copyColIndex += 1) {
  //     translatedArray[copyRowIndex][copyColIndex] = tempArray[copyRowIndex].slice(copyColIndex, copyColIndex + 1);
  //   }
  // }
  translatedArray = tempArray;
}

for (let rowIndex = 0; rowIndex < translatedArray.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < translatedArray[rowIndex].length; columnIndex += 1) {
    if (translatedArray[rowIndex][columnIndex] == '#') {
      result += 1;
    }
  }
}

console.log(`Number lit: ${result}`);
