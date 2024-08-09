import React from "react";
import Sidebar from "./Sidebar";
import { Box, Typography } from "@mui/material";

const Comptabilite= () => {
    return ( 
        <Box sx={{display:"flex"}}>
        <Sidebar/>
         <Box component="main"  sx={{flexGrow:1,marginTop:55,p:3}}>
            <Typography>
                welcome comptabilite
            </Typography>

         </Box>

        </Box>
     );
}
 
export default Comptabilite;