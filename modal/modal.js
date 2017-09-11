function center() {
  var w = $(window).width();
  var h = $(window).height();
  var cw = $('#modal-content').outerWidth();
  var ch = $('#modal-content').outerHeight();
  var pxleft = (w-cw)/2;
  var pxtop = (h-ch)/2;
  $('#modal-content').css({"top": pxtop});
  $('#modal-content').css({"left": pxleft});
}
$(function() {
  $('#modal').click( function() {
    $(this).blur();
    if($('#modal-overlay')[0]) return false;
    $('body').append('<div id="modal-overlay"></div>');
    $('#modal-overlay').fadeIn('slow');
    center();
    $('#modal-content').fadeIn('slow');
  });
  $('#modal-close').unbind().click( function() {
    $('#modal-content,#modal-overlay').fadeOut('slow',function() {
      $('#modal-overlay').remove();
    });
  });
});
