import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdOutlineDoneOutline } from "react-icons/md";
import "./dashboard.css";
import { FaFileAlt, FaSearch } from "react-icons/fa";
import { BsBook } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";
import capture1 from "../../assets/img/Capture d'écran 2024-07-11 171047.png";
import capture2 from "../../assets/img/Capture d'écran 2024-07-23 171650.png";

const DashboardEtudiant = () => {
  const [livraisons, setLivraisons] = useState([
    {
      id: 1,
      nom: "Thierno Ba",
      date: "31 juil 2024, 15:41",
      titre: "Props et cycle de vie d'un composant class",
      images: [capture1, capture2],
      commentaires: [],
      commentaireTexte: "",
    },
    {
      id: 2,
      nom: "Faty",
      date: "28 juil 2024, 10:41",
      titre: "Les bases du html & css",
      images: [capture1, capture2],
      commentaires: [],
      commentaireTexte: "",
    },
  ]);

  const handleCommentSubmit = (e, livraisonId) => {
    e.preventDefault();
    setLivraisons((prevLivraisons) =>
      prevLivraisons.map((livraison) =>
        livraison.id === livraisonId && livraison.commentaireTexte.trim() !== ""
          ? {
              ...livraison,
              commentaires: [...livraison.commentaires, livraison.commentaireTexte],
              commentaireTexte: "",
            }
          : livraison
      )
    );
  };

  const handleInputChange = (e, livraisonId) => {
    const { value } = e.target;
    setLivraisons((prevLivraisons) =>
      prevLivraisons.map((livraison) =>
        livraison.id === livraisonId
          ? { ...livraison, commentaireTexte: value }
          : livraison
      )
    );
  };

  return (
    <div className="main">
      <Container>
        <Row>
          <Col lg={4} md={4}>
            <div className="main-card">
              <h6>Année Scolaire 2020/2021</h6>
              <div className="div_mer">
                <div className="div-1">
                  <h5>TACHE</h5>
                  <p>Nombre de toutes les taches</p>
                  <h1>69</h1>
                  <span className="icones-perso">
                    <BsBook size={50} />
                  </span>
                </div>
                <div className="border"></div>
                <div className="div-2">
                  <h2>69</h2>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div className="main-card2-bg main-card2">
              <h5>Taches Validées</h5>
              <p>Nombre de Taches validées</p>
              <h4>37/68</h4>
              <span className="icones-perso2">
                <MdOutlineDoneOutline size={55} />
              </span>
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div className="main-card main-card2">
              <h5>Programme</h5>
              <p>Liste Programme</p>
              <h4>6</h4>
              <span className="icones-perso2">
                <FaFileAlt size={55} />
              </span>
            </div>
          </Col>
        </Row>

        <Row className="">
          <Col md={12} className="mt-5">
            <div className="searchdate d-flex">
              <div className="input-search mt-4 ms-5">
                <FaSearch size={20} />
              </div>
              <div className="input-search mt-4">
                <input
                  type="search"
                  className="search-input"
                  placeholder="Recherche"
                   />
              </div>
              <div className="date-input-container mt-4">
                <input type="date" />
              </div>
            </div>
          </Col>
        </Row>

        {livraisons.map((livraison) => (
          <div key={livraison.id} className="mere-dashboard-livr mt-5">
            <Row className="mt-5">
              <Col md={4} className="mt-5">
                <div className="d-flex gap-5">
                  <div className="ms-3">
                    <IoPersonSharp />
                  </div>
                  <div>
                    <h4>{livraison.nom}</h4>
                  </div>
                  <div>
                    <p>{livraison.date}</p>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col md={4}>
                <h5 className="h5textpropsetcycle">{livraison.titre}</h5>
              </Col>
            </Row>
            <Row className="mt-5">
              {livraison.images.map((image, index) => (
                <Col md={6} key={index}>
                  <div className="">
                    <img src={image} alt="" className="capture1" />
                  </div>
                </Col>
              ))}
            </Row>
                <Row>
              <Col md={12} className="mt-3">
                {livraison.commentaires.map((comm, index) => (
                  <div key={index} className="commentaire mt-3">
                    <p>{comm}</p>
                  </div>
                ))}
              </Col>
            </Row>

            <Row>
              <Col md={12} className="mt-5">
                <div className="input-commentaire d-flex">
                  <form
                    onSubmit={(e) => handleCommentSubmit(e, livraison.id)}
                    className="d-flex w-100"
                  >
                    <div className="input-comment mt-3 ms-5 w-100">
                      <input
                        type="text"
                        className="search-input w-100"
                        placeholder="Commentaire"
                        value={livraison.commentaireTexte}
                        onChange={(e) => handleInputChange(e, livraison.id)}
                      />
                    </div>
                  </form>
                </div>
              </Col>
            </Row>

          
          </div>
        ))}
      </Container>
    </div>
  );
};

export default DashboardEtudiant;
