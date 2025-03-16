// DOM Elements
const mobileMenuButton = document.querySelector('.md\\:hidden');
const mobileMenu = document.querySelector('.md\\:flex');
const header = document.querySelector('nav');
const sections = document.querySelectorAll('.section');

// Mobile Menu Toggle
if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        mobileMenu.classList.toggle('flex-col');
        mobileMenu.classList.toggle('absolute');
        mobileMenu.classList.toggle('top-20');
        mobileMenu.classList.toggle('left-0');
        mobileMenu.classList.toggle('w-full');
        mobileMenu.classList.toggle('bg-midnight-blue');
        mobileMenu.classList.toggle('p-4');
        mobileMenu.classList.toggle('z-50');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex', 'flex-col', 'absolute', 'top-20', 'left-0', 'w-full', 'bg-midnight-blue', 'p-4', 'z-50');
        }
    });
}

// Intersection Observer for Section Animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

// Observe all sections
sections.forEach(section => {
    observer.observe(section);
});

// Navbar Scroll Effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    }
    
    if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// Initialize Chat Widget
const chatWidget = document.createElement('div');
chatWidget.className = 'chat-widget glow-effect';
chatWidget.innerHTML = '<i class="fas fa-robot text-2xl text-electric-aqua"></i>';
document.body.appendChild(chatWidget);

chatWidget.addEventListener('click', () => {
    alert('AI Assistant coming soon!');
});

// Add hover effect to feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('hover:scale-105');
    });
    
    card.addEventListener('mouseleave', () => {
        card.classList.remove('hover:scale-105');
    });
});

// Handle form submissions
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your submission! We will get back to you soon.');
        form.reset();
    });
});

// Add page load animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate hero content
    const heroContent = document.querySelector('.hero-content');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroCta = document.querySelector('.hero-cta');
    
    if (heroContent) heroContent.style.opacity = '1';
    if (heroSubtitle) {
        setTimeout(() => {
            heroSubtitle.style.opacity = '1';
        }, 500);
    }
    if (heroCta) {
        setTimeout(() => {
            heroCta.style.opacity = '1';
        }, 1000);
    }
});
