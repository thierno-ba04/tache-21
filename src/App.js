import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardEtudiant from './pagesEtudiant/dashboard/DashboardEtudiant';
import LayoutEtudiant from './layout/LayoutEtudiant';
import Tache from './pagesEtudiant/tache/Tache';
import Programme from './pagesEtudiant/progamme/Programme';
import Demande from './pagesEtudiant/demande/Demande';
import Bulletin from './pagesEtudiant/bulletin/Bulletin';
import Livraison from './pagesEtudiant/livraison/Livraison';
import UpdProfileCoach from './pagesEtudiant/updProfileEtudiant/UpdProfileEtudiant';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutEtudiant />}>
            <Route path="/" element={<DashboardEtudiant />} />
            <Route path="/tache" element={<Tache />} />
            <Route path="/programme" element={<Programme />} />
            <Route path="/tache" element={<Tache />} />
            <Route path="/demande" element={<Demande />} />
            <Route path="/livraison" element={<Livraison />} />
            <Route path="/bulletin" element={<Bulletin />} />
            <Route path="/updProfileEtudiant" element={<UpdProfileCoach />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
