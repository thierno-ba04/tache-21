import { Col, Container, Pagination, Row } from "react-bootstrap";
import "./livraison.css";
import capture1 from "../../assets/img/164153.png";

const cardData = [
  {
    id: 1,
    title: "Tache N1",
    description: "Tâche 01 : Les bases du HTML5",
    imgSrc: capture1,
  },
  {
    id: 2,
    title: "Tache N2",
    description: "Tâche 02 : Les bases du CSS3",
    imgSrc: capture1,
  },

  {
    id: 3,
    title: "Tache N3",
    description: "Tâche 03 : Les bases du CSS3",
    imgSrc: capture1,
  },

  {
    id: 4,
    title: "Tache N4",
    description: "Tâche 04 : Les bases du CSS3",
    imgSrc: capture1,
  },

  {
    id: 5,
    title: "Tache N5",
    description: "Tâche 05 : Les bases du CSS3",
    imgSrc: capture1,
  },

  {
    id: 6,
    title: "Tache N6",
    description: "Tâche 06 : Les bases du CSS3",
    imgSrc: capture1,
  },

  {
    id: 7,
    title: "Tache N7",
    description: "Tâche 07 : Les bases du CSS3 ",
    imgSrc: capture1,
  },

  {
    id: 8,
    title: "Tache N8",
    description: "Tâche 08 : Les bases du CSS3 ",
    imgSrc: capture1,
  },

  {
    id: 9,
    title: "Tache N9",
    description: "Tâche 09 : Les bases du CSS3",
    imgSrc: capture1,
  },
  // Add more items as needed
];

const Livraison = () => {
   // Fonction pour générer les items de pagination
   const renderPaginationItems = () => {
    let items = [];
    for (let number = 1; number <= 10; number++) {
      items.push(
        <Pagination.Item key={number} active={number === 1}>
          {number}
        </Pagination.Item>
      );
    }
    return items;
  };



  return (
    <div className="livraison-container" style={{ paddingTop: "130px" }}>
         <Container>
        <Row>
          <Col md={4}>
            <div className="dashboarddemaandeabsences">
              <p>dashboard/ details livraison</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
      <div className="" style={{ paddingTop: "90px" }}>
        <Row className=" ms-5 gy-5 d-flex justify-content-center">
          {cardData.map((card) => (
            <Col lg={4} md={6} key={card.id}>
              <div className="card-wrapper">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={card.imgSrc} alt={card.title} />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.description}</p>
                    <div className="d-flex gap-3">
                      <a href="#" className="btn btn-primary">
                        commentaire
                      </a>
                      <a href="#" className="btn btn-success">
                        livrables
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Row className="mt-5">
          <Col>
            <Pagination>{renderPaginationItems()}</Pagination>
          </Col>
        </Row>
        </div>
      </Container>
    </div>
  );
};

export default Livraison;
