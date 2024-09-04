import React, { useEffect, useState } from "react";
import "./dashboardadmin.css";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { Button, Col, Container, Row } from "react-bootstrap";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import {
  ArchiveFill,
  EyeFill,
  PencilFill,
  TrashFill,
} from "react-bootstrap-icons";
import { db, imageDb } from "../../../firebase/firebase";
import { collection, getDocs, addDoc, updateDoc } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import ReactPaginate from "react-paginate";

const addStudentToDb = async (student) => {
  try {
    await addDoc(collection(db, "students"), student);
    console.log("Student added successfully");
  } catch (error) {
    console.error("Error adding student: ", error);
  }
};

function DashboardAdmin() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);
  const [studentCount, setStudentCount] = useState(0);
  const [personnelCount, setPersonnelCount] = useState(0);
  const [userCount, setUserCount] = useState(0);

  const [recherche, setRecherche] = useState("");
  const [imgUrls, setImgUrls] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); //DEUX LIGNES POUR LA PAGINATION
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      setImgUrls([]); // Clear imgUrls before fetching new URLs
      const imgListRef = ref(imageDb, "files");
      const imgs = await listAll(imgListRef);
      const urls = await Promise.all(
        imgs.items.map((val) => getDownloadURL(val))
      );
      setImgUrls(urls);
    };
    fetchImages();
  }, []);

  const studentCollection = collection(db, "students");

  const getData = async () => {
    try {
      const querySnapshot = await getDocs(studentCollection);
      const data = querySnapshot.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .filter((student) => !student.archived); // Exclude archived users
      setStudents(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Erreur lors de la récupération des données");
    }
  };

  // pour le compte des Users
  const getStudentCount = async () => {
    try {
      const studentsSnapshot = await getDocs(collection(db, "students"));
      const studentCount = studentsSnapshot.size;
      return studentCount;
    } catch (error) {
      console.error(
        "Erreur lors de la récupération du nombre d'étudiants :",
        error
      );
      return 0;
    }
  };

  const getPersonnelCount = async () => {
    try {
      const personnelsSnapshot = await getDocs(collection(db, "personnels")); // Utilisez le nom de collection correct
      const personnelCount = personnelsSnapshot.size;
      return personnelCount;
    } catch (error) {
      console.error(
        "Erreur lors de la récupération du nombre de personnels :",
        error
      );
      return 0;
    }
  };

  const getUserCount = async () => {
    try {
      const usersSnapshot = await getDocs(collection(db, "classes")); // Utilisez le nom de collection correct
      const userCount = usersSnapshot.size;
      return userCount;
    } catch (error) {
      console.error(
        "Erreur lors de la récupération du nombre d'utilisateurs :",
        error
      );
      return 0;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentsData = await getDocs(collection(db, "students"));
        const data = studentsData.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))
          .filter((student) => !student.archived); // Exclude archived users
        setStudents(data);

        const studentsCount = await getStudentCount();
        setStudentCount(studentsCount);

        const personnelsCount = await getPersonnelCount();
        setPersonnelCount(personnelsCount);

        const usersCount = await getUserCount();
        setUserCount(usersCount);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        setError("Erreur lors de la récupération des données");
      }
    };
    fetchData();
  }, []);

  // Fin users

  const handleArchiveUser = async (id) => {
    try {
      const userDoc = doc(db, "students", id);
      await updateDoc(userDoc, { archived: true });
      getData();
      // navigate(`/archiveUsers`);
      toast.success("Utilisateur archivé avec succès");
    } catch (error) {
      console.error("Erreur lors de l'archivage de l'utilisateur", error);
    }
  };

  const handleDeleteUser = async (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur?")) {
      try {
        await deleteDoc(doc(db, "students", id)); // Notez "students" ici, pas "student"
        getData(); // Récupère à nouveau les données après suppression
        toast.success("Utilisateur supprimé avec succès");
      } catch (error) {
        console.error("Erreur lors de la suppression de l'utilisateur", error);
      }
    }
  };

  const handleUpdateStudent = (id) => {
    navigate(`/UpdateStudent/${id}`);
  };

  const handleAddStudent = async (student) => {
    await addStudentToDb(student);
  };

  const filteredStudents = students.filter((student) => {
    return (
      (student.Nom &&
        student.Nom.toLowerCase().includes(recherche.toLowerCase())) ||
      (student.Prenom &&
        student.Prenom.toLowerCase().includes(recherche.toLowerCase())) ||
      (student.Mail &&
        student.Mail.toLowerCase().includes(recherche.toLowerCase())) ||
      (student.Genre &&
        student.Genre.toLowerCase().includes(recherche.toLowerCase())) ||
      (student.Adress &&
        student.Adress.toLowerCase().includes(recherche.toLowerCase())) ||
      (student.Niveau_classe &&
        String(student.Niveau_classe)
          .toLowerCase()
          .includes(recherche.toLowerCase()))
    );
  });

  useEffect(() => {
    if (recherche && filteredStudents.length === 0) {
      setError("Aucun utilisateur n'est trouvé");
    } else {
      setError("");
    }
  }, [recherche, filteredStudents]);

  const data = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  ];

  // PAGINATION....
  const pageCount = Math.ceil(filteredStudents.length / itemsPerPage);
  const startOffset = currentPage * itemsPerPage;
  const endOffset = startOffset + itemsPerPage;
  const currentItems = filteredStudents.slice(startOffset, endOffset);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  return (
    <div className="main">
      <Container>
        <Row>
          <Col lg={4} md={4}>
            <div className="main-card">
              <h6>Année Scolaire 2020/2021</h6>
              <div className="div_mer">
                <div className="div-1">
                  <h5>Étudiants</h5>
                  <p>Liste de tous les étudiants</p>
                  <h1>{studentCount}</h1>{" "}
                  {/* Utilisation de la valeur dynamique */}
                  <span className="icones-perso">
                    <MdOutlineSupervisorAccount size={50} />
                  </span>
                </div>
                <div className="border"></div>
                <div className="div-2">
                  <h2>
                    {studentCount - 100}{" "}
                    {/* Exemple pour le nombre d'inscrits, ajustez selon vos besoins */}
                  </h2>
                  <p>Liste des inscrits</p>
                  <span1>$ 1500.50</span1>
                  <p>Somme inscription</p>
                  <span2>$ 350.60</span2>
                  <p>Recouvrement</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div className="main-card2">
              <h5>Coachs</h5>
              <p>Liste des coachs</p>
              <h4>{personnelCount}</h4>{" "}
              {/* Utilisation de la valeur dynamique */}
              <span className="icones-perso2">
                <MdOutlineSupervisorAccount size={55} />
              </span>
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div className="main-card2">
              <h5>Utilisateurs</h5>
              <p>Liste des utilisateurs</p>
              <h4>{userCount}</h4> {/* Utilisation de la valeur dynamique */}
              <span className="icones-perso2">
                <MdOutlineSupervisorAccount size={55} />
              </span>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={6} md={6}>
            <div className="chart-div mt-5">
              <h6>Statistiques des Inscrits</h6>
              <ResponsiveContainer width="100%" height={300} className="mt-4">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" fill="#8884d8" />
                  <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Col>
          <Col lg={6} md={6}>
            <div className="chart-div mt-5">
              <h6>Performance des étudiants</h6>
              <ResponsiveContainer width="100%" height={300} className="mt-4">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                  <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={1} md={1}></Col>
          <Col lg={11} md={11}>
            <div className="header-div d-flex mt-5">
              <ToastContainer />
              <h5>Liste des étudiants</h5>
              <form style={{ display: "inline", marginLeft: "20%" }}>
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={recherche}
                  onChange={(e) => setRecherche(e.target.value)}
                />
              </form>
              <Button className="ms-auto">
                <Link to="/ajoutelv" className="rowsbutt">
                  Ajouter
                  <IoIosAddCircleOutline
                    className="button-add ms-auto"
                    size={30}
                    color="white"
                    onClick={() =>
                      handleAddStudent({
                        /* student data */
                      })
                    }
                  />
                </Link>
              </Button>
            </div>
            <table className="tableau-style">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Nom</th>
                  <th>Prenom</th>
                  <th>E-mail</th>
                  <th>Genre</th>
                  <th>Adress</th>
                  <th>Niveau de classe</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length > 0 ? (
                  currentItems.map((student, index) => (
                    <tr key={student.id}>
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
                      <td>{student.Nom}</td>
                      <td>{student.Prenom}</td>
                      <td>{student.Mail}</td>
                      <td>{student.Genre}</td>
                      <td>{student.Adress}</td>
                      <td>{student.Niveau_classe}</td>
                      <td className="icons">
                        <Link to={`/voix/${student.id}`}>
                          <EyeFill
                            size={18}
                            color="skyblue"
                            className="ms-4 mt-3"
                          />
                        </Link>
                        <button
                          onClick={() => handleUpdateStudent(student.id)}
                          className="button-delete"
                        >
                          <PencilFill
                            size={18}
                            color="yellow"
                            className="ms-3"
                          />
                        </button>
                        <Button
                          onClick={() => handleDeleteUser(student.id)}
                          className="button-delete"
                          variant="link"
                        >
                          <TrashFill size={18} color="red" className="me-2" />
                        </Button>

                        <Link
                          to="/archived"
                          onClick={() => handleArchiveUser(student.id)}
                          className="button-archive"
                          variant="link"
                        >
                          <ArchiveFill
                            size={18}
                            color="green"
                            className="me-2 mt-3"
                          />
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="8"
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
                Showing {currentItems.length} out of {filteredStudents.length}{" "}
                entries
              </h6>
              <ReactPaginate
                previousLabel={"precedent"}
                nextLabel={"suivant"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                activeClassName={"active"}
              />
            </div>
            {/* </div> */}
            {/* </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DashboardAdmin;
