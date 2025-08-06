'use client';
import { useTranslations } from 'next-intl';
import styled from 'styled-components';

import { useThemeStore } from '@/stores/themeStore';

const ToggleContainer = styled.button`
  position: relative;
  width: 60px;
  height: 32px;
  background: ${({ theme }) => theme.colors.surface};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: scale(1.05);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

const ToggleSlider = styled.div<{ $isDark: boolean }>`
  position: absolute;
  width: 24px;
  height: 24px;
  background: ${({ theme, $isDark }) =>
    $isDark ? theme.colors.text : theme.colors.background};
  border-radius: 50%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(${({ $isDark }) => ($isDark ? '12px' : '-12px')});
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const IconWrapper = styled.div<{ $isDark: boolean }>`
  position: absolute;
  font-size: 14px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(${({ $isDark }) => ($isDark ? '-12px' : '12px')});
  opacity: ${({ $isDark }) => ($isDark ? '0.7' : '0.7')};
`;

export const ThemeToggle = () => {
  const t = useTranslations('theme');
  const { mode, toggleTheme } = useThemeStore();
  const isDark = mode === 'dark';

  return (
    <ToggleContainer
      onClick={toggleTheme}
      aria-label={t('toggle')}
      title={t('toggle')}
    >
      <IconWrapper $isDark={isDark}>{isDark ? '🌙' : '☀️'}</IconWrapper>
      <ToggleSlider $isDark={isDark} />
    </ToggleContainer>
  );
};
