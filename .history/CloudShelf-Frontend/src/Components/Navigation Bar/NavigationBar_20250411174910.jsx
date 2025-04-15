import React from 'react';
import './NavigationBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const NavigationBar = () => {
    return (
        <div>
            <header className='header shadow-md '>
                <img src='./src/assets/cloudshelf logo H.png' className='logo'/>
                <nav className='navbar'>
                    <a href="/">Home</a>
                    <a href="/">My Shelf</a>
                    <a href='#pricing'>Plans and Pricing</a>
                    <a href='#footer'>Contact Us</a>
                </nav>
            </header>
        </div>
    )
}

export default NavigationBar;
