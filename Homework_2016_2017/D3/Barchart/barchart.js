var margin = {top: 20, right: 30, bottom: 50, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var barPadding = 13.5

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var chart = d3.select(".chart")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
  	.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.json("data.json", function(error, data) {
	//console.log(data[0]);
	x.domain(data.map(function(d) { return d.Date; }));
	y.domain([0, d3.max(data, function(d) { return +d.Rainfall; })]);

	//console.log(d3.max(data, function(d) { return +d.Rainfall; }))

	chart.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")")
			.call(xAxis)
		.append("text")
		    .attr("y", 18)
		    .attr("dy", ".71em")
		    .attr("x", width / 2)
		    .attr("dy", ".75em")
		    .style("text-anchor", "end")
		    .text("Day")
	  	.selectAll("text")
			.attr("y", 7)
			.attr("x", -6)
			.attr("dy", ".75em")
			.style("text-anchor", "start");

	chart.append("g")
			.attr("class", "y axis")
			.call(yAxis)
		.append("text")
		    .attr("transform", "rotate(90)")
		    .attr("x", height / 2)
		    .attr("dy", ".75em")
		    .attr("y", 30)
		    .attr("dy", ".71em")
		    .style("text-anchor", "start")
		    .text("Rainfall in mm");

	chart.selectAll(".bar")
			.data(data)
		.enter().append("rect")
			.attr("class", "bar")
			.attr("x", function(d) { return x(d.Date); })
			.attr("y", function(d) { return y(d.Rainfall); })
			.attr("height", function(d) { return (height - y(d.Rainfall)); })
			.attr("width", x.rangeBand())
			.on('mouseover', function(d) {
				originalColor = this.style.fill;
				d3.select(this)
				    .style('fill', '#3c763d')			    
			})
			.on('mouseout', function(d) {
				d3.select(this)
				    .style('fill', originalColor)
			});

	chart.selectAll(".bar.data")
		.data(data)
		.enter().append("text")
			.attr("text-anchor", "middle")
		.text(function(d) { console.log(y(d.Rainfall)); return d.Rainfall; })
			.attr("x", function(d, i) { return x(d.Date) + barPadding; })
			.attr("y", function(d) { return height - (height - y(d.Rainfall)); })
			.attr("font-family", "sans-serif")
			.attr("font-size", "11px")
			.attr("fill", "black");		
});

function type(d) {
	d.Rainfall = +d.Rainfall; // coerce to number
	return d;
}