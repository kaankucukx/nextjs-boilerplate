import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { QueryProvider } from '@/components/QueryProvider';
import { ThemeProvider } from '@/components/ThemeProvider';
import { StyledComponentsRegistry } from '@/lib/StyledComponentsRegistry';
import { locales, type Locale } from '@/i18n/config';

export const metadata: Metadata = {
  title: 'TrendyAI - Advanced AI-Powered Trend Analysis',
  description:
    'Revolutionary AI-powered trend analysis platform with sophisticated insights and real-time intelligence',
};

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <NextIntlClientProvider messages={messages}>
            <QueryProvider>
              <ThemeProvider>{children}</ThemeProvider>
            </QueryProvider>
          </NextIntlClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
