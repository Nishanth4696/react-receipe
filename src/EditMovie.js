import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory, useParams } from 'react-router-dom';

export function EditMovie({ Movies, setMovies }) {
    const { id } = useParams();
    const history = useHistory();
    const movie = Movies[id];
  const [name, setName] = useState(movie.name);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [poster, setPoster] = useState(movie.poster);
  const [trailer, setTrailer] = useState(movie.trailer);



  const editMovie = () => {

    console.log("Edited...");
    const updateMovie = {
      name,
      rating: parseInt(rating),
      summary,
      poster,
      trailer
    };
    
    const copy_movielist = [ ...Movies ];
    copy_movielist[id] = updateMovie
    setMovies(copy_movielist)
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

      <Button onClick={editMovie}  variant="outlined" >Save</Button>

    </div>

  );
}
