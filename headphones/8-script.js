// Get elements
const hamburgerIcon = document.getElementById('hamburger-icon');
const navLinks = document.getElementById('nav-links');

// Add event listener to the hamburger icon
hamburgerIcon.addEventListener('click', () => {
    // Toggle the 'active' class to show or hide the menu
    navLinks.classList.toggle('active');
});
