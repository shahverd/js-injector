/**
 * Injection Content Script.
 *
 * @author Mostafa Shahverdy 2013 (http://mostafa.info)
 * @constructor
 */
chrome.extension.sendMessage({method:"get_injects"},function(injects){
	for(index in injects){
		if(/^items\./.test(index)){
			itemJSON = injects[index];
			//if(window.location.host.toString().indexOf(itemJSON.url)){
			//if(window.location.host.toString().match(itemJSON.url + '$')){
			var re = new RegExp("^" + itemJSON.url , "g");
			//alert(window.location.toString().match(re) );
			if(window.location.toString().match(re) != null){
				var js = itemJSON.js.toString();
				eval(js);
			}
		}
	}
});

