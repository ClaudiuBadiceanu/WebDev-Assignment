

(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {

		/* 
		-----------------------
		Main Menu
		-----------------------
		*/

		$(window).on('scroll', function () {
			var scroll = $(window).scrollTop();
			if (scroll < 50) {
				$("#sticky-header").removeClass("sticky");
			} else {
				$("#sticky-header").addClass("sticky");
			}
		});



		/* 
		-----------------------
		PrettyPhoto
		-----------------------
		*/

		$("a[rel^='prettyPhoto']").prettyPhoto();


		/* 
		-----------------------
		Best Wrap
		-----------------------
		*/

		$('.best-wrap').owlCarousel({
			loop: true,
			margin: 10,
			autoplay: true,
			autoplayTimeout: 5000,
			smartSpeed: 2600,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
					nav: true
				},
				600: {
					items: 1,
					nav: true
				},
				1000: {
					items: 1,
					nav: true,
					loop: true
				}
			}
		})

		/* 
		-----------------------
		Coustomer Carousel
		-----------------------
		*/

		$('.coustomer-carousel').owlCarousel({
			loop: true,
			margin: 10,
			autoplay: true,
			autoplayTimeout: 5000,
			smartSpeed: 2600,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
					nav: true
				},
				600: {
					items: 1,
					nav: true
				},
				1000: {
					items: 1,
					nav: true,
					loop: true
				}
			}
		})



		/* 
		-----------------------
		Blog Wrap
		-----------------------
		*/

		$('.wrap-blog').owlCarousel({
			loop: true,
			margin: 10,
			autoplay: true,
			autoplayTimeout: 5000,
			smartSpeed: 2600,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
					nav: false
				},
				600: {
					items: 2,
					nav: false
				},
				1000: {
					items: 3,
					nav: false,
					loop: false
				}
			}
		})


		/* 
		-----------------------
		Soooth Scroll
		-----------------------
		*/

		 $('a[href*=#]:not([href=#])').on('click', function () {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if ($(window).width() < 768) {
                  if (target.length) {
                      $('html,body').animate({
                          scrollTop: target.offset().top - $('.navbar-header').outerHeight(true) + 1
                      }, 1000);
                      return false;
                  }
              } else {
                  if (target.length) {
                      $('html,body').animate({
                          scrollTop: target.offset().top - $('.navbar').outerHeight(true) + 1
                      }, 1000);
                      return false;
                  }
              }

          }
      });
      

		/* 
		-----------------------
		Scroll Up
		-----------------------
		*/

		$('.top-arrow').on('click', function () {
			$('body').animate({
				scrollTop: 0
			}, 1000);
		});

		$('.top-arrow').hide();

		$(window).scroll(function () {

			if ($(window).scrollTop() > 250) {
				$('.top-arrow').fadeIn(500);
			} else {
				$('.top-arrow').fadeOut(500);

			}
		});

		/* 
		-----------------------
		Preloader
		-----------------------
		*/

		$(window).load(function () {
			$('.spinner').fadeOut();
			$('.preloader').delay(500).fadeOut('1500');
			$('body').delay(500).css({
				'overflow': 'visible'
			});
		});


		/* 
		-----------------------
		Wow Js
		-----------------------
		*/

		new WOW().init();
		
		
		/* 
		-----------------------
		Disabled Inspect element For Brwoser
		-----------------------
		*/

        $('body').bind('cut copy paste', function (e) {
            e.preventDefault();
        });
        
        $('body').on('contextmenu',function(){
            return false;
        });
        
        $('body').on('keydown' , function(e) {
            if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {//Alt+c, Alt+v will also be disabled sadly.
                return false;
            }
        
        });

	});

}(jQuery));