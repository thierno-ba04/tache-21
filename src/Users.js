import React from "react";
import Sidebar from "./Sidebar";
import { Box, Typography, colors } from "@mui/material";
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar } from '@mui/material';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Img from"./1.jpg";
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {  useNavigate } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DashboardIcon from '@mui/icons-material/Dashboard';

import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';


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



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};







  


const Users = () => {

  const navigate = useNavigate();

  const [listpresence, setlistepresence] = React.useState('');

  const handleChange = (event) => {
    setlistepresence(event.target.value);
  };


  const Navigate =useNavigate();

  const [value, setValue] = React.useState(dayjs('2022-04-17'));

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const columns = [
 

    {
      field: 'photoULR',
      headerName: 'Profil',
      width: 90,
      renderCell: (params) =><Avatar src={Img} sx={{mt:1}} />,
      sortable:false ,
      filterrable:false
    },
  
    { field: 'Nom', headerName: 'Nom', width: 130 },
    { field: 'Prenom', headerName: 'Prenom', width: 130 },
  
  
    { field: 'Mail',headerName: 'mail', width: 230 },
    {
      field: 'Numero',
      headerName: 'Numero',
      type: 'number',
      width: 120,
      editable: true,
    },
  
    { field: 'Adresse',headerName: 'Adresse', width: 150 },
  
    { field: 'Statut',headerName: 'statut', width: 150 },
    
    { field: 'Actions',
    headerName: 'Liste de presence', 
    renderCell: (params) =>  
    
<Stack spacing={0} direction="row">

<div>
  <IconButton sx={{fontSize:30,ml: 3}} onClick={handleOpen} ><FormatListBulletedIcon/></IconButton> 
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DemoContainer components={['DatePicker', 'DatePicker']} >
        <DatePicker
          
          label="Controlled picker"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
          </Typography>
       
       <br/>
          <Typography>

               <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{width:245}}>
        <InputLabel id="demo-simple-select-label">presence</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={listpresence}
          label="liste presence"
          onChange={handleChange}
        >
          <MenuItem value={'Présent'}>Présent</MenuItem>
          <MenuItem value={'Absent'}>Absent</MenuItem>
        </Select>
      </FormControl>
    </Box>

          </Typography>



          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Button   onClick={()=>{Navigate('/')}} variant="contained">Envoyer</Button>

          </Typography>
        </Box>
      </Modal>
    </div>



  
  
  </Stack>,
  
    width: 150},

  
  
  ];
  
  const rows = [
    { id: 1, Nom: 'Snow', 
    Prenom: 'Gervais',
  
    Mail: 'akoinenzegervais7@gmail.com',
    Numero:771001897,
     Adresse:'zone captage',
     Statut:'prof anglais',
     age:771001897 
    },
    
    { id: 2, Nom: 'Lannister', 
    Prenom: 'Gervais',
  
    Mail: 'akoinenzegervais7@gmail.com',
    Numero: 771001897,
    Adresse:'zone captage',
    Statut:'prof anglais'
  },
  
    { id: 3, Nom: 'Lannister',
    Prenom: 'Gervais',
  
     Mail: 'akoinenzegervais7@gmail.com',
     Numero: '771001897',
     Adresse:'zone captage',
     Statut:'prof anglais'
    },
  
    { id: 4, Nom: 'Stark', 
    Prenom: 'Gervais',
  
    Mail: 'akoinenzegervais7@gmail.com',
    Numero: 771001897,
    Adresse:'zone captage',
    Statut:'prof anglais'
  },
  
  
    { id: 5, Nom: 'Targaryen',
    Prenom: 'Gervais',
  
     Mail: 'akoinenzegervais7@gmail.com',
     Numero: 771001897,
     Adresse:'zone captage',
     Statut:'prof anglais' },
  
    { id: 6, Nom: 'Melisandre',
    Prenom: 'Gervais',
  
     Mail:'akoinenzegervais7@gmail.com',
     Numero: 771001897,
     Adresse:'zone captage',
     Statut:'prof anglais'},
  
    { id: 7, Nom: 'Clifford',
    Prenom: 'Gervais',
  
    Mail: 'akoinenzegervais7@gmail.com',
    Numero: 771001897,
    Adresse:'zone captage',
    Statut:'prof anglais'
  },
  
    { id: 8, Nom: 'Frances',
    Prenom: 'Gervais',
  
     Mail: 'akoinenzegervais7@gmail.com',
     Numero: 771001897,
     Adresse:'zone captage',
     Statut:'prof anglais'
    },
  
    { id: 9, Nom: 'Nze',
    Prenom: 'Gervais',
    Mail: 'akoinenzegervais7@gmail.com',
    Numero: 771001897,
    Adresse:'zone captage',
    Statut:'prof anglais' 
  },
    
  ];
    return ( 
        <Box sx={{display:"flex"}}>
        <Sidebar/>
         <Box component="main"  sx={{flexGrow:1,marginTop:7,p:3,bgcolor:"#eaeff1" }}>
            <Typography>
            <Paper >
      <Typography
      sx={{textAlign:'center',mt:3,mb:3}}
      >
       
    
      <div style={{ width: '100%' }}>


       <Typography sx={{p:5,textAlign:'justify',mb:5}}> 
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
          label="Liste des élèves"
          onClick={()=>{navigate('/users')}}
        />
      </Breadcrumbs>
    </div>

        <br/>
   </Typography>


      <DataGrid  sx={{m:5}}
        rows={rows}
        columns={columns}
        
        initialState={{
   
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}  
      />
      <br/>
    </div>


    
      </Typography>
    </Paper>

            </Typography>

         </Box>

        </Box>
     );
}
 
export default Users;