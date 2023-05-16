import './List.css'
import React from 'react'
import { useSelector } from 'react-redux';

const List = () => {
    const list = useSelector((state) => state.list);

    return( 
        <div className='list'>
            <h1 className='list-title'>My List:</h1>
            {list.map(movie =>{
                <div key={movie.id}>
                    <h2>{movie.title}</h2>
                </div>
            })}
        </div>
    )
}

export default List;