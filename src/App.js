import React from 'react';
import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardEtudiant from './pagesEtudiant/dashboard/DashboardEtudiant';
import LayoutEtudiant from './layout/LayoutEtudiant';
import Tache from './pagesEtudiant/tache/Tache';
import Programme from './pagesEtudiant/progamme/Programme';
import Demande from './pagesEtudiant/demande/Demande';
import Bulletinelv from './pagesEtudiant/bulletin/Bulletinelv';
import Livraison from './pagesEtudiant/livraison/Livraison';
import UpdProfileCoach from './pagesEtudiant/updProfileEtudiant/UpdProfileEtudiant';
import FaireDemande from './pagesEtudiant/fairedemande/FaireDemande';
import VoirBulletin from './pagesEtudiant/voirbulletin/VoirBulletin';
import TacheValide from './pagesEtudiant/tache-valide/TacheValide';


// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import AjoutElv from "./pages/pageadmine/ajouteréléves/AjoutElv";
import { MyContextProvider } from './context/MyContext';
import Bulletin from './pages/pageadmine/users/bulletin/Bulletin';
import Cours from './pages/pageadmine/users/cours/Cours';
import MesCours from './pages/pageadmine/users/mescours/MesCours';
import AjoutPrfs from './pages/pageadmine/users/ajoutprfs/AjoutPrfs';
import Voix from './pages/pageadmine/dashboardadmin/voir/Voix';
import Classe from './pages/pageadmine/users/classe/Classe';
import CoursPrfs from './pages/pageadmine/users/coursprfs/CoursPrfs';
import AjoutCours from './pages/pageadmine/users/ajoutcours/AjoutCours';
import ArchiveUsers from './pages/pageadmine/users/archiver/ArchiveUsers';
import AjoutClasse from './pages/pageadmine/users/ajoutclasse/AjoutClasse';
import UpdateStudent from './pages/pageadmine/users/updateUsers/UpdateStudent';
import VoixClasse from './pages/pageadmine/users/vuclasse/VoixClasse';
import UpdateClasse from './pages/pageadmine/users/modifierclasse/UpdateClasse';

// import UpdateUser from './pages/pageadmine/dashboardadmin/updateusers/UpdateUser';
// import Voix from './pages/pageadmine/dashboardadmin/voir/Voix';
// import Archived from './pages/pageadmine/dashboardadmin/arhiver/Archived';

function App() {
  return (
    <MyContextProvider>
      <Router>
        <Routes>
        <Route element={<LayoutEtudiant />}>
            <Route path="/" element={<DashboardEtudiant />} />
            <Route path="/tache" element={<Tache />} />
            <Route path="/programme" element={<Programme />} />
            <Route path="/tache" element={<Tache />} />
            <Route path="/demande" element={<Demande />} />
            <Route path="/livraison" element={<Livraison />} />
            <Route path="/bulletinelv" element={<Bulletinelv />} />
            <Route path="/voirbulletin" element={<VoirBulletin />} />
            <Route path="/updProfileEtudiant" element={<UpdProfileCoach />} />
            <Route path="/fairedemande" element={<FaireDemande />} />
            <Route path="/tachevalide" element={<TacheValide />} />
          </Route>



          {/* partie admin */}
          <Route path="/" element={<Login />} />
          <Route path="/forgot" element={<ForgotPssWrd />} />
          <Route path="/inscrire" element={<Registe />} />
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
            <Route path="/bulletin" element={<Bulletin />} />
            <Route path="/cours" element={<Cours />} />
            <Route path="/mescours" element={<MesCours />} />
            <Route path="/ajoutprfs" element={<AjoutPrfs />} />
            <Route path="/coursprfs" element={<CoursPrfs />} />
            <Route path="/ajoutcours" element={<AjoutCours />} />
            <Route path="/classe" element={<Classe />} />
            <Route path="/ajoutclasse" element={<AjoutClasse />} />
            <Route path="classes/voix/:id" element={<VoixClasse />} />
            <Route path="classes/update/:id" element={<UpdateClasse />} />
            <Route path="classes/ajout" element={<AjoutClasse />} />
            <Route path="/voix/:id" element={<Voix />} />
            <Route path="/updateStudent/:id" element={<UpdateStudent />} />
            <Route path="/archiveUsers" element={<ArchiveUsers />} />
          </Route>
        </Routes>
      </Router>
    </MyContextProvider>
  );
}

export default App;
