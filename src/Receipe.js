import { useState } from "react";
import Counter from "./Counter";
import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from "react-router-dom";
import Card from '@mui/material/Card';




export default function Receipe({name, rating, summary, poster, id, deleteButton, editButton}){
    const [show, setShow] = useState(false);
const styles = rating > 8 ? {color : 'teal', fontWeight: 'bold'} : {color : 'crimson', fontWeight: 'bold'};
const history = useHistory();

const summarystyles = { display :show ? 'block' : 'none'} 
    return (
      
      <Card className="receipe-container">
        
          
        <img 
          src={poster} 
          alt={name} receipe
          className="receipe-poster"/>
        <div className="receipe-specs">
              <h3 className="receipe-name">{name}

              <IconButton 
                onClick={() =>{
                  history.push("/receipes/" + id);
                }} 
                
                  aria-label="delete" 
                  color="primary">
                    <InfoIcon />
                </IconButton>

              <IconButton 
                  onClick ={() => setShow(!show)} 
                  className="movie-show-button" 
                  aria-label="delete" 
                  color="primary">
                    {show ? <ExpandLessIcon /> : <ExpandMoreIcon /> }
              </IconButton>
                
              </h3>

              <p className="receipe-rating" style={styles}>⭐{rating} </p>
              </div>

       
        
      

        {show ? <p   style={summarystyles} className="receipe-summary">{summary}</p> : ""}
        <Counter /> {editButton} {deleteButton}
        
        
      </Card>
      
    );
  }

 