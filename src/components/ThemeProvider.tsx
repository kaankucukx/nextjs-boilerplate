'use client';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useThemeStore } from '@/stores/themeStore';
import { lightTheme, darkTheme } from '@/styles/themes';
import { GlobalStyles } from '@/styles/GlobalStyles';

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { mode } = useThemeStore();
  const theme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      {children}
    </StyledThemeProvider>
  );
};
