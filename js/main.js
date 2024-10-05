


$(function(){
  $("#deskHeader").load("includes/headerPage.html"); 
  $("#slides").load("includes/slider.html"); 
  $("#mFooter").load("includes/footerPage.html"); 
  $("#zeroint").load("includes/zeroPage.html"); 
});

   /*----------------------------------------------------*/
    /*  Clients Slider
    /*----------------------------------------------------*/
    function testi_slider(){
        if ( $('.testi_slider').length ){
            $('.testi_slider').owlCarousel({
                loop:true,
                margin: 0,
                items: 1,
                nav:false,
                autoplay: true,
                smartSpeed: 1500,
                dots:true,
            })
        }
    }
    testi_slider();
//BackToTop
function BackToTop() {
    $('.back-to-top').on('click', function() {
      $('html, body').animate({
        scrollTop: 0
      }, 100);
      return false;
    });
    $(document).scroll(function() {
      var y = $(this).scrollTop();
      if (y > 600) {
        $('.back-to-top').fadeIn();
        $('.back-to-top').addClass('open');
      } else {
        $('.back-to-top').fadeOut();
        $('.back-to-top').removeClass('open');
      }
    });
  }
  BackToTop();
  //Animation
AOS.init({
  duration: 1200 });
//# sourceURL=pen.js
 