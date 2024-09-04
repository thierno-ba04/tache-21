import React, { useState } from 'react';
import { Modal, Box, Typography, Button, Divider, Tabs, Tab, TextField, Table, TableBody, TableCell, TableRow } from '@mui/material';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from './firebase'; // Ensure this path is correct

const DetailModal = ({ open, onClose, applicant, onUpdate }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [formValues, setFormValues] = useState({
    nom: applicant?.nom || '',
    email: applicant?.email || '',
    adresse: applicant?.adresse || '',
    numero: applicant?.numero || '',
    niveauclasse: applicant?.niveauclasse || ''
  });
  const [newFeedback, setNewFeedback] = useState('');

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddFeedback = async () => {
    if (applicant) {
      try {
        const feedbacks = [...(applicant.feedbacks || []), { comment: newFeedback, date: new Date().toLocaleDateString() }];
        const docRef = doc(db, 'applicants', applicant.id); // Use correct collection name
        await updateDoc(docRef, { feedbacks });
        setNewFeedback(''); // Clear input
        onUpdate(); // Refresh list if necessary
      } catch (error) {
        console.error("Error adding feedback:", error);
        alert('Failed to add feedback.');
      }
    }
  };

  if (!applicant) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        maxWidth: 800,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}>
        <Typography id="modal-title" variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
          Détails de L'étudiant
        </Typography>
        <Divider />
        
        <Tabs value={tabIndex} onChange={handleTabChange} centered>
          <Tab label="Profile" />
          <Tab label="Messages" />
          <Tab label="Feedbacks" />
        </Tabs>

        {tabIndex === 0 && (
          <Box sx={{ p: 2 }}>
            <Typography variant="h6">About</Typography>
            <Typography variant="body1"><strong>Nom:</strong> {applicant.nom}</Typography>
            <Typography variant="body1"><strong>Email:</strong> {applicant.email}</Typography>
            <Typography variant="body1"><strong>Adresse:</strong> {applicant.adresse}</Typography>
            <Typography variant="body1"><strong>Numero:</strong> {applicant.numero}</Typography>
            <Typography variant="body1"><strong>Niveau classe:</strong> {applicant.niveauclasse}</Typography>
          </Box>
        )}

        {tabIndex === 1 && (
          <Box sx={{ p: 2 }}>
            <Typography variant="h6">Messages</Typography>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Here is a link to the latest summary report...</TableCell>
                  <TableCell align="right">3 hrs ago</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>There has been a request on your account...</TableCell>
                  <TableCell align="right">Yesterday</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Porttitor vitae ultrices quis, dapibus id dolor...</TableCell>
                  <TableCell align="right">9/10</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        )}

        {tabIndex === 2 && (
          <Box sx={{ p: 2 }}>
            <Typography variant="h6">Edit</Typography>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Nom"
                name="nom"
                value={formValues.nom}
                onChange={handleInputChange}
                fullWidth
              />
              <TextField
                label="Email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                fullWidth
              />
              <TextField
                label="Adresse"
                name="adresse"
                value={formValues.adresse}
                onChange={handleInputChange}
                fullWidth
              />
              <TextField
                label="Numero"
                name="numero"
                value={formValues.numero}
                onChange={handleInputChange}
                fullWidth
              />
              <TextField
                label="Niveau classe"
                name="niveauclasse"
                value={formValues.niveauclasse}
                onChange={handleInputChange}
                fullWidth
              />
            </Box>
          </Box>
        )}

        {tabIndex === 3 && (
          <Box sx={{ p: 2 }}>
            <Typography variant="h6">Feedbacks</Typography>
            <Box sx={{ mb: 2 }}>
              <TextField
                label="New Feedback"
                name="newFeedback"
                value={newFeedback}
                onChange={(e) => setNewFeedback(e.target.value)}
                fullWidth
                multiline
                rows={4}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddFeedback}
                sx={{ mt: 1 }}
              >
                Add Feedback
              </Button>
            </Box>
            <Table>
              <TableBody>
                {applicant.feedbacks && applicant.feedbacks.length > 0 ? (
                  applicant.feedbacks.map((feedback, index) => (
                    <TableRow key={index}>
                      <TableCell>{feedback.comment}</TableCell>
                      <TableCell align="right">{feedback.date}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={2} align="center">No feedbacks available</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Box>
        )}

        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
          {tabIndex === 0 && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => setTabIndex(2)} // Switch to Edit tab
            >
              Modifier
            </Button>
          )}
          <Button variant="outlined" color="secondary" onClick={onClose}>
            Fermer
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default DetailModal;
