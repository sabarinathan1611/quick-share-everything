import { useEffect, useRef } from 'react';
import * as anime from 'animejs';

export const useAnime = () => {
  const animationRef = useRef<any>(null);

  const fadeInUp = (targets: string | HTMLElement | HTMLElement[], delay = 0) => {
    return anime.default({
      targets,
      translateY: [60, 0],
      opacity: [0, 1],
      duration: 800,
      delay,
      easing: 'easeOutCubic',
    });
  };

  const fadeInLeft = (targets: string | HTMLElement | HTMLElement[], delay = 0) => {
    return anime.default({
      targets,
      translateX: [-60, 0],
      opacity: [0, 1],
      duration: 800,
      delay,
      easing: 'easeOutCubic',
    });
  };

  const fadeInRight = (targets: string | HTMLElement | HTMLElement[], delay = 0) => {
    return anime.default({
      targets,
      translateX: [60, 0],
      opacity: [0, 1],
      duration: 800,
      delay,
      easing: 'easeOutCubic',
    });
  };

  const scaleIn = (targets: string | HTMLElement | HTMLElement[], delay = 0) => {
    return anime.default({
      targets,
      scale: [0.8, 1],
      opacity: [0, 1],
      duration: 600,
      delay,
      easing: 'easeOutBack',
    });
  };

  const rotateIn = (targets: string | HTMLElement | HTMLElement[], delay = 0) => {
    return anime.default({
      targets,
      rotate: ['-180deg', '0deg'],
      scale: [0.5, 1],
      opacity: [0, 1],
      duration: 1000,
      delay,
      easing: 'easeOutBack',
    });
  };

  const bounceIn = (targets: string | HTMLElement | HTMLElement[], delay = 0) => {
    return anime.default({
      targets,
      translateY: [-100, 0],
      scale: [0.3, 1],
      opacity: [0, 1],
      duration: 1000,
      delay,
      easing: 'easeOutBounce',
    });
  };

  const slideInUp = (targets: string | HTMLElement | HTMLElement[], delay = 0) => {
    return anime.default({
      targets,
      translateY: [100, 0],
      opacity: [0, 1],
      duration: 800,
      delay,
      easing: 'easeOutQuart',
    });
  };

  const staggerFadeIn = (targets: string | HTMLElement | HTMLElement[], stagger = 100) => {
    return anime.default({
      targets,
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 600,
      stagger,
      easing: 'easeOutCubic',
    });
  };

  const pulseGlow = (targets: string | HTMLElement | HTMLElement[]) => {
    return anime.default({
      targets,
      boxShadow: [
        '0 0 0 0 rgba(59, 130, 246, 0.7)',
        '0 0 0 10px rgba(59, 130, 246, 0)',
        '0 0 0 0 rgba(59, 130, 246, 0)'
      ],
      duration: 2000,
      easing: 'easeInOutQuad',
      loop: true,
    });
  };

  const floatingAnimation = (targets: string | HTMLElement | HTMLElement[]) => {
    return anime.default({
      targets,
      translateY: ['0px', '-10px', '0px'],
      duration: 3000,
      easing: 'easeInOutSine',
      loop: true,
      direction: 'alternate',
    });
  };

  const typingEffect = (targets: string | HTMLElement | HTMLElement[], text: string) => {
    const element = typeof targets === 'string' ? document.querySelector(targets) : targets[0];
    if (!element) return null;

    element.textContent = '';
    let currentIndex = 0;

    return anime.default({
      duration: 50,
      easing: 'linear',
      loop: false,
      update: function() {
        if (currentIndex < text.length) {
          element.textContent += text[currentIndex];
          currentIndex++;
        }
      },
    });
  };

  const numberCounter = (targets: string | HTMLElement | HTMLElement[], endValue: number) => {
    return anime.default({
      targets,
      innerHTML: [0, endValue],
      round: 1,
      duration: 2000,
      easing: 'easeOutExpo',
    });
  };

  const cleanup = () => {
    if (animationRef.current) {
      animationRef.current.pause();
      animationRef.current = null;
    }
  };

  useEffect(() => {
    return cleanup;
  }, []);

  return {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    rotateIn,
    bounceIn,
    slideInUp,
    staggerFadeIn,
    pulseGlow,
    floatingAnimation,
    typingEffect,
    numberCounter,
    cleanup,
  };
}; 