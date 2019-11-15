import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from 'axios';

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import EditMovieForm from "./Movies/EditMovieForm"


const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  const [movies, setMovies] = useState([]);

  useEffect(() => {
      axios
        .get("http://localhost:5000/api/movies")
        .then(res => setMovies(res.data ))
        .catch(err => console.log(err.response));
  }, [])

  return (
    <>
      <SavedList list={savedList} />
      <Route 
        exact 
        path="/" 
        render={props => {
        return <MovieList {...props} movies={movies} />
        }}
        />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
      <Route
        exact
        path="/update-movie/:id"
        render={props => (
          <EditMovieForm {...props} movies={movies} updateMovies={setMovies} />
        )}
      />
    </>
  );
};

export default App;
