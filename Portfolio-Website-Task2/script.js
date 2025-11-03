
        // Wait for the page to load
        document.addEventListener('DOMContentLoaded', function() {
            // Get all navigation links and pages
            const navLinks = document.querySelectorAll('.nav-link');
            const pages = document.querySelectorAll('.page');
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');
            
            // Function to show a specific page
            function showPage(pageId) {
                // Hide all pages
                pages.forEach(page => {
                    page.classList.remove('active');
                });
                
                // Show the selected page
                document.getElementById(pageId).classList.add('active');
                
                // Update active nav link
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-page') === pageId) {
                        link.classList.add('active');
                    }
                });
                
                // Close mobile menu if open
                navMenu.classList.remove('active');
            }
            
            // Add click event to navigation links
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const pageId = this.getAttribute('data-page');
                    showPage(pageId);
                    
                    // Smooth scroll to top of page
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });
            });
            
            // Hamburger menu toggle
            hamburger.addEventListener('click', function() {
                navMenu.classList.toggle('active');
            });
            
            // Form submission
            const contactForm = document.querySelector('.contact-form');
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            });
            
            // Start with home page active
            showPage('home');
        });
