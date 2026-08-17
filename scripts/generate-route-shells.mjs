import assert from 'node:assert/strict';
import { readFile, writeFile } from 'node:fs/promises';

const SITE_URL = 'https://ppbycw.com';
const SOCIAL_IMAGE_URL = `${SITE_URL}/project-play-by-cw-storefront.png`;
const projectFile = (filePath) => new URL(`../${filePath}`, import.meta.url);
const seoData = JSON.parse(await readFile(projectFile('src/config/seoData.json'), 'utf8'));
const homepageHtml = await readFile(projectFile('build/index.html'), 'utf8');

const escapeHtml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

const replaceRequired = (html, pattern, replacement, label) => {
  assert.match(html, pattern, `Missing ${label} in build/index.html`);
  return html.replace(pattern, replacement);
};

const createRouteShell = (pathname, page) => {
  const canonicalUrl = `${SITE_URL}${pathname === '/' ? '/' : pathname}`;
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);
  let html = homepageHtml;

  html = replaceRequired(html, /<title data-rh="true">[\s\S]*?<\/title>/, `<title data-rh="true">${title}</title>`, 'title');
  html = replaceRequired(html, /<meta data-rh="true" name="description" content="[^"]*"\s*\/>/, `<meta data-rh="true" name="description" content="${description}"/>`, 'description');
  html = replaceRequired(html, /<link data-rh="true" rel="canonical" href="[^"]*"\s*\/>/, `<link data-rh="true" rel="canonical" href="${canonicalUrl}"/>`, 'canonical URL');
  html = replaceRequired(html, /<meta data-rh="true" property="og:title" content="[^"]*"\s*\/>/, `<meta data-rh="true" property="og:title" content="${title}"/>`, 'Open Graph title');
  html = replaceRequired(html, /<meta data-rh="true" property="og:description" content="[^"]*"\s*\/>/, `<meta data-rh="true" property="og:description" content="${description}"/>`, 'Open Graph description');
  html = replaceRequired(html, /<meta data-rh="true" property="og:url" content="[^"]*"\s*\/>/, `<meta data-rh="true" property="og:url" content="${canonicalUrl}"/>`, 'Open Graph URL');
  html = replaceRequired(html, /<meta data-rh="true" name="twitter:title" content="[^"]*"\s*\/>/, `<meta data-rh="true" name="twitter:title" content="${title}"/>`, 'Twitter title');
  html = replaceRequired(html, /<meta data-rh="true" name="twitter:description" content="[^"]*"\s*\/>/, `<meta data-rh="true" name="twitter:description" content="${description}"/>`, 'Twitter description');

  assert.match(html, new RegExp(`property="og:image" content="${SOCIAL_IMAGE_URL}"`));
  return html;
};

const createNotFoundShell = () => {
  const title = 'Page Not Found | Project Play By CW';
  const description = 'The requested page could not be found.';
  let html = createRouteShell('/', { title, description });

  html = replaceRequired(
    html,
    /<meta data-rh="true" name="robots" content="[^"]*"\s*\/>/,
    '<meta data-rh="true" name="robots" content="noindex, nofollow"/>',
    'robots directive'
  );
  html = html.replace(/<link data-rh="true" rel="canonical" href="[^"]*"\s*\/>/, '');
  html = html.replace(/<meta data-rh="true" property="og:url" content="[^"]*"\s*\/>/, '');
  return html;
};

await Promise.all(Object.entries(seoData).map(async ([pathname, page]) => {
  if (pathname === '/') return;
  const outputName = `${pathname.slice(1)}.html`;
  await writeFile(projectFile(`build/${outputName}`), createRouteShell(pathname, page));
}));

await writeFile(projectFile('build/404.html'), createNotFoundShell());

console.log('Generated route-specific metadata shells and a noindex 404 page.');
