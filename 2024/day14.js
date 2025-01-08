const input = `
p=43,88 v=84,88
p=18,3 v=-20,-92
p=39,70 v=35,43
p=68,43 v=-82,-12
p=7,24 v=23,-84
p=92,31 v=25,-14
p=53,1 v=-82,-40
p=77,23 v=38,-57
p=21,41 v=29,18
p=67,1 v=-35,8
p=81,70 v=-59,80
p=17,53 v=-73,-4
p=30,87 v=49,86
p=30,0 v=31,22
p=19,45 v=-50,73
p=91,77 v=-96,6
p=12,18 v=11,7
p=97,76 v=-90,4
p=47,77 v=-16,82
p=22,55 v=-23,-32
p=20,91 v=-4,-44
p=93,70 v=-70,32
p=67,26 v=-47,-53
p=0,52 v=-58,33
p=33,63 v=48,-31
p=44,81 v=16,-54
p=52,50 v=85,-10
p=10,9 v=79,-30
p=4,56 v=-32,-70
p=36,58 v=-70,2
p=28,76 v=16,65
p=25,8 v=47,-63
p=34,24 v=-37,9
p=78,48 v=-9,25
p=35,67 v=-9,-75
p=100,95 v=-55,3
p=96,32 v=95,-90
p=49,72 v=99,12
p=39,81 v=18,76
p=78,52 v=87,93
p=17,20 v=-89,52
p=16,4 v=-90,-73
p=63,90 v=34,-73
p=63,42 v=-64,1
p=39,34 v=-59,15
p=32,46 v=82,-47
p=87,80 v=11,-72
p=65,13 v=-46,-67
p=27,102 v=6,-77
p=24,38 v=64,-8
p=54,68 v=-66,51
p=33,92 v=-18,-54
p=37,45 v=66,-64
p=14,19 v=-56,-88
p=72,80 v=-40,-35
p=65,64 v=-65,-96
p=44,101 v=-34,-61
p=56,56 v=86,-4
p=34,38 v=14,-59
p=96,47 v=75,-10
p=8,61 v=8,29
p=69,58 v=-68,-90
p=100,17 v=42,42
p=20,93 v=12,98
p=30,1 v=92,-38
p=88,100 v=-41,71
p=61,79 v=-31,-85
p=94,16 v=59,9
p=91,91 v=-77,96
p=23,69 v=46,45
p=81,10 v=57,5
p=27,6 v=30,3
p=100,54 v=-42,-74
p=9,69 v=-71,-66
p=58,11 v=-73,61
p=40,16 v=16,-26
p=95,74 v=-61,25
p=73,41 v=-88,33
p=62,98 v=52,53
p=85,40 v=58,-8
p=2,19 v=-46,60
p=69,19 v=-64,-26
p=3,50 v=-41,-78
p=31,57 v=-5,64
p=88,53 v=-67,-58
p=20,39 v=12,-12
p=79,65 v=5,-62
p=52,37 v=84,52
p=83,24 v=39,85
p=39,101 v=-18,28
p=55,11 v=-66,-77
p=88,102 v=-11,-75
p=79,30 v=-35,-3
p=65,69 v=-33,-56
p=73,97 v=-97,63
p=9,3 v=11,-52
p=7,62 v=-27,-36
p=69,12 v=71,-26
p=88,16 v=89,-49
p=19,5 v=-7,3
p=79,89 v=72,-46
p=7,26 v=44,79
p=83,75 v=-29,59
p=27,43 v=-6,61
p=39,53 v=34,23
p=71,94 v=21,88
p=7,64 v=95,90
p=3,72 v=-92,82
p=22,72 v=-88,-97
p=29,65 v=-3,14
p=54,64 v=-35,-98
p=51,67 v=-66,-27
p=73,57 v=-12,-37
p=29,95 v=98,26
p=18,24 v=46,-84
p=9,33 v=32,23
p=94,18 v=-10,-63
p=40,44 v=-18,-86
p=95,17 v=-2,77
p=31,28 v=31,-57
p=85,51 v=-45,64
p=66,57 v=67,-55
p=38,7 v=-69,-1
p=6,54 v=-9,45
p=18,101 v=-54,26
p=73,64 v=88,-4
p=80,40 v=73,76
p=42,62 v=-85,-58
p=20,67 v=-2,56
p=0,42 v=-76,-41
p=95,62 v=-8,-68
p=44,77 v=19,-85
p=65,3 v=20,28
p=16,36 v=-73,21
p=96,15 v=-25,79
p=42,72 v=17,10
p=52,31 v=-15,77
p=100,15 v=60,40
p=51,89 v=-82,34
p=85,61 v=-76,-73
p=80,3 v=25,36
p=19,63 v=-2,-87
p=52,17 v=69,-94
p=59,8 v=19,-35
p=6,74 v=-76,24
p=21,98 v=-3,-75
p=3,88 v=61,95
p=18,21 v=96,-22
p=50,59 v=-32,-68
p=59,45 v=-22,-47
p=96,2 v=92,5
p=6,27 v=-91,46
p=90,82 v=-20,37
p=83,16 v=-30,36
p=83,78 v=68,-19
p=98,101 v=-73,-63
p=48,27 v=5,-7
p=6,27 v=44,83
p=79,3 v=22,34
p=42,63 v=68,-96
p=98,39 v=40,48
p=1,67 v=60,45
p=79,19 v=90,79
p=94,2 v=93,-36
p=65,53 v=19,-80
p=40,61 v=48,-35
p=63,80 v=37,84
p=30,85 v=-72,10
p=6,32 v=66,75
p=12,21 v=-40,-94
p=87,46 v=24,-29
p=73,90 v=-29,90
p=76,19 v=55,-59
p=67,59 v=72,14
p=48,22 v=-19,44
p=44,14 v=-82,-67
p=73,64 v=-29,78
p=76,17 v=-62,40
p=86,92 v=26,24
p=37,8 v=85,-21
p=67,16 v=5,38
p=13,15 v=62,81
p=11,12 v=64,-99
p=46,4 v=-57,36
p=86,39 v=65,-18
p=32,12 v=64,71
p=86,6 v=58,-30
p=10,26 v=26,79
p=70,77 v=71,12
p=11,35 v=-22,-84
p=30,56 v=-52,66
p=72,77 v=-96,14
p=3,97 v=21,91
p=17,81 v=-5,57
p=76,72 v=-24,24
p=100,37 v=76,95
p=27,62 v=66,16
p=42,101 v=-65,18
p=45,20 v=-49,-68
p=0,83 v=59,49
p=94,68 v=7,-97
p=21,70 v=62,76
p=85,94 v=-77,28
p=71,39 v=-27,-10
p=6,102 v=-56,97
p=90,51 v=41,35
p=31,70 v=-86,-21
p=43,7 v=23,-47
p=25,28 v=-38,17
p=100,78 v=-90,-43
p=5,45 v=-57,-37
p=83,21 v=-30,84
p=52,102 v=-52,61
p=57,1 v=1,-34
p=96,50 v=36,-48
p=12,34 v=-39,-8
p=71,44 v=-99,-86
p=92,31 v=-43,64
p=44,78 v=17,18
p=80,100 v=73,-40
p=34,28 v=-90,-73
p=66,92 v=88,-38
p=2,58 v=62,82
p=99,75 v=-43,64
p=34,97 v=-36,24
p=1,89 v=-10,47
p=17,13 v=65,85
p=10,80 v=94,-86
p=33,22 v=-57,-24
p=41,20 v=-18,44
p=68,24 v=-68,75
p=25,38 v=-51,-64
p=71,49 v=70,63
p=71,27 v=71,-16
p=72,19 v=91,56
p=99,13 v=59,46
p=39,33 v=83,-51
p=40,17 v=16,50
p=89,28 v=92,-95
p=45,82 v=-16,-54
p=24,16 v=-18,-86
p=79,88 v=72,-90
p=51,19 v=-56,-60
p=38,61 v=18,80
p=44,73 v=83,-95
p=59,53 v=73,-8
p=45,38 v=17,-6
p=77,92 v=-28,-83
p=8,98 v=94,-71
p=8,20 v=-69,22
p=49,39 v=84,-45
p=53,92 v=-3,-48
p=30,57 v=66,36
p=75,93 v=-97,-44
p=52,14 v=38,68
p=18,60 v=-5,-41
p=81,59 v=39,-64
p=42,85 v=63,7
p=74,13 v=-64,-51
p=30,1 v=-88,-3
p=19,63 v=66,-42
p=44,77 v=49,-77
p=93,1 v=-26,67
p=94,48 v=24,-8
p=53,102 v=-16,-69
p=19,75 v=83,35
p=90,51 v=7,68
p=58,30 v=35,-80
p=72,67 v=72,-56
p=97,33 v=4,-40
p=25,96 v=-39,86
p=57,36 v=-49,-80
p=22,58 v=92,-89
p=14,63 v=-92,74
p=15,43 v=-29,-86
p=54,83 v=70,43
p=47,93 v=-96,-48
p=51,68 v=-49,-99
p=93,23 v=86,-30
p=99,86 v=-43,-17
p=89,94 v=-92,16
p=55,21 v=-1,91
p=1,96 v=-35,-58
p=24,69 v=98,-97
p=89,52 v=42,64
p=7,71 v=-6,22
p=19,69 v=-54,-22
p=14,1 v=20,-69
p=63,26 v=-31,56
p=99,34 v=-75,54
p=76,71 v=-87,-4
p=34,32 v=51,79
p=12,91 v=98,23
p=16,45 v=-72,60
p=19,54 v=-2,-31
p=27,47 v=28,-37
p=21,62 v=43,-24
p=16,23 v=-82,48
p=48,2 v=85,-32
p=35,61 v=83,97
p=9,75 v=-8,-44
p=31,90 v=-81,-40
p=61,51 v=-15,-39
p=24,3 v=47,1
p=71,76 v=71,10
p=28,15 v=50,-69
p=93,15 v=92,15
p=33,89 v=92,70
p=29,66 v=-87,-10
p=21,92 v=27,57
p=75,96 v=-8,33
p=86,69 v=57,-21
p=34,70 v=46,80
p=58,52 v=-51,-37
p=25,92 v=-1,-44
p=9,61 v=66,26
p=18,41 v=61,-88
p=74,26 v=5,48
p=79,18 v=-98,-16
p=60,102 v=89,-32
p=16,16 v=63,-59
p=71,67 v=20,76
p=55,23 v=-32,19
p=68,49 v=-98,27
p=81,18 v=-12,5
p=97,29 v=11,-49
p=85,43 v=58,25
p=2,50 v=-89,-33
p=27,8 v=82,-20
p=66,36 v=-30,-38
p=90,88 v=25,-17
p=39,38 v=87,-87
p=55,18 v=20,21
p=78,68 v=22,74
p=90,5 v=-64,-10
p=41,80 v=-95,-67
p=69,48 v=99,62
p=34,14 v=31,-17
p=93,80 v=-76,41
p=14,35 v=-92,-53
p=4,88 v=-91,98
p=93,24 v=27,31
p=70,61 v=3,37
p=47,57 v=-90,17
p=64,37 v=3,42
p=32,83 v=65,-79
p=12,67 v=27,88
p=67,48 v=27,85
p=18,28 v=97,19
p=51,51 v=68,99
p=8,35 v=-41,-86
p=59,42 v=-29,66
p=50,74 v=-81,-93
p=87,58 v=-61,74
p=31,79 v=36,-80
p=30,3 v=48,-1
p=25,67 v=-1,-70
p=40,54 v=1,-63
p=79,51 v=54,-65
p=0,10 v=92,3
p=76,48 v=-79,-49
p=94,74 v=-76,78
p=88,57 v=55,80
p=76,20 v=53,7
p=45,45 v=-70,95
p=97,17 v=-80,-1
p=9,45 v=-35,45
p=84,57 v=92,66
p=78,72 v=-30,-46
p=87,83 v=-9,16
p=56,19 v=-13,56
p=97,5 v=-36,5
p=21,38 v=-37,-80
p=39,28 v=-31,40
p=6,65 v=-27,12
p=96,74 v=42,-25
p=89,8 v=91,9
p=89,71 v=-94,-60
p=23,36 v=-88,-41
p=92,37 v=58,-10
p=2,20 v=12,19
p=33,21 v=-69,77
p=94,42 v=25,56
p=86,19 v=-77,83
p=78,75 v=92,78
p=73,1 v=21,-82
p=49,78 v=-74,-46
p=50,50 v=-65,-8
p=36,4 v=-18,36
p=21,56 v=-71,6
p=41,38 v=-84,-80
p=0,45 v=6,-60
p=9,28 v=-90,52
p=60,5 v=-65,69
p=81,29 v=-79,52
p=84,21 v=-2,41
p=48,102 v=83,48
p=61,20 v=-87,-95
p=19,68 v=94,16
p=74,32 v=55,89
p=34,4 v=-18,71
p=64,30 v=19,-74
p=94,34 v=-54,89
p=14,93 v=28,30
p=48,53 v=-14,-39
p=68,77 v=-85,-89
p=80,29 v=20,25
p=91,38 v=-78,13
p=75,46 v=90,58
p=38,72 v=-86,-33
p=10,5 v=-72,-71
p=33,96 v=-85,92
p=43,11 v=-67,85
p=30,35 v=49,-49
p=40,87 v=66,-48
p=79,45 v=-61,-78
p=67,70 v=-25,-30
p=85,52 v=79,-60
p=2,52 v=-94,78
p=28,69 v=-35,68
p=89,73 v=24,-62
p=10,94 v=78,-5
p=43,68 v=77,83
p=69,86 v=41,43
p=23,62 v=22,29
p=51,65 v=13,81
p=49,9 v=-36,-1
p=2,32 v=-58,-49
p=65,96 v=-96,99
p=71,81 v=74,-19
p=87,83 v=-26,-19
p=84,9 v=-22,44
p=95,41 v=-10,-82
p=54,65 v=-66,-66
p=100,2 v=-44,-98
p=38,74 v=16,43
p=58,64 v=-49,-17
p=26,51 v=-20,-74
p=1,78 v=22,21
p=73,79 v=-64,84
p=74,98 v=6,-7
p=40,53 v=-52,64
p=59,70 v=6,37
p=39,3 v=30,-42
p=39,39 v=-6,-9
p=5,32 v=28,-94
p=77,96 v=-12,34
p=15,16 v=-5,71
p=10,12 v=-75,78
p=61,6 v=-48,38
p=72,31 v=-96,58
p=15,82 v=79,22
p=38,72 v=-47,-69
p=24,6 v=46,26
p=46,26 v=47,-72
p=19,74 v=4,50
p=98,24 v=-6,38
p=52,10 v=-66,-92
p=41,49 v=-48,-23
p=97,72 v=43,76
p=43,94 v=2,-50
p=3,48 v=-46,-10
p=9,27 v=25,21
p=11,23 v=-90,-51
p=15,23 v=29,-90
p=83,52 v=69,-3
p=28,54 v=48,-72
p=41,25 v=-36,-30
p=3,22 v=-92,15
p=38,33 v=32,-88
p=12,11 v=86,70
p=98,48 v=-92,-37
p=100,12 v=57,71
p=84,21 v=24,44
p=54,38 v=15,14
p=36,11 v=68,-18
p=29,5 v=-66,22
p=32,91 v=67,-89
p=54,102 v=86,90
p=84,16 v=-44,-22
p=7,95 v=77,-65
p=84,32 v=-45,17
p=12,4 v=-20,-74
p=91,94 v=-11,-76
p=22,52 v=-36,57
p=3,93 v=-75,-38
p=48,40 v=82,-74
p=37,10 v=-85,-53
p=87,10 v=-10,73
p=92,39 v=22,-41
p=64,88 v=-59,-85
p=67,67 v=54,-25
p=48,10 v=-94,51
p=99,98 v=40,38
p=64,8 v=70,83
p=18,88 v=97,88
p=37,8 v=-18,67
p=2,74 v=-58,76
p=37,51 v=50,31
p=50,80 v=63,7
`;

