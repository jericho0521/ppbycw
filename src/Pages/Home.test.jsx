import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';
import { PS5_GAMES, WHATSAPP_URL } from '../config/constants';

describe('Home', () => {
  let container;
  let root;

  const renderHome = () => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    // React 18.3 exposes act directly; the installed Testing Library still uses the deprecated wrapper.
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => root.render(<Home />));
  };

  afterEach(() => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => root.unmount());
    container.remove();
  });

  it('composes the existing sections in their original order', () => {
    renderHome();

    // Sections intentionally retain their public IDs for navigation and external links.
    // eslint-disable-next-line testing-library/no-node-access
    const sectionIds = [...screen.getByRole('main').querySelectorAll(':scope > section')]
      .map((section) => section.id);

    expect(sectionIds).toEqual([
      'reservation',
      'stats',
      'services',
      'pricing',
      'promotion',
      'about',
      'community'
    ]);
  });

  it('preserves reservation, offering, and pricing content', () => {
    renderHome();

    expect(screen.getByRole('link', { name: 'Reserve Now' })).toHaveAttribute('href', WHATSAPP_URL);
    expect(screen.getByRole('img', { name: 'Project Play By CW' })).toHaveAttribute('fetchpriority', 'high');
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('heading', { name: 'Services & Rigs' })).toBeInTheDocument();
    expect(screen.getAllByText('RM6/hour')).toHaveLength(1);
    expect(screen.getByText('Free 3 hours')).toBeInTheDocument();

    PS5_GAMES.forEach((game) => {
      expect(screen.getByText(game)).toBeInTheDocument();
    });
  });

  it('preserves venue copy and community imagery', () => {
    renderHome();

    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument();
    expect(screen.getByText(/Founded in 2024, Project Play By CW/)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Our Community' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /storefront in Bandar Sunway/ })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /making peace signs/ })).toBeInTheDocument();
  });
});
