// CoursPrfs.js
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button, Form, Modal } from "react-bootstrap";
import { LiaFileExportSolid } from 'react-icons/lia';
import { Link } from "react-router-dom";
import { db, collection, getDocs, addDoc, storage, ref, uploadBytes, getDownloadURL } from '../../../../firebase/firebase';
import './coursprfs.css';
import { saveAs } from 'file-saver';

function CoursPrfs() {
  const [courses, setCourses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newCourse, setNewCourse] = useState({ name: '', img: '' });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [imageFile, setImageFile] = useState(null);
  

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesCollection = collection(db, 'courses');
        const courseSnapshot = await getDocs(coursesCollection);
        const coursesList = courseSnapshot.docs.map(doc => doc.data());
        setCourses(coursesList);
      } catch (error) {
        console.error('Error fetching courses: ', error);
      }
    };

    fetchCourses();
  }, []);

  // Fonction pour convertir les données en CSV
const convertToCSV = (data, fields) => {
  const header = fields.join(',');
  const rows = data.map(item =>
    fields.map(field => `"${item[field] || ''}"`).join(',')
  );
  return [header, ...rows].join('\n');
};

  const handleExport = () => {
    // Fonctionnalité d'exportation en CSV
    const fields = ['name', 'img']; // Champs à inclure dans le CSV
    const csv = convertToCSV(courses, fields);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'courses.csv');
    console.log('Exporting to CSV...');
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse(prevState => ({ ...prevState, [name]: value }));
    setIsButtonDisabled(newCourse.name === '' || newCourse.img === '');
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleAddCourse = async (e) => {
    e.preventDefault();
    try {
      let imageUrl = '';
      if (imageFile) {
        // Téléversement de l'image vers Firebase Storage
        const storageRef = ref(storage, `images/${imageFile.name}`);
        await uploadBytes(storageRef, imageFile);
        imageUrl = await getDownloadURL(storageRef);
      }

      // Ajouter le cours à Firestore
      await addDoc(collection(db, 'courses'), {
        name: newCourse.name,
        img: imageUrl || newCourse.img,
      });

      // Réinitialiser le formulaire
      setNewCourse({ name: '', img: '' });
      setImageFile(null);
      setShowModal(false);

      // Re-fetch courses to update the list
      const coursesCollection = collection(db, 'courses');
      const courseSnapshot = await getDocs(coursesCollection);
      const coursesList = courseSnapshot.docs.map(doc => doc.data());
      setCourses(coursesList);
    } catch (error) {
      console.error('Error adding course: ', error);
    }
  };

  return (
    <Container>
      <Row>
        <Col lg={1} md={1}></Col>
        <Col lg={10} md={10}>
          <div className="classe mt-3">
            <h6>Liste des Domaines</h6>
            <div className="mt-3">
             
              <Button className="m-auto" onClick={handleShow}>
                Ajouter un Cours
              </Button>
              <Button className="ms-3" onClick={handleExport}>
                <LiaFileExportSolid className="buttexport me-2 mb-1" /> Imprimer to CSV
              </Button>
            </div>
          </div>
        </Col>
        <Col lg={1} md={1}></Col>

        {courses.map((course, index) => (
          <Col lg={5} md={5} className="mt-5 m-auto" key={index}>
            <div className="div_h4 mt-5">
              <h4>{course.name}</h4>
            </div>
            <Link to="/mescours">
              <div className="card">
                <img src={course.img} alt={course.name} className="coursimg" />
              </div>
            </Link>
          </Col>
        ))}
      </Row>

      {/* Modal for Adding a New Course */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un Cours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddCourse}>
            <Form.Group className="mb-3" controlId="courseName">
              <Form.Label>Nom du Cours</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nom du cours"
                name="name"
                value={newCourse.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="courseImg">
              <Form.Label>URL de l'Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="URL de l'image"
                name="img"
                value={newCourse.img}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="courseImageFile">
              <Form.Label>Choisir une image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={isButtonDisabled}>
              Ajouter
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default CoursPrfs;
