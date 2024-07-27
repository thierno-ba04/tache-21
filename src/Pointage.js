import React from "react";
import Sidebar from "./Sidebar";
import { Box, Typography } from "@mui/material";

const Pointage= () => {
    return ( 
        <Box sx={{display:"flex"}}>
        <Sidebar/>
         <Box component="main"  sx={{flexGrow:1,marginTop:7,p:3}}>
            <Typography>
                <h1>Welcome pointage </h1>   
            </Typography>

         </Box>

        </Box>
     );
}
 
export default Pointage;