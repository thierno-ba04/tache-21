// src/App.js
import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Users from './Users';
import Statistique from './Statistique';
import Devoirs from './Devoirs';



function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Routes>


          <Route path="/" element={<Dashboard/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/Statistique" element={<Statistique/>} />
          <Route path="/Devoirs" element={<Devoirs/>} />



        
      </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;