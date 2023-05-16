import './MovieList.css'
import React from 'react';
import { useSelector } from 'react-redux';

const MovieList = () => {
  const movies = useSelector(state => state.movie.movies);


  const renderBreaks = (numBreaks) =>{
    let breaks = [];
    for(let i = 0; i < numBreaks; i++){
        breaks.push(<br key={i}/>);
    }
    return breaks;
  }

  return (
    <div className='movielist'>
      <h1 className='movielist-title'>My List</h1>
      <div className='movielist-movies'>
      {movies.map(movie => <h2 key={movie.id}> {movie.title}</h2>)}
        </div>
        {renderBreaks(25)}
        <p>Contact us:
Email: info@example.com Phone: +1-123-456-7890 Follow us on social media: Facebook: facebook.com/example Twitter: twitter.com/example
Instagram: instagram.com/exampl. All rights reserved © 2023 Example Company.</p>
    </div>
  );
}

export default MovieList;
