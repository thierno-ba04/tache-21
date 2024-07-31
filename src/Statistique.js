import React from "react";
import Sidebar from "./Sidebar";
import { Box, Typography } from "@mui/material";

import Paper from '@mui/material/Paper';
import { BarChart } from '@mui/x-charts/BarChart';




const Statistique = () => {
    return ( 
        <Box sx={{display:"flex"}}>
        <Sidebar/>
         <Box component="main"  sx={{flexGrow:1,marginTop:7,p:3,bgcolor:"#eaeff1" }}>
            <Typography>
            <Paper >
      <Typography
      sx={{textAlign:'center',mt:3,mb:19}}
      >
       
    
      <div style={{ width: '100%' }}>
       <Typography sx={{p:5,textAlign:'justify',mb:5}}> 
       <br/>
         <h1 >Statistique des notes par semestre<br/>
         <h6 style={{color:'#939597'}}></h6>
</h1>
         <br/> <br/>

       </Typography>
      <br/>

    </div>

    <BarChart
      series={[
        { data: [35, 44, 24, 34] },
        { data: [51, 6, 49, 30] },
        { data: [15, 25, 30, 50] },
        { data: [60, 50, 15, 25] },
      ]}
      height={290}
      xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />

    
      </Typography>
    </Paper>

            </Typography>

         </Box>

        </Box>
     );
}
 
export default Statistique;