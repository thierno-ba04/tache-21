import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Box, Typography, Grid, Container } from "@mui/material";
import './App.css';
import { useNavigate } from "react-router-dom";
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import Agenda from './Agenda';
import AgentList from "./AgentList";
import ClipLoader from "react-spinners/ClipLoader";
import Link from '@mui/material/Link';





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


const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#2979ff",
  marginTop: "300px"
};

const DashboardCoach = () => {

  const [loading, setLoading] = useState(false);
useEffect(()=>{
  setLoading(true)
  setTimeout(()=>{
    setLoading(false)
  },3000)
},[])

  


   const navigate=useNavigate();

   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
 
   const [name, setName] = React.useState();

    return ( 
      <div>




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
         <Box component="main"  
         sx={{flexGrow:1 }}>
            <Typography>
          
           <Typography
            sx={{textAlign:''
            ,mt:3,
             mb:3}}
            >
       
    
      <div style={{ width: '100%' }}>
       <Typography 
       sx={{p:2,textAlign:'justify'}}> 
       <br/>

       <div role="presentation" style={{marginLeft:35}}>

      <Breadcrumbs aria-label="breadcrumb">
        <Typography color="text.primary">Dashboard</Typography>
      </Breadcrumbs>

    </div>

       </Typography>
    </div>
    <div className="cardDashboard" style={{margin:20}}>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

<div class="container">
<div class="row row-cols-1 row-cols-md-2 row-cols-xl-4">
       <div class="col">
		 <div class="card radius-10 border-start border-0 border-3 border-info">
			<div class="card-body">
				<div class="d-flex align-items-center">
					<div>
						<p class="mb-0 text-secondary">Total Elèves</p>
						<h4 class="my-1 text-info">3</h4>
						<p class="mb-0 font-13"></p>
					</div>
					<div class="widgets-icons-2 rounded-circle bg-gradient-scooter text-white ms-auto"> <i class="fa fa-users"></i>
					</div>
				</div>
			</div>
		 </div>
	   </div>
	   <div class="col">
		<div class="card radius-10 border-start border-0 border-3 border-danger">
		   <div class="card-body">
			   <div class="d-flex align-items-center">
				   <div>
					   <p class="mb-0 text-secondary">Total Fille</p>
					   <h4 class="my-1 text-danger">1</h4>
					   <p class="mb-0 font-13"></p>
				   </div>
				   <div class="widgets-icons-2 rounded-circle bg-gradient-bloody text-white ms-auto"> <i class="fa fa-users"></i>
				   </div>
			   </div>
		   </div>
		</div>
	  </div>
	  <div class="col">
		<div class="card radius-10 border-start border-0 border-3 border-success">
		   <div class="card-body">
			   <div class="d-flex align-items-center">
				   <div>
					   <p class="mb-0 text-secondary">Total Graçon</p>
					   <h4 class="my-1 text-success">2</h4>
					   <p class="mb-0 font-13"></p>
				   </div>
				   <div class="widgets-icons-2 rounded-circle bg-gradient-ohhappiness text-white ms-auto"> <i class="fa fa-users"></i>
				   </div>
			   </div>
		   </div>
		</div>
	  </div>
	  <div class="col">
		<div class="card radius-10 border-start border-0 border-3 border-warning">
		   <div class="card-body">
			   <div class="d-flex align-items-center">
				   <div>
					   <p class="mb-0 text-secondary">Total Classe</p>
					   <h4 class="my-1 text-warning">1</h4>
					   <p class="mb-0 font-13"></p>
				   </div>
				   <div class="widgets-icons-2 rounded-circle bg-gradient-blooker text-white ms-auto"><i class="fa fa-users"></i>
				   </div>
			   </div>
		   </div>
		</div>
	  </div> 
	</div>
  </div>


  </div>

  <br/>
  <div className="Agenda" style={{margin:20}}>

<div class="container">
  <div class='row'>
  <div className="col-8">
   <Agenda/>
  </div>
  <div className="col">
  <AgentList/>
   

  </div>
  </div>

  </div>


  </div>



<br/>


    </Typography>
     
   
     </Typography>

     </Box >
             }

     </Box>

     </div>
     );
}
 
export default DashboardCoach;