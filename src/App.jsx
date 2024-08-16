import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './NavBar.jsx'; 
import Footer from './Footer.jsx'; 
import Home from './Home.jsx'; 
import BackToTopButton from './BackToTopButton.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; 

function App() {
  return (
    <Router>
      <div className="App">

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page route */}
        </Routes>
        <BackToTopButton />
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
