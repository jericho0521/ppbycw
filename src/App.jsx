import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import PageSeo from './Components/PageSeo';
import Home from './Pages/Home';
import Events from './Pages/Events';
import FAQ from './Pages/FAQ';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Assets/Font.css';
import './App.css';

function App() {
  return (
    <HelmetProvider>
    <Router>
      <div className="App">
          <PageSeo />
        <NavBar />
        <Routes>
          <Route caseSensitive path="/" element={<Home />} />
          <Route caseSensitive path="/events" element={<Events />} />
          <Route caseSensitive path="/faq" element={<FAQ />} />
          <Route caseSensitive path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </HelmetProvider>
  );
}

export default App;
