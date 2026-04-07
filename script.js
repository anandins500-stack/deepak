// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth Scrolling
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

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    }
});

// Animate on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and skill items
document.querySelectorAll('section, .skill-item, .achievement-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Typing Effect for Hero
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Contact Form Handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show loading
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (real submission handled by PHP)
    setTimeout(() => {
        alert('✅ Thank you for your message! I will get back to you soon.');
        this.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Counter Animation (for future achievements section)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    updateCounter();
}

// Profile Picture Hover Effect
const profilePic = document.querySelector('.profile-pic');
profilePic.addEventListener('mouseenter', () => {
    profilePic.style.transform = 'scale(1.1) rotate(5deg)';
});
profilePic.addEventListener('mouseleave', () => {
    profilePic.style.transform = 'scale(1) rotate(0deg)';
});

// Initialize typing effect
window.addEventListener('load', () => {
    const heroSub = document.querySelector('.hero-content h3');
    typeWriter(heroSub, 'Computer Science Student & Aspiring Developer', 80);
});
// Profile Picture Error Handling
const profile = document.getElementById('profilePic');
const profilePlaceholder = document.querySelector('.profile-placeholder');

profilePic.addEventListener('load', () => {
    console.log('Profile picture loaded successfully!');
    profilePic.style.display = 'block';
    profilePlaceholder.style.display = 'none';
});

profilePic.addEventListener('error', () => {
    console.log('Profile picture failed to load, showing placeholder');
    profilePic.style.display = 'none';
    profilePlaceholder.style.display = 'block';
});

// Enhanced Profile Hover
profilePic.addEventListener('mouseenter', () => {
    profilePic.style.filter = 'brightness(1.1) saturate(1.2)';
});
profilePic.addEventListener('mouseleave', () => {
    profilePic.style.filter = 'brightness(1) saturate(1)';
});