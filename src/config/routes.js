import pageSeo from './seoData.json';

export const INDEXABLE_PATHS = Object.keys(pageSeo);

export const normalizePathname = (pathname) => {
  const normalizedPathname = pathname.replace(/\/+$/, '').toLowerCase();
  return normalizedPathname || '/';
};
