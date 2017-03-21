
var svg2 = d3.select("body")
			.append("svg")
			.attr("width", w)
			.attr("height", h);

var padding = 20;

function scatterChart(element){

	console.log("the scatterchart function ran");

	function create(){

		var dataset2 = [
                [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
                [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
              ];

		var xScale = d3.scaleLinear()
						.domain([0, d3.max(dataset2, d => d[0] ) ])
						.range([padding, (w - padding)]);

		var yScale = d3.scaleLinear()
						.domain([0, d3.max(dataset2, d=>{ return d[1]; } )])
						.range([h - padding, padding]);


		element.selectAll("circle")
		.data(dataset2)
		.enter()
		.append("circle");

		element.selectAll("circle")
		.attr("cx", d => { return xScale(d[0]); } )
		.attr("cy", d => { return yScale(d[1]); } )
		.attr("r", 5);

		element.selectAll("text")
		.data(dataset2)
		.enter()
		.append("text")
		.text(d => d)
		.attr("x", d => xScale(d[0]))
		.attr("y", d => yScale(d[1]))
		.attr("font-family", "sans-serif")
		.attr("font-size", "11px")
		.attr("fill", "red");

		var xAxis = d3.axisBottom(xScale);

		element.append("g")
		.attr("class", "axis")
		.attr("transform", `translate(0, ${h - 20})`)
		.call(xAxis);

	}
	return create;

};

d3.select("svg")
	.call(scatterChart);

var myNewestChart = scatterChart(svg2);

myNewestChart();
			






