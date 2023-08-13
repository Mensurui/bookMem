import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Image from '../assets/images/avatar-icon.png'

export default function Header(){

    function fakeLogOut() {
        localStorage.removeItem("loggedIn")
    }
    return (
        <header className="App-header">
        <Link className="site-logo" to='/'>Author</Link>
        <nav>
        <NavLink to='/host' className={({isActive}) => isActive ? "active-link" : ""}>Host</NavLink>
        <NavLink to='/about' className={({isActive}) => isActive ? "active-link" : ""}>About</NavLink>
        <NavLink to='/books' className={({isActive}) => isActive ? "active-link" : ""}>Books</NavLink>
        <Link to="login" className="login-link"> <img src={Image} className="login-icon" alt=''/></Link>

        <button onClick={fakeLogOut}>X</button>
        </nav>
        </header>
    )
}