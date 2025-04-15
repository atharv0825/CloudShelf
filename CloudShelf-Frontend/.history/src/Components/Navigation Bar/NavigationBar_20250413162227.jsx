import React from 'react';
import './NavigationBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/session';
const NavigationBar = () => {

    const navigate = useNavigate();
    const isLoggedIn = useAuth(); // to check that user is logged in or not
    //it checj the token exist in the local storage or not

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/login");
    };

    return (
        <div>
            <header className='header shadow-md '>
                <img src='./src/assets/cloudshelf logo H.png' className='logo' />
                <nav className='navbar'>
                    <a href="/">Home</a>
                    <a href="/myShelf">My Shelf</a>
                    <a href='#pricing'>Plans and Pricing</a>
                    <a href='#footer'>Contact Us</a>



                    {
                    isLoggedIn ? (
                        <div className="dropdown btn_nav">
                            <button
                                className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-100 font-medium rounded-lg text-sm px-2 py-2 text-center "
                                type="button"
                                id="userMenu"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                My Account
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userMenu">
                                <li><a className="dropdown-item" href="/profile">Profile</a></li>
                                <li><a className="dropdown-item" href="/settings">Settings</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><button className="dropdown-item text-danger" onClick={handleLogout}>Logout</button></li>
                            </ul>
                        </div>
                    ) : (
                        < Link to="/login" >
                            <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-100 font-medium rounded-lg text-sm px-2 py-2 text-center ">Login/Signup</button>
                        </Link>
                    )
                    }
                </nav>
            </header>
        </div >
    )
}

export default NavigationBar;
