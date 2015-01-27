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

/*
		var duration = time - lastTime;
		lastTime = time;
		keyMan.run(duration);
*/
	});

	var getRandomMsg = function()
	{
		return "The number is: "+Math.random()*100 % 1;
	};

	// Setup well for meter
	var well = new Well(75);
	var rate = 30;
	keyMan.onDown("z", function()
	{
		meterData.msg = getRandomMsg();
	});
	keyMan.onUp("z", function()
	{
		meterData.msg = getRandomMsg();
	});
	keyMan.whileDown("x", function(duration)
	{
		var fill = (duration/1000) * rate;
		well.add(fill);
	});
	keyMan.whileUp("x", function(duration)
	{
		var drain = (duration/1000) * rate;
		well.add(drain);
	});
};

$(function()
{
	$.get("/data/views.json", init);
});
