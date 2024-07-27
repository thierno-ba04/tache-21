import React from "react";
import Sidebar from "./Sidebar";
import { Box, Typography } from "@mui/material";

const Users= () => {
    return ( 
        <Box sx={{display:"flex"}}>
        <Sidebar/>
         <Box component="main"  sx={{flexGrow:1,marginTop:55,p:3}}>
            <Typography>
               <h1></h1> welcome
            </Typography>

         </Box>

        </Box>
     );
}
 
export default Users;