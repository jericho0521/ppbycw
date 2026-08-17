import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { normalizePathname } from '../config/routes';

function PathNormalizer() {
  const location = useLocation();
  const normalizedPathname = normalizePathname(location.pathname);

  if (normalizedPathname === location.pathname) return null;

  return (
    <Navigate
      replace
      to={{
        pathname: normalizedPathname,
        search: location.search,
        hash: location.hash
      }}
    />
  );
}

export default PathNormalizer;
