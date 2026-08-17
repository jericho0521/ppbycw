import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const SITE_URL = 'https://ppbycw.com';
const readText = (filePath) => readFileSync(new URL(`../${filePath}`, import.meta.url), 'utf8');
const seoData = JSON.parse(readText('src/config/seoData.json'));
const routes = Object.keys(seoData);

assert.deepEqual(routes, ['/', '/events', '/faq', '/about']);
assert.equal(new Set(Object.values(seoData).map(({ title }) => title)).size, routes.length);
assert.equal(new Set(Object.values(seoData).map(({ description }) => description)).size, routes.length);

Object.entries(seoData).forEach(([pathname, page]) => {
    assert.equal(pathname, pathname.toLowerCase(), `${pathname} must be lowercase`);
    assert.ok(pathname === '/' || !pathname.endsWith('/'), `${pathname} must not end in a slash`);
    assert.ok(page.title.length >= 30 && page.title.length <= 65, `${pathname} needs a concise title`);
    assert.ok(page.description.length >= 100 && page.description.length <= 160, `${pathname} needs a useful description`);
    assert.match(page.title, /Project Play By CW/, `${pathname} must use the standard brand name`);
});

const sitemap = readText('public/sitemap.xml');
const sitemapUrls = Array.from(sitemap.matchAll(/<loc>([^<]+)<\/loc>/g), (match) => match[1]);
const canonicalUrls = routes.map((pathname) => `${SITE_URL}${pathname}`);

assert.deepEqual(sitemapUrls, canonicalUrls);
assert.ok(!sitemap.includes('<changefreq>'), 'Sitemap must not contain unsupported change estimates');
assert.ok(!sitemap.includes('<priority>'), 'Sitemap must not contain ignored priority hints');

const robots = readText('public/robots.txt');
assert.match(robots, /^User-agent: \*$/m);
assert.match(robots, /^Allow: \/$/m);
assert.match(robots, /^Sitemap: https:\/\/ppbycw\.com\/sitemap\.xml$/m);

const indexHtml = readText('public/index.html');
assert.match(indexHtml, /<html lang="en-MY">/);
assert.match(indexHtml, /<meta\s+data-rh="true"\s+name="description"/);
assert.match(indexHtml, /<meta\s+data-rh="true"\s+name="robots"/);
assert.match(indexHtml, /<link data-rh="true" rel="canonical" href="https:\/\/ppbycw\.com\/"/);
assert.match(indexHtml, /project-play-by-cw-storefront\.png/);
assert.match(indexHtml, /property="og:image:alt"/);
assert.match(indexHtml, /name="twitter:image:alt"/);
assert.match(indexHtml, /<title data-rh="true">/);
assert.ok(!indexHtml.includes('ProjectPlay_Logo.png'));

assert.ok(existsSync(new URL('../public/project-play-by-cw-logo.png', import.meta.url)));
assert.ok(existsSync(new URL('../public/project-play-by-cw-storefront.png', import.meta.url)));
assert.ok(!existsSync(new URL('../public/ProjectPlay_Logo.png', import.meta.url)));

['privacy', 'terms'].forEach((legalPage) => {
    const legalHtml = readText(`public/${legalPage}.html`);
    assert.match(legalHtml, /<html lang="en-MY">/);
    assert.match(legalHtml, /<meta name="robots" content="noindex, follow">/);
    assert.match(legalHtml, new RegExp(`<link rel="canonical" href="${SITE_URL}/${legalPage}">`));
});

const vercelConfig = JSON.parse(readText('vercel.json'));
assert.equal(vercelConfig.cleanUrls, true);
assert.equal(vercelConfig.trailingSlash, false);
assert.ok(!('rewrites' in vercelConfig), 'Static route shells must take precedence over a SPA rewrite');
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
        && destination.startsWith(`${SITE_URL}/`)
    )),
    'The www hostname must redirect to the canonical apex hostname'
);

const pageSources = {
    home: [
        readText('src/Features/Home/ReservationHero.jsx'),
        readText('src/Features/Home/GamingOfferings.jsx'),
        readText('src/Features/Home/PricingMembership.jsx'),
        readText('src/Features/Home/VenueOverview.jsx')
    ].join('\n'),
    events: readText('src/Pages/Events.jsx'),
    about: readText('src/Pages/About.jsx'),
    faq: readText('src/Pages/FAQ.jsx')
};

Object.entries(pageSources).forEach(([pageName, source]) => {
    assert.equal((source.match(/<h1(?:\s|>)/g) ?? []).length, 1, `${pageName} must have exactly one h1`);
});

const publicCopy = [
    ...Object.values(pageSources),
    readText('src/Data/faqData.js'),
    readText('src/Components/NavBar.jsx')
].join('\n');

assert.doesNotMatch(publicCopy, /Playstation/);
assert.doesNotMatch(publicCopy, /\bRM\s?\d+\/(?:HR|\d+HR)\b/);
assert.doesNotMatch(publicCopy, /Project Play Logo|Promo 1|Community Member \d/);
assert.doesNotMatch(readText('src/Components/PastEvents/PastEvents.jsx'), /data-event-number/);

console.log('SEO configuration and content convention checks passed.');
