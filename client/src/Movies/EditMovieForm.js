import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialMovie = {
  title: '',
  director: '',
  metascore: 0,
  stars: []
};

const EditMovieForm = (props) => {
    console.log('props', props)

    const [movie, setMovie] = useState(initialMovie)

    const handleChange = e => {
        e.persist();
        let value = e.target.value
        if (e.target.name === 'stars') {
          value=value.split(',')
        }
        setMovie({
            ...movie,
            [e.target.name]: value
        })
    }



    useEffect(() => {
      // only set the state if we have data from the api
      // Solves refresh race condition
      if (props.movies.length > 0) {
        const editedMovie = props.movies.find(
          thing => `${thing.id}` === props.match.params.id
        );
        setMovie(editedMovie);
      }
    }, [props.movies, props.match.params.id]);


    const handleSubmit = e => {
      e.preventDefault();
      axios
      .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
      .then(res => {
        console.log(res);
        const editedMovieArray = props.movies.map(el => {
          if (el.id !== res.data.id) {
            return el
          } else {
            return res.data
        }})
        props.updateMovies(editedMovieArray);
        props.history.push(`/movies/${movie.id}`);
      })
      .catch(err => console.log(err));
  };

  // loading state if we don't have data yet
  if (props.movies.length === 0) {
    return <h2>Loading data...</h2>; 
    }

    return (
        <div className="editMovieForm">
            <h1>Update Movie</h1>
        <form onSubmit={handleSubmit}>
        <div className="fieldContainer">
            <div className="title">
              <label htmlFor="title"><h3>Title</h3></label>
              <div className="inputContainer">
                <input onChange={handleChange} type="text" name="title" value={movie.title} placeholder="Movie Title" size="30" required/>
              </div>
            </div>
        </div>
        <div className="fieldContainer">
            <div className="director">
              <label htmlFor="director"><h3>Director</h3></label>
              <div className="inputContainer">
                <input onChange={handleChange} type="text" name="director" value={movie.director} placeholder="Movie director" size="30" required/>
              </div>
            </div>
        </div>
        <div className="fieldContainer">
            <div className="stars">
              <label htmlFor="stars"><h3>Metascore</h3></label>
              <div className="inputContainer">
                <input onChange={handleChange} type="number" name="metascore" value={movie.metascore} placeholder="metascore" size="30" required/>
              </div>
            </div>
        </div>
        <div className="fieldContainer">
            <div className="stars">
              <label htmlFor="stars"><h3>Stars</h3></label>
              <div className="inputContainer">
                <input onChange={handleChange} type="text" name="stars" value={movie.stars} placeholder="Movie stars" size="50" required/>
              </div>
            </div>
        </div>
        <div className="formButtonContainer">
            <button type="submit">Update Movie</button>
        </div>
      </form>    
    </div>  
    )
}

export default EditMovieForm