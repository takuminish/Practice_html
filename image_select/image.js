$(function() {
    $("#image1").hover( function() {
	$(".balloon").fadeIn("slow");
	$(".balloon_text").text("予想点数が入るよ");
	$(".balloon_before").fadeIn("slow");
    }, function() {
        $(".balloon").fadeOut("slow");
	$(".balloon_before").fadeIn("slow");
    });
});
