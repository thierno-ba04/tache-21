// src/App.js
import React from 'react';
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
import Comptabliter from './pages/pageadmine/comptablité/Comptabliter';
import Calendrier from './pages/pageadmine/calendrier/Calendrier';
import Profile from './pages/pageadmine/profile/Profile';
import AjoutElv from './pages/pageadmine/ajouteréléves/AjoutElv';
import { MyContextProvider } from './context/MyContext';
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
import Archived from './pages/pageadmine/dashboardadmin/arhiver/Archived';
import ArchivePrfs from './pages/pageadmine/users/archiver/ArchivePrfs';
import AjoutPrfs from './pages/pageadmine/users/ajoutprfs/AjoutPrfs';
import VoixPrs from './pages/pageadmine/users/voirperso/VoixPrs';
import UpdatePrsnl from './Updateperso/UpdatePrsnl';
import EditClasse from './pages/pageadmine/users/modifierclasse/EditClasse';

function App() {
  return (
    <MyContextProvider>
      <Router>
        <Routes>
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
            <Route path="/calendar" element={<Calendrier />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/ajoutelv" element={<AjoutElv />} />
            <Route path="/archived" element={<Archived />}/>
            <Route path="/bulletin" element={<Bulletin />} />
            <Route path="/cours" element={<Cours />} />
            <Route path="/mescours" element={<MesCours />} />
            <Route path="/ajoutprfs" element={<AjoutPrfs />} />
            <Route path="/coursprfs" element={<CoursPrfs />} />
            <Route path="/ajoutcours" element={<AjoutCours />} />
            <Route path="/classe" element={<Classe />} />
            <Route path="/ajoutclasse" element={<AjoutClasse />} />
            <Route path="classes/voixclasse/:id" element={<VoixClasse />} />
            <Route path="classes/editclasse/:id" element={<EditClasse />} />
            <Route path="classes/ajoutclss" element={<AjoutClasse />} />
            <Route path="/voix/:id" element={<Voix />} />
            <Route path="/updateStudent/:id" element={<UpdateStudent />} />
            <Route path="/archivePrfs" element={<ArchivePrfs />} />
            <Route path="/voixprs/:id" element={<VoixPrs />} />
            <Route path="/updateprsnl/:id" element={<UpdatePrsnl />} />
          </Route>
        </Routes>
      </Router>
    </MyContextProvider>
    
  );
  
}

export default App;
