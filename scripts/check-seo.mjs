import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const readText = (filePath) => readFileSync(new URL(`../${filePath}`, import.meta.url), 'utf8');

const sitemap = readText('public/sitemap.xml');
const sitemapUrls = Array.from(sitemap.matchAll(/<loc>([^<]+)<\/loc>/g), (match) => match[1]);

assert.deepEqual(sitemapUrls, [
    'https://ppbycw.com/',
    'https://ppbycw.com/events',
    'https://ppbycw.com/faq',
    'https://ppbycw.com/about'
]);
assert.ok(!sitemap.includes('<changefreq>'), 'Sitemap must not contain unsupported change estimates');
assert.ok(!sitemap.includes('<priority>'), 'Sitemap must not contain ignored priority hints');

const robots = readText('public/robots.txt');
assert.match(robots, /^User-agent: \*$/m);
assert.match(robots, /^Allow: \/$/m);
assert.match(robots, /^Sitemap: https:\/\/ppbycw\.com\/sitemap\.xml$/m);

const indexHtml = readText('public/index.html');
assert.match(indexHtml, /<meta\s+data-rh="true"\s+name="description"/);
assert.match(indexHtml, /<meta\s+data-rh="true"\s+name="robots"/);
assert.match(indexHtml, /<title data-rh="true">/);

const vercelConfig = JSON.parse(readText('vercel.json'));
assert.deepEqual(
    vercelConfig.rewrites.map(({ source }) => source),
    ['/events', '/faq', '/about']
);
assert.ok(
    vercelConfig.redirects.some(({ source, destination }) => (
        source === '/Events' && destination === '/events'
    )),
    'The previously indexed /Events URL must permanently redirect to /events'
);
assert.ok(
    vercelConfig.redirects.some(({ source, destination }) => (
        source === '/pricing' && destination === '/#pricing'
    )),
    'The stale pricing route must redirect to the real homepage section'
);
assert.ok(
    vercelConfig.redirects.some(({ source, destination }) => (
        source === '/community' && destination === '/#community'
    )),
    'The stale community route must redirect to the real homepage section'
);
assert.ok(
    vercelConfig.redirects.some(({ has, destination }) => (
        has?.some(({ type, value }) => type === 'host' && value === 'www.ppbycw.com')
        && destination.startsWith('https://ppbycw.com/')
    )),
    'The www hostname must redirect to the canonical apex hostname'
);

console.log('SEO configuration checks passed.');
