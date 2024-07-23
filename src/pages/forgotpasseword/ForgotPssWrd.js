import React, { useRef, useState } from 'react'
import { Col, Container, Row, ToastContainer } from 'react-bootstrap';
import  "./forgotpssword.css"
import { toast } from 'react-toastify';

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
    <div className='body'>
    <Container className='forgotBox'>
      <Row className='password shadow'>
        <Col sm={12} md={12}>
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
      </Row>
    </Container>
    </div>
  );
}

export default ForgotPssWrd
