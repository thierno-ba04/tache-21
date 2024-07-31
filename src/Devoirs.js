import React from "react";
import Sidebar from "./Sidebar";
import { Box, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import { styled, createTheme, ThemeProvider } from '@mui/system';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


const customTheme = createTheme({
    components: {
      MyThemeComponent: {
        styleOverrides: {
          root: {
            color: 'darkslategray',
          },
          primary: {
            color: 'darkblue',
          },
          secondary: {
            color: 'darkred',
            backgroundColor: 'pink',
          },
        },
        variants: [
          {
            props: { variant: 'dashed', color: 'primary' },
            style: {
              border: '1px dashed darkblue',
            },
          },
          {
            props: { variant: 'dashed', color: 'secondary' },
            style: {
              border: '1px dashed darkred',
            },
          },
        ],
      },
    },
  });
  
  const MyThemeComponent = styled('div', {
    // Configure which props should be forwarded on DOM
    shouldForwardProp: (prop) =>
      prop !== 'color' && prop !== 'variant' && prop !== 'sx',
    name: 'MyThemeComponent',
    slot: 'Root',
    // We are specifying here how the styleOverrides are being applied based on props
    overridesResolver: (props, styles) => [
      styles.root,
      props.color === 'primary' && styles.primary,
      props.color === 'secondary' && styles.secondary,
    ],
  })(({ theme }) => ({
    backgroundColor: 'aliceblue',
    padding: theme.spacing(1),
  }));
  


const Devoirs= () => {
    return ( 
        <Box sx={{display:"flex"}}>
        <Sidebar/>
         <Box component="main"  sx={{flexGrow:1,marginTop:7,p:3,bgcolor:"#eaeff1" }}>
            <Typography>
            <Paper >
      <Typography
      sx={{textAlign:'center',mt:3,mb:5}} >
      <div style={{ width: '100%' }}>
       <Typography sx={{p:5,textAlign:'justify',mb:5}}> 
       <br/>
         <h1 > Devoirs des élèves<br/>
         <h6 style={{color:'#939597'}}></h6>
       </h1>
         <br/>
       </Typography>

    </div>
     <Typography sx={{p:5}}>
        
     <ThemeProvider theme={customTheme}>
      <MyThemeComponent sx={{ m: 1 }} color="primary" variant="dashed" style={{height:400}}>
      <Box sx={{ textAlign: 'center', m: 1 ,margin:10}}>
    
       Clickez sur le button pour recuperez les devoirs <br/><br/>
    
       <button>< CloudUploadIcon/></button>
      </Box>

      </MyThemeComponent>
    </ThemeProvider>

    </Typography>



      </Typography>
    </Paper>

            </Typography>

         </Box>

        </Box>
     );

}
 
export default Devoirs;