import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from './firebase';
import { useNavigate } from "react-router-dom";


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function LoginProf() {
  const navigate = useNavigate();

  
const[password,setPassword]=useState();
const[email,setEmail]=useState();



  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)

    .then((userCredential)=>{

      const user =userCredential.user;
      navigate("/");

    })
   .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    
    });
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography  component="h1" variant="h5">
            Se connecter

            </Typography>
            <Box component="form"  sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Adresse email "
                name="email"
                type='email'
                autoComplete="email"
                autoFocus

                onChange={(e)=>setEmail(e.target.value)}

              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="mot de passe "
                type="password"
                id="password"
                autoComplete="current-password"

                onChange={(e)=>setPassword(e.target.value)}
                
              />
              <Button 
                
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
                fullWidth

              >
                Se connecter
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                  Mot de passe oublié ?

                  </Link>
                </Grid>
                
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            
            backgroundColor: '#2979ff',
            backgroundSize: 'cover',
            backgroundPosition: 'left',
          }}
        />

      </Grid>
    </ThemeProvider>
  );
}