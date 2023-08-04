const input = [
[[653,279,-501], // SCANNER 0
[679,389,-558],
[450,-411,508],
[-695,711,321],
[-488,-362,828],
[617,622,535],
[-596,-479,787],
[728,-588,-541],
[616,666,636],
[-519,-440,-646],
[469,-429,698],
[-635,554,281],
[640,303,-449],
[-770,512,-877],
[-529,-488,839],
[-786,405,-744],
[767,-717,-435],
[548,579,606],
[790,-625,-462],
[-720,477,-784],
[377,-427,714],
[-568,-589,-703],
[-84,-26,-131],
[-732,508,283],
[-563,-492,-674],],
[[-425,386,591], // SCANNER 1
[-449,587,580],
[-737,898,-600],
[39,0,43],
[-645,-653,-656],
[-402,-614,731],
[830,-641,327],
[-266,-604,717],
[-370,522,564],
[866,-710,-689],
[680,-782,-665],
[151,98,-78],
[601,691,573],
[609,646,603],
[-558,-794,-706],
[-587,-690,-787],
[-325,-593,829],
[840,789,-549],
[660,730,605],
[964,-667,426],
[916,775,-606],
[-641,913,-518],
[854,-689,-684],
[-779,967,-499],
[981,-556,328],
[880,619,-599],],
[[-433,-534,544], // SCANNER 2
[-435,-569,466],
[-705,516,451],
[-434,544,-451],
[369,755,357],
[461,-845,-641],
[822,-764,631],
[417,688,299],
[-442,538,-730],
[536,-887,-638],
[-400,455,-614],
[692,-911,609],
[-59,-121,-99],
[806,-924,631],
[-496,-441,444],
[294,507,-497],
[599,-720,-655],
[-740,520,635],
[37,37,-30],
[-890,-444,-800],
[-863,-447,-834],
[-879,480,518],
[290,513,-492],
[-749,-402,-893],
[352,664,336],
[340,609,-603],],
[[-348,-472,472], // SCANNER 3
[-558,-639,-485],
[-336,520,435],
[-481,573,504],
[424,769,720],
[-585,-735,-357],
[694,558,-469],
[-471,-546,556],
[-568,-597,-374],
[-565,602,-500],
[-382,-571,618],
[759,-499,667],
[578,-411,-282],
[676,-398,-459],
[-776,616,-534],
[897,559,-455],
[-650,523,-483],
[120,-117,136],
[680,528,-464],
[13,46,71],
[571,-431,-514],
[-414,483,404],
[716,-571,807],
[477,704,692],
[750,-562,669],
[439,778,664],],
[[363,290,737], // SCANNER 4
[-335,752,-760],
[497,-574,-841],
[377,258,745],
[-597,-673,530],
[804,592,-647],
[-419,429,408],
[-531,-559,-697],
[720,-491,332],
[-579,-691,493],
[-434,757,-708],
[648,-473,470],
[30,-145,-62],
[-456,371,539],
[-421,713,-633],
[-651,-465,-741],
[-568,-502,-705],
[847,627,-734],
[-315,458,489],
[464,-500,-766],
[871,763,-642],
[476,-762,-754],
[630,-631,371],
[-636,-879,528],
[524,342,789],],
[[690,-755,-689], // SCANNER 5
[-611,537,489],
[-343,-379,-410],
[-723,456,581],
[-501,-305,537],
[711,-689,-650],
[649,-691,749],
[610,-554,699],
[440,509,-934],
[528,-744,-704],
[379,722,524],
[-443,606,-793],
[-384,389,-775],
[629,493,-909],
[-451,-365,555],
[553,686,591],
[-425,-382,657],
[-395,-509,-393],
[-557,452,-767],
[-318,-512,-543],
[-680,463,347],
[594,-809,704],
[498,476,-829],
[518,682,407],
[93,14,-140],
[-10,126,-47],],
[[-747,-534,-657], // SCANNER 6
[492,747,-778],
[-486,-843,608],
[-856,692,-388],
[609,291,458],
[-560,411,812],
[819,-770,-561],
[809,268,474],
[-934,706,-423],
[-103,-16,-39],
[-795,684,-401],
[-678,476,744],
[826,-857,-547],
[279,-953,525],
[804,350,472],
[517,756,-667],
[360,817,-689],
[342,-811,502],
[287,-779,445],
[3,-147,34],
[-653,-801,609],
[-810,-525,-659],
[-692,-892,627],
[-569,471,678],
[-738,-568,-519],
[790,-667,-546],],
[[-859,543,-643], // SCANNER 7
[-688,703,750],
[474,-589,-775],
[-653,724,701],
[56,-84,105],
[-801,601,-786],
[572,-617,718],
[285,271,-813],
[790,356,960],
[-828,-626,785],
[-781,-713,752],
[741,399,853],
[-721,731,586],
[-428,-510,-698],
[368,-691,-821],
[-465,-534,-763],
[-135,30,139],
[773,477,824],
[-486,-443,-746],
[-801,-545,856],
[409,326,-775],
[449,-515,775],
[363,-685,-825],
[-69,-137,-19],
[-869,495,-810],
[286,249,-743],
[472,-538,601],],
[[-396,-737,680], // SCANNER 8
[483,-575,509],
[333,-689,-363],
[484,698,621],
[765,457,-321],
[-757,718,-734],
[503,709,526],
[-633,-800,-470],
[-859,810,-752],
[-461,775,657],
[-430,714,667],
[346,726,628],
[-438,-812,677],
[706,521,-362],
[401,-631,370],
[-464,633,563],
[-563,-674,663],
[-58,-117,99],
[-657,-678,-500],
[75,-151,-41],
[-749,-683,-483],
[401,-730,-277],
[554,498,-360],
[-774,779,-584],
[367,-636,-447],
[377,-596,416],],
[[484,-612,591], // SCANNER 9
[775,361,557],
[705,529,-688],
[-731,-684,738],
[78,-171,67],
[-811,-550,-451],
[833,426,477],
[541,-620,628],
[-319,571,-741],
[758,-717,-722],
[-353,477,-911],
[-637,479,348],
[-285,518,-825],
[447,-576,508],
[822,-730,-593],
[-637,417,352],
[-661,373,419],
[-770,-557,824],
[-661,-592,-479],
[-775,-609,725],
[681,407,-718],
[-11,-32,-55],
[740,461,438],
[797,524,-705],
[920,-726,-706],
[-746,-734,-439],],
[[582,-825,-367], // SCANNER 10
[777,282,-340],
[585,-505,910],
[814,270,652],
[-83,-178,5],
[-138,5,134],
[-530,780,-769],
[442,-782,-439],
[845,348,615],
[580,-816,-430],
[557,-543,836],
[-849,669,725],
[-861,666,644],
[-686,-549,-524],
[-685,-507,-691],
[693,405,-414],
[-808,659,829],
[-571,-681,677],
[-440,-753,700],
[-448,744,-690],
[-586,786,-585],
[631,316,-439],
[-704,-458,-485],
[745,415,705],
[529,-490,901],
[-445,-604,758],],
[[-812,-468,444], // SCANNER 11
[42,154,104],
[814,-318,-477],
[340,-662,520],
[-421,596,-609],
[625,733,649],
[561,731,418],
[-525,-733,-430],
[405,521,-706],
[-580,815,637],
[-805,-702,487],
[376,543,-827],
[-514,-786,-476],
[358,-630,477],
[-58,40,-16],
[760,-222,-539],
[-656,568,-600],
[-612,780,713],
[-570,681,-544],
[377,509,-606],
[575,717,470],
[-731,-560,556],
[811,-351,-473],
[-616,-729,-412],
[-393,791,711],
[355,-620,435],],
[[-718,-584,-698], // SCANNER 12
[835,-490,226],
[-519,748,-479],
[-402,696,215],
[-397,690,211],
[-508,594,261],
[-320,-244,293],
[-635,665,-521],
[730,683,-819],
[546,687,-784],
[438,-553,-727],
[-319,-266,223],
[431,539,273],
[613,723,-958],
[394,515,338],
[-443,-321,261],
[-607,-542,-708],
[-735,-446,-681],
[-356,659,-513],
[-74,-31,6],
[388,-690,-688],
[825,-538,393],
[767,-596,250],
[433,-808,-743],
[14,159,-94],
[452,448,290],],
[[348,-635,532], // SCANNER 13
[-795,574,275],
[363,401,507],
[350,-600,454],
[488,493,-760],
[-83,185,-28],
[-777,-258,597],
[612,400,474],
[-762,491,-914],
[-839,465,334],
[664,-767,-905],
[-891,-245,619],
[-910,432,316],
[-116,-3,-136],
[438,406,-652],
[-684,-449,-667],
[-907,-405,619],
[805,-725,-812],
[516,412,527],
[-621,-282,-650],
[431,504,-736],
[778,-722,-846],
[411,-728,432],
[-783,597,-821],
[-546,-324,-653],
[-727,515,-960],],
[[-638,-690,564], // SCANNER 14
[791,913,-314],
[646,-771,-483],
[685,-674,-615],
[645,-656,-614],
[-468,606,426],
[426,665,832],
[688,879,-425],
[761,763,-350],
[356,-472,523],
[-534,473,338],
[-587,621,-738],
[399,640,788],
[463,-488,390],
[-489,-739,621],
[-504,-548,-411],
[-460,664,-613],
[-700,681,-651],
[-80,4,29],
[-542,-632,-530],
[-541,-695,593],
[-542,-763,-448],
[-470,455,464],
[339,658,887],
[428,-538,483],],
[[58,76,63], // SCANNER 15
[-435,-686,-512],
[506,-397,-727],
[-397,-611,-526],
[581,704,763],
[450,705,851],
[-597,462,309],
[309,565,-904],
[-691,465,451],
[-587,431,370],
[-633,-483,386],
[303,-568,301],
[-694,798,-728],
[-712,851,-712],
[-626,-345,358],
[-535,-660,-629],
[-119,20,-59],
[412,-374,-715],
[-794,810,-820],
[317,-582,547],
[351,-305,-725],
[484,729,852],
[-728,-502,375],
[279,636,-888],
[339,-506,456],
[72,-64,-129],
[410,575,-868],],
[[617,736,277], // SCANNER 16
[688,-661,-586],
[-66,162,-156],
[663,-599,-497],
[-901,-438,312],
[-865,-437,502],
[411,717,326],
[578,718,368],
[672,-548,635],
[663,-410,601],
[-417,611,358],
[-642,725,-553],
[-742,675,-565],
[762,-745,-463],
[333,562,-961],
[-894,-452,399],
[-462,-353,-657],
[-354,634,216],
[-808,741,-608],
[-10,7,-48],
[-362,554,390],
[412,480,-925],
[735,-550,644],
[517,618,-967],
[-352,-307,-603],
[-381,-499,-613],],
[[523,737,-476], // SCANNER 17
[696,-575,-567],
[649,-639,670],
[-704,-853,400],
[639,695,-559],
[731,-651,-535],
[709,247,423],
[-726,397,-541],
[633,-818,620],
[-542,432,-537],
[-635,704,513],
[-786,-801,-760],
[647,-870,606],
[-64,-95,-3],
[-535,641,420],
[802,388,381],
[-714,-811,403],
[-746,-768,385],
[-552,-844,-767],
[707,-577,-348],
[-609,258,-501],
[743,274,426],
[360,703,-565],
[-557,702,548],
[-644,-732,-686],],
[[-863,443,-642], // SCANNER 18
[29,48,-152],
[-589,924,395],
[571,597,-692],
[-832,382,-652],
[322,-563,611],
[-729,-831,254],
[263,-790,614],
[643,459,681],
[-565,925,429],
[343,-710,-639],
[-590,836,526],
[-719,-795,355],
[320,-665,682],
[-829,524,-746],
[372,-727,-648],
[-443,-639,-767],
[673,540,-569],
[475,563,661],
[-658,-815,224],
[-496,-655,-749],
[562,530,708],
[-484,-747,-849],
[-118,140,-78],
[650,714,-592],
[245,-740,-693],],
[[485,-544,652], // SCANNER 19
[518,316,730],
[605,736,-430],
[747,776,-345],
[-598,-389,-762],
[602,-651,-847],
[9,-73,17],
[-563,-343,-738],
[132,82,56],
[-505,390,-806],
[563,764,-280],
[399,-418,582],
[-590,600,615],
[-632,675,632],
[-317,-508,563],
[-619,-482,-656],
[-326,-658,462],
[541,358,605],
[395,-446,541],
[-431,-624,555],
[652,-543,-760],
[-464,304,-738],
[-558,474,-772],
[-491,553,622],
[449,395,626],
[595,-567,-749],],
[[-691,605,537], // SCANNER 20
[-435,-661,772],
[-906,-749,-307],
[-44,-155,-21],
[741,649,513],
[-879,-657,-284],
[538,-712,454],
[723,-524,-791],
[339,241,-503],
[288,370,-437],
[759,681,556],
[722,-490,-570],
[-693,560,586],
[-134,32,24],
[-783,357,-395],
[-659,641,515],
[-892,271,-434],
[-483,-683,609],
[-800,-620,-346],
[-403,-641,565],
[-840,247,-421],
[744,639,471],
[694,-502,-670],
[285,337,-441],
[524,-698,506],
[474,-714,685],],
[[-478,748,-570], // SCANNER 21
[390,-346,-615],
[532,852,538],
[-636,870,587],
[-633,957,666],
[878,-328,544],
[973,-486,575],
[979,-252,627],
[-514,-497,-496],
[520,874,444],
[-469,965,-539],
[-548,-708,-482],
[-313,-390,551],
[-483,762,-540],
[490,-413,-525],
[421,-268,-578],
[-497,-582,-575],
[155,43,-21],
[678,545,-394],
[-327,-258,417],
[706,492,-329],
[503,887,660],
[5,127,107],
[-296,-275,462],
[650,507,-320],
[-553,812,682],],
[[4,-96,-37], // SCANNER 22
[-702,394,-681],
[-732,543,758],
[687,-874,814],
[544,613,-840],
[-544,-638,690],
[526,629,477],
[-725,311,778],
[-553,-640,627],
[-876,-750,-946],
[479,528,-691],
[535,641,-605],
[665,-896,675],
[-686,-751,-910],
[409,622,366],
[673,-909,736],
[-776,418,-868],
[-789,-736,-939],
[728,-519,-612],
[798,-608,-480],
[-587,-778,618],
[737,-630,-637],
[435,581,451],
[-627,488,791],
[-778,429,-649],
[-154,-13,-112],],
[[-530,-655,411], // SCANNER 23
[-480,-637,471],
[-752,-611,-350],
[600,552,649],
[620,-443,797],
[-634,578,890],
[-27,-4,71],
[627,680,553],
[489,-785,-576],
[581,-493,660],
[795,301,-552],
[829,464,-641],
[-640,-703,-431],
[-529,523,857],
[-559,672,-582],
[524,-601,-580],
[-709,-845,-357],
[-536,755,877],
[565,-488,915],
[-454,-535,488],
[-485,648,-769],
[787,580,-558],
[-483,637,-550],
[350,-668,-616],
[610,663,691],],
[[-439,889,-868], // SCANNER 24
[-595,879,-749],
[-883,-470,742],
[-28,-13,-112],
[374,769,462],
[-899,-512,625],
[525,-432,509],
[-639,-753,-397],
[502,-491,-549],
[-563,739,357],
[679,822,-904],
[777,711,-921],
[514,-231,485],
[276,748,385],
[-882,-632,684],
[-93,70,45],
[778,796,-770],
[-673,883,-919],
[541,-367,430],
[-417,596,359],
[532,-536,-541],
[500,-575,-600],
[-550,-787,-375],
[388,759,326],
[-623,-740,-446],
[-466,680,489],],
[[708,668,622], // SCANNER 25
[-806,-657,-776],
[723,-509,572],
[752,655,697],
[424,670,-419],
[-564,558,686],
[-147,-12,91],
[-6,-113,10],
[-943,-776,580],
[-781,-792,589],
[366,633,-550],
[-678,492,-541],
[232,-987,-707],
[-884,453,-539],
[788,-521,756],
[-845,-663,576],
[370,-933,-688],
[-865,-695,-736],
[-690,-594,-723],
[-470,438,730],
[274,-918,-606],
[747,754,749],
[638,-549,714],
[453,774,-500],
[-696,510,-504],
[-507,521,694],],
[[-546,380,-686], // SCANNER 26
[488,-437,-579],
[-684,505,-672],
[-94,-79,24],
[778,778,-493],
[431,-448,-603],
[566,652,457],
[-680,599,491],
[-675,691,474],
[-783,-541,-518],
[-628,-459,268],
[-621,338,-689],
[-727,-459,-379],
[583,-852,740],
[579,716,586],
[-762,-435,-425],
[441,-767,700],
[575,814,473],
[438,-350,-687],
[399,-917,728],
[-558,575,461],
[805,781,-527],
[-722,-425,438],
[664,823,-434],
[-669,-391,354],],
[[-31,106,163], // SCANNER 27
[-652,-639,456],
[-11,-63,-23],
[-563,-802,490],
[-338,652,745],
[542,-423,658],
[-600,-756,-238],
[-569,-523,498],
[445,618,-272],
[-694,796,-750],
[659,612,-258],
[-592,926,-716],
[362,-839,-246],
[805,406,895],
[706,552,861],
[638,-551,685],
[680,-440,675],
[-683,904,-764],
[476,688,-240],
[731,490,772],
[-594,-761,-234],
[-419,798,701],
[340,-838,-316],
[-498,-650,-284],
[121,63,22],
[-309,844,755],
[417,-715,-284],],
[[-802,564,645], // SCANNER 28
[-667,-713,670],
[-23,-19,155],
[548,-772,-755],
[461,-480,585],
[-666,-755,837],
[-91,118,35],
[-460,697,-758],
[599,-446,576],
[-685,-804,631],
[330,780,467],
[601,-437,513],
[-416,579,-764],
[-629,615,-772],
[-426,-658,-612],
[365,794,389],
[-552,-581,-531],
[576,-719,-690],
[-870,499,763],
[780,653,-620],
[343,772,528],
[722,611,-638],
[857,595,-734],
[-736,559,754],
[604,-757,-764],
[-421,-509,-554],],
[[525,-354,-804], // SCANNER 29
[-738,428,492],
[-744,-454,511],
[817,588,-679],
[-351,650,-317],
[401,-316,-859],
[-757,377,424],
[-745,-397,620],
[716,-702,343],
[165,88,82],
[800,605,-541],
[640,397,672],
[-782,-307,588],
[-685,-343,-529],
[-624,402,396],
[-356,634,-572],
[-306,595,-435],
[-3,-46,35],
[402,-386,-881],
[-753,-319,-635],
[-743,-486,-587],
[674,608,658],
[689,615,-583],
[765,-767,429],
[527,-748,406],
[691,523,579],],
[[-655,-669,507], // SCANNER 30
[-579,676,264],
[708,704,345],
[698,-730,-690],
[647,-412,283],
[114,52,-89],
[-484,781,-876],
[600,754,258],
[-695,-628,-911],
[794,414,-870],
[669,-575,331],
[700,-499,-626],
[684,-678,-676],
[-574,-598,541],
[627,-619,251],
[853,528,-915],
[-32,136,35],
[760,387,-873],
[-584,844,-783],
[-526,580,252],
[-663,-671,-893],
[-653,-713,-896],
[684,761,356],
[-559,829,253],
[-506,842,-748],
[-619,-647,539],],
[[-390,-774,-465], // SCANNER 31
[614,-606,-647],
[797,279,539],
[0,-170,153],
[-766,649,-232],
[-818,636,-256],
[362,633,-355],
[-483,-724,-430],
[768,400,517],
[-87,9,112],
[-621,-523,487],
[-593,-567,539],
[411,-714,502],
[413,567,-226],
[448,-499,540],
[-726,724,635],
[796,500,505],
[530,-630,540],
[615,-588,-687],
[359,629,-322],
[-805,786,672],
[-832,763,764],
[-523,-790,-358],
[-709,675,-342],
[-564,-572,636],
[483,-491,-648],],
[[612,-679,-331], // SCANNER 32
[553,-622,596],
[662,312,-391],
[182,36,67],
[545,636,573],
[88,-125,-99],
[-518,623,-679],
[-623,-818,766],
[-237,-663,-807],
[732,-606,546],
[-529,824,-703],
[-299,-700,-728],
[-473,544,494],
[561,243,-349],
[580,297,-487],
[-502,688,-758],
[-744,-796,795],
[492,573,689],
[-538,551,695],
[-523,-830,794],
[501,-608,610],
[819,-659,-363],
[532,535,748],
[-260,-571,-834],
[-502,522,582],
[656,-637,-411],],
[[-70,76,-69], // SCANNER 33
[711,-630,515],
[-824,-531,-531],
[-869,484,433],
[528,787,-600],
[-644,-427,547],
[654,-622,552],
[-385,438,-616],
[437,-525,-798],
[-478,-482,563],
[-421,628,-615],
[540,605,486],
[334,603,447],
[522,568,504],
[412,840,-663],
[275,-516,-782],
[-905,-487,-677],
[373,-512,-669],
[-544,-439,497],
[353,800,-701],
[-924,516,376],
[-932,342,456],
[-934,-477,-485],
[748,-666,432],
[-392,525,-630],],
[[-10,9,-42], // SCANNER 34
[-525,781,-643],
[426,609,-794],
[717,-756,724],
[-412,-440,-659],
[-635,458,930],
[-474,-351,-634],
[544,556,633],
[-523,790,-706],
[601,-714,641],
[-621,545,923],
[629,-527,-566],
[603,707,-807],
[501,-554,-470],
[-636,648,894],
[-766,-457,381],
[92,136,91],
[-574,-467,410],
[518,-537,-608],
[-720,-511,491],
[-328,-317,-733],
[658,602,-774],
[509,632,665],
[-663,747,-634],
[533,558,852],
[880,-722,635],],
[[-880,894,-337], // SCANNER 35
[-669,-532,-317],
[-599,761,353],
[-862,823,-370],
[-577,875,340],
[-577,891,500],
[424,456,-655],
[-921,779,-479],
[-764,-427,823],
[262,-649,761],
[431,422,582],
[372,547,-673],
[355,-645,-528],
[-664,-364,730],
[326,-725,-405],
[-742,-366,695],
[425,459,501],
[405,-688,867],
[353,586,-657],
[-97,91,-21],
[-722,-628,-305],
[-689,-379,-306],
[338,-762,738],
[232,-658,-426],
[407,502,627],],
[[723,406,-525], // SCANNER 36
[611,-867,-526],
[-717,282,477],
[555,643,396],
[706,-878,-545],
[-506,-401,686],
[-414,279,-360],
[-432,350,-393],
[669,-802,422],
[-717,298,317],
[862,462,-443],
[-472,-402,662],
[575,-944,419],
[18,-45,4],
[-339,-706,-625],
[604,-895,-388],
[-325,-952,-611],
[-373,394,-502],
[-603,-490,661],
[552,568,354],
[565,-883,388],
[816,427,-419],
[-361,-797,-549],
[-695,412,330],
[569,505,521],],
[[-770,-521,-464], // SCANNER 37
[-612,-645,914],
[-812,732,-690],
[-590,-482,866],
[-653,473,549],
[-830,751,-500],
[468,-437,-691],
[-632,-438,946],
[-814,824,-706],
[77,90,53],
[-740,-435,-306],
[638,-487,-731],
[482,-494,-767],
[290,-387,928],
[566,685,-452],
[670,692,598],
[-524,434,443],
[735,676,519],
[-616,411,470],
[871,703,574],
[-110,-1,30],
[611,715,-460],
[527,717,-511],
[344,-406,790],
[-884,-460,-410],
[359,-488,886],]
];



