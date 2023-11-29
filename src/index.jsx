import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Project from './pages/Project.jsx';
import './css/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);