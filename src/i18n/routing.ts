export type Locale = 'es' | 'en' | 'pt';
export const locales: Locale[] = ['es', 'en', 'pt'];
export const localeFromPath = (path: string): Locale => (path.match(/^\/(en|pt)(?:\/|$)/)?.[1] as Locale) || 'es';
export const homeFor = (locale: Locale) => locale === 'es' ? '/' : `/${locale}/`;
