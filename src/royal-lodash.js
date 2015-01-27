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

module.exports = _;
