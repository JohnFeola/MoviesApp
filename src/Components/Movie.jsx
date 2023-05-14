import React from 'react'
import './Movie.css'
import {Link} from 'react-router-dom';

const Movie = (props) => {
  return (
    <Link to={`/movie/${props.id}`}>
    <div className='movie'>
        <h3 className='movie-name'>{props.name}</h3>
        <img className='movie-pic' src={props.src} alt='movie poster'/>
        <p className='movie-year'>{props.year}</p>
    </div>
    </Link>
  )
}

export default Movie;