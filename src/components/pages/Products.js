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
import Artesanato from "../../images/artesanato.jpeg";
import Musicais from "../../images/brincadeiras-musicais.jpeg";
import Teatrais from "../../images/brincadeiras-teatrais.jpeg";

export default function Products() {
  return     <div style={{display: "flex", flexDirection:"column", justifyContent: "center", margin: "56px"}}>
    <div style={{margin:"15px", display: "flex", justifyContent: "center"}}>
      <Grid container style={{display:"flex", justifyContent: "center"}}>

        <div>
          <img
            className="logo-container"
            src={Artesanato}
            alt="logo-beer" />
        </div>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{display: "flex", justifyContent:"center", alignItems: "center", paddingLeft:"25px", paddingRight: "25px", marginLeft: "50px", background:"#f5e7cc"}}>
          <Typography variant="h6" align="center" className="beer-title" style={{marginLeft: "15px"}}>
            Neste primeiro volume, SEMENTES PEDAGÓGICAS, apresenta 30 atividades de artesanato voltadas para o público infantil.  Escolhemos esse tema porque vemos em toda criança um artista, e é através desse recurso que podemos estimular o potencial criador dos pequenos , ampliando suas formas de conhecer o mundo. Entendemos que ARTESANATO  é a arte em mãos, e arte é uma forma de comunicar ideias e expressar emoções. 
          </Typography>
        </Grid> 
      </Grid>
    </div>
    <div style={{margin:"15px", display: "flex", justifyContent: "center"}}>
      <Grid container style={{display:"flex", justifyContent: "center"}}>

        <div>
          <img
            className="logo-container"
            src={Musicais}
            alt="logo-beer" />
        </div>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{display: "flex", alignItems: "center", paddingLeft:"25px", paddingRight: "25px", marginLeft: "50px", background:"#f5e7cc"}}>
          <Typography variant="h6" align="center" className="beer-title" style={{marginLeft: "15px"}}>
          Neste segundo volume, SEMENTES PEDAGÓGICAS, apresenta 30 atividades de musicalização voltadas para o público infantil. A música é uma forma de expressar e comunicar sensações, sentimentos e pensamentos. Desde o ventre a criança está em contato com diversos estímulos sonoros (batimentos do coração da mãe, falas e músicas cantadas durante a gravidez), fazendo com que  os sons e a música sejam fundamentais para o desenvolvimento de nossos pequenos.           </Typography>
        </Grid> 
      </Grid>
    </div>
    <div style={{margin:"15px", display: "flex", justifyContent: "center"}}>
      <Grid container style={{display:"flex", justifyContent: "center"}}>

        <div>
          <img
            className="logo-container"
            src={Teatrais}
            alt="logo-beer" />
        </div>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{display: "flex", alignItems: "center", paddingLeft:"25px", paddingRight: "25px", marginLeft: "50px", background:"#f5e7cc"}}>
          <Typography variant="h6" align="center" className="beer-title" style={{marginLeft: "15px"}}>
          Neste terceiro volume, SEMENTES PEDAGÓGICAS, apresenta 30 atividades de jogos teatrais voltadas para o público infantil.  Escolhemos esse tema porque o teatro é um recurso que estimula o potencial criador dos pequenos ,ampliando suas formas de conhecer o mundo e a si próprio. Assim como toda arte,  é uma forma de comunicar ideias e expressar emoções.           </Typography>
        </Grid> 
      </Grid>
    </div>

</div>
}
