var map = new Datamap({
  element: document.getElementById('datamap'),
  setProjection: function(element) {
    var projection = d3.geo.mercator()
          .center([10, 55])
          .rotate([4.4, 0])
          .scale(400)
          .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
        var path = d3.geo.path()
          .projection(projection);

    return {path: path, projection: projection};
  },
  responsive: 'true',
  fills: {
    defaultFill: "#ABDDA4",
    authorHasTraveledTo: "blue"
  },
  // dataType: 'json',
  // dataUrl: 'Gender_employment.json',
});

window.addEventListener('resize', function(event){
        map.resize();
});