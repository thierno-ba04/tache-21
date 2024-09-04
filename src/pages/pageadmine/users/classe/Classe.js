import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { LiaFileExportSolid } from "react-icons/lia";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { EyeFill, PencilFill, TrashFill } from "react-bootstrap-icons";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../../../firebase/firebase";
import "./classe.css";

const Classe = () => {
  const navigate = useNavigate();
  const [recherche, setRecherche] = useState("");
  const [classes, setClasses] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const classesCollection = collection(db, "classes");

  const getData = async () => {
    try {
      const querySnapshot = await getDocs(classesCollection);
      const data = querySnapshot.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .filter((classe) => !classe.archived);
      setClasses(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Erreur lors de la récupération des données");
    }
  };

  const handleDeleteClasse = async (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette classe ?")) {
      try {
        await deleteDoc(doc(db, "classes", id));
        getData();
        toast.success("Classe supprimée avec succès");
      } catch (error) {
        console.error("Erreur lors de la suppression de la classe", error);
      }
    }
  };

  const handleUpdateClasse = (id) => {
    navigate(`/updateclasse/${id}`);
  };

  const handleAddClasse = () => {
    navigate("/ajoutclasse");
  };

  const filteredClasses = classes.filter((classe) => {
    return Object.values(classe).some((value) =>
      value.toLowerCase().includes(recherche.toLowerCase())
    );
  });

  const pageCount = Math.ceil(filteredClasses.length / itemsPerPage);
  const startOffset = currentPage * itemsPerPage;
  const endOffset = startOffset + itemsPerPage;
  const currentItems = filteredClasses.slice(startOffset, endOffset);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (recherche && filteredClasses.length === 0) {
      setError("Aucune classe trouvée");
    } else {
      setError("");
    }
  }, [recherche, filteredClasses]);

  return (
    <Container>
      <Row>
        <Col lg={1} md={1}></Col>
        <Col lg={10} md={10}>
        <h6 className="h6">Liste des classes</h6>

          <div className="classe mt-2">
            
            
            <div className="ms-2 mt-2">
              <Button>
                <LiaFileExportSolid className="buttexport me-2 mb-1" /> Exporter
                au CSV
              </Button>
            </div>
            <form style={{ display: "inline", margin: "auto" }} className="mt-4">
              <input
                type="text"
                placeholder="Rechercher..."
                value={recherche}
                onChange={(e) => setRecherche(e.target.value)}
              />
            </form>
            <Button className=" mt-3" onClick={handleAddClasse}>
              <Link to="ajoutclasse" className="rowsbutt">
                Ajouter
                <IoIosAddCircleOutline
                  className="button-add ms-auto"
                  size={30}
                  color="white"
                />
              </Link>
            </Button>
          </div>
        </Col>
        <Col lg={1} md={1}></Col>
        <Col lg={1} md={1}></Col>
        <Col lg={10} md={10}>
          <ToastContainer />
          <table className="tableau-stylePrs w-100">
            <thead>
              <tr>
                <th>Classe</th>
                <th>Matière</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.length > 0 ? (
                currentItems.map((classe) => (
                  <tr key={classe.id}>
                    <td>{classe.classe}</td>
                    <td>{classe.matiere}</td>
                    <td className="icons justify-content-center">
                      <Link to={`/classes/voixclasse/${classe.id}`}>
                        <EyeFill
                          size={18}
                          color="skyblue"
                          className="ms-4 mt-2"
                        />
                      </Link>
                      <button
                        onClick={() =>
                          navigate(`/classes/editclasse/${classe.id}`)
                        }
                        className="button-delete"
                      >
                        <PencilFill size={18} color="yellow" className="ms-2" />
                      </button>
                      <Button
                        onClick={() => handleDeleteClasse(classe.id)}
                        className="button-delete"
                        variant="link"
                      >
                        <TrashFill size={18} color="red" className="ms-2" />
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" style={{ textAlign: "center", color: "red" }}>
                    {error}
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* PAGINATION */}
          <div className="showing mt-4">
            <h6>
              Affichage {currentItems.length} sur {filteredClasses.length}{" "}
              entrées
            </h6>
            <ReactPaginate
              previousLabel={"Précédent"}
              nextLabel={"Suivant"}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
          </div>
        </Col>
        <Col lg={1} md={1}></Col>
      </Row>
    </Container>
  );
};

export default Classe;
