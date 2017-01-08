var margin = {top: 20, right: 30, bottom: 50, left: 40},
    width = 540 - margin.left - margin.right,
    height = 250 - margin.top - margin.bottom;

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

d3.json("data/womenEmp2014bar.json", function(error, data) {
	console.log(data[0]);
	x.domain(data.map(function(d) { return d.COU; }));
	y.domain([0, d3.max(data, function(d) { return +d.Value; })]);

	var tip = d3.tip()
		.attr('class', 'd3-tip')
		.offset([-10, 0])
		.html(function(d) {
			return "<strong>Rainfall:</strong> <span style='color:white'>" + d.Value + "</span>";
	})

	chart.call(tip);

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
		    .text("Country")
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
		    .attr("x", height / 4)
		    .attr("dy", ".75em")
		    .attr("y", 30)
		    .attr("dy", ".71em")
		    .style("text-anchor", "start")
		    .text("Labour force participation ratio");

	chart.selectAll(".bar")
			.data(data)
		.enter().append("rect")
			.attr("class", "bar")
			.attr("x", function(d) { return x(d.COU); })
			.attr("y", function(d) { return y(d.Value); })
			.attr("height", function(d) { return (height - y(d.Value)); })
			.attr("width", x.rangeBand())
			.on('mouseover', tip.show)
      		.on('mouseout', tip.hide)
});

function type(d) {
	d.Value = +d.Value; // coerce to number
	return d;
}