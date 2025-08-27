 function toggleMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        if (menu.classList.contains('-translate-y-full')) {
          menu.classList.remove('-translate-y-full', 'invisible');
        } else {
          menu.classList.add('-translate-y-full', 'invisible');
        }
      }
      // Dropdowns for mobile
      function toggleDropdownProductsMobile(e) {
        e.preventDefault();
        document.getElementById('dropdown-menu-products-mobile').classList.toggle('hidden');
      }
      function toggleDropdownMobileAbout(e) {
        e.preventDefault();
        document.getElementById('dropdown-menu-about-mobile').classList.toggle('hidden');
      }
      // Chatbot toggle
      function toggleChatbot() {
        const widget = document.getElementById('chatbot-widget');
        widget.classList.toggle('hidden');
      }
      // Initialize Slick Carousel for Member Meetings
      $(function () {
        $("#meetings-carousel").slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          centerMode: true,
          dots: true,
          arrows: true,
          spaceBetween: 16,
          responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
          ],
        });
      });
