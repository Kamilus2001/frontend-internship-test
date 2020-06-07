/* Here goes your JS code */
//task 2 complete
$("#show-popup-form").click(function(){
	$(this).hide();
	$("#login-form").show();

});

$("#exit-popup-form").click(function(){
	$("#login-form").hide();
	$("#show-popup-form").show();
	$("#login-validation").text("");
});
$("#submit").click(function(){
		var email = $("#email").val();
		var pass = $("#pass").val();
		var check = $("#accept");
		$("#login-validation").css('color', 'red');
		if(check.is(":checked")){
			if(email=="kbouhaouli@gmail.com"&&pass=="12345678"){
				$("#login-validation").css('color', 'green');
				$("#login-validation").text("Success!");
			}else{
				$("#login-validation").text("Invalid email or password");
			}
		}else{
			$("#login-validation").text("Check agree terms & conditions box");
		}
});