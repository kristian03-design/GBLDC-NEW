 $(document).ready(function(){
        $('.carousel-slider').slick({
          centerMode: true,
          centerPadding: '0px',
          dots: false,
          arrows: true,
          infinite: true,
          speed: 500,
          fade: false,
          cssEase: 'linear',
          slidesToShow: 3,
          slidesToScroll: 1,
          prevArrow: '<button class="bg-white font-semibold p-2 rounded-full shadow-md w-10 flex items-center justify-center hover:bg-green-100 transition-colors duration-200 absolute left-4 top-1/2 -translate-y-1/2 z-10" aria-label="Previous Slide"><i class="fas fa-chevron-left text-xl text-green-700"></i></button>',
          nextArrow: '<button class="bg-white font-semibold p-2 rounded-full shadow-md w-10 flex items-center justify-center hover:bg-green-100 transition-colors duration-200 absolute right-4 top-1/2 -translate-y-1/2 z-10" aria-label="Next Slide"><i class="fas fa-chevron-right text-xl text-green-700"></i></button>',
          autoplay: true,
          autoplaySpeed: 3500,
          adaptiveHeight: true,
          responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            centerMode: true,
            centerPadding: '0px'
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            centerPadding: '0px'
          }
        }
          ]
        });
      });