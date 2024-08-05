import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardEtudiant from './pagesEtudiant/dashboard/DashboardEtudiant';
import LayoutEtudiant from './layout/LayoutEtudiant';
import Tache from './pagesEtudiant/tache/Tache';
import Programme from './pagesEtudiant/progamme/Programme';
import Demande from './pagesEtudiant/demande/Demande';
import BulletinEtudiant from './pagesEtudiant/bulletin/Bulletin';
import Livraison from './pagesEtudiant/livraison/Livraison';
import UpdProfileEtudiant from './pagesEtudiant/updProfileEtudiant/UpdProfileEtudiant';

import Login from "./pages/auth/Login";
import ForgotPssWrd from "./pages/forgotpasseword/ForgotPssWrd";
import Registe from './pages/inscription/Registe';
import LayoutAdmin from './layout/LayoutAdmin';
import DashboardAdmin from './pages/pageadmine/dashboardadmin/DashboardAdmin';
import Users from "./pages/pageadmine/users/Users";
import Eleves from "./pages/pageadmine/users/eleves/Eleves";
import Personnels from "./pages/pageadmine/users/personnels/Personnels";
import Professeurs from "./pages/pageadmine/users/professeurs/Professeurs";
import Statistique from './pages/pageadmine/statistique/Statistique';
import Pointage from './pages/pageadmine/pointage/Pointage';
import Comptabliter from './pages/pageadmine/comptablité/Comptabliter';
import Calendrier from './pages/pageadmine/calendrier/Calendrier';
import Profile from './pages/pageadmine/profile/Profile';
import AjoutElv from './pages/pageadmine/ajouteréléves/AjoutElv';
import BulletinAdmin from './pages/pageadmine/users/bulletin/Bulletin';
import Cours from './pages/pageadmine/users/cours/Cours';
import MesCours from './pages/pageadmine/users/mescours/MesCours';
import AjoutPrfs from './pages/pageadmine/users/ajoutprfs/AjoutPrfs';
import { MyContextProvider } from './context/MyContext';

function App() {
  return (
    <div className="App">
      <MyContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/forgot" element={<ForgotPssWrd />} />
            <Route path="/inscrire" element={<Registe />} />
            
            <Route element={<LayoutEtudiant />}>
              <Route path="/DashboardEtudiant" element={<DashboardEtudiant />} />
              <Route path="/tache" element={<Tache />} />
              <Route path="/programme" element={<Programme />} />
              <Route path="/demande" element={<Demande />} />
              <Route path="/livraison" element={<Livraison />} />
              <Route path="/bulletin" element={<BulletinEtudiant />} />
              <Route path="/updProfileEtudiant" element={<UpdProfileEtudiant />} />
            </Route>

            <Route element={<LayoutAdmin />}>
              <Route path="/dashboardadmin" element={<DashboardAdmin />} />
              <Route path="/users" element={<Users />} />
              <Route path="/eleves" element={<Eleves />} />
              <Route path="/personnels" element={<Personnels />} />
              <Route path="/professeurs" element={<Professeurs />} />
              <Route path="/comptabliter" element={<Comptabliter />} />
              <Route path="/statistique" element={<Statistique />} />
              <Route path="/pointage" element={<Pointage />} />
              <Route path="/calendar" element={<Calendrier />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/ajoutelv" element={<AjoutElv />} />
              <Route path="/bulletin" element={<BulletinAdmin />} />
              <Route path="/cours" element={<Cours />} />
              <Route path="/mescours" element={<MesCours />} />
              <Route path="/ajoutprfs" element={<AjoutPrfs />} />
            </Route>
          </Routes>
        </Router>
      </MyContextProvider>
    </div>
  );
}

export default App;
