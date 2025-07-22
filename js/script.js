document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation and internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') { // For links just pointing to top of page
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle "Resume" button click (if it's a direct PDF link)
    // The HTML download attribute handles this, but if you needed JS for something more complex:
    const resumeButton = document.querySelector('.btn-primary[download]');
    if (resumeButton) {
        resumeButton.addEventListener('click', function() {
            // Optional: Add analytics tracking here if desired
            console.log('Resume button clicked!');
        });
    }

    // Basic form submission (without actual backend processing)
    const contactForm = document.querySelector('.contact-form-card form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            // In a real application, you would send this data to a server here
            // using fetch() or XMLHttpRequest.
            console.log('Form submitted!');
            const formData = new FormData(contactForm);
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }

            // You can add a success message or clear the form here
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
});