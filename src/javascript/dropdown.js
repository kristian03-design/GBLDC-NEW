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