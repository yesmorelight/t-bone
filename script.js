// OPEN DAT THING
//LIKE A BOIS

$(document).ready(function(){
  
  $('.voucher').hide();
  
  $('#presentClick').click(function(){
   $('#presentClick').css({"transform": "rotate(180deg)", "margin-top": "-18rem", "opacity": "0"});
   $('.bowLeft, .bowRight, .presentTop').css({"opacity": "0"});
   $('.bowCenter').css({"height": "10rem", "bottom": "0rem"});
   $('.voucher').delay(500).show(0);
  });
});
