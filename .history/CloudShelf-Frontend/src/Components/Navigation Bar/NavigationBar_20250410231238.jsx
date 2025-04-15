import React from 'react';
import './NavigationBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const NavigationBar = () => {
    return (
        <div>
            <header className='header'>
                <img src='./src/assets/cloudshelf main.png' className='logo'/>
                <nav>
                    <a href="/">Home</a>
                    <a href="/">My Shelf</a>
                    <a href='/'
                </nav>
            </header>
        </div>
    )
}

export default NavigationBar;
