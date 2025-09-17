import React, { useEffect, useRef } from 'react';
import { useAnime } from '@/hooks/useAnime';
import { Shield, Lock, Eye, EyeOff, Key, FileText, Upload, Copy } from 'lucide-react';

// Animated Privacy Shield Component
export const AnimatedPrivacyShield: React.FC<{ className?: string }> = ({ className = '' }) => {
  const shieldRef = useRef<HTMLDivElement>(null);
  const { scaleIn, pulseGlow, floatingAnimation } = useAnime();

  useEffect(() => {
    if (shieldRef.current) {
      scaleIn(shieldRef.current, 500);
      setTimeout(() => {
        pulseGlow(shieldRef.current!);
        floatingAnimation(shieldRef.current!);
      }, 1500);
    }
  }, []);

  return (
    <div ref={shieldRef} className={`relative ${className}`}>
      <div className="relative w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
        <Shield className="w-12 h-12 text-white" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
      </div>
    </div>
  );
};

// Animated Lock Component
export const AnimatedLock: React.FC<{ className?: string }> = ({ className = '' }) => {
  const lockRef = useRef<HTMLDivElement>(null);
  const { rotateIn, floatingAnimation } = useAnime();

  useEffect(() => {
    if (lockRef.current) {
      rotateIn(lockRef.current, 300);
      setTimeout(() => {
        floatingAnimation(lockRef.current!);
      }, 1300);
    }
  }, []);

  return (
    <div ref={lockRef} className={`relative ${className}`}>
      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
        <Lock className="w-10 h-10 text-white" />
      </div>
    </div>
  );
};

// Animated Eye (Privacy) Component
export const AnimatedEye: React.FC<{ className?: string }> = ({ className = '' }) => {
  const eyeRef = useRef<HTMLDivElement>(null);
  const { bounceIn, floatingAnimation } = useAnime();

  useEffect(() => {
    if (eyeRef.current) {
      bounceIn(eyeRef.current, 600);
      setTimeout(() => {
        floatingAnimation(eyeRef.current!);
      }, 1600);
    }
  }, []);

  return (
    <div ref={eyeRef} className={`relative ${className}`}>
      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
        <Eye className="w-8 h-8 text-white" />
      </div>
    </div>
  );
};

// Animated Key Component
export const AnimatedKey: React.FC<{ className?: string }> = ({ className = '' }) => {
  const keyRef = useRef<HTMLDivElement>(null);
  const { slideInUp, floatingAnimation } = useAnime();

  useEffect(() => {
    if (keyRef.current) {
      slideInUp(keyRef.current, 900);
      setTimeout(() => {
        floatingAnimation(keyRef.current!);
      }, 1900);
    }
  }, []);

  return (
    <div ref={keyRef} className={`relative ${className}`}>
      <div className="w-18 h-18 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
        <Key className="w-9 h-9 text-white" />
      </div>
    </div>
  );
};

// Animated Code Digits Component
export const AnimatedCodeDigits: React.FC<{ code: string; className?: string }> = ({ 
  code, 
  className = '' 
}) => {
  const digitsRef = useRef<HTMLDivElement>(null);
  const { staggerFadeIn, scaleIn } = useAnime();

  useEffect(() => {
    if (digitsRef.current) {
      const digits = digitsRef.current.querySelectorAll('.code-digit');
      staggerFadeIn(Array.from(digits) as HTMLElement[], 150);
    }
  }, [code]);

  return (
    <div ref={digitsRef} className={`flex gap-2 ${className}`}>
      {code.split('').map((digit, index) => (
        <div
          key={index}
          className="code-digit w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg transform hover:scale-110 transition-transform"
        >
          {digit}
        </div>
      ))}
    </div>
  );
};

// Animated Feature Icons
export const AnimatedFeatureIcon: React.FC<{
  icon: React.ReactNode;
  color: string;
  delay: number;
  className?: string;
}> = ({ icon, color, delay, className = '' }) => {
  const iconRef = useRef<HTMLDivElement>(null);
  const { scaleIn, floatingAnimation } = useAnime();

  useEffect(() => {
    if (iconRef.current) {
      scaleIn(iconRef.current, delay);
      setTimeout(() => {
        floatingAnimation(iconRef.current!);
      }, delay + 1000);
    }
  }, [delay]);

  return (
    <div ref={iconRef} className={`${className}`}>
      <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center shadow-lg`}>
        {icon}
      </div>
    </div>
  );
};

// Animated Background Particles
export const AnimatedParticles: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const { floatingAnimation } = useAnime();

  useEffect(() => {
    if (particlesRef.current) {
      const particles = particlesRef.current.querySelectorAll('.particle');
      particles.forEach((particle, index) => {
        setTimeout(() => {
          floatingAnimation(particle as HTMLElement);
        }, index * 200);
      });
    }
  }, [floatingAnimation]);

  return (
    <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`particle absolute w-2 h-2 bg-blue-400 rounded-full opacity-30`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
};

// Animated Progress Bar
export const AnimatedProgressBar: React.FC<{
  progress: number;
  className?: string;
}> = ({ progress, className = '' }) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const { numberCounter } = useAnime();

  useEffect(() => {
    if (progressRef.current) {
      numberCounter(progressRef.current, progress);
    }
  }, [progress]);

  return (
    <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
      <div
        ref={progressRef}
        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
        style={{ width: '0%' }}
      />
    </div>
  );
};

// Animated Text Reveal
export const AnimatedTextReveal: React.FC<{
  text: string;
  className?: string;
  delay?: number;
}> = ({ text, className = '', delay = 0 }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const { typingEffect } = useAnime();

  useEffect(() => {
    if (textRef.current) {
      setTimeout(() => {
        typingEffect(textRef.current!, text);
      }, delay);
    }
  }, [text, delay]);

  return (
    <div ref={textRef} className={`${className}`}>
      {text}
    </div>
  );
}; 