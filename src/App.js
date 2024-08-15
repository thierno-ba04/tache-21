// src/App.js
import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Users from './Users';
import Devoirs from './Devoirs';
import Relevedenote from './Relevedenote';
import Notedeservice from './Notedeservice';
import Login from './Login ';


function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Routes>

         <Route path="/Login" element={<Login/>} />
          <Route path="/" element={<Dashboard/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/Devoirs" element={<Devoirs/>} />
          <Route path="/Relevedenote" element={<Relevedenote/>} />
          <Route path="/Notedeservice" element={<Notedeservice/>} />




        
      </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;