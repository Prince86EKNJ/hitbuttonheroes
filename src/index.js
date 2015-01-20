console.log("HitButtonHeroes!");

var $ = require("jquery");
var Vue = require("vue");

var _ = require("./royal-lodash");

var fps = 30;

$(function()
{
	$("body").append('<p>Time: <span class="time"></span></p>');
	$("body").append('<p><input type="text" v-model="dataValue"/></p>');

	var data = { dataValue: "Your Mom is da bomb!" };
	console.log(Vue);
	new Vue({
		el: "body",
		data: data
	});

	_.watch(Date.now, 1000/fps, function(time)
	{
		$(".time").text(data.dataValue+":"+time);
	});
});
