/**
 * Settings and Background Controller Script.
 *
 * @author Mostafa Shahverdy 2013 (http://mostafa.info)
 * @constructor
 */
var defaults = {
	0:{
		url:"URL",
		describtion:"Describtion",
		js:'$(function(){\n\n\t//sample code to run at the end of page\n\n});'
	},
	1:{
		url:"http://stackoverflow.com",
		describtion:"This brings \"tags\" at the top of the stackoverflow's sidebar, to have an easier access.",
		//js:"alert(1);"
		js:'$("#interesting-tags").prependTo($("#interesting-tags").parent());'
	},
	2:{
		url:"http://plus.url.google.com",
		describtion:"This will change Google''s http to httpS",
		//js:"alert(1);"
		js:'$(function(){window.location = window.location.toString().replace(/^http/, \'https\');});'
	},
	3:{
		url:"http://.*[\.]googleusercontent.com",
		describtion:"This will change Google''s http to httpS",
		//js:"alert(1);"
		js:'$(function(){window.location = window.location.toString().replace(/^http/, \'https\');});'
	},
	4:{
		url:"http://.*[\.]youtube.com",
		describtion:"This will change Youtube's http to httpS",
		//js:"alert(1);"
		js:'$(function(){window.location = window.location.toString().replace(/^http/, \'https\');});'
	}
};


chrome.extension.onMessage.addListener((request, sender, sendResponse) => {
	if(request.method == "get_injects"){
		var injects = {};
		for(index in localStorage){
			if(/^items\./.test(index)){
				injects[index.toString()] = JSON.parse(localStorage[index]);
			}
		}
		//for(index in injects){
		//alert(injects[index]);
		//}
		sendResponse(injects);
	}

	if(request.method == "get_defaults"){

		sendResponse(defaults);
	}


});
