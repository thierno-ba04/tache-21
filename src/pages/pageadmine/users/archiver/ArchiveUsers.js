import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useMyContext } from '../../../../context/MyContext';
import { Button } from 'react-bootstrap';
import { RiInboxUnarchiveFill } from "react-icons/ri";
import { Avatar } from '@mui/material';
import Img from '../../../../assets/img/prflimg.jpeg';

function ArchivedUsers() {
  const { students, unarchiveStudent } = useMyContext();
  const [archivedUsers, setArchivedUsers] = useState([]);

  useEffect(() => {
    const filteredUsers = students.filter(student => student.archived);
    console.log('Archived Users:', filteredUsers); // Debugging
    setArchivedUsers(filteredUsers);
  }, [students]);

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
    { field: 'Mail', headerName: 'E-mail', width: 200 },
    { field: 'Lieu_de_naissance', headerName: 'Lieu de naissance', width: 200 },
    { field: 'Niveau_de_classe', headerName: 'Niveau de classe', width: 150 },
    { field: 'Numero', headerName: 'Numéro', type: 'number', width: 150 },
    { field: 'Adresse', headerName: 'Adresse', width: 200 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => {
        const { id } = params.row;
        return (
          <Button
            onClick={() => unarchiveStudent(id)}
            className="button-unarchive"
            variant="link"
          >
            <RiInboxUnarchiveFill size={18} color="blue" />
          </Button>
        );
      },
    },
  ];

  return (
    <div className="main">
      <Container>
        <Row>
          <h2>Utilisateurs Archivés</h2>
          <Col lg={12} md={12}>
            <div className='data-grid-container'>
              <Box sx={{ height: '60vh', width: '93%', margin: "auto" }}>
                <DataGrid
                  rows={archivedUsers}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                    },
                  }}
                  pageSizeOptions={[5, 6, 10]}
                />
              </Box>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ArchivedUsers;
