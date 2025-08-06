'use client';
import { useRouter, usePathname } from 'next/navigation';
import styled from 'styled-components';

import { locales, type Locale } from '@/i18n/config';

const SwitchContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  background: ${({ theme }) => theme.colors.surface};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xs};
  overflow: hidden;
`;

const LanguageButton = styled.button<{ $isActive: boolean }>`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primary : 'transparent'};
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.background : theme.colors.text};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    background: ${({ theme, $isActive }) =>
      $isActive ? theme.colors.primaryHover : theme.colors.border};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

type LanguageSwitchProps = {
  currentLocale: Locale;
};

export const LanguageSwitch = ({ currentLocale }: LanguageSwitchProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (locale: Locale) => {
    // Remove current locale from pathname and add new one
    const segments = pathname.split('/').filter(Boolean);
    if (locales.includes(segments[0] as Locale)) {
      segments.shift(); // Remove current locale
    }

    const newPath = `/${locale}${segments.length ? `/${segments.join('/')}` : ''}`;
    router.push(newPath);
  };

  return (
    <SwitchContainer>
      {locales.map((locale) => (
        <LanguageButton
          key={locale}
          $isActive={locale === currentLocale}
          onClick={() => handleLanguageChange(locale)}
          aria-label={`Switch to ${locale}`}
        >
          {locale}
        </LanguageButton>
      ))}
    </SwitchContainer>
  );
};
