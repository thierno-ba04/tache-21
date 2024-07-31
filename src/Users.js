import React from "react";
import Sidebar from "./Sidebar";
import { Box, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar } from '@mui/material';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Img from"./1.jpg";
import { FcCheckmark } from "react-icons/fc";
import { MdClear } from "react-icons/md";
import { FcCalendar } from "react-icons/fc";











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
    headerName: 'Action', 
    renderCell: (params) =>    <Stack spacing={2} direction="row">

        <IconButton aria-label="delete">
        <FcCalendar />
        </IconButton>

       <IconButton aria-label="delete">
       <FcCheckmark />
        </IconButton>

        <IconButton aria-label="delete" style={{color:'red'}}>
        <MdClear />
        </IconButton>
  
  
  </Stack>,
  
    width: 180 },

  
  
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
  


const Users = () => {
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
         <h1  >Liste des Elèves<br/>
         <h6 style={{color:'#939597'}}></h6></h1>
         <br/> <br/>

   

  


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