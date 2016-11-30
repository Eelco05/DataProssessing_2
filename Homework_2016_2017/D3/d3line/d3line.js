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
            top: 10,
            right: 50,
            bottom: 10,
            left: 50
        },

    // scaling axis
    xScale = d3.scale.linear()
        .range([MARGINS.left, WIDTH - MARGINS.right])
        .domain([
            d3.min(data1, function(d) {
                // console.log(+d.dag); 
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

    yScaleAlt = d3.scale.linear()
        .range([HEIGHT - MARGINS.top, MARGINS.bottom])
        .domain([
            d3.min(data2, function(d) {
                return +d.dagMinTemp; 
            }), 
            d3.max(data2, function(d) { 
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
        .tickPadding(10);       


    // tooltip
    var tip = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .html(data1, function(d) {
            return "<strong>Daily average rainfall:</strong> <span style='color:white'>" + d.dagGemTemp + "</span>";
        });

    chart.call(tip);

    // generating line
    var line = d3.svg.line()
      .x(function(d) { return xScale(+d.dag); })
      .y(function(d) { return yScale(+d.dagGemTemp); })
      .interpolate("basis");

    // appending axis to chart

    chart.append("svg:g")
        .attr("class","axis")
        .attr("transform", "translate(0," + yScale(0) + ")")
        .call(xAxis.orient("bottom"))
        .append("text")
            .attr("y", 120)
            .attr("x", + MARGINS.left + 5)
            .attr("dy", ".75em")
            .style("text-anchor", "start")
            .text("Day of the Month");

    chart.append("svg:g")
        .attr("class","axis")
        .attr("transform", "translate(" + (MARGINS.left) + ",0)")
        .call(yAxis)
        .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", - MARGINS.left)
            .attr("x", - MARGINS.top)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Rainfall: Daily Average Temperature (C)");

    // adding grid for ease of use
    chart.append("svg:g")         
        .attr("class", "grid")
        .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
        .call(xAxis
            .tickSize(-HEIGHT - 200, 0, 0)
            .tickFormat("")
        )
        .append("text")
            .attr("x", xScale(31) + MARGINS.right)
            .attr("y", - yScale(31))
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .style("font-size", "10px")
            .text("Leeuwarden");

    chart.append("svg:g")         
        .attr("class", "grid")
        .attr("transform", "translate(" + (MARGINS.left) + ",0)")
        .call(yAxis
            .tickSize(-WIDTH + 60, 0, 0)
            .tickFormat("")
        )
        .append("text")
            .attr("x", xScale(31) - 5)
            .attr("y", yScaleAlt(31) - MARGINS.left - MARGINS.right - 5)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .style("font-size", "10px")
            .text("Rotterdam");

    // appending data as lines to chart
    chart.append('svg:path')
        .attr('d', line(data1))
        .attr('stroke', 'green')
        .attr('stroke-width', 2)
        .attr('fill', 'none')
        .on('mouseover', function(d) {
            tip.show(d)
            })
        .on('mouseout', tip.hide);

    chart.append('svg:path')
        .attr('d', line(data2))
        .attr('stroke', 'blue')
        .attr('stroke-width', 2)
        .attr('fill', 'none')
        .on('mouseover', function(d) {
            tip.show(d)
            })
        .on('mouseout', tip.hide);
}

InitChart();


