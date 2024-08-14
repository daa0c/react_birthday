import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Photo from './Components/Photo.jsx';
import Letter from './Components/Letter.jsx';

import './styles.css';

function App() {
  return (
    <Router>
     <div className="App">
        <header className="header">
          <nav className="navbar">
            <Link to="./" className="nav-link">Home</Link>
            <Link to="./photo" className="nav-link">Photo</Link>
            <Link to="./letter" className="nav-link">Letter</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photo" element={<Photo />} />
            <Route path="/letter" element={<Letter />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
