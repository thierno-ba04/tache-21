import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import {
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Container,
  Paper,
  Breadcrumbs,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { styled } from "@mui/material/styles";

const StyledBreadcrumb = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800],
  height: theme.spacing(3),
  padding: theme.spacing(1, 2),
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#2979ff",
  marginTop: 300,
};

const AjouteruneTache = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const navigate = useNavigate();

  return (
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
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Container maxWidth="md">
            <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
              <Link underline="hover" color="inherit" href="/" onClick={() => navigate("/")}>
                Dashboard
              </Link>
              <Link underline="hover" color="inherit" href="/" onClick={() => navigate("/Eleves")}>
                Etudiants
              </Link>
              <Typography color="text.primary">Ajouter une tâche</Typography>
            </Breadcrumbs>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ mb: 3, color: "rgb(4, 89, 180)" }}>
                Ajouter une tâche
              </Typography>
              <form id="addCourseForm">
                <TextField
                  fullWidth
                  label="Nom du cours"
                  variant="outlined"
                  sx={{ mb: 3 }}
                  required
                />
                <TextField
                  fullWidth
                  label="Description"
                  variant="outlined"
                  multiline
                  rows={3}
                  sx={{ mb: 3 }}
                  required
                />
                <FormControl fullWidth variant="outlined" sx={{ mb: 3 }}>
                  <InputLabel>Niveau</InputLabel>
                  <Select label="Niveau" required>
                    <MenuItem value="">
                      <em>Choisir un niveau</em>
                    </MenuItem>
                    <MenuItem value="debutant">Débutant</MenuItem>
                    <MenuItem value="intermediaire">Intermédiaire</MenuItem>
                    <MenuItem value="avance">Avancé</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  fullWidth
                  label="Durée (en heures)"
                  type="number"
                  variant="outlined"
                  InputProps={{ inputProps: { min: 1 } }}
                  sx={{ mb: 3 }}
                  required
                />
                <TextField
                  fullWidth
                  label="Prérequis"
                  variant="outlined"
                  sx={{ mb: 3 }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ backgroundColor: "rgb(4, 89, 180)", color: "white" }}
                >
                  Ajouter le cours
                </Button>
              </form>
            </Paper>
          </Container>
        </Box>
      )}
    </Box>
  );
};

export default AjouteruneTache;
