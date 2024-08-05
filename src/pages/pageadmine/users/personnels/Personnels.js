import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useNavigate } from "react-router-dom";
import { Avatar } from '@mui/material';
import Stack from '@mui/material/Stack';
import Img from "../../../../assets/img/prflimg.jpeg";
import { useEffect, useState } from "react";
import {
  ArchiveFill,
  EyeFill,
  PencilFill,
  TrashFill,
} from "react-bootstrap-icons";
import { LiaFileExportSolid } from 'react-icons/lia';
import { IoIosAddCircleOutline } from 'react-icons/io';
import "./personnels.css"


const archiveUser = async (id) => {
  console.log(`Archiving user with ID: ${id}`);
};

const deleteUser = async (id) => {
  console.log(`Deleting user with ID: ${id}`);
};

const updateUser = (id) => {
  console.log(`Updating user with ID: ${id}`);
};

function Personnels() {

  const [rows, setRows] = useState([
    { id: 1, Nom: 'Niang', Prenom: 'Faty', Mail: 'fatyniang4@gmail.com', Numero: 777778899, Adresse: 'Thiés', Statut: 'prof anglais' },
    { id: 2, Nom: 'Ba', Prenom: 'Thiérno', Mail: 'thiérnoba56@gmail.com', Numero: 771001897, Adresse: 'zone Thiés', Statut: 'prof anglais' },
    { id: 3, Nom: 'Lannister', Prenom: 'Gervais', Mail: 'akoinenzegervais7@gmail.com', Numero: 771001897, Adresse: 'zone captage', Statut: 'prof anglais' },
    { id: 4, Nom: 'Stark', Prenom: 'Moriss', Mail: 'maorrissstark27@gmail.com', Numero: 771001897, Adresse: 'zone captage', Statut: 'prof anglais' },
    { id: 5, Nom: 'Diop', Prenom: 'Marie', Mail: 'diopmarie457@gmail.com', Numero: 771001897, Adresse: 'zone mbour2', Statut: 'prof anglais' },
    { id: 6, Nom: 'Morin', Prenom: 'Viral', Mail: 'viralmorrin7@gmail.com', Numero: 771001897, Adresse: 'Konakry', Statut: 'prof anglais' },
    { id: 7, Nom: 'Clifford', Prenom: 'Clédore', Mail: 'cledore227@gmail.com', Numero: 771001897, Adresse: 'Hlmgrand yoof', Statut: 'prof anglais' },
    { id: 8, Nom: 'Françoi', Prenom: 'Leader', Mail: 'franchoislearder7@gmail.com', Numero: 771001897, Adresse: 'ThiésRsant', Statut: 'prof anglais' },
    { id: 9, Nom: 'Nze', Prenom: 'Gervais', Mail: 'akoinenzegervais7@gmail.com', Numero: 771001897, Adresse: 'zone captage', Statut: 'prof anglais' },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("Fetching data...");
  }, []);

  const handleArchiveUser = async (id) => {
    try {
      await archiveUser(id);
      setRows(rows.filter(row => row.id !== id));
      console.log("Utilisateur archivé avec succès");
    } catch (error) {
      console.error("Erreur lors de l'archivage de l'utilisateur", error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setRows(rows.filter(row => row.id !== id));
      console.log("Utilisateur supprimé avec succès");
    } catch (error) {
      console.error("Erreur lors de la suppression de l'utilisateur", error);
    }
  };

  const handleUpdateUser = (id) => {
    updateUser(id);
    // Navigate to update user page
    navigate(`/updateUser/{id}`);
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
            <Link to={`/voir/${id}`}>
              <EyeFill size={18} color="skyblue" className="ms-2" />
            </Link>
            <Link onClick={() => handleUpdateUser(id)} className="button-update">
              <PencilFill size={18} color="yellow" className="ms-2" />
            </Link>
            <Link onClick={() => handleDeleteUser(id)} className="button-delete">
              <TrashFill size={18} color="red" className="ms-2" />
            </Link>
            <Link onClick={() => handleArchiveUser(id)} className="button-archive">
              <ArchiveFill size={18} color="green" className="ms-2" />
            </Link>
          </Stack>
        );
      },
    },
  ];

  return (
    <div className='main'>

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
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 6 },
            
          },
        }}
        pageSizeOptions={[5, 10]} 
      />
              </Box>
            </div>
          </Col>
    </Row>
  </Container>
  </div>

  )
}

export default Personnels
