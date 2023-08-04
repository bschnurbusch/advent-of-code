const input = [
'691,418',
'507,283',
'371,371',
'21,710',
'10,260',
'256,84',
'601,892',
'960,541',
'755,392',
'90,411',
'435,603',
'63,565',
'1211,217',
'328,719',
'1186,325',
'661,606',
'1193,514',
'1097,156',
'353,49',
'673,341',
'850,292',
'1210,812',
'54,476',
'1101,393',
'982,719',
'874,0',
'1161,379',
'457,322',
'440,340',
'1012,670',
'746,259',
'479,348',
'1275,787',
'505,94',
'649,606',
'1305,675',
'269,217',
'443,238',
'969,850',
'875,358',
'149,514',
'773,617',
'1255,437',
'589,358',
'100,789',
'773,66',
'853,313',
'1146,607',
'815,78',
'55,264',
'875,225',
'162,74',
'589,39',
'1066,31',
'1277,70',
'773,828',
'815,750',
'164,287',
'1232,112',
'338,742',
'440,676',
'300,700',
'180,684',
'132,740',
'782,301',
'1193,725',
'895,758',
'828,497',
'392,534',
'831,348',
'479,124',
'823,626',
'955,500',
'853,322',
'962,327',
'796,577',
'1220,411',
'90,859',
'366,501',
'1294,168',
'1217,801',
'927,281',
'991,19',
'1202,660',
'1099,770',
'753,543',
'556,418',
'457,40',
'159,144',
'818,105',
'149,380',
'967,623',
'97,543',
'1033,738',
'949,236',
'435,781',
'459,604',
'482,497',
'952,420',
'1146,415',
'1143,268',
'572,662',
'388,86',
'112,106',
'1006,101',
'1178,625',
'338,376',
'960,793',
'917,39',
'683,714',
'1213,203',
'902,841',
'895,558',
'355,500',
'199,550',
'855,443',
'865,514',
'815,32',
'1135,796',
'994,518',
'651,513',
'63,441',
'633,486',
'227,833',
'820,415',
'474,658',
'619,102',
'716,612',
'443,572',
'1250,282',
'922,891',
'1019,451',
'15,822',
'1111,344',
'1272,841',
'354,700',
'440,4',
'1198,442',
'241,717',
'1081,515',
'559,254',
'199,3',
'1232,280',
'634,424',
'982,623',
'20,439',
'987,429',
'952,474',
'383,739',
'16,168',
'912,488',
'383,603',
'30,367',
'1096,340',
'706,289',
'70,138',
'177,739',
'599,739',
'1277,824',
'492,372',
'363,102',
'470,696',
'582,299',
'590,808',
'738,255',
'671,751',
'304,722',
'800,194',
'224,52',
'3,177',
'555,392',
'793,87',
'1059,802',
'711,312',
'1300,260',
'1279,884',
'443,656',
'93,541',
'38,501',
'619,787',
'1225,45',
'283,299',
'1143,626',
'982,31',
'833,67',
'748,52',
'1280,815',
'482,397',
'870,4',
'388,891',
'651,469',
'465,182',
'981,73',
'875,291',
'925,665',
'853,572',
'567,375',
'415,336',
'353,397',
'38,841',
'1009,234',
'263,453',
'93,801',
'358,26',
'0,623',
'632,722',
'776,389',
'1124,799',
'604,289',
'72,299',
'987,878',
'154,497',
'673,252',
'537,393',
'1044,183',
'213,738',
'600,700',
'1218,842',
'398,848',
'113,66',
'5,382',
'247,684',
'421,577',
'1178,525',
'10,824',
'972,376',
'132,154',
'413,357',
'932,408',
'1250,631',
'435,225',
'55,312',
'1295,143',
'132,525',
'383,281',
'1089,721',
'1138,747',
'194,602',
'853,406',
'20,519',
'1081,93',
'97,515',
'709,220',
'969,44',
'276,813',
'3,513',
'1056,747',
'709,226',
'1071,74',
'552,276',
'773,277',
'944,501',
'455,443',
'241,537',
'445,617',
'673,194',
'1181,124',
'917,95',
'20,872',
'1272,53',
'251,802',
'426,866',
'979,16',
'957,647',
'984,623',
'75,696',
'395,626',
'385,665',
'78,112',
'415,758',
'194,29',
'1289,486',
'1103,747',
'745,887',
'912,58',
'445,501',
'852,801',
'407,210',
'856,145',
'78,280',
'559,702',
'278,149',
'147,511',
'1131,595',
'1044,891',
'753,203',
'25,759',
'1236,147',
'1062,166',
'587,492',
'90,35',
'710,558',
'483,495',
'1290,872',
'1079,67',
'1138,497',
'175,546',
'244,31',
'60,360',
'17,586',
'256,607',
'504,368',
'975,203',
'1014,68',
'1218,52',
'1111,792',
'87,784',
'868,253',
'132,625',
'350,345',
'38,393',
'112,408',
'1275,443',
'1136,70',
'830,668',
'330,367',
'600,784',
'666,742',
'430,276',
'600,682',
'109,880',
'1129,150',
'1203,1',
'1093,462',
'793,311',
'1071,522',
'256,757',
'581,19',
'644,152',
'1275,451',
'517,583',
'436,392',
'410,640',
'1221,7',
'750,82',
'579,708',
'1071,136',
'676,519',
'1210,789',
'1071,334',
'986,255',
'321,830',
'120,632',
'666,152',
'1193,841',
'1191,747',
'981,373',
'1225,849',
'840,424',
'1091,781',
'89,887',
'445,514',
'1191,595',
'867,686',
'266,394',
'947,787',
'266,891',
'581,427',
'1116,292',
'1213,799',
'112,442',
'197,770',
'907,103',
'669,850',
'599,182',
'455,891',
'199,451',
'321,892',
'928,642',
'321,2',
'557,543',
'324,255',
'119,595',
'634,22',
'241,57',
'600,558',
'1001,117',
'634,582',
'306,470',
'591,117',
'1161,94',
'504,526',
'918,534',
'547,333',
'1309,633',
'1010,194',
'392,194',
'585,373',
'207,747',
'621,70',
'244,232',
'649,667',
'48,821',
'827,847',
'910,819',
'87,550',
'875,179',
'590,341',
'60,282',
'350,541',
'179,798',
'691,443',
'555,453',
'805,380',
'982,863',
'244,214',
'455,451',
'35,443',
'65,835',
'262,476',
'736,634',
'1170,319',
'763,648',
'764,54',
'92,52',
'1307,201',
'940,180',
'1202,392',
'495,32',
'1241,129',
'398,735',
'975,271',
'808,388',
'1121,182',
'150,779',
'31,884',
'843,812',
'126,301',
'132,389',
'468,535',
'750,555',
'95,379',
'1223,336',
'1048,476',
'773,380',
'1069,165',
'656,271',
'840,696',
'227,534',
'542,116',
'502,175',
'349,184',
'1063,684',
'560,107',
'440,710',
'1275,418',
'1116,602',
'659,65',
'420,824',
'748,810',
'725,373',
'455,3',
'360,592',
'1108,620',
'460,292',
'433,173',
'720,341',
'73,831',
'54,212',
'202,620',
'803,595',
'472,476',
'483,803',
'65,59',
'574,634',
'490,479',
'758,170',
'10,152',
'561,877',
'363,107',
'847,618',
'1307,177',
'1121,712',
'283,75',
'733,581',
'244,863',
'251,372',
'1300,474',
'410,607',
'865,501',
'556,28',
'719,565',
'991,791',
'917,799',
'1071,823',
'184,422',
'917,464',
'1004,470',
'590,658',
'1216,364',
'883,61',
'574,186',
'1250,3',
'403,103',
'1233,816',
'99,789',
'768,218',
'698,729',
'209,393',
'955,394',
'276,365',
'17,840',
'393,799',
'1066,863',
'473,140',
'169,556',
'1079,291',
'479,796',
'1218,84',
'691,451',
'1091,291',
'293,264',
'507,511',
'1300,420',
'454,145',
'910,147',
'977,892',
'1201,880',
'651,245',
'666,420',
'1086,52',
'147,383',
'233,857',
'149,379',
'524,93',
'994,250',
'353,647',
'375,238',
'1133,739',
'211,770',
'825,450',
'1158,836',
'676,183',
'1211,789',
'197,124',
'918,418',
'269,677',
'1161,514',
'710,476',
'323,803',
'754,418',
'1288,127',
'351,140',
'145,822',
'465,535',
'805,800',
'5,183',
'89,455',
'721,39',
'1044,394',
'288,53',
'1178,817',
'85,45',
'181,700',
'460,602',
'415,558',
'589,375',
'1091,603',
'1203,246',
'599,712',
'1051,739',
'343,623',
'1293,840',
'146,472',
'467,82',
'1141,786',
'1079,827',
'1081,129',
'867,208',
'1034,172',
'126,145',
'75,248',
'1141,338',
'1049,800',
'748,359',
'219,221',
'150,563',
'691,866',
'838,476',
'350,793',
'720,658',
'60,263',
'1213,95',
'743,375',
'1218,810',
'328,271',
'358,474',
'180,870',
'442,253',
'80,36',
'731,198',
'649,556',
'1164,472',
'900,680',
'1256,418',
'152,759',
'975,623',
'1203,583',
'354,194',
'775,747',
'358,516',
'887,603',
'254,147',
'261,800',
'711,134',
'579,831',
'1078,140',
'639,353',
'909,383',
'1160,368',
'100,105',
'962,887',
'1305,288',
'241,357',
'398,847',
'599,155',
'298,110',
'806,368',
'1148,74',
'1221,887',
'1268,101',
'463,618',
'806,526',
'10,634',
'102,842',
'912,47',
'889,465',
'149,515',
'991,467',
'1091,837',
'400,75',
'1240,138',
'831,770',
'743,823',
'213,156',
'512,870',
'1197,66',
'922,86',
'676,134',
'1295,541',
'890,824',
'445,66',
'144,866',
'1262,373',
'1113,124',
'430,52',
'713,677',
'805,94',
'765,208',
'907,372',
'426,28',
'1290,519',
'644,420',
'1064,841',
'191,52',
'842,535',
'803,611',
'659,469',
'353,759',
'884,28',
'244,702',
'124,121',
'1,633',
'1091,333',
'830,824',
'1208,842',
'219,333',
'514,577',
'1160,563',
'517,535',
'1066,287',
'1004,404',
'627,180',
'107,246',
'378,589',
'1123,82',
'20,183',
'1215,651',
'393,71',
'186,799',
'1111,102',
'378,81',
'443,208',
'311,163',
'1163,831',
'768,408',
'398,754',
'845,570',
'621,600',
'1160,526',
'1184,301',
'57,777',
'221,329',
'296,68',
'989,892',
'217,462',
'806,331',
'234,824',
'537,617',
'1256,476',
'836,870',
'262,360',
'316,518',
'194,865',
'329,73',
'1098,505',
'17,700',
'895,735',
'999,163',
'1309,261',
'276,81',
'114,73',
'928,418',
'1238,299',
'989,114',
'1099,124',
'1056,819',
'572,169',
'731,831',
'77,57',
'1290,312',
'495,144',
'1307,381',
'462,110',
'547,246',
'465,712',
'152,388',
'1017,630',
'212,389',
'425,379',
'555,441',
'477,67',
'217,432',
'480,824',
'470,24',
'954,672',
'564,35',
'964,82',
'159,816',
'360,302',
'1034,813',
'510,28',
'755,677',
];

