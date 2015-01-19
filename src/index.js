console.log("HitButtonHeroes!");

var _ = require("lodash");
var $ = require("jquery");
var clock = require("./clock");

var numbers = [1, 1, 2, 3, 5, 8, 13, 21];

var fps = 2;

$(function()
{
	_.each(numbers, function(x)
	{
		console.log("Out: "+(x*2+3));
		$("body").append("<p>Number "+x+"</p>");
	});

	clock.build(Date.now, 1000/fps, function(time)
	{
		console.log("Time: "+time);
	});
});
