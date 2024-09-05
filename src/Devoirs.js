import React from "react";
import Sidebar from "./Sidebar";
import { Box, Typography, Grid, Breadcrumbs, Chip } from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { Link, useNavigate } from "react-router-dom";
import { emphasize, styled } from '@mui/material/styles';
import ClipLoader from "react-spinners/ClipLoader";
import DashboardIcon from '@mui/icons-material/Dashboard';
import StudentWorkViewer from "./StudentWorkVierwer";
import './App.css';
import { useState, useEffect, CSSProperties } from "react";

// Styles pour le loader
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#2979ff",
  marginTop: 300,
};

// Breadcrumb personnalisé
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor = theme.palette.mode === 'light'
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

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const Devoirs = () => {
  const [loading, setLoading] = useState(false);
  const theme = useTheme(); // Utiliser le thème de Material-UI pour la responsivité
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", flexDirection: { xs: 'column', md: 'row' } }}>
        <Sidebar />
        {
          loading ?
            <ClipLoader
              loading={loading}
              cssOverride={override}
              size={70}
              aria-label="Loading Spinner"
              data-testid="loader"
              color="#2979ff"
            />
            :
            <Box component="main" sx={{ flexGrow: 1, p: { xs: 2, md: 5 } }}>

              {/* Breadcrumb */}
              <Box role="presentation" onClick={handleClick}>
              <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 5 }}>
              <a
                underline="hover"
                style={{ textDecoration: "none", color: "black" }}
                onClick={() => navigate("/DashboardCoach")}
              >
                Dashboard
              </a>
              <Typography color="text.primary">Livraisons </Typography>
            </Breadcrumbs>
              </Box>

              {/* Contenu principal */}
              <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
                <Grid item xs={12}>
                </Grid>

                <Grid item xs={12} md={10}>
                  {/* Intégration du composant de visualisation des travaux */}
                  <StudentWorkViewer />
                </Grid>
              </Grid>
            </Box>
        }
      </Box>
    </ThemeProvider>
  );
};

export default Devoirs;
