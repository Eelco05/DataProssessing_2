var fills = [30,40,50,60,70,80,90];

var colorschemeOfThisMap = colorbrewer.PuBuGn[7];

d3.queue()
    .defer(d3.json, 'data/womenEmp2000map.json')
    .defer(d3.json, 'data/womenEmp2001map.json')
    .defer(d3.json, 'data/womenEmp2002map.json')
    .defer(d3.json, 'data/womenEmp2003map.json')
    .defer(d3.json, 'data/womenEmp2004map.json')
    .defer(d3.json, 'data/womenEmp2005map.json')
    .defer(d3.json, 'data/womenEmp2006map.json')
    .defer(d3.json, 'data/womenEmp2007map.json')
    .defer(d3.json, 'data/womenEmp2008map.json')
    .defer(d3.json, 'data/womenEmp2009map.json')
    .defer(d3.json, 'data/womenEmp2010map.json')
    .defer(d3.json, 'data/womenEmp2011map.json')
    .defer(d3.json, 'data/womenEmp2012map.json')
    .defer(d3.json, 'data/womenEmp2013map.json')
    .defer(d3.json, 'data/womenEmp2014map.json')
    .await(makemap);

function makemap (error, dat0, dat1, dat2, dat3, dat4, dat5, dat6, dat7, dat8, dat9, dat10, dat11, dat12, dat13, dat14) {
  if (error) {console.log(error)}

  var map = new Datamap({
    element: document.getElementById('datamap'),
    setProjection: function(element) {
      var projection = d3.geo.mercator()
        .center([11, 55])
        .rotate([4.4, 0])
        .scale(500)
        .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
      var path = d3.geo.path().projection(projection);

      return {path: path, projection: projection};
    },
    responsive: 'false',
    geographyConfig: {
      highlightBorderColor: 'white',
      highlightFillColor: 'red',
      highlightBorderWidth: 1,
      popupTemplate: function(geography, data) {
        if ( !data ) return;  // makes sure that the tooltip is shown only if there is data 
        return '<div class="hoverinfo">' + '<strong>' + geography.properties.name + '</strong>' + '<br> Labour force participation rate: <br> <strong>' + data.Value + '</strong> %';},
    },
    fills: {
      defaultFill: "lightgray",
      '30': colorschemeOfThisMap[0],
      '40': colorschemeOfThisMap[1],
      '50': colorschemeOfThisMap[2],
      '60': colorschemeOfThisMap[3],
      '70': colorschemeOfThisMap[4],
      '80': colorschemeOfThisMap[5],
      '90': colorschemeOfThisMap[6]
    },
    dataUrl: 'data/womenEmp2014map.json',
    dataType: 'json',
    data: {},
  });

  map.legend();

  function updateMap2000() { map.updateChoropleth(dat0) };
  function updateMap2001() { map.updateChoropleth(dat1) };
  function updateMap2002() { map.updateChoropleth(dat2) };
  function updateMap2003() { map.updateChoropleth(dat3) };
  function updateMap2004() { map.updateChoropleth(dat4) };
  function updateMap2005() { map.updateChoropleth(dat5) };
  function updateMap2006() { map.updateChoropleth(dat6) };
  function updateMap2007() { map.updateChoropleth(dat7) };
  function updateMap2008() { map.updateChoropleth(dat8) };
  function updateMap2009() { map.updateChoropleth(dat9) };
  function updateMap2010() { map.updateChoropleth(dat10) };
  function updateMap2011() { map.updateChoropleth(dat11) };
  function updateMap2012() { map.updateChoropleth(dat12) };
  function updateMap2013() { map.updateChoropleth(dat13) };
  function updateMap2014() { map.updateChoropleth(dat14) };

  d3.select("#y2000").on("click",updateMap2000);
  d3.select("#y2001").on("click",updateMap2001);
  d3.select("#y2002").on("click",updateMap2002);
  d3.select("#y2003").on("click",updateMap2003);
  d3.select("#y2004").on("click",updateMap2004);
  d3.select("#y2005").on("click",updateMap2005);
  d3.select("#y2006").on("click",updateMap2006);
  d3.select("#y2007").on("click",updateMap2007);
  d3.select("#y2008").on("click",updateMap2008);
  d3.select("#y2009").on("click",updateMap2009);
  d3.select("#y2010").on("click",updateMap2010);
  d3.select("#y2011").on("click",updateMap2011);
  d3.select("#y2012").on("click",updateMap2012);
  d3.select("#y2013").on("click",updateMap2013);
  d3.select("#y2014").on("click",updateMap2014);
}