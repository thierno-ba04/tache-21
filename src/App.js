// src/App.js
import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Users from './Users';
import Statistique from './Statistique';



function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Routes>


          <Route path="/" element={<Dashboard/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/Statistique" element={<Statistique/>} />


        
      </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;