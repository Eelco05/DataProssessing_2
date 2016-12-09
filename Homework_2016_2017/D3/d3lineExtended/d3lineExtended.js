var chart = d3.select("#linegraph"),
        WIDTH = 1000,
        HEIGHT = 500,
        MARGINS = { top: 10, right: 20, bottom: 10, left: 50 };

d3.queue()
    .defer(d3.json, 'd3lineExtendedLee.json')
    .defer(d3.json, 'd3lineExtendedRot.json')
    .defer(d3.json, 'd3lineExtendedBil.json')
    .await(InitChart);

function InitChart(error, data1, data2, data3) {

    // scaling axis
    xScale = d3.scale.linear()
        .range([MARGINS.left, WIDTH - MARGINS.right])
        .domain([
            d3.min(data1, function(d) { return +d.dag; }), 
            d3.max(data1, function(d) { return +d.dag; })]),
        
    yScale = d3.scale.linear()
        .range([HEIGHT - MARGINS.top, MARGINS.bottom])
        .domain([
            d3.min(data1, function(d) { return +d.dagMinTemp; }), 
            d3.max(data1, function(d) { return +d.dagMaxTemp; })
        ]),

    yScaleData2 = d3.scale.linear()
        .range([HEIGHT - MARGINS.top, MARGINS.bottom])
        .domain([
            d3.min(data2, function(d) { return +d.dagMinTemp; }), 
            d3.max(data2, function(d) { return +d.dagMaxTemp; })
        ]),

    yScaleData3 = d3.scale.linear()
        .range([HEIGHT - MARGINS.top, MARGINS.bottom])
        .domain([
            d3.min(data3, function(d) { return +d.dagMinTemp; }), 
            d3.max(data3, function(d) { return +d.dagMaxTemp; })
        ]),

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

    // generating line
    var line = d3.svg.line()
      .x(function(d) { return xScale(+d.dag); })
      .y(function(d) { return yScale(+d.dagGemTemp); })
      .interpolate("linear");

    // Define the div for the tooltip
    var div = d3.select("body").append("div")   
        .attr("class", "tooltip")               
        .style("opacity", 0);

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
            .text("Rainfall: Daily Average Temperature (0.1 C)");

    // adding grid
    chart.append("svg:g")         
            .attr("class", "grid")
            .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
            .call(xAxis.tickSize(-HEIGHT - 200, 0, 0).tickFormat(""));
    
    chart.append("svg:g")         
            .attr("class", "grid")
            .attr("transform", "translate(" + (MARGINS.left) + ",0)")
            .call(yAxis.tickSize(-WIDTH + 60, 0, 0).tickFormat(""));

    // line legend, doesn't work right and no longer nessisary with the tooltip
    // chart.append("text")
    //         .attr("x", xScale(31) + 5)
    //         .attr("y", yScale(56) - 4)
    //         .attr("dy", ".71em")
    //         .style("text-anchor", "begin")
    //         .style("font-size", "10px")
    //         .style("fill", "green")
    //         .text("Leeuwarden");

    // chart.append("text")
    //         .attr("x", xScale(31) + 5)
    //         .attr("y", yScaleData2(76) - 3)
    //         .attr("dy", ".71em")
    //         .style("text-anchor", "begin")
    //         .style("font-size", "10px")
    //         .style("fill", "blue")
    //         .text("Rotterdam");
        
    // chart.append("text")
    //         .attr("x", xScale(31) + 5)
    //         .attr("y", yScaleData3(68))
    //         .attr("dy", ".71em")
    //         .style("text-anchor", "begin")
    //         .style("font-size", "10px")
    //         .style("fill", "red")
    //         .text("De Bilt");
        

    // appending data as lines to chart
    function lines(data, color) {
        chart.append('svg:path')
        .attr('d', line(data))
        .attr('stroke', color)
        .attr('stroke-width', 2)
        .attr('fill', 'none');
    }

    lines(data1, "green");
    lines(data2, "blue");
    lines(data3, "red");


    // adding dots and tooltip
    function createDot (data, color) {

        chart.selectAll("dot")   
            .data(data)         
        .enter().append("circle")                               
            .attr("r", 2.2)       
            .attr("cx", function(d) { return xScale(+d.dag); })       
            .attr("cy", function(d) { return yScale(+d.dagGemTemp); })
            .style("fill", color)
            .on("mouseover", function(d) {      
                div.transition()           
                    .style("opacity", .9);      
                div.html(
                        "<strong>City: </strong>" + "<span>" + d.stad + "</span>" + "<br/>" +  
                        // "<strong>Day of the Month: </strong>" + "<span>" + d.dag + "</span>" + "<br/>" +
                        "<strong>Average Temperature: </strong>" + "<span>" + d.dagGemTemp + "</span>" + "<br/>" +
                        "<strong>Minimum Temperature: </strong>" + "<span>" + d.dagMinTemp + "</span>" + "<br/>" +
                        "<strong>Maximum Temperature: </strong>" + "<span>" + d.dagMaxTemp + "</span>")
                    .style("left", (d3.event.pageX + 10) + "px")     
                    .style("top", (d3.event.pageY + 10) + "px");    
                })                  
            .on("mouseout", function(d) {       
                div.transition()        
                    .duration(500)      
                    .style("opacity", 0);   
        });
    }

    createDot(data1, "green");
    createDot(data2, "blue");
    createDot(data3, "red");
}