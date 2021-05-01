$(document).ready(function(){
  $('.uneed').hide();
  $('.t1').addClass('active');
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
