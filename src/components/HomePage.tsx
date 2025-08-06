'use client';
import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

import styled from 'styled-components';

import { APP_NAME } from '@/constants/app';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  overflow: hidden;
`;

const AnimatedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const LogoContainer = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
`;

const Logo = styled.h1`
  font-family: 'Unbounded', sans-serif;
  font-size: clamp(3rem, 10vw, 6rem);
  font-weight: 300; /* Daha ince */
  color: #8b0000;
  margin: 0;
  letter-spacing: 0.1em;
  line-height: 1;
  text-transform: uppercase;
  opacity: 1;
  transform: translateY(0px) scale(1);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);

  /* Animation başlangıç durumu için */
  &.animate-initial {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
`;

const SubLogo = styled.div`
  font-family: 'Unbounded', sans-serif;
  font-size: clamp(0.9rem, 2.5vw, 1.4rem);
  font-weight: 600; /* Daha kalın */
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 0.8rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  opacity: 1;
  transform: translateY(0px);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);

  /* Animation başlangıç durumu için */
  &.animate-initial {
    opacity: 0;
    transform: translateY(20px);
  }
`;

export const HomePage = () => {
  const logoRef = useRef<HTMLHeadingElement>(null);
  const subLogoRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animasyon başlangıç sınıflarını ekle
    if (logoRef.current) {
      logoRef.current.classList.add('animate-initial');
    }
    if (subLogoRef.current) {
      subLogoRef.current.classList.add('animate-initial');
    }

    // Background orbs animation
    const createOrbs = () => {
      const orbs = [];
      for (let i = 0; i < 6; i++) {
        const orb = document.createElement('div');
        orb.style.cssText = `
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, 
            rgba(120, 119, 198, 0.1) 0%, 
            rgba(255, 159, 64, 0.1) 100%);
          filter: blur(40px);
          width: ${Math.random() * 300 + 100}px;
          height: ${Math.random() * 300 + 100}px;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          transform: translate(-50%, -50%);
        `;
        backgroundRef.current?.appendChild(orb);
        orbs.push(orb);
      }
      return orbs;
    };

    const orbs = createOrbs();

    // Daha yumuşak arka plan efektleri
    orbs.forEach((orb, index) => {
      animate(orb, {
        scale: [0, 1],
        opacity: [0, 0.3],
        duration: 3000,
        delay: index * 400,
        easing: 'easeOutQuart',
      });

      animate(orb, {
        translateX: () => `${(Math.random() - 0.5) * 100}px`,
        translateY: () => `${(Math.random() - 0.5) * 100}px`,
        duration: () => Math.random() * 30000 + 15000,
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine',
      });
    });

    // Yumuşak logo animasyonu
    if (logoRef.current) {
      animate(logoRef.current, {
        opacity: [0, 1],
        translateY: [30, 0],
        scale: [0.95, 1],
        duration: 1200,
        delay: 300,
        easing: 'easeOutQuart',
        complete: () => {
          logoRef.current?.classList.remove('animate-initial');
        },
      });
    }

    if (subLogoRef.current) {
      animate(subLogoRef.current, {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        delay: 800,
        easing: 'easeOutQuart',
        complete: () => {
          subLogoRef.current?.classList.remove('animate-initial');
        },
      });
    }

    // Basit logo animasyonu - gradient'ı korumak için span'lara bölmüyoruz

    // Çok hafif nefes alma efekti
    if (logoRef.current) {
      animate(logoRef.current, {
        scale: [1, 1.005, 1],
        duration: 6000,
        loop: true,
        easing: 'easeInOutSine',
      });
    }

    return () => {
      // Cleanup
      orbs.forEach((orb) => orb.remove());
    };
  }, []);

  return (
    <PageContainer>
      <AnimatedBackground ref={backgroundRef} />

      <LogoContainer>
        <Logo ref={logoRef}>{APP_NAME}</Logo>
        <SubLogo ref={subLogoRef}>AI-Powered Intelligence</SubLogo>
      </LogoContainer>
    </PageContainer>
  );
};
