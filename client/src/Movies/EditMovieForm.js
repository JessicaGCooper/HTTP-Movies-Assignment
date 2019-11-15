import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const intialMovie = {
  title: '',
  director: '',
  metascore: 0,
  stars: []
};

const EditMovieForm = (props) => {
    console.log('props', props)

    let history = useHistory();

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     // axiosWithAuth ==> ?? an axios instance; .post() ==> ?? promise
    //     axios
    //      .post('/api/Movies', newMovie)
    //      .then( res => {
    //          console.log(res);
    //          //redirect to main Movies list
    //          history.push("/Movies")
    //         //  props.history.push('/Movies')
    //      })
    //      .catch( err => console.log(err));
    // }

    // const handleChange = e => {
    //     setNewMovie({
    //         ...newMovie,
    //         [e.target.name]: e.target.value
    //     })
    // }

    return (
        <div className="editMovieForm">
            {/* <h1>Edit Movie</h1>
        <form onSubmit={handleSubmit}>
        <div className="fieldContainer">
            <div className="title">
              <label htmlFor="title"><h3>Title</h3></label>
              <div className="inputContainer">
                <input onChange={handleChange} type="text" name="title" value={newMovie.title} placeholder="Movie Title" size="30" required/>
              </div>
            </div>
        </div>
        <div className="fieldContainer">
            <div className="director">
              <label htmlFor="director"><h3>Director</h3></label>
              <div className="inputContainer">
                <input onChange={handleChange} type="text" name="director" value={newMovie.director} placeholder="Movie director" size="30" required/>
              </div>
            </div>
        </div>
        <div className="fieldContainer">
            <div className="stars">
              <label htmlFor="stars"><h3>stars</h3></label>
              <div className="inputContainer">
                <input onChange={handleChange} type="number" name="stars" value={newMovie.stars} placeholder="Movie stars" size="30" required/>
              </div>
            </div>
        </div>
        <div className="fieldContainer">
            <div className="stars">
              <label htmlFor="stars"><h3>Stars</h3></label>
              <div className="inputContainer">
                <input onChange={handleChange} type="text" name="stars" value={newMovie.stars} placeholder="Movie stars" size="30" required/>
              </div>
            </div>
        </div>
        <div className="formButtonContainer">
            <button type="submit">Add Movie</button>
        </div>
      </form>     */}
    </div>  
    )
}

export default EditMovieForm