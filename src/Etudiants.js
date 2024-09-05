import React from "react";
import Sidebar from "./Sidebar";
import { Box, Typography, Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate, useParams } from "react-router-dom";
import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "./firebase/firebase";
import ClipLoader from "react-spinners/ClipLoader";
import DetailModal from "./DetailModal";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import './Etudiants.css';

const Etudiants = () => {
  const { id } = useParams();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [selectedApplicant, setSelectedApplicant] = React.useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  }, []);

  React.useEffect(() => {
    const getValues = async () => {
      try {
        const docRef = doc(db, 'eleves', 'posts');
        const collectionRef = collection(docRef, 'feedbacks');
        const querySnapshot = await getDocs(collectionRef);
        setData(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    getValues();
  }, []);

  const handleDelete = async (id) => {
    if (!id) return;

    const confirmed = window.confirm("Êtes-vous sûr de vouloir supprimer cet étudiant ?");
    if (!confirmed) return;

    try {
      const docRef = doc(db, 'eleves', 'posts', 'feedbacks', id);
      await deleteDoc(docRef);
      setData(data.filter((item) => item.id !== id));
      console.log("Document deleted successfully");
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  const openModal = (applicant) => {
    setSelectedApplicant(applicant);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedApplicant(null);
  };

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#2979ff",
    marginTop: "300px",
  };

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        {loading ? (
          <ClipLoader
            loading={loading}
            cssOverride={override}
            size={70}
            aria-label="Loading Spinner"
            data-testid="loader"
            color="#2979ff"
          />
        ) : (
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, textAlign: "center" }}>
              Liste des Étudiants
            </Typography>

            <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 7 }}>
              <a
                underline="hover"
                style={{ textDecoration: "none", color: "black" }}
                onClick={() => navigate("/DashboardCoach")}
              >
                Dashboard
              </a>
              <Typography color="text.primary">Étudiants</Typography>
            </Breadcrumbs>

            <Button
              variant="contained"
              color="primary"
              sx={{ mb: 2 }}
              onClick={() => navigate("/FeedbacksManager")}
            >
              Ajouter Étudiant
            </Button>

            <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: '10px' }}>
              <Table>
                <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600, fontSize: '1rem' }}>
                      <TableSortLabel>Nom</TableSortLabel>
                    </TableCell>
                    <TableCell sx={{ fontWeight: 600, fontSize: '1rem' }}>Email</TableCell>
                    <TableCell sx={{ fontWeight: 600, fontSize: '1rem' }}>Adresse</TableCell>
                    <TableCell sx={{ fontWeight: 600, fontSize: '1rem' }}>Numéro</TableCell>
                    <TableCell sx={{ fontWeight: 600, fontSize: '1rem' }}>Niveau Classe</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 600, fontSize: '1rem' }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((applicant, index) => (
                    <TableRow
                      key={applicant.id}
                      hover
                      sx={{
                        backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white",
                        '&:hover': { boxShadow: 3, transition: '0.3s' },
                        typography: 'body2', // Custom font for table body
                        fontSize: '0.95rem',
                        lineHeight: '1.6',
                      }}
                    >
                      <TableCell sx={{ fontSize: '0.95rem' }}>{applicant.nom}</TableCell>
                      <TableCell sx={{ fontSize: '0.95rem' }}>{applicant.email}</TableCell>
                      <TableCell sx={{ fontSize: '0.95rem' }}>{applicant.adresse}</TableCell>
                      <TableCell sx={{ fontSize: '0.95rem' }}>{applicant.numero}</TableCell>
                      <TableCell sx={{ fontSize: '0.95rem' }}>{applicant.niveauclasse}</TableCell>
                      <TableCell align="right">
                        <IconButton
                          aria-label="view"
                          color="primary"
                          onClick={() => openModal(applicant)}
                        >
                          <VisibilityIcon />
                        </IconButton>
                        <IconButton
                          aria-label="delete"
                          color="error"
                          onClick={() => handleDelete(applicant.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
      </Box>

      <DetailModal open={modalOpen} onClose={closeModal} applicant={selectedApplicant} />
    </div>
  );
};

export default Etudiants;
