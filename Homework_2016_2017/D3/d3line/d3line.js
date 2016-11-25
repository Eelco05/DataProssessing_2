d3.queue()
    .defer(d3.json, 'd3lineLee.json')
    .defer(d3.json, 'd3lineRot.json')
    .await(InitChart);

function InitChart(error, data1, data2) {

    // console.log("error", error, "data1", data1, "data2", data2)

    var chart = d3.select("#linegraph"),
        WIDTH = 1000,
        HEIGHT = 500,
        MARGINS = {
            top: 50,
            right: 20,
            bottom: 50,
            left: 40
        },

    // scaling axis
    xScale = d3.scale.linear()
        .range([MARGINS.left, WIDTH - MARGINS.right])
        .domain([
            d3.min(data1, function(d) {
                console.log(+d.dag); 
                return +d.dag; 
            }), 
            d3.max(data1, function(d) { 
                return +d.dag; 
        })]),
        
    yScale = d3.scale.linear()
        .range([HEIGHT - MARGINS.top, MARGINS.bottom])
        .domain([
            d3.min(data1, function(d) {
                return +d.dagMinTemp; 
            }), 
            d3.max(data1, function(d) { 
                return +d.dagMaxTemp; 
        })]),

    xAxis = d3.svg.axis()
        .scale(xScale)
        .ticks(d3.max(data1, function(d) { return +d.dag; }));

    yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left")
        .ticks(d3.max(data1, function(d) { return +d.dagGemTemp / 5; }))
        .innerTickSize(-HEIGHT)
        .outerTickSize(0)
        .tickPadding(10);;        

    // generating line
    var lineGen = d3.svg.line()
      .x(function(d) { return xScale(d.dag); })
      .y(function(d) { return yScale(d.dagGemTemp); })
      .interpolate("linear");

    // appending axis to chart
    chart.append("svg:g")
        .attr("class","axis")
        .attr("transform", "translate(0," + ((HEIGHT / 1.26) - MARGINS.bottom) + ")")
        .call(xAxis);

    chart.append("svg:g")
        .attr("class","axis")
        .attr("transform", "translate(" + (MARGINS.left) + ",0)")
        .call(yAxis);

    // adding grid for ease of use
    chart.append("svg:g")         
        .attr("class", "grid")
        .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
        .call(xAxis
            .tickSize(-HEIGHT - 200, 0, 0)
            .tickFormat("")
        );

    chart.append("svg:g")         
        .attr("class", "grid")
        .attr("transform", "translate(" + (MARGINS.left) + ",0)")
        .call(yAxis
            .tickSize(-WIDTH + 60, 0, 0)
            .tickFormat("")
        );


    // appending data as lines to chart
    chart.append('svg:path')
      .attr('d', lineGen(data1))
      .attr('stroke', 'red')
      .attr('stroke-width', 2)
      .attr('fill', 'none');

    chart.append('svg:path')
      .attr('d', lineGen(data2))
      .attr('stroke', 'blue')
      .attr('stroke-width', 2)
      .attr('fill', 'none');
}

InitChart();
