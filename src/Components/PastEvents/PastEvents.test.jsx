import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { eventsData } from '../../Data/eventsData';
import PastEvents from './PastEvents';

const click = (element) => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => element.click());
};

const pressKey = (key) => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => window.dispatchEvent(new KeyboardEvent('keydown', { key })));
};

const dispatchTouch = (element, type, clientX) => {
    const event = new Event(type, { bubbles: true });
    const touchListName = type === 'touchstart' ? 'touches' : 'changedTouches';
    Object.defineProperty(event, touchListName, {
        value: [{ clientX }]
    });
    element.dispatchEvent(event);
};

const swipe = (element, startX, endX) => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
        dispatchTouch(element, 'touchstart', startX);
        dispatchTouch(element, 'touchend', endX);
    });
};

describe('PastEvents', () => {
    let container;
    let root;

    const renderPastEvents = () => {
        container = document.createElement('div');
        document.body.appendChild(container);
        root = createRoot(container);
        // React 18.3 exposes act directly; the installed Testing Library still uses the deprecated wrapper.
        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => root.render(<PastEvents />));
    };

    afterEach(() => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => root.unmount());
        container.remove();
    });

    it('renders the catalog in order without index-like event numbers', () => {
        renderPastEvents();

        expect(screen.getAllByRole('heading', { name: 'Past Events', level: 2 })).toHaveLength(1);
        expect(screen.getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent))
            .toEqual(eventsData.map((event) => event.title));

        eventsData.forEach((event) => {
            expect(screen.getAllByRole('img', { name: new RegExp(`^${event.title}`) }))
                .toHaveLength(event.images.length);
        });

        expect(container).not.toHaveTextContent(/\b0[1-9]\b/);
    });

    it('opens images and clamps button navigation at both boundaries', () => {
        renderPastEvents();

        click(screen.getByRole('img', { name: 'Monash Cup 2025, scene 1' }));

        const previousButton = screen.getByRole('button', { name: 'Previous image' });
        const nextButton = screen.getByRole('button', { name: 'Next image' });

        expect(screen.getByText('1 / 4')).toBeInTheDocument();
        expect(previousButton).toBeDisabled();

        for (let index = 0; index < 5; index += 1) click(nextButton);

        expect(screen.getByText('4 / 4')).toBeInTheDocument();
        expect(nextButton).toBeDisabled();

        for (let index = 0; index < 5; index += 1) click(previousButton);

        expect(screen.getByText('1 / 4')).toBeInTheDocument();
        expect(previousButton).toBeDisabled();
    });

    it('supports bounded keyboard navigation and Escape', () => {
        renderPastEvents();

        click(screen.getByRole('img', { name: 'Monash Cup 2025, scene 1' }));

        pressKey('ArrowLeft');
        expect(screen.getByText('1 / 4')).toBeInTheDocument();

        pressKey('ArrowRight');
        expect(screen.getByText('2 / 4')).toBeInTheDocument();

        pressKey('Escape');
        expect(screen.queryByRole('dialog', { name: 'Event image viewer' })).not.toBeInTheDocument();
    });

    it('closes when the overlay is clicked', () => {
        renderPastEvents();

        click(screen.getByRole('img', { name: 'Monash Cup 2025, scene 1' }));
        click(screen.getByRole('dialog', { name: 'Event image viewer' }));

        expect(screen.queryByRole('dialog', { name: 'Event image viewer' })).not.toBeInTheDocument();
    });

    it('uses a strict 50-pixel swipe threshold and clamps touch navigation', () => {
        renderPastEvents();

        click(screen.getByRole('img', { name: 'Monash Cup 2025, scene 1' }));
        const viewer = screen.getByRole('dialog', { name: 'Event image viewer' });

        swipe(viewer, 100, 50);
        expect(screen.getByText('1 / 4')).toBeInTheDocument();

        swipe(viewer, 100, 49);
        expect(screen.getByText('2 / 4')).toBeInTheDocument();

        swipe(viewer, 49, 100);
        expect(screen.getByText('1 / 4')).toBeInTheDocument();

        swipe(viewer, 49, 100);
        expect(screen.getByText('1 / 4')).toBeInTheDocument();
    });
});
