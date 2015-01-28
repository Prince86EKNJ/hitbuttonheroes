var Well = function(limit)
{
	var value = 0;

	var result = function(add)
	{
		if(add != undefined)
		{
			value += add;
			value = value > limit ? limit : value;
			value = value < 0 ? 0 : value;
		}

		return value;
	};

	result.limit = function()
	{
		return limit;
	}

	return result;
};

module.exports = Well;
