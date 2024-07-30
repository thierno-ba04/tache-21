import { Col, Container, Row } from "react-bootstrap";
import SidebarEtudiant from "../../components/SidebarEtudiant";
import { MdOutlineDoneOutline, MdOutlineSupervisorAccount } from "react-icons/md";
import "./dashboard.css";
import { FaFileAlt } from "react-icons/fa";
import { BsBook } from "react-icons/bs";

const DashboardEtudiant = () => {
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
                  <p>Nombre de toutes les tache</p>
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
            <div className="main-card main-card2">
              <h5>Taches Validées</h5>
              <p>Nombres de Tache validées</p>
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
      </Container>
    </div>
  );
};

export default DashboardEtudiant;
