// src/App.js
import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Login from "./pages/auth/Login";
import ForgotPssWrd from "./pages/forgotpasseword/ForgotPssWrd";
import Registe from './pages/inscription/Registe';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot" element={<ForgotPssWrd />} />
        <Route path="/inscrire" element={<Registe />} />
      </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
