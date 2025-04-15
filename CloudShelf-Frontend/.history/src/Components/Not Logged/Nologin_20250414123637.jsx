import React from 'react'
import { Link } from 'react-router-dom'

const Nologin = () => {


    return (
        <div className='mt-40'>
            <div className="row text-center ">
                <div className="col">
                    <h2 className="display-4 fw-bold gradient-text">Welcome Back! Please Log In</h2>
                    <p className="text-muted">Sign in to explore all features.</p>
                </div>
            < Link to="/login" >
                <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-100 font-medium rounded-lg text-sm px-2 py-2 text-center ">Login/Signup</button>
            </Link>
            </div>
            <div className=''>
                
            </div>
        </div>
    )
}

export default Nologin
