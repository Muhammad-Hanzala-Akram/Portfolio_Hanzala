document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scrolling for Navigation Links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== "#") {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70, // Offset for sticky navbar
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 2. Scroll Reveal Animation (Intersection Observer)
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Apply observer to all elements with 'reveal' class
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    console.log("Portfolio scripts active!");
});
// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});