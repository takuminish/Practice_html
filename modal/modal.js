//=====================================================
// modal-contentを画面中央に配置
//=====================================================
function center() {
  var w = $(window).width();    // ウィンドウの横の長さを取得
  var h = $(window).height();   // ウィンドウの縦の長さを取得
  var cw = $('#modal-content').outerWidth();  // modal-contentの横の長さを取得
  var ch = $('#modal-content').outerHeight(); // modal-contentの縦の長さを取得
  var pxleft = (w-cw)/2;  // modal-contentが画面中央になるように位置(横)を計算
  var pxtop = (h-ch)/2;   // modal-contentが画面中央になるように位置(縦)を計算
  $('#modal-content').css({"top": pxtop});    // cssで縦の位置を変更
  $('#modal-content').css({"left": pxleft});  // cssで横の位置を変更
}

//====================================================
// jqueryのあれ
//====================================================
$(function() {
  //==== modalをクリックした時
  $('#modal').click( function() {
    $(this).blur();
    if($('#modal-overlay')[0]) return false;
    $('body').append('<div id="modal-overlay"></div>');  // bodyにmodal-overlayを追加
    $('#modal-overlay').fadeIn('slow');    // modal-overlayをゆっくり表示させる。
    center();  // modal-contentの位置を決定
    $('#modal-content').fadeIn('slow');    // modal-contentをゆっくり表示させる。
  });
    
  //==== modal-closeをクリックした時
    $('#modal-close').unbind().click( function() {
      // modal-contentをゆっくり非表示にしてbodyから消す
      $('#modal-content,#modal-overlay').fadeOut('slow',function() {
        $('#modal-overlay').remove();
      });
    });
});
