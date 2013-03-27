/**
 * Options Script.
 *
 * @author Mostafa Shahverdy 2013 (http://mostafa.info)
 * @constructor
 */
var _ = function(str){ return chrome.i18n.getMessage(str)}

var Options = new function(){}

Options.init_list = function(){
	//to draw items one by one
	for(index in localStorage){

		if(/^items\./.test(index)){
			itemJSON = JSON.parse(localStorage[index]);

			item = $(".pane").filter(".list").find(".template").clone();
			item.removeClass("template");
			item.find(".url input").val(itemJSON.url);
			item.find(".describtion input").val(itemJSON.describtion);
			item.find(".js textarea").val(itemJSON.js);
			item.append('<input class="id" type="hidden" value="'+index+'">');
			item.removeClass("minimized");

			item.find(".title").click(function(){
				$(this).parents('.list_item').children().not('.title').removeClass("block");
				$(this).parent().children().not('.title').addClass("block");
			});

			//init onchange for each item in list 
			item.children().change(function(){
				list_item = $(this).parents('.list_item');
				itemIndex = list_item.find('.id').val();
				item = {
					'url' : list_item.find('.url input').val(),
					'describtion' :list_item.find('.describtion input').val(),
					'js':list_item.find('.js textarea').val()
				};
				//alert(JSON.stringify(item));	
				localStorage[itemIndex] = JSON.stringify(item);

			});

			//init delete button for each item in list
			item.find("button").click(function(){
				item_index = $(this).parents('.list_item').find('.id').val();
				delete(localStorage[item_index]);
				this.parents(".list_item").remove();
			});

			$(".pane").filter(".list").prepend(item);
		}
	}
}

Options.init_create = function(){

	chrome.extension.sendMessage({method:"get_defaults"},function(defaults){
		for(index in defaults){
			itemJSON = defaults[index];

			item = $(".pane").filter(".create").find(".template").clone();
			item.removeClass("template");
			item.find(".url input").val(itemJSON.url);
			item.find(".describtion input").val(itemJSON.describtion);
			item.find(".js textarea").val(itemJSON.js);
			item.removeClass("minimized");

			item.find(".title").click(function(){
				$(this).parent().parent().children().children().not('.title').removeClass("block");
				$(this).parent().children().not('.title').addClass("block");
			});

			item.find("button").click(function(){
				create_item = $(this).parents('.list_item');
				item = {
					'url' : create_item.find(".url input").val(),
					'describtion' : create_item.find(".describtion input").val(),
					'js': create_item.find(".js textarea").val(),
				}

				localStorage['items.'+ Date()] = JSON.stringify(item);
			});

			$(".pane").filter(".create").append(item);
		}
	});
}


Options.init_sidebar = function(){

	$("#sidebar li").click(function(){
		$("#container .pane").removeClass('block');
		$("#container ." + $(this).attr("related_pane")).addClass('block');
		$(this).parent().children().removeClass('selected');
		$(this).addClass('selected');
	});	


	$("#sidebar ul li[related_pane='list']").click();
}

Options.init_export = function(){
	chrome.extension.sendMessage({method:"get_injects"},function(injects){
		//for(index in injects){
		//alert(JSON.stringify(injects[index]));
		//}
		//alert(JSON.stringify(injects));
		//$("<a href='http://google.com'>asasa</a>").click();
		//window.location = "data:application/octet-stream;aaaa.txt," + JSON.stringify(injects);
		window.location = "data:document/text;filename=JsInjector.exp," + encodeURI(JSON.stringify(injects));
		//document.write('<a href="data:application/octet-stream;charset=utf-8,test%20string">text file</a>');

	});
}

Options.init_import = function(){
	function readMultipleFiles(evt) {
		//Retrieve all the files from the FileList object
		//alert(11);
		var files = evt.target.files;

		if (files) {
			for (var i = 0, f; f = files[i]; i++) {
			var r = new FileReader();
			r.onload = (function (f) {
				return function (e) {
					var contents = e.target.result;
					$('.pane').filter('.import').find('span').click(function(){
						injects = JSON.parse(contents);
						for(index in injects){
							//alert(index);
							//alert(injects[index]);
							//alert(JSON.stringify(injects[index]));
							localStorage[index] = JSON.stringify(injects[index]);
							window.location = window.location;
						}
					});
				};
			})(f);
			r.readAsText(f);
			}
		} else {
			alert("Failed to load files");
		}
	}
	document.getElementById('fileinput').addEventListener('change', readMultipleFiles, false);
}
Options.init_about = function(){

	//for(var i=1; i< 4; i++){
		//rect = $("<div></div>");
		//rect.css("float","left")
		//rect.css("position","relative")
		//rect.css("padding","1"+i*10+"px")
		//rect.css("top",i*10+"px")
		//rect.css("left",i*10+"px")
		//$(".pane").filter(".about").append(rect);
	//}
}

Options.init = function(){
	Options.init_create();
	Options.init_list();
	Options.init_sidebar();
	Options.init_import();
	Options.init_about();

	$('.pane').filter('.export').find('span').click(function(){
		Options.init_export();
	});
}

$(function(){
	Options.init();
});
