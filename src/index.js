console.log("HitButtonHeroes!");

var $ = require("jquery");
var Vue = require("vue");

var _ = require("./royal-lodash");
var widget = require("./widget");

var fps = 30;

var init = function(views)
{
	var install = widget(views);

	var data = { time: 0 };
	install("body", "time-demo", data);

	var meterData =
	{
		width: 500,
		progress: 0.1,
		msg: "This is a meter"
	};
	install("body", "meter", meterData);

	_.watch(Date.now, 1000/fps, function(time)
	{
		data.time = time;
		meterData.progress = (time % 5000) / 5000;
	});
};

$(function()
{
	$.get("/data/views.json", init);
});