// const input = `
// p=0,4 v=3,-3
// p=6,3 v=-1,-3
// p=10,3 v=-1,2
// p=2,0 v=2,-1
// p=0,0 v=1,3
// p=3,0 v=-2,-2
// p=7,6 v=-1,-3
// p=3,0 v=-1,-2
// p=9,3 v=2,3
// p=7,3 v=-1,2
// p=2,4 v=2,-3
// p=9,5 v=-3,-3
// `;

// const input = `
// p=2,4 v=2,-3
// `;

let result = 0;

const roomWidth = 101;
const roomHeight = 103;
const seconds = 100;

let robotSpots = [];
let quadOne = 0;
let quadTwo = 0;
let quadThree = 0;
let quadFour = 0;

const regex = /p=(\d+),(\d+) v=(-*\d+),(-*\d+)/g;

const robots = [...input.matchAll(regex)];
// console.log(JSON.stringify(robots[0][4]));

for (let i = 0; i < robots.length; i += 1) {
  const startingRow = parseInt(robots[i][2], 10);
  const startingColumn = parseInt(robots[i][1], 10);
  const rowVelocity = parseInt(robots[i][4], 10);
  const columnVelocity = parseInt(robots[i][3], 10);

  let newRow = startingRow;
  let newColumn = startingColumn;

  // console.log(startingRow);
  // console.log(startingColumn);
  // console.log(rowVelocity);
  // console.log(columnVelocity);

  // const newRow = (rowVelocity * seconds) % roomWidth;
  // const newColumn = (columnVelocity * seconds) % roomHeight;

  let count = 0;
  while (count < seconds) {
    count += 1;
    // console.log('walked once');

    newRow += rowVelocity;
    newColumn += columnVelocity;
    // console.log(`walked to new row ${newRow}`);
    // console.log(`walked to new column ${newColumn}`);

    if (newRow < 0) {
      newRow = (roomHeight) + newRow;
    } else if (newRow > (roomHeight - 1)) {
      newRow = newRow - (roomHeight);
    }

    if (newColumn < 0) {
      newColumn = (roomWidth) + newColumn;
    } else if (newColumn > (roomWidth - 1)) {
      newColumn = newColumn - (roomWidth);
    }

  }

  // console.log(`new row: ${newRow}, new column: ${newColumn}`);
  robotSpots.push([newRow, newColumn]);
}

