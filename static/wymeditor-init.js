jQuery(function() {
	jQuery('.wymeditor').wymeditor({
		basePath: "/static/wymeditor/",
		skinPath: "/static/wymeditor-skin/",
		skin: "bootstrap",
		
		//html: "<p>Type here</p>",
	
	    classesHtml: String() +
	        '<div class="btn-group">' +
	            '<button class="btn">{Classes}</button>' +
	            '<button class="btn dropdown-toggle" data-toggle="dropdown">' +
	            '<span class="caret"></span>' +
	            '</button>' +
	            '<ul class="dropdown-menu html_classes">' +
	                WYMeditor.CLASSES_ITEMS +
	            '</ul>' +
	        '</div>',
	
	    classesItemHtml: String() +
	        '<li class="wym_classes_' + WYMeditor.CLASS_NAME + '">' +
	            '<a href="#" name="' + WYMeditor.CLASS_NAME + '">' +
	                WYMeditor.CLASS_TITLE +
	            '</a>' +
	        '</li>',
	
		classesItems: [
		    {'name': 'important', 'title': 'PARA: Important', 'expr': 'p:not(.note)'},
		    {'name': 'note', 'title': 'PARA: Note', 'expr': 'p:not(.important)'},
		    {'name': 'left', 'title': 'Left align', 'expr': '*:not(.center):not(.right)'},
		    {'name': 'center', 'title': 'Center align', 'expr': '*:not(.left):not(.right)'},
		    {'name': 'right', 'title': 'Right align', 'expr': '*:not(.left):not(.center)'}
		],
	
	
	    containersHtml: String() +
	        '<div class="btn-group">' +
	            '<button class="btn">{Containers}</button>' +
	            '<button class="btn dropdown-toggle" data-toggle="dropdown">' +
	            '<span class="caret"></span>' +
	            '</button>' +
	            '<ul class="dropdown-menu html_containers">' +
	                WYMeditor.CONTAINERS_ITEMS +
	            '</ul>' +
	        '</div>',
	
	    containersItemHtml: String() +
	        '<li class="' + WYMeditor.CONTAINER_CLASS + '">' +
	            '<a href="#" name="' + WYMeditor.CONTAINER_NAME + '">' +
	                WYMeditor.CONTAINER_TITLE +
	            '</a>' +
	        '</li>',
	        
		containersItems: [
			{'name': 'P', 'title': 'Paragraph', 'css': 'wym_containers_p'},
			/*{'name': 'H1', 'title': 'Heading_1', 'css': 'wym_containers_h1'},*/
			{'name': 'H2', 'title': 'Heading_2', 'css': 'wym_containers_h2'},
			{'name': 'H3', 'title': 'Heading_3', 'css': 'wym_containers_h3'},
			{'name': 'H4', 'title': 'Heading_4', 'css': 'wym_containers_h4'},
			{'name': 'H5', 'title': 'Heading_5', 'css': 'wym_containers_h5'},
			{'name': 'H6', 'title': 'Heading_6', 'css': 'wym_containers_h6'},
			{'name': 'PRE', 'title': 'Preformatted', 'css': 'wym_containers_pre'},
			{'name': 'BLOCKQUOTE', 'title': 'Blockquote', 'css': 'wym_containers_blockquote'},
			{'name': 'TH', 'title': 'Table_Header', 'css': 'wym_containers_th'}
		],
	
	
		toolSelector: ".wym_tools button",
	
	    toolsHtml: String() +
	        '<div class="wym_tools btn-toolbar">' +
	            '<div class="btn-group">' +
	                WYMeditor.TOOLS_ITEMS +
	            '</div>' +
	        '</div>',
	
		toolsItemHtml: String() + '<button name="' + WYMeditor.TOOL_NAME + '" class="btn ' + WYMeditor.TOOL_CLASS + '" title="' + WYMeditor.TOOL_TITLE + '""><i></i></button>',
	
		toolsItems: [
		    {'name': 'Bold', 'title': 'Strong', 'css': 'wym_tools_strong'},
		    {'name': 'Italic', 'title': 'Emphasis', 'css': 'wym_tools_emphasis'},
		    {'name': 'Superscript', 'title': 'Superscript', 'css': 'wym_tools_superscript'},
		    {'name': 'Subscript', 'title': 'Subscript', 'css': 'wym_tools_subscript'},
		    {'name': 'InsertOrderedList', 'title': 'Ordered_List', 'css': 'wym_tools_ordered_list'},
		    {'name': 'InsertUnorderedList', 'title': 'Unordered_List', 'css': 'wym_tools_unordered_list'},
		    {'name': 'Indent', 'title': 'Indent', 'css': 'wym_tools_indent'},
		    {'name': 'Outdent', 'title': 'Outdent', 'css': 'wym_tools_outdent'},
		    {'name': 'Undo', 'title': 'Undo', 'css': 'wym_tools_undo'},
		    {'name': 'Redo', 'title': 'Redo', 'css': 'wym_tools_redo'},
		    {'name': 'CreateLink', 'title': 'Link', 'css': 'wym_tools_link'},
		    {'name': 'Unlink', 'title': 'Unlink', 'css': 'wym_tools_unlink'},
		    {'name': 'InsertImage', 'title': 'Image', 'css': 'wym_tools_image'},
		    {'name': 'InsertTable', 'title': 'Table', 'css': 'wym_tools_table'},
		    {'name': 'Paste', 'title': 'Paste_From_Word', 'css': 'wym_tools_paste'},
		    {'name': 'ToggleHtml', 'title': 'HTML', 'css': 'wym_tools_html'},
		    {'name': 'Preview', 'title': 'Preview', 'css': 'wym_tools_preview'},
		    {'name': 'Code', 'title': 'Code', 'css': 'wym_tools_code'},
		    {'name': 'KeyboardInput', 'title': 'Keyboard_Input', 'css': 'wym_tools_kbd'}
		],
	
		editorStyles: [
			/*{'name': '.hidden-note', 'css': 'color: #999; border: 2px solid #ccc;'},*/
			{'name': 'code', 'css': 'background-color: yellow;'},
			{'name': 'kbd', 'css': 'background-color: green;'}
		],
	
		//we customize the XHTML structure of WYMeditor by overwriting 
		//the value of boxHtml. In this example, "CONTAINERS" and 
		//"CLASSES" have been moved from "wym_area_right" to "wym_area_top":
		boxHtml: "<div class='wym_box'>"
			+ "<div class='wym_area_top'>"
			+ WYMeditor.TOOLS
			+ '<div class="btn-toolbar">'
			+ WYMeditor.CONTAINERS
			+ WYMeditor.CLASSES
			+ '</div>'
			+ "</div>"
			+ "<div class='wym_area_left'></div>"
			+ "<div class='wym_area_right'>"
			+ "</div>"
			+ "<div class='wym_area_main'>"
			+ WYMeditor.HTML
			+ WYMeditor.IFRAME
			+ WYMeditor.STATUS
			+ "</div>"
			+ "<div class='wym_area_bottom'>"
			+ "</div>"
			+ "</div>",
	
	    htmlHtml: String() +
	        '<div class="wym_html wym_section">' +
	            '<label>{Source_Code}</label>' +
	            '<textarea class="wym_html_val"></textarea>' +
	        '</div>',
	
		postInit: function(wym) {
			//handle click event
			jQuery(wym._box)
				.find('.wym_tools_kbd').click(function() {
					//do something
					wym.wrap('<kbd>', '</kbd>');
					return(false);
				});
			
			//handle click event
			jQuery(wym._box)
				.find('.wym_tools_code').click(function() {
					//do something
					wym.wrap('<code>', '</code>');
					return(false);
				});
	
	
			wym.hovertools();
			wym.resizable();
		}
	});

	jQuery('input.submit.default').addClass("wymupdate");
});