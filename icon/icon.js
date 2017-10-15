//======================================================================
//アイコン移動のJquery
//=====================================================================

$(function() {
    var iconx = [];  // アイコンのx座標
    var icony = [];  // アイコンのy座標

    //==== アイコンの座標を求め、アイコンを生成
    for ( var k = 0; k < 9; k++ ) {

	iconx[k] = getx(k) + ( $(window).width() / 2 ) - 50 ;  // アイコンのx座標を求め代入
	icony[k] = gety(k);                                    // アイコンのy座標を求め代入

	//---- アイコンを生成
	$('<div id="image' + k + '" class="image"></div>').css({
	    left: iconx[k]  , top:icony[k]
	}).appendTo('body');
    }

    $(window).on('resize' , function() {
        for ( var k = 0; k < 9; k++ ) {

    	    iconx[k] = getx(k) + ( $(window).width() / 2 ) - 50;  // アイコンのx座標を求め代入
	    icony[k] = gety(k);                                   // アイコンのy座標を求め代入

	//---- アイコンを生成
	    $("#"+"image"+k).css({ left: iconx[k]  , top:icony[k] });
        }
    });
    //==== アイコンを動かす
    $('.image').mousedown(function(e){
	var id = "#" + this.id;                    // 今動かしているアイコンのidを入手
	var crrent = Number(id.match(/\d+/));      // 今動かしているアイコンのid(数字)を入手
	var xxx = iconx[crrent];                   // 今動かしているアイコンの初期位置(x)を代入
	var yyy = icony[crrent];                   // 今動かしているアイコンの初期位置(y)を代入
	//==== アイコンをドラッグしているとき
	$(document).on('mousemove.image',function(e){
	    var wx = e.pageX-50;  // 現在のx座標を入手
	    var wy = e.pageY-50;  // 現在のy座標を入手
	    $(id).css({top: wy,left:wx});  // アイコンの座標を変更し、反映

	    //---- ほかのアイコンとの接触判定
	    for ( var k = 0; k < 9; k++ ) {
		if ( k == crrent ) { continue; }  // 自分自身は判定しない
		var xx = iconx[k];  // 判定する相手のアイコンのx座標を代入
		var yy = icony[k];  // 判定する相手のアイコンのy座標を代入

		//---- 接触判定
		if ( (wx + 50 >= xx  && wx + 50 <= xx + 100) &&  (wy + 50 >= yy  && wy + 50 <= yy + 100 ) ) { 
		    var tmpid = "#" + "image" + k;        // 接触した相手のidを代入
		    iconx[k] = iconx[crrent];             // 接触した相手の位置を今動かしているアイコンの初期位置に変更
	            icony[k] = icony[crrent];             // 接触した相手の位置を今動かしているアイコンの初期位置に変更
		    $(tmpid).animate({top: icony[k],left:iconx[k]},'normal');      // アイコンの位置を反映
		    iconx[crrent] = xx;                   // 今動かしているアイコンの初期位置を接触した相手の位置に変更
		    icony[crrent] = yy;                   // 今動かしているアイコンの初期位置を接触した相手の位置に変更
		}
	    }
	    return false;
	    //==== アイコンを離した時
	}).one('mouseup',function(e){
	    $(document).off('mousemove.image');
	    $(id).css({top: icony[crrent],left:iconx[crrent]}); // アイコンの位置を反映
	});
	return false;
    });
});

//==== アイコンのx座標を求める
function getx(n) {
    return ( ( $(window).width() / 2 ) - 100 ) *  Math.cos((n+0.47)*(Math.PI/9));
}
//==== アイコンのy座標を求める
function gety(n) {
    return ( $(window).height() - 100 ) * Math.sin((n+0.47)*(Math.PI/9));
}
