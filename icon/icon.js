$(function() {
    for ( var k = 0; k < 9; k++ ) {
	$('<div id="image' + k + '" class="image"></div>').css({
	    left: getx(k)+800  , top:gety(k)   }).appendTo('body');

    }
    $('.image').mousedown(function(e){
	var mx = e.pageX;
	var my = e.pageY;
	var id = "#" + this.id;
	$(document).on('mousemove.image',function(e){
	    var wx = e.pageX-50;
	    var wy = e.pageY-50;
	    $(id).css({top: wy,left:wx});
	    return false;
	}).one('mouseup',function(e){
	    mx = getx(Number(id.match(/\d+/))) + 800;
	    my = gety(Number(id.match(/\d+/)));
	    $(document).off('mousemove.image');
	    $(id).css({top: my,left:mx});
	});
	return false;
    });
});
function getx(n) {
    return 500 *  Math.cos((n+0.47)*(Math.PI/9));
}
function gety(n) {
    return 500 * Math.sin((n+0.47)*(Math.PI/9));
}