function translate(inputCoords) {
  let translateArray = [];
  translateArray.push(inputCoords);

  // rotate around z +
  // for y ^, x >
  // this one is the given input

  // for y >, x v
  let rebuildArray1 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = inputCoords[translateIndex][1] * -1;
    let newY = inputCoords[translateIndex][0];
    let newZ = inputCoords[translateIndex][2];
    rebuildArray1[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray1);

  // for y v, < x
  let rebuildArray2 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = inputCoords[translateIndex][0] * -1;
    let newY = inputCoords[translateIndex][1] * -1;
    let newZ = inputCoords[translateIndex][2];
    rebuildArray2[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray2);

  // for < y, x ^
  let rebuildArray3 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = rebuildArray1[translateIndex][0] * -1;
    let newY = rebuildArray1[translateIndex][1] * -1;
    let newZ = rebuildArray1[translateIndex][2];
    rebuildArray3[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray3);


  // ===========================
  // rotate around z -
  // ===========================
  // for x >, y v
  let rebuildArray4 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = inputCoords[translateIndex][0];
    let newY = inputCoords[translateIndex][1] * -1;
    let newZ = inputCoords[translateIndex][2] * -1;
    rebuildArray4[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray4);

  // for x v, < y
  let rebuildArray5 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = rebuildArray4[translateIndex][1];
    let newY = rebuildArray4[translateIndex][0] * -1;
    let newZ = rebuildArray4[translateIndex][2];
    rebuildArray5[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray5);

  // for < x, y ^
  let rebuildArray6 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = rebuildArray4[translateIndex][0] * -1;
    let newY = rebuildArray4[translateIndex][1] * -1;
    let newZ = rebuildArray4[translateIndex][2];
    rebuildArray6[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray6);

  // for x ^, y >
  let rebuildArray7 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = rebuildArray5[translateIndex][0] * -1;
    let newY = rebuildArray5[translateIndex][1] * -1;
    let newZ = rebuildArray5[translateIndex][2];
    rebuildArray7[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray7);


  // ===========================
  // rotate around y +
  // ===========================
  // for z- ^, x >
  let rebuildArray8 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = inputCoords[translateIndex][0];
    let newY = inputCoords[translateIndex][2];
    let newZ = inputCoords[translateIndex][1] * -1;
    rebuildArray8[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray8);

  // for z- >, x v
  let rebuildArray9 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = rebuildArray8[translateIndex][2];
    let newY = rebuildArray8[translateIndex][1];
    let newZ = rebuildArray8[translateIndex][0] * -1;
    rebuildArray9[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray9);

  // for z- v, < x
  let rebuildArray10 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = rebuildArray8[translateIndex][0] * -1;
    let newY = rebuildArray8[translateIndex][1];
    let newZ = rebuildArray8[translateIndex][2] * -1;
    rebuildArray10[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray10);

  // for < z-, x^
  let rebuildArray11 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = rebuildArray9[translateIndex][0] * -1;
    let newY = rebuildArray9[translateIndex][1];
    let newZ = rebuildArray9[translateIndex][2] * -1;
    rebuildArray11[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray11);


  // ===========================
  // rotate around y -
  // ===========================
  // for z ^, x >
  let rebuildArray12 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = inputCoords[translateIndex][0];
    let newY = inputCoords[translateIndex][2] * -1;
    let newZ = inputCoords[translateIndex][1];
    rebuildArray12[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray12);

  // for z >, x v
  let rebuildArray13 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = rebuildArray12[translateIndex][2] * -1;
    let newY = rebuildArray12[translateIndex][1];
    let newZ = rebuildArray12[translateIndex][0];
    rebuildArray13[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray13);

  // for z v, < x
  let rebuildArray14 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = rebuildArray12[translateIndex][0] * -1;
    let newY = rebuildArray12[translateIndex][1];
    let newZ = rebuildArray12[translateIndex][2] * -1;
    rebuildArray14[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray14);

  // for < z, x ^
  let rebuildArray15 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = rebuildArray13[translateIndex][0] * -1;
    let newY = rebuildArray13[translateIndex][1];
    let newZ = rebuildArray13[translateIndex][2] * -1;
    rebuildArray15[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray15);


  // ===========================
  // rotate around x +
  // ===========================
  // for y ^, z- >
  let rebuildArray16 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = inputCoords[translateIndex][2];
    let newY = inputCoords[translateIndex][1];
    let newZ = inputCoords[translateIndex][0] * -1;
    rebuildArray16[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray16);

  // for y >, z- v
  let rebuildArray17 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = rebuildArray16[translateIndex][0];
    let newY = rebuildArray16[translateIndex][2] * -1;
    let newZ = rebuildArray16[translateIndex][1];
    rebuildArray17[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray17);

  // for y v, < z-
  let rebuildArray18 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = rebuildArray16[translateIndex][0];
    let newY = rebuildArray16[translateIndex][1] * -1;
    let newZ = rebuildArray16[translateIndex][2] * -1;
    rebuildArray18[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray18);

  // for < y, z- ^
  let rebuildArray19 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = rebuildArray17[translateIndex][0];
    let newY = rebuildArray17[translateIndex][1] * -1;
    let newZ = rebuildArray17[translateIndex][2] * -1;
    rebuildArray19[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray19);


  // ===========================
  // rotate around x -
  // ===========================
  // for y ^, z >
  let rebuildArray20 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = inputCoords[translateIndex][2] * -1;
    let newY = inputCoords[translateIndex][1];
    let newZ = inputCoords[translateIndex][0];
    rebuildArray20[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray20);

  // for y >, z v
  let rebuildArray21 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = rebuildArray20[translateIndex][0];
    let newY = rebuildArray20[translateIndex][2];
    let newZ = rebuildArray20[translateIndex][1] * -1;
    rebuildArray21[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray21);

  // for y v, < z
  let rebuildArray22 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = rebuildArray20[translateIndex][0];
    let newY = rebuildArray20[translateIndex][1] * -1;
    let newZ = rebuildArray20[translateIndex][2] * -1;
    rebuildArray22[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray22);

  // for < y, z ^
  let rebuildArray23 = new Array(inputCoords.length);
  for (let translateIndex = 0; translateIndex < inputCoords.length; translateIndex += 1) {
    let newX = rebuildArray21[translateIndex][0];
    let newY = rebuildArray21[translateIndex][1] * -1;
    let newZ = rebuildArray21[translateIndex][2] * -1;
    rebuildArray23[translateIndex] = [newX, newY, newZ];
  }
  translateArray.push(rebuildArray23);


  return translateArray;
}

