import React, { useState, useEffect, useCallback } from "react";
import { Box, Typography, Avatar, Stack, IconButton, Button, Modal, InputLabel, MenuItem, FormControl, Select, Breadcrumbs, styled } from "@mui/material";
import Sidebar from "./Sidebar";
import Img from "./1.jpg";
import dayjs from 'dayjs';
import ClipLoader from "react-spinners/ClipLoader";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase/firebase";
import Chip from '@mui/material/Chip';  // <--- Add this import
import './Notification.css';
import './etudiantts.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { BsEraser } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import { emphasize, styled as muiStyled } from '@mui/material/styles';

const Notification = ({ message, onClose }) => (
  <div className="notification">
    <span>{message}</span>
    <button className="notification-close" onClick={onClose}>&times;</button>
  </div>
);

const StyledBreadcrumb = muiStyled(Chip)(({ theme }) => {
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
});

function handleClick(event) {
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

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#2979ff",
  marginTop: 300
};

const Etudiantts = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  }, []);

  useEffect(() => {
    const getvalue = async () => {
      const val = doc(db, "eleves", 'posts');
      const collectinval = collection(val, "feedbacks");

      const getvalue = await getDocs(collectinval);
      setData(getvalue.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getvalue();
  }, []);

  const handleDelete = async (id) => {
    const deleval = doc(db, "eleves", id);
    setData(data.filter((item) => item.id !== id));
  };

  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  const displayNotification = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);

    // Automatically hide the notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const [listpresence, setlistepresence] = useState('');
  const [value, setValue] = useState(dayjs('2022-04-17'));

  const handleChange = (event) => {
    setlistepresence(event.target.value);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        {loading ? (
          <ClipLoader
            loading={loading}
            cssOverride={override}
            size={70}
            aria-label="Loading Spinner"
            data-testid="loader"
            color="#2979ff"
          />
        ) : (
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Typography sx={{ textAlign: 'center', mt: 3, mb: 3 }}>
              <div style={{ width: '100%' }}>
                <Typography sx={{ p: 2, textAlign: 'justify', mb: 5 }}>
                  <br />
                  <div role="presentation" onClick={handleClick}>
                    <Breadcrumbs aria-label="breadcrumb">
                      <a
                        underline="hover"
                        href="/"
                        style={{ textDecoration: "none", color: 'black' }}
                        onClick={() => { navigate('/dashboardcoach') }}
                      >
                        Dashboard
                      </a>
                      <Typography color="text.primary">Etudiants</Typography>
                    </Breadcrumbs>
                  </div>
                  <br />
                </Typography>

                <div className="container">
                  <div className="row">
                    <div className="col-12 mb-3 mb-lg-5">
                      <div className="overflow-hidden card table-nowrap table-card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                          <Button
                            variant="contained"
                            sx={{ float: "right", mb: 1 }}
                            onClick={() => { navigate('/FeedbacksManager') }}
                          >
                            Ajouter
                          </Button>
                        </div>
                        <div className="table-responsive">
                          <table className="table mb-0">
                            <thead className="small text-uppercase bg-body text-muted">
                              <tr>
                                <th className="text-start">Name</th>
                                <th>Email</th>
                                <th>Adresse</th>
                                <th>Numero</th>
                                <th>Niveau classe</th>
                                <th className="text-end">Action</th>
                              </tr>
                            </thead>
                            {data.map((applicant) => (
                              <tbody key={applicant.id}>
                                <tr className="align-middle">
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <img
                                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                        className="avatar sm rounded-pill me-3 flex-shrink-0"
                                        alt="Customer"
                                      />
                                      <div>
                                        <div className="h6 mb-0 lh-1">{applicant.nom}</div>
                                      </div>
                                    </div>
                                  </td>
                                  <td>{applicant.email}</td>
                                  <td><span className="d-inline-block align-middle">{applicant.adresse}</span></td>
                                  <td><span>{applicant.numero}</span></td>
                                  <td>{applicant.niveauclasse}</td>
                                  <td className="text-end">
                                    <div className="dropdown">
                                      <Link to={`/ProfilEtudiant/${applicant.id}`}>
                                        <IconButton><VisibilityIcon /></IconButton>
                                      </Link>
                                      <IconButton onClick={() => handleDelete(applicant.id)}><DeleteIcon /></IconButton>
                                      <IconButton><BsEraser /></IconButton>
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
                <br />
              </div>
            </Typography>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default Etudiantts;
