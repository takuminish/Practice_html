$(function() {
    //==== Githubの草を生やすあれを設置
    for (var k = 0; k < 365; k++) {
        $('<div id="conribution' + k + '" class="contribution"></div>').css({
            left: parseInt((k / 7)) * 12 + 200  , top: (k % 7) * 12 + 200
        }).appendTo('body');
    //==== mousehover時に浮き出し表示
	$(".contribution").hover( function(e) {
	    var id = "#" + this.id;
	    var crrent = Number(id.match(/\d+/));
            $(".balloon").css({top: (crrent % 7) * 12 + 165 , left: parseInt((crrent / 7)) * 12 + 110}); 
	    $(".balloon").fadeIn("slow");
            $(".balloon_text").text("予想点数が入るよ");
	    $(".balloon_before").fadeIn("slow");
        }, function() {
            $(".balloon").fadeOut("slow");
	    $(".balloon_before").fadeIn("slow");
        });
    }

   
});
