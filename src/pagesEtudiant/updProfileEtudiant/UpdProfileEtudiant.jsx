import { useState } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';

const UpdProfileEtudiant = () => {
    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        photo: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value
        });
    };

    const handlePhotoChange = (e) => {
        setProfile({
            ...profile,
            photo: e.target.files[0]
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic, e.g., upload to Firebase, etc.
        console.log('Profile updated:', profile);
    };

    return (
        <div style={{marginTop: "120px"}}>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <h2>Update Profile</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formFirstName">
                                <Form.Label></Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter first name" 
                                    name="firstName" 
                                    value={profile.firstName} 
                                    onChange={handleChange} 
                                />
                            </Form.Group>

                            <Form.Group controlId="formLastName">
                                <Form.Label></Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter last name" 
                                    name="lastName" 
                                    value={profile.lastName} 
                                    onChange={handleChange} 
                                />
                            </Form.Group>

                            <Form.Group controlId="formPhoneNumber">
                                <Form.Label></Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter phone number" 
                                    name="phoneNumber" 
                                    value={profile.phoneNumber} 
                                    onChange={handleChange} 
                                />
                            </Form.Group>

                            <Form.Group controlId="formPhoto">
                                <Form.Label></Form.Label>
                                <Form.Control 
                                    type="file" 
                                    name="photo" 
                                    onChange={handlePhotoChange} 
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Update Profile
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default UpdProfileEtudiant;
