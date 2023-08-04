const input = [
'rf-RL',
'rf-wz',
'wz-RL',
'AV-mh',
'end-wz',
'end-dm',
'wz-gy',
'wz-dm',
'cg-AV',
'rf-AV',
'rf-gy',
'end-mh',
'cg-gy',
'cg-RL',
'gy-RL',
'VI-gy',
'AV-gy',
'dm-rf',
'start-cg',
'start-RL',
'rf-mh',
'AV-start',
'qk-mh',
'wz-mh',
];

// const input = [
// 'start-A',
// 'start-b',
// 'A-c',
// 'A-b',
// 'b-d',
// 'A-end',
// 'b-end',
// ];

// const input = [
// 'dc-end',
// 'HN-start',
// 'start-kj',
// 'dc-start',
// 'dc-HN',
// 'LN-dc',
// 'HN-end',
// 'kj-sa',
// 'kj-HN',
// 'kj-dc',
// ];

// const input = [
// 'fs-end',
// 'he-DX',
// 'fs-he',
// 'start-DX',
// 'pj-DX',
// 'end-zg',
// 'zg-sl',
// 'zg-pj',
// 'pj-he',
// 'RW-he',
// 'fs-DX',
// 'pj-RW',
// 'zg-RW',
// 'start-pj',
// 'he-WI',
// 'zg-he',
// 'pj-fs',
// 'start-RW',
// ];

let result = 0;

for (let index = 0; index < input.length; index += 1) {
  input[index] = input[index].split('-');
}

function buildPath(path) {
  let lastPosition = path[path.length - 1];
  let doubleCheck = 0;
  let doubleArray = [];
  for (let doubleIndex = 0; doubleIndex < path.length; doubleIndex += 1) {
    if (path[doubleIndex].toLowerCase() === path[doubleIndex]) {
      doubleCheck += 1;
      if (!doubleArray.includes(path[doubleIndex])) {
        doubleArray.push(path[doubleIndex]);
      }
    }
  }

  let canDoubleDip = doubleCheck == doubleArray.length ? true : false;

  for (let buildIndex = 0; buildIndex < input.length; buildIndex += 1) {
    if (input[buildIndex].includes(lastPosition)) {
      let buildConnection = input[buildIndex][0] == lastPosition ? input[buildIndex][1] : input[buildIndex][0];

      // if connection is lowercase and hasn't been hit yet
      if (buildConnection.toLowerCase() === buildConnection && buildConnection != 'end' && buildConnection != 'start') {
        if (!path.includes(buildConnection) || canDoubleDip) {
          let newPath = path.concat([buildConnection]);
          buildPath(newPath);
        }
      }

      // if connection is uppercase
      if (buildConnection.toLowerCase() != buildConnection && buildConnection != 'end' && buildConnection != 'start') {
        let newPath = path.concat([buildConnection]);
        buildPath(newPath);
      }

      // if connection is the end
      if (buildConnection === 'end') {
        result += 1;
      }
    }
  }
}

for (let index = 0; index < input.length; index += 1) {
  if (input[index].includes('start')) {
    let startConection = input[index][0] == 'start' ? input[index][1] : input[index][0];
    buildPath(['start', startConection]);
  }
}

console.log(result);
