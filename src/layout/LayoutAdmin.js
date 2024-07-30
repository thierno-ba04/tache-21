import React from 'react';
import { Outlet } from 'react-router-dom';
import './layout.css';
import SidebarAdmin from '../components/SidebarAdminr';
function LayoutAdmin() {
  return (
    <div>
      <SidebarAdmin />
      <div className='outlet'>
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutAdmin;