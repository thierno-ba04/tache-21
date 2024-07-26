import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { CiMoneyBill } from "react-icons/ci";
import { GoGraph } from "react-icons/go";
import { FaHandPointUp } from "react-icons/fa";
import Drawer from '@mui/material/Drawer';
import { Link } from '@mui/material';





export default function Navigator(props) {
  const { ...other } = props;

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };



  return (
    <Drawer variant="permanent" {...other}>

         <List
      sx={{ width: '100%', maxWidth: 360, marginTop:6 ,marginLeft:2,color:'white'
    }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      
    >
      <ListItemButton>
        <ListItemIcon>
        <MdOutlineSpaceDashboard />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
        <FaUserFriends />
        </ListItemIcon>
        <ListItemText primary="Users" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton>
        <ListItemIcon>
        <CiMoneyBill />
        </ListItemIcon>
        <ListItemText primary="Comptabilite" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
        <GoGraph />
        </ListItemIcon>
       <Link to="/Statistique">Statistique</Link> 
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
        <FaHandPointUp />
        </ListItemIcon>
        <ListItemText primary="Pointage" />
      </ListItemButton>



    </List>

    </Drawer>

  );
}