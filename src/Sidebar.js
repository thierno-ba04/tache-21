import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import { Link, useNavigate } from 'react-router-dom';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import'./App.css';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutButton from './LogoutButton';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import {addDoc ,collection,doc, getDoc, getDocs} from "firebase/firestore";
import { useState } from "react";
import {db} from "../src/firebase/firebase";
import { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import { Dropdown, Image } from 'react-bootstrap';



const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

  
  

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);





export default function Sidebar() {


  const avatarUrl = 'https://via.placeholder.com/40'; // Remplacez par l'URL de l'avatar de l'utilisateur

  


  const[data,setData]=useState([]);


  const handleLogout = () => {
    alert('Vous avez été déconnecté avec succès !');
  };


  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
    
  const navigate = useNavigate();



  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    const getvalue =async()=>{
      const val = doc(db, "gervais",'post')
      const collectinval =collection(val,"feedback")
     
      const getvalue = await getDocs(collectinval)
      setData(getvalue.docs.map((doc)=>({...doc.data(),id:doc.id})))
  
     }
     getvalue()
  
  },[])
  

  


  return (
    
    <Box  sx={{ display: 'flex' }}>
      
      <CssBaseline  />
      <AppBar position="fixed" open={open}  sx={{bgcolor:'white'}} >
        
        <Toolbar>
          <IconButton
            color="white"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" style={{color:'black'}} > 
            Bienvenue 
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <Stack direction="row" spacing={3}>
        <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>

          <Badge  badgeContent= {data.length} color='error'>
          <NotificationsIcon  {...bindTrigger(popupState)} sx={{mt:1,cursor:'pointer'}} color="action" ></NotificationsIcon>
          </Badge> 

          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography >
            <div className="notification-header">
            Notifications

          </div>
          <div className="notification-item">

          {
          data.map((val)=>
          <div className="notification-list"> {val.title} </div>
)
        }




               </div>

            




            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>





    <Dropdown >
      <Dropdown.Toggle as="div" id="dropdown-avatar" className="d-flex align-items-center" style={{ cursor: 'pointer' }}>
        <Image
          src={avatarUrl}
          roundedCircle
          alt="Avatar"
          width={40}
          height={40}
        />
      </Dropdown.Toggle>

      <Dropdown.Menu align="end">
        <Dropdown.Item onClick={(e)=>{navigate("/Profile")}}>Mon compte</Dropdown.Item>
        <Dropdown.Item eventKey="2">Reglement interieur</Dropdown.Item>
        <Dropdown.Item eventKey ="2">Déconnexion</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>




    </Stack>


        </Toolbar>

      </AppBar>

      <Drawer variant="permanent" open={open} >
        <DrawerHeader >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <List>
            <ListItem  disablePadding sx={{ display: 'block' } }  onClick={()=>{navigate('/dashboardcoach')}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color:'white'
                  }}
                   
                >
                  <SpaceDashboardIcon/>
                </ListItemIcon>
                
                <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 ,color:'white'}} />
              </ListItemButton>
            </ListItem>

            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate('/Etudiants')}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,

                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color:'white'

                  }}
                >
                  <PeopleAltIcon/> 
                </ListItemIcon>
                <ListItemText primary="Etudiants" sx={{ opacity: open ? 1 : 0 ,color:'white'}} />
              </ListItemButton>
            </ListItem>

            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate('/Devoirs')}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,

                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color:'white',

                  }}
                >
                  <LibraryBooksIcon/>

                </ListItemIcon>
                <ListItemText primary="Livraisons" sx={{ opacity: open ? 1 : 0,color:'white' }} />
              </ListItemButton>
            </ListItem>









          
        </List>


      </Drawer>
    </Box>
  );
}