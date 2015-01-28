var expect = require("chai").expect;
var Well = require("../src/well");

describe("well([add])", function()
{
	it("should never have a value greater than it's limit", function()
	{
		var myWell = new Well(18); // Limit of 18
		expect(myWell()).to.equal(0);

		myWell(5); // Add five
		expect(myWell()).to.equal(5);

		myWell(20); // Add twenty
		expect(myWell()).to.equal(18); // It didn't exceed it's limit
	});

	it("should never have a value lower than 0", function()
	{
		var myWell = new Well(15); // Limit of 15
		expect(myWell()).to.equal(0);

		myWell(5); // add five
		expect(myWell()).to.equal(5);

		myWell(-10); // subtract ten
		expect(myWell()).to.equal(0);
	});

	describe("well.limit()", function()
	{
		it("should return the limit", function()
		{
			var myWell = new Well(12); // Limit of 12
			expect(myWell.limit()).to.equal(12);
		});
	});
});
