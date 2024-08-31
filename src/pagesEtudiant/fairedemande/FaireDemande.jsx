import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { db } from '../../firebase/firebase'; // Assurez-vous que le chemin est correct
import { collection, addDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify'; // Importer react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Importer le style
import './fairedemande.css';

const FaireDemande = () => {
    const [demandeType, setDemandeType] = useState("");
    const [demandeMotif, setDemandeMotif] = useState("");
    const [dateDebut, setDateDebut] = useState("");
    const [dateFin, setDateFin] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Vérifier que tous les champs sont remplis
        if (!demandeType || !demandeMotif || !dateDebut || !dateFin) {
            toast.error('Veuillez remplir tous les champs.'); // Notification d'erreur
            return;
        }

        try {
            await addDoc(collection(db, 'demande'), {
                demandeType,
                demandeMotif,
                dateDebut,
                dateFin
            });
            toast.success('Demande envoyée avec succès!'); // Notification de succès

            // Réinitialiser les champs du formulaire
            setDemandeType("");
            setDemandeMotif("");
            setDateDebut("");
            setDateFin("");
        } catch (error) {
            console.error("Erreur lors de l'envoi de la demande: ", error);
            toast.error('Erreur lors de l\'envoi de la demande.'); // Notification d'erreur
        }
    };

    return (
        <div className="" style={{ paddingTop: "120px" }}>
            <Container>
                <Row>
                    <Col lg={4} md={6}>
                        <div className="dashboarddemandeabsences">
                            <p>tableau de bord/ demandes d'absences</p>
                        </div>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center align-items-center" style={{ marginTop: "50px" }}>
                    <Col md={8}>
                        <Table bordered className="table-shadow">
                            <tbody>
                                <tr>
                                    <td>
                                        <Form.Group controlId="demandeType">
                                            <Form.Label className='fs-5 fw-bold'>Type de demande</Form.Label>
                                            <Form.Control
                                                as="select"
                                                value={demandeType}
                                                onChange={(e) => setDemandeType(e.target.value)}
                                                required
                                            >
                                                <option value="">Sélectionnez un type de demande</option>
                                                <option value="Absence">Absence</option>
                                                <option value="Changement d'horaire">Changement d'horaire</option>
                                                <option value="Abandon">Abandon</option>
                                                <option value="Pause">Pause</option>
                                                <option value="Formation">Formation</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Form.Group controlId="demandeMotif">
                                            <Form.Label className='fs-5 fw-bold'>Motif de votre demande</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Entrez le motif de votre demande"
                                                value={demandeMotif}
                                                onChange={(e) => setDemandeMotif(e.target.value)}
                                                required
                                            />
                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group controlId="dateDebut">
                                                    <Form.Label>Date de début</Form.Label>
                                                    <Form.Control
                                                        type="date"
                                                        value={dateDebut}
                                                        onChange={(e) => setDateDebut(e.target.value)}
                                                        required
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="dateFin">
                                                    <Form.Label>Date de fin</Form.Label>
                                                    <Form.Control
                                                        type="date"
                                                        value={dateFin}
                                                        onChange={(e) => setDateFin(e.target.value)}
                                                        required
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex gap-5">
                                            <Button variant="primary" type="button" className="w-75">Annuler</Button>
                                            <Button variant="success" type="submit" className="w-75" onClick={handleSubmit}>Envoyer</Button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
            <ToastContainer /> {/* Ajouter le composant ToastContainer */}
        </div>
    );
}

export default FaireDemande;
