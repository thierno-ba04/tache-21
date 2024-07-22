import { Archive, BarChartFill, BoxArrowLeft, Collection, Diagram3Fill, Envelope, JournalCode, ListNested, PeopleFill } from "react-bootstrap-icons";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { useEffect, useState } from "react";


const SidebarEtudiant = () => {
    const [isSidebarActive, setSidebarActive] = useState(false);

   
    const toggleSidebar = () => {
        setSidebarActive(!isSidebarActive);
      };
    return (
        <div className='mysiderbar' style={{color:"white"}}>
      <header className='fixed-top'>
        <div className="toggle ms-md-3 d-flex gap-3  "onClick={toggleSidebar}>
          <span><ListNested size={20} /></span>          
        </div>

        <div className='fw-bold me-md-4 d-flex align-items-center gap-4'>
          <span>
            <Link to="/updProfileCoach">
                  <div >
                    <div className="userIcon me-3 d-flex align-items-center">
                    <div className='me-md-4 me-3 nomUser'>
                       
                      </div>
                      {/* <div className="user-profile">
                        <img src={photoURL} alt="user" height='40px' width='40px' className='rounded'/>
                      </div> */}
                    </div>
                  </div>
            </Link>
          </span>
        </div>
      </header>

      <nav className={`sidebar ${isSidebarActive ? "active" : ""}`} >
        <ul>
          <li>
            <Link className="toggle" onClick={toggleSidebar}>
              <span className='icon'><ListNested size={20} /></span>
              <span className='title'>Menu</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboardCoach">
              <span className='icon'><MdDashboard size={20} /></span>
              <span className='title'>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/programsCoachs">
            <span className='icon'><PeopleFill size={20} /></span>
              <span className='title'>Tache</span>
            </Link>
          </li>
          <li>
            <Link to='/allEtudiant'>
            <span className='icon'><JournalCode size={20} /></span>
              <span className='title'>Programme</span>
            </Link>
          </li>
          <li>
            <Link to="/boiteCoach">
              <span className='icon'><Envelope size={20} /></span>
              <span className='title'>Demande</span>
            </Link>
          </li>
          <li>
            <Link to="/archiveCour">
              <span className='icon'><Archive size={20} /></span>
              <span className='title'>Livraison</span>
            </Link>
          </li>
          <li>
            <Link to="/archiveCour">
              <span className='icon'><Archive size={20} /></span>
              <span className='title'>bulletin</span>
            </Link>
          </li>
          {/* <li>
            <span className='a'>
              <span className='icon'><Diagram3Fill size={20}/></span>
              <span className='title'>
            </span>
            </span>
          </li> */}
          <li>
            <Link to="statistiques">
              <span className='icon'><BarChartFill size={20}/></span>
              <span className='title'>Statistiques</span>
            </Link>
          </li>
          <li>
            <Link className='out' 
           >
              <span className='icon'
              ><BoxArrowLeft size={30} /></span>
              <span className='title' >Deconnecter</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
      );
}
 
export default SidebarEtudiant;