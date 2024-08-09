import React from "react";
import Sidebar from "./Sidebar";
import { Box, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import {  createTheme} from '@mui/system';
import { useNavigate } from "react-router-dom";
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AdminMessageReceiver from "./AdminMessageReceiver";

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
  


const Notedeservice= () => {

  const navigate=useNavigate();
    return ( 
        <Box sx={{display:"flex"}}>
        <Sidebar/>
         <Box component="main"  sx={{flexGrow:1 }}>
            <Typography>
      <Typography
      sx={{textAlign:'center',mb:5}} >
      <div style={{ width: '100%' }}>
       <Typography sx={{textAlign:'justify',p:5}}> 
      
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

          label="Note de service"
          onClick={()=>{navigate('/Notedeservice')}}
        />
      </Breadcrumbs>
    </div>
    <br/>  
      <br/>
      <br/>


      <AdminMessageReceiver />

         <br/>
       </Typography>



    </div>
     <Typography sx={{p:5}}>


    </Typography>



      </Typography>

            </Typography>

         </Box>

        </Box>
     );

}
 
export default Notedeservice;