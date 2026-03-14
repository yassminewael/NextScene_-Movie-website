import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './pages/LogIn';
import SignUp from './pages/SignUp';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content" style={{ minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<div style={{ padding: '4rem', textAlign: 'center' }}><h2>Welcome to Movie Explorer</h2><p>The best place to discover amazing movies. Use the Navigation Bar to sign up or log in.</p></div>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;