(function () {
  'use strict';

  // ----- Navbar scroll behavior -----
  const navbar = document.getElementById('navbar');
  let lastScrollY = window.scrollY;
  const scrollThreshold = 80;

  function updateNavbar() {
    const currentScrollY = window.scrollY;
    if (currentScrollY > scrollThreshold) {
      if (currentScrollY > lastScrollY) {
        navbar.classList.add('hidden');
      } else {
        navbar.classList.remove('hidden');
      }
    } else {
      navbar.classList.remove('hidden');
    }
    lastScrollY = currentScrollY;
  }

  let ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        updateNavbar();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // ----- Mobile menu toggle -----
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ----- Scroll reveal animation -----
  const revealElements = document.querySelectorAll('.reveal');
  const revealOffset = 80;
  const revealRootMargin = `0px 0px -${revealOffset}px 0px`;

  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { rootMargin: revealRootMargin, threshold: 0.1 }
  );

  revealElements.forEach(function (el) {
    revealObserver.observe(el);
  });

  // ----- Optional: cursor glow (desktop only, subtle) -----
  const cursorGlow = document.getElementById('cursorGlow');
  if (cursorGlow && window.matchMedia('(min-width: 1024px)').matches) {
    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;

    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorGlow.style.opacity = '1';
    });

    document.addEventListener('mouseleave', function () {
      cursorGlow.style.opacity = '0';
    });

    function animateGlow() {
      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;
      cursorGlow.style.left = glowX + 'px';
      cursorGlow.style.top = glowY + 'px';
      requestAnimationFrame(animateGlow);
    }
    animateGlow();
  }

  // ----- Smooth scroll for anchor links (fallback for older browsers) -----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });


})();
