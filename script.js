// Initialize AOS animations
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 100
});

// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('nav');

mobileMenu.addEventListener('click', () => {
  nav.classList.toggle('active');
  mobileMenu.classList.toggle('fa-times');
});

// Close mobile menu when clicking a link
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    mobileMenu.classList.remove('fa-times');
  });
});

// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Order button confirmation
const orderBtn = document.querySelector('.btn-primary');
if (orderBtn) {
  orderBtn.addEventListener('click', (e) => {
    if (e.target.href.includes('forms.gle')) {
      e.preventDefault();
      if (confirm("You'll be redirected to our order form. Ready to proceed?")) {
        window.open(e.target.href, '_blank');
      }
    }
  });
}

// Parallax hero effect
window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
  }
});
