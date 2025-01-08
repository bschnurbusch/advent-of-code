let input = [
  '5678970120787667809876787651450321789810165432234561012345',
  '4301787431296556912765698540341410786728765501103676545434',
  '3212896594365443213454501231232545695439154610898387656946',
  '4307885785872337801653215432545694321089043781763296047877',
  '5456934576901236998740126721694787899676112891054102137898',
  '4327825676210365485035432830780146788765208982567873223703',
  '1012010789301345304126701910567235623654367643432984012612',
  '9887652105401253213239878323458945514545106543221265698543',
  '6798943766798760560145569850179876408763215456100896787432',
  '5212237854899621056776457763287654309854580367018701656501',
  '4302108983014552345889308954390101218345691278929632540987',
  '8921321212123467496973217654321010101210782987834541231236',
  '7010450908765658787210106563898110567623458906543210340145',
  '6524567849434349872323293478967223408988967217890107459054',
  '5433008956721238721494782566554310510177654394345498768765',
  '8942112349810101430585691057431214321287656783216321659056',
  '9853523658901233549674541008120109450392345654307010123141',
  '6765434567890312678234432219078218765431874309458927034230',
  '1034323450765403510165498348569341016210967218567898985541',
  '4125614321877654523276327653414452547893458967898769876632',
  '3210701234988347678987014512103963458982105450745601896781',
  '4678890215679298689898101105432878967821123301234312765890',
  '5469810309100198776543239416001263456710054210126543454323',
  '6954323458210789743987678327122452349821269329237632670110',
  '7856542167345679812310565498214301265430178778748911789224',
  '3067630018901256701423457012303210178923476565652100654343',
  '2188921078872345690501298989452121089012383418983434334534',
  '3298934569863418987632367898763011298234592307894521025676',
  '0387650101678507876753456501014980347105681016765601210787',
  '1456343212589216909865401432325671256501789823454782309898',
  '2341067823410365419872316543234560787432328987123495434321',
  '8932058934321474321891027652101765698543212656016596521030',
  '7634149965430589890765438984989854321692303443067787676543',
  '4543232876787672763210567823870143430781054512198971980612',
  '4687601045298101454569498014561034231278766503456890121701',
  '3894523432101212343278307601432120140389107652107765439890',
  '2183410589043239852101212587347899655473298940998987610141',
  '1012398679650126760120103496256978796554567831876898543234',
  '0310487778743245679833210145107878987143278722365687650125',
  '1223456899012632988744103230123217610012189013451232105676',
  '8346543456598701279655654389874306526323076567600345694789',
  '9857812347405654210346969210165435435414105458912256783238',
  '6768901098312343981237878301456521056905912345863109890104',
  '0345650101232107834369765412347678167876801056874223454323',
  '1278761321943456125078098943678999101210760767985214567910',
  '2109874430854534076165107834567783212323458898876307698876',
  '3436543561763325689234256623478654323212789954343298714565',
  '4567612675610118763240345510569823434101652765210134503443',
  '5698203984323709454121245432234712345612501897898325612652',
  '6782100112345890365039876101165601016780432101107210726761',
  '6783078201076761276321276543036523239891569232216874835890',
  '5894569345987457889430389236543210145652678740125965934701',
  '6784578896590356996321298107012301276743245656734014821012',
  '5693678787101243987654301058905434985890130543876523498763',
  '4542109843262012276019012765676125673981021982923434549854',
  '3432101257876540145328943894387089012832123671019323676345',
  '4309210369901234239457654703298976326721034501208710789234',
  '3218765478710123378765645612107845435434345212345621678101',
];

// let input = [
//   '0123',
//   '1234',
//   '8765',
//   '9876',
// ];

// let input = [
//   '89010123',
//   '78121874',
//   '87430965',
//   '96549874',
//   '45678903',
//   '32019012',
//   '01329801',
//   '10456732',
// ];

let result = 0;
const rowLimitMin = 0;
const rowLimitMax = input.length - 1;
const columnLimitMin = 0;
const columnLimitMax = input[0].length - 1;

let foundPoints = [];
let score = 0;

for (let i = 0; i < input.length; i += 1) {
  const splitRow = input[i].split('');
  for (let j = 0; j < splitRow.length; j += 1) {
    splitRow[j] = parseInt(splitRow[j], 10);
  }

  input[i] = splitRow;
}

// to display graph
// for (let i = 0; i < input.length; i += 1) {
//   console.log(input[i]);
// }

