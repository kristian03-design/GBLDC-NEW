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