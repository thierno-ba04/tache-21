import React, { useEffect } from 'react';
import { useMyContext } from '../../../../context/MyContext'; // Ajustez le chemin si nécessaire
import { Container, Row, Col, Button } from 'react-bootstrap';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import Stack from '@mui/material/Stack';
import Img from "../../../../assets/img/prflimg.jpeg";
import { ArchiveFill, EyeFill, PencilFill, TrashFill } from "react-bootstrap-icons";
import { LiaFileExportSolid } from 'react-icons/lia';
import { IoIosAddCircleOutline } from 'react-icons/io';
import "./personnels.css";

// Dummy functions to simulate user actions
const archiveUser = async (id) => {
  console.log(`Archiving user with ID: ${id}`);
};

const deleteStudent = async (id) => {
  console.log(`Deleting user with ID: ${id}`);
};

const UpdateStudent = (id) => {
  console.log(`Updating user with ID: ${id}`);
};


function Personnels() {
  const {
    students,
    ajoutprfs,
    updateStudent,
    removeStudent, // Assurez-vous de définir une fonction de suppression dans votre contexte
  } = useMyContext();

  const navigate = useNavigate();

  const handleArchiveUser = async (id) => {
    try {
      await archiveUser(id);
      // Navigate to archived users page
      navigate(`/archiveUsers`);
    } catch (error) {
      console.error("Erreur lors de l'archivage de l'utilisateur", error);
    }
  };

  const handleDeleteUser = async (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur?')) {
      try {
        await deleteStudent(id);
        // Logic to update the state after deletion, e.g., calling a function from the context
        removeStudent(id); // Assurez-vous que removeStudent est bien défini dans le contexte
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

  const columns = [
    {
      field: 'photoURL',
      headerName: 'Profil',
      width: 95,
      renderCell: () => <Avatar src={Img} sx={{ mt: 1 }} />,
      sortable: false,
      filterable: false,
    },
    { field: 'Nom', headerName: 'Nom', width: 100 },
    { field: 'Prenom', headerName: 'Prenom', width: 100 },
    { field: 'Mail', headerName: 'Mail', width: 200 },
    {
      field: 'Numero',
      headerName: 'Numero',
      type: 'number',
      width: 100,
      editable: true,
    },
    { field: 'Adresse', headerName: 'Adresse', width: 130 },
    { field: 'Statut', headerName: 'Statut', width: 100 },
    {
      field: 'Actions',
      headerName: 'Actions',
      width: 180,
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
            <span onClick={() => handleDeleteUser(id)} className="button-delete" style={{ cursor: 'pointer' }}>
              <TrashFill size={18} color="red" className="ms-2" />
            </span>
            <span onClick={() => handleArchiveUser(id)} className="button-archive" style={{ cursor: 'pointer' }}>
              <ArchiveFill size={18} color="green" className="ms-2" />
            </span>
          </Stack>
        );
      },
    }
    
  ];

  return (
    <div className='main2'>
      <Container>
        <Row className="justify-content-center tabpersonl">
          <Col lg={12} md={12}>
            <h6 className='lsteleves'>Liste des professeurs</h6>
            <div className="deuxbutt">
              <div className="ms-2 mt-3">
                <Button>
                  <LiaFileExportSolid className="buttexport me-2 mb-1" /> Export to CSV
                </Button>
              </div>
              <div className="rowsbutt mt-3">
                <Link to="/ajoutprfs">
                  <Button className="btnajoute">
                    Ajouter <IoIosAddCircleOutline className="iconajoute ms-2 mb-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={12} md={12}>
            <div className='data-grid-container'>
              <Box sx={{ height: '60vh', width: '93%', margin: "auto" }}>
                <DataGrid
                  rows={students} // Use students from context
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 }, // Ensure this pageSize is in pageSizeOptions
                    },
                  }}
                  pageSizeOptions={[5, 6, 10]} // Include pageSize 6 here
                />
              </Box>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Personnels;