// fold along x=655
// fold along y=447
// fold along x=327
// fold along y=223
// fold along x=163
// fold along y=111
// fold along x=81
// fold along y=55
// fold along x=40
// fold along y=27
// fold along y=13
// fold along y=6

// const input = [
// '6,10',
// '0,14',
// '9,10',
// '0,3',
// '10,4',
// '4,11',
// '6,0',
// '6,12',
// '4,1',
// '0,13',
// '10,12',
// '3,4',
// '3,0',
// '8,4',
// '1,10',
// '2,14',
// '8,10',
// '9,0',
// ];

// fold along y=7
// fold along x=5

let markedArray = new Array(893);
for (let index = 0; index < markedArray.length; index += 1) {
  markedArray[index] = new Array(1310);
}

// FOR TEST INPUT
// let markedArray = new Array(15);
// for (let index = 0; index < markedArray.length; index += 1) {
//   markedArray[index] = new Array(11);
// }

let maxX = 0;
let maxY = 0;
let result = 0;


for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
  input[rowIndex] = input[rowIndex].split(',');
  input[rowIndex][0] = parseInt(input[rowIndex][0]);
  input[rowIndex][1] = parseInt(input[rowIndex][1]);
  if (input[rowIndex][0] > maxX) {
    maxX = input[rowIndex][0];
  }
  if (input[rowIndex][1] > maxY) {
    maxY = input[rowIndex][1];
  }

  markedArray[input[rowIndex][1]][input[rowIndex][0]] = 'x';
}

