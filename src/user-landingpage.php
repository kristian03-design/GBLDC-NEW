<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: user-landingpage.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <!-- FontAwesome for Icons -->
    <script src="https://kit.fontawesome.com/e588cb9d47.js" crossorigin="anonymous"></script>
    <link rel="icon" type="image/png" href="path/images/logocoop-removebg-preview 2.png" sizes="512x512"/>
    <link href="./output.css" rel="stylesheet">
     <!-- Slick JS & CSS (add in <head> if not already included) -->
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
      <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js"></script>
      <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <title>Greater Bulacan Livelihood Development Cooperative - LANDING PAGE</title>

      <style>
      /* Modern pulse animation for background blobs */
      @keyframes pulse {
        0%, 100% { opacity: 0.3; transform: scale(1);}
        50% { opacity: 0.5; transform: scale(1.15);}
      }
      .animate-pulse { animation: pulse 1.5s infinite; }
      /* Add delay for staggered card animation */
      .delay-100  { animation-delay: 0.2s !important; }
      .delay-200 { animation-delay: 0.3s !important; }
      .delay-400 { animation-delay: 0.6s !important; }
      .delay-600 { animation-delay: 0.9s !important; }

       </style>
</head>

<body class="bg-white antialiased">
  <!-- Header Section -->
  <header class="bg-white shadow-lg lg:shadow-md fixed left-0 top-0 z-50 animate-fade-in w-full">
    <div class="container-lg mx-auto flex justify-between items-center p-4">
    <!-- Logo and Title -->
    <div class="flex items-center space-x-4 overflow-hidden ">
    <a href="#"><img src="path/images/logocoop-removebg-preview 2.png" alt="GBLDC Logo" class="w-22 h-16 bg-auto"></a>
    <h1 class="text-lg font-medium animate-fade-in-right">Greater Bulacan Livelihood Development Cooperative</h1>
    </div>
    <!-- Navigation -->
    <nav class="hidden md:flex space-x-7 text-black font-normal tracking-normal">
    <a href="landingpage.html" class="hover:text-green-600 transition-colors duration-300">HOME</a>
    <div class="toggle relative">
    <a href="#" class="hover:text-green-600 flex items-center transition-colors duration-300" onclick="toggleDropdownProducts(event)">PRODUCT & SERVICES<span class="ml-1"><i class="fas fa-chevron-down"></i></span></a>
    <div class="absolute left-0 hidden bg-slate-50 p-3 rounded-lg shadow-xl mt-2 w-64 z-20 transition-all duration-100 ease-in-out animate-fade-in animate_faster" id="dropdown-menu-products">
      <a href="loan.html" class="block px-4 py-2 hover:bg-green-200 rounded-md transition-colors duration-200">Loans</a>
      <a href="#" class="block px-4 py-2 hover:bg-green-200 rounded-md transition-colors duration-200">Deposits</a>
      <a href="#" class="block px-4 py-2 hover:bg-green-200 rounded-md transition-colors duration-200">Insurance</a>
      <a href="#" class="block px-4 py-2 hover:bg-green-200 rounded-md transition-colors duration-200">Social Services</a>
    </div>
    </div>
    <div class="toggle relative">
    <a href="#" class="hover:text-green-600 flex items-center transition-colors duration-300" onclick="toggleDropdown(event)">ABOUT<span class="ml-1"><i class="fas fa-chevron-down"></i></span></a>
    <div class="absolute left-0 hidden bg-slate-50 p-3 rounded-lg shadow-xl mt-2 w-64 z-20 transition-all duration-100 ease-in-out animate-fade-in animate_faster" id="dropdown-menu">
      <a href="#" class="block px-4 py-2 hover:bg-green-200 rounded-md transition-colors duration-200">About GBLDC</a>
      <a href="#" class="block px-4 py-2 hover:bg-green-200 rounded-md transition-colors duration-200">Mission & Vision</a>
      <a href="#" class="block px-4 py-2 hover:bg-green-200 rounded-md transition-colors duration-200">Board of Directors</a>
      <a href="#" class="block px-4 py-2 hover:bg-green-200 rounded-md transition-colors duration-200">Committee Officers</a>
    </div>
    </div>
    <a href="news&events.html" class="hover:text-green-600 transition-colors duration-300">NEWS & EVENTS</a>
    </nav>
    <div class="button gap-4 hidden md:flex items-center mr-10">
      <!-- Apply Now Button -->
      <a href="applynow.html" class="border border-green-600 text-black px-6 py-2 rounded-lg font-normal hover:bg-green-50">Apply Now</a>
    <!-- User Profile Avatar with Dropdown -->
    <div class="relative group">
      <a href="#" title="User Profile" onclick="toggleProfileDropdown(event)">
        <img src="path/images/profile.png" alt="User Avatar" class="w-14 h-12 rounded-full object-cover shadow-sm hover:ring-2 hover:ring-green-400 transition-all duration-200 cursor-pointer">
      </a>
      <!-- Dropdown Menu -->
      <div id="profile-dropdown" class="absolute right-0 mt-2 w-76 p-4 bg-white rounded-lg shadow-lg border z-30 hidden animate-fade-in">
        <div class="flex  items-center px-4 py-2 text-gray-800 font-semibold mb-2 break-all">
          <?php echo isset($_SESSION['user_name']) ? htmlspecialchars($_SESSION['user_name']) : ''; ?>
        </div>
        <a href="user-dashboard-updated.html" class="block px-4 text-gray-800 hover:bg-green-200 rounded-md p-2 transition-colors">Profile</a>
        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-green-200 rounded-md p-2 transition-colors">Settings</a>
        <a href="notifications.html" class="block px-4 py-2 text-gray-800 hover:bg-green-200 rounded-md p-2 transition-colors">Notifications</a>
        <a href="help.html" class="block px-4 py-2 text-gray-800 hover:bg-green-200 rounded-md p-2 transition-colors">Help & Support</a>
        <div class="border-t my-1">
        <a href="index.html" onclick="openLogoutModal(event)" class="block px-4 py-2 hover:bg-green-200 rounded-md p-2 transition-colors">Logout</a>
      </div>
      </div>
    </div>
    </nav>
  </header>

  <!-- Hero Section -->
  <section class="relative animate-zoom-in">
    <img src="path/images/LANDINGPAGE.png" alt="Greater Bulacan" class="w-full h-[540px] object-fill" style="filter: brightness(0.8); position: relative; z-index: 1; top: 50px; left: 0;">
  </section>
  <section class="py-14 px-6 text-center mt-10">
    <h2 class="text-4xl font-medium text-teal-900 mb-2 animate-fade-in-up">Our Products</h2>
    <p class="text-gray-600 mb-10 tracking-wide animate-fade-in">Build your future according to how you want it to be</p>
  
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-2xl mx-auto text-left">
      <!-- Card 1 - Loan -->
      <div class="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between items-center tracking-wide animate-card-fade-in  hover:scale-105 hover:shadow-2xl transition-transform duration-300 group hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 relative overflow-hidden delay-0">
        <span class="absolute -top-8 -right-8 w-32 h-32 bg-green-200 opacity-30 rounded-full blur-2xl pointer-events-none animate-pulse"></span>
        <div>
          <h3 class="text-2xl font-semibold text-teal-900 mb-2 group-hover:animate-fade-in-up transition-all duration-300">Loan</h3>
          <p class="text-gray-600 mb-6 group-hover:animate-fade-in transition-all duration-300">Get financial assistance for your startup business, tuition fees, or home appliances.</p>
        </div>
        <img src="path/images/gbldc-loan.png" alt="Loan" class="w-56 h-56 mb-6 mt-6 animate-fade-in-up group-hover:scale-110 transition-transform duration-300 drop-shadow-xl group-hover:rotate-3">
        <a href="loan.html">
          <button class="bg-green-600 text-white px-5 py-2 rounded-lg font-light hover:bg-green-400 transition-colors duration-300 group-hover:animate-bounce-in shadow-md hover:shadow-lg">See More</button>
        </a>
      </div>

      <!-- Card 2 - Deposit -->
      <div class="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between items-center tracking-wide animate-card-fade-in  hover:scale-105 hover:shadow-2xl transition-transform duration-300 group hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 relative overflow-hidden delay-200">
        <div>
          <h3 class="text-2xl font-semibold text-teal-900 mb-2 group-hover:animate-fade-in-up transition-all duration-300">Deposit</h3>
          <p class="text-gray-600 mb-6 group-hover:animate-fade-in transition-all duration-300">Save up for your long-term needs or your next travel through creating a savings plan that is right for you.</p>
        </div>
        <img src="path/images/gbldc-deposit.png" alt="Deposit" class="w-56 h-56 mb-4 mt-6 animate-fade-in-up group-hover:scale-110 transition-transform duration-300 drop-shadow-xl group-hover:-rotate-3">
        <a href="deposit.html"><button class="bg-green-600 text-white px-5 py-2 rounded-lg font-light hover:bg-green-400 transition-colors duration-300 group-hover:animate-bounce-in shadow-md hover:shadow-lg">See More</button></a>
      </div>

      <!-- Card 3 - Insurance -->
      <div class="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between items-center tracking-wide animate-card-fade-in  hover:scale-105 hover:shadow-2xl transition-transform duration-300 group hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 relative overflow-hidden delay-400">
        <div>
          <h3 class="text-2xl font-semibold text-teal-900 mb-2 group-hover:animate-fade-in-up transition-all duration-300">Insurance</h3>
          <p class="text-gray-600 mb-6 group-hover:animate-fade-in transition-all duration-300">Set yourself up for life through a lifelong insurance plan for you and your family’s future.</p>
        </div>
        <img src="path/images/gbldc-insurance.png" alt="Insurance" class="w-56 h-56 mb-4 mt-6 animate-fade-in-up group-hover:scale-110 transition-transform duration-300 drop-shadow-xl group-hover:rotate-6">
        <button class="bg-green-600 text-white px-5 py-2 rounded-lg font-light hover:bg-green-400 transition-colors duration-300 group-hover:animate-bounce-in shadow-md hover:shadow-lg">See More</button>
      </div>

      <!-- Card 4 - Social Services -->
      <div class="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between items-center tracking-wide animate-card-fade-in  hover:scale-105 hover:shadow-2xl transition-transform duration-300 group hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 relative overflow-hidden delay-600">
        <div>
          <h3 class="text-2xl font-semibold text-teal-900 mb-2 group-hover:animate-fade-in-up transition-all duration-300">Social Services</h3>
          <p class="text-gray-600 mb-6 group-hover:animate-fade-in transition-all duration-300">Enjoy and be entitled to various social services benefits especially designed for members in every step of their lives.</p>
        </div>
        <img src="path/images/gbldc-socialservices.png" alt="Social Services" class="w-56 h-56 mb-4 mt-6 animate-fade-in-up group-hover:scale-110 transition-transform duration-300 drop-shadow-xl group-hover:-rotate-6">
        <button class="bg-green-600 text-white px-5 py-2 rounded-lg font-light hover:bg-green-400 transition-colors duration-300 group-hover:animate-bounce-in shadow-md hover:shadow-lg">See More</button>
      </div>
        </div>
    </section>
  <!-- CO-OP Member Meetings Section -->
  <section class="container mx-auto my-14 px-7">
    <h2 class="text-center text-teal-900 text-4xl font-medium animate-fade-in-up">CO-OP MEMBER MEETINGS</h2>
    <p class="text-center text-gray-700 mt-2 font-normal tracking-wide animate-fade-in">Join us for our upcoming meetings and events to stay informed and engaged with your cooperative community.</p>
    <div class="relative w-full mt-6">
      <!-- Slick Carousel Container -->
      <div class="w-full h-96 relative overflow-hidden" id="carousel">
      <div class="carousel-slider h-full w-full flex gap-4 overflow-hidden scroll-smooth snap-x snap-mandatory">
        <div class="px-2">
          <img src="path/images/meeting 1.png" class="w-full h-96 object-cover rounded-xl drop-shadow-2xl flex" alt="Meeting 1">
        </div>
        <div class="px-2">
          <img src="path/images/meeting 2.png" class="w-full h-96 object-cover rounded-xl drop-shadow-2xl" alt="Meeting 2">
        </div>
        <div class="px-2">
          <img src="path/images/meeting 3.png" class="w-full h-96 object-cover rounded-xl drop-shadow-2xl" alt="Meeting 3">
        </div>
        <div class="px-2">
          <img src="path/images/meeting 3.png" class="w-full h-96 object-cover rounded-xl drop-shadow-2xl" alt="Meeting 3">
        </div>
      </div>
  </section>
  
  <!-- Events & Announcements Section -->
  <section class="py-12 px-6 max-w-screen-2xl mx-auto mb-10">
    <div class="text-center mb-10">
      <h2 class="text-4xl font-medium text-teal-900 tracking-wide animate-fade-in-up">News and Events</h2>
      <p class="text-gray-500 mt-2 tracking-wide animate-fade-in">The latest updates from your partners</p>
    </div>
  
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 tracking-normal text-center  "> 
      <!-- Card 1 -->
      <div class="bg-white rounded-xl shadow transition-all duration-300 hover:shadow-lg hover:scale-105 animate-card-fade-in">
       <a href="#"><img src="path/images/event1.jpg" alt="Event 1" class="rounded-md mb-4 w-full h-54 object-cover animate-fade-in-up"/>
      <h3 class="text-lg  text-slate-800 mb-2 p-3">
        22nd Annual General Assembly of Greater Bulacan Livelihood Development Cooperative - held last March 22, 2024 @ Cafe De Apati, Makinabang, Baliuag, Bulacan
      </h3></a>
      <p class="text-medium text-gray-700 p-3">Join us for an engaging discussion on cooperative development and future initiatives.</p>
      </div>
  
      <!-- Card 2 -->
      <div class="bg-white rounded-xl shadow transition-all duration-300 hover:shadow-lg hover:scale-105 animate-card-fade-in">
      <a href="#"><img src="path/images/event1.jpg" alt="Event 2" class="rounded-md mb-4 w-full h-54 object-cover animate-fade-in-up"/>
      <h3 class="text-lg text-slate-800 mb-2 p-3 ">
        Greater Bulacan Livelihood Development Cooperative - Supports Coop Parade, Kick-Off Ceremony and Launching of Go Koop - 
        Empowering Cooperatives in line with the Celebration of Cooperative Month 2023
      </h3></a>
      <p class="text-sm text-gray-600 p-3">
      Join us for a day of celebration and awareness of the cooperative movement in our community.
      </p>
      </div>
  
      <!-- Card 3 -->
      <div class="bg-white rounded-xl shadow transition-all duration-300  hover:shadow-lg hover:scale-105 animate-card-fade-in">
      <a href="#"><img src="path/images/event1.jpg" alt="Event 3" class="rounded-md mb-4 w-full h-54 object-cover animate-fade-in-up"/>
      <h3 class="text-lg text-slate-800 mb-2 p-3">
      Greater Bulacan Livelihood Development Cooperative - Family Outing and Team Building held last April 12-13, 2025 @ Paynawa Beach Resort, Brgy. Laoag, Cabangan, Zambales
      </h3></a> 
      <p class="text-sm text-gray-600"></p>
      Join us for a fun-filled day of activities and bonding with fellow members.
      </p>
      </div>
    </div>
  
    <div class="text-center mt-10">
      <a href="news&events.html"><button class="bg-green-600 hover:bg-green-700 text-white font-light py-2 px-6 rounded-lg transition-colors duration-300">
      View More
      </button></a>
    </div>

       <!-- Chatbot Widget --> 
      <button onclick="toggleChatbot()" class="fixed bottom-10 right-10 bg-green-600 text-white p-4 rounded-full shadow-lg z-50 hover:bg-green-700 transition-transform transform hover:scale-110 animate-bounce-in animate-fade-in-up">
          <i class="fas fa-comments text-2xl"></i>
          </button>
          <div class="fixed bottom-4 right-4 w-96 max-h-[80vh] bg-white rounded-md shadow-lg border flex-col overflow-hidden z-50 hidden transition-all duration-300 animate-fade-in-up animate_faster" id="chatbot-widget">
          <div class="bg-green-600 px-4 py-2 text-lg font-medium flex justify-between items-center text-white animate-fade-in-down">
          <span>Chat with Us</span>
          <div>
       <button onclick="expandChatbot()" id="expand-btn" class="text-white focus:outline-none hover:text-gray-300 transition-colors mr-2" title="Expand">
       <i class="fas fa-expand"></i>
       </button>
       <button onclick="shrinkChatbot()" id="shrink-btn" class="text-white focus:outline-none hover:text-gray-300 transition-colors mr-2 hidden" title="Shrink">
       <i class="fas fa-compress"></i>
       </button>
       <button onclick="toggleChatbot()" class="text-white focus:outline-none hover:text-gray-300 transition-colors" title="Close">
       <i class="fas fa-times"></i>
       </button>
          </div>
          </div>
          <div id="chat-messages" class="flex-1 p-4 overflow-y-auto text-sm space-y-3 text-black animate-fade-in" style="height: 300px;">
          <!-- Messages will appear here -->
          </div>
          <form id="chat-form" class="flex p-2 border-t text-black animate-fade-in-up">
          <input id="chat-input" type="text" placeholder="Type your message..."
          class="flex-1 px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-400 text-black transition-shadow" />
          <button type="submit" class="bg-green-600 text-white px-4 rounded-r-md hover:bg-green-700 transition-colors">Send</button>
          </form>
          </div>
    </section>
  <!-- Logout Modal -->
  <!-- Logout Modal Section -->
  <section>
    <div id="logout-modal" class="fixed inset-0 flex items-center justify-center z-50 hidden ">
      <div class="bg-white rounded-lg shadow-lg p-10 w-96 " id="logout-modal-content">
        <h2 class="text-xl font-semibold text-gray-800 mb-4 text-center">Confirm Logout</h2>
        <p class="text-sm mb-6 text-center">Are you sure you want to logout?</p>
        <div class="flex justify-center gap-3">
          <button onclick="closeLogoutModal()" class="px-4 py-2 text-white rounded font-light" style="background-color: #3bb54a;">Cancel</button>
          <a href="index.html" class="px-4 py-2 rounded text-white font-light" style="background-color: rgb(177, 11, 11);">Logout</a>
        </div>
      </div>
    </div>
  </section>
   
  <!-- FOOTER -->
  <footer class="bg-green-700 text-white py-12 animate-fade-in-up">
    <div class="max-w-7xl mx-auto px-4 mt-4">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 text-sm text-gray-200 mt-5">
      
      <!-- Products & Services -->
      <div>
      <h4 class="font-semibold uppercase mb-4 text-white">Products & Services</h4>
      <ul class="space-y-2 font-light">
        <li><a href="loan.html" class="hover:underline transition-colors duration-200">Loan Products</a></li>
        <li><a href="#" class="hover:underline transition-colors duration-200">Deposit Products</a></li>
        <li><a href="#" class="hover:underline transition-colors duration-200">Insurance Products</a></li>
        <li><a href="#" class="hover:underline transition-colors duration-200">Social Services</a></li>
      </ul>
      </div>

      <!-- About -->
      <div>
      <h4 class="font-semibold uppercase mb-4 text-white">About</h4>
      <ul class="space-y-2 font-light">
        <li><a href="#" class="hover:underline transition-colors duration-200">About Greater Bulacan Livelihood Development Cooperative</a></li>
        <li><a href="#" class="hover:underline transition-colors duration-200">Senior Management</a></li>
        <li><a href="#" class="hover:underline transition-colors duration-200">Officers & Committees</a></li>
      </ul>
      </div>

      <!-- Other Quicklinks -->
      <div>
      <h4 class="font-semibold uppercase mb-4 text-white">Other Quicklinks</h4>
      <ul class="space-y-2 font-light">
        <li><a href="#" class="hover:underline transition-colors duration-200">News & Events</a></li>
        <li><a href="#" class="hover:underline transition-colors duration-200">FAQs</a></li>
        <li><a href="#" class="hover:underline transition-colors duration-200">Contact</a></li>
        <li><a href="#" class="hover:underline transition-colors duration-200">Apply Now</a></li>
        <li><a href="#" class="hover:underline transition-colors duration-200">Downloadable Forms</a></li>
        <li><a href="#" class="hover:underline transition-colors duration-200">Privacy Policy</a></li>
      </ul>
      </div>
      <!-- Download Our App -->
      <div>
      <h4 class="font-semibold uppercase mb-4 text-white">Download Our App</h4>
      <ul class="space-y-2 font-light">
        <li><a href="#" class="hover:underline transition-colors duration-200">Click Here to Download App</a></li>
      </ul>
      </div>
    </div>
    <!-- Copyright -->
    <div class="mt-12 text-center text-sm text-white font-normal">
      GREATER BULACAN LIVELIHOOD DEVELOPMENT COOPERATIVE © 2025. ALL RIGHTS RESERVED.
    </div>
    </div>
  </footer>
     <!-- JS SCRIPT -->
     <script src="../src/javascript/carousel.js"></script>
     <script src="../src/javascript/dropdown.js"></script>
    <script src="../src/javascript/chatbot.js"></script>
      <script>
      function toggleProfileDropdown(event) {
        event.preventDefault();
        const dropdown = document.getElementById('profile-dropdown');
        dropdown.classList.toggle('hidden');
        // Close dropdown when clicking outside
        document.addEventListener('click', function handler(e) {
        if (!dropdown.contains(e.target) && !event.target.contains(e.target)) {
          dropdown.classList.add('hidden');
          document.removeEventListener('click', handler);
        }
        });
      }
    </script>
     <script>
      function openLogoutModal(event) {
        event.preventDefault();
        const modal = document.getElementById('logout-modal');
        const modalContent = document.getElementById('logout-modal-content');
        modal.classList.remove('hidden');
        // Animate modal content in
        modalContent.style.opacity = '0';
        modalContent.style.transform = 'scale(0.95)';
        setTimeout(() => {
          modalContent.style.transition = 'opacity 0.3s, transform 0.3s';
          modalContent.style.opacity = '1';
          modalContent.style.transform = 'scale(1)';
        }, 10);
        // Add a semi-transparent background overlay
        if (!document.getElementById('logout-modal-overlay')) {
          const overlay = document.createElement('div');
          overlay.id = 'logout-modal-overlay';
          overlay.style.position = 'fixed';
          overlay.style.top = 0;
          overlay.style.left = 0;
          overlay.style.width = '100vw';
          overlay.style.height = '100vh';
          overlay.style.background = 'rgba(0,0,0,0.4)';
          overlay.style.zIndex = 49;
          overlay.onclick = closeLogoutModal;
          document.body.appendChild(overlay);
        }
      }
      function closeLogoutModal() {
        const modal = document.getElementById('logout-modal');
        const modalContent = document.getElementById('logout-modal-content');
        // Animate modal content out
        modalContent.style.transition = 'opacity 0.2s, transform 0.2s';
        modalContent.style.opacity = '0';
        modalContent.style.transform = 'scale(0.95)';
        setTimeout(() => {
          modal.classList.add('hidden');
          // Remove the overlay if it exists
          const overlay = document.getElementById('logout-modal-overlay');
          if (overlay) overlay.remove();
        }, 200);
      }
    </script>
    <!-- Animation CSS -->
    <style>
      @keyframes fade-in {
      from { opacity: 0; transform: translateY(30px);}
      to { opacity: 1; transform: translateY(0);}
    }
    @keyframes fade-up {
      from { opacity: 0; transform: translateY(40px);}
      to { opacity: 1; transform: translateY(0);}
    }
    @keyframes fade-down {
      from { opacity: 0; transform: translateY(-30px);}
      to { opacity: 1; transform: translateY(0);}
    }
    @keyframes bounce-slow {
      0%, 100% { transform: translateY(0);}
      50% { transform: translateY(-8px);}
    }
    .animate-fade-in { animation: fade-in 0.8s cubic-bezier(.4,0,.2,1) both;}
    .animate-fade-up { animation: fade-up 0.8s cubic-bezier(.4,0,.2,1) both;}
    .animate-fade-down { animation: fade-down 0.8s cubic-bezier(.4,0,.2,1) both;}
    .animate-bounce-slow { animation: bounce-slow 2s infinite;}
    .delay-100 { animation-delay: 0.1s;}
    .delay-200 { animation-delay: 0.2s;}
    .delay-300 { animation-delay: 0.3s;}
    .delay-400 { animation-delay: 0.4s;}
    .delay-500 { animation-delay: 0.5s;}
    </style>
</body>
</html>
