import React, { useState, useEffect, useCallback } from "react";
import Sidebar from "./Sidebar";
import { Box, Typography} from "@mui/material";
import { Avatar } from '@mui/material';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Img from"./1.jpg";
import dayjs from 'dayjs';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {  useNavigate, useParams } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import'./Notification.css';
import ClipLoader from "react-spinners/ClipLoader";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import {addDoc ,collection,doc, getDoc, getDocs} from "firebase/firestore";
import {db} from "../firebase";
import'./Etudiants.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { BsEraser } from "react-icons/bs";




const Notification = ({ message, onClose }) => {
  return (
    <div className="notification">
      <span>{message}</span>
      <button className="notification-close" onClick={onClose}>&times;</button>
    </div>
  );
};





const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 310,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#2979ff",
  marginTop:300
};






  


const Eleves = () => {
  const { id } = useParams();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [selectedApplicant, setSelectedApplicant] = React.useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  }, []);

  useEffect(()=>{
    const getvalue =async()=>{
      const val = doc(db, "eleves",'posts')
      const collectinval =collection(val,"feedbacks")
     
      const getvalue = await getDocs(collectinval)
      setData(getvalue.docs.map((doc)=>({...doc.data(),id:doc.id})))
  
     }
     getvalue()
  
  },[]);




const hanledelete =async(id)=>{

  const deleval=doc(db,"eleves",id)
  setData(data.filter((item)=>item.id!==id))}

  
  

  const [showNotification, setShowNotification] = React.useState(false);
  const [notificationMessage, setNotificationMessage] = React.useState('');

  const displayNotification = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);

    // Automatically hide the notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };



  const [valu, setValu] = React.useState(null);
  const [listpresence, setlistepresence] = React.useState('');
  const [value, setValue] = React.useState(dayjs('2022-04-17'));


  const handleChange = (event) => {
    setlistepresence(event.target.value);
  };


  const Navigate =useNavigate();


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        {loading ?
          <ClipLoader
            loading={loading}
            cssOverride={override}
            size={70}
            aria-label="Loading Spinner"
            data-testid="loader"
            color="#2979ff"
          /> :
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Typography>
      <Typography
      sx={{textAlign:'center',mt:3,mb:3}}
      >
       
    
      <div style={{ width: '100%' }}>


       <Typography sx={{p:2,textAlign:'justify',mb:5}}> 
       <br/>

       <div role="presentation" onClick={handleClick} style={{marginLeft:""}}>
      <Breadcrumbs aria-label="breadcrumb">
        <a underline="hover"  href="/" style={{textDecoration:"none",color:'black'}} onClick={()=>{navigate('/')}}>
          Dashboard
        </a>
        <Typography color="text.primary">Etudiants</Typography>


      </Breadcrumbs>
    </div>
        <br/>

   </Typography>

                  <div className="container">
                    <div className="row">
                      <div className="col-12 mb-3 mb-lg-5">
                        <div className="overflow-hidden card table-nowrap table-card">
                          <div className="card-header d-flex justify-content-between align-items-center">
                            <Button variant="contained" sx={{ float: "right", mb: 1 }} onClick={() => { navigate('/FormulaireAjoutEleves') }}>Ajouter</Button>
                          </div>
                          <div className="table-responsive">
                            <table className="table mb-0">
                              <thead className="small text-uppercase bg-body text-muted">
                                <tr>
                                  <th className="text-start">Name</th>
                                  <th>Email</th>
                                  <th>Adresse</th>
                                  <th>Numero</th>
                                  <th>Niveau classe</th>
                                  <th className="text-end">Action</th>
                                </tr>
                              </thead>
                              {data.map((applicant) => (
                                <tbody key={applicant.id}>
                                  <tr className="align-middle">
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="avatar sm rounded-pill me-3 flex-shrink-0" alt="Customer" />
                                        <div>
                                          <div className="h6 mb-0 lh-1">{applicant.nom}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{applicant.email}</td>
                                <td> <span class="d-inline-block align-middle">{applicant.adresse}</span></td>
                                <td><span>{applicant.numero}</span></td>
                                <td>{applicant.niveauclasse}</td>
                                <td class="text-end">
                                    <div class="drodown">
                                   <Link to={`/ProfilEtudiant/${applicant.id}`}><IconButton ><VisibilityIcon/></IconButton></Link>
                                   <IconButton ><DeleteIcon/></IconButton>
                                   <IconButton ><BsEraser/></IconButton>


                                    </div>
                                </td>
                            </tr>
                        </tbody>





  

    ))}
  

                    </table>
                </div>
            </div>
        </div>
    </div>
    </div>

      <br/>
    </div>

    

    
      </Typography>

            </Typography>
          </Box>
        }

        </Box>
        </div>
     );
}
 
export default Eleves;