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
import FaireDemande from './pagesEtudiant/fairedemande/FaireDemande';
import VoirBulletin from './pagesEtudiant/voirbulletin/VoirBulletin';
import TacheValide from './pagesEtudiant/tache-valide/TacheValide';
import AgentList from './pagesEtudiant/AgentList/AgentList';
import ProgrammeQuizz from './pagesEtudiant/programmequizz/ProgrammeQuizz';
import QuizzHtmlcss from './pagesEtudiant/quizzhtmlcss/QuizzHtmlcss';
import QuizzBootstrap from './pagesEtudiant/quizzbootstrap/QuizzBootstrap';
import QuizzJavascript from './pagesEtudiant/quizzjavascript/QuizzJavascript';

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
            <Route path="/voirbulletin" element={<VoirBulletin />} />
            <Route path="/updProfileEtudiant" element={<UpdProfileCoach />} />
            <Route path="/fairedemande" element={<FaireDemande />} />
            <Route path="/tachevalide" element={<TacheValide />} />
            <Route path="/agentlist" element={<AgentList />} />

            <Route path="/programmequizz" element={<ProgrammeQuizz />} />
            <Route path="/quizzhtmlcss" element={<QuizzHtmlcss />} />
            <Route path="/quizzbootstrap" element={<QuizzBootstrap />} />
            <Route path="/quizzjavascript" element={<QuizzJavascript />} />







          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
