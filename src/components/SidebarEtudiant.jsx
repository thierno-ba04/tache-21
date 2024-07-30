import React, { useState } from "react";
import {
  Archive,
  BoxArrowLeft,
  Envelope,
  JournalCode,
  ListNested,
  PeopleFill,
} from "react-bootstrap-icons";
import { BsBook } from "react-icons/bs";
import { FaFileAlt } from "react-icons/fa";
import { MdFilter9Plus } from "react-icons/md";

import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import { Modal, Button, Form, Badge } from "react-bootstrap";
import "./sidebar.css";
import { IoIosNotifications } from "react-icons/io";
import { IoPerson } from "react-icons/io5";

const SidebarEtudiant = () => {
  const [isSidebarActive, setSidebarActive] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!isSidebarActive);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    handleCloseModal();
  };

  return (
    <div className="mysiderbar">
      <header className="fixed-top">
        <div className="toggle ms-md-3 d-flex gap-3" onClick={toggleSidebar}>
          <span>
            <ListNested size={20} />
          </span>
        </div>
        <button onClick={handleShowModal} className="modalsend">
          <div className="d-flex">
            <div>
              <i className="fa-regular fa-paper-plane" style={{ color: 'white' }}></i>
            </div>
            <div className="ms-3">ENVOYER VOTRE TRAVAIL</div>
          </div>
        </button>

        <div className="fw-bold me-md-4 d-flex align-items-center gap-4">
          <div className="fa-regular">
            <i className="fa-regular fa-bell"></i>
          </div>
          <span>
            <Link to="/updProfileEtudiant">
              <div>
                <div className="userIcon me-3 d-flex align-items-center">
                <IoPerson />
                </div>
              </div>
            </Link>
          </span>
        </div>
      </header>

      <nav className={`sidebar ${isSidebarActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link className="toggle" onClick={toggleSidebar}>
              <span className="icon">
                <ListNested size={20} />
              </span>
              <span className="title">Menu</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboardEtudiant">
              <span className="icon">
                <MdDashboard size={20} />
              </span>
              <span className="title">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/tache">
              <span className="icon">
                <BsBook size={20} />
              </span>
              <span className="title">Tache</span>
            </Link>
          </li>
          <li>
            <Link to="/programme">
              <span className="icon">
                <JournalCode size={20} />
              </span>
              <span className="title">Programme</span>
            </Link>
          </li>
          <li>
            <Link to="/demande">
              <span className="icon">
                <Envelope size={20} />
              </span>
              <span className="title">Demande</span>
            </Link>
          </li>
          <li>
            <Link to="/livraison">
              <span className="icon">
                <MdFilter9Plus size={20} />
              </span>
              <span className="title">Livraison</span>
            </Link>
          </li>
          <li>
            <Link to="/bulletin">
              <span className="icon">
                <FaFileAlt size={20} />
              </span>
              <span className="title">Bulletin</span>
            </Link>
          </li>
          <li>
            <Link className="out">
              <span className="icon">
                <BoxArrowLeft size={30} />
              </span>
              <span className="title">Deconnecter</span>
            </Link>
          </li>
        </ul>
      </nav>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Envoyer Mon travail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTaskSelect">
              <Form.Label>Choisissez une tâche</Form.Label>
              <Form.Control as="select">
                <option value="">Sélectionnez une tâche...</option>
                <option value="tache1">Tâche 1</option>
                <option value="tache2">Tâche 2</option>
                <option value="tache3">Tâche 3</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formDescription" className="mt-3">
              <Form.Label>Description des livraisons</Form.Label>
              <Form.Control type="text" placeholder="Entrez la description" />
            </Form.Group>

            <Form.Group controlId="formFileUpload" className="mt-3">
              <Form.Label>Ajouter une image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
              <div className="mt-3 d-flex justify-content-center">
              <Button variant="primary" type="submit" >
              Envoyer
            </Button>
              </div>
          
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SidebarEtudiant;
