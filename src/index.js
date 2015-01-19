console.log("HitButtonHeroes!");

var $ = require("jquery");

var _ = require("./royal-lodash");

var fps = 30;

$(function()
{
	$("body").append('<p>Time: <span class="time"></span></p>');

	_.watch(Date.now, 1000/fps, function(time)
	{
		$(".time").text(time);
	});
});
