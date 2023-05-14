import React from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='brand-container'>
            <div className='navbar-brand'>
                <img src='https://prodimages.everythingneon.com/large/n105-6797-blue-movies-neon-sign.jpg' alt='movie logo' className='logo'></img>
            </div>
            <div className='navbar-name'>
                {/* <h1>MoreMovies.com</h1> */}
            </div>
        </div>
        <ul className='navbar-links'>
            <li className='nav-item'>
                <NavLink to='/' className='nav-link'>Movies</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/contactus' className='nav-link' activeClassName="active" >Contact Us</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;