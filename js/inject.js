/**
 * Injection Content Script.
 *
 * @author Mostafa Shahverdy 2013 (http://mostafa.info)
 * @constructor
 */
chrome.extension.sendMessage({method:"get_injects"},function(injects){
	for(index in injects){
		if(/^items\./.test(index)){
			itemJSON = JSON.parse(injects[index]);
			if(window.location.toString().indexOf(itemJSON.url) == 0){
				var js = itemJSON.js.toString();
				eval(js);
			}
		}
	}
});

