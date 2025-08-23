// Logout Modal Functions
function openLogoutModal(event) {
    event.preventDefault();
    const modal = document.getElementById('logout-modal');
    const modalContent = document.getElementById('logout-modal-content');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Close mobile menu if it's open
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }
    
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
        overlay.style.zIndex = 59;
        overlay.onclick = closeLogoutModal;
        document.body.appendChild(overlay);
    }
    
    // Prevent body scrolling
    document.body.classList.add('overflow-hidden');
}

function closeLogoutModal() {
    const modal = document.getElementById('logout-modal');
    const modalContent = document.getElementById('logout-modal-content');
    
    if (!modal || modal.classList.contains('hidden')) {
        return; // Modal is already closed
    }
    
    // Animate modal content out
    modalContent.style.transition = 'opacity 0.2s, transform 0.2s';
    modalContent.style.opacity = '0';
    modalContent.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        modal.classList.add('hidden');
        // Remove the overlay if it exists
        const overlay = document.getElementById('logout-modal-overlay');
        if (overlay) overlay.remove();
        // Allow body scrolling again
        document.body.classList.remove('overflow-hidden');
    }, 200);
}

function confirmLogout() {
    // Close the modal first
    closeLogoutModal();
    
    // Add a small delay for better UX, then redirect
    setTimeout(() => {
        // You can also make an AJAX call here to properly logout from the server
        // For now, we'll just redirect
        window.location.href = 'index.html';
    }, 300);
}

// Profile Dropdown Function
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

// Desktop Dropdown Functions (for existing dropdowns)
function toggleDropdown(event) {
    event.preventDefault();
    const dropdown = document.getElementById('dropdown-menu');
    dropdown.classList.toggle('hidden');
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function handler(e) {
        if (!dropdown.contains(e.target) && !event.target.contains(e.target)) {
            dropdown.classList.add('hidden');
            document.removeEventListener('click', handler);
        }
    });
}

function toggleDropdownProducts(event) {
    event.preventDefault();
    const dropdown = document.getElementById('dropdown-menu-products');
    dropdown.classList.toggle('hidden');
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function handler(e) {
        if (!dropdown.contains(e.target) && !event.target.contains(e.target)) {
            dropdown.classList.add('hidden');
            document.removeEventListener('click', handler);
        }
    });
}

