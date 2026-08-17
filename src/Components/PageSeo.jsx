import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { faqs } from '../Data/faqData';

const SITE_URL = 'https://ppbycw.com';
const SOCIAL_IMAGE_URL = `${SITE_URL}/ProjectPlay_Logo.png`;

export const PAGE_SEO = {
    '/': {
        title: 'Project Play By CW | Sim Racing & Gaming Hub in Sunway',
        description: 'Play on racing simulators, high-performance gaming PCs, and PS5 consoles at Project Play By CW in Bandar Sunway, Subang Jaya.',
        label: 'Home'
    },
    '/events': {
        title: 'Gaming Events & Venue Hire | Project Play By CW',
        description: 'Host gaming tournaments, corporate events, birthdays, and group sessions at Project Play By CW in Bandar Sunway. View past events and enquire today.',
        label: 'Events'
    },
    '/faq': {
        title: 'Gaming Hub FAQ | Project Play By CW',
        description: 'Find answers about Project Play By CW pricing, gaming equipment, opening hours, membership, reservations, and events in Bandar Sunway.',
        label: 'FAQ'
    },
    '/about': {
        title: 'About Project Play By CW | Bandar Sunway Gaming Hub',
        description: 'Learn about Project Play By CW, our gaming community, professional sim racing setup, gaming PCs, PS5 consoles, and venue in Bandar Sunway.',
        label: 'About'
    }
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#business`,
    name: 'Project Play By CW',
    image: SOCIAL_IMAGE_URL,
    description: 'A gaming hub in Bandar Sunway featuring racing simulators, high-performance gaming PCs, and PlayStation 5 consoles.',
    url: `${SITE_URL}/`,
    telephone: '+601116281524',
    email: 'ppbycw@gmail.com',
    priceRange: 'RM6-RM15',
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

const normalizePathname = (pathname) => {
    if (pathname === '/') return pathname;
    return pathname.replace(/\/+$/, '').toLowerCase();
};

function PageSeo() {
    const location = useLocation();
    const pathname = normalizePathname(location.pathname);
    const page = PAGE_SEO[pathname];
    const isIndexable = Boolean(page);
    const title = page?.title ?? 'Page Not Found | Project Play By CW';
    const description = page?.description ?? 'The requested page could not be found.';
    const canonicalUrl = isIndexable ? `${SITE_URL}${pathname}` : null;
    const schemas = [];

    if (pathname === '/') schemas.push(localBusinessSchema);
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
            <meta content="Project Play By CW" property="og:site_name" />
            <meta content="en_MY" property="og:locale" />
            <meta content="website" property="og:type" />
            {canonicalUrl && <meta content={canonicalUrl} property="og:url" />}

            <meta content="summary_large_image" name="twitter:card" />
            <meta content={title} name="twitter:title" />
            <meta content={description} name="twitter:description" />
            <meta content={SOCIAL_IMAGE_URL} name="twitter:image" />

            {schemas.map((schema) => (
                <script key={schema['@type']} type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            ))}
        </Helmet>
    );
}

export default PageSeo;
