$(function() {
    $("#skill_select").val("hantei");
    $("#skill_select").on("change",function(event){
        var select = $("#skill_select").val();
	if ( select == "else_hantei" ) {
          $(".skill_ability").hide();	  
	}
    });
});
				    
	
