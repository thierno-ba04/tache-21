import React, { useState, useEffect } from "react";
import { Archive, BoxArrowLeft, Envelope, JournalCode, ListNested, PeopleFill } from "react-bootstrap-icons";
import { BsBook } from "react-icons/bs";
import { FaFileAlt } from "react-icons/fa";
import { MdFilter9Plus, MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import { IoPerson } from "react-icons/io5";
import { GiBrain } from "react-icons/gi";
import { toast } from "react-toastify";
import { getAuth, signOut } from "firebase/auth";
import { db, storage, ref, uploadBytes, getDownloadURL, collection, addDoc, query, where, onSnapshot } from "../firebase/firebase";
import "./sidebar.css";

const SidebarEtudiant = () => {
  const [isSidebarActive, setSidebarActive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const commentsCollection = collection(db, "comments"); // Remplacez par le chemin correct de la collection
      const q = query(commentsCollection, where("user", "==", getAuth().currentUser.displayName));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const commentsData = querySnapshot.docs.map((doc) => doc.data());
        setComments(commentsData);
      });

      return () => unsubscribe();
    };

    fetchComments();
  }, []);

  const toggleSidebar = () => setSidebarActive(!isSidebarActive);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form submitted'); // Vérifiez si la fonction est appelée
    console.log(task, description, file); // Vérifiez les valeurs des champs
    
    if (!task || !description || !file) {
      toast.error("Veuillez remplir tous les champs.");
      return;
    }

    try {
      const storageRef = ref(storage, `uploads/${file.name}`);
      await uploadBytes(storageRef, file);
      const fileURL = await getDownloadURL(storageRef);

      await addDoc(collection(db, "livraisons"), {
        task,
        description,
        fileURL,
        user: getAuth().currentUser.displayName,
        timestamp: new Date(),
      });

      toast.success("Travail envoyé avec succès!");
      handleCloseModal();
    } catch (error) {
      toast.error("Erreur lors de l'envoi du travail: " + error.message);
    }
  };

  const handleFileChange = (e) => {
    console.log(e.target.files[0]); // Vérifiez le fichier sélectionné
    setFile(e.target.files[0]);
  };

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        toast.success("Déconnecté avec succès!");
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      })
      .catch((error) => {
        toast.error("Erreur lors de la déconnexion: " + error.message);
      });
  };

  return (
    <div className="mysiderbar">
      <header className="fixed-top">
        <div className="toggle ms-md-3 d-flex gap-3" onClick={toggleSidebar}>
          <span><ListNested size={20} /></span>
        </div>
        <button onClick={handleShowModal} className="modalsend">
          <div className="d-flex">
            <div><i className="fa-regular fa-paper-plane" style={{ color: 'blanc' }}></i></div>
            <div className="ms-3">ENVOYEZ VOTRE TRAVAIL</div>
          </div>
        </button>
        <div className="fw-bold me-md-4 d-flex align-items-center gap-4">
          <div className="fa-regular">
            <i className="fa-regular fa-bell"></i>
            {comments.length > 0 && (
              <div className="notification-count">{comments.length}</div>
            )}
          </div>
          <span>
            <Link to="/updProfileEtudiant">
              <div className="userIcon me-3 d-flex align-items-center"><IoPerson /></div>
            </Link>
          </span>
        </div>
      </header>
      <nav className={`sidebar ${isSidebarActive ? "active" : ""}`}>
        <ul>
          <li><Link className="toggle" onClick={toggleSidebar}><span className="icon"><ListNested size={20} /></span><span className="title">Menu</span></Link></li>
          <li><Link to="/dashboardetudiant"><span className="icon"><MdDashboard size={20} /></span><span className="title">Tableau de bord</span></Link></li>
          <li><Link to="/tache"><span className="icon"><BsBook size={20} /></span><span className="title">Tache</span></Link></li>
          <li><Link to="/programme"><span className="icon"><JournalCode size={20} /></span><span className="title">Programme</span></Link></li>
          <li><Link to="/demande"><span className="icon"><Envelope size={20} /></span><span className="title">Demande</span></Link></li>
          <li><Link to="/livraison"><span className="icon"><MdFilter9Plus size={20} /></span><span className="title">Livraison</span></Link></li>
          <li><Link to="/bulletinelv"><span className="icon"><FaFileAlt size={20} /></span><span className="title">Bulletin</span></Link></li>
          <li><Link to="/programmequizz"><span className="icon"><GiBrain size={30} /></span><span className="title">Test de Connaissance</span></Link></li>
          <li><Link className="out" onClick={handleLogout}><span className="icon"><BoxArrowLeft size={30} /></span><span className="title">Déconnecter</span></Link></li>
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
              <Form.Control as="select" value={task} onChange={(e) => setTask(e.target.value)}>
                <option value="">Sélectionnez une tâche...</option>
                <option value="tache1">Tâche 1</option>
                <option value="tache2">Tâche 2</option>
                <option value="tache3">Tâche 3</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formDescription" className="mt-3">
              <Form.Label>Description des livraisons</Form.Label>
              <Form.Control type="text" placeholder="Entrez la description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formFileUpload" className="mt-3">
              <Form.Label>Ajouter une image</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>
            <div className="mt-3 d-flex justify-content-center">
              <Button variant="primary" type="submit">Envoyer</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SidebarEtudiant;