function walkTrail(startingRow, startingColumn, startingValue) {
  const newValue = startingValue + 1;

  // check up
  if (startingRow - 1 >= rowLimitMin) {
    if (input[startingRow - 1][startingColumn] === newValue && newValue < 9) {
      // console.log(`walking trail for ${startingRow - 1}, ${startingColumn}, found new val ${newValue}`);
      walkTrail(startingRow - 1, startingColumn, newValue);
    } else if (input[startingRow - 1][startingColumn] === newValue && newValue === 9) {
      const uniquePoint = checkPoint(startingRow - 1, startingColumn);
      if (uniquePoint) {
        // console.log(`found a nine at ${startingRow - 1}, ${startingColumn}`);
        foundPoints.push([startingRow - 1, startingColumn]);
        score += 1;
      }
    }
  }

  // check down
  if (startingRow + 1 <= rowLimitMax) {
    if (input[startingRow + 1][startingColumn] === newValue && newValue < 9) {
      // console.log(`walking trail for ${startingRow + 1}, ${startingColumn}, found new val ${newValue}`);
      walkTrail(startingRow + 1, startingColumn, newValue);
    } else if (input[startingRow + 1][startingColumn] === newValue && newValue === 9) {
      const uniquePoint = checkPoint(startingRow + 1, startingColumn);
      if (uniquePoint) {
        // console.log(`found a nine at ${startingRow + 1}, ${startingColumn}`);
        foundPoints.push([startingRow + 1, startingColumn]);
        score += 1;
      }
    }
  }

  // check left
  if (startingColumn - 1 >= columnLimitMin) {
    if (input[startingRow][startingColumn - 1] === newValue && newValue < 9) {
      // console.log(`walking trail for ${startingRow}, ${startingColumn - 1}, found new val ${newValue}`);
      walkTrail(startingRow, startingColumn - 1, newValue);
    } else if (input[startingRow][startingColumn - 1] === newValue && newValue === 9) {
      const uniquePoint = checkPoint(startingRow, startingColumn - 1);
      if (uniquePoint) {
        // console.log(`found a nine at ${startingRow}, ${startingColumn - 1}`);
        foundPoints.push([startingRow, startingColumn - 1]);
        score += 1;
      }
    }
  }

  // check right
  if (startingColumn + 1 <= columnLimitMax) {
    if (input[startingRow][startingColumn + 1] === newValue && newValue < 9) {
      // console.log(`walking trail for ${startingRow}, ${startingColumn + 1}, found new val ${newValue}`);
      walkTrail(startingRow, startingColumn + 1, newValue);
    } else if (input[startingRow][startingColumn + 1] === newValue && newValue === 9) {
      const uniquePoint = checkPoint(startingRow, startingColumn + 1);
      if (uniquePoint) {
        // console.log(`found a nine at ${startingRow}, ${startingColumn + 1}`);
        foundPoints.push([startingRow, startingColumn + 1]);
        score += 1;
      }
    }
  }
}

function checkPoint(row, column) {
  let addPoint = true;
  for (let i = 0; i < foundPoints.length; i += 1) {
    if (foundPoints[i][0] === row && foundPoints[i][1] === column) {
      addPoint = false;
      break;
    }
  }

  return addPoint;
}

for (let i = 0; i < input.length; i += 1) {
  for (let j = 0; j < input[0].length; j += 1) {
    if (input[i][j] === 0) {
      // console.log('doing this');
      score = 0;
      foundPoints = [];
      walkTrail(i, j, 0);
      result += score;
    }
  }
}

console.log(`Result: ${result}`);



// =============================================
// =============================================
// =============================================
// PART TWO
// =============================================
// =============================================
// =============================================

result = 0;
score = 0;

function walkFullTrail(startingRow, startingColumn, startingValue) {
  const newValue = startingValue + 1;

  // check up
  if (startingRow - 1 >= rowLimitMin) {
    if (input[startingRow - 1][startingColumn] === newValue && newValue < 9) {
      // console.log(`walking trail for ${startingRow - 1}, ${startingColumn}, found new val ${newValue}`);
      walkFullTrail(startingRow - 1, startingColumn, newValue);
    } else if (input[startingRow - 1][startingColumn] === newValue && newValue === 9) {
      score += 1;
    }
  }

  // check down
  if (startingRow + 1 <= rowLimitMax) {
    if (input[startingRow + 1][startingColumn] === newValue && newValue < 9) {
      // console.log(`walking trail for ${startingRow + 1}, ${startingColumn}, found new val ${newValue}`);
      walkFullTrail(startingRow + 1, startingColumn, newValue);
    } else if (input[startingRow + 1][startingColumn] === newValue && newValue === 9) {
      score += 1;
    }
  }

  // check left
  if (startingColumn - 1 >= columnLimitMin) {
    if (input[startingRow][startingColumn - 1] === newValue && newValue < 9) {
      // console.log(`walking trail for ${startingRow}, ${startingColumn - 1}, found new val ${newValue}`);
      walkFullTrail(startingRow, startingColumn - 1, newValue);
    } else if (input[startingRow][startingColumn - 1] === newValue && newValue === 9) {
      score += 1;
    }
  }

  // check right
  if (startingColumn + 1 <= columnLimitMax) {
    if (input[startingRow][startingColumn + 1] === newValue && newValue < 9) {
      // console.log(`walking trail for ${startingRow}, ${startingColumn + 1}, found new val ${newValue}`);
      walkFullTrail(startingRow, startingColumn + 1, newValue);
    } else if (input[startingRow][startingColumn + 1] === newValue && newValue === 9) {
      score += 1;
    }
  }
}

for (let i = 0; i < input.length; i += 1) {
  for (let j = 0; j < input[0].length; j += 1) {
    if (input[i][j] === 0) {
      // console.log('doing this');
      score = 0;
      walkFullTrail(i, j, 0);
      result += score;
    }
  }
}

console.log(`Result part two: ${result}`);