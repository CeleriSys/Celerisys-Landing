# Idiomas, navegación y buscadores

## Implementación

- Español en `/`, inglés en `/en/` y portugués en `/pt/`. Inicio y política de privacidad tienen HTML traducido desde la compilación; no dependen de traducción del navegador ni de servicios externos.
- Selector con enlaces reales y elección guardada localmente. Se sugiere el idioma preferido guardado o el primer idioma compatible de `navigator.languages`. No se redirige automáticamente ni se intenta adivinar el idioma de la consulta de Google.
- Los enlaces a secciones conservan sus anclas como alternativa sin JavaScript. Con JavaScript desplazan el contenido, transfieren el foco y dejan la URL sin fragmento. No crean páginas distintas ni rutas ficticias para cada sección. Los enlaces compartidos con fragmento siguen funcionando.
- Canonical por página, hreflang recíproco `es/en/pt/x-default`, lang, títulos y descripciones traducidos, Open Graph localizado, sitemap generado a partir del dominio configurado en Astro.
- Organization, WebPage y Service/OfferCatalog describen los servicios y precios visibles. No se añadieron reseñas, valoraciones, sedes o resultados inventados. Las preguntas indican precios, alcance y soporte con texto legible por buscadores.
- Mensajes de validación y enlaces de WhatsApp localizados. No se enviaron formularios reales durante la comprobación.

## Verificación

`npm run build`, `npx astro check`, `node scripts/check-seo.mjs` y revisión en navegador de traducciones, navegación sin fragmentos, ausencia de desbordamiento en portugués y errores de formulario localizados. La prueba del formulario se hizo vacío para no transmitir datos.

Para añadir textos, incorporar las tres versiones a `src/i18n/translations.ts`; la traducción exacta se aplica en middleware durante el prerenderizado y en desarrollo. Las etiquetas script/style se excluyen. No se traducen valores internos de formularios, nombres, precios ni identidades de clientes.

## Publicación y límites

El dominio existente del proyecto es `https://info.celerisys.com`; confirmar que sea el dominio final al publicar. El sitemap utiliza `Astro.site`. Los cambios siguen en el proyecto local, sin despliegue. Después de publicar, enviar `/sitemap.xml` a Search Console y comprobar URLs e indexación. No se configuró una cuenta externa ni se puede garantizar posición, indexación o menciones en respuestas de IA.

La detección del idioma del navegador no equivale al idioma de una búsqueda. Las versiones de blog/about existentes no se tradujeron: no están en la navegación principal ni en el sitemap de la landing. Se mantuvo el diseño de portada aprobado.

## Referencias oficiales consultadas

- [Google: sitios multilingües](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites): URLs por idioma y evitar redirecciones automáticas basadas en suposiciones.
- [Google: versiones localizadas](https://developers.google.com/search/docs/specialty/international/localized-versions): hreflang recíproco y URLs absolutas.
- [Google: estructura de URLs](https://developers.google.com/search/docs/crawling-indexing/url-structure): los fragmentos no representan contenidos indexables independientes; las anclas de navegación dentro de una página siguen siendo útiles.
- [Google: funciones de IA](https://developers.google.com/search/docs/appearance/ai-features): aplican los fundamentos de SEO; no se requieren archivos o etiquetas especiales para IA.
- [Astro: middleware](https://docs.astro.build/en/guides/middleware/): transformación de respuestas durante renderizado estático y desarrollo.
