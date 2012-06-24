WYMeditor.SKINS['bootstrap'] = {
    init: function(wym) {
	    // Handle click events on containers buttons
	    jQuery(wym._box).find(".html_containers a").click(function () {
	        wym.container(jQuery(this).attr(WYMeditor.NAME));
	    });

	    // Handle click events on classes buttons
	    jQuery(wym._box).find(".html_classes a").click(function () {
	        var aClasses = eval(wym._options.classesItems),
	            sName = jQuery(this).attr(WYMeditor.NAME),
	
	            oClass = WYMeditor.Helper.findByName(aClasses, sName),
	            jqexpr;
	
	        if (oClass) {
	            jqexpr = oClass.expr;
	            wym.toggleClass(sName, jqexpr);
	        }
	        wym._iframe.contentWindow.focus(); //See #154
	    });
    }
};
