import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const origin = 'https://info.celerisys.com';
const pages = ['', 'privacidad'];
const home = language => language === 'es' ? '/' : `/${language}/`;
const dictionarySource = readFileSync('src/i18n/translations.ts', 'utf8').split('const rows = `')[1].split('`;')[0];
const rows = dictionarySource.trim().split('\n').map(row => row.split('|'));
assert.equal(new Set(rows.map(row => row[0])).size, rows.length, 'Duplicate translation keys');
for (const row of rows) assert.ok(row.length === 3 && row.every(Boolean), `Incomplete translation: ${row[0]}`);

const visibleText = html => [...html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, '').matchAll(/>([^<>]+)</g)].map(match => match[1].replace(/\s+/g, ' ').trim());
for (const language of ['es', 'en', 'pt']) {
  for (const page of pages) {
    const path = home(language) + page;
    const html = readFileSync(`dist${path}${page ? '/' : ''}index.html`, 'utf8');
    assert.ok(html.includes(`<html lang="${language}">`), `HTML language: ${path}`);
    assert.ok(html.includes(`rel="canonical" href="${origin}${path}"`), `Canonical: ${path}`);
    for (const alternate of ['es', 'en', 'pt']) {
      assert.ok(html.includes(`hreflang="${alternate}" href="${origin}${home(alternate)}${page}"`), `Alternate: ${path} -> ${alternate}`);
    }
    assert.ok(html.includes('hreflang="x-default"'), `x-default: ${path}`);
    for (const alternate of ['es', 'en', 'pt']) {
      const link = [...html.matchAll(/<a\b[^>]*>/g)].map(match => match[0]).find(tag => tag.includes(`data-language="${alternate}"`));
      assert.ok(link?.includes(`href="${home(alternate)}${page}"`), `Language selector: ${path} -> ${alternate}`);
    }
    assert.equal([...html.matchAll(/<h1\b/g)].length, 1, `One h1: ${path}`);
    const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
    assert.ok(schemas.some(schema => schema['@type'] === 'WebPage' && schema.inLanguage === language));
    if (!page) {
      const service = schemas.find(schema => schema['@type'] === 'Service');
      assert.deepEqual(service.hasOfferCatalog.itemListElement.map(offer => offer.price), ['229', '429', '699']);
    }
    if (language !== 'es') {
      const original = readFileSync(`dist/${page ? page + '/' : ''}index.html`, 'utf8');
      const translated = visibleText(html);
      const source = visibleText(original);
      for (const [es, en, pt] of rows) {
        if (source.includes(es) && es !== (language === 'en' ? en : pt)) {
          assert.ok(!translated.includes(es), `Untranslated content on ${path}: ${es}`);
        }
      }
      assert.ok(!html.includes('href="/#'), `Localized navigation: ${path}`);
      assert.ok(!html.replace(/<a\b[^>]*data-language=[^>]*>/g, '').includes('href="/privacidad"'), `Localized privacy link: ${path}`);
    }
  }
}
const sitemap = readFileSync('dist/sitemap.xml', 'utf8');
for (const language of ['es', 'en', 'pt']) for (const page of pages) assert.ok(sitemap.includes(`<loc>${origin}${home(language)}${page}</loc>`));
console.log('Passed: 6 static pages, translation coverage, metadata, reciprocal hreflang, JSON-LD, prices, internal links and sitemap.');
