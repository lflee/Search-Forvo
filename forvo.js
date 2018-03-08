/*global chrome*/

// Create an item in the context menu for a "selection"
(function () {
	"use strict";
	
	chrome.contextMenus.create({
		"title":    "Search Fovo", 
		"contexts": ["selection"], 
		"onclick":  onClickPronounce
	});

	function onClickPronounce(info, tab) {
		var url = encodeURI(("http://www.forvo.com/search/" + info.selectionText));

		chrome.tabs.create({
			"index": tab.index + 1, 
			"url":   url
		});
	}

}());
