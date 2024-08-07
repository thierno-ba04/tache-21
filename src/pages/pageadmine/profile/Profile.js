import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import "./profile.css"

const Profile = () => {
  const navigate = useNavigate();
  const initialData = {
    firstName: 'Faty',
    lastName: 'Niang',
    phone: '771234567',
    email: 'faty@gmail.com',
    role: 'admin',
  };

  const [formData, setFormData] = useState({ ...initialData });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enregistrez les modifications ici
    navigate('/editProfileCoach');
  };

  return (
      <Container >
        <Col lg={1} md={1}></Col>

        <Row className="shadow bg-body rounded profile"> 

            <Col lg={5} md={5}>
            <h1 className='titr_profile mb-4'>Mon Profile</h1>

            <div className="profile-details">
          <div >
            <span className="detail-label">Prénom:</span> {formData.firstName}
          </div>
          <div>
            <span className="detail-label">Nom:</span> {formData.lastName}
          </div>
          <div >
            <span className="detail-label">Email:</span> {formData.email}
          </div>
          <div>
            <span className="detail-label">Téléphone:</span> {formData.phone}
          </div>
          <div>
            <span className="detail-label">Rôle:</span> {formData.role}
          </div>
        </div>
        <Link to="/forgot" className="change-password-button" onClick={() => navigate('/editPassword')}>
        Modifier mon mot de passe !
      </Link>
        </Col>
     <Col lg={1} md={1}>
     </Col>
      
     <Col lg={5} md={5}>
        <div className="profile-img">
        <img src="https://img.freepik.com/photos-gratuite/gros-plan-image-programmeur-travaillant-son-bureau-dans-bureau_1098-18707.jpg" alt="user" // Remplacez par formData.photo ou une autre source d'image
            className="profile-photo"
          />
        </div>
     </Col>
     <Col lg={11} md={11}>
     </Col>

     <Col lg={11} md={11}>
     <form onSubmit={handleSubmit} className="update-profile-form">
        <button type="button" onClick={() => navigate('/DashboardAdmin')} className="btn btn-secondary mt-3">Retour</button>
      </form>
     </Col>
        
      </Row>
      </Container>
  );
};

export default Profile;
