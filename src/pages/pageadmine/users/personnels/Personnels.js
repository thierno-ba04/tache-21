import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  ArchiveFill,
  EyeFill,
  PencilFill,
  TrashFill,
} from "react-bootstrap-icons";
import { LiaFileExportSolid } from "react-icons/lia";
import { IoIosAddCircleOutline } from "react-icons/io";
import "./personnels.css";
import { db, imageDb } from "../../../../firebase/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveAs } from 'file-saver';

// Fonction pour convertir les données en CSV
const convertToCSV = (data, fields) => {
  const header = fields.join(',');
  const rows = data.map(item =>
    fields.map(field => `"${item[field] || ''}"`).join(',')
  );
  return [header, ...rows].join('\n');
};

const addProfesseurToDb = async (personnel) => {
  try {
    await addDoc(collection(db, "personnels"), personnel);
    console.log("Personnel added successfully");
  } catch (error) {
    console.error("Error adding personnel: ", error);
  }
};

const Personnels = () => {
  const navigate = useNavigate();
  const [personnels, setPersonnels] = useState([]);
  const [error, setError] = useState(null);
  const [recherche, setRecherche] = useState("");
  const [imgUrls, setImgUrls] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      setImgUrls([]);
      const imgListRef = ref(imageDb, "files");
      const imgs = await listAll(imgListRef);
      const urls = await Promise.all(
        imgs.items.map((val) => getDownloadURL(val))
      );
      setImgUrls(urls);
    };
    fetchImages();
  }, []);

  const personnelCollection = collection(db, "personnels");

  const getData = async () => {
    try {
      const querySnapshot = await getDocs(personnelCollection);
      const data = querySnapshot.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .filter((personnel) => !personnel.archived);
      setPersonnels(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Erreur lors de la récupération des données");
    }
  };

  const handleArchiveUser = async (id) => {
    try {
      const userDoc = doc(db, "personnels", id);
      await updateDoc(userDoc, { archived: true });
      getData();
      toast.success("Utilisateur archivé avec succès");
    } catch (error) {
      console.error("Erreur lors de l'archivage de l'utilisateur", error);
    }
  };

  const handleDeleteUser = async (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur?")) {
      try {
        await deleteDoc(doc(db, "personnels", id));
        getData();
        toast.success("Utilisateur supprimé avec succès");
      } catch (error) {
        console.error("Erreur lors de la suppression de l'utilisateur", error);
      }
    }
  };

  const handleUpdatePrsnl = (id) => {
    navigate(`/UpdatePrsnl/${id}`);
  };

  const handleAddPrfs = async (personnel) => {
    await addProfesseurToDb(personnel);
  };

  const filteredPersonnels = personnels.filter((personnel) => {
    return (
      (personnel.Nom &&
        personnel.Nom.toLowerCase().includes(recherche.toLowerCase())) ||
      (personnel.Prenom &&
        personnel.Prenom.toLowerCase().includes(recherche.toLowerCase())) ||
      (personnel.Mail &&
        personnel.Mail.toLowerCase().includes(recherche.toLowerCase())) ||
      (personnel.Number &&
        personnel.Number.toLowerCase().includes(recherche.toLowerCase())) ||
      (personnel.Genre &&
        personnel.Genre.toLowerCase().includes(recherche.toLowerCase())) ||
      (personnel.Adress &&
        personnel.Adress.toLowerCase().includes(recherche.toLowerCase())) ||
      (personnel.Domaine &&
        String(personnel.Domaine).toLowerCase().includes(recherche.toLowerCase()))
    );
  });

  useEffect(() => {
    if (recherche && filteredPersonnels.length === 0) {
      setError("Aucun utilisateur n'est trouvé");
    } else {
      setError("");
    }
  }, [recherche, filteredPersonnels]);

  const pageCount = Math.ceil(filteredPersonnels.length / itemsPerPage);
  const startOffset = currentPage * itemsPerPage;
  const endOffset = startOffset + itemsPerPage;
  const currentItems = filteredPersonnels.slice(startOffset, endOffset);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const handleExport = () => {
    // Fonctionnalité d'exportation en CSV
    const fields = ['Nom', 'Prenom', 'Mail', 'Number', 'Genre', 'Adress', 'Domaine']; // Champs à inclure dans le CSV
    const csv = convertToCSV(personnels, fields);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'personnels.csv');
    console.log('Exporting to CSV...');
  };

  return (
    <div className="main2">
      <Container>
        <Row className="justify-content-center tabpersonl">
          <Col lg={1} md={1}></Col>

          <Col lg={11} md={11}>
            <h6 className="lsteleves mt-4">Liste des Coachs</h6>
            <div className="deuxbutt">
              <div className="mt-3">
                <Button onClick={handleExport}>
                  <LiaFileExportSolid className="buttexport me-2 mb-1" /> Export
                  to CSV
                </Button>
              </div>
              <form style={{ display: "inline", marginLeft: "20%" }}>
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={recherche}
                  onChange={(e) => setRecherche(e.target.value)}
                />
              </form>
              <Button className="rowsbutt mt-3">
                <Link to="/ajoutprfs" className="rowsbutt">
                  Ajouter
                  <IoIosAddCircleOutline
                    className="button-add ms-auto"
                    size={30}
                    color="white"
                    onClick={() =>
                      handleAddPrfs({
                        // Ajoutez ici les informations du nouveau personnel si nécessaire
                      })
                    }
                  />
                </Link>
              </Button>
            </div>
          </Col>
          <Col lg={1} md={1}></Col>

          <Col lg={11} md={11}>
            <ToastContainer />
            <table className="tableau-stylePrs ">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Nom</th>
                  <th>Prenom</th>
                  <th>E-mail</th>
                  <th>Numéro-Tel</th>
                  <th>Genre</th>
                  <th>Adress</th>
                  <th>Domaine</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length > 0 ? (
                  currentItems.map((personnel, index) => (
                    <tr key={personnel.id}>
                      <td>
                        {imgUrls[index] ? (
                          <img
                            src={imgUrls[index]}
                            width="100%"
                            height="25px"
                            alt={`Uploaded ${index}`}
                          />
                        ) : (
                          "No Image"
                        )}
                      </td>
                      <td>{personnel.Nom}</td>
                      <td>{personnel.Prenom}</td>
                      <td>{personnel.Mail}</td>
                      <td>{personnel.Number}</td>
                      <td>{personnel.Genre}</td>
                      <td>{personnel.Adress}</td>
                      <td>{personnel.Domaine}</td>
                      <td className="icons">
                        <Link to={`/voixPrs/${personnel.id}`}>
                          <EyeFill
                            size={18}
                            color="skyblue"
                            className="ms-4 mt-3"
                          />
                        </Link>
                        <button
                          onClick={() => handleUpdatePrsnl(personnel.id)}
                          className="button-delete"
                        >
                          <PencilFill
                            size={18}
                            color="yellow"
                            className="ms-2"
                          />
                        </button>
                        <Button
                          onClick={() => handleDeleteUser(personnel.id)}
                          className="button-delete"
                          variant="link"
                        >
                          <TrashFill size={18} color="red" className="ms-2" />
                        </Button>
                        <Link
                          to="/archived"
                          onClick={() => handleArchiveUser(personnel.id)}
                          className="button-archive"
                          variant="link"
                        >
                          <ArchiveFill
                            size={18}
                            color="green"
                            className="mt-3"
                          />
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="9"
                      style={{ textAlign: "center", color: "red" }}
                    >
                      {error}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* PAGINATION */}
            <div className="showing mt-4">
              <h6>
                Showing {currentItems.length} out of {filteredPersonnels.length}{" "}
                entries
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
        </Row>
      </Container>
    </div>
  );
};

export default Personnels;
