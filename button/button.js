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
    $(".difficulty_button").click( function(e) {
	var id =  "#" + this.id;
	switch(id){
	case "#easy":
            $("#easy").attr("class","difficulty_button_active");
	    $("#normal").attr("class","difficulty_button");
	    $("#hard").attr("class","difficulty_button");
	    $("#expert").attr("class","difficulty_button");
	    $("#master").attr("class","difficulty_button");

	    break;
	case "#normal":
            $("#easy").attr("class","difficulty_button");
	    $("#normal").attr("class","difficulty_button_active");
	    $("#hard").attr("class","difficulty_button");
	    $("#expert").attr("class","difficulty_button");
	    $("#master").attr("class","difficulty_button");

	    break;
	case "#hard":
            $("#easy").attr("class","difficulty_button");
	    $("#normal").attr("class","difficulty_button");
	    $("#hard").attr("class","difficulty_button_active");
	    $("#expert").attr("class","difficulty_button");
	    $("#master").attr("class","difficulty_button");

	    break;
	case "#expert":
            $("#easy").attr("class","difficulty_button");
	    $("#normal").attr("class","difficulty_button");
	    $("#hard").attr("class","difficulty_button");
	    $("#expert").attr("class","difficulty_button_active");
	    $("#master").attr("class","difficulty_button");

	    break;
	case "#master":
            $("#easy").attr("class","difficulty_button");
	    $("#normal").attr("class","difficulty_button");
	    $("#hard").attr("class","difficulty_button");
	    $("#expert").attr("class","difficulty_button");
	    $("#master").attr("class","difficulty_button_active");

	    break;
	}

    });
});
