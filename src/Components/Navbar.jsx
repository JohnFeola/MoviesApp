import React from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';


const Navbar = (props) => {

    const movieCount = useSelector(state => state.movie.movies.length);
  return (
    <nav className='navbar'>
        <div className='brand-container'>
            <div className='navbar-brand'>
               <NavLink to='/' className='notnec'>
                <img src='https://prodimages.everythingneon.com/large/n105-6797-blue-movies-neon-sign.jpg' alt='movie logo' className='logo'></img>
                </NavLink>
            </div>
            <div className='navbar-name'>
                {/* <h1>MoreMovies.com</h1> */}
            </div>
        </div>
        <ul className='navbar-links'>
            <li className='nav-item'>
                <NavLink to='/' className='nav-link'>{props.firstLink}</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/searchmovies' className='nav-link' activeClassName="active" >Search Movies</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/movielist' className='nav-link' activeClassName="active" >My List ({movieCount})</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/contactus' className='nav-link' activeClassName="active" >Contact us</NavLink>
            </li>
            
        </ul>
    </nav>
  )
}

export default Navbar;