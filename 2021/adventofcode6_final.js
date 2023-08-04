const input = [1,1,1,3,3,2,1,1,1,1,1,4,4,1,4,1,4,1,1,4,1,1,1,3,3,2,3,1,2,1,1,1,1,1,1,1,3,4,1,1,4,3,1,2,3,1,1,1,5,2,1,1,1,1,2,1,2,5,2,2,1,1,1,3,1,1,1,4,1,1,1,1,1,3,3,2,1,1,3,1,4,1,2,1,5,1,4,2,1,1,5,1,1,1,1,4,3,1,3,2,1,4,1,1,2,1,4,4,5,1,3,1,1,1,1,2,1,4,4,1,1,1,3,1,5,1,1,1,1,1,3,2,5,1,5,4,1,4,1,3,5,1,2,5,4,3,3,2,4,1,5,1,1,2,4,1,1,1,1,2,4,1,2,5,1,4,1,4,2,5,4,1,1,2,2,4,1,5,1,4,3,3,2,3,1,2,3,1,4,1,1,1,3,5,1,1,1,3,5,1,1,4,1,4,4,1,3,1,1,1,2,3,3,2,5,1,2,1,1,2,2,1,3,4,1,3,5,1,3,4,3,5,1,1,5,1,3,3,2,1,5,1,1,3,1,1,3,1,2,1,3,2,5,1,3,1,1,3,5,1,1,1,1,2,1,2,4,4,4,2,2,3,1,5,1,2,1,3,3,3,4,1,1,5,1,3,2,4,1,5,5,1,4,4,1,4,4,1,1,2];

// const input = [1, 2];
// const input = [3,4,3,1,2];
let totalFish = input.length;

function newFish(daysLeft, startingNumber) {
  if ((daysLeft - (startingNumber + 1)) >= 0) {
    const fishCreated = Math.floor((daysLeft - (startingNumber + 1)) / 7) + 1;
    totalFish += fishCreated;
    // console.log(`Fish created: ${fishCreated}`);
    // console.log(`Starting number: ${startingNumber}`);
    // console.log(`Days left: ${daysLeft}`);

    let count = 0;

    if (fishCreated > 0) {
      daysLeft -= (startingNumber + 1);
      while (daysLeft > 0) {
        newFish(daysLeft, 8);
        count += 1;
        daysLeft -= 7;
      }
    }
  }
}

for (let index = 0; index < input.length; index += 1) {
  newFish(256, input[index]);
}

console.log(`Total fish: ${totalFish}`);
