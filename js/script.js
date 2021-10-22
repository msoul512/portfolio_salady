/*menu roll color script*/
$(function(){
  var rollHeader = 200;
  $(window).scroll(function() {
  var scroll = getCurrentScroll();
    if ( scroll >= rollHeader ) {
      $('.header').addClass('roll');
    }
    else {
      $('.header').removeClass('roll');
    }
  });
function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
  }
});
/*gnv*/
$(function(){
  $('.gnb_btn').click(function(){
    $('#gnv').slideToggle(200);
  });//메뉴보이기/감추기

  $(window).resize(function(){
    if ($(this).width() > 767) {
    $('#gnv').show(200);
    }else{
      $('#gnv').hide(200);
    }
  });//모바일에서 보이기/감추기
});