for (let rowIndex = 0; rowIndex < markedArray.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < markedArray[rowIndex].length; columnIndex += 1) {
    if (markedArray[rowIndex][columnIndex] == 'x') {
      result += 1;
    }
  }
}

console.log(result);

result = 0;

// FOR TEST INPUT
// for (let rowIndex = 7; rowIndex < markedArray.length; rowIndex += 1) {
//   for (let columnIndex = 0; columnIndex < markedArray[rowIndex].length; columnIndex += 1) {
//     if (markedArray[rowIndex][columnIndex] == 'x') {
//       // console.log('flipped one number');
//       let yFlip = 7 - (rowIndex - 7);

//       // console.log(yFlip);
//       // console.log(`flipping ${columnIndex}, ${rowIndex}`);
//       // console.log(`to ${columnIndex}, ${yFlip}`);
      
//       markedArray[rowIndex][columnIndex] = 0;
//       markedArray[yFlip][columnIndex] = 'x';
//     }
//   }
// }
// markedArray.splice(7, markedArray.length);

// for (let rowIndex = 0; rowIndex < markedArray.length; rowIndex += 1) {
//   for (let columnIndex = 0; columnIndex < 5; columnIndex += 1) {
//     if (markedArray[rowIndex][columnIndex] == 'x') {
//       // console.log('flipped one number');
//       let xFlip = 5 + (5 - columnIndex);
//       // console.log(xFlip);
//       // console.log(`flipping ${columnIndex}, ${rowIndex}`);
//       // console.log(`to ${xFlip}, ${rowIndex}`);
      
