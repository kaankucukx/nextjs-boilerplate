import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'tr'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  // Fallback to default locale if locale is undefined
  const validLocale =
    locale && locales.includes(locale as Locale) ? locale : defaultLocale;

  return {
    locale: validLocale,
    messages: (await import(`./locales/${validLocale}.json`)).default,
  };
});