let partTwoGrid = new Array(roomHeight);
// console.log(partTwoGrid.length);
for (let i = 0; i < partTwoGrid.length; i += 1) {
  partTwoGrid[i] = new Array(roomWidth);
}

for (let i = 0; i < partTwoGrid.length; i += 1) {
  for (let j = 0; j < partTwoGrid[i].length; j += 1) {
    partTwoGrid[i][j] = '.';
  }
}

// for (let i = 0; i < partTwoGrid.length; i += 1) {
//   console.log(partTwoGrid[i]);
// }

for (let i = 0; i < robotSpots.length; i += 1) {
  const rowSpot = robotSpots[i][0];
  const columnSpot = robotSpots[i][1];
  partTwoGrid[rowSpot][columnSpot] = '#';
  if (robotSpots[i][0] === Math.floor(roomHeight / 2) || robotSpots[i][1] === Math.floor(roomWidth / 2)) {
    continue;
  }

  if (rowSpot < Math.floor(roomHeight / 2) && columnSpot < Math.floor(roomWidth / 2)) {
    quadOne += 1;
  }

  if (rowSpot > Math.floor(roomHeight / 2) && columnSpot < Math.floor(roomWidth / 2)) {
    quadThree += 1;
  }

  if (rowSpot < Math.floor(roomHeight / 2) && columnSpot > Math.floor(roomWidth / 2)) {
    quadTwo += 1;
  }

  if (rowSpot > Math.floor(roomHeight / 2) && columnSpot > Math.floor(roomWidth / 2)) {
    quadFour += 1;
  }
}

