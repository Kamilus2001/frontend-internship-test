/* Here goes your JS code */
//task 1 complete
$("#show-popup-form").click(function(){
	$(this).hide();
	$("#login-form").show();

});

$("#exit-popup-form").click(function(){
	$("#login-form").hide();
	$("#show-popup-form").show();
});