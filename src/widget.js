var $ = require("jquery");
var Vue = require("vue");

var init = function(views)
{
	var install = function(el, viewName, data)
	{
		var viewData = views[viewName];

		var view = $("<div class=\""+viewName+"\"/>");
		view.append(viewData);

		$(el).append(view);

		var vueEl = view.get(0);

		var result = null;
		if(data != undefined)
		{
			result = new Vue({
				el: vueEl,
				data: data
			});
		}

		return result;
	};

	return install;
};

module.exports = init;
