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


  


const Dashboard = () => {

  
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
         <h1 >Tableau de bord<br/>
         <h6 style={{color:'#939597'}}></h6>
         </h1>
       </Typography>
    </div>
    <div className="cardDashboard" style={{margin:20}}>
    <div class="container">
    <div class="row">
        <div class="col-md-4 col-xl-3">
            <div class="card bg-c-blue order-card">
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

  <div class="container">
  <div class="row">
    <div class="col">
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker orientation="landscape" />
    </LocalizationProvider>

    </div>
    <div class="col">
    <div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="card card-white">
                <div class="card-body">
                    <form action="javascript:void(0);">
                        <input type="text" class="form-control add-task" placeholder="New Task..."/>
                    </form>
                    <ul class="nav nav-pills todo-nav">
                        <li role="presentation" class="nav-item all-task active"><a href="#" class="nav-link">All</a></li>
                        <li role="presentation" class="nav-item active-task"><a href="#" class="nav-link">Active</a></li>
                        <li role="presentation" class="nav-item completed-task"><a href="#" class="nav-link">Completed</a></li>
                    </ul>
                    <div class="todo-list">
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