import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const location = useLocation();

  return (
    <div className="main-content notfound-content">
      <div className="notfound-card">
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">PAGE NOT FOUND</h2>
        <p className="notfound-path">
          <span>{location.pathname}</span> does not exist.
        </p>
        <p className="notfound-message">
          The page you're looking for may have been moved or never existed.
        </p>
        <Link to="/" className="notfound-button">GO HOME</Link>
      </div>
    </div>
  );
}

export default NotFound;
