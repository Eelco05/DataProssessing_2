$("#container").datamap({
  scope: 'world',
  geography_config: {
    borderColor: 'rgba(255,255,255,0.3)',
    highlightBorderColor: 'rgba(0,0,0,0.5)',
    projection: 'mercator',
    popupTemplate: _.template([
      '<div class="hoverinfo">',
        '<%= geography.properties.name %> <br/>',
        'Population growth is <br/>',
        '<% if (data.popGrowth2015) { %> <%= data.popGrowth2015 %> <% } %> %',
      '</div>'
    ].join('') )
  },
  fills: {
    negative: '#feedde',
    underOne: '#fdbe85',
    underTwo: '#fd8d3c',
    underThree: '#e6550d',
    aboveThree: '#a63603',
    defaultFill: 'gray' 
  },
  data: {
    'AND': { fillKey: 'negative', popGrowth2015: '-3.22939712770996' },
    'PRI': { fillKey: 'negative', popGrowth2015: '-1.73225600549074' },
    'SYR': { fillKey: 'negative', popGrowth2015: '-1.44908648614575' },
    'GEO': { fillKey: 'negative', popGrowth2015: '-1.2962644374484' },
    'KSV': { fillKey: 'negative', popGrowth2015: '-0.865398060317733' },
    'LVA': { fillKey: 'negative', popGrowth2015: '-0.77246822000045' },
    'LTU': { fillKey: 'negative', popGrowth2015: '-0.758848299830083' },
    'BGR': { fillKey: 'negative', popGrowth2015: '-0.638069468160719' },
    'GRC': { fillKey: 'negative', popGrowth2015: '-0.63253610615375' },
    'VIR': { fillKey: 'negative', popGrowth2015: '-0.573784691898851' },
    'PRT': { fillKey: 'negative', popGrowth2015: '-0.505203315904984' },
    'SRB': { fillKey: 'negative', popGrowth2015: '-0.454416442333512' },
    'ROU': { fillKey: 'negative', popGrowth2015: '-0.385442669322606' },
    'UKR': { fillKey: 'negative', popGrowth2015: '-0.363732732009162' },
    'HRV': { fillKey: 'negative', popGrowth2015: '-0.330505844354766' },
    'GRL': { fillKey: 'negative', popGrowth2015: '-0.322038549275343' },
    'HUN': { fillKey: 'negative', popGrowth2015: '-0.221012010422314' },
    'EST': { fillKey: 'negative', popGrowth2015: '-0.193943202023075' },
    'BIH': { fillKey: 'negative', popGrowth2015: '-0.187153386378979' },
    'CEB': { fillKey: 'negative', popGrowth2015: '-0.171543531090165' },
    'ALB': { fillKey: 'negative', popGrowth2015: '-0.155183807365525' },
    'JPN': { fillKey: 'negative', popGrowth2015: '-0.136430273792572' },
    'ESP': { fillKey: 'negative', popGrowth2015: '-0.134797807745048' },
    'MDA': { fillKey: 'negative', popGrowth2015: '-0.0632018907911471' },
    'FRO': { fillKey: 'negative', popGrowth2015: '-0.0456336867491785' },
    'POL': { fillKey: 'negative', popGrowth2015: '-0.0322083993822133' },
    'ITA': { fillKey: 'underOne', popGrowth2015: '0.021292655039706' },
    'SVN': { fillKey: 'underOne', popGrowth2015: '0.0866751974157249' },
    'CUB': { fillKey: 'underOne', popGrowth2015: '0.0918015795998907' },
    'MNE': { fillKey: 'underOne', popGrowth2015: '0.0929112635737907' },
    'VCT': { fillKey: 'underOne', popGrowth2015: '0.0932264647864557' },
    'SVK': { fillKey: 'underOne', popGrowth2015: '0.0996246496690594' },
    'MUS': { fillKey: 'underOne', popGrowth2015: '0.132433082605329' },
    'MKD': { fillKey: 'underOne', popGrowth2015: '0.136155384510631' },
    'BMU': { fillKey: 'underOne', popGrowth2015: '0.147377147331107' },
    'MHL': { fillKey: 'underOne', popGrowth2015: '0.179429839151125' },
    'ASM': { fillKey: 'underOne', popGrowth2015: '0.187434723078851' },
    'RUS': { fillKey: 'underOne', popGrowth2015: '0.192585836711792' },
    'JAM': { fillKey: 'underOne', popGrowth2015: '0.197815356725798' },
    'TUV': { fillKey: 'underOne', popGrowth2015: '0.232217783185864' },
    'EMU': { fillKey: 'underOne', popGrowth2015: '0.238599562419068' },
    'CZE': { fillKey: 'underOne', popGrowth2015: '0.245505012484433' },
    'EUU': { fillKey: 'underOne', popGrowth2015: '0.260379602436529' },
    'MCO': { fillKey: 'underOne', popGrowth2015: '0.286647222310592' },
    'BRB': { fillKey: 'underOne', popGrowth2015: '0.294224086670115' },
    'SLV': { fillKey: 'underOne', popGrowth2015: '0.30859194155559' },
    'LBY': { fillKey: 'underOne', popGrowth2015: '0.310335180759131' },
    'BLR': { fillKey: 'underOne', popGrowth2015: '0.31585623227295' },
    'THA': { fillKey: 'underOne', popGrowth2015: '0.344002135509452' },
    'URY': { fillKey: 'underOne', popGrowth2015: '0.351449062249819' },
    'FIN': { fillKey: 'underOne', popGrowth2015: '0.374669477746381' },
    'KOR': { fillKey: 'underOne', popGrowth2015: '0.382201749887462' },
    'ARM': { fillKey: 'underOne', popGrowth2015: '0.383740746666537' },
    'FSM': { fillKey: 'underOne', popGrowth2015: '0.399033641550984' },
    'TTO': { fillKey: 'underOne', popGrowth2015: '0.412957182946369' },
    'GUY': { fillKey: 'underOne', popGrowth2015: '0.416988960677582' },
    'NLD': { fillKey: 'underOne', popGrowth2015: '0.423129431870569' },
    'ABW': { fillKey: 'underOne', popGrowth2015: '0.432161961367778' },
    'ECS': { fillKey: 'underOne', popGrowth2015: '0.437650811076097' },
    'PST': { fillKey: 'underOne', popGrowth2015: '0.439050831194464' },
    'GRD': { fillKey: 'underOne', popGrowth2015: '0.446584284295375' },
    'NRU': { fillKey: 'underOne', popGrowth2015: '0.451025374832155' },
    'DMA': { fillKey: 'underOne', popGrowth2015: '0.46751934888368' },
    'FRA': { fillKey: 'underOne', popGrowth2015: '0.468770345078223' },
    'CHI': { fillKey: 'underOne', popGrowth2015: '0.474574463380514' },
    'BEL': { fillKey: 'underOne', popGrowth2015: '0.484152118345574' },
    'IRL': { fillKey: 'underOne', popGrowth2015: '0.507198810167138' },
    'CHN': { fillKey: 'underOne', popGrowth2015: '0.508136747291937' },
    'PRK': { fillKey: 'underOne', popGrowth2015: '0.512315384705381' },
    'CSS': { fillKey: 'underOne', popGrowth2015: '0.514897138213428' },
    'TEC': { fillKey: 'underOne', popGrowth2015: '0.515866289174724' },
    'DEU': { fillKey: 'underOne', popGrowth2015: '0.530366450974923' },
    'TON': { fillKey: 'underOne', popGrowth2015: '0.551579629983902' },
    'HIC': { fillKey: 'underOne', popGrowth2015: '0.558394906572076' },
    'DNK': { fillKey: 'underOne', popGrowth2015: '0.574710112989708' },
    'ECA': { fillKey: 'underOne', popGrowth2015: '0.575570336271582' },
    'SMR': { fillKey: 'underOne', popGrowth2015: '0.586974671912263' },
    'LTE': { fillKey: 'underOne', popGrowth2015: '0.597926215936269' },
    'OED': { fillKey: 'underOne', popGrowth2015: '0.626923814113042' },
    'FJI': { fillKey: 'underOne', popGrowth2015: '0.640395307862791' },
    'LIE': { fillKey: 'underOne', popGrowth2015: '0.654933706906491' },
    'EAS': { fillKey: 'underOne', popGrowth2015: '0.667919089548889' },
    'GIB': { fillKey: 'underOne', popGrowth2015: '0.685211513926849' },
    'MAF': { fillKey: 'underOne', popGrowth2015: '0.707922809835042' },
    'EAP': { fillKey: 'underOne', popGrowth2015: '0.716282669339833' },
    'WSM': { fillKey: 'underOne', popGrowth2015: '0.718308448795353' },
    'TEA': { fillKey: 'underOne', popGrowth2015: '0.718837490663461' },
    'LCA': { fillKey: 'underOne', popGrowth2015: '0.734587346432181' },
    'IMN': { fillKey: 'underOne', popGrowth2015: '0.746685991920121' },
    'ARE': { fillKey: 'underOne', popGrowth2015: '0.776450801151777' },
    'UMC': { fillKey: 'underOne', popGrowth2015: '0.782182096308873' },
    'USA': { fillKey: 'underOne', popGrowth2015: '0.784422625629869' },
    'NAC': { fillKey: 'underOne', popGrowth2015: '0.79534616920381' },
    'GBR': { fillKey: 'underOne', popGrowth2015: '0.809355272673642' },
    'AUT': { fillKey: 'underOne', popGrowth2015: '0.810525812295218' },
    'BRA': { fillKey: 'underOne', popGrowth2015: '0.855052949410704' },
    'MMR': { fillKey: 'underOne', popGrowth2015: '0.85713096466051' },
    'CAN': { fillKey: 'underOne', popGrowth2015: '0.863130607208001' },
    'SUR': { fillKey: 'underOne', popGrowth2015: '0.874385786628693' },
    'HKG': { fillKey: 'underOne', popGrowth2015: '0.879887992461468' },
    'COL': { fillKey: 'underOne', popGrowth2015: '0.910880195521804' },
    'PLW': { fillKey: 'underOne', popGrowth2015: '0.915359793226928' },
    'MLT': { fillKey: 'underOne', popGrowth2015: '0.924430448672176' },
    'LKA': { fillKey: 'underOne', popGrowth2015: '0.934429493640965' },
    'IBD': { fillKey: 'underOne', popGrowth2015: '0.959046499435303' },
    'MNP': { fillKey: 'underOne', popGrowth2015: '0.965239085818485' },
    'CYP': { fillKey: 'underTwo', popGrowth2015: '1.00408009198883' },
    'ATG': { fillKey: 'underTwo', popGrowth2015: '1.00483556535211' },
    'TUN': { fillKey: 'underTwo', popGrowth2015: '1.00614301302097' },
    'ARG': { fillKey: 'underTwo', popGrowth2015: '1.01099303655331' },
    'CHL': { fillKey: 'underTwo', popGrowth2015: '1.03887748603621' },
    'ISL': { fillKey: 'underTwo', popGrowth2015: '1.04435862742007' },
    'CRI': { fillKey: 'underTwo', popGrowth2015: '1.05053981933886' },
    'SWE': { fillKey: 'underTwo', popGrowth2015: '1.05424008112992' },
    'PYF': { fillKey: 'underTwo', popGrowth2015: '1.06054731963556' },
    'LCN': { fillKey: 'underTwo', popGrowth2015: '1.06556433167759' },
    'VNM': { fillKey: 'underTwo', popGrowth2015: '1.06878786563907' },
    'LAC': { fillKey: 'underTwo', popGrowth2015: '1.08849803042786' },
    'TLA': { fillKey: 'underTwo', popGrowth2015: '1.10016662822312' },
    'BHR': { fillKey: 'underTwo', popGrowth2015: '1.11765068272754' },
    'NIC': { fillKey: 'underTwo', popGrowth2015: '1.12632324522208' },
    'NOR': { fillKey: 'underTwo', popGrowth2015: '1.1359481678125' },
    'KNA': { fillKey: 'underTwo', popGrowth2015: '1.13649925715502' },
    'MIC': { fillKey: 'underTwo', popGrowth2015: '1.14119212921835' },
    'DOM': { fillKey: 'underTwo', popGrowth2015: '1.16984277070366' },
    'WLD': { fillKey: 'underTwo', popGrowth2015: '1.18241780790602' },
    'SGP': { fillKey: 'underTwo', popGrowth2015: '1.18637693749822' },
    'PSS': { fillKey: 'underTwo', popGrowth2015: '1.18690964931119' },
    'CHE': { fillKey: 'underTwo', popGrowth2015: '1.1936198767308' },
    'NPL': { fillKey: 'underTwo', popGrowth2015: '1.19594095694228' },
    'BGD': { fillKey: 'underTwo', popGrowth2015: '1.19857097212946' },
    'IND': { fillKey: 'underTwo', popGrowth2015: '1.20929453040919' },
    'AZE': { fillKey: 'underTwo', popGrowth2015: '1.21201740440396' },
    'IDN': { fillKey: 'underTwo', popGrowth2015: '1.21443840284205' },
    'LSO': { fillKey: 'underTwo', popGrowth2015: '1.21696447442037' },
    'IRN': { fillKey: 'underTwo', popGrowth2015: '1.22813638287184' },
    'TKM': { fillKey: 'underTwo', popGrowth2015: '1.24177093670876' },
    'CPV': { fillKey: 'underTwo', popGrowth2015: '1.27533611535545' },
    'BTN': { fillKey: 'underTwo', popGrowth2015: '1.27573591646497' },
    'BHS': { fillKey: 'underTwo', popGrowth2015: '1.2878336087206' },
    'MEX': { fillKey: 'underTwo', popGrowth2015: '1.29270519749327' },
    'PER': { fillKey: 'underTwo', popGrowth2015: '1.29439875527159' },
    'IBT': { fillKey: 'underTwo', popGrowth2015: '1.29698274243582' },
    'LMY': { fillKey: 'underTwo', popGrowth2015: '1.30358519105407' },
    'HTI': { fillKey: 'underTwo', popGrowth2015: '1.30657661812908' },
    'PRY': { fillKey: 'underTwo', popGrowth2015: '1.31304731972164' },
    'DJI': { fillKey: 'underTwo', popGrowth2015: '1.32504978592758' },
    'CYM': { fillKey: 'underTwo', popGrowth2015: '1.33459538866301' },
    'MAR': { fillKey: 'underTwo', popGrowth2015: '1.3362324494948' },
    'SAS': { fillKey: 'underTwo', popGrowth2015: '1.33682035325423' },
    'TSA': { fillKey: 'underTwo', popGrowth2015: '1.33682035325423' },
    'VEN': { fillKey: 'underTwo', popGrowth2015: '1.34061294967797' },
    'AUS': { fillKey: 'underTwo', popGrowth2015: '1.34230521538215' },
    'CUW': { fillKey: 'underTwo', popGrowth2015: '1.35756618320693' },
    'BRN': { fillKey: 'underTwo', popGrowth2015: '1.3785904915288' },
    'GUM': { fillKey: 'underTwo', popGrowth2015: '1.38817028155482' },
    'SWZ': { fillKey: 'underTwo', popGrowth2015: '1.39731750100586' },
    'HND': { fillKey: 'underTwo', popGrowth2015: '1.41402665580307' },
    'EAR': { fillKey: 'underTwo', popGrowth2015: '1.41933550948849' },
    'MYS': { fillKey: 'underTwo', popGrowth2015: '1.42452551360489' },
    'LMC': { fillKey: 'underTwo', popGrowth2015: '1.46142546403971' },
    'TUR': { fillKey: 'underTwo', popGrowth2015: '1.46240495099752' },
    'KAZ': { fillKey: 'underTwo', popGrowth2015: '1.46357757786993' },
    'ECU': { fillKey: 'underTwo', popGrowth2015: '1.50684598546934' },
    'SST': { fillKey: 'underTwo', popGrowth2015: '1.52272364345652' },
    'BOL': { fillKey: 'underTwo', popGrowth2015: '1.5298003112074' },
    'PHL': { fillKey: 'underTwo', popGrowth2015: '1.56200128942332' },
    'PAN': { fillKey: 'underTwo', popGrowth2015: '1.58034737286553' },
    'KHM': { fillKey: 'underTwo', popGrowth2015: '1.61630851338636' },
    'SYC': { fillKey: 'underTwo', popGrowth2015: '1.62781673596885' },
    'ZAF': { fillKey: 'underTwo', popGrowth2015: '1.64800933118317' },
    'MAC': { fillKey: 'underTwo', popGrowth2015: '1.66315866006289' },
    'LAO': { fillKey: 'underTwo', popGrowth2015: '1.67108330538337' },
    'MNG': { fillKey: 'underTwo', popGrowth2015: '1.67879076582663' },
    'UZB': { fillKey: 'underTwo', popGrowth2015: '1.74617535675042' },
    'KIR': { fillKey: 'underTwo', popGrowth2015: '1.75245519768136' },
    'TMN': { fillKey: 'underTwo', popGrowth2015: '1.7531581926435' },
    'TCA': { fillKey: 'underTwo', popGrowth2015: '1.75976573683807' },
    'MNA': { fillKey: 'underTwo', popGrowth2015: '1.76780143159441' },
    'VGB': { fillKey: 'underTwo', popGrowth2015: '1.78223202488417' },
    'OSS': { fillKey: 'underTwo', popGrowth2015: '1.80158572376028' },
    'MEA': { fillKey: 'underTwo', popGrowth2015: '1.84038955773973' },
    'NCL': { fillKey: 'underTwo', popGrowth2015: '1.84848146741032' },
    'DZA': { fillKey: 'underTwo', popGrowth2015: '1.86309982968956' },
    'NZL': { fillKey: 'underTwo', popGrowth2015: '1.88904512495193' },
    'BWA': { fillKey: 'underTwo', popGrowth2015: '1.89849496325766' },
    'SLB': { fillKey: 'underTwo', popGrowth2015: '1.97624972563395' },
    'CAF': { fillKey: 'underTwo', popGrowth2015: '1.97764413482271' },
    'ISR': { fillKey: 'underTwo', popGrowth2015: '1.9848688210912' },
    'MDV': { fillKey: 'underThree', popGrowth2015: '2.01521823503817' },
    'GTM': { fillKey: 'underThree', popGrowth2015: '2.023674003141' },
    'ARB': { fillKey: 'underThree', popGrowth2015: '2.02999099022267' },
    'IDB': { fillKey: 'underThree', popGrowth2015: '2.05038808412414' },
    'KGZ': { fillKey: 'underThree', popGrowth2015: '2.0607046776279' },
    'PNG': { fillKey: 'underThree', popGrowth2015: '2.06524682032879' },
    'PAK': { fillKey: 'underThree', popGrowth2015: '2.07542637608567' },
    'SAU': { fillKey: 'underThree', popGrowth2015: '2.09477238316221' },
    'STP': { fillKey: 'underThree', popGrowth2015: '2.1249266415864' },
    'EGY': { fillKey: 'underThree', popGrowth2015: '2.12989211912798' },
    'BLZ': { fillKey: 'underThree', popGrowth2015: '2.13259126722203' },
    'SLE': { fillKey: 'underThree', popGrowth2015: '2.1546614131996' },
    'VUT': { fillKey: 'underThree', popGrowth2015: '2.20395332426966' },
    'GAB': { fillKey: 'underThree', popGrowth2015: '2.20456544917822' },
    'TJK': { fillKey: 'underThree', popGrowth2015: '2.21749915433637' },
    'SDN': { fillKey: 'underThree', popGrowth2015: '2.22313928334425' },
    'IDA': { fillKey: 'underThree', popGrowth2015: '2.24432846540346' },
    'GHA': { fillKey: 'underThree', popGrowth2015: '2.30023188113604' },
    'NAM': { fillKey: 'underThree', popGrowth2015: '2.30267648423617' },
    'ZWE': { fillKey: 'underThree', popGrowth2015: '2.3139582032656' },
    'RWA': { fillKey: 'underThree', popGrowth2015: '2.33655827586481' },
    'IDX': { fillKey: 'underThree', popGrowth2015: '2.35229709287648' },
    'FCS': { fillKey: 'underThree', popGrowth2015: '2.36381939469983' },
    'COM': { fillKey: 'underThree', popGrowth2015: '2.37206053904381' },
    'LUX': { fillKey: 'underThree', popGrowth2015: '2.372590743214' },
    'JOR': { fillKey: 'underThree', popGrowth2015: '2.37794695477857' },
    'LDC': { fillKey: 'underThree', popGrowth2015: '2.38884757049253' },
    'LBR': { fillKey: 'underThree', popGrowth2015: '2.40200528179052' },
    'GNB': { fillKey: 'underThree', popGrowth2015: '2.4041732595843' },
    'CIV': { fillKey: 'underThree', popGrowth2015: '2.42751655785733' },
    'MRT': { fillKey: 'underThree', popGrowth2015: '2.43726626685767' },
    'YEM': { fillKey: 'underThree', popGrowth2015: '2.44670547157781' },
    'CMR': { fillKey: 'underThree', popGrowth2015: '2.4771421208618' },
    'ETH': { fillKey: 'underThree', popGrowth2015: '2.47736063044942' },
    'COG': { fillKey: 'underThree', popGrowth2015: '2.52866751615934' },
    'SOM': { fillKey: 'underThree', popGrowth2015: '2.53042496262022' },
    'KEN': { fillKey: 'underThree', popGrowth2015: '2.61079241574063' },
    'BEN': { fillKey: 'underThree', popGrowth2015: '2.61997410768482' },
    'TGO': { fillKey: 'underThree', popGrowth2015: '2.62731342565296' },
    'NGA': { fillKey: 'underThree', popGrowth2015: '2.62804435321791' },
    'GIN': { fillKey: 'underThree', popGrowth2015: '2.67707221566962' },
    'LIC': { fillKey: 'underThree', popGrowth2015: '2.73035118512578' },
    'SSF': { fillKey: 'underThree', popGrowth2015: '2.73089671877655' },
    'TSS': { fillKey: 'underThree', popGrowth2015: '2.73089671877655' },
    'SSA': { fillKey: 'underThree', popGrowth2015: '2.73099895212825' },
    'MOZ': { fillKey: 'underThree', popGrowth2015: '2.75984136421365' },
    'HPC': { fillKey: 'underThree', popGrowth2015: '2.76323170684731' },
    'MDG': { fillKey: 'underThree', popGrowth2015: '2.77665701570315' },
    'AFG': { fillKey: 'underThree', popGrowth2015: '2.80298628268961' },
    'QAT': { fillKey: 'underThree', popGrowth2015: '2.87217241822787' },
    'BFA': { fillKey: 'underThree', popGrowth2015: '2.89346621152912' },
    'PRE': { fillKey: 'underThree', popGrowth2015: '2.89452427118164' },
    'GNQ': { fillKey: 'underThree', popGrowth2015: '2.90246041938627' },
    'PSE': { fillKey: 'underThree', popGrowth2015: '2.92469071065949' },
    'SXM': { fillKey: 'underThree', popGrowth2015: '2.95961577064923' },
    'MLI': { fillKey: 'underThree', popGrowth2015: '2.9620813196841' },
    'SEN': { fillKey: 'aboveThree', popGrowth2015: '3.06525981531419' },
    'MWI': { fillKey: 'aboveThree', popGrowth2015: '3.06701458003165' },
    'ZMB': { fillKey: 'aboveThree', popGrowth2015: '3.07181206708305' },
    'TZA': { fillKey: 'aboveThree', popGrowth2015: '3.13018510197334' },
    'COD': { fillKey: 'aboveThree', popGrowth2015: '3.14173811307622' },
    'GMB': { fillKey: 'aboveThree', popGrowth2015: '3.20114087141111' },
    'IRQ': { fillKey: 'aboveThree', popGrowth2015: '3.20851826109354' },
    'AGO': { fillKey: 'aboveThree', popGrowth2015: '3.22650565731423' },
    'UGA': { fillKey: 'aboveThree', popGrowth2015: '3.25331364537289' },
    'TCD': { fillKey: 'aboveThree', popGrowth2015: '3.2612971383308' },
    'BDI': { fillKey: 'aboveThree', popGrowth2015: '3.29239234674698' },
    'SSD': { fillKey: 'aboveThree', popGrowth2015: '3.53529926683402' },
    'KWT': { fillKey: 'aboveThree', popGrowth2015: '3.63649511704448' },
    'NER': { fillKey: 'aboveThree', popGrowth2015: '4.02686893114338' },
    'LBN': { fillKey: 'aboveThree', popGrowth2015: '4.16443934309681' },
    'OMN': { fillKey: 'aboveThree', popGrowth2015: '5.83403007342777' 
    }
  }
});