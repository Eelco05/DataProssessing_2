queue()
    .defer(d3.json, 'd3lineLee.json')
    .defer(d3.json, 'd3lineRot.json')
    .await(InitChart);

function InitChart() {
var data = 
[
    {
        "dagGemTemp": "50",
        "stad": "Leeuwarden",
        "dag": "1",
        "dagMinTemp": "3",
        "dagMaxTemp": "90"
    },
    {
        "dagGemTemp": "34",
        "stad": "Leeuwarden",
        "dag": "2",
        "dagMinTemp": "21",
        "dagMaxTemp": "45"
    },
    {
        "dagGemTemp": "11",
        "stad": "Leeuwarden",
        "dag": "3",
        "dagMinTemp": "-2",
        "dagMaxTemp": "21"
    },
    {
        "dagGemTemp": "-18",
        "stad": "Leeuwarden",
        "dag": "4",
        "dagMinTemp": "-32",
        "dagMaxTemp": "13"
    },
    {
        "dagGemTemp": "-21",
        "stad": "Leeuwarden",
        "dag": "5",
        "dagMinTemp": "-33",
        "dagMaxTemp": "-12"
    },
    {
        "dagGemTemp": "-34",
        "stad": "Leeuwarden",
        "dag": "6",
        "dagMinTemp": "-42",
        "dagMaxTemp": "-26"
    },
    {
        "dagGemTemp": "10",
        "stad": "Leeuwarden",
        "dag": "7",
        "dagMinTemp": "-26",
        "dagMaxTemp": "65"
    },
    {
        "dagGemTemp": "55",
        "stad": "Leeuwarden",
        "dag": "8",
        "dagMinTemp": "21",
        "dagMaxTemp": "83"
    },
    {
        "dagGemTemp": "42",
        "stad": "Leeuwarden",
        "dag": "9",
        "dagMinTemp": "9",
        "dagMaxTemp": "62"
    },
    {
        "dagGemTemp": "57",
        "stad": "Leeuwarden",
        "dag": "10",
        "dagMinTemp": "37",
        "dagMaxTemp": "73"
    },
    {
        "dagGemTemp": "42",
        "stad": "Leeuwarden",
        "dag": "11",
        "dagMinTemp": "28",
        "dagMaxTemp": "58"
    },
    {
        "dagGemTemp": "53",
        "stad": "Leeuwarden",
        "dag": "12",
        "dagMinTemp": "31",
        "dagMaxTemp": "76"
    },
    {
        "dagGemTemp": "41",
        "stad": "Leeuwarden",
        "dag": "13",
        "dagMinTemp": "14",
        "dagMaxTemp": "71"
    },
    {
        "dagGemTemp": "24",
        "stad": "Leeuwarden",
        "dag": "14",
        "dagMinTemp": "6",
        "dagMaxTemp": "53"
    },
    {
        "dagGemTemp": "20",
        "stad": "Leeuwarden",
        "dag": "15",
        "dagMinTemp": "-7",
        "dagMaxTemp": "46"
    },
    {
        "dagGemTemp": "21",
        "stad": "Leeuwarden",
        "dag": "16",
        "dagMinTemp": "-5",
        "dagMaxTemp": "47"
    },
    {
        "dagGemTemp": "-4",
        "stad": "Leeuwarden",
        "dag": "17",
        "dagMinTemp": "-39",
        "dagMaxTemp": "32"
    },
    {
        "dagGemTemp": "-26",
        "stad": "Leeuwarden",
        "dag": "18",
        "dagMinTemp": "-43",
        "dagMaxTemp": "-5"
    },
    {
        "dagGemTemp": "-5",
        "stad": "Leeuwarden",
        "dag": "19",
        "dagMinTemp": "-45",
        "dagMaxTemp": "25"
    },
    {
        "dagGemTemp": "9",
        "stad": "Leeuwarden",
        "dag": "20",
        "dagMinTemp": "-38",
        "dagMaxTemp": "46"
    },
    {
        "dagGemTemp": "-16",
        "stad": "Leeuwarden",
        "dag": "21",
        "dagMinTemp": "-46",
        "dagMaxTemp": "0"
    },
    {
        "dagGemTemp": "0",
        "stad": "Leeuwarden",
        "dag": "22",
        "dagMinTemp": "-26",
        "dagMaxTemp": "33"
    },
    {
        "dagGemTemp": "59",
        "stad": "Leeuwarden",
        "dag": "23",
        "dagMinTemp": "33",
        "dagMaxTemp": "89"
    },
    {
        "dagGemTemp": "68",
        "stad": "Leeuwarden",
        "dag": "24",
        "dagMinTemp": "45",
        "dagMaxTemp": "96"
    },
    {
        "dagGemTemp": "98",
        "stad": "Leeuwarden",
        "dag": "25",
        "dagMinTemp": "69",
        "dagMaxTemp": "131"
    },
    {
        "dagGemTemp": "75",
        "stad": "Leeuwarden",
        "dag": "26",
        "dagMinTemp": "47",
        "dagMaxTemp": "96"
    },
    {
        "dagGemTemp": "101",
        "stad": "Leeuwarden",
        "dag": "27",
        "dagMinTemp": "78",
        "dagMaxTemp": "116"
    },
    {
        "dagGemTemp": "60",
        "stad": "Leeuwarden",
        "dag": "28",
        "dagMinTemp": "43",
        "dagMaxTemp": "78"
    },
    {
        "dagGemTemp": "89",
        "stad": "Leeuwarden",
        "dag": "29",
        "dagMinTemp": "53",
        "dagMaxTemp": "103"
    },
    {
        "dagGemTemp": "67",
        "stad": "Leeuwarden",
        "dag": "30",
        "dagMinTemp": "28",
        "dagMaxTemp": "93"
    },
    {
        "dagGemTemp": "56",
        "stad": "Leeuwarden",
        "dag": "31",
        "dagMinTemp": "41",
        "dagMaxTemp": "71"
    }];

var data2 = [{
        "dagGemTemp": "56",
        "stad": "Rotterdam",
        "dag": "1",
        "dagMinTemp": "17",
        "dagMaxTemp": "87"
    },
    {
        "dagGemTemp": "69",
        "stad": "Rotterdam",
        "dag": "2",
        "dagMinTemp": "53",
        "dagMaxTemp": "83"
    },
    {
        "dagGemTemp": "73",
        "stad": "Rotterdam",
        "dag": "3",
        "dagMinTemp": "48",
        "dagMaxTemp": "88"
    },
    {
        "dagGemTemp": "66",
        "stad": "Rotterdam",
        "dag": "4",
        "dagMinTemp": "46",
        "dagMaxTemp": "79"
    },
    {
        "dagGemTemp": "70",
        "stad": "Rotterdam",
        "dag": "5",
        "dagMinTemp": "59",
        "dagMaxTemp": "79"
    },
    {
        "dagGemTemp": "54",
        "stad": "Rotterdam",
        "dag": "6",
        "dagMinTemp": "42",
        "dagMaxTemp": "69"
    },
    {
        "dagGemTemp": "68",
        "stad": "Rotterdam",
        "dag": "7",
        "dagMinTemp": "57",
        "dagMaxTemp": "89"
    },
    {
        "dagGemTemp": "60",
        "stad": "Rotterdam",
        "dag": "8",
        "dagMinTemp": "33",
        "dagMaxTemp": "82"
    },
    {
        "dagGemTemp": "64",
        "stad": "Rotterdam",
        "dag": "9",
        "dagMinTemp": "35",
        "dagMaxTemp": "82"
    },
    {
        "dagGemTemp": "69",
        "stad": "Rotterdam",
        "dag": "10",
        "dagMinTemp": "49",
        "dagMaxTemp": "89"
    },
    {
        "dagGemTemp": "57",
        "stad": "Rotterdam",
        "dag": "11",
        "dagMinTemp": "34",
        "dagMaxTemp": "74"
    },
    {
        "dagGemTemp": "65",
        "stad": "Rotterdam",
        "dag": "12",
        "dagMinTemp": "50",
        "dagMaxTemp": "75"
    },
    {
        "dagGemTemp": "54",
        "stad": "Rotterdam",
        "dag": "13",
        "dagMinTemp": "25",
        "dagMaxTemp": "71"
    },
    {
        "dagGemTemp": "42",
        "stad": "Rotterdam",
        "dag": "14",
        "dagMinTemp": "23",
        "dagMaxTemp": "58"
    },
    {
        "dagGemTemp": "27",
        "stad": "Rotterdam",
        "dag": "15",
        "dagMinTemp": "4",
        "dagMaxTemp": "48"
    },
    {
        "dagGemTemp": "35",
        "stad": "Rotterdam",
        "dag": "16",
        "dagMinTemp": "1",
        "dagMaxTemp": "64"
    },
    {
        "dagGemTemp": "-2",
        "stad": "Rotterdam",
        "dag": "17",
        "dagMinTemp": "-49",
        "dagMaxTemp": "32"
    },
    {
        "dagGemTemp": "-19",
        "stad": "Rotterdam",
        "dag": "18",
        "dagMinTemp": "-36",
        "dagMaxTemp": "5"
    },
    {
        "dagGemTemp": "-10",
        "stad": "Rotterdam",
        "dag": "19",
        "dagMinTemp": "-68",
        "dagMaxTemp": "20"
    },
    {
        "dagGemTemp": "21",
        "stad": "Rotterdam",
        "dag": "20",
        "dagMinTemp": "-21",
        "dagMaxTemp": "53"
    },
    {
        "dagGemTemp": "-1",
        "stad": "Rotterdam",
        "dag": "21",
        "dagMinTemp": "-35",
        "dagMaxTemp": "13"
    },
    {
        "dagGemTemp": "24",
        "stad": "Rotterdam",
        "dag": "22",
        "dagMinTemp": "-8",
        "dagMaxTemp": "73"
    },
    {
        "dagGemTemp": "73",
        "stad": "Rotterdam",
        "dag": "23",
        "dagMinTemp": "40",
        "dagMaxTemp": "98"
    },
    {
        "dagGemTemp": "81",
        "stad": "Rotterdam",
        "dag": "24",
        "dagMinTemp": "55",
        "dagMaxTemp": "107"
    },
    {
        "dagGemTemp": "104",
        "stad": "Rotterdam",
        "dag": "25",
        "dagMinTemp": "72",
        "dagMaxTemp": "140"
    },
    {
        "dagGemTemp": "91",
        "stad": "Rotterdam",
        "dag": "26",
        "dagMinTemp": "67",
        "dagMaxTemp": "105"
    },
    {
        "dagGemTemp": "107",
        "stad": "Rotterdam",
        "dag": "27",
        "dagMinTemp": "83",
        "dagMaxTemp": "119"
    },
    {
        "dagGemTemp": "66",
        "stad": "Rotterdam",
        "dag": "28",
        "dagMinTemp": "47",
        "dagMaxTemp": "91"
    },
    {
        "dagGemTemp": "87",
        "stad": "Rotterdam",
        "dag": "29",
        "dagMinTemp": "60",
        "dagMaxTemp": "104"
    },
    {
        "dagGemTemp": "75",
        "stad": "Rotterdam",
        "dag": "30",
        "dagMinTemp": "47",
        "dagMaxTemp": "97"
    },
    {
        "dagGemTemp": "76",
        "stad": "Rotterdam",
        "dag": "31",
        "dagMinTemp": "52",
        "dagMaxTemp": "117"
    }];

var chart = d3.select("#linegraph"),
    WIDTH = 1000,
    HEIGHT = 500,
    MARGINS = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
    },

