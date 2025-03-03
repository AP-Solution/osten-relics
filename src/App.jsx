import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Catalog from './components/Catalog/Catalog';
import './App.scss';

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav className="app__nav">
          <Link to="/" className="app__nav-link">Home</Link>
          <Link to="/catalog" className="app__nav-link">Catalog</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
