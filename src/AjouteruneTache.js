import React from "react";
import Sidebar from "./Sidebar";
import { Box, Link, Typography } from "@mui/material";
import {  createTheme, ThemeProvider } from '@mui/system';
import {  useNavigate } from "react-router-dom";
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import Img2 from './exceller.png';

import { useState, useEffect} from "react";
import ClipLoader from "react-spinners/ClipLoader";
import'./AjouteruneTache.css'

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
  

const AjouteruneTache= () => {

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
      sx={{mt:3,mb:5}} >
      <div >
       <Typography sx={{p:2,textAlign:'justify',mb:5}}> 
      
       <br/>
       <div role="presentation" onClick={handleClick} >
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/"  onClick={()=>{navigate('/')}}>
          Dashboard
        </Link>
        <Link underline="hover" color="inherit" href="/"  onClick={()=>{navigate('/Eleves')}}>
          Etudiants
        </Link>

        


        <Typography color="text.primary">Ajouter une tâche</Typography>
      </Breadcrumbs>
    </div>

       
         <br/>
       </Typography>
       <div class="container mt-5 d-flex justify-content-center ">
        <div class="col-lg-6 ">
    <div class="card shadow">
        <div class="card-header text-white" style={{backgroundColor:"rgb(4, 89, 180)"}}>
            <h3 class="mb-0">Ajouter une tâche </h3>
        </div>
        <div class="card-body">
            <form id="addCourseForm">
                <div class="mb-3">
                    <label for="courseName" class="form-label">Nom du cours</label>
                    <input type="text" class="form-control" id="courseName" required/>
                </div>
                <div class="mb-3">
                    <label for="courseDescription" class="form-label">Description</label>
                    <textarea class="form-control" id="courseDescription" rows="3" required></textarea>
                </div>
                <div class="mb-3">
                    <label for="courseLevel" class="form-label">Niveau</label>
                    <select class="form-select" id="courseLevel" required>
                        <option value="">Choisir un niveau</option>
                        <option value="debutant">Débutant</option>
                        <option value="intermediaire">Intermédiaire</option>
                        <option value="avance">Avancé</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="courseDuration" class="form-label">Durée (en heures)</label>
                    <input type="number" class="form-control" id="courseDuration" min="1" required/>
                </div>
                <div class="mb-3">
                    <label for="coursePrerequisites" class="form-label">Prérequis</label>
                    <input type="text" class="form-control" id="coursePrerequisites"/>
                </div>
                <button type="submit" class="btn " style={{backgroundColor:"rgb(4, 89, 180)",color:"white"}}>Ajouter le cours</button>
            </form>
        </div>
    </div>
</div>

</div>
    </div>
  
    
     


      </Typography>
    
      
            </Typography>

         </Box>
        }

        </Box>
        
     );

}
 
export default AjouteruneTache;