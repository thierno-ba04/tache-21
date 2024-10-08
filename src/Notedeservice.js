import React from "react";
import Sidebar from "./Sidebar";
import { Box, Typography } from "@mui/material";
import {  createTheme} from '@mui/system';
import { Link, useNavigate } from "react-router-dom";
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import './App.css';


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
  


const Notedeservice = () => {

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
       <div role="presentation" onClick={handleClick} style={{marginLeft:"35px"}}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/"  onClick={()=>{navigate('/')}}>
          Dashboard
        </Link>
        <Typography color="text.primary">Relevedenote</Typography>
      </Breadcrumbs>
    </div>
    <br/>  
      <br/>
      <br/>


      <main role="main" class="container bootdey.com">
  <div class="d-flex align-items-center p-3 my-3 text-white-50 bg-blue rounded box-shadow">
    <div class="lh-100">
      <h6 class="mb-0 text-white lh-100">John Doe</h6>
      <small>Messages Admin</small>
    </div>
  </div>

  <div class="my-3 p-3 bg-white rounded box-shadow">
    <h6 class="border-bottom border-gray pb-2 mb-0">Recent updates</h6>
    <div class="media text-muted pt-3">
      <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" class="mr-2 rounded" width="32" height="32"/>
      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <strong class="d-block text-gray-dark">@username</strong>
        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
      </p>
    </div>
    <div class="media text-muted pt-3">
      <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" class="mr-2 rounded" width="32" height="32"/>
      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <strong class="d-block text-gray-dark">@username</strong>
        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
      </p>
    </div>
    <div class="media text-muted pt-3">
      <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="" class="mr-2 rounded" width="32" height="32"/>
      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <strong class="d-block text-gray-dark">@username</strong>
        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
      </p>
    </div>
    <div class="media text-muted pt-3">
      <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" class="mr-2 rounded" width="32" height="32"/>
      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <strong class="d-block text-gray-dark">@username</strong>
        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
      </p>
    </div>
    <small class="d-block text-right mt-3">
      <a href="#">All messages</a>
    </small>
  </div>
</main>

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