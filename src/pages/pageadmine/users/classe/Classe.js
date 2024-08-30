import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import { LiaFileExportSolid } from 'react-icons/lia';
import { IoIosAddCircleOutline } from 'react-icons/io';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import { EyeFill, PencilFill, TrashFill } from "react-bootstrap-icons";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../../../firebase/firebase";

// import { useMyContext } from '../../../../context/MyContext';
import './classe.css';

const Classe = () => {
  const [rows, setRows] = useState([
    { id: 1, Classe: 'formation1', Matiére: 'Programmation' },
    { id: 2, Classe: 'formation2', Matiére: 'Design' },
    { id: 3, Classe: 'formation3', Matiére: 'Marketing-digitale' },
    { id: 4, Classe: 'formation4', Matiére: 'Inphographie' },
    { id: 5, Classe: 'formation5', Matiére: 'Photoshop' },
    { id: 5, Classe: 'formation6', Matiére: 'Bureautique' },
  ]);

  const [pageSize, setPageSize] = useState(6);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("Fetching data...");
  }, []);

  const handleDeleteUser = async (id) => {
    try {
      console.log(`Deleting user with ID: ${id}`);
      setRows(rows.filter(row => row.id !== id));
      console.log("Utilisateur supprimé avec succès");
    } catch (error) {
      console.error("Erreur lors de la suppression de l'utilisateur", error);
    }
  };

  const addClasseToDb = async (classe) => {
    try {
      await addDoc(collection(db, "classes"), classe);
      console.log("classe added successfully");
    } catch (error) {
      console.error("Error adding classe: ", error);
    }
  };

  const handleAddClasse = async (classe) => {
    await addClasseToDb(classe);
  };

  const columns = [
    { field: 'Classe', headerName: 'Classe', flex: 1 },
    { field: 'Matiére', headerName: 'Matiére', flex: 1 },
    {
      field: 'Actions',
      headerName: 'Actions',
      flex: 0,
      width: 180,
      renderCell: (params) => {
        const { id } = params.row;

        return (
          <Stack spacing={2} direction="row">
            <Link to={`/classes/voix/${id}`}>
              <EyeFill size={18} color="skyblue" className="ms-2" />
            </Link>
            <Link to={`/classes/update/${id}`} className="button-update">
              <PencilFill size={18} color="yellow" className="ms-2" />
            </Link>
            <span onClick={() => handleDeleteUser(id)} className="button-delete">
              <TrashFill size={18} color="red" className="ms-2" />
            </span>
          </Stack>
        );
      },
    },
  ];

  return (
    <Container>
      <Row>
        <Col lg={1} md={1}></Col>
        <Col lg={10} md={10}>
          <div className="classe mt-5">
            <h6>Liste des classes</h6>

            <Button className="rowsbutt mt-3">
                <Link to="/classes/ajout" className="rowsbutt">
                  Ajouter
                  <IoIosAddCircleOutline
                    className="button-add ms-auto"
                    size={30}
                    color="white"
                    onClick={() =>
                      handleAddClasse({
                      
                      })
                    }
                  />
                </Link>
              </Button>
            {/* <div className="rowsbutt mt-3">
              <Link to="/classes/ajout">
                <Button className="btnajoute">
                  Ajouter <IoIosAddCircleOutline className="iconajoute ms-2 mb-1" />
                </Button>
              </Link>
            </div> */}
            <div className="ms-2 mt-3">
              <Button>
                <LiaFileExportSolid className="buttexport me-2 mb-1" /> Export to CSV
              </Button>
            </div>
          </div>
        </Col>
        <Col lg={1} md={1}></Col>
        <Col lg={1} md={1}></Col>

        <Col lg={10} md={10}>
          <div className='data-grid-container'>
            <Box style={{ height: '50vh', width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pagination
                pageSize={pageSize}
                rowsPerPageOptions={[5, 10]}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                paginationMode="client"
                disableSelectionOnClick
              />
            </Box>
          </div>
        </Col>
        <Col lg={1} md={1}></Col>
      </Row>
    </Container>
  );
};

export default Classe;
