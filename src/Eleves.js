import React, { useState, useEffect, useCallback } from "react";
import Sidebar from "./Sidebar";
import { Box, Typography, Avatar, Stack, IconButton, Modal, Breadcrumbs, Chip, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";
import { emphasize, styled } from '@mui/material/styles';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Img from "./1.jpg";
import './Notification.css';

const Notification = ({ message, onClose }) => (
  <div className="notification">
    <span>{message}</span>
    <button className="notification-close" onClick={onClose}>&times;</button>
  </div>
);

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor = theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[800];
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
});

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

const Elevess = () => {
  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [listpresence, setlistepresence] = useState('');
  const [value, setValue] = useState(dayjs('2022-04-17'));
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const handleChange = (event) => {
    setlistepresence(event.target.value);
  };

  const displayNotification = useCallback((message) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  }, []);

  const columns = [
    {
      field: 'photoULR',
      headerName: 'Profil',
      width: 90,
      renderCell: () => <Avatar src={Img} sx={{ mt: 1 }} />,
      sortable: false,
      filterrable: false
    },
    { field: 'Nom', headerName: 'Nom', width: 130 },
    { field: 'Prenom', headerName: 'Prenom', width: 130 },
    { field: 'Mail', headerName: 'Mail', width: 230 },
    { field: 'Numero', headerName: 'Numero', type: 'number', width: 120, editable: true },
    { field: 'Adresse', headerName: 'Adresse', width: 150 },
    { field: 'Statut', headerName: 'Statut', width: 150 },
    {
      field: 'Actions',
      headerName: 'Liste de presence',
      renderCell: () => (
        <Stack spacing={0} direction="row">
          <IconButton sx={{ fontSize: 30, ml: 3 }} onClick={() => setOpen(true)}>
            <FormatListBulletedIcon />
          </IconButton>
          <Modal open={open} onClose={() => setOpen(false)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker label="Controlled picker" value={value} onChange={(newValue) => setValue(newValue)} />
                </LocalizationProvider>
              </Typography>
              <br />
              <FormControl sx={{ width: 245 }}>
                <InputLabel id="demo-simple-select-label">Présence</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={listpresence} label="Présence" onChange={handleChange}>
                  <MenuItem value={'Présent'}>Présent</MenuItem>
                  <MenuItem value={'Absent'}>Absent</MenuItem>
                </Select>
              </FormControl>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <button onClick={() => displayNotification('Enregistré avec succès!')}>Envoyer</button>
              </Typography>
              {showNotification && <Notification message={notificationMessage} onClose={() => setShowNotification(false)} />}
            </Box>
          </Modal>
        </Stack>
      ),
      width: 150,
    },
  ];

  const rows = [
    { id: 1, Nom: 'Snow', Prenom: 'Gervais', Mail: 'akoinenzegervais7@gmail.com', Numero: 771001897, Adresse: 'zone captage', Statut: 'prof anglais' },
    // ...other rows
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      {loading ? (
        <ClipLoader loading={loading} cssOverride={style} size={70} aria-label="Loading Spinner" data-testid="loader" color="#2979ff" />
      ) : (
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Typography sx={{ textAlign: 'center', mt: 3, mb: 3 }}>
            <Breadcrumbs aria-label="breadcrumb">
              <StyledBreadcrumb component="a" href="#" label="Tableau de bord" onClick={() => navigate('/dashboardprof')} icon={<DashboardIcon fontSize="small" />} />
              <StyledBreadcrumb label="Liste des élèves" onClick={() => navigate('/Elevess')} />
            </Breadcrumbs>
            <DataGrid sx={{ m: 5 }} rows={rows} columns={columns} initialState={{ pagination: { paginationModel: { page: 0, pageSize: 5 } } }} pageSizeOptions={[5, 10]} />
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Elevess;
