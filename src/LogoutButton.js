import React from "react";
import './LogoutButton.css'
import LogoutIcon from '@mui/icons-material/Logout';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from "react-router-dom";



const LogoutButton = ({ onLogout }) => {
    const navigate=useNavigate();
    const [isLoggingOut, setIsLoggingOut] = React.useState(false);

    const handleLogout = () => {
      setIsLoggingOut(true);
      setTimeout(() => {
        setIsLoggingOut(false);
        if (onLogout) {
          navigate('/LoginProf');
        }
      }, 2000); // Simule une déconnexion qui prend 2 secondes
    };

    return (
      <div style={{ position: 'relative' }}>
        <button 
          className="logout-button" 
          onClick={handleLogout}
          disabled={isLoggingOut}
          aria-label="Déconnexion"
        >
          {isLoggingOut ? < LockIcon /> : <LogoutIcon/>}
        </button>
        <div className="tooltip">
          {isLoggingOut ? 'Déconnexion...' : 'Déconnexion'}
        </div>
      </div>
    );
  };
export default LogoutButton;