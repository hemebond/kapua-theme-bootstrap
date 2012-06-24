var plugin_options = {};

plugin_options.datatables = {
	"sDom": "<'row-fluid'fp>t<'row-fluid'li>",
	"sPaginationType": "bootstrap",
	"oLanguage": {
		"sLengthMenu": "_MENU_ records per page"
	}
};

plugin_options.calendar = {
	weekends: false, // will hide Saturdays and Sundays
	minTime: "8:30",
	maxTime: "17:00",
	header: {
		left: "prev,next today",
		center: "title",
		right: "month,agendaWeek,agendaDay"
	}
};
