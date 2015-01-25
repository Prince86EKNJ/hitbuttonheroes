console.log("HitButtonHeroes!");

var $ = require("jquery");
var Vue = require("vue");

var _ = require("./royal-lodash");
var widget = require("./widget");

var fps = 30;

var init = function(views)
{
	var install = widget(views);

	var data = { dataValue: "Your Mom is da bomb!", time: 0 };
	install("body", "time-demo", data);

	_.watch(Date.now, 1000/fps, function(time)
	{
		$(".time").text(data.dataValue+":"+time);
		data.time = time;
	});
};

$(function()
{
	$.get("/data/views.json", init);
});
