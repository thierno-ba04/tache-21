// PrivateRoute.js
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/firebase';

function PrivateRoute({ children, roleRequired }) {
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkRole = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, 'roles', user.uid));
        setRole(userDoc.data().role);
      } else {
        navigate('/login');
      }
    };

    checkRole();
  }, [navigate]);

  if (role === roleRequired) {
    return children;
  } else {
    return null;
  }
}

export default PrivateRoute;
