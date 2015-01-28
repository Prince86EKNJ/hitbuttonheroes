var expect = require("chai").expect;
var Keys = require("../src/keys");

describe("keys()", function()
{
	describe("keys.onDown(key, func)", function()
	{
		it("calls a function when key is pressed (no repeat)", function()
		{
			var count = 0;

			var keys = new Keys();
			keys.onDown("x", function()
			{
				count++;
			});

			keys({ key: "x", type: "keydown" });
		});
	});
});
