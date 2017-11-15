$(function() {
    $(".image>img").hover(function() {
        $(this).attr('src','image/door_open3.png');
    }, function() {
        $(this).attr('src','image/door_close3.png');
    });
});