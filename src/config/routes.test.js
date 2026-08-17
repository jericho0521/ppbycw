import { INDEXABLE_PATHS, normalizePathname } from './routes';

describe('route conventions', () => {
  it('keeps every indexable route lowercase and without a trailing slash', () => {
    expect(INDEXABLE_PATHS).toEqual(['/', '/events', '/faq', '/about']);
    INDEXABLE_PATHS.forEach((pathname) => {
      expect(pathname).toBe(pathname.toLowerCase());
      expect(pathname === '/' || !pathname.endsWith('/')).toBe(true);
    });
  });

  it('normalizes route casing and trailing slashes', () => {
    expect(normalizePathname('/EvEnTs/')).toBe('/events');
    expect(normalizePathname('/')).toBe('/');
  });
});