//       markedArray[rowIndex][columnIndex] = 0;
//       markedArray[rowIndex][xFlip] = 'x';
//     }
//   }
// }
// for (let rowIndex = 0; rowIndex < markedArray.length; rowIndex += 1) {
//   markedArray[rowIndex].splice(0, 6);
// }

for (let rowIndex = 0; rowIndex < markedArray.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < 655; columnIndex += 1) {
    if (markedArray[rowIndex][columnIndex] == 'x') {
      // console.log('flipped one number');
      let xFlip = 655 + (655 - columnIndex);
      // console.log(xFlip);
      // console.log(`flipping ${columnIndex}, ${rowIndex}`);
      // console.log(`to ${xFlip}, ${rowIndex}`);
      
      markedArray[rowIndex][columnIndex] = 0;
      markedArray[rowIndex][xFlip] = 'x';
    }
  }
}
for (let rowIndex = 0; rowIndex < markedArray.length; rowIndex += 1) {
  markedArray[rowIndex].splice(0, 656);
}

// flip y=447
for (let rowIndex = 447; rowIndex < markedArray.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < markedArray[rowIndex].length; columnIndex += 1) {
    if (markedArray[rowIndex][columnIndex] == 'x') {
      // console.log('flipped one number');
      let yFlip = 447 - (rowIndex - 447);

      // console.log(yFlip);
      // console.log(`flipping ${columnIndex}, ${rowIndex}`);
      // console.log(`to ${columnIndex}, ${yFlip}`);
      
      markedArray[rowIndex][columnIndex] = 0;
      markedArray[yFlip][columnIndex] = 'x';
    }
  }
}
markedArray.splice(447, markedArray.length);

