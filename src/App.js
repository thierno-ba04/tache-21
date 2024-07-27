
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import Users from './Users';
import Statistique from './Statistique';
import Pointage from './Pointage';
import Comptabilite from './Comptabilite';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
        <Route path='/Users'   element={<Users />} />
        <Route path="/Comptabilite" element={<Comptabilite />} />
        <Route path="/Statistique" element={<Statistique />} />
        <Route path="/Pointage" element={<Pointage />} />
      
    </Routes>
  </BrowserRouter>

  );
}

export default App;
