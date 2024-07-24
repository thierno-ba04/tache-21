import React, { useRef, useState } from 'react'
import { Col, Container, Row, ToastContainer } from 'react-bootstrap';
import { toast } from 'react-toastify';
import "./forgotpsswrd.css";
import imglearning  from "../../assets/img/logo (2).png";


function ForgotPssWrd() {
    const [values, setValues] = useState({
        email: '',
      });

    const emailRef = useRef();

    const [errorMss, setErrorMss] = useState(false);

//     const notifySuccess = () =>
//         toast.success("Un email de réinitialisation a été envoyé !");

//     const notifyError = () =>
//         toast.error("Une erreur s'est produite lors de l'envoi de l'email de réinitialisation.");

//     const forgotPasswordHandler = () => {
//     const email = emailRef.current.value;
//     if (email) {
//         ForgotPssWrd(email)
//         .then(() => {
//           emailRef.current.value = '';
//           setErrorMss(false);
//           notifySuccess();
//         })
//         .catch((error) => {
//           notifyError();
//         });
//     } else if (values.email === '') {
//       notifyError();
//     }
//   };

  return (
    <div>
    <Container fluid >
      <Row className='password shadow'>
        <Col sm={6} md={6} className='forgotBox'>
        <div className='text-center'>
          <h3 className='shadow header-pwd p-1'>
            <span>Récupération du mot de passe</span>
          </h3>
          <p className='bg-text text-center'>
            Afin de protéger votre compte, <br /> On veut s'assurer que c'est bien vous qui <br /> essayez de vous
            connecter
          </p>
        </div>
      <div className='d-flex flex-column justify-content-center align-items-center'>
          <input
            ref={emailRef}
            type='text'
            placeholder='Entrer votre email'
            className='input2'
          />
          <input
            type='submit'
            className='my-1 text-white input-rcp'
            value='Récuperer'
            // onClick={forgotPasswordHandler}
          />
      </div>

        <div className='alert animate__animated animate__backInDown'>
          <div className='text-center animate__animated animate__backInDown'>{errorMss}</div>
        </div>
        <div>
          <ToastContainer />
        </div>
        </Col>
        <Col sm={6} md={6} className='body'>
        <div className="text-center align-items-center pt-4">
                <h3>Oneline E-Learning</h3>
                <img src={imglearning} alt="e-learning" className='learningimg'/>

        </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default ForgotPssWrd
