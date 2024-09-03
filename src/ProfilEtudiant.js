import React, { useEffect, useState } from "react";
import { Box, Typography, Breadcrumbs, Link, Avatar, Button as MuiButton, CircularProgress, Card, CardContent } from "@mui/material";
import { Form, ProgressBar } from 'react-bootstrap';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { useNavigate, useParams } from "react-router-dom";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { database } from "./firebase";
import Sidebar from "./Sidebar";
import Img from './gervais.JPG';
import "./ProfilEtudiant.css"; // Ensure custom styles are loaded last

const ProfilEtudiant = () => {
    const [loading, setLoading] = useState(true);
    const [step, setStep] = useState(1);
    const [studentData, setStudentData] = useState({});
    const [feedbacks, setFeedbacks] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch student data
                const studentRef = doc(database, "eleves", id);
                const studentDoc = await getDoc(studentRef);
                if (studentDoc.exists()) {
                    setStudentData(studentDoc.data());
                } else {
                    console.error("No such student!");
                }

                // Fetch feedback data
                const feedbackCollection = collection(studentRef, "feedbacks");
                const feedbackDocs = await getDocs(feedbackCollection);
                setFeedbacks(feedbackDocs.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                
            } catch (error) {
                console.error("Error fetching data: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    const handleNext = () => setStep(step + 1);
    const handlePrevious = () => setStep(step - 1);

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission
    };

    return (
        <Box sx={{ display: "flex" }}>
            <Sidebar />
            {loading ? (
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh" }}>
                    <CircularProgress size={70} sx={{ color: "#2979ff" }} />
                </Box>
            ) : (
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 4 }}>
                        <Link underline="hover" color="inherit" onClick={() => navigate('/')}>
                            Dashboard
                        </Link>
                        <Link underline="hover" color="inherit" onClick={() => navigate('/Eleves')}>
                            Étudiants
                        </Link>
                        <Typography color="text.primary">Profile Étudiants</Typography>
                    </Breadcrumbs>

                    <Box className="profile-card" sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, mb: 4 }}>
                        <Box className="profile-sidebar" sx={{ mr: 4, mb: { xs: 4, md: 0 }, textAlign: "center" }}>
                            <Avatar 
                                src={studentData.profilePicture || Img} // Fallback to default image
                                alt="Photo de profil" 
                                sx={{ 
                                    width: 128, 
                                    height: 128, 
                                    mb: 2, 
                                    borderRadius: "50%", 
                                    border: "3px solid #2979ff", 
                                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" 
                                }} 
                            />
                            <Typography variant="h5" sx={{ mb: 2 }}>{studentData.name || "Nom de l'étudiant"}</Typography>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                <MuiButton variant="outlined" onClick={() => { /* Edit profile logic */ }}>Modifier</MuiButton>
                                <MuiButton variant="contained" onClick={() => navigate('/AjouteruneTache')}>Ajouter une tâche</MuiButton>
                            </Box>
                        </Box>

                        <Box className="profile-main" sx={{ flexGrow: 1 }}>
                            <Form onSubmit={handleSubmit}>
                                <ProgressBar now={(step / 2) * 100} />
                                {step === 1 && (
                                    <Form.Group controlId="formStep1">
                                        <Typography variant="h6" sx={{ mb: 2 }}>Informations de Contact</Typography>
                                        <ul className="list-unstyled">
                                            <li><EmailIcon sx={{ mr: 1 }} /> {studentData.email || "email@example.com"}</li>
                                            <li><LocalPhoneIcon sx={{ mr: 1 }} /> {studentData.phone || "(123) 456-7890"}</li>
                                            <li><FmdGoodIcon sx={{ mr: 1 }} /> {studentData.address || "Adresse"}</li>
                                        </ul>
                                    </Form.Group>
                                )}
                                {step === 2 && (
                                    <Form.Group controlId="formStep3">
                                        <Typography variant="h6" sx={{ mb: 2 }}>Message</Typography>
                                        <textarea id="messageText" rows="3" placeholder="Écrivez votre message ici..." style={{ width: "100%", padding: "10px" }} />
                                    </Form.Group>
                                )}
                                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
                                    {step > 1 && (
                                        <MuiButton variant="outlined" onClick={handlePrevious}>Précédent</MuiButton>
                                    )}
                                    {step < 2 ? (
                                        <MuiButton variant="contained" onClick={handleNext}>Suivant</MuiButton>
                                    ) : (
                                        <MuiButton variant="contained" type="submit">Terminé</MuiButton>
                                    )}
                                </Box>
                            </Form>
                        </Box>
                    </Box>

                    <Typography variant="h6" sx={{ mb: 2 }}>Feedbacks</Typography>
                    {feedbacks.length > 0 ? (
                        feedbacks.map(feedback => (
                            <Card key={feedback.id} sx={{ mb: 2 }}>
                                <CardContent>
                                    <Typography variant="body1"><strong>Nom:</strong> {feedback.name}</Typography>
                                    <Typography variant="body1"><strong>Email:</strong> {feedback.email}</Typography>
                                    <Typography variant="body1"><strong>Numéro:</strong> {feedback.phone}</Typography>
                                    <Typography variant="body1"><strong>Classe:</strong> {feedback.class}</Typography>
                                    <Typography variant="body1"><strong>Message:</strong> {feedback.message}</Typography>
                                    <Typography variant="caption" color="textSecondary">
                                        {new Date(feedback.timestamp?.toDate()).toLocaleDateString()}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        <Typography variant="body2">Aucun feedback disponible.</Typography>
                    )}
                </Box>
            )}
        </Box>
    );
};

export default ProfilEtudiant;
