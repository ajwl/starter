// JS FOR REUSABLE CHART

var w = 500,
	h = 100,
	rw = 20,
	selector = document.getElementById('color-change'),
	button = document.getElementById('data-change'),

	t = d3.transition()
		.duration(1750);
		// .ease(d3.easeLinear);

	svg = d3.select("body")
	 .append("svg")
	 .attr("height", h)
	 .attr("width", w);

function chart(element){
	var	chartColor;
	var dataset = [ 2, 2, 2, 2, 2, 2];

	function my2(){
		element.selectAll("rect")
		.data(dataset)
		.enter()
		.append("rect")

		element.selectAll("rect").transition(t)
		.attr("x", (d, i) => { return (i * 30) + 10 })
		.attr("y", (d) => { return (h-(d*2)) })
		.attr("width", rw)
		.attr("height", (d) =>{ return (d * 2); })
		.style("fill", chartColor);
	}

	my2.chartColor = function(c){
		chartColor = c;
		return my2;
	}

	my2.getNewData = function(){
		let set = [];
		for(let i=0; i<6; i++){
			set.push(Math.round(Math.random() * 30));
		}
		dataset = set;
		return my2;
	}
	return my2;
};

var newChart = chart(svg).chartColor(selector.value);
d3.select("svg")
	.call(newChart);

button.addEventListener(
	"click",
	function(){
		console.log("this clikced");
		newChart.getNewData();
		d3.select("svg")
		.call(newChart);
	}
);

selector.addEventListener(
	"change",
	function(){
		newChart.chartColor(selector.value);
		d3.select("svg")
		.call(newChart);
	}
);



