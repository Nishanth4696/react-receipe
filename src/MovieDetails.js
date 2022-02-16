import { useHistory, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

 export function MovieDetails({ Movies }) {
  const { id  } = useParams();
  const history = useHistory();
  const movie = Movies[id];
  const styles = movie.rating > 8 ? {color : 'teal', fontWeight: 'bold'} : {color : 'crimson', fontWeight: 'bold'};
  return (
    <div className="movie-detail-container">
      <Button onClick={() => history.goBack()} variant="outlined" startIcon={<ArrowBackIcon />}> Back </Button>
      <iframe 
          width="100%" 
          height="480" 
          src={movie.trailer} 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>

          </iframe>
      
        <div className="movie-specs">
        <h3 className="movie-name">{movie.name}</h3>

        <p className="movie-rating" style={styles}>⭐{movie.rating} </p>
        </div>

   <p className="movie-summary">{movie.summary}</p> 
   
    

  </div>
  );
}
