import  Receipe  from './Receipe.js';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit'
import { useHistory } from 'react-router-dom';


export default function ReceipeList({Receipes,setReceipes}){
  const history = useHistory();
    return(
      <section className="receipeList">
         {Receipes.map(({name,rating,summary, poster, trailer}, index) => 
          <Receipe 
            name={name} 
            rating={rating} 
            summary={summary} 
            poster={poster}
            trailer={trailer}
            id={index}
            deleteButton={
              <IconButton 
                onClick={() =>{
                  const deleteIdx = index;
                  const remainingReceipes = Receipes.filter((mv, idx) => idx !== deleteIdx) 
                  console.log("remaining", remainingReceipes)
                  setReceipes(remainingReceipes)
                }} 
                  className="receipe-show-button"
                  aria-label="delete" 
                  color="error">
                    <DeleteIcon />
                </IconButton>
            }
            editButton={
              <IconButton 
                onClick={() =>{ history.push("/receipes/edit/" + index)
                 
                }} 
                style={{ marginLeft:"auto" }}
                className="receipe-show-button"
                  aria-label="delete" 
                  color="primary">
                    <EditIcon />
                </IconButton>
            }
            />)
          }
      </section>
    );
  }
  