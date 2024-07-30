import React from "react";
import Sidebar from "./Sidebar";
import { Box, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Face3Icon from '@mui/icons-material/Face3';
import Face6Icon from '@mui/icons-material/Face6';
import SchoolIcon from '@mui/icons-material/School';
import'./App.css';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';





  


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
                    <h2 class="text-right"><Face3Icon sx={{float:'right',fontSize:50}}/><span>25</span></h2>
                    <p class="m-b-0"><span class="f-right"></span></p>
                </div>
            </div>
        </div>
        
        <div class="col-md-4 col-xl-3">
            <div class="card bg-c-yellow order-card">
                <div class="card-block">
                    <h6 class="m-b-20">Total Graçons</h6>
                    <h2 class="text-right"><Face6Icon sx={{float:'right',fontSize:50}}/><span>25</span></h2>
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
      
    </div>
    
  </div>
</div>


    </Typography>
     </Paper>
   
     </Typography>

     </Box >

     </Box>
     );
}
 
export default Dashboard;