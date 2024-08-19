// src/App.js
import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import DashboardProf from './DashboardProf';
import Eleves from './Eleves';
import Devoirs from './Devoirs';
import Relevedenote from './Relevedenote';
import Notedeservice from './Notedeservice';
import LoginProf from './LoginProf ';
import Page404 from './Page404';


function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Routes>
         <Route path="/LoginProf" element={<LoginProf/>} />
         <Route path="/" element={<DashboardProf/>} />
          <Route path="/Eleves" element={<Eleves/>} />
          <Route path="/Devoirs" element={<Devoirs/>} />
          <Route path="/Relevedenote" element={<Relevedenote/>} />
          <Route path="/*" element={<Page404/>} />




        
      </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;