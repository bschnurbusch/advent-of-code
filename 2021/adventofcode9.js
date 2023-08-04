const input = [
'5678998989432198943298876799876586789998999434988989999876544345789987654545678931299765458679432456',
'4556987678949987899097655679767345678987898949876579899987432134889987653237889542989654323488921347',
'3245696569298765678976544598653234567896567899885467799876598245678998542126898769878943212367892356',
'7656789689019654569895432987743125678923456998764345689987987656789987632015789998767932103456789969',
'8767898789298965698789321296532012789912367897651234993398999867897898543234567897657899344868999898',
'9898909899987976987679434987432123567893458976543349892109234978935987654945678956545888956779019787',
'2999312999876899876548976798543256798954578987985498789290125989124698878876789545434677897892197656',
'1098929989765678987537897899674345689765989299876989687989234998995789989989895432123456998999976545',
'2987898763234567895426899999965457999879999101999878576978949876789891096593987643034587899698765434',
'3496987654345979971015678989876598943989898999998765465767898765678992987432398854234567934569876745',
'4985499795659898965434599575989699432396797878999874323456789654567989989321239954346789123456987659',
'9875324989798787896545789434798789101234986767899983212345896543459878976310198765457991014569999868',
'9766219878989656789659897321679893212379875456798432101236998532598767895421239876678962195998941979',
'9854398768878968998767896432567954523459864323987543212456897431999656789532345987789653979896532989',
'8765498656867978979898998543459995745569876434598798654567896569898545678945478998999969867789549899',
'9876986545457899656979999876598989856978987945679898767878987798767634599999567899019898656678998789',
'9989978432345898789767899987987679997899199896789979878989498987656424989987678999198776547578999678',
'8998764321256789995456789999976567989921099798996568989595349998843213577898789878998652123469996578',
'7987653210127897654365898998765465678932989699765439995430157898632102356999896569986541012345987989',
'6398865432238976543234567899901234567899876587996549899321298976543214467899954398997632123657898994',
'5219976554349899432129698999893345678998765346789659798932349998654323578999876497989543234567899543',
'4323987665656798921098989998789556989987654223878998687893499969875987679987988986578994547678978932',
'9495999877897987892987878987678967898998743012567896546979987855987898789876599965489789659789459891',
'8989892998999876789976567897567998957989432123456985434569756234598939898765498744345699967891298789',
'7678793459998965678975456976456789549876543254569876324598542123459329999654399534234898898999987678',
'6547689567987854769894345994347695434987656767878987765987643044678998998765987620123456789998976567',
'2134578979876543456789234789234589323698787878989998987896543235799987989976798731245977898987894348',
'1023456798989874767890125696345678934569898999598999199987654376789876476799987654356898987656791239',
'2434587997898765889931459895456989545679999545457889298998775479898784345678998767487929876545789545',
'3679679876779976789432345796587997656798789432345678987989986567987673234789769876598934987656899696',
'4598798785669899996543456998798998787989699421234567896767897678976543125898654987679875898967998989',
'5689987674357698999876567899899899899876568994365898965658998789985432016789543298789876789878987977',
'6898998543234567899997878965956789921965434589456789984347899899876543123895432109897989898989995456',
'7987899932123456789398989954345997899875325678987896543256789976987754544789549212976799997699984378',
'8996998761014767891239997896456896898765456789198987632149899965599865765678998999765678986569876467',
'9965987654145678910949876789587965789876567991019996543234999843479876878989576788974599875454987678',
'7894398743234599999898765678998954678987878992398897755345898764567987989995435567893987654323499789',
'6989219894346789987769989789989563867999989989987789976456789879679998999876323467932198763212599890',
'5678923998456799976545699899876432345693299979876667896597999998998999998987212348942019874343989921',
'4567894986568897895434567921987321276789129864985456997678999987897999987658301239953198765454678934',
'3656789997679936789323989210995490987899298743234357898789878546786789876543212367893239887565789995',
'2345678998789325679999898929876989898998987654101256789898765435545678987665325456789357997676799989',
'3476789019995434569878787899989978789997987643214347999999854321236789898775434567895467898789989878',
'4567892129876765698765676789998767679876987654765656789998763210145698769887655698986578969899878767',
'5688943436987986997654565678987654598765498769876777899989954321234789656998767899987699656998766456',
'7899894545698999876543234567896543987654329989987888989679895452345678946989878957899988997987654345',
'9956789656789123987632123479987659876543213597898999876565789667458789239878989745987567689998765456',
'2345678967894234696541014578898767998632101456789767987434578978569890198767897659986456578909876567',
'3456789878954356986532123456789878996543212347890345898323467999998932987656789798765343469219989878',
'4567896989996969897543234587990989987654323456921256789212356989897949876545678999973212458998596989',
'8689965699989898798656945678991399898785434567892345892101249876786899865434567899865393567967445698',
'8792123989876767679987898789789989789897545679953556789234598765645697654323798999976989998953234567',
'9893439876565654567898989897678976567998976789767787896545987543234789763212346789899877899762146788',
'1999598765434123456999878978567985445879987899879898987657998652101679654101235898765766794321017899',
'2398987654321014567894569865379876234567898999989999698769876543213568969233346789654545689987634799',
'9987898998432123798923498765456989445789999998993987569899989984623479598944567896543234568976545678',
'8765659996543235689212349878579876556895698987894595456989999876534689457899698965432124589987678989',
'5434347987656345678901656987689987667894987656889696579878989987678994345678969999943012679799889998',
'6521236798965456789892997899893198789989876645678989698769878998789101234589456987899323569654999987',
'7632345899878569898799789910999099895469985434569878997645568999893214456678967965678954578967998976',
'6543656901989689987687678921398987994398996945698969876431467989965323467889899876789995678979876765',
'7654567899798799976546469892987856789987889896987654986542349878976545578996791987899989789998765434',
'8765678978669899865435346789896543899765678789998743297656598967897767899545932398999878999987654321',
'9889889765554987654321234599787012987654885678987654198787987656899898989959893999989656798999766432',
'6998999984323498765634345987652123498753234569988621019899876547999979569899789899877545987899997949',
'5656789993212549876765678999543934995432123458976542323999987656898763456798656789765434876789989898',
'3245678995301234987876789987659899876541012367897643434589998867897652367987545679654321345899876767',
'5346889876418345698997895698998767987632123456789656565678939978998743489876434599865632346989765656',
'6757895987567896789298994349898657898743246577898969996799320989987654578987645689976543559876534345',
'7878934599678987892129789656798745569854768688957898789978999999898965789998786792987654667987621234',
'8989321698789998943345678969959433498769879799346789698767688998789896999979897891099788789599732345',
'9399934789899999874456989298743212349899989890123699545654567987678797899765998999988999995498543456',
'1239895698999889965569890129654101257999897921234568932343879876587689999854349998877989654397654767',
'3398789987898779897698789298765233398998765434345678921012998765434567899873234987765678965298765878',
'5497679876789657789987678999874345479999876845456989532323459764323456789984749896584567994349896989',
'9986545985698745678998545899985456567899987656567896543456798765436578999875698785323456789956997891',
'8765439876789434567899676789876567898989998787898987654578899877748789854976987654212345679897989930',
'9854323987896567678998787898998678959678999898999498767999901987659899765987998765401256798769878921',
'9965214598987679789799898997679789344569989969894329898999892398767978979998999878919347987656767932',
'9876329699998799897689999999569896103498767456789212959998789999898956798939389989898959876545658993',
'3987898989899899954599987878979975212997656345892101345894569889999345987821278998767898765434545689',
'2198987676799989323989765468998764329876543234789292456793298767893239876710367987656797654323434578',
'3999997545989878939878954359899765478987832145678989667894987656789123985321459977645498967410123467',
'9889998659878967899867895456789876569998953256899679998965976545993239876432598766532359978823234589',
'9775879769767456798756789767898987878999866367996567899876987636789998987543679854321267898764345699',
'8654569898659345986545678978987898989398765456789456999987898747898767987654678965432878929875456789',
'8743453986545239875434567899876789999219876567894347898998999898989654599865679876543989434986578999',
'9432012987432129854323456789765898998723987678989256987899298969678913479876789987767998745797989378',
'6543123497654098765212345678954767896545698989879129876789197654599904567989894398979997656998990165',
'8656934598843259876323467989653457997959789698768998695778986543489895989199965219497998797899989234',
'9879899789654348985434578999942346789898994599545986434569999642376789891019876101356989989987678946',
'9998778998765467897665689678799457898767895987439876545678998921235679792198989212349879978998567897',
'9897669899989878998786789545678968998656789876545989656789987892346895679987654323498768967899456789',
'8789456789999989659887895434567899876545457987676798767899876789457893568999876654599545656789577897',
'7678345678999896543998976125678923965432346798787899879954965878967932477899987765987434346899789956',
'8543234567898765432159876546789019876553456899898965989965954767898921276789998879876521235678993234',
'8732145678969876643345987657893247987864579965999754296899843459899632345899879989987432346789210123',
'9543234689654987754456799768985356798977678954987653124989752576789543656946965399876545457894321234',
'7687657995323499767569894978976467899398789432098764349876641345689654568939873212999856567965432345',
'8798767897435679898989943989989878910239896545139975668965432456799767899123982101298767878978644567',
];

