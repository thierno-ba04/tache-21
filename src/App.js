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
import Pointage from './pages/pageadmine/pointage/Pointage';
import Comptabliter from './pages/pageadmine/comptablité/Comptabliter';
import Calendrier from './pages/pageadmine/calendrier/Calendrier';
import Profile from './pages/pageadmine/profile/Profile';
import { Message } from '@mui/icons-material';
import AjoutElv from './pages/pageadmine/ajouteréléves/AjoutElv';
import { MyContextProvider } from './context/MyContext';
import Bulletin from './pages/pageadmine/users/bulletin/Bulletin';
// import UpdateUser from './pages/pageadmine/dashboardadmin/updateusers/UpdateUser';
// import Voix from './pages/pageadmine/dashboardadmin/voir/Voix';
// import Archived from './pages/pageadmine/dashboardadmin/arhiver/Archived';

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
            <Route path="/pointage" element={<Pointage />} />
            <Route path="/calendar" element={<Calendrier />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/message" element={<Message />} />
            <Route path="/ajoutelv" element={<AjoutElv />} />
            <Route path="/bulletin" element={<Bulletin />} />

            {/* <Route path="/updateUser" element={<UpdateUser />} />
            <Route path="/voir" element={<Voix />} />
            <Route path="/archiveUser" element={<Archived />} /> */}
          </Route>
        </Routes>
      </Router>
    </MyContextProvider>
  );
}

export default App;
