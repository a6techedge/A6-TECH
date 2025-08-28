document.addEventListener('DOMContentLoaded', () => {
// Initialize AOS animations
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 100
});

// Mobile Side Menu Toggle
const navToggle = document.getElementById('nav-toggle');
const sideMenu = document.querySelector('.side-menu');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-btn');

// Open menu when checkbox is checked
navToggle.addEventListener('change', () => {
  if (navToggle.checked) {
    sideMenu.classList.add('open');
    overlay.classList.add('show');
  } else {
    sideMenu.classList.remove('open');
    overlay.classList.remove('show');
  }
});

// Close menu when clicking the X button
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    navToggle.checked = false;
    sideMenu.classList.remove('open');
    overlay.classList.remove('show');
  });
}

// Close menu when clicking the overlay
if (overlay) {
  overlay.addEventListener('click', () => {
    navToggle.checked = false;
    sideMenu.classList.remove('open');
    overlay.classList.remove('show');
  });
}

// Close menu when a nav link is clicked
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.checked = false;
    sideMenu.classList.remove('open');
    overlay.classList.remove('show');
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


// ............................................................................


// ............................................................................


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

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const section = entry.target;
      section.classList.add('about-visible');

      // ✅ Automatically adds spin-logo to the image
      const logoImg = section.querySelector('.about-logo img');
      if (logoImg) {
        logoImg.classList.add('spin-logo');
      }

      observer.unobserve(section); // run only once
    }
  });
}, { threshold: 0.3 });

const aboutSection = document.querySelector('.about-section');
if (aboutSection) {
  observer.observe(aboutSection);
}
});

// End of DOMContentLoaded