// const input = [
// '2199943210',
// '3987894921',
// '9856789892',
// '8767896789',
// '9899965678',
// ];

let result = 0;
let lowPoints = [];
let basinSizes = [];
let currentBasin = 0;

for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
  input[rowIndex] = input[rowIndex].split('');
}

for (let rowIndex = 0; rowIndex < input.length; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex < input[rowIndex].length; columnIndex += 1) {
    let leftPoint = rowIndex >= 1 ? input[rowIndex - 1][columnIndex] : undefined;
    let upPoint = columnIndex >= 1 ? input[rowIndex][columnIndex - 1] : undefined;
    let rightPoint = rowIndex < (input.length - 1) ? input[rowIndex + 1][columnIndex] : undefined;
    let downPoint = columnIndex < (input[rowIndex].length - 1) ? input[rowIndex][columnIndex + 1] : undefined;
    let currentPoint = input[rowIndex][columnIndex];

    if ((!leftPoint || leftPoint > currentPoint) && (!upPoint || upPoint > currentPoint) && (!rightPoint || rightPoint > currentPoint) && (!downPoint || downPoint > currentPoint)) {
      // console.log(`Point found: ${parseInt(currentPoint)}`);
      // console.log(`X coord: ${rowIndex}`);
      // console.log(`Y coord: ${columnIndex}`);
      // if (rowIndex == 1) {
      //   console.log(leftPoint);
      //   console.log(upPoint);
      //   console.log(rightPoint);
      //   console.log(downPoint);
      // }
      result += (parseInt(currentPoint) + 1);
      let xCoord = rowIndex;
      let yCoord = columnIndex;
      lowPoints.push([xCoord, yCoord]);
    }
  }
}

