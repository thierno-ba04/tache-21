// src/App.js
import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import LayoutAdmin from './layout/LayoutAdmin';




function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Routes>

        <Route element={<LayoutAdmin />}>




            {/* <Route path="/tache" element={<Tache />} />
            <Route path="/programme" element={<Programme />} />
            <Route path="/tache" element={<Tache />} />
            <Route path="/demande" element={<Demande />} />
            <Route path="/livraison" element={<Livraison />} />
            <Route path="/bulletin" element={<Bulletin />} />
            <Route path="/updProfileEtudiant" element={<UpdProfileCoach />} /> */}

          </Route>
      </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;