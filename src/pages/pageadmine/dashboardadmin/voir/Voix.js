import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useMyContext } from '../../../../context/MyContext';
import "./voix.css"

function Voix() {
  const { id } = useParams();
  const { students } = useMyContext();
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    // Enregistrez les modifications ici
    navigate('/DashboardAdmin');
  };
  
  // Trouver l'étudiant correspondant à l'ID
  const student = students.find(student => student.id === parseInt(id));

  if (!student) {
    return <div>Étudiant non trouvé</div>;
  }

  return (
    <div className="shadow bg-body rounded Détails">
      <h2 className="titre_details">Détails des l'Étudiants</h2>

      <table className="voir_details">
        <tbody className="">
          <tr>
            <td><strong>Nom:</strong></td>
            <td>{student.Nom}</td>
          </tr>
          <tr>
            <td><strong>Prénom:</strong></td>
            <td>{student.Prenom}</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td>{student.Mail}</td>
          </tr>
          <tr>
            <td><strong>Numéro:</strong></td>
            <td>{student.Numero}</td>
          </tr>
          <tr>
            <td><strong>Adresse:</strong></td>
            <td>{student.Adresse}</td>
          </tr>
          <tr>
            <td><strong>Statut:</strong></td>
            <td>{student.Statut}</td>
          </tr>
          <tr>
            <td><strong>Photo:</strong></td>
            <td>
              {student.photoURL ? (
                <img src={student.photoURL} alt={`${student.Prenom} ${student.Nom}`} width="100" />
              ) : (
                'Aucune photo disponible'
              )}
            </td>
          </tr>
          <div onSubmit={handleSubmit} className="btnvoir">
      <button type="button" onClick={() => navigate('/DashboardAdmin')} className="btn btn-secondary mt-3">Go Back</button>

      </div>
        </tbody>
        
      </table>
      
    </div>
  );
}

export default Voix;
