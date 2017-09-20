$( function() {
    mode = "red";
    
    $("#button1").click( function(e) {
	if ( mode == "red" ) {
	    $("#button1").text("Aqours");
	    $("#button1").attr("id","button2");
	    mode = "blue";
	    $("#text").text("Aqoursモード");
	} else {
	    $("#button2").text("μ's");
	    $("#button2").attr("id","button1");
	    mode = "red";
	    $("#text").text("μ'sモード");
	    
	}
    });
	
});
