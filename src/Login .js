import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { IoMailOutline } from 'react-icons/io5';
import { FiKey } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db, signInWithEmailAndPassword } from './firebase';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const isFormValid = email !== '' && password !== '';

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;

      if (user) {
        // Récupérer le document utilisateur depuis Firestore
        const userRef = doc(db, 'users-rôles', user.uid);
        const userDoc = await getDoc(userRef);
        
        if (userDoc.exists()) {
          const role = userDoc.data().role;
          switch (role) {
            case 'admin':
              navigate('/dashboardadmin');
              break;
            case 'coach':
              navigate('/');
              break;
            case 'etudiant':
              navigate('/dashboardetudiant');
              break;
            default:
              navigate('/'); // Page d'accueil ou erreur
              break;
          }
        } else {
          navigate('/'); // Page d'accueil ou erreur si utilisateur non trouvé
        }
      }
    } catch (error) {
      let errorMessage = 'Une erreur est survenue. Veuillez réessayer.';
      switch (error.code) {
        case 'auth/wrong-password':
          errorMessage = 'Mot de passe incorrect.';
          break;
        case 'auth/user-not-found':
          errorMessage = 'Aucun utilisateur trouvé avec cet email.';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Trop de tentatives. Veuillez réessayer plus tard.';
          break;
        default:
          errorMessage = 'Une erreur est survenue. Veuillez réessayer.';
          break;
      }
      toast.error(errorMessage);
    }
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={6} md={6} className='container-form'>
            <h2 className='text-dark fw-bold'>Connexion</h2>
            <p className="title" style={{ color: "grey" }}>Connectez-vous à votre compte</p>
            <form className="form" onSubmit={handleLogin}>
              <div className='icone1 ps-3'>
                <IoMailOutline />
              </div>
              <input
                type="email"
                className="input rounded-pill"
                placeholder="Adresse Mail"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <div className='icone2 ps-3'>
                <FiKey />
              </div>
              <input
                type="password"
                className="input rounded-pill"
                placeholder="Mot de passe"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <Link to="/forgot" className="page-link-label">Mot de passe oublié ?</Link>
              <button className="form-btn rounded-pill" type="submit" disabled={!isFormValid}>
                Connexion
              </button>
            </form>
          </Col>

          <Col lg={6} md={6} className='texte'>
            <div className="text-center align-items-center pt-4">
              <img src="" alt="e-learning" className='learningimg' />
              <h3 className='fw-bold'>Oneline E-Learning</h3>
              <p className='fw-bold'>
                Bienvenue sur notre plateforme d'e-learning. Connectez-vous pour accéder à vos cours, suivre votre progression et interagir avec vos enseignants et camarades de classe. Profitez d'une expérience d'apprentissage personnalisée et de ressources pédagogiques de qualité. Si vous n'avez pas encore de compte, inscrivez-vous dès aujourd'hui pour commencer votre parcours d'apprentissage !
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;