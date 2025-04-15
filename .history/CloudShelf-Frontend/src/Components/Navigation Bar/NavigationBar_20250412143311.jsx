import React from 'react';
import './NavigationBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div>
            <header className='header shadow-md '>
                <img src='./src/assets/cloudshelf logo H.png' className='logo'/>
                <nav className='navbar'>
                    <a href="/">Home</a>
                    <a href="/myShelf">My Shelf</a>
                    <a href='#pricing'>Plans and Pricing</a>
                    <a href='#footer'>Contact Us</a>
                    <Link></Link>
                    <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-100 font-medium rounded-lg text-sm px-2 py-2 text-center ">Login/Signup</button>
                </nav>
            </header>
        </div>
    )
}

export default NavigationBar;
