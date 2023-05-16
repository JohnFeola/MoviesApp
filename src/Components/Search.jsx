import React, {useState} from 'react';
import axios from 'axios';
import './Search.css';


const MovieSearch = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    async function handleSubmit(event){
        event.preventDefault();

        const response = await axios.get(`http://www.omdbapi.com/?t=${query}&apikey=ee9787bf`);

        if(response.data.Response === "True"){
            setMovies(prevMovies => [...prevMovies, response.data]);
            setQuery('');
        }else{
            alert(response.data.Error);
        }
    }
    //push breaks to an array so that scroll bar also appears in https://.../searchmovies
    const numBr = 25;
    const breaks = [];
    for(let i = 0; i < numBr; i++){
        breaks.push(<br/>);
    }

    return(
            <div className='search'>
                <div className='search-bar'>
              <form onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  placeholder="Enter movie name..." 
                  value={query} 
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button className='search-submit' type="submit">Search</button>
              </form>
              </div>
              
                {movies.map((movie, index) => (
                <div key={index}>
                    <div className='search-details'>
                    <h2>{movie.Title} ({movie.Year})</h2>
                    <p>{movie.Plot}</p>
                    </div>
                </div>
                ))}
             
                <div className='breaks'>{breaks}</div>
                <p>Email: info@example.com Phone: +1-123-456-7890 Follow us on social media: Facebook: facebook.com/example Twitter: twitter.com/example
Instagram: instagram.com/exampl. All rights reserved © 2023 Example Company.</p>

            </div>
    );
}


export default MovieSearch;