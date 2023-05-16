import React from 'react'
import YouTube from 'react-youtube';
import './Details.css';
import { useParams } from 'react-router-dom';
import { moviesData } from './moviesData';
import { useDispatch } from 'react-redux';
import { addMovie } from '../movieSlice';

const Details = () => {
    const {id} = useParams();
    const props = moviesData.find(movie => movie.id === parseInt(id)) //renamed movie-> props to avoid typing, movie is more logical
    const dispatch = useDispatch();

    const opts = {
        height: '390',
        width: '640',
      };


      const handleAddMovie = () => {
        dispatch(addMovie(props));
      }

  return (
    <div className='details'>
        <h1 className='details-title'>{props.title}</h1>
        <div className='details-buttons'>
        <button className='details-button' onClick={handleAddMovie}>Add to My List</button>
        </div>
        <img  className='details-picture' src={props.src} alt='movie poster'/>
        <div className='details-trailer'>
            <YouTube videoId={props.videoId} opts={opts}/>
        </div>
        <div className='details-extra'>
          <h2>Details</h2>
          <span className='details-sum'>Summary: </span>
          <span className='details-summary'> {props.summary}</span><br/>
          <p className='details-revenue'> Box Office Revenue: {props.revenue}</p>
          <p className='details-year'>Debut: {props.year}</p>
        </div>
    </div>
  )
}

export default Details