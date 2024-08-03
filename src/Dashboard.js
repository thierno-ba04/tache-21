import React from "react";
import Sidebar from "./Sidebar";
import { Box, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SchoolIcon from '@mui/icons-material/School';
import'./App.css';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';


import PersonIcon from '@mui/icons-material/Person';
import Person2Icon from '@mui/icons-material/Person2';
import { useNavigate } from "react-router-dom";
import'./App.css';

  

import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';

import DashboardIcon from '@mui/icons-material/Dashboard';



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

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}



const Dashboard = () => {

   const navigate=useNavigate();
    return ( 
        <Box sx={{display:"flex"}}>
        <Sidebar/>
         <Box component="main"  
         sx={{flexGrow:1,marginTop:4,p:3,bgcolor:"#eaeff1" }}>
            <Typography>
            <Paper >
           <Typography
            sx={{textAlign:''
            ,mt:3,
             mb:3}}
            >
       
    
      <div style={{ width: '100%' }}>
       <Typography 
       sx={{p:4,textAlign:'justify',mb:5}}> 
       <br/>

       <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
               sx={{p:2}}
          component="a"
          href="#"
          label="Dashaord"
          onClick={()=>{navigate('/')}}

          icon={<DashboardIcon fontSize="small" />}
        />
        
        <StyledBreadcrumb
               sx={{p:2}}
          label="Liste des élèves"
          onClick={()=>{navigate('/users')}}
        />


       <StyledBreadcrumb
            sx={{p:2}}
          label="Devoirs"
          onClick={()=>{navigate('/Devoirs')}}
        />

     <StyledBreadcrumb
       sx={{p:2}}
          label="Relevé de note"
          onClick={()=>{navigate('/Relevedenote')}}
        />


<StyledBreadcrumb
                sx={{p:2}}
          label="Note de service"
          onClick={()=>{navigate('/Notedeservice')}}
        />


            


      </Breadcrumbs>
    </div>

       </Typography>
    </div>
    <div className="cardDashboard" style={{margin:20}}>
    <div class="container">
    <div class="row">
        <div class=" col-md-4 col-xl-3">
            <div class=" card bg-c-blue order-card">
                <div class="card-block">
                    <h6 class="m-b-20 ">Elèves</h6>
                    <h2 class="text-right"><PeopleAltIcon sx={{float:'right',fontSize:50}}/><span>50</span></h2>
                    <p class="m-b-0"><span class="f-right"></span></p>
                </div>
            </div>
        </div>
        
        <div class="col-md-4 col-xl-3">
            <div class="card bg-c-green order-card">
                <div class="card-block">
                    <h6 class="m-b-20">Total Filles</h6>
                    <h2 class="text-right"><Person2Icon sx={{float:'right',fontSize:50}}/><span>25</span></h2>
                    <p class="m-b-0"><span class="f-right"></span></p>
                </div>
            </div>
        </div>
        
        <div class="col-md-4 col-xl-3">
            <div class="card bg-c-yellow order-card">
                <div class="card-block">
                    <h6 class="m-b-20">Total Graçons</h6>
                    <h2 class="text-right"><PersonIcon sx={{float:'right',fontSize:50}}/><span>25</span></h2>
                    <p class="m-b-0"><span class="f-right"></span></p>
                </div>
            </div>
        </div>
        
        <div class="col-md-4 col-xl-3">
            <div class="card bg-c-pink order-card">
                <div class="card-block">
                    <h6 class="m-b-20">Classe</h6>
                    <h2 class="text-right">< SchoolIcon sx={{float:'right',fontSize:50}}/><span>Tle B</span></h2>
                    <p class="m-b-0"><span class="f-right"></span></p>
                </div>
            </div>
        </div>
	</div>
  </div>

  </div>
  <br/>

  <div class="container  " style={{padding:'4vh'}}>
  <div class="row">
    <div class="col-6">
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker orientation="landscape" />
    </LocalizationProvider>

    </div>
    <div class="col-6">
            <div class="  card card-white ">
                <div class=" card-body  ">
                    <form action="javascript:void(0);">
                        <input type="text" class="form-control add-task" placeholder="New Task..."/>
                    </form>
                    <ul class="nav nav-pills todo-nav">
                        <li role="presentation" class="nav-item all-task active"><a href="#" class="nav-link">All</a></li>
                        <li role="presentation" class="nav-item active-task"><a href="#" class="nav-link">Active</a></li>
                        <li role="presentation" class="nav-item completed-task"><a href="#" class="nav-link">Completed</a></li>
                    </ul>
                    <div class="todo-list ">
                        <div class="todo-item">
                            <div class="checker"><span class=""><input type="checkbox"/></span></div>
                            <span>Create theme</span>
                            <a href="javascript:void(0);" class="float-right remove-todo-item"><i class="icon-close"></i></a>
                        </div>
                        <div class="todo-item">
                            <div class="checker"><span class=""><input type="checkbox"/></span></div>
                            <span>Work on wordpress</span>
                            <a href="javascript:void(0);" class="float-right remove-todo-item"><i class="icon-close"></i></a>
                        </div>
                        
                        <div class="todo-item">
                            <div class="checker"><span class=""><input type="checkbox"/></span></div>
                            <span>Organize office main department</span>
                            <a href="javascript:void(0);" class="float-right remove-todo-item"><i class="icon-close"></i></a>
                        </div>
                        <div class="todo-item">
                            <div class="checker"><span><input type="checkbox"/></span></div>
                            <span>Error solve in HTML template</span>
                            <a href="javascript:void(0);" class="float-right remove-todo-item"><i class="icon-close"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
    
  


<br/>


    </Typography>
     </Paper>
   
     </Typography>

     </Box >

     </Box>
     );
}
 
export default Dashboard;