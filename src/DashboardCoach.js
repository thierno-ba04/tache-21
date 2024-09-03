import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Box, Typography, Grid, Container } from "@mui/material";
import './App.css';
import { useNavigate } from "react-router-dom";
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import Agenda from './Agenda';
import AgentList from "./AgentList";
import ClipLoader from "react-spinners/ClipLoader";
import { getStudentData } from './firebaseService'; // Chemin d'importation correct

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
});

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#2979ff",
  marginTop: "300px"
};

const DashboardCoach = () => {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const studentData = await getStudentData();
      setStudents(studentData);
      setLoading(false);
    };

    fetchData();
  }, []);

  const calculateStats = () => {
    let totalStudents = 0;
    let totalGirls = 0;
    let totalBoys = 0;
    let totalClasses = new Set();

    students.forEach(student => {
      totalStudents++;
      if (student.gender === 'F') totalGirls++;
      if (student.gender === 'M') totalBoys++;
      totalClasses.add(student.class);
    });

    return {
      totalStudents,
      totalGirls,
      totalBoys,
      totalClasses: totalClasses.size
    };
  };

  const stats = calculateStats();

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
          <Container maxWidth="xl">
            <Typography sx={{ mt: 3, mb: 3,mt:6 }}>
              <Breadcrumbs aria-label="breadcrumb">
                <Typography color="text.primary">Dashboard</Typography>
              </Breadcrumbs>
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <Box className="card radius-10 border-start border-0 border-3 border-info">
                  <Box className="card-body">
                    <Box className="d-flex align-items-center">
                      <Box>
                        <Typography variant="body2" color="textSecondary">Total Elèves</Typography>
                        <Typography variant="h4" color="info.main">{stats.totalStudents}</Typography>
                      </Box>
                      <Box className="widgets-icons-2 rounded-circle bg-gradient-scooter text-white ms-auto">
                        <i className="fa fa-users"></i>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Box className="card radius-10 border-start border-0 border-danger">
                  <Box className="card-body">
                    <Box className="d-flex align-items-center">
                      <Box>
                        <Typography variant="body2" color="textSecondary">Total Filles</Typography>
                        <Typography variant="h4" color="error.main">{stats.totalGirls}</Typography>
                      </Box>
                      <Box className="widgets-icons-2 rounded-circle bg-gradient-bloody text-white ms-auto">
                        <i className="fa fa-users"></i>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Box className="card radius-10 border-start border-0 border-success">
                  <Box className="card-body">
                    <Box className="d-flex align-items-center">
                      <Box>
                        <Typography variant="body2" color="textSecondary">Total Garçons</Typography>
                        <Typography variant="h4" color="success.main">{stats.totalBoys}</Typography>
                      </Box>
                      <Box className="widgets-icons-2 rounded-circle bg-gradient-ohhappiness text-white ms-auto">
                        <i className="fa fa-users"></i>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Box className="card radius-10 border-start border-0 border-warning">
                  <Box className="card-body">
                    <Box className="d-flex align-items-center">
                      <Box>
                        <Typography variant="body2" color="textSecondary">Total Classes</Typography>
                        <Typography variant="h4" color="warning.main">{stats.totalClasses}</Typography>
                      </Box>
                      <Box className="widgets-icons-2 rounded-circle bg-gradient-blooker text-white ms-auto">
                        <i className="fa fa-users"></i>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mt: 4 }}>
              <Grid item xs={12} md={8}>
                <Agenda />
              </Grid>
              <Grid item xs={12} md={4}>
                <AgentList />
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </Box>
  );
};

export default DashboardCoach;