// queue()
//     .defer(d3.json, 'd3lineLee.json')
//     .defer(d3.json, 'd3lineRot.json')
//     .await(makeMyMap);

// scaling axis
xScale = d3.scale.linear()
    .range([MARGINS.left, WIDTH - MARGINS.right])
    .domain([d3.min(data, function(d) { 
        console.log(+d.dag);
        return +d.dag; 
    }), d3.max(data, function(d) { 
        return +d.dag; 
    })]),
    

yScale = d3.scale.linear()
    .range([HEIGHT - MARGINS.top, MARGINS.bottom])
    .domain([d3.min(data, function(d) { 
        return +d.dagMinTemp; }), 
    d3.max(data, function(d) { 
        return +d.dagMaxTemp; 
    })]),

xAxis = d3.svg.axis()
    .scale(xScale)
    .ticks(31);

yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left");

// d3.json("d3lineLee.json", function(data) {
//     xScale.domain([d3.min(data, function(d) { return +d.dag; }), d3.max(data, function(d) { return +d.dag; })]),
//     yScale.domain([d3.min(data, function(d) { return +d.dagMinTemp; }), d3.max(data, function(d) { return +d.dagMaxTemp; })])
// })
    

// generating line
var lineGen = d3.svg.line()
  .x(function(d) { return xScale(d.dag); })
  .y(function(d) { return yScale(d.dagGemTemp); })
  .interpolate("linear");

// appending axis to chart
chart.append("svg:g")
    .attr("class","axis")
    .attr("transform", "translate(0," + ((HEIGHT / 1.31) - MARGINS.bottom) + ")")
    .call(xAxis);

chart.append("svg:g")
    .attr("class","axis")
    .attr("transform", "translate(" + (MARGINS.left) + ",0)")
    .call(yAxis);

// appending data to chart
chart.append('svg:path')
  .attr('d', lineGen(data))
  .attr('stroke', 'green')
  .attr('stroke-width', 2)
  .attr('fill', 'none');

chart.append('svg:path')
  .attr('d', lineGen(data2))
  .attr('stroke', 'blue')
  .attr('stroke-width', 2)
  .attr('fill', 'none');
}

InitChart();
