$(document).ready(function(){
  $('.uneed').hide();
  $('.t1').addClass('active');

  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $(".navbar").addClass("navbar-active");
    } else {
      $(".navbar").removeClass("navbar-active");
    }
  });




})
function opentab(event, tab){
  if(tab=='offer'){
    $('.t1').addClass('active');
    $('.t2').removeClass('active');
    $('.uneed').hide();
    $('.weoffer').show();

  }else{
    $('.t2').addClass('active');
    $('.t1').removeClass('active');
    $('.weoffer').hide();
    $('.uneed').show();
  }
}

