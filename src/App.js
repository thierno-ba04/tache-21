import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import DashboardEtudiant from './pagesEtudiant/DashboardEtudiant';
import SidebarEtudiant from './components/SidebarEtudiant';
// import LayoutEtudiant from "./layout/LayoutEtudiant";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route>
      <Route path="/" element={<SidebarEtudiant />} />

      </Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
