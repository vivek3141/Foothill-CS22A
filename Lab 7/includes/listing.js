$(document).ready(function () {
   $(".listing_address").click(function () {
       if($(this).parent().is('.open')){
           $(this).closest('.listing').find('.glass').fadeOut(500);
           $(this).closest('.listing').find('.house').animate({'left':'25px'});
           $(this).closest('.listing').removeClass('open');
       }
       else{
           $(this).closest('.listing').find('.glass').fadeIn(500);
           $(this).closest('.listing').find('.house').animate({'left':'10px'});
           $(this).closest('.listing').addClass('open');
       }
   })
});