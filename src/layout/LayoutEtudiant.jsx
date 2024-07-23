import React from 'react';
import SidebarEtudiant from '../components/SidebarEtudiant';
import { Outlet } from 'react-router-dom';
import './layout.css';

function LayoutEtudiant() {
  return (
    <div>
      <SidebarEtudiant />
      <div className='outlet'>
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutEtudiant;
