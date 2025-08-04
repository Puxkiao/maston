import React, { useEffect, useRef } from 'react';

interface InteractiveImageProps {
  src: string;
  alt: string;
  className?: string;
  zoom?: boolean;
  parallax?: boolean;
  speed?: number;
}

export const InteractiveImage: React.FC<InteractiveImageProps> = ({
  src,
  alt,
  className = '',
  zoom = false,
  parallax = false,
  speed = 0.5
}) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (parallax && imgRef.current) {
      const handleScroll = () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -speed;
        imgRef.current!.style.transform = `translateY(${rate}px)`;
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [parallax, speed]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-500 ${
          zoom ? 'hover:scale-110' : ''
        } ${parallax ? '' : 'hover:scale-105'}`}
      />
    </div>
  );
};

interface InteractiveButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animated?: boolean;
}

export const InteractiveButton: React.FC<InteractiveButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  animated = true
}) => {
  const baseClasses = 'font-nunito font-bold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95';
  
  const variantClasses = {
    primary: 'bg-[#204228] text-white hover:bg-[#122516] shadow-lg hover:shadow-xl',
    secondary: 'bg-[#febe00] text-[#204228] hover:bg-[#e6a700] shadow-lg hover:shadow-xl',
    ghost: 'bg-transparent border-2 border-[#204228] text-[#204228] hover:bg-[#204228] hover:text-white'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${
        animated ? 'hover:-translate-y-1' : ''
      }`}
    >
      {children}
    </button>
  );
};

interface AnimatedTextProps {
  text: string;
  delay?: number;
  className?: string;
  type?: 'fade' | 'slide' | 'typewriter';
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  delay = 0,
  className = '',
  type = 'fade'
}) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (type === 'typewriter' && textRef.current) {
      let i = 0;
      textRef.current.textContent = '';
      
      const typeInterval = setInterval(() => {
        if (i < text.length) {
          textRef.current!.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(typeInterval);
        }
      }, 100);
      
      return () => clearInterval(typeInterval);
    }
  }, [text, type]);

  const getAnimationClass = () => {
    switch (type) {
      case 'fade':
        return 'animate-on-scroll';
      case 'slide':
        return 'animate-on-scroll slide-in-left';
      case 'typewriter':
        return '';
      default:
        return 'animate-on-scroll';
    }
  };

  return (
    <span
      ref={textRef}
      className={`${getAnimationClass()} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {type !== 'typewriter' ? text : ''}
    </span>
  );
};

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: 'lift' | 'scale' | 'glow';
  onClick?: () => void;
}

export const InteractiveCard: React.FC<InteractiveCardProps> = ({
  children,
  className = '',
  hoverEffect = 'lift',
  onClick
}) => {
  const getHoverClass = () => {
    switch (hoverEffect) {
      case 'lift':
        return 'hover:-translate-y-2 hover:shadow-2xl';
      case 'scale':
        return 'hover:scale-105';
      case 'glow':
        return 'hover:shadow-[0_0_20px_rgba(254,190,0,0.3)]';
      default:
        return 'hover:-translate-y-2';
    }
  };

  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-lg shadow-md transition-all duration-300 cursor-pointer ${getHoverClass()} ${className}`}
    >
      {children}
    </div>
  );
};

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  className = '',
  speed = 3
}) => {
  return (
    <div className={`floating ${className}`} style={{ animationDuration: `${speed}s` }}>
      {children}
    </div>
  );
};

// Hook for scroll animations
export const useScrollAnimation = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);
};

// Hook for hover effects
export const useHoverEffects = () => {
  useEffect(() => {
    initHoverEffects();
  }, []);
};
