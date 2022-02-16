import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

export function AddMovie({ Movies, setMovies }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [poster, setPoster] = useState("");
  const [trailer, setTrailer] = useState("");

  const history = useHistory();



  const addMovie = () => {

    console.log("adding");
    const newMovie = {
      name,
      rating: parseInt(rating),
      summary,
      poster,
      trailer
    };
    console.log(newMovie);
    setMovies([...Movies, newMovie]);
    history.push("/movies")

  };
  return (

    <div className='add-movie-form'>
      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        label='Enter the name'
        id="standard-basic"
        variant="standard" />

      <TextField
        className='add-movie-input'
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

      <Button onClick={addMovie} variant="outlined">AddMovie</Button>

    </div>

  );
}
