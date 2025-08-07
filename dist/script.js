// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards, testimonials, and pricing cards
document.querySelectorAll('.feature-card, .testimonial-card, .pricing-card, .problem-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add click tracking for affiliate links
document.querySelectorAll('a[href*="coursecreator360.com"]').forEach(link => {
    link.addEventListener('click', function() {
        // Track affiliate link clicks
        if (typeof gtag !== 'undefined') {
            gtag('event', 'click', {
                event_category: 'affiliate',
                event_label: this.href,
                value: 1
            });
        }
        
        // Optional: Add any other tracking here
        console.log('Affiliate link clicked:', this.href);
    });
});

// Mobile menu toggle (if you want to add mobile menu later)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-open');
}

// Add some interactive hover effects
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Pricing card interactions
document.querySelectorAll('.pricing-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        if (!this.classList.contains('popular')) {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        if (!this.classList.contains('popular')) {
            this.style.transform = 'translateY(0) scale(1)';
        } else {
            this.style.transform = 'scale(1.05)';
        }
    });
});

// Add a simple loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Stats counter animation
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = stat.textContent;
        const isNumber = /^\d+/.test(target);
        
        if (isNumber) {
            const targetNumber = parseInt(target.replace(/\D/g, ''));
            const suffix = target.replace(/\d/g, '');
            let current = 0;
            const increment = targetNumber / 50;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= targetNumber) {
                    current = targetNumber;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current).toLocaleString() + suffix;
            }, 30);
        }
    });
}

// Trigger stats animation when hero section is visible
const heroObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            heroObserver.unobserve(entry.target);
        }
    });
});

const heroSection = document.querySelector('.hero-stats');
if (heroSection) {
    heroObserver.observe(heroSection);
}