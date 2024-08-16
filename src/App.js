import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import AgentList from './pagesEtudiant/AgentList/AgentList';
import ProgrammeQuizz from './pagesEtudiant/programmequizz/ProgrammeQuizz';
import QuizzHtmlcss from './pagesEtudiant/quizzhtmlcss/QuizzHtmlcss';
import QuizzBootstrap from './pagesEtudiant/quizzbootstrap/QuizzBootstrap';

import Dashboard from './Dashboard';
import Users from './Users';
import Devoirs from './Devoirs';
import Relevedenote from './Relevedenote';
import Notedeservice from './Notedeservice';

import Login from "./pages/auth/Login"; // Conservé cet import
import ForgotPssWrd from "./pages/forgotpasseword/ForgotPssWrd";
import Registe from './pages/inscription/Registe';
import LayoutAdmin from './layout/LayoutAdmin';
import DashboardAdmin from './pages/pageadmine/dashboardadmin/DashboardAdmin';
import UsersAdmin from "./pages/pageadmine/users/Users"; 
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

function App() {
  return (
    <MyContextProvider>
      <Router>
        <Routes>
          {/* Routes pour les étudiants */}
          <Route element={<LayoutEtudiant />}>
            <Route path="/" element={<DashboardEtudiant />} />
            <Route path="/tache" element={<Tache />} />
            <Route path="/programme" element={<Programme />} />
            <Route path="/demande" element={<Demande />} />
            <Route path="/livraison" element={<Livraison />} />
            <Route path="/bulletinelv" element={<Bulletinelv />} />
            <Route path="/voirbulletin" element={<VoirBulletin />} />
            <Route path="/updProfileEtudiant" element={<UpdProfileCoach />} />
            <Route path="/fairedemande" element={<FaireDemande />} />
            <Route path="/tachevalide" element={<TacheValide />} />
            <Route path="/agentlist" element={<AgentList />} />
            <Route path="/programmequizz" element={<ProgrammeQuizz />} />
            <Route path="/quizzhtmlcss" element={<QuizzHtmlcss />} />
            <Route path="/quizzbootstrap" element={<QuizzBootstrap />} />







          </Route>

          {/* Routes pour les admins */}
          <Route path="/" element={<Login />} />
          <Route path="/forgot" element={<ForgotPssWrd />} />
          <Route path="/inscrire" element={<Registe />} />
          <Route element={<LayoutAdmin />}>
            <Route path="/dashboardadmin" element={<DashboardAdmin />} />
            <Route path="/users" element={<UsersAdmin />} /> {/* Utilisation du composant renommé */}
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
            <Route path="/voix/:id" element={<Voix />} />
            <Route path="/updateStudent/:id" element={<UpdateStudent />} />
            <Route path="/archiveUsers" element={<ArchiveUsers />} />
          </Route>

          {/* Autres routes */}
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Devoirs" element={<Devoirs />} />
          <Route path="/Relevedenote" element={<Relevedenote />} />
          <Route path="/Notedeservice" element={<Notedeservice />} />
        </Routes>
      </Router>
    </MyContextProvider>
  );
}

export default App;
