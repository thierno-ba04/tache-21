import React, { useEffect, useState } from "react";
import { db, storage } from "./firebase/firebase";
import { addDoc, collection, doc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { Button, TextField, Card, CardContent, Typography, Container, Stepper, Step, StepLabel } from '@mui/material';
import './FormulaireAjoutEleves.css';

const steps = ['Informations Personnelles', 'Coordonnées', 'Classe et Image'];

const FeedbacksManager = () => {
  const [img, setImage] = useState(null);
  const [imgUrl, setImgUrl] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [editId, setEditId] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState({
    nom: '',
    prenom: '',
    email: '',
    numero: '',
    adresse: '',
    niveauclasse: ''
  });

  const handleUpload = async () => {
    if (!img) {
      console.error("No image selected");
      return;
    }

    try {
      const imageRef = ref(storage, `files/${uuidv4()}`);
      await uploadBytes(imageRef, img);
      console.log("Image uploaded successfully");
      fetchImages();
    } catch (error) {
      console.error("Error uploading image: ", error);
    }
  };

  const fetchImages = async () => {
    try {
      const imgs = await listAll(ref(storage, "files"));
      const urls = await Promise.all(
        imgs.items.map(item => getDownloadURL(item))
      );
      setImgUrl(urls);
    } catch (error) {
      console.error("Error fetching images: ", error);
    }
  };

  const fetchFeedbacks = async () => {
    try {
      const feedbacksCollection = collection(doc(db, "eleves", 'posts'), "feedbacks");
      const feedbacksSnapshot = await getDocs(feedbacksCollection);
      const feedbacksList = feedbacksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setFeedbacks(feedbacksList);
    } catch (error) {
      console.error("Error fetching feedbacks: ", error);
    }
  };

  useEffect(() => {
    fetchImages();
    fetchFeedbacks();
  }, []);

  const handleAdds = async (e) => {
    e.preventDefault();

    try {
      const val = doc(db, "eleves", 'posts');
      const collectinval = collection(val, "feedbacks");
      await addDoc(collectinval, {
        ...formValues
      });
      console.log("Feedback added successfully");
      fetchFeedbacks();
      setActiveStep(0); // Reset step after adding
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

  const handleEdit = async (e) => {
    e.preventDefault();
    
    if (!editId) {
      console.error("No feedback selected for editing");
      return;
    }
    
    try {
      const feedbackRef = doc(db, "eleves", 'posts', "feedbacks", editId);
      await updateDoc(feedbackRef, {
        ...formValues
      });
      console.log("Feedback updated successfully");
      setEditId(null);
      setFormValues({
        nom: '',
        prenom: '',
        email: '',
        numero: '',
        adresse: '',
        niveauclasse: ''
      });
      fetchFeedbacks();
      setActiveStep(0); // Reset step after editing
    } catch (error) {
      console.error("Error updating feedback: ", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "eleves", 'posts', "feedbacks", id));
      console.log("Feedback deleted successfully");
      fetchFeedbacks();
    } catch (error) {
      console.error("Error deleting feedback: ", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleNext = () => {
    setActiveStep(prevStep => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevStep => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      handleEdit(e);
    } else {
      handleAdds(e);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Ajouter un étudiant
      </Typography>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Card variant="outlined" style={{ marginTop: '16px' }}>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {activeStep === 0 && (
              <div>
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
              </div>
            )}
            {activeStep === 1 && (
              <div>
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
              </div>
            )}
            {activeStep === 2 && (
              <div>
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
                <input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                  style={{ marginTop: '16px' }}
                />
                <Button
                  variant="contained"
                  onClick={handleUpload}
                  style={{ marginTop: '8px' }}
                >
                  Upload
                </Button>
              </div>
            )}
            <div style={{ marginTop: '16px' }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                style={{ marginRight: '8px' }}
              >
                Back
              </Button>
              {activeStep === steps.length - 1 ? (
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  Next
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>




    </Container>
  );
};

export default FeedbacksManager;
