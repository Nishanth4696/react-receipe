import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory, useParams } from 'react-router-dom';

export function EditReceipe({Receipes, setReceipes }) {
    const { id } = useParams();
    const history = useHistory();
    const receipe = Receipes[id];
  const [name, setName] = useState(receipe.name);
  const [rating, setRating] = useState(receipe.rating);
  const [summary, setSummary] = useState(receipe.summary);
  const [breif, setBreif] = useState(receipe.breif);
  const [poster, setPoster] = useState(receipe.poster);
  const [trailer, setTrailer] = useState(receipe.trailer);
  const [ingredient1, setIngredient1] = useState(receipe.ingredient1);
  const [ingredient2, setIngredient2] = useState(receipe.ingredient2);
  const [ingredient3, setIngredient3] = useState(receipe.ingredient3);
  const [ingredient4, setIngredient4] = useState(receipe.ingredient4);
  const [ingredient5, setIngredient5] = useState(receipe.ingredient5);
  const [ingredient6, setIngredient6] = useState(receipe.ingredient6);



  const editReceipe = () => {

    console.log("Edited...");
    const updateReceipe = {
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
    
    const copy_receipelist = [ ...Receipes ];
    copy_receipelist[id] = updateReceipe
    setReceipes(copy_receipelist)
    history.push("/receipes")
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

      <Button onClick={editReceipe}  variant="outlined" >Save</Button>

    </div>

  );
}
