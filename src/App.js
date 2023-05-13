import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Component/LogIn-Out/Login.jsx";
import Header from './Component/Layout/Header.jsx';
import Home from './Component/Home.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/home' element={<>
          <Header />
          <Home />
        </>} />
      </Routes>
    </Router>
  );
}
