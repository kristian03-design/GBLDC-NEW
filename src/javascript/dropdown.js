function toggleDropdown(event) {
    event.preventDefault();
    const dropdown = document.getElementById('dropdown-menu');
    const otherDropdown = document.getElementById('dropdown-menu-products');

    if (!dropdown.classList.contains('hidden')) {
        dropdown.classList.add('hidden');
    } else {
        dropdown.classList.remove('hidden');
        otherDropdown.classList.add('hidden');
    }
}

function toggleDropdownProducts(event) {
    event.preventDefault();
    const dropdown = document.getElementById('dropdown-menu-products');
    const otherDropdown = document.getElementById('dropdown-menu');

    if (!dropdown.classList.contains('hidden')) {
        dropdown.classList.add('hidden');
    } else {
        dropdown.classList.remove('hidden');
        otherDropdown.classList.add('hidden');
    }
}

