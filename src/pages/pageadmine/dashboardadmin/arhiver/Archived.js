import React, { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../../../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import { EyeFill, PencilFill, StarFill, TrashFill } from "react-bootstrap-icons";
import { toast } from "react-toastify";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./archived.css";

const Archived = () => {
  const [archivedUsers, setArchivedUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getArchivedUsers();
  }, []);

  const handleUpdateStudent = (id) => {
    navigate(`/UpdateStudent/${id}`);
  };

  const handleDeleteUser = async (id) => {
    try {
      const userDoc = doc(db, "students", id);
      const docSnap = await getDoc(userDoc);

      if (docSnap.exists()) {
        await deleteDoc(userDoc);
        getArchivedUsers(); // Refresh the list of archived users
        toast.success("Utilisateur supprimé avec succès");
      } else {
        toast.error("Utilisateur non trouvé");
      }
    } catch (error) {
      console.error("Erreur lors de la suppression de l'utilisateur", error);
      toast.error("Erreur lors de la suppression de l'utilisateur");
    }
  };

  const handleUnarchiveUser = async (id) => {
    try {
      const userDoc = doc(db, "students", id);
      const docSnap = await getDoc(userDoc);

      if (docSnap.exists()) {
        await updateDoc(userDoc, { archived: false });
        getArchivedUsers(); // Refresh the list of archived users
        toast.success("Utilisateur désarchivé avec succès");
      } else {
        toast.error("Utilisateur non trouvé");
      }
    } catch (error) {
      console.error("Erreur lors du désarchivage de l'utilisateur", error);
      toast.error("Erreur lors du désarchivage de l'utilisateur");
    }
  };

  const getArchivedUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "students"));
      console.log("Documents récupérés :", querySnapshot.docs.map((doc) => doc.data())); // Log documents

      const data = querySnapshot.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .filter(student => {
          console.log("Student:", student); // Log each student
          return student.archived === true; // Ensure `archived` is exactly true
        });

      console.log("Filtered archived users:", data); // Log filtered users
      setArchivedUsers(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des utilisateurs archivés:", error);
      toast.error("Erreur lors de la récupération des utilisateurs archivés");
    }
  };

  return (
    <div className="d-block m-auto">
      <Container>
        <Row className="justify-content-center archivetitre">
          <h3 className="text-center text-uppercase">Archived Users</h3>
          <Col lg={10} md={10}>
            <table className="tableau-style">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Nom</th>
                  <th>Prenom</th>
                  <th>Mail</th>
                  <th>Genre</th>
                  <th>Adress</th>
                  <th>Niveau_classe</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {archivedUsers.length === 0 && (
                  <tr>
                    <td colSpan="8" className="text-center">Aucun utilisateur n'est archivé</td>
                  </tr>
                )}
                {archivedUsers.map(student => (
                  <tr key={student.id}>
                    <td>
                      {student.imgUrl ? (
                        <img
                          src={student.imgUrl}
                          height="25px"
                          width="100%"
                          alt={`Uploaded ${student.id}`}
                        />
                      ) : (
                        "No Image"
                      )}
                    </td>
                    <td>{student.Nom}</td>
                    <td>{student.Prenom}</td>
                    <td>{student.Mail}</td>
                    <td>{student.Genre}</td>
                    <td>{student.Adress}</td>
                    <td>{student.Niveau_classe}</td>
                    <td className="icons">
                      <Link to={`/voir/${student.id}`}>
                        <EyeFill size={18} color="skyblue" className="ms-2 mt-3" />
                      </Link>
                      <Link
                        onClick={() => handleUpdateStudent(student.id)}
                        className="button-edit"
                      >
                        <PencilFill size={18} color="yellow" className="ms-2 mt-3" />
                      </Link>
                      <button
                        onClick={() => handleDeleteUser(student.id)}
                        className="button-delete"
                      >
                        <TrashFill size={18} color="red" className="ms-2" />
                      </button>
                      <Link to="#" onClick={() => handleUnarchiveUser(student.id)} className="button-unarchive">
                        <StarFill size={18} color="blue" className="ms-2 mt-3" aria-hidden="true" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="d-flex justify-content-center mt-4">
            <Button
              type="button" // changed from "btn" to "button"
              className="btn btn-secondary me-auto"
              onClick={() => navigate(-1)}
              color="white"
            >
              GO Back
            </Button>
          </div>
          </Col>
         
        </Row>
      </Container>
    </div>
  );
};

export default Archived;
