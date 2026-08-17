import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { faqs } from '../Data/faqData';
import pageSeo from '../config/seoData.json';
import { normalizePathname } from '../config/routes';

const SITE_URL = 'https://ppbycw.com';
const LOGO_URL = `${SITE_URL}/project-play-by-cw-logo.png`;
const SOCIAL_IMAGE_URL = `${SITE_URL}/project-play-by-cw-storefront.png`;
const SOCIAL_IMAGE_ALT = 'Project Play By CW gaming hub storefront in Bandar Sunway';

export const PAGE_SEO = pageSeo;

const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'Project Play By CW',
    alternateName: ['Project Play', 'PPBYCW', 'ppbycw.com'],
    url: `${SITE_URL}/`
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#business`,
    name: 'Project Play By CW',
    image: SOCIAL_IMAGE_URL,
    logo: LOGO_URL,
    description: 'A gaming hub in Bandar Sunway featuring racing simulators, high-performance gaming PCs, and PlayStation 5 consoles.',
    url: `${SITE_URL}/`,
    telephone: '+601116281524',
    email: 'ppbycw@gmail.com',
    priceRange: 'RM6-RM30',
    address: {
        '@type': 'PostalAddress',
        streetAddress: '70, Jalan PJS 11/7',
        addressLocality: 'Bandar Sunway',
        addressRegion: 'Selangor',
        postalCode: '47500',
        addressCountry: 'MY'
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 3.073554,
        longitude: 101.599647
    },
    openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ],
        opens: '12:00',
        closes: '02:00'
    }],
    sameAs: ['https://www.instagram.com/projectplaybycw/']
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: answer
        }
    }))
};

const getBreadcrumbSchema = (pathname, label) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${SITE_URL}/`
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: label,
            item: `${SITE_URL}${pathname}`
        }
    ]
});

function PageSeo() {
    const location = useLocation();
    const pathname = normalizePathname(location.pathname);
    const page = PAGE_SEO[pathname];
    const isIndexable = Boolean(page);
    const title = page?.title ?? 'Page Not Found | Project Play By CW';
    const description = page?.description ?? 'The requested page could not be found.';
    const canonicalUrl = isIndexable ? `${SITE_URL}${pathname}` : null;
    const schemas = [];

    if (pathname === '/') schemas.push(websiteSchema, localBusinessSchema);
    if (pathname === '/faq') schemas.push(faqSchema);
    if (page && pathname !== '/') schemas.push(getBreadcrumbSchema(pathname, page.label));

    return (
        <Helmet>
            <title>{title}</title>
            <meta content={description} name="description" />
            <meta
                content={isIndexable ? 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' : 'noindex, nofollow'}
                name="robots"
            />
            {canonicalUrl && <link href={canonicalUrl} rel="canonical" />}

            <meta content={title} property="og:title" />
            <meta content={description} property="og:description" />
            <meta content={SOCIAL_IMAGE_URL} property="og:image" />
            <meta content={SOCIAL_IMAGE_ALT} property="og:image:alt" />
            <meta content="1920" property="og:image:width" />
            <meta content="1080" property="og:image:height" />
            <meta content="Project Play By CW" property="og:site_name" />
            <meta content="en_MY" property="og:locale" />
            <meta content="website" property="og:type" />
            {canonicalUrl && <meta content={canonicalUrl} property="og:url" />}

            <meta content="summary_large_image" name="twitter:card" />
            <meta content={title} name="twitter:title" />
            <meta content={description} name="twitter:description" />
            <meta content={SOCIAL_IMAGE_URL} name="twitter:image" />
            <meta content={SOCIAL_IMAGE_ALT} name="twitter:image:alt" />

            {schemas.map((schema) => (
                <script key={schema['@type']} type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            ))}
        </Helmet>
    );
}

export default PageSeo;
