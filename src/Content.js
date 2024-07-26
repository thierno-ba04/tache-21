import * as React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar } from '@mui/material';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { FaPen } from "react-icons/fa";
import { FaSave } from "react-icons/fa";









const columns = [
 

  {
    field: 'photoULR',
    headerName: 'Profil',
    width: 90,
    renderCell: (params) =><Avatar src={params.row.photoURL} sx={{mt:1}} />,
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
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete">
      <FaPen />
      </IconButton>

      <IconButton aria-label="delete">
      <FaSave />
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


export default function Content() {
  return (
    
    <Paper >
      <Typography
      sx={{textAlign:'center',mt:3,mb:3}}
      >
       
    
      <div style={{ width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
            
          },
        }}
        pageSizeOptions={[5, 10]}
        
      />

    </div>


    
      </Typography>
    </Paper>
  );
}