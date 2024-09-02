// src/App.js
import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import DashboardCoach from './DashboardCoach';
import Eleves from './Eleves';
import Devoirs from './Devoirs';
import Relevedenote from './Relevedenote';
import Notedeservice from './Notedeservice';
import Login from './Login ';
import Page404 from './Page404';
import NotificationAdmin from './NotificationAdmin';
import ForgotPssWrd from './ForgotPssWrd';
import FormulaireAjoutEleves from './FormulaireAjoutEleves';
import ProfilEtudiant from './ProfilEtudiant';
import AjouteruneTache from './AjouteruneTache';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Routes>
         <Route path="/Login" element={<Login/>} />
         <Route path="/" element={<DashboardCoach/>} />
          <Route path="/Eleves" element={<Eleves/>} />
          <Route path="/Devoirs" element={<Devoirs/>} />
          <Route path="/Relevedenote" element={<Relevedenote/>} />
          <Route path="/Forgot" element={<ForgotPssWrd/>} />
          <Route path="/*" element={<Page404/>} />
          <Route path="/NotificationAdmin" element={<NotificationAdmin/>} />
          <Route path="/ProfilEtudiant/:id" element={<ProfilEtudiant/>} />
          <Route path="/AjouteruneTache" element={<AjouteruneTache/>} />


          <Route path="/FormulaireAjoutEleves" element={<FormulaireAjoutEleves/>} />






        
      </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;