result = quadOne * quadTwo * quadThree * quadFour;
console.log(`Result: ${result}`);

// for (let i = 0; i < partTwoGrid.length; i += 1) {
//   console.log(`${partTwoGrid[i].join('')}`);
// }


// PART TWO

console.log('part two ===========================');


for (let i = 0; i < partTwoGrid.length; i += 1) {
  for (let j = 0; j < partTwoGrid[i].length; j += 1) {
    partTwoGrid[i][j] = '.';
  }
}

// for (let i = 0; i < partTwoGrid.length; i += 1) {
//   console.log(partTwoGrid[i]);
// }


function checkGrid(seconds) {
  for (let i = 0; i < partTwoGrid.length; i += 1) {
    let maxCount = 0;
    let pointCount = 0;
    for (let j = 0; j < partTwoGrid[0].length; j += 1) {
      if (partTwoGrid[i][j] === '#') {
        pointCount += 1;
      } else {
        if (pointCount > maxCount) {
          maxCount = pointCount;
        }
        pointCount = 0;
      }
    }

    if (maxCount > 20) {
      console.log(`hit a big one at: ${seconds}`);
      for (let k = 0; k < partTwoGrid.length; k += 1) {
        console.log(`${partTwoGrid[k].join('')}`);
      }
      break;
    }
  }
}


