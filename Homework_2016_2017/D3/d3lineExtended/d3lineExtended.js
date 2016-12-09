// setting chart dimentions
var chart = d3.select("#linegraph"),
        WIDTH = 1000,
        HEIGHT = 500,
        MARGINS = { top: 10, right: 20, bottom: 10, left: 50 };

var data1; 
var data2; 
var data3;

// temp switch
var type = 1

function updateType(t) {
    type = t;
    chart.selectAll("*").remove();
    InitChart(data1, data2, data3);
}

function dat (error, dat1, dat2, dat3) {
    data1 = dat1;
    data2 = dat2;
    data3 = dat3;
    InitChart(data1, data2, data3)
}

// importing json data
d3.queue()
    .defer(d3.json, 'd3lineExtendedLee.json')
    .defer(d3.json, 'd3lineExtendedRot.json')
    .defer(d3.json, 'd3lineExtendedBil.json')
    .await(dat);

// initialising chart
function InitChart(data1, data2, data3) {
    
    // scaling axis
    xScale = d3.scale.linear()
        .range([MARGINS.left, WIDTH - MARGINS.right])
        .domain(
            d3.extent(data1, function(d) { return +d.dag; })
        ),
        
    yScale = d3.scale.linear()
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

    // appending axis to chart
    chart.append("svg:g")
            .attr("class","axis")
            .attr("transform", "translate(0," + yScale(0) + ")")
            .call(xAxis.orient("bottom"))
        .append("text")
            .attr("y", -14)
            .attr("x", + MARGINS.left + 3)
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
            .text("Temperature (0.1 Celcius)");

    // adding grid
    chart.append("svg:g")         
            .attr("class", "grid")
            .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
            .call(xAxis.tickSize(-HEIGHT - 200, 0, 0).tickFormat(""));
    
    chart.append("svg:g")         
            .attr("class", "grid")
            .attr("transform", "translate(" + (MARGINS.left) + ",0)")
            .call(yAxis.tickSize(-WIDTH + 60, 0, 0).tickFormat(""));

    // adding legend
    chart.append("text")
        .attr("x", xScale(29) + 2)
        .attr("y", yScale(-42.5))
        .attr("dy", ".71em")
        .style("text-anchor", "begin")
        .style("font-size", "12px")
        .style("fill", "Black")
        .text("Legend:");

    legend(1, "green", "Leeuwarden")
    legend(2, "blue", "Rotterdam")
    legend(3, "red", "De Bilt")

    // adding data lines
    lines(type, data1, "green");
    lines(type, data2, "blue");
    lines(type, data3, "red");

    // adding dots and tooltip
    createDot(type, data1, "green");
    createDot(type, data2, "blue");
    createDot(type, data3, "red");
}

// line plotter
function lines(type, data, color) {
    
    var line = d3.svg.line()
        .x(function(d) { return xScale(+d.dag); })
        .y(function(d) { 
            if (type == 1) { return yScale(+d.dagGemTemp); }
            else if (type == 2) { return yScale(+d.dagMinTemp); }
            else { return yScale(+d.dagMaxTemp); } 
        })
        .interpolate("linear");

    chart.append('svg:path')
        .attr('d', line(data))
        .attr('stroke', color)
        .attr('stroke-width', 2)
        .attr('fill', 'none');
}



// Tooltip and linefots
var div = d3.select("body").append("div")   
    .attr("class", "tooltip")               
    .style("opacity", 0);

function createDot (type, data, color) {

    chart.selectAll("dot")   
        .data(data)         
    .enter().append("circle")                               
        .attr("r", 2.2)       
        .attr("cx", function(d) { return xScale(+d.dag); })       
        .attr("cy", function(d) { 
            if (type == 1) { return yScale(+d.dagGemTemp); }
            else if (type == 2) { return yScale(+d.dagMinTemp); }
            else { return yScale(+d.dagMaxTemp); }    
        })   
        .style("fill", color)
        .on("mouseover", function(d) {      
            div.transition()           
                .style("opacity", .9);      
            div.html(
                    "<strong>City: </strong>" + "<span>" + d.stad + "</span>" + "<br/>" + 
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

// legend 
function legend(y, color, city) {
    chart.append("text")
        .attr("x", xScale(29) + 2)
        .attr("y", yScale(-42.5 - ( y * 10)))
        .attr("dy", ".71em")
        .style("text-anchor", "begin")
        .style("font-size", "12px")
        .style("fill", color)
        .text(city);
}



