// Animation utility functions
export const AnimationController = {
  // Initialize scroll animations
  initScrollAnimations: () => {
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

    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
  },

  // Initialize hover effects
  initHoverEffects: () => {
    const hoverElements = document.querySelectorAll('.hover-scale, .hover-lift');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        el.classList.add('hover-active');
      });
      el.addEventListener('mouseleave', () => {
        el.classList.remove('hover-active');
      });
    });
  },

  // Parallax effect for hero sections
  initParallaxEffect: () => {
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach(element => {
        const speed = parseFloat(element.getAttribute('data-speed') || '0.5');
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    });
  },

  // Interactive button effects
  initInteractiveButtons: () => {
    const buttons = document.querySelectorAll('.interactive-button');
    
    buttons.forEach(button => {
      button.addEventListener('mouseenter', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        button.style.setProperty('--mouse-x', `${x}px`);
        button.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  },

  // Typing animation for text
  typeWriter: (element: HTMLElement, text: string, speed: number = 100) => {
    let i = 0;
    element.innerHTML = '';
    
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, speed);
  },

  // Counter animation
  animateCounter: (element: HTMLElement, target: number, duration: number = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const counterInterval = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target.toString();
        clearInterval(counterInterval);
      } else {
        element.textContent = Math.floor(current).toString();
      }
    }, 16);
  },

  // Scroll progress indicator
  initScrollProgress: () => {
    const progressBar = document.querySelector('.scroll-progress') as HTMLElement;
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      progressBar.style.width = `${scrollPercent}%`;
    });
  },

  // Smooth scroll to element
  smoothScrollTo: (element: HTMLElement, duration: number = 1000) => {
    const targetPosition = element.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    const ease = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  },

  // Stagger animation for lists
  staggerAnimation: (elements: NodeListOf<HTMLElement>, delay: number = 100) => {
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('stagger-animated');
      }, index * delay);
    });
  },

  // Reset animations
  resetAnimations: () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      el.classList.remove('animated');
    });
  }
};

// Export individual functions for specific use cases
export const {
  initScrollAnimations,
  initHoverEffects,
  initParallaxEffect,
  initInteractiveButtons,
  typeWriter,
  animateCounter,
  initScrollProgress,
  smoothScrollTo,
  staggerAnimation,
  resetAnimations
} = AnimationController;

// Auto-initialize on DOM ready
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    AnimationController.initScrollAnimations();
    AnimationController.initHoverEffects();
    AnimationController.initParallaxEffect();
    AnimationController.initInteractiveButtons();
    AnimationController.initScrollProgress();
  });
}
