var _ = require("lodash");

_.mixin(
{
	"watch": function(inFunc, interval, outFunc)
	{
		setInterval(function()
		{
			var time = inFunc();
			outFunc(time);
		}, interval);
	}
});

var build = function(timeFunc, interval, outFunc)
{
};

module.exports = _;
