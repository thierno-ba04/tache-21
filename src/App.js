import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MyContextProvider } from './context/MyContext';

// Import student components
import LayoutEtudiant from './layout/LayoutEtudiant';
import DashboardEtudiant from './pagesEtudiant/dashboard/DashboardEtudiant';
import Tache from './pagesEtudiant/tache/Tache';
import Programme from './pagesEtudiant/progamme/Programme';
import Demande from './pagesEtudiant/demande/Demande';
import Bulletinelv from './pagesEtudiant/bulletin/Bulletinelv';
import Livraison from './pagesEtudiant/livraison/Livraison';
import UpdProfileEtudiant from './pagesEtudiant/updProfileEtudiant/UpdProfileEtudiant';
import FaireDemande from './pagesEtudiant/fairedemande/FaireDemande';
import VoirBulletin from './pagesEtudiant/voirbulletin/VoirBulletin';
import TacheValide from './pagesEtudiant/tache-valide/TacheValide';
import AgentList from './pagesEtudiant/AgentList/AgentList';
import ProgrammeQuizz from './pagesEtudiant/programmequizz/ProgrammeQuizz';
import QuizzHtmlcss from './pagesEtudiant/quizzhtmlcss/QuizzHtmlcss';
import QuizzBootstrap from './pagesEtudiant/quizzbootstrap/QuizzBootstrap';
import QuizzJavascript from './pagesEtudiant/quizzjavascript/QuizzJavascript';
import QuizzReact from './pagesEtudiant/quizzreact/QuizzReact';
import ProfilEtudiant from './ProfilEtudiant';
import AjouteruneTache from './AjouteruneTache';

// Import admin components
import LayoutAdmin from './layout/LayoutAdmin';
import DashboardAdmin from './pages/pageadmine/dashboardadmin/DashboardAdmin';
import UsersAdmin from "./pages/pageadmine/users/Users"; 
import Eleves from "./pages/pageadmine/users/eleves/Eleves";
import Personnels from "./pages/pageadmine/users/personnels/Personnels";
import Professeurs from "./pages/pageadmine/users/professeurs/Professeurs";
import Statistique from './pages/pageadmine/statistique/Statistique';
import Comptabliter from './pages/pageadmine/comptablité/Comptabliter';
import Calendrier from './pages/pageadmine/calendrier/Calendrier';
import Profile from './pages/pageadmine/profile/Profile';
import AjoutElv from "./pages/pageadmine/ajouteréléves/AjoutElv";
import Bulletin from './pages/pageadmine/users/bulletin/Bulletin';
import Cours from './pages/pageadmine/users/cours/Cours';
import MesCours from './pages/pageadmine/users/mescours/MesCours';
import Voix from './pages/pageadmine/dashboardadmin/voir/Voix';
import Classe from './pages/pageadmine/users/classe/Classe';
import CoursPrfs from './pages/pageadmine/users/coursprfs/CoursPrfs';
import AjoutCours from './pages/pageadmine/users/ajoutcours/AjoutCours';
import AjoutClasse from './pages/pageadmine/users/ajoutclasse/AjoutClasse';
import UpdateStudent from './pages/pageadmine/users/updateUsers/UpdateStudent';
import VoixClasse from './pages/pageadmine/users/vuclasse/VoixClasse';
import ArchivePrfs from './pages/pageadmine/users/archiver/ArchivePrfs';
import AjoutPrfs from './pages/pageadmine/users/ajoutprfs/AjoutPrfs';
import VoixPrs from './pages/pageadmine/users/voirperso/VoixPrs';
import UpdatePrsnl from './Updateperso/UpdatePrsnl';
import EditClasse from './pages/pageadmine/users/modifierclasse/EditClasse';
import Archived from './pages/pageadmine/dashboardadmin/arhiver/Archived';

// Import professor components
import DashboardProf from './DashboardCoach';
import Devoirs from './Devoirs';
import Relevedenote from './Relevedenote';
import NotificationAdmin from './NotificationAdmin';
import FormulaireAjoutEleves from './FormulaireAjoutEleves';

