import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Popular from "./pages/Popular";
import Related from "./pages/Related";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Movies from './pages/Movies'
import Series from './pages/Series'



function App() {
  return (
    <Router>

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/related' element={<Related />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/popular' element={<Popular />} />
        <Route path='/related' element={<Related />} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/series' element={<Series/>} />
      </Routes>
    </Router>
  );

}

export default App;
