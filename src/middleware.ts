import { defineMiddleware } from 'astro:middleware';
import { homeFor, localeFromPath, translate } from './i18n/translations';

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  const locale = localeFromPath(context.url.pathname);
  if (locale === 'es' || !/^\/(en|pt)\/(?:privacidad\/?)?$/.test(context.url.pathname) || response.status !== 200) return response;
  const escapeAttribute = (value: string) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  const decode = (value: string) => value.replace(/&amp;/g, '&').replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"');
  const html = (await response.text()).split(/(<script\b[^>]*>[\s\S]*?<\/script>|<style\b[^>]*>[\s\S]*?<\/style>)/gi).map((chunk) => {
    if (/^<(script|style)\b/i.test(chunk)) return chunk;
    return chunk
      .replace(/>([^<>]+)</g, (_, text) => `>${translate(text, locale)}<`)
      .replace(/\b(placeholder|aria-label|title|alt|content)="([^"]*)"/g, (_, attr, value) => `${attr}="${escapeAttribute(translate(decode(value), locale))}"`)
      .replace(/href="(https:\/\/wa\.me\/[^\"]+)"/g, (_, href) => {
        const url = new URL(decode(href));
        const message = url.searchParams.get('text') || '';
        const plan = message.match(/plan (Base|Plus|Pro)/)?.[1];
        url.searchParams.set('text', locale === 'en'
          ? (plan ? `Hi, I'm interested in the ${plan} plan from Celerisys. I'd like a proposal for my website.` : `Hi, I found Celerisys online and would like to discuss my business project.`)
          : (plan ? `Olá, tenho interesse no plano ${plan} da Celerisys. Gostaria de uma proposta para meu site.` : `Olá, encontrei a Celerisys e gostaria de conversar sobre meu projeto.`));
        return `href="${escapeAttribute(url.href)}"`;
      })
      .replace(/<a\b[^>]*>/g, tag => tag.includes('data-language=') ? tag : tag.replace(/href="\/(#[^"]*|privacidad|)"/g, (_, suffix) => `href="${homeFor(locale)}${suffix}"`));
  }).join('');
  const headers = new Headers(response.headers);
  headers.delete('content-length');
  headers.set('Content-Language', locale);
  return new Response(html, { status: response.status, statusText: response.statusText, headers });
});
