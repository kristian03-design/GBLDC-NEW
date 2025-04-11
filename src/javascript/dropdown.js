function toggleDropdown(event) {
    event.preventDefault();
    const dropdown = document.getElementById('dropdown-menu');
    dropdown.classList.toggle('hidden');
}
function toggleDropdownProducts(event) {
    event.preventDefault();
    const dropdown = document.getElementById('dropdown-menu-products');
    dropdown.classList.toggle('hidden');
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
      }
      function toggleDropdownProducts(event) {
    event.preventDefault();
    const dropdown = document.getElementById('dropdown-menu-products-mobile');
    dropdown.classList.toggle('hidden');
      }
      function toggleDropdown(event) {
    event.preventDefault();
    const dropdown = document.getElementById('dropdown-menu-mobile');
    dropdown.classList.toggle('hidden');
      }