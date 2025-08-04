// Interactive Animation Integration
(function() {
  'use strict';

  // Initialize all interactive animations
  function initInteractiveAnimations() {
    // Scroll progress indicator
    createScrollProgress();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize hover effects
    initHoverEffects();
    
    // Initialize parallax effects
    initParallaxEffects();
    
    // Initialize interactive buttons
    initInteractiveButtons();
  }

  // Create scroll progress indicator
  function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
  }

  // Initialize scroll animations
  function initScrollAnimations() {
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

    // Add animate-on-scroll class to elements
    const elementsToAnimate = [
      'section',
      '.animate-on-scroll',
      '.interactive-card',
      '.interactive-image',
      'h1, h2, h3, h4, h5, h6',
      'p',
      'button',
      'img'
    ];

    elementsToAnimate.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        if (!el.classList.contains('no-animate')) {
          el.classList.add('animate-on-scroll');
          observer.observe(el);
        }
      });
    });
  }

  // Initialize hover effects
  function initHoverEffects() {
    // Add hover classes to interactive elements
    const hoverElements = document.querySelectorAll('button, .interactive-card, img');
    hoverElements.forEach(el => {
      el.classList.add('hover-lift');
    });

    // Add scale hover to images
    const images = document.querySelectorAll('img:not(.no-hover)');
    images.forEach(img => {
      img.classList.add('hover-scale');
    });
  }

  // Initialize parallax effects
  function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach(element => {
        const speed = parseFloat(element.getAttribute('data-speed') || '0.5');
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    });
  }

  // Initialize interactive buttons
  function initInteractiveButtons() {
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
      button.classList.add('btn-interactive');
      
      // Add ripple effect
      button.addEventListener('click', createRipple);
    });
  }

  // Create ripple effect
  function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 600);
  }

  // Update scroll progress
  function updateScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      progressBar.style.width = `${scrollPercent}%`;
    }
  }

  // Add CSS for animations
  function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: #febe00;
        z-index: 9999;
        transition: width 0.1s ease;
      }

      .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease-out;
      }

      .animate-on-scroll.animated {
        opacity: 1;
        transform: translateY(0);
      }

      .hover-lift {
        transition: all 0.3s ease;
      }

      .hover-lift:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
      }

      .hover-scale {
        transition: transform 0.3s ease;
      }

      .hover-scale:hover {
        transform: scale(1.05);
      }

      .btn-interactive {
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
      }

      .btn-interactive:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      }

      .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
      }

      @keyframes ripple-animation {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }

      .floating {
        animation: float 3s ease-in-out infinite;
      }

      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }

      .interactive-image {
        position: relative;
        overflow: hidden;
        border-radius: 0.5rem;
      }

      .interactive-image img {
        transition: transform 0.5s ease;
      }

      .interactive-image:hover img {
        transform: scale(1.05);
      }

      .interactive-card {
        transition: all 0.3s ease;
        cursor: pointer;
      }

      .interactive-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
      }

      @media (max-width: 768px) {
        .hover-scale:hover {
          transform: scale(1.02);
        }
        
        .hover-lift:hover {
          transform: translateY(-2px);
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Initialize when DOM is ready
  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initInteractiveAnimations);
    } else {
      initInteractiveAnimations();
    }
    
    // Add styles
    addAnimationStyles();
    
    // Update scroll progress on scroll
    window.addEventListener('scroll', updateScrollProgress);
  }

  // Start initialization
  init();
})();

// Export for global use
window.InteractiveAnimations = {
  init: initInteractiveAnimations
};
