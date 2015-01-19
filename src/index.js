var _ = require("lodash");
var $ = require("jquery");

var numbers = [1, 1, 2, 3, 5, 8, 13, 21];

$(function()
{
	_.each(numbers, function(x)
	{
		console.log("Out: "+(x*2+3));
		$("body").append("<p>Number "+x+"</p>");
	});
});
