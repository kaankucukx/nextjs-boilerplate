import { HomePage } from '@/components/HomePage';
import { locales, type Locale } from '@/i18n/config';

// Generate static params for all locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function Page() {
  return <HomePage />;
}