function checkTree() {
  let quadOneMatches = 0;
  let quadThreeMatches = 0;
  let thatsATree = false;
  for (let i = 0; i < quadOnePoints.length; i += 1) {
    const ownRow = quadOnePoints[i][0];
    const ownColumn = quadOnePoints[i][1];

    for (let j = 0; j < quadTwoPoints.length; j += 1) {
      if (quadTwoPoints[j][1] === ((roomWidth - 1) - ownColumn) && quadTwoPoints[j][0] === ownRow) {
        // console.log('found mirror for quad one and two');
        quadOneMatches += 1;
        break;
      }
    }
  }

  for (let i = 0; i < quadThreePoints.length; i += 1) {
    const ownRow = quadThreePoints[i][0];
    const ownColumn = quadThreePoints[i][1];

    for (let j = 0; j < quadFourPoints.length; j += 1) {
      if (quadFourPoints[j][1] === ((roomWidth - 1) - ownColumn) && quadFourPoints[j][0] === ownRow) {
        // console.log('found mirror for quad three and four');
        quadThreeMatches += 1;
        break;
      }
    }
  }

  // if (quadOneMatches === quadOnePoints.length && quadOnePoints.length === quadTwoPoints.length) {
  //   if (quadThreeMatches === quadThreePoints.length && quadThreePoints.length === quadFourPoints.length) {
  //     thatsATree = true;
  //   }
  // }

  // if (quadOnePoints.length === quadTwoPoints.length) {
  //   if (quadThreePoints.length === quadFourPoints.length) {
  //     thatsATree = true;
  //   }
  // }

  if (quadOnePoints.length - quadOneMatches < 50) {
    if (quadThreePoints.length - quadThreeMatches < 50) {
      thatsATree = true;
    }
  }

  return thatsATree;
}

