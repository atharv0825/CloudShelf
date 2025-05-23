import React from 'react'
import useAuth from '../../Hooks/session'

const Nologin = () => {
    <ImageUpload />
            <hr className="mx-auto my-4 border-primary border-2" />
            <MyFiles/>

    return (
        <div>
            <div className="row text-center mt-20">
                <div className="col">
                    <h2 className="display-4 fw-bold gradient-text">Welcome Back! Please Log In</h2>
                    <p className="text-muted">Sign in to explore all features.</p>
                </div>
            </div>
        </div>
    )
}

export default Nologin
