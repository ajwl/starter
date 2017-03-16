var dataset2 = [
                [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
                [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
              ];


var svg2 = d3.select("body")
			.append("svg")
			.attr("width", w)
			.attr("height", h);

var padding = 20;
			
var xScale = d3.scale.linear()
							.domain([0, d3.max(dataset2, d=>{ return d[0]; }) ])
							.range([padding, (w - padding)]);

var yScale = d3.scale.linear()
							.domain([0, d3.max(dataset2, d=>{ return d[1]; } )])
							.range([h - padding, padding]);


svg2.selectAll("circle")
	.data(dataset2)
	.enter()
	.append("circle");

svg2.selectAll("circle")
	.attr("cx", d => { return xScale(d[0]); } )
	.attr("cy", d => { return yScale(d[1]); } )
	.attr("r", 5);

svg2.selectAll("text")
	.data(dataset2)
	.enter()
	.append("text")
	.text(d => { 
		return d;
	} )
	.attr("x", function(d) {
        return xScale(d[0]);
   })
   .attr("y", function(d) {
        return yScale(d[1]);
   })
	.attr("font-family", "sans-serif")
   .attr("font-size", "11px")
   .attr("fill", "red");




