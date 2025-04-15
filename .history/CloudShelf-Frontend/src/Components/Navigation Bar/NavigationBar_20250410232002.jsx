import React from 'react';
import './NavigationBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const NavigationBar = () => {
    return (
        <div>
            <header className='header'>
                <img src='./src/assets/' className='logo'/>
                <nav>
                    <a href="/">Home</a>
                    <a href="/">My Shelf</a>
                    <a href='/'>Plans and Pricing</a>
                    <a href='/'>Services</a>
                    <a href='/'>Contact Us</a>
                </nav>
            </header>
        </div>
    )
}

export default NavigationBar;
