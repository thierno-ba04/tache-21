import React from "react";
import Sidebar from "./Sidebar";
import { Box, Typography } from "@mui/material";

const Statistique = () => {
    return ( 
        <Box sx={{display:"flex"}}>
        <Sidebar/>
         <Box component="main"  sx={{flexGrow:1,marginTop:7,p:3}}>
            <Typography>
                <h1>Welcome Statistique</h1>   
            </Typography>

         </Box>

        </Box>
     );
}
 
export default Statistique;