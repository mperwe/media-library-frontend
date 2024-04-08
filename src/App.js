import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import View from "./pages/View";



function App() {
  return (
    <Router>

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/view' element={<View />} />
      </Routes>
    </Router>
  );

}

export default App;
