 $(document).ready(function(){
        $('.carousel-slider').slick({
          centerMode: false,
          centerPadding: '0px',
          dots: false,
          arrows: false,
          infinite: true,
          speed: 1000,
          fade: false,
          cssEase: 'linear',
          slidesToShow: 3,
          slidesToScroll: 1,
         
          autoplay: true,
          autoplaySpeed: 3500,
          adaptiveHeight: true,
          responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            centerMode: false,
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