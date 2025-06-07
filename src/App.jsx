import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Events from './Pages/Events';
import FAQ from './Pages/FAQ';
import About from './Pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

// Component to handle canonical URLs
const CanonicalURL = () => {
  const location = useLocation();
  const baseUrl = 'https://ppbycw.com'; // Your actual domain
  const canonicalUrl = `${baseUrl}${location.pathname}`;
  
  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

function App() {
  return (
    <HelmetProvider>
    <Router>
      <div className="App">
          <CanonicalURL />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </HelmetProvider>
  );
}

export default App;