let test = [
[653,279,-501],
[679,389,-558],
[450,-411,508],
[-695,711,321],
[-488,-362,828],
[617,622,535],
[-596,-479,787],
[728,-588,-541],
[616,666,636],
[-519,-440,-646],
[469,-429,698],
[-635,554,281],
[640,303,-449],
[-770,512,-877],
[-529,-488,839],
[-786,405,-744],
[767,-717,-435],
[548,579,606],
[790,-625,-462],
[-720,477,-784],
[377,-427,714],
[-568,-589,-703],
[-84,-26,-131],
[-732,508,283],
[-563,-492,-674],
];


// let result = translate(test);
// console.log(result.length);
// console.log(result);



let translatedInput = [];

for (let index = 1; index < input.length; index += 1) {
  translatedInput.push(translate(input[index]));
}
translatedInput.unshift(input[0]);


let scannerCoords = new Array(38);
scannerCoords[0] = [0, 0, 0];
for (let index = 1; index < scannerCoords.length; index += 1) {
  scannerCoords[index] = [,,];
}


let indexsToCheck = new Array(38);
for (let index = 0; index < indexsToCheck.length; index += 1) {
  indexsToCheck[index] = index;
}

function findScannerMatch(baseScanner) {
  // console.log(`base scanner: ${baseScanner}`);
  // indexsToCheck.splice(indexsToCheck.indexOf(baseScanner), 1);
  // console.log(`Indexs to check: ${indexsToCheck}`);

  for (let indexToCheck = 0; indexToCheck < indexsToCheck.length; indexToCheck += 1) {
    // console.log(`Checking against index: ${indexsToCheck[otherScannerIndex]}`);
    let otherScannerIndex = indexsToCheck[indexToCheck];
    let stepsToTake = [];
    for (let originalIndex = 0; originalIndex < translatedInput[baseScanner].length; originalIndex += 1) {
      stepsToTake = [];
      for (let pairIndex = 0; pairIndex < translatedInput[baseScanner].length; pairIndex += 1) {
        if (originalIndex != pairIndex) {
          let xSteps = translatedInput[baseScanner][pairIndex][0] - translatedInput[baseScanner][originalIndex][0];
          let ySteps = translatedInput[baseScanner][pairIndex][1] - translatedInput[baseScanner][originalIndex][1];
          let zSteps = translatedInput[baseScanner][pairIndex][2] - translatedInput[baseScanner][originalIndex][2];
          stepsToTake.push([xSteps, ySteps, zSteps]);
        }
      }
      for (let otherTranslatedIndex = 0; otherTranslatedIndex < translatedInput[otherScannerIndex].length; otherTranslatedIndex += 1) {
        if (typeof translatedInput[otherScannerIndex][0][0] == 'number') {
          break;
        }
        for (let otherOriginalIndex = 0; otherOriginalIndex < translatedInput[otherScannerIndex][otherTranslatedIndex].length; otherOriginalIndex += 1) {
          let checkCoords = [];
          for (let stepsIndex = 0; stepsIndex < stepsToTake.length; stepsIndex += 1) {
            let newX = translatedInput[otherScannerIndex][otherTranslatedIndex][otherOriginalIndex][0] + stepsToTake[stepsIndex][0];
            let newY = translatedInput[otherScannerIndex][otherTranslatedIndex][otherOriginalIndex][1] + stepsToTake[stepsIndex][1];
            let newZ = translatedInput[otherScannerIndex][otherTranslatedIndex][otherOriginalIndex][2] + stepsToTake[stepsIndex][2];
            checkCoords.push([newX, newY, newZ]);
          }

          let matchCount = 0;
          let foundMatch = false;
          for (let checkCoordIndex = 0; checkCoordIndex < checkCoords.length; checkCoordIndex += 1) {
            for (let compareIndex = 0; compareIndex < translatedInput[otherScannerIndex][otherTranslatedIndex].length; compareIndex += 1) {
              if (translatedInput[otherScannerIndex][otherTranslatedIndex][compareIndex][0] == checkCoords[checkCoordIndex][0] && translatedInput[otherScannerIndex][otherTranslatedIndex][compareIndex][1] == checkCoords[checkCoordIndex][1] && translatedInput[otherScannerIndex][otherTranslatedIndex][compareIndex][2] == checkCoords[checkCoordIndex][2]) {
                matchCount += 1;
                // console.log('found one match');
                break;
              }
            }
            if (matchCount >= 11) {
              // this is the right orientation for the scanner and it overlaps with scanner0
              // console.log('found a big match');
              // console.log(`Scanner: ${baseScanner}, matched with scanner: ${otherScannerIndex}, using orientation: ${otherTranslatedIndex}`);
              foundMatch = true;
              break;
            }
          }

          if (foundMatch == true) {
            // determine x,y,z of the scanner
            scannerCoords[otherScannerIndex][0] = translatedInput[baseScanner][originalIndex][0] + (translatedInput[otherScannerIndex][otherTranslatedIndex][otherOriginalIndex][0] * -1);
            scannerCoords[otherScannerIndex][1] = translatedInput[baseScanner][originalIndex][1] + (translatedInput[otherScannerIndex][otherTranslatedIndex][otherOriginalIndex][1] * -1);
            scannerCoords[otherScannerIndex][2] = translatedInput[baseScanner][originalIndex][2] + (translatedInput[otherScannerIndex][otherTranslatedIndex][otherOriginalIndex][2] * -1);

            // splice out other coord sets for this scanner
            let newCoords = [];
            for (let newCoordIndex = 0; newCoordIndex < translatedInput[otherScannerIndex][otherTranslatedIndex].length; newCoordIndex += 1) {
              let adjustedX = translatedInput[otherScannerIndex][otherTranslatedIndex][newCoordIndex][0] + scannerCoords[otherScannerIndex][0];
              let adjustedY = translatedInput[otherScannerIndex][otherTranslatedIndex][newCoordIndex][1] + scannerCoords[otherScannerIndex][1];
              let adjustedZ = translatedInput[otherScannerIndex][otherTranslatedIndex][newCoordIndex][2] + scannerCoords[otherScannerIndex][2];
              newCoords.push([adjustedX, adjustedY, adjustedZ]);
            }

            translatedInput[otherScannerIndex] = newCoords;

            // run again with matched scanner as the base
            findScannerMatch(otherScannerIndex);
            break;
          }
        }
      }
    }
  }
}

