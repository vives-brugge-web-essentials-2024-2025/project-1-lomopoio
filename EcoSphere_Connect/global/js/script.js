document.addEventListener('DOMContentLoaded', () => {
    // Select the back-to-top button
    const backToTopButton = document.querySelector('.back-to-top');

    if (!backToTopButton) {
        console.error("The back-to-top button was not found in the DOM.");
        return;
    }

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) { // If scrolled more than 100px
            backToTopButton.style.display = 'block'; // Show the button
            backToTopButton.style.opacity = '1'; // Fade in
        } else {
            backToTopButton.style.opacity = '0'; // Fade out
            setTimeout(() => (backToTopButton.style.display = 'none'), 300); // Hide after fade out
        }
    });

    // Smooth scroll to top when button is clicked
    backToTopButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        window.scrollTo({
            top: 0, // Scroll to the top
            behavior: 'smooth' // Smooth scrolling
        });
    });
});
