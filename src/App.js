import './App.css';
import { useState} from 'react';

import MovieList from './MovieList';
import { Welcome } from './Welcome';
import { AddMovie } from './AddMovie';
import {NotFound} from './NotFound'
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { MovieDetails } from './MovieDetails';
import { EditMovie } from './EditMovie';

import AppBar from '@mui/material/AppBar';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';








export default function App() {
  
  const List_of_Movies=[
    {
      name: "The Avengers",
      rating: 8,
      summary: "The Avengers are a fictional team of superheroes and the protagonists of the Marvel Cinematic Universe (MCU) media franchise, based on the Marvel Comics team of the same name created by Stan Lee and Jack Kirby in 1963",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoF3VrrmOaUf8IjnQzl9S002WeSbgI6XBABA&usqp=CAU",
      trailer:"https://www.youtube.com/embed/eOrNdBpGMv8"
    },
    {
      name: "The GodFather",
      rating: 9.2,
      summary: "The Godfather Don Vito Corleone is the head of the Corleone mafia family in New York. He is at the event of his daughter's wedding. Michael, Vito's youngest son and a decorated WW II Marine is also present at the wedding",
      poster: "https://pbs.twimg.com/media/EkE2MAWVcAEOosB?format=jpg&name=large",
      trailer:"https://www.youtube.com/embed/sY1S34973zA"
    },
    {
      name: "The Dark Knight",
      rating: 9,
      summary: "A gang of criminals rob a Gotham City mob bank; the Joker manipulates them into murdering each other for a higher share until only he remains and escapes with the money. Batman, District Attorney Harvey Dent and Lieutenant Jim Gordon form an alliance to rid Gotham of organized crime.",
      poster: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
      trailer:"https://www.youtube.com/embed/EXeTwQWrcwY"
    },
    {
      name: "12 Angry Men",
      rating: 7.8,
      summary: "12 Angry Men explores many techniques of consensus-building and the difficulties encountered in the process among this group of men whose range of personalities adds to the intensity and conflict. It also explores the power one person has to elicit change",
      poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/12_Angry_Men_%281957_film_poster%29.jpg/220px-12_Angry_Men_%281957_film_poster%29.jpg",
      trailer:"https://www.youtube.com/embed/_13J_9B5jEk"
    },
    {
      name: "Schindler's List",
      rating: 8.9,
      summary: "Schindler's List is a 1993 American historical drama film directed and produced by Steven Spielberg and written by Steven Zaillian. It is based on the 1982 non-fiction novel Schindler's Ark by Australian novelist Thomas Keneally",
      poster: "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg",
      trailer:"https://www.youtube.com/embed/_13J_9B5jEk"
    },
    {
      name: "Forrest Gump",
      rating: 8,
      summary: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
      poster: "data:image/jpeg;base64,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",
      trailer:"https://www.youtube.com/embed/bLvqoHBptjg"
    },
    {
      name: "Inception",
      rating: 7.9,
      summary: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
      poster: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
      trailer:"https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
      name: "Spider-Man: No Way Home",
      rating: 8.7,
      summary: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdPsGJEBxBev7gKo_EMp0Pgk7Q7su_xTUxf3vo8dE9S_CiG2Z",
      trailer:"https://www.youtube.com/embed/JfVOs4VSpmA"
    }

  ];

  const [movies, setMovies] = useState(List_of_Movies);
  const history = useHistory();
  const [mode, setMode] = useState("light");


  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
 
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={1} style={{borderRadius: "0px", minHeight: "100vh"}}>
        <div className="App">
          
          <AppBar position="sticky">
            <Toolbar variant="dense">
              <Button variant="text" style={{color:"inherit"}} onClick={()=> history.push("./home")}>Home</Button>
              <Button variant="text" style={{color:"inherit"}} onClick={()=> history.push("./movies")}>Movies</Button>
              <Button variant="text" style={{color:"inherit"}} onClick={()=> history.push("./addmovies")}>Add Movies</Button>
              
              <Button 
                startIcon ={mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon /> }
                variant="text" 
                style={{marginLeft: "auto"}} 
                color="inherit" 
                onClick={() => setMode(mode ==='light'? 'dark' : 'light')}>  
              {mode==='light'? 'Dark' : 'Light'} Mode</Button>
            
            </Toolbar>
        </AppBar>
        
          <Switch>
            <Route path="/films">
              <Redirect to='/movies' />
            </Route>

           

            <Route path="/movies/edit/:id">
              <EditMovie Movies={movies} setMovies={setMovies}/>
            </Route>

            <Route path="/movies/:id">
              <MovieDetails Movies={movies}/>
            </Route>

          

            <Route path="/movies">
              <MovieList  Movies={movies} setMovies={setMovies}/> 
            </Route>

            <Route path="/addmovies">
                <AddMovie Movies={movies} setMovies={setMovies}/>
            </Route>

         

            <Route path="/">
                <Welcome />
            </Route>

            <Route path="**">
              <NotFound />
            </Route>
          </Switch>      
        </div>
        </Paper>
     </ThemeProvider> 
  );
}






