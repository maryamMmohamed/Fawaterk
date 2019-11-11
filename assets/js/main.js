(function ($) {
    "use strict";
    /*------------------------------------------------------------------
    [Table of contents]
    -------------------------------------------------------------------*/
    /*
    0. preloader
    1. navigation
    2. back to top
    3. partciles dot on background
    4. wow init

     */
 
         /*==========================================================
				0. preloader close button	
	======================================================================*/
         $(window).on('load', function () {
            $('#preloader').addClass('loaded');
         });

            // preloader close
            $('.cencel-preloader').on('click', function (e) {
            e.preventDefault();
            if (!($('#preloader').hasClass('loaded'))) {
                $('#preloader').addClass('loaded');
            }
        })

    /*==========================================================
     navigation
     ======================================================================*/
    if ($("#navigation1").length > 0) {
        $("#navigation1").navigation({
            effect: "fade",
            mobileBreakpoint: 992,
        });

 
        // menu scrolling

        if($('.scrolls').length > 0){
            $('.scrolls').on ('click',function () {
                $('html, body').animate({scrollTop: $(this.hash).offset().top -100}, 1000);
                return false;
            });
        }
    
    }


    /*==========================================================
         back to top
======================================================================*/

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 4000) {
            $(".BackTo").fadeIn('slow');
        }
        else {
            $(".BackTo").fadeOut('slow');
        }

    });

    $("body, html").on("click", ".BackTo", function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 800);
    });

    if ( $(window).width() > 767 ) {
        $(".BackTo").css('display', 'none');
    }

    /*==========================================================
            particles dot on background
  ======================================================================*/
  $(window).on("load", function() {
    $("#particles-js").length && particlesJS("particles-js", {
        particles: {
            number: {
                value: 28
            },
            color: {
                value: ["#0182cc", "#00befa", "#0182cc"]
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 1,
                random: !1,
                anim: {
                    enable: !1
                }
            },
            size: {
                value: 3,
                random: !0,
                anim: {
                    enable: !1
                }
            },
            line_linked: {
                enable: !1
            },
            move: {
                enable: !0,
                speed: 2,
                direction: "none",
                random: !0,
                straight: !1,
                out_mode: "out"
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !1
                },
                onclick: {
                    enable: !1
                },
                resize: !0
            }
        },
        retina_detect: !0
    })
});


	/*=============================================================
			wow animation init
	=========================================================================*/
	$(function(){
		var wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: false,
			live: true,
			scrollContainer: null,
		});
		wow.init();
    });
    

 	/*=============================================================
			fixed header
	=========================================================================*/
    $(window).on('scroll', function () {
        /**Fixed header**/
        
            if ($(window).scrollTop() > 100) {
                $('.header').addClass('fixed-header animated fadeInDown');
            } else {
                $('.header').removeClass('fixed-header animated fadeInDown');
            }

            if ($(window).width() < 991) {
                $('.header').removeClass('fixed-header animated fadeInDown');
            }
        
    });



})(jQuery);
