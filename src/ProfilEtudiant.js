import React, { useEffect, useState } from "react";
import"./ProfilEtudiant.css";
import {addDoc ,collection,doc, getDoc, getDocs} from "firebase/firestore";
import {database} from "./firebase";
import { useParams } from "react-router-dom";
import StudentWorkViewer from'./StudentWorkVierwer'
import Img from'./gervais.JPG'
import ClipLoader from "react-spinners/ClipLoader";
import Sidebar from "./Sidebar";
import { Box, Link, Typography } from "@mui/material";
import {  useNavigate } from "react-router-dom";
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { Form, Button, ProgressBar } from 'react-bootstrap';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

  





function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "#2979ff",
    marginTop:300
  };
  




const ProfilEtudiant = ({ title, description, image, date, student }) => {

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
  
    const handleNext = () => {
      setStep(step + 1);
    };
  
    const handlePrevious = () => {
      setStep(step - 1);
    };
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // handle form submission
    };




    const Navigate =useNavigate();



    

    
    


    const [loading, setLoading] = useState(false);
    useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },3000)
    },[])
  


    const navigate=useNavigate();

    
    const{id}=useParams();

    const[data,setData]=useState([]);

    useEffect(()=>{
        const getvalue =async()=>{
          const val = doc(database, "eleves",'posts')
          const collectinval =collection(val,"feedbacks")
         
          const getvalue = await getDocs(collectinval)
          setData(getvalue.docs.map((doc)=>({...doc.data(),id:doc.id})))
      
         }
         getvalue()
      
      },[])
    

    return (  


<Box sx={{display:"flex"}}>
<Sidebar/>
{
 loading ?
 < ClipLoader
loading={loading}
cssOverride={override}
size={70}
aria-label="Loading Spinner"
data-testid="loader"
color="#2979ff"
/>

:

 <Box component="main"  sx={{flexGrow:1 }}>
    <Typography>
<Typography
sx={{mt:3,mb:5}} >
<div style={{ width: '100%' }}>
<Typography sx={{p:2,textAlign:'justify'}}> 

<br/>
<div role="presentation" onClick={handleClick} >
<Breadcrumbs aria-label="breadcrumb">
<Link underline="hover" color="inherit" href="/"  onClick={()=>{navigate('/')}}>
  Dashboard
</Link>

<Link underline="hover" color="inherit" href="/"  onClick={()=>{navigate('/Eleves')}}>
  Etudiants
</Link>

<Typography color="text.primary">Profile étudiants</Typography>
</Breadcrumbs>
</div>


 <br/>
</Typography>

</div>
<div>
        <div class="container">
        <div class="profile-card">
            <div class="profile-sidebar">
                <img src={Img} alt="Photo de profil" class="profile-picture" id="profilePicture"/>
                <h1 class="profile-name">Marie Dupont</h1>
                <p class="profile-title"></p>
                <div class="profile-actions mb-5">

                    <button class="btns btn-edit" id="deleteProfileBtn">Modifier</button>
                    <button class=" btns btn-message "  onClick={()=>{navigate('/AjouteruneTache')}} id="openMessagingBtn">Ajouter une tâche</button>
                </div>
                


            </div>
            <div class="profile-main">

            <Form onSubmit={handleSubmit}>
      <ProgressBar now={(step / 2) * 100} />
      {step === 1 && (
        <Form.Group controlId="formStep1">
          <Form.Label></Form.Label>
          <div class="messaging-system" id="messagingSystem"  sx={{display:"none"}}>
                    <h2>Profile</h2>
                    <div class="message-list" id="messageList">


                    <div class="container">
  <div class="row">
    <div class="col-sm">
    <h5 class="card-title mb-2">Contact Information</h5>
          <ul class="list-unstyled">
            <li ><EmailIcon sx={{mr:1,mb:1}} /> john.doe@example.com</li>
            <li><LocalPhoneIcon sx={{mr:1,mb:1}} /> (123) 456-7890</li>
            <li><FmdGoodIcon sx={{mr:1}} />  New York, NY</li>
          </ul>


    </div>
    <div class="col-sm">
    <h5 class="card-title mb-2">Cours</h5>
          <span class="badge bg-primary me-1 mb-1">HTML</span>
          <span class="badge bg-primary me-1 mb-1">CSS</span>
          <span class="badge bg-primary me-1 mb-1">JavaScript</span>
          <span class="badge bg-primary me-1 mb-1">React</span>
          <span class="badge bg-primary me-1 mb-1">Node.js</span>
          <span class="badge bg-primary me-1 mb-1">MongoDB</span>

    </div>

  </div>
</div>


                    </div>

                </div>
        </Form.Group>
      )}
      {step === 2 && (
        <Form.Group controlId="formStep3">
          <Form.Label>Message</Form.Label>
          <div class="messaging-system" id="messagingSystem"  sx={{display:"none"}}>
                    <h2>Messagerie</h2>
                    <div class="message-list" id="messageList">
                    </div>
                    <form class="message-form" id="messageForm">
                        <textarea id="messageText" rows="3" placeholder="Écrivez votre message ici..."></textarea>
                    </form>
                      <button class="btns btn-envoyer"style={{fontSize:10,backgroundColor:"#F8F9F9",color:"black"}}>Envoyer</button>
                </div>

        </Form.Group>
      )}
      <div className="d-flex justify-content-between">
        {step > 1 && (
          <Button variant="primary" onClick={handlePrevious}>
            Précédent
          </Button>
        )}
        {step < 2 ? (
          <Button variant="primary" onClick={handleNext}>
            suivant
          </Button>
        ) : (
          <Button variant="primary" type="submit">
            terminé
          </Button>
        )}
      </div>
    </Form>

 
            </div>

        </div>

    </div>



    </div>

</Typography>


    </Typography>

 </Box>
}

</Box>









        
    );
}

export default ProfilEtudiant;