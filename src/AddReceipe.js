import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

export function AddReceipe({Receipes,  setReceipes }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [breif, setBreif] = useState("");
  const [poster, setPoster] = useState("");
  const [trailer, setTrailer] = useState("");
  const [ingredient1, setIngredient1] = useState("");
  const [ingredient2, setIngredient2] = useState("");
  const [ingredient3, setIngredient3] = useState("");
  const [ingredient4, setIngredient4] = useState("");
  const [ingredient5, setIngredient5] = useState("");
  const [ingredient6, setIngredient6] = useState("");
 
   

  const history = useHistory();



  const addReceipe = () => {

    console.log("adding");
    const newReceipe = {
      name,
      rating: parseInt(rating),
      summary,
      breif,
      poster,
      trailer,
      ingredient1,
      ingredient2,
      ingredient3,
      ingredient4,
      ingredient5,
      ingredient6
      
    };
    console.log(newReceipe);
    setReceipes([...Receipes, newReceipe]);
    history.push("/Receipes")

  };
  return (

    <div className='add-receipe-form'>
      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        label='Enter the name'
        id="standard-basic"
        variant="standard" />

      <TextField
        className='add-receipe-input'
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        label='Enter the rating'
        id="standard-basic"
        variant="standard" />

      <TextField
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        label='Enter the summary'
        id="standard-basic"
        variant="standard" />
        
        <TextField
        value={breif}
        onChange={(event) => setBreif(event.target.value)}
        label='Enter the breif'
        id="standard-basic"
        variant="standard" />

      <TextField
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        label='Enter the poster'
        id="standard-basic"
        variant="standard" />

<TextField
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
        label='Enter the trailer'
        id="standard-basic"
        variant="standard" />



<TextField
        value={ingredient1}
        onChange={(event) => setIngredient1(event.target.value)}
        label='Enter the ingredient1'
        id="standard-basic"
        variant="standard" />

<TextField
        value={ingredient2}
        onChange={(event) => setIngredient2(event.target.value)}
        label='Enter the ingredient2'
        id="standard-basic"
        variant="standard" />

<TextField
        value={ingredient3}
        onChange={(event) => setIngredient3(event.target.value)}
        label='Enter the ingredient3'
        id="standard-basic"
        variant="standard" />

<TextField
        value={ingredient4}
        onChange={(event) => setIngredient4(event.target.value)}
        label='Enter the ingredient4'
        id="standard-basic"
        variant="standard" />

<TextField
        value={ingredient5}
        onChange={(event) => setIngredient5(event.target.value)}
        label='Enter the ingredient5'
        id="standard-basic"
        variant="standard" />

<TextField
        value={ingredient6}
        onChange={(event) => setIngredient6(event.target.value)}
        label='Enter the ingredient6'
        id="standard-basic"
        variant="standard" />



      <Button onClick={addReceipe} variant="outlined">AddReceipe</Button>

    </div>

  );
}
