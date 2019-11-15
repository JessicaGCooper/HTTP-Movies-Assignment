import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MovieCard from './MovieCard'

const Movie = (props) => {

  console.log('Movie Props', props)

  const [movie, setMovie] = useState();

  useEffect(() => {

    const id = props.match.params.id

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[props.match.params.id]);

  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }

  // useEffect(())

  const deleteMovie = () => {
    axios
      .delete(`http://localhost:5000/api/movies/${movie.id}`)
      .then(res => {
        // you may need to build the array of items here
        // if the API doesn't return the full array
        // your new items list would then be passed into
        // props.updateItems
        // (refer to todolist logic)
        console.log(res)
        const newMovieList = props.movies.filter(el => {
          return el.id !== res.data
        })
        props.updateMovies(newMovieList);
        props.history.push('/movie-list');
      })
      .catch(err => console.log(err));
  };

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
        <MovieCard  movie={movie} />
        <div onClick={() => saveMovie()} className="save-button">Save</div>
      <div className="button-wrapper" >
        <button
        className="md-button"
        onClick={() => props.history.push(`/update-movie/${movie.id}`)} >
          Edit
        </button>
        <button className="md-button" onClick={() => deleteMovie()}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Movie;