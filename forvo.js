
// Create an item in the context menu for a "selection"
(function () {
	"use strict";
	
	chrome.contextMenus.create({
		"title":    "Search Forvo", 
		"contexts": ["selection"], 
		"onclick":  openSearchForvoTab
	});

	function openSearchForvoTab(info, tab) {
		var url = encodeURI(("http://www.forvo.com/search/" + info.selectionText));

		chrome.tabs.create({
			"index": tab.index + 1, 
			"url":   url
		});
	}

}());
