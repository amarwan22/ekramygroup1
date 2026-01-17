// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize everything
    initLoadingScreen();
    initNavbar();
    initAnimations();
    initContactForm();
    initBackToTop();
});

// Loading Screen
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    
    // Hide loading screen after 3 seconds
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainContent.style.display = 'block';
            
            // Trigger animations after content is visible
            setTimeout(() => {
                triggerAnimations();
            }, 300);
        }, 1000);
    }, 3000);
}

// Navbar
function initNavbar() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Update active link
            navLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // Change navbar style on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(3, 7, 18, 0.98)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.backgroundColor = 'rgba(3, 7, 18, 0.95)';
            navbar.style.padding = '15px 0';
        }
    });
}

// Animations
function initAnimations() {
    // Add animation classes to elements when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.slide-in-right, .slide-in-left, .fade-in');
    animatedElements.forEach(el => observer.observe(el));
}

function triggerAnimations() {
    // Trigger hero animations
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroBtn = document.querySelector('.hero-btn');
    
    if (heroTitle) heroTitle.classList.add('slide-in-right');
    if (heroSubtitle) heroSubtitle.classList.add('slide-in-left');
    if (heroBtn) heroBtn.classList.add('slide-in-bottom');
    
    // Add staggered animation to product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('animated');
        }, index * 200);
    });
}

// Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const phone = this.querySelector('input[type="tel"]').value;
            
            // Simple validation
            if (!name || !phone) {
                alert('الرجاء ملء جميع الحقول المطلوبة');
                return;
            }
            
            // Show success message
            alert('شكراً لتواصلكم! سنعود إليكم في أقرب وقت.');
            
            // Reset form
            this.reset();
        });
    }
}

// Back to Top Button
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Add hover effect to cards
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add click effect to brand logos
document.querySelectorAll('.brand-logo').forEach(logo => {
    logo.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
});