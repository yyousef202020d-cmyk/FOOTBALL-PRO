// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        header.style.padding = '20px 0';
        header.style.background = 'rgba(10, 10, 10, 0.8)';
    }
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Disable button and show loading state
        const originalText = submitBtn.innerText;
        submitBtn.innerText = 'Sending...';
        submitBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            alert('Thank you for your message! Our coaches will get back to you soon.');
            contactForm.reset();
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// Reveal cards on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});