// Import authentication components
import Login from "./pages/auth/Login";
import ForgotPssWrd from "./pages/forgotpasseword/ForgotPssWrd";
import Registe from './pages/inscription/Registe';
import Page404 from './Page404';

function App() {
  return (
    <MyContextProvider>
      <Router>
        <Routes>

          {/* Authentication Routes */}
          <Route path="/" element={<Login />} />
          <Route path="/forgot" element={<ForgotPssWrd />} />
          <Route path="/inscrire" element={<Registe />} />

          {/* Student Routes */}
          <Route element={<LayoutEtudiant />}>
            <Route path="/dashboardetudiant" element={<DashboardEtudiant />} />
            <Route path="/tache" element={<Tache />} />
            <Route path="/programme" element={<Programme />} />
            <Route path="/demande" element={<Demande />} />
            <Route path="/livraison" element={<Livraison />} />
            <Route path="/bulletinelv" element={<Bulletinelv />} />
            <Route path="/voirbulletin" element={<VoirBulletin />} />
            <Route path="/updProfileEtudiant" element={<UpdProfileEtudiant />} />
            <Route path="/fairedemande" element={<FaireDemande />} />
            <Route path="/tachevalide" element={<TacheValide />} />
            <Route path="/agentlist" element={<AgentList />} />
            <Route path="/programmequizz" element={<ProgrammeQuizz />} />
            <Route path="/quizzhtmlcss" element={<QuizzHtmlcss />} />
            <Route path="/quizzbootstrap" element={<QuizzBootstrap />} />
            <Route path="/quizzjavascript" element={<QuizzJavascript />} />
            <Route path="/quizzreact" element={<QuizzReact />} />
            <Route path="/ProfilEtudiant/:id" element={<ProfilEtudiant />} />
            <Route path="/AjouteruneTache" element={<AjouteruneTache />} />
          </Route>

          {/* Admin Routes */}
          <Route element={<LayoutAdmin />}>
            <Route path="/dashboardadmin" element={<DashboardAdmin />} />
            <Route path="/users" element={<UsersAdmin />} />
            <Route path="/eleves" element={<Eleves />} />
            <Route path="/personnels" element={<Personnels />} />
            <Route path="/professeurs" element={<Professeurs />} />
            <Route path="/comptabliter" element={<Comptabliter />} />
            <Route path="/statistique" element={<Statistique />} />
            <Route path="/calendar" element={<Calendrier />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/ajoutelv" element={<AjoutElv />} />
            <Route path="/archived" element={<Archived />} />
            <Route path="/bulletin" element={<Bulletin />} />
            <Route path="/cours" element={<Cours />} />
            <Route path="/mescours" element={<MesCours />} />
            <Route path="/ajoutprfs" element={<AjoutPrfs />} />
            <Route path="/coursprfs" element={<CoursPrfs />} />
            <Route path="/ajoutcours" element={<AjoutCours />} />
            <Route path="/classe" element={<Classe />} />
            <Route path="/ajoutclasse" element={<AjoutClasse />} />
            <Route path="/classes/voix/:id" element={<VoixClasse />} />
            <Route path="/classes/editclasse/:id" element={<EditClasse />} />
            <Route path="/voix/:id" element={<Voix />} />
            <Route path="/updateStudent/:id" element={<UpdateStudent />} />
            <Route path="/archivePrfs" element={<ArchivePrfs />} />
            <Route path="/voixprs/:id" element={<VoixPrs />} />
            <Route path="/updateprsnl/:id" element={<UpdatePrsnl />} />
          </Route>

          {/* Professor Routes */}
          <Route path="/dashboardcoach" element={<DashboardProf />} />
          <Route path="/devoirs" element={<Devoirs />} />
          <Route path="/relevedenote" element={<Relevedenote />} />
          <Route path="/notificationAdmin" element={<NotificationAdmin />} />
          <Route path="/formulaireAjoutEleves" element={<FormulaireAjoutEleves />} />

          {/* Route 404 */}
          <Route path="*" element={<Page404 />} />
          
        </Routes>
      </Router>
    </MyContextProvider>
  );
}

export default App;
