import React, { useEffect, useState } from "react";
import { database } from "./firebase";
import { addDoc, collection, doc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
import { Button, TextField, Card, CardContent, Typography, Container, Stepper, Step, StepLabel, Box } from '@mui/material';

const FeedbackForm = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [formValues, setFormValues] = useState({
    nom: '',
    prenom: '',
    email: '',
    numero: '',
    adresse: '',
    niveauclasse: ''
  });
  const [editId, setEditId] = useState(null);
  const [step, setStep] = useState(1);
  const [showFeedbackList, setShowFeedbackList] = useState(false); // Nouvel état pour la visibilité

  const steps = ["Informations Personnelles", "Contact", "Adresse & Niveau"];

  const fetchFeedbacks = async () => {
    try {
      const feedbacksCollection = collection(doc(database, "eleves", 'posts'), "feedbacks");
      const feedbacksSnapshot = await getDocs(feedbacksCollection);
      const feedbacksList = feedbacksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setFeedbacks(feedbacksList);
    } catch (error) {
      console.error("Error fetching feedbacks: ", error);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleAdd = async () => {
    try {
      const feedbackCollection = collection(doc(database, "eleves", 'posts'), "feedbacks");
      await addDoc(feedbackCollection, formValues);
      fetchFeedbacks();
      setFormValues({
        nom: '',
        prenom: '',
        email: '',
        numero: '',
        adresse: '',
        niveauclasse: ''
      });
    } catch (error) {
      console.error("Error adding feedback: ", error);
    }
  };

  const handleEdit = async () => {
    try {
      const feedbackRef = doc(database, "eleves", 'posts', "feedbacks", editId);
      await updateDoc(feedbackRef, formValues);
      fetchFeedbacks();
      setEditId(null);
      setFormValues({
        nom: '',
        prenom: '',
        email: '',
        numero: '',
        adresse: '',
        niveauclasse: ''
      });
    } catch (error) {
      console.error("Error updating feedback: ", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(database, "eleves", 'posts', "feedbacks", id));
      fetchFeedbacks();
    } catch (error) {
      console.error("Error deleting feedback: ", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      handleEdit();
    } else {
      handleAdd();
    }
  };

  const handleEditClick = (feedback) => {
    setEditId(feedback.id);
    setFormValues(feedback);
    setStep(1);
  };

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 1:
        return (
          <>
            <TextField
              label="Nom"
              name="nom"
              value={formValues.nom}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              label="Prénom"
              name="prenom"
              value={formValues.prenom}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
            />
          </>
        );
      case 2:
        return (
          <>
            <TextField
              label="Email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              type="email"
              fullWidth
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              label="Numéro"
              name="numero"
              value={formValues.numero}
              onChange={handleChange}
              type="tel"
              fullWidth
              margin="normal"
              variant="outlined"
              required
            />
          </>
        );
      case 3:
        return (
          <>
            <TextField
              label="Adresse"
              name="adresse"
              value={formValues.adresse}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              label="Niveau Classe"
              name="niveauclasse"
              value={formValues.niveauclasse}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
            />
          </>
        );
      default:
        return <div>Étape inconnue</div>;
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Modifier  un Etudiants
      </Typography>
      <Card variant="outlined" style={{ marginTop: '16px' }}>
        <CardContent>
          <Stepper activeStep={step - 1} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <form onSubmit={handleSubmit}>
            {renderStepContent(step)}

            <Box display="flex" justifyContent="space-between" marginTop="16px">
              {step > 1 && (
                <Button variant="outlined" color="primary" onClick={prevStep}>
                  Précédent
                </Button>
              )}
              {step < 3 && (
                <Button variant="contained" color="primary" onClick={nextStep}>
                  Suivant
                </Button>
              )}
              {step === 3 && (
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  {editId ? 'Modifier' : 'Ajouter'} Etudiants
                </Button>
              )}
            </Box>
          </form>
        </CardContent>
      </Card>

      <Button
        variant="contained"
        color="secondary"
        onClick={() => setShowFeedbackList(!showFeedbackList)}
        style={{ marginTop: '16px' }}
      >
        {showFeedbackList ? 'Masquer la Liste à modifiers' : 'Afficher la Liste des etudiants à modifiers'}
      </Button>

      {showFeedbackList && (
        <div className="mt-5">
          <Typography variant="h5" gutterBottom>
            Liste des Etudiants
          </Typography>
          {feedbacks.map(feedback => (
            <Card key={feedback.id} style={{ marginBottom: '16px' }}>
              <CardContent>
                <Typography variant="h6">{feedback.nom} {feedback.prenom}</Typography>
                <Typography>Email: {feedback.email}</Typography>
                <Typography>Numéro: {feedback.numero}</Typography>
                <Typography>Adresse: {feedback.adresse}</Typography>
                <Typography>Niveau Classe: {feedback.niveauclasse}</Typography>
                <Box display="flex" justifyContent="flex-end" marginTop="8px">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEditClick(feedback)}
                  >
                    Modifier
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleDelete(feedback.id)}
                    style={{ marginLeft: '8px' }}
                  >
                    Supprimer
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </Container>
  );
};

export default FeedbackForm;
