var build = function(timeFunc, interval, outFunc)
{
	setInterval(function()
	{
		var time = timeFunc();
		outFunc(time);
	}, interval);
};

module.exports = { build: build };
