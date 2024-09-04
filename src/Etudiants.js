import React from "react";
import Sidebar from "./Sidebar";
import { Box, Typography, Button, IconButton } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate, useParams } from "react-router-dom";
import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "./firebase/firebase";
import ClipLoader from "react-spinners/ClipLoader";
import DetailModal from "./DetailModal";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import './Etudiants.css';


const Etudiants = () => {
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


 React.useEffect(() => {
   const getValues = async () => {
     try {
       const docRef = doc(db, 'eleves', 'posts');
       const collectionRef = collection(docRef, 'feedbacks');
       const querySnapshot = await getDocs(collectionRef);
       setData(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
     } catch (error) {
       console.error('Error fetching data: ', error);
     }
   };
   getValues();
 }, []);


 const handleDelete = async (id) => {
   if (!id) return;


   const confirmed = window.confirm("Êtes-vous sûr de vouloir supprimer cet étudiant ?");
   if (!confirmed) return;


   try {
     const docRef = doc(db, 'eleves', 'posts', 'feedbacks', id);
     await deleteDoc(docRef);
     setData(data.filter((item) => item.id !== id));
     console.log("Document deleted successfully");
   } catch (error) {
     console.error("Error deleting document: ", error);
   }
 };


 const handleDeleteAll = async () => {
   const confirmed = window.confirm("Êtes-vous sûr de vouloir supprimer cet étudiant ?");
   if (!confirmed) return;


   try {
     const docRef = doc(db, 'eleves', 'posts');
     const collectionRef = collection(docRef, 'feedbacks');
     const querySnapshot = await getDocs(collectionRef);
     const deletePromises = querySnapshot.docs.map(doc => deleteDoc(doc.ref));
     await Promise.all(deletePromises);
     setData([]);
     console.log("All documents deleted successfully");
   } catch (error) {
     console.error("Error deleting documents: ", error);
   }
 };


 const openModal = (applicant) => {
   setSelectedApplicant(applicant);
   setModalOpen(true);
 };


 const closeModal = () => {
   setModalOpen(false);
   setSelectedApplicant(null);
 };


 const override = {
   display: "block",
   margin: "0 auto",
   borderColor: "#2979ff",
   marginTop: "300px",
 };


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
             <Typography sx={{ textAlign: 'center', mt: 3, mb: 3 }}>
               <div style={{ width: '100%' }}>
                 <Typography sx={{ p: 2, textAlign: 'justify', mb: 5,mt:6 }}>
                   <Breadcrumbs aria-label="breadcrumb" >
                     <a underline="hover"  style={{ textDecoration: "none", color: 'black' }} onClick={() => { navigate('/DashboardCoach') }}>
                       Dashboard
                     </a>
                     <Typography color="text.primary">Etudiants</Typography>
                   </Breadcrumbs>
                   <br />
                 </Typography>


                 <div className="container">
                   <div className="row  ">
                     <div className="col-12  mb-3 mb-lg-5">
                       <div className="overflow-hidden card table-nowrap table-cards">
                         <div className="card-header d-flex justify-content-between align-items-center">
                           <Button variant="contained" sx={{ float: "right", mb: 1 }} onClick={() => { navigate('/FeedbacksManager') }}>Ajouter</Button>
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
                                   <td><span className="d-inline-block align-middle">{applicant.adresse}</span></td>
                                   <td><span>{applicant.numero}</span></td>
                                   <td>{applicant.niveauclasse}</td>
                                   <td className="text-end">
                                     <div className="drodown">
                                       <IconButton onClick={() => openModal(applicant)}><VisibilityIcon /></IconButton>
                                       <IconButton onClick={() => handleDelete(applicant.id)}><DeleteIcon /></IconButton>
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
               </div>
             </Typography>
           </Typography>
         </Box>
       }
     </Box>


     <DetailModal open={modalOpen} onClose={closeModal} applicant={selectedApplicant} />
   </div>
 );
}


export default Etudiants;