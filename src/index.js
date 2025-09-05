// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Your custom CSS (if any)
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS

// Register service worker for caching and offline functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
