import React from "react";
import Sidebar from "./Sidebar";
import { Box, Link, Typography } from "@mui/material";
import {  createTheme, ThemeProvider } from '@mui/system';
import {  useNavigate } from "react-router-dom";
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import Img2 from './exceller.png';
import DashboardIcon from '@mui/icons-material/Dashboard';

import { useState, useEffect} from "react";
import ClipLoader from "react-spinners/ClipLoader";


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
  
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "#2979ff",
    marginTop:300
  };
  

const Relevedenote= () => {

  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])


  const navigate=useNavigate();
    return ( 
      


        <Box sx={{display:"flex"}}>
        <Sidebar/>
        {
         loading ?
         < ClipLoader
      loading={loading}
      cssOverride={override}
      size={70}
      aria-label="Loading Spinner"
      data-testid="loader"
      color="#2979ff"
    />
 
     :

         <Box component="main"  sx={{flexGrow:1 }}>
            <Typography>
      <Typography
      sx={{textAlign:'center',mt:3,mb:5}} >
      <div style={{ width: '100%' }}>
       <Typography sx={{p:2,textAlign:'justify',mb:5}}> 
      
       <br/>
       <div role="presentation" onClick={handleClick} style={{marginLeft:"35px"}}>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
           sx={{p:2,borderRadius:2}}
          component="a"
          href="#"
          label="Tableau de bord"
          onClick={()=>{navigate('/dashboardcoach')}}

          icon={<DashboardIcon fontSize="small" />}
        />
        
        <StyledBreadcrumb
          sx={{p:2,borderRadius:2}}
          label="Releve de note"
          onClick={()=>{navigate('/Relevedenote')}}
        />
      </Breadcrumbs>
    </div>

       
         <br/>
       </Typography>

    </div>
     <Typography sx={{p:5}}>
        
     <ThemeProvider theme={customTheme}>
      <MyThemeComponent sx={{ m: 1 }} color="primary" variant="dashed" style={{height:400}}>
      <Box sx={{ textAlign: 'center', m: 1 ,margin:10}}>
    
       Clickez sur le button pour voir le relevé de note  <br/><br/>
    
       <a href={"https://drive.google.com/drive/home?sjid=200973102585411076-EU"}><img src={Img2}  width={35} height={35}/>  </a>


      </Box>

      </MyThemeComponent>
      
    </ThemeProvider>

    </Typography>



      </Typography>
    

            </Typography>

         </Box>
        }

        </Box>
        
     );

}
 
export default Relevedenote;