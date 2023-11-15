import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js'
import Dashboard from './pages/Dashboard.js'

export const API_KEY = "a9118a3a";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  );

}

export default App;
