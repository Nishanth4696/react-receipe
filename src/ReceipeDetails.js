import { useHistory, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

 export function ReceipeDetails({  Receipes }) {
  const { id  } = useParams();
  const history = useHistory();
  const receipe = Receipes[id];
  const styles = receipe.rating > 8 ? {color : 'teal', fontWeight: 'bold'} : {color : 'crimson', fontWeight: 'bold'};
  return (
    <div className="receipe-detail-container">
      <Button onClick={() => history.goBack()} className='back' variant="outlined" startIcon={<ArrowBackIcon />}> Back </Button>
      <iframe 
          width="100%" 
          height="480" 
          src={receipe.trailer} 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>

          </iframe>
      
        <div className="receipe-specs">
        <h3 className="receipe-name">{receipe.name}</h3>

        <p className="receipe-rating" style={styles}>⭐{receipe.rating} </p>
        </div>

   <p className="receipe-breif">{receipe.breif}</p> 

<h3>Ingredients:</h3>

   <p className="receipe-ingrediant1"><b>{receipe.ingredient01}</b>{receipe.ingredient1}</p> 
   <p className="receipe-ingrediant2"><b>{receipe.ingredient02}</b>{receipe.ingredient2}</p> 
   <p className="receipe-ingrediant3"><b>{receipe.ingredient03}</b>{receipe.ingredient3}</p> 
   <p className="receipe-ingrediant4"><b>{receipe.ingredient04}</b>{receipe.ingredient4}</p> 
   <p className="receipe-ingrediant5"><b>{receipe.ingredient05}</b>{receipe.ingredient5}</p> 
   <p className="receipe-ingrediant6"><b>{receipe.ingredient06}</b>{receipe.ingredient6}</p> 
   
    

  </div>
  );
}
