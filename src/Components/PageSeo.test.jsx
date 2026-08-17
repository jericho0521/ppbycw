/** @jest-environment node */

import React from 'react';
import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { StaticRouter } from 'react-router-dom/server';
import PageSeo from './PageSeo';

const renderPageSeo = (pathname) => {
    const helmetContext = {};

    renderToString(
        <HelmetProvider context={helmetContext}>
            <StaticRouter location={pathname}>
                <PageSeo />
            </StaticRouter>
        </HelmetProvider>
    );

    return helmetContext.helmet;
};

const getStructuredData = (helmet) => helmet.script
    .toComponent()
    .map((script) => JSON.parse(
        script.props.children ?? script.props.dangerouslySetInnerHTML?.__html
    ));

describe('PageSeo', () => {
    it('sets unique event metadata and a valid two-level breadcrumb', () => {
        const helmet = renderPageSeo('/events');
        const canonical = helmet.link
            .toComponent()
            .find((link) => link.props.rel === 'canonical');

        expect(helmet.title.toString()).toContain(
            'Gaming Events &amp; Venue Hire | Project Play By CW'
        );
        expect(canonical.props.href).toBe('https://ppbycw.com/events');
        expect(getStructuredData(helmet)).toEqual([
            expect.objectContaining({
                '@type': 'BreadcrumbList',
                itemListElement: [
                    expect.objectContaining({ name: 'Home', position: 1 }),
                    expect.objectContaining({ name: 'Events', position: 2 })
                ]
            })
        ]);
    });

    it('publishes FAQ schema only on the FAQ route', () => {
        const helmet = renderPageSeo('/faq');

        expect(helmet.title.toString()).toContain('Gaming Hub FAQ | Project Play By CW');
        expect(getStructuredData(helmet).map((schema) => schema['@type'])).toEqual([
            'FAQPage',
            'BreadcrumbList'
        ]);
    });

    it('publishes corrected local business data only on the homepage', () => {
        const helmet = renderPageSeo('/');

        expect(helmet.title.toString()).toContain(
            'Project Play By CW | Sim Racing &amp; Gaming in Bandar Sunway'
        );
        expect(getStructuredData(helmet)).toEqual([
            expect.objectContaining({
                '@type': 'WebSite',
                name: 'Project Play By CW',
                alternateName: expect.arrayContaining(['Project Play', 'PPBYCW'])
            }),
            expect.objectContaining({
                '@type': 'LocalBusiness',
                priceRange: 'RM6-RM30',
                geo: expect.objectContaining({
                    latitude: 3.073554,
                    longitude: 101.599647
                })
            })
        ]);
    });

    it('marks unknown client-side routes as noindex', () => {
        const helmet = renderPageSeo('/missing-page');
        const robots = helmet.meta
            .toComponent()
            .find((meta) => meta.props.name === 'robots');
        const canonical = helmet.link
            .toComponent()
            .find((link) => link.props.rel === 'canonical');

        expect(helmet.title.toString()).toContain('Page Not Found | Project Play By CW');
        expect(robots.props.content).toBe('noindex, nofollow');
        expect(canonical).toBeUndefined();
    });
});
