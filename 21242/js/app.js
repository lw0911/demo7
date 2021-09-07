(function($, document, window){
	
	$(document).ready(function(){

		$("[data-bg-color]").each(function(){
			var color = $(this).data("bg-color");
			$(this).css("background-color",color);
		});

	});

	$(window).load(function(){

	});

})(jQuery, document, window);