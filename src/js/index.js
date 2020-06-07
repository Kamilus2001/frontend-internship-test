/* Here goes your JS code */
//task 3 complete
var show=true;
$("#show-popup-form").click(function(){
	if(show){
	$(this).hide();
	$("#login-form").show();
	}
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
				setTimeout(function(){
					$("#login-form").fadeOut(1000, function(){
						show = false;
						$("#show-popup-form").text("Thank You!");
						$("#show-popup-form").fadeIn(1000);
					});
					
					}, 2000);
			}else{
				$("#login-validation").text("Invalid email or password");
			}
		}else{
			$("#login-validation").text("Check agree terms & conditions box");
		}
});