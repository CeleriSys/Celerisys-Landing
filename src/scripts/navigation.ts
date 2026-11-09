import { homeFor, localeFromPath } from '../i18n/routing';

const locale = localeFromPath(location.pathname);
const readPreference = () => { try { return localStorage.getItem('celerisys-language'); } catch { return null; } };
const remember = (value: string) => { try { localStorage.setItem('celerisys-language', value); } catch {} };

document.querySelectorAll<HTMLAnchorElement>('[data-language]').forEach(link => {
  link.addEventListener('click', () => remember(link.dataset.language!));
});

// Suggest rather than force a language. Explicit page URLs always remain available.
const saved = readPreference();
const preferred = saved || navigator.languages?.map(value => value.split('-')[0]).find(value => ['es', 'en', 'pt'].includes(value));
if (preferred && preferred !== locale && ['es', 'en', 'pt'].includes(preferred)) {
  const banner = document.createElement('aside');
  banner.className = 'language-suggestion';
  banner.setAttribute('aria-label', 'Language / Idioma');
  const link = document.createElement('a');
  link.href = homeFor(preferred as 'es' | 'en' | 'pt') + (location.pathname.includes('/privacidad') ? 'privacidad' : '') + location.search;
  link.textContent = { es: 'Ver en español', en: 'View in English', pt: 'Ver em português' }[preferred as 'es' | 'en' | 'pt'];
  link.lang = preferred;
  link.hreflang = preferred;
  link.addEventListener('click', () => remember(preferred));
  const close = document.createElement('button');
  close.type = 'button';
  close.textContent = '×';
  close.setAttribute('aria-label', { es: 'Mantener español', en: 'Keep English', pt: 'Manter português' }[locale]);
  close.addEventListener('click', () => { remember(locale); banner.remove(); });
  banner.append(link, close);
  document.body.append(banner);
}

// Keep real anchor hrefs as a no-JS fallback and preserve modified clicks.
document.addEventListener('click', (event) => {
  if (!(event instanceof MouseEvent) || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  const link = (event.target as Element)?.closest<HTMLAnchorElement>('a[href]');
  if (!link || link.target || link.hasAttribute('download')) return;
  const url = new URL(link.href, location.href);
  if (url.origin !== location.origin || url.pathname.replace(/\/$/, '') !== location.pathname.replace(/\/$/, '') || url.search !== location.search || !url.hash) return;
  const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
  if (!target) return;
  event.preventDefault();
  target.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
  history.replaceState(history.state, '', location.pathname + location.search);
});

if (location.hash && document.getElementById(location.hash.slice(1))) {
  requestAnimationFrame(() => {
    document.getElementById(location.hash.slice(1))?.scrollIntoView();
    history.replaceState(history.state, '', location.pathname + location.search);
  });
}
