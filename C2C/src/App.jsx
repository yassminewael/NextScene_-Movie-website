import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './index.css'; 

function App() {
  return (
    <Router>        
      <div className="App">
        <Navbar />
        <Footer />
      </div>
    </Router>
  );
}

export default App;