document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Ensure it's a local anchor link and not just "#" or an external URL
            if (href.length > 1 && href.startsWith('#')) {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Basic form submission handler (can be expanded for actual submission)
    const earlyAccessForm = document.getElementById('early-access-form');
    if (earlyAccessForm) {
        earlyAccessForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission for now
            
            const emailInput = document.getElementById('email');
            if (emailInput.value && emailInput.checkValidity()) {
                // For a static site, you might use a service like Formspree or Netlify Forms.
                // Or, show a success message.
                alert('Thank you for signing up! We will keep you updated.');
                this.reset(); // Clear the form
            } else {
                alert('Please enter a valid email address.');
                emailInput.focus();
            }
        });
    }
});

