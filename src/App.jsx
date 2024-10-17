import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './Components/NavBar.jsx'; 
import Footer from './Components/Footer.jsx'; 
import Home from './Pages/Home.jsx';
import Events from './Pages/Events.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; 

function App() {
  return (
    <Router>
      <div className="App">

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page route */}
          <Route path="/Events" element={<Events />} /> {/* Events page route */}
        </Routes>
        
        <Routes>

        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