findScannerMatch(0);
console.log(translatedInput);
// console.log(translatedInput[0].length);
// console.log(translatedInput[1].length);
// console.log(translatedInput[2].length);
// console.log(translatedInput[25].length);
// console.log(translatedInput[31]);

let uniqueBeacons = [];

for (let index = 0; index < translatedInput.length; index += 1) {
  for (let coordIndex = 0; coordIndex < translatedInput[index].length; coordIndex += 1) {
    let addThisPoint = true;
    for (let checkIndex = 0; checkIndex < uniqueBeacons.length; checkIndex +=1) {
      if (translatedInput[index][coordIndex][0] == uniqueBeacons[checkIndex][0] && translatedInput[index][coordIndex][1] == uniqueBeacons[checkIndex][1] && translatedInput[index][coordIndex][2] == uniqueBeacons[checkIndex][2]) {
        addThisPoint = false;
      }
    }

    if (addThisPoint == true) {
      uniqueBeacons.push([translatedInput[index][coordIndex][0], translatedInput[index][coordIndex][1], translatedInput[index][coordIndex][2]]);
    }
  }
}

// console.log(`Unique beacons? ${uniqueBeacons.length}`);

// console.log(scannerCoords);
let distance = [];

for (let index = 0; index < scannerCoords.length - 1; index += 1) {
  for (let compareIndex = index + 1; compareIndex < scannerCoords.length; compareIndex += 1) {
    let distanceX;
    let distanceY;
    let distanceZ;

    if (Math.sign(scannerCoords[index][0]) == Math.sign(scannerCoords[compareIndex][0])) {
      distanceX = Math.abs(Math.abs(scannerCoords[index][0]) - Math.abs(scannerCoords[compareIndex][0]));
    } else {
      distanceX = Math.abs(scannerCoords[index][0]) + Math.abs(scannerCoords[compareIndex][0]);
    }

    if (Math.sign(scannerCoords[index][1]) == Math.sign(scannerCoords[compareIndex][1])) {
      distanceY = Math.abs(Math.abs(scannerCoords[index][1]) - Math.abs(scannerCoords[compareIndex][1]));
    } else {
      distanceY = Math.abs(scannerCoords[index][1]) + Math.abs(scannerCoords[compareIndex][1]);
    }

    if (Math.sign(scannerCoords[index][2]) == Math.sign(scannerCoords[compareIndex][2])) {
      distanceZ = Math.abs(Math.abs(scannerCoords[index][2]) - Math.abs(scannerCoords[compareIndex][2]));
    } else {
      distanceZ = Math.abs(scannerCoords[index][2]) + Math.abs(scannerCoords[compareIndex][2]);
    }

    // let distanceX = scannerCoords[index][0] + (scannerCoords[compareIndex][0] * -1);
    // let distanceY = scannerCoords[index][1] + (scannerCoords[compareIndex][1] * -1);
    // let distanceZ = scannerCoords[index][2] + (scannerCoords[compareIndex][2] * -1);
    let newDistance = distanceX + distanceY + distanceZ;
    distance.push(newDistance);
  }
}

distance.sort(function(a, b) {
  return a - b;
});

console.log(distance);
console.log(distance[distance.length - 1]);
