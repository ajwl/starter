// JS FOR REUSABLE CHART

var dataset = [ ],
	w = 500,
	h = 100,
	rw = 20,
	selector = document.getElementById('color-change'),

	svg2 = d3.select("body")
	 .append("svg")
	 .attr("height", h)
	 .attr("width", w);

function randomNum(set){
	for(var i = 0; i<6; i++){
		set.push(Math.round(Math.random() * 30));
	}
};
randomNum(dataset);

function chart(){
	var	element = svg2,
	color = 'teal';

	function my2(){
		element.selectAll("rect")
		.data(dataset)
		.enter()
		.append("rect")
		.attr("x", (d, i) => { return (i * 30) + 10 })
		.attr("y", (d) => { return (h-(d*2)) })
		.attr("width", rw)
		.attr("height", (d) =>{ return (d * 2); })
		.style("fill", this.chartColor);
	}

	my2.chartColor = function(c){
		console.log("setter function ran for " + c);
		chartColor = c;
		return my2;
	}
	return my2;
};

function makeChart(color){
	let newChart = chart().chartColor(color);
	newChart();
};

// doesn't work 
selector.addEventListener(
	"change",
	function(){
		makeChart(selector.value);
	}
);

makeChart('purple');



