import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import "./dashboardadmin.css";
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { Button, Col, Container, Row } from 'react-bootstrap';
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
import { LiaFileExportSolid } from 'react-icons/lia';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { Link, useNavigate } from "react-router-dom";
import { Avatar } from '@mui/material';
import Stack from '@mui/material/Stack';
import Img from "../../../assets/img/prflimg.jpeg";
import { useMyContext } from '../../../context/MyContext';
import {
  ArchiveFill,
  EyeFill,
  PencilFill,
  TrashFill,
} from "react-bootstrap-icons";
import { db } from '../../../firebase/firebase'; // Importez db
import { collection, getDocs, doc, setDoc } from 'firebase/firestore';

// Dummy functions to simulate user actions
const archiveUser = async (id) => {
  // console.log(`Archiving user with ID: ${id}`);
};

const deleteUser = async (id) => {
  console.log(`Deleting user with ID: ${id}`);
};

function DashboardAdmin() {
  const {
    students,
    updateStudent,
    removeStudent,
  } = useMyContext();

  const navigate = useNavigate();

  const [studentList, setStudentList] = useState([]);
  const [Nom, setNom] = useState('');
  const [Prenom, setPrenom] = useState('');
  const [Email, setEmail] = useState('');
  const [photoURL, setphotoURL] = useState('');
  const [Lieu_de_naissance, setLieu_de_naissance] = useState('');
  const [Niveau_de_classe, setNiveau_de_classe] = useState('');
  const [Numero, setNumero] = useState('');
  const [Adresse, setAdresse] = useState('');
  const [Actions, setActions] = useState('');
  const [error, setError] = useState('');

  const fetchStudents = async () => {
    try {
      const studentCollection = collection(db, 'students');
      const studentSnapshot = await getDocs(studentCollection);
      const students = studentSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      console.log("Données des étudiants : ", students); // Vérifiez les données récupérées
      setStudentList(students);
    } catch (error) {
      console.error("Erreur lors de la récupération des étudiants : ", error);
    }
  };
  

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleArchiveUser = async (id) => {
    try {
      await archiveUser(id);
      navigate(`/archiveUsers`);
    } catch (error) {
      console.error("Erreur lors de l'archivage de l'utilisateur", error);
    }
  };

  const handleDeleteUser = async (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur?')) {
      try {
        await deleteUser(id);
        removeStudent(id);
        console.log("Utilisateur supprimé avec succès");
      } catch (error) {
        console.error("Erreur lors de la suppression de l'utilisateur", error);
      }
    }
  };

  const handleUpdateStudent = (updatedStudent) => {
    updateStudent(updatedStudent);
    navigate(`/updateStudent/${updatedStudent.id}`);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (Actions !== 'TouchList') {
      setError("Les informations ne sont pas correctes");
      return;
    }
    try {
      await setDoc(doc(db, "students", Nom), {
        photoURL,
        Nom,
        Prenom,
        Email,
        Lieu_de_naissance,
        Niveau_de_classe,
        Numero,
        Adresse,
        Actions
      });
      fetchStudents();
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'utilisateur", error);
    }
  };

  const data = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  ];

  const columns = [
    {
      field: 'photoURL',
      headerName: 'Profil',
      width: 95,
      renderCell: () => <Avatar src={Img} sx={{ mt: 1 }} />,
      sortable: false,
      filterable: false,
    },
    { field: 'Nom', headerName: 'Nom', width: 150 },
    { field: 'Prenom', headerName: 'Prénom', width: 150 },
    { field: 'Email', headerName: 'E-mail', width: 200 },
    { field: 'Lieu_de_naissance', headerName: 'Lieu de naissance', width: 200 },
    { field: 'Niveau_de_classe', headerName: 'Niveau de classe', width: 150 },
    { field: 'Numero', headerName: 'Numéro', type: 'number', width: 150 },
    { field: 'Adresse', headerName: 'Adresse', width: 200 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 250,
      renderCell: (params) => {
        const { id } = params.row;
        return (
          <Stack spacing={2} direction="row">
            <Link to={`/voix/${id}`}>
              <EyeFill size={18} color="skyblue" className="ms-2" />
            </Link>
            <Link to={`/updateStudent/${id}`} className="button-update">
              <PencilFill size={18} color="yellow" className="ms-2" />
            </Link>
            <Button
              onClick={() => handleDeleteUser(id)}
              className="button-delete"
              variant="link"
            >
              <TrashFill size={18} color="red" className="ms-2" />
            </Button>
            <Button
              onClick={() => handleArchiveUser(id)}
              className="button-archive"
              variant="link"
            >
              <ArchiveFill size={18} color="green" className="ms-2" />
            </Button>
          </Stack>
        );
      },
    },
  ];

  return (
    <div className='main'>
      <Container>
        <Row>
          <Col lg={4} md={4}>
            <div className='main-card'>
              <h6>Année Scolaire 2020/2021</h6>
              <div className='div_mer'>
                <div className="div-1">
                  <h5>Elèves</h5>
                  <p>Liste de tous les élèves</p>
                  <h1>5789</h1>
                  <span className="icones-perso">
                    <MdOutlineSupervisorAccount size={50} />
                  </span>
                </div>
                <div className='border'></div>
                <div className="div-2">
                  <h2>5680</h2>
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
            <div className='main-card2'>
              <h5>Professeurs</h5>
              <p>Liste des professeurs</p>
              <h4>50</h4>
              <span className="icones-perso2">
                <MdOutlineSupervisorAccount size={55} />
              </span>
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div className='main-card2'>
              <h5>Personnels</h5>
              <p>Liste des personnels</p>
              <h4>15</h4>
              <span className="icones-perso2">
                <MdOutlineSupervisorAccount size={55} />
              </span>
            </div>
          </Col>
        </Row>
      
        <Row>
          <Col lg={6} md={6}>
            <div className='chart-div mt-5'>
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
            <div className='chart-div mt-5'>
              <h6>Performance des Élèves</h6>
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
         

          <Col lg={12} md={12}>
            <div className='header-div d-flex mt-5'>
                <h5>Liste des élèves</h5>
                <div className="ms-auto">
                <Link to="/ajoutelv">
                  <IoIosAddCircleOutline className='button-add  ms-auto' size={30} color="green" />
                </Link>
                </div>
            </div>
            <div className='table-div mt-5'>
              <div style={{ height: 400, width: '100%' }} className="mt-4">
                <DataGrid
                  rows={studentList}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DashboardAdmin;