let pointsCounted = new Array(100);
for (let index = 0; index < pointsCounted.length; index += 1) {
  pointsCounted[index] = new Array(100);
}

function pointCheck(centerX, centerY) {
  // currentBasin += 1;
  let leftPoint = centerX >= 1 ? input[centerX - 1][centerY] : undefined;
  let upPoint = centerY >= 1 ? input[centerX][centerY - 1] : undefined;
  let rightPoint = centerX < (input.length - 1) ? input[centerX + 1][centerY] : undefined;
  let downPoint = centerY < (input[centerX].length - 1) ? input[centerX][centerY + 1] : undefined;

  if (leftPoint && (parseInt(leftPoint) < 9) && pointsCounted[centerX - 1][centerY] != 'x') {
    // currentBasin += 1;
    pointsCounted[centerX - 1][centerY] = 'x';
    pointCheck(centerX - 1, centerY);
  }
  if (upPoint && (parseInt(upPoint) < 9) && pointsCounted[centerX][centerY - 1] != 'x') {
    // currentBasin += 1;
    pointsCounted[centerX][centerY - 1] = 'x';
    pointCheck(centerX, centerY - 1);
  }
  if (rightPoint && (parseInt(rightPoint) < 9) && pointsCounted[centerX + 1][centerY] != 'x') {
    // currentBasin += 1;
    pointsCounted[centerX + 1][centerY] = 'x';
    pointCheck(centerX + 1, centerY);
  }
  if (downPoint && (parseInt(downPoint) < 9) && pointsCounted[centerX][centerY + 1] != 'x') {
    // currentBasin += 1;
    pointsCounted[centerX][centerY + 1] = 'x';
    pointCheck(centerX, centerY + 1);
  }
}

// console.log(`Low points: ${lowPoints}`);
// console.log(lowPoints.length);

for (let lowPointIndex = 0; lowPointIndex < lowPoints.length; lowPointIndex += 1) {
  currentBasin = 0;
  pointsCounted = new Array(100);
  for (let index = 0; index < pointsCounted.length; index += 1) {
    pointsCounted[index] = new Array(100);
  }
  pointCheck(lowPoints[lowPointIndex][0], lowPoints[lowPointIndex][1]);
  // basinSizes.push(currentBasin);
  // console.log(`Points counted:`);
  // console.log(pointsCounted[0]);
  // console.log(pointsCounted[1]);
  // console.log(pointsCounted[2]);
  // console.log(pointsCounted[3]);
  // console.log(pointsCounted[4]);
  // console.log(pointsCounted[5]);
  for (let xIndex = 0; xIndex < pointsCounted.length; xIndex += 1) {
    for (let yIndex = 0; yIndex < pointsCounted[xIndex].length; yIndex += 1) {
      if (pointsCounted[xIndex][yIndex] == 'x') {
        currentBasin += 1;
      }
    }
  }
  basinSizes.push(currentBasin);
}

basinSizes.sort(function(a, b) {
  return a - b;
});

// console.log(basinSizes);

let highOne = basinSizes[basinSizes.length - 1];
let highTwo = basinSizes[basinSizes.length - 2];
let highThree = basinSizes[basinSizes.length - 3];
// console.log(`one: ${highOne}`);
// console.log(`two: ${highTwo}`);
// console.log(`three: ${highThree}`);

console.log(`Result: ${highOne * highTwo * highThree}`)

// console.log(result);
