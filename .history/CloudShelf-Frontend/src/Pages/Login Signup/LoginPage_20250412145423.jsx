import React, { useRef } from 'react';
import './loginSignup.css';
const LoginPage = () => {

    const loginTextRef = useRef(null);
    const loginFormRef = useRef(null);

    const handleSignupClick = () => {
        if (loginFormRef.current && loginTextRef.current) {
            loginFormRef.current.style.marginLeft = "-50%";
            loginTextRef.current.style.marginLeft = "-50%";
        }
    };

    const handleLoginClick = () => {
        if (loginFormRef.current && loginTextRef.current) {
            loginFormRef.current.style.marginLeft = "0%";
            loginTextRef.current.style.marginLeft = "0%";
        }
    };

    const handleSignupLinkClick = (e) => {
        e.preventDefault();
        handleSignupClick();
    };

    return (
        <div className="body_wrapper ">
            <div className="title-text">
                <div className="title login">Login Form</div>
                <div className="title signup">Signup Form</div>
            </div>
            <div className="form-container">
                <div className="slide-controls">
                    <input type="radio" name="slide" id="login" defaultChecked />
                    <input type="radio" name="slide" id="signup" />
                    <label htmlFor="login" className="slide login">Login</label>
                    <label htmlFor="signup" className="slide signup">Signup</label>
                    <div className="slider-tab"></div>
                </div>
                <div className="form-inner">
                    <form action="#" className="login">
                        <div className="field">
                            <input type="text" placeholder="Email Address" required />
                        </div>
                        <div className="field">
                            <input type="password" placeholder="Password" required />
                        </div>
                        <div className="pass-link"><a href="#">Forgot password?</a></div>
                        <div className="field btn">
                            <div className="btn-layer"></div>
                            <input type="submit" value="Login" />
                        </div>
                        <div className="signup-link">Not a member? <a href="#">Signup now</a></div>
                    </form>

                    <form action="#" className="signup">
                        <div className="field">
                            <input type="text" placeholder="Email Address" required />
                        </div>
                        <div className="field">
                            <input type="password" placeholder="Password" required />
                        </div>
                        <div className="field">
                            <input type="password" placeholder="Confirm password" required />
                        </div>
                        <div className="field btn">
                            <div className="btn-layer"></div>
                            <input type="submit" value="Signup" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
