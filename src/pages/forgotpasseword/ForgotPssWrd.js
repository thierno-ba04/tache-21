import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import "./forgotpsswrd.css";
import imglearning from "../../assets/img/education-technology-logo-design-vector.jpg";

function ForgotPssWrd() {
  const [email, setEmail] = useState("");
  const [errorMss, setErrorMss] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const auth = getAuth(); // Initialize Firebase Auth

  // Fonction pour valider l'email
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Fonction pour gérer les changements dans le champ email
  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);

    if (isValidEmail(emailValue)) {
      setIsButtonDisabled(false);
      setErrorMss("");
    } else {
      setIsButtonDisabled(true);
      setErrorMss("Veuillez entrer un email valide");
    }
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isValidEmail(email)) {
      try {
        await sendPasswordResetEmail(auth, email);
        toast.success(
          "Un email de récupération a été envoyé si l'email est associé à un compte."
        );
        setEmail(""); // Réinitialiser le champ email
        setIsButtonDisabled(true); // Désactiver le bouton
      } catch (error) {
        console.error("Erreur de récupération de mot de passe :", error);
        toast.error("Une erreur est survenue. Veuillez réessayer.");
      }
    } else {
      setErrorMss("Veuillez entrer un email valide");
    }
  };

  return (
    <div>
      <Container fluid>
        <Row className="password ">
          <Col sm={6} md={6} className="forgotBox">
            <div className="text-center">
              <h3 className="shadow header-pwd p-0">
                <span>Récupération du mot de passe</span>
              </h3>
              <p className="bg-text text-center">
                Afin de protéger votre compte, <br /> On veut s'assurer que
                c'est bien vous qui <br /> essayez de vous connecter
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <input
                type="email"
                placeholder="Entrer votre email"
                className="input2 rounded-pill"
                value={email}
                onChange={handleEmailChange}
              />
              <input
                type="submit"
                className="my-1 text-white input-rcp rounded-pill"
                value="Récupérer"
                disabled={isButtonDisabled}
              />
            </form>

            <div className="alert animate__animated animate__backInDown">
              <div className="text-center animate__animated animate__backInDown">
                {errorMss}
              </div>
            </div>
            <ToastContainer />
          </Col>
          <Col sm={6} md={6} className="body">
            <div className="text-center align-items-center pt-4">
              <img src={imglearning} alt="e-learning" className="learningimg" />
              <h3>Oneline E-Learning</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ForgotPssWrd;
