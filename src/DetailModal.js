import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  Button,
  Divider,
  Tabs,
  Tab,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableRow,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { doc, updateDoc } from 'firebase/firestore';
import { db , collection, addDoc, onSnapshot} from './firebase/firebase';
import { Link } from 'react-router-dom';
import  {useEffect } from 'react';



const DetailModal = ({ open, onClose, applicant, onUpdate }) => {

  const [works, setWorks] = useState([]);
  const worksCollectionRef = collection(db, 'studentWorks'); // Nom de la collection pour les travaux des étudiants

  // Fonction pour récupérer les travaux des étudiants depuis Firestore
  const fetchWorks = () => {
    onSnapshot(worksCollectionRef, (snapshot) => {
      const worksData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setWorks(worksData);
    });
  };

  // Récupérer les travaux des étudiants au chargement du composant
  useEffect(() => {
    fetchWorks();
  }, []);



  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesCollectionRef = collection(db, 'messages');

  // Fonction pour récupérer les messages depuis Firestore
  const fetchMessages = () => {
    onSnapshot(messagesCollectionRef, (snapshot) => {
      const messagesData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setMessages(messagesData);
    });
  };

  // Fonction pour envoyer un message à Firestore
  const handleSend = async () => {
    if (message.trim()) {
      try {
        await addDoc(messagesCollectionRef, { text: message, time: new Date().toLocaleString() });
        setMessage(''); // Réinitialise le champ de texte après l'envoi
      } catch (error) {
        console.error('Erreur lors de l\'ajout du message:', error);
      }
    } else {
      console.log('Le message est vide');
    }
  };

  // Récupérer les messages au chargement du composant
  useEffect(() => {
    fetchMessages();
  }, []);




  const [tabIndex, setTabIndex] = useState(0);
  const [formValues, setFormValues] = useState({
    nom: applicant?.nom || '',
    email: applicant?.email || '',
    adresse: applicant?.adresse || '',
    numero: applicant?.numero || '',
    niveauclasse: applicant?.niveauclasse || '',
  });
  const [newFeedback, setNewFeedback] = useState('');

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddFeedback = async () => {
    if (applicant) {
      try {
        const feedbacks = [
          ...(applicant.feedbacks || []),
          { comment: newFeedback, date: new Date().toLocaleDateString() },
        ];
        const docRef = doc(db, 'applicants', applicant.id);
        await updateDoc(docRef, { feedbacks });
        setNewFeedback('');
        onUpdate();
      } catch (error) {
        console.error('Error adding feedback:', error);
        alert('Failed to add feedback.');
      }
    }
  };

  if (!applicant) return null;

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-title">
      <Box
        sx={{
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
        }}
      >
        <Typography id="modal-title" variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
          Détails de L'étudiant
        </Typography>
        <Divider />

        <Tabs value={tabIndex} onChange={handleTabChange} centered>
          <Tab label="Profile" />
          <Tab label="Messages" />
          <Tab label="Ajouter un cours" />
          <Tab label="Livraison  de étudiant" />
        </Tabs>

        {tabIndex === 0 && (
          <Box sx={{ p: 2 }}>
            <Typography variant="body1">
              <strong>Nom:</strong> {applicant.nom}
            </Typography>
            <Typography variant="body1">
              <strong>Email:</strong> {applicant.email}
            </Typography>
            <Typography variant="body1">
              <strong>Adresse:</strong> {applicant.adresse}
            </Typography>
            <Typography variant="body1">
              <strong>Numero:</strong> {applicant.numero}
            </Typography>
            <Typography variant="body1">
              <strong>Niveau classe:</strong> {applicant.niveauclasse}
            </Typography>
          </Box>
        )}

        {tabIndex === 1 && (
          <Box sx={{ p: 2 }}>
            <Typography variant="h6">Messages</Typography>
            <Box>
      <Typography variant="h6" gutterBottom>
    
      </Typography>
      <Table>
        <TableBody>
          {messages.map((msg) => (
            <TableRow key={msg.id}>
              <TableCell>{msg.text}</TableCell>
              <TableCell align="right">{msg.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Box sx={{ mt: 3 }}>
        <TextField
          label="Nouveau message"
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleSend}
        >
          Envoyer
        </Button>
      </Box>
    </Box>
          </Box>
        )}

        {tabIndex === 2 && (
          <Box sx={{ p: 2 }}>
            <Typography variant="h6">Ajouter un cours</Typography>
            <form id="addCourseForm" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <TextField
                fullWidth
                label="Nom du cours"
                variant="outlined"
                name="nomCours"
                value={formValues.nomCours}
                onChange={handleInputChange}
                required
              />
              <TextField
                fullWidth
                label="Description"
                variant="outlined"
                name="descriptionCours"
                value={formValues.descriptionCours}
                onChange={handleInputChange}
                multiline
                rows={3}
                required
              />
              <FormControl fullWidth variant="outlined" required>
                <InputLabel>Niveau</InputLabel>
                <Select
                  label="Niveau"
                  name="niveauCours"
                  value={formValues.niveauCours}
                  onChange={handleInputChange}
                >
                  <MenuItem value="">
                    <em>Choisir un niveau</em>
                  </MenuItem>
                  <MenuItem value="debutant">Débutant</MenuItem>
                  <MenuItem value="intermediaire">Intermédiaire</MenuItem>
                  <MenuItem value="avance">Avancé</MenuItem>
                </Select>
              </FormControl>
              <TextField
                fullWidth
                label="Durée (en heures)"
                type="number"
                variant="outlined"
                name="dureeCours"
                value={formValues.dureeCours}
                onChange={handleInputChange}
                InputProps={{ inputProps: { min: 1 } }}
                required
              />
              <TextField
                fullWidth
                label="Prérequis"
                variant="outlined"
                name="prerequisCours"
                value={formValues.prerequisCours}
                onChange={handleInputChange}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ backgroundColor: 'rgb(4, 89, 180)', color: 'white' }}
              >
                Ajouter le cours
              </Button>
            </form>
          </Box>
        )}

        {tabIndex === 3 && (
          <Box sx={{ p: 2 }}>
            <Typography variant="h6"></Typography>
            <Box>
      <Typography variant="h6" gutterBottom>
      </Typography>
      <Table>
        <TableBody>
          {works.map((work) => (
            <TableRow key={work.id}>
              <TableCell>{work.title}</TableCell>
              <TableCell>{work.description}</TableCell>
              <TableCell align="right">{work.submissionDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
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
                    <TableCell colSpan={2} align="center">Aucun retour disponible</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Box>
        )}

        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
          {tabIndex === 0 && (
            <Link to="/FeedbackForm">
              <Button variant="contained" color="primary">
                Modifier
              </Button>
            </Link>
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
