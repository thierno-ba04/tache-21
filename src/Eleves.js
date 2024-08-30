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
import'./Notification.css';
import { useState, useEffect} from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Link from '@mui/material/Link';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import {addDoc ,collection,doc, getDoc, getDocs} from "firebase/firestore";
import {database} from "./firebase";
import'./eleves.css'


const Notification = ({ message, onClose }) => {
  return (
    <div className="notification">
      <span>{message}</span>
      <button className="notification-close" onClick={onClose}>&times;</button>
    </div>
  );
};





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

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 310,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#2979ff",
  marginTop:300
};



const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    label: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { label: 'Forrest Gump', year: 1994 },
  { label: 'Inception', year: 2010 },
  {
    label: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: 'Goodfellas', year: 1990 },
  { label: 'The Matrix', year: 1999 },
  { label: 'Seven Samurai', year: 1954 },
  {
    label: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { label: 'City of God', year: 2002 },
  { label: 'Se7en', year: 1995 },
  { label: 'The Silence of the Lambs', year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: 'Life Is Beautiful', year: 1997 },
  { label: 'The Usual Suspects', year: 1995 },
  { label: 'Léon: The Professional', year: 1994 },
  { label: 'Spirited Away', year: 2001 },
  { label: 'Saving Private Ryan', year: 1998 },
  { label: 'Once Upon a Time in the West', year: 1968 },
  { label: 'American History X', year: 1998 },
  { label: 'Interstellar', year: 2014 },
  { label: 'Casablanca', year: 1942 },
  { label: 'City Lights', year: 1931 },
  { label: 'Psycho', year: 1960 },
  { label: 'The Green Mile', year: 1999 },
  { label: 'The Intouchables', year: 2011 },
  { label: 'Modern Times', year: 1936 },
  { label: 'Raiders of the Lost Ark', year: 1981 },
  { label: 'Rear Window', year: 1954 },
  { label: 'The Pianist', year: 2002 },
  { label: 'The Departed', year: 2006 },
  { label: 'Terminator 2: Judgment Day', year: 1991 },
  { label: 'Back to the Future', year: 1985 },
  { label: 'Whiplash', year: 2014 },
  { label: 'Gladiator', year: 2000 },
  { label: 'Memento', year: 2000 },
  { label: 'The Prestige', year: 2006 },
  { label: 'The Lion King', year: 1994 },
  { label: 'Apocalypse Now', year: 1979 },
  { label: 'Alien', year: 1979 },
  { label: 'Sunset Boulevard', year: 1950 },
  {
    label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { label: 'The Great Dictator', year: 1940 },
  { label: 'Cinema Paradiso', year: 1988 },
  { label: 'The Lives of Others', year: 2006 },
  { label: 'Grave of the Fireflies', year: 1988 },
  { label: 'Paths of Glory', year: 1957 },
  { label: 'Django Unchained', year: 2012 },
  { label: 'The Shining', year: 1980 },
  { label: 'WALL·E', year: 2008 },
  { label: 'American Beauty', year: 1999 },
  { label: 'The Dark Knight Rises', year: 2012 },
  { label: 'Princess Mononoke', year: 1997 },
  { label: 'Aliens', year: 1986 },
  { label: 'Oldboy', year: 2003 },
  { label: 'Once Upon a Time in America', year: 1984 },
  { label: 'Witness for the Prosecution', year: 1957 },
  { label: 'Das Boot', year: 1981 },
  { label: 'Citizen Kane', year: 1941 },
  { label: 'North by Northwest', year: 1959 },
  { label: 'Vertigo', year: 1958 },
  {
    label: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { label: 'Reservoir Dogs', year: 1992 },
  { label: 'Braveheart', year: 1995 },
  { label: 'M', year: 1931 },
  { label: 'Requiem for a Dream', year: 2000 },
  { label: 'Amélie', year: 2001 },
  { label: 'A Clockwork Orange', year: 1971 },
  { label: 'Like Stars on Earth', year: 2007 },
  { label: 'Taxi Driver', year: 1976 },
  { label: 'Lawrence of Arabia', year: 1962 },
  { label: 'Double Indemnity', year: 1944 },
  {
    label: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { label: 'Amadeus', year: 1984 },
  { label: 'To Kill a Mockingbird', year: 1962 },
  { label: 'Toy Story 3', year: 2010 },
  { label: 'Logan', year: 2017 },
  { label: 'Full Metal Jacket', year: 1987 },
  { label: 'Dangal', year: 2016 },
  { label: 'The Sting', year: 1973 },
  { label: '2001: A Space Odyssey', year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: 'Toy Story', year: 1995 },
  { label: 'Bicycle Thieves', year: 1948 },
  { label: 'The Kid', year: 1921 },
  { label: 'Inglourious Basterds', year: 2009 },
  { label: 'Snatch', year: 2000 },
  { label: '3 Idiots', year: 2009 },
  { label: 'Monty Python and the Holy Grail', year: 1975 },
];



  


const Eleves = () => {
  const[data,setData]=useState([]);

  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])

  useEffect(()=>{
    const getvalue =async()=>{
      const val = doc(database, "eleves",'posts')
      const collectinval =collection(val,"feedbacks")
     
      const getvalue = await getDocs(collectinval)
      setData(getvalue.docs.map((doc)=>({...doc.data(),id:doc.id})))
  
     }
     getvalue()
  
  },[])



  
  

  const [showNotification, setShowNotification] = React.useState(false);
  const [notificationMessage, setNotificationMessage] = React.useState('');

  const displayNotification = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);

    // Automatically hide the notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };



  const navigate = useNavigate();
  const [valu, setValu] = React.useState(null);
  const [listpresence, setlistepresence] = React.useState('');
  const [value, setValue] = React.useState(dayjs('2022-04-17'));


  const handleChange = (event) => {
    setlistepresence(event.target.value);
  };


  const Navigate =useNavigate();


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
              <Autocomplete
      disablePortal
      options={ rows.map(person =>person.Nom)
      }
      value={valu}
      onChange={(event, newValu) => { setValu(newValu);
      }}

      

      sx={{ width:245 }}
      renderInput={(params) => <TextField {...params} label="Elèves" />} />

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
    
          
    
      <button onClick={() => displayNotification(' Enregistrer avec succes!')}>
        envoyer
      </button>

      {showNotification && (
        <Notification
          message={notificationMessage}
          onClose={() => setShowNotification(false)}
        />
      )}
    
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
       
          

      <div>


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

         <Box component="main"  sx={{flexGrow:1}}>
            <Typography>
      <Typography
      sx={{textAlign:'center',mt:3,mb:3}}
      >
       
    
      <div style={{ width: '100%' }}>


       <Typography sx={{p:2,textAlign:'justify',mb:5}}> 
       <br/>

       <div role="presentation" onClick={handleClick} style={{marginLeft:""}}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/"  onClick={()=>{navigate('/')}}>
          Dashboard
        </Link>
        <Typography color="text.primary">Elèves</Typography>


      </Breadcrumbs>
    </div>
        <br/>

   </Typography>




<div class="container">
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

    <div class="row">
        <div class="col-12 mb-3 mb-lg-5">
            <div class="overflow-hidden card table-nowrap table-card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0"></h5>
                    <Button variant="contained" sx={{float:"rigth",mb:1}} onClick={()=>{Navigate('/FormulaireAjoutEleves')}} >Ajouter</Button>

                </div>
                <div class="table-responsive">
                    <table class="table mb-0">
                        <thead class="small text-uppercase bg-body text-muted">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Adresse</th>
                                <th>Numero</th>
                                <th>Niveau classe</th>
                                <th class="text-end">Action</th>
                            </tr>
                        </thead>

    {data.map((applicant) => (

  
                                <tbody key={applicant.id} >
                            <tr class="align-middle">
                                <td>
                                    <div class="d-flex align-items-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="avatar sm rounded-pill me-3 flex-shrink-0" alt="Customer"/>
                                        <div>
                                            <div class="h6 mb-0 lh-1">{applicant.nom}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{applicant.email}</td>
                                <td> <span class="d-inline-block align-middle">{applicant.adresse}</span></td>
                                <td><span>{applicant.numero}</span></td>
                                <td>{applicant.niveauclasse}</td>
                                <td class="text-end">
                                    <div class="drodown">
                                        <a data-bs-toggle="dropdown" href="#" class="btn p-1" aria-expanded="false">
                                  <i class="fa fa-bars" aria-hidden="true"></i>
                                </a>
                                        <div class="dropdown-menu dropdown-menu-end" >
                                            <a href="" class="dropdown-item">View Details</a>
                                            <a href="" class="dropdown-item">Delete user</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>

  

    ))}
  

                    </table>
                </div>
            </div>
        </div>
    </div>
    </div>

      <br/>
    </div>

    

    
      </Typography>

            </Typography>

         </Box>
        }

        </Box>
        </div>
     );
}
 
export default Eleves;