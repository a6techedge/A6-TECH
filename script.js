document.addEventListener('DOMContentLoaded', () => {
// Initialize AOS animations
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 100
});
// Close sidebar when clicking a nav link
document.querySelectorAll('.side-menu a').forEach(link => {
  link.addEventListener('click', () => {
    const navToggle = document.getElementById('nav-toggle');
    if (navToggle) navToggle.checked = false;
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



// bottom to top arrow

document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.querySelector(".back-to-top");

  // Show button after scrolling 200px
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  // Scroll to top when clicked
  backToTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});



