var map = new Datamap({
  element: document.getElementById('container'),
  setProjection: function(element) {
    var projection = d3.geo.equirectangular()
          .center([10, 50])
          .rotate([4.4, 0])
          .scale(600)
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
  data: {
    USA: { fillKey: "authorHasTraveledTo" },
    JPN: { fillKey: "authorHasTraveledTo" },
    ITA: { fillKey: "authorHasTraveledTo" },
    CRI: { fillKey: "authorHasTraveledTo" },
    KOR: { fillKey: "authorHasTraveledTo" },
    DEU: { fillKey: "authorHasTraveledTo" },
  }
});