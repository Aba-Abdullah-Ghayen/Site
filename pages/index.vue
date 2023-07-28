<template>
  <div>
    <div class="header" >
      <p class="site-name">هیات جان نثاران اباعبدالله</p>
    </div>
    <div class="shadow-title parallax-top-shadow"></div>
    <div class="section-parallax parallax-00"></div>
    <div class="section-parallax parallax-01"></div>

    <div class="section full-height">
      <div class="section-title-wrap">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center parallax-fade-top">
              
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="section padding-top-bottom over-hide background-dark z-bigger-2">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-7 text-center">
            
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll back to top
================================================== -->

    <div class="scroll-to-top hover-target"></div>

  </div>
</template>

<script>


/* Please ❤ this if you like it! */


(function ($) {
  "use strict";

  //Parallax            

  function scrollBanner() {
    $(document).on('scroll', function () {
      var scrollPos = $(this).scrollTop();
      $('.header').css({
        'padding': (1 - (scrollPos / 200)) + 'rem 0',
        'background-color': 'rgba(0,0,0,' + (scrollPos / 10)+')'
      });
      $('.parallax-fade-top').css({
        'top': (scrollPos / 2) + 'px',
        'opacity': 1 - (scrollPos / 700)
      });
      $('.parallax-00').css({
        'top': (scrollPos / -3.5) + 'px'
      });
      $('.parallax-01').css({
        'top': (scrollPos * -2.8) + 'px',
        'opacity': 1 - (scrollPos / 200)
      });
      $('.parallax-top-shadow').css({
        'top': (scrollPos / -2) + 'px'
      });
    });
  }
  scrollBanner();


  //Scroll back to top

  $(document).ready(function () {
    var offset = 300;
    var duration = 400;
    jQuery(window).on('scroll', function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery('.scroll-to-top').addClass('active-arrow');
      } else {
        jQuery('.scroll-to-top').removeClass('active-arrow');
      }
    });
    jQuery('.scroll-to-top').on('click', function (event) {
      event.preventDefault();
      jQuery('html, body').animate({ scrollTop: 0 }, duration);
      return false;
    })


    /* Hero Case study images */

    $('.case-study-name:nth-child(1)').on('mouseenter', function () {
      $('.case-study-name.active').removeClass('active');
      $('.case-study-images li.show').removeClass("show");
      $('.case-study-images li:nth-child(1)').addClass("show");
      $('.case-study-name:nth-child(1)').addClass('active');
    })
    $('.case-study-name:nth-child(2)').on('mouseenter', function () {
      $('.case-study-name.active').removeClass('active');
      $('.case-study-images li.show').removeClass("show");
      $('.case-study-images li:nth-child(2)').addClass("show");
      $('.case-study-name:nth-child(2)').addClass('active');
    })
    $('.case-study-name:nth-child(3)').on('mouseenter', function () {
      $('.case-study-name.active').removeClass('active');
      $('.case-study-images li.show').removeClass("show");
      $('.case-study-images li:nth-child(3)').addClass("show");
      $('.case-study-name:nth-child(3)').addClass('active');
    })
    $('.case-study-name:nth-child(4)').on('mouseenter', function () {
      $('.case-study-name.active').removeClass('active');
      $('.case-study-images li.show').removeClass("show");
      $('.case-study-images li:nth-child(4)').addClass("show");
      $('.case-study-name:nth-child(4)').addClass('active');
    })
    $('.case-study-name:nth-child(1)').trigger('mouseenter')

  });

})(jQuery);
export default {
  name: 'IndexPage'
}
</script>
