/**
 * Settings and Background Controller Script.
 *
 * @author Mostafa Shahverdy 2013 (http://mostafa.info)
 * @constructor
 */
var defaults = {
	0:{
		url:"https://google.com",
		describtion:"Codes bellow are injected into URL above",
		js:'alert("This is a sample injection to Google. To modify this injection, go to JS-Injector\'s options page. JS-Injector");'
	},
	1:{
		url:"http://yahoo.com",
		describtion:"test default item inject",
		js:"alert(1);"
	}
};


chrome.extension.onMessage.addListener(function(request,sender,sendResponse)
{
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