let count = 0;
let quadOnePoints = [];
let quadTwoPoints = [];
let quadThreePoints = [];
let quadFourPoints = [];
let foundTree = false;

while (foundTree === false && count < 9870) {
  quadOnePoints = [];
  quadTwoPoints = [];
  quadThreePoints = [];
  quadFourPoints = [];
  for (let i = 0; i < partTwoGrid.length; i += 1) {
    for (let j = 0; j < partTwoGrid[i].length; j += 1) {
      partTwoGrid[i][j] = '.';
    }
  }

  for (let i = 0; i < robots.length; i += 1) {
    const startingRow = parseInt(robots[i][2], 10);
    const startingColumn = parseInt(robots[i][1], 10);
    const rowVelocity = parseInt(robots[i][4], 10);
    const columnVelocity = parseInt(robots[i][3], 10);

    let newRow = startingRow;
    let newColumn = startingColumn;

    newRow += rowVelocity;
    newColumn += columnVelocity;
    // console.log(`walked to new row ${newRow}`);
    // console.log(`walked to new column ${newColumn}`);

    if (newRow < 0) {
      newRow = (roomHeight) + newRow;
    } else if (newRow > (roomHeight - 1)) {
      newRow = newRow - (roomHeight);
    }

    if (newColumn < 0) {
      newColumn = (roomWidth) + newColumn;
    } else if (newColumn > (roomWidth - 1)) {
      newColumn = newColumn - (roomWidth);
    }


    // console.log(`new row: ${newRow}, new column: ${newColumn}`);
    // robotSpots.push([newRow, newColumn]);

    robots[i][2] = newRow;
    robots[i][1] = newColumn;
    partTwoGrid[newRow][newColumn] = '#';

    if (newRow < Math.floor(roomHeight / 2) && newColumn < Math.floor(roomWidth / 2)) {
      quadOnePoints.push([newRow, newColumn]);
    }
    if (newRow < Math.floor(roomHeight / 2) && newColumn > Math.floor(roomWidth / 2)) {
      quadTwoPoints.push([newRow, newColumn]);
    }
    if (newRow > Math.floor(roomHeight / 2) && newColumn < Math.floor(roomWidth / 2)) {
      quadThreePoints.push([newRow, newColumn]);
    }
    if (newRow > Math.floor(roomHeight / 2) && newColumn > Math.floor(roomWidth / 2)) {
      quadFourPoints.push([newRow, newColumn]);
    }
  }

  count += 1;
  // if (count > 9499 && count < 9870) {
  //   console.log(`${count}:`);
  //   console.log(`${partTwoGrid[partTwoGrid.length - 4].join('')}`);
  //   console.log(`${partTwoGrid[partTwoGrid.length - 3].join('')}`);
  //   console.log(`${partTwoGrid[partTwoGrid.length - 2].join('')}`);
  //   console.log(`${partTwoGrid[partTwoGrid.length - 1].join('')}`);
  //   console.log('     ');
  //   // for (let i = 0; i < partTwoGrid.length; i += 1) {
  //   //   console.log(`${partTwoGrid[i].join('')}`);
  //   // }
  // }

  // check full
  // if (count === 9690) {
  //   for (let i = 0; i < partTwoGrid.length; i += 1) {
  //     console.log(`${partTwoGrid[i].join('')}`);
  //   }
  // }
  checkGrid(count);


  // console.log(`counting seconds ${count}`);
  // console.log(`quad one points: ${quadOnePoints.length}`);
  // console.log(`quad two points: ${quadTwoPoints.length}`);
  // console.log(`quad three points: ${quadThreePoints.length}`);
  // console.log(`quad four points: ${quadFourPoints.length}`);

  // const treeTime = checkTree();
  // if (treeTime && count !== 3276 && count !== 3831) {
  //   foundTree = true;
  // }
}

// console.log(`Result part two: ${count}`);