for (let rowIndex = 0; rowIndex < markedArray.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < 327; columnIndex += 1) {
    if (markedArray[rowIndex][columnIndex] == 'x') {
      // console.log('flipped one number');
      let xFlip = 327 + (327 - columnIndex);
      // console.log(xFlip);
      // console.log(`flipping ${columnIndex}, ${rowIndex}`);
      // console.log(`to ${xFlip}, ${rowIndex}`);
      
      markedArray[rowIndex][columnIndex] = 0;
      markedArray[rowIndex][xFlip] = 'x';
    }
  }
}
for (let rowIndex = 0; rowIndex < markedArray.length; rowIndex += 1) {
  markedArray[rowIndex].splice(0, 328);
}

// flip y=223
for (let rowIndex = 223; rowIndex < markedArray.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < markedArray[rowIndex].length; columnIndex += 1) {
    if (markedArray[rowIndex][columnIndex] == 'x') {
      // console.log('flipped one number');
      let yFlip = 223 - (rowIndex - 223);

      // console.log(yFlip);
      // console.log(`flipping ${columnIndex}, ${rowIndex}`);
      // console.log(`to ${columnIndex}, ${yFlip}`);
      
      markedArray[rowIndex][columnIndex] = 0;
      markedArray[yFlip][columnIndex] = 'x';
    }
  }
}
markedArray.splice(223, markedArray.length);

for (let rowIndex = 0; rowIndex < markedArray.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < 163; columnIndex += 1) {
    if (markedArray[rowIndex][columnIndex] == 'x') {
      // console.log('flipped one number');
      let xFlip = 163 + (163 - columnIndex);
      // console.log(xFlip);
      // console.log(`flipping ${columnIndex}, ${rowIndex}`);
      // console.log(`to ${xFlip}, ${rowIndex}`);
      
      markedArray[rowIndex][columnIndex] = 0;
      markedArray[rowIndex][xFlip] = 'x';
    }
  }
}
for (let rowIndex = 0; rowIndex < markedArray.length; rowIndex += 1) {
  markedArray[rowIndex].splice(0, 164);
}

// flip y=111
for (let rowIndex = 111; rowIndex < markedArray.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < markedArray[rowIndex].length; columnIndex += 1) {
    if (markedArray[rowIndex][columnIndex] == 'x') {
      // console.log('flipped one number');
      let yFlip = 111 - (rowIndex - 111);

      // console.log(yFlip);
      // console.log(`flipping ${columnIndex}, ${rowIndex}`);
      // console.log(`to ${columnIndex}, ${yFlip}`);
      
      markedArray[rowIndex][columnIndex] = 0;
      markedArray[yFlip][columnIndex] = 'x';
    }
  }
}
markedArray.splice(111, markedArray.length);

for (let rowIndex = 0; rowIndex < markedArray.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < 81; columnIndex += 1) {
    if (markedArray[rowIndex][columnIndex] == 'x') {
      // console.log('flipped one number');
      let xFlip = 81 + (81 - columnIndex);
      // console.log(xFlip);
      // console.log(`flipping ${columnIndex}, ${rowIndex}`);
      // console.log(`to ${xFlip}, ${rowIndex}`);
      
      markedArray[rowIndex][columnIndex] = 0;
      markedArray[rowIndex][xFlip] = 'x';
    }
  }
}
for (let rowIndex = 0; rowIndex < markedArray.length; rowIndex += 1) {
  markedArray[rowIndex].splice(0, 82);
}

