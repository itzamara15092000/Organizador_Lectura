import { useEffect } from 'react';

export function useJQueryPlugins() {
  useEffect(() => {
    let owlInitialized = false;
    let slickInitialized = false;

    // Wait for jQuery and plugins to load
    const initPlugins = () => {
      const $ = window.$;
      
      if (!$) {
        console.log('jQuery not loaded yet');
        return;
      }

      try {
        // Initialize Owl Carousel for menu items
        if ($.fn.owlCarousel && $('.owl-menu-item').length > 0) {
          $('.owl-menu-item').owlCarousel({
            items: 4,
            loop: true,
            dots: true,
            nav: true,
            autoplay: true,
            margin: 30,
            responsive: {
              0: { items: 1 },
              600: { items: 2 },
              1000: { items: 4 }
            }
          });
          owlInitialized = true;
          console.log('Owl Carousel initialized');
        }
      } catch (error) {
        console.error('Error initializing Owl Carousel:', error);
      }

      try {
        // Initialize slider
        if ($.fn.slick && $('.Modern-Slider').length > 0) {
          $('.Modern-Slider').slick({
            autoplay: true,
            autoplaySpeed: 10000,
            speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: false,
            dots: true,
            pauseOnDotsHover: true,
            cssEase: 'linear',
            fade: true,
            draggable: false,
            prevArrow: '<button class="PrevArrow"></button>',
            nextArrow: '<button class="NextArrow"></button>',
          });
          slickInitialized = true;
          console.log('Slick Slider initialized');
        }
      } catch (error) {
        console.error('Error initializing Slick:', error);
      }

      // Smooth scroll for navigation
      $('.scroll-to-section a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        const target = $(this.hash);
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 80
          }, 800, 'swing');
        }
      });

      // Menu trigger
      $('.menu-trigger').on('click', function() {
        $(this).toggleClass('active');
        $('.header-area .nav').slideToggle(200);
      });

      // Scroll header effect
      $(window).on('scroll', function() {
        if ($(window).scrollTop() > 80) {
          $('.header-area').addClass('header-sticky');
        } else {
          $('.header-area').removeClass('header-sticky');
        }
      });

      // Hide preloader
      setTimeout(() => {
        $('#preloader').fadeOut('slow');
      }, 500);
    };

    // Initialize after a short delay to ensure all scripts are loaded
    const timer = setTimeout(() => {
      initPlugins();
    }, 100);

    return () => {
      clearTimeout(timer);
      // Cleanup only if plugins were initialized
      const $ = window.$;
      if ($) {
        try {
          if (owlInitialized && $('.owl-menu-item').length > 0) {
            $('.owl-menu-item').trigger('destroy.owl.carousel');
          }
        } catch (error) {
          console.error('Error destroying Owl Carousel:', error);
        }

        try {
          if (slickInitialized && $('.Modern-Slider').length > 0 && $('.Modern-Slider').hasClass('slick-initialized')) {
            $('.Modern-Slider').slick('unslick');
          }
        } catch (error) {
          console.error('Error destroying Slick:', error);
        }
      }
    };
  }, []);
}
