import React from 'react';
import '../../App.css';
import Cartoon from "../../images/quem-somos.jpeg";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function About() {
  return     <Grid container component="main" sx={{ height: '100vh' }}>
  <CssBaseline />
  <Grid
    item
    xs={false}
    sm={4}
    md={7}
    sx={{
      backgroundImage: `url(${Cartoon})`,
      backgroundRepeat: 'no-repeat',
      backgroundColor: (t) =>
        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
      // backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  />
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{display: "flex", alignItems: "center", paddingLeft:"25px", paddingRight: "25px", background:"#f5e7cc"}}>
    
    <Typography variant="h6" align="center" className="beer-title">
      Somos três!
      Três educadoras.
      Três sonhadoras. 
      Três mulheres que acreditam na educação - que enxergam o lúdico como caminho de transformação. 
      Três semeadoras de ideias e propostas, buscando o diálogo com todo os interessados e participantes do universo Infantil. 
      Semear ideias e
      desabrochar novas possibilidades.
      </Typography>
    </Grid> 
</Grid>
}