// flip y=55
for (let rowIndex = 55; rowIndex < markedArray.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < markedArray[rowIndex].length; columnIndex += 1) {
    if (markedArray[rowIndex][columnIndex] == 'x') {
      // console.log('flipped one number');
      let yFlip = 55 - (rowIndex - 55);

      // console.log(yFlip);
      // console.log(`flipping ${columnIndex}, ${rowIndex}`);
      // console.log(`to ${columnIndex}, ${yFlip}`);
      
      markedArray[rowIndex][columnIndex] = 0;
      markedArray[yFlip][columnIndex] = 'x';
    }
  }
}
markedArray.splice(55, markedArray.length);

for (let rowIndex = 0; rowIndex < markedArray.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < 40; columnIndex += 1) {
    if (markedArray[rowIndex][columnIndex] == 'x') {
      // console.log('flipped one number');
      let xFlip = 40 + (40 - columnIndex);
      // console.log(xFlip);
      // console.log(`flipping ${columnIndex}, ${rowIndex}`);
      // console.log(`to ${xFlip}, ${rowIndex}`);
      
      markedArray[rowIndex][columnIndex] = 0;
      markedArray[rowIndex][xFlip] = 'x';
    }
  }
}
for (let rowIndex = 0; rowIndex < markedArray.length; rowIndex += 1) {
  markedArray[rowIndex].splice(0, 41);
}

// flip y=27
for (let rowIndex = 27; rowIndex < markedArray.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < markedArray[rowIndex].length; columnIndex += 1) {
    if (markedArray[rowIndex][columnIndex] == 'x') {
      // console.log('flipped one number');
      let yFlip = 27 - (rowIndex - 27);

      // console.log(yFlip);
      // console.log(`flipping ${columnIndex}, ${rowIndex}`);
      // console.log(`to ${columnIndex}, ${yFlip}`);
      
      markedArray[rowIndex][columnIndex] = 0;
      markedArray[yFlip][columnIndex] = 'x';
    }
  }
}
markedArray.splice(27, markedArray.length);

// flip y=13
for (let rowIndex = 13; rowIndex < markedArray.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < markedArray[rowIndex].length; columnIndex += 1) {
    if (markedArray[rowIndex][columnIndex] == 'x') {
      // console.log('flipped one number');
      let yFlip = 13 - (rowIndex - 13);

      // console.log(yFlip);
      // console.log(`flipping ${columnIndex}, ${rowIndex}`);
      // console.log(`to ${columnIndex}, ${yFlip}`);
      
      markedArray[rowIndex][columnIndex] = 0;
      markedArray[yFlip][columnIndex] = 'x';
    }
  }
}
markedArray.splice(13, markedArray.length);

// flip y=6
for (let rowIndex = 6; rowIndex < markedArray.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < markedArray[rowIndex].length; columnIndex += 1) {
    if (markedArray[rowIndex][columnIndex] == 'x') {
      // console.log('flipped one number');
      let yFlip = 6 - (rowIndex - 6);

      // console.log(yFlip);
      // console.log(`flipping ${columnIndex}, ${rowIndex}`);
      // console.log(`to ${columnIndex}, ${yFlip}`);
      
      markedArray[rowIndex][columnIndex] = 0;
      markedArray[yFlip][columnIndex] = 'x';
    }
  }
}
markedArray.splice(6, markedArray.length);

for (let rowIndex = 0; rowIndex < markedArray.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < markedArray[rowIndex].length; columnIndex += 1) {
    if (markedArray[rowIndex][columnIndex] == 'x') {
      result += 1;
    }
  }
}

// console.log(maxX);
// console.log(maxY);

// console.log(markedArray);
console.log(`RESULT: ${result}`);
// console.log(markedArray);

for (let rowIndex = 0; rowIndex < markedArray.length; rowIndex += 1) {
  let rowText = '';
  for (let columnIndex = 0; columnIndex < markedArray[rowIndex].length; columnIndex += 1) {
    let textToAdd = markedArray[rowIndex][columnIndex] == 'x' ? ' ' + markedArray[rowIndex][columnIndex] : ' .';
    rowText += textToAdd;
  }
  console.log(`${rowText}`);
}