// Mobile Menu Toggle Functions with Enhanced Touch Events
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileProductsToggle = document.getElementById('mobile-products-toggle');
    const mobileProductsDropdown = document.getElementById('mobile-products-dropdown');
    const mobileAboutToggle = document.getElementById('mobile-about-toggle');
    const mobileAboutDropdown = document.getElementById('mobile-about-dropdown');

    // Add touch feedback to all mobile menu items
    function addTouchFeedback() {
        const mobileMenuItems = document.querySelectorAll('#mobile-menu a, #mobile-menu button');
        
        mobileMenuItems.forEach(item => {
            // Skip if already has touch feedback
            if (item.dataset.touchFeedback) return;
            item.dataset.touchFeedback = 'true';
            
            // Add touch start event for immediate feedback
            item.addEventListener('touchstart', function(e) {
                // Different colors for different types of items
                let bgColor = '#dcfce7'; // Default green
                
                if (this.href && this.href.includes('applynow')) {
                    bgColor = '#dcfce7'; // Green for Apply Now
                } else if (this.onclick && this.onclick.toString().includes('openLogoutModal')) {
                    bgColor = '#fee2e2'; // Light red for logout
                } else if (this.closest('#mobile-products-dropdown, #mobile-about-dropdown')) {
                    bgColor = '#dbeafe'; // Light blue for dropdown items
                }
                
                this.style.backgroundColor = bgColor;
                this.style.transform = 'scale(0.98)';
                this.style.transition = 'all 0.1s ease';
            }, { passive: true });
            
            // Remove feedback on touch end
            item.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.style.backgroundColor = '';
                    this.style.transform = '';
                }, 150);
            }, { passive: true });
            
            // Handle touch cancel (when user drags away)
            item.addEventListener('touchcancel', function() {
                this.style.backgroundColor = '';
                this.style.transform = '';
            }, { passive: true });
        });
    }

    // Toggle mobile menu
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('hidden');
        document.body.classList.toggle('overflow-hidden'); // Prevent scrolling when menu is open
        
        // Add touch feedback after menu opens
        if (!mobileMenu.classList.contains('hidden')) {
            setTimeout(addTouchFeedback, 100);
        }
    }

    // Close mobile menu
    function closeMobileMenu() {
        mobileMenu.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }

    // Mobile menu button click with enhanced touch feedback
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            // Add haptic feedback if available
            if (navigator.vibrate) {
                navigator.vibrate(50); // 50ms vibration
            }
            toggleMobileMenu();
        });
        
        // Add touch feedback to hamburger button
        mobileMenuButton.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
            this.style.backgroundColor = '#16a34a';
            this.style.color = 'white';
            this.style.transition = 'all 0.1s ease';
        }, { passive: true });
        
        mobileMenuButton.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.transform = '';
                this.style.backgroundColor = '';
                this.style.color = '';
            }, 100);
        }, { passive: true });
        
        mobileMenuButton.addEventListener('touchcancel', function() {
            this.style.transform = '';
            this.style.backgroundColor = '';
            this.style.color = '';
        }, { passive: true });
    }

    // Mobile menu close button click
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', function() {
            if (navigator.vibrate) {
                navigator.vibrate(30);
            }
            closeMobileMenu();
        });
        
        // Add touch feedback to close button
        mobileMenuClose.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.9)';
            this.style.color = '#dc2626';
            this.style.transition = 'all 0.1s ease';
        }, { passive: true });
        
        mobileMenuClose.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.transform = '';
                this.style.color = '';
            }, 100);
        }, { passive: true });
        
        mobileMenuClose.addEventListener('touchcancel', function() {
            this.style.transform = '';
            this.style.color = '';
        }, { passive: true });
    }

    // Close menu when clicking outside (on the backdrop)
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function(e) {
            if (e.target === mobileMenu) {
                closeMobileMenu();
            }
        });
    }

    // Enhanced Mobile Products dropdown toggle
    if (mobileProductsToggle && mobileProductsDropdown) {
        mobileProductsToggle.addEventListener('click', function() {
            mobileProductsDropdown.classList.toggle('hidden');
            const chevron = this.querySelector('i');
            if (chevron) {
                chevron.classList.toggle('fa-chevron-down');
                chevron.classList.toggle('fa-chevron-up');
            }
            
            // Add haptic feedback
            if (navigator.vibrate) {
                navigator.vibrate(30);
            }
            
            // Add touch feedback to dropdown items when opened
            if (!mobileProductsDropdown.classList.contains('hidden')) {
                setTimeout(addTouchFeedback, 50);
            }
        });
    }

    // Enhanced Mobile About dropdown toggle
    if (mobileAboutToggle && mobileAboutDropdown) {
        mobileAboutToggle.addEventListener('click', function() {
            mobileAboutDropdown.classList.toggle('hidden');
            const chevron = this.querySelector('i');
            if (chevron) {
                chevron.classList.toggle('fa-chevron-down');
                chevron.classList.toggle('fa-chevron-up');
            }
            
            // Add haptic feedback
            if (navigator.vibrate) {
                navigator.vibrate(30);
            }
            
            // Add touch feedback to dropdown items when opened
            if (!mobileAboutDropdown.classList.contains('hidden')) {
                setTimeout(addTouchFeedback, 50);
            }
        });
    }

    // Close mobile menu when window is resized to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 1024) { // lg breakpoint
            closeMobileMenu();
        }
    });

    // Enhanced keyboard support and modal handling
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close mobile menu
            closeMobileMenu();
            
            // Close desktop dropdowns
            const dropdowns = ['dropdown-menu', 'dropdown-menu-products', 'profile-dropdown'];
            dropdowns.forEach(id => {
                const dropdown = document.getElementById(id);
                if (dropdown && !dropdown.classList.contains('hidden')) {
                    dropdown.classList.add('hidden');
                }
            });
            
            // Close logout modal
            closeLogoutModal();
        }
    });

    // Close logout modal when clicking on the backdrop
    const logoutModal = document.getElementById('logout-modal');
    if (logoutModal) {
        logoutModal.addEventListener('click', function(e) {
            if (e.target === logoutModal) {
                closeLogoutModal();
            }
        });
    }

    // Initialize touch feedback when page loads (for initial menu items)
    setTimeout(addTouchFeedback, 500);
});