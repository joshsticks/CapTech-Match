$(document).on("mobileinit", function(){
	$.mobile.defaultPageTransition = "none";
	$.mobile.ajaxEnabled = false;
    $.mobile.linkBindingEnabled = false;
    $.mobile.hashListeningEnabled = false;
    $.mobile.pushStateEnabled = false;

    $(document).on('pagehide', 'div[data-role="page"]', function (event, ui) {
    	$(event.currentTarget).remove();
	});
});