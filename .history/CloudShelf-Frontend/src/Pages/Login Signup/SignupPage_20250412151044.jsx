import React, { useRef } from 'react';
import './Signup.css';

const SignupPage = () => {
  const loginText = useRef(null);
  const loginForm = useRef(null);

  const switchToSignup = () => {
    loginForm.current.style.marginLeft = "-50%";
    loginText.current.style.marginLeft = "-50%";
  }

  const switchToLogin = () => {
    loginForm.current.style.marginLeft = "0%";
    loginText.current.style.marginLeft = "0%";
  }

  return (
    <div className="wrapper">
      <div className="title-text" ref={loginText}>
        <div className="title login">Login Form</div>
        <div className="title signup">Signup Form</div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input type="radio" name="slide" id="login" defaultChecked />
          <input type="radio" name="slide" id="signup" />
          <label htmlFor="login" className="slide login" onClick={switchToLogin}>Login</label>
          <label htmlFor="signup" className="slide signup" onClick={switchToSignup}>Signup</label>
          <div className="slider-tab"></div>
        </div>
        <div className="form-inner" ref={loginForm}>
          <form className="login">
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
            <div className="signup-link">
              Not a member? <a href="#" onClick={(e) => { e.preventDefault(); switchToSignup(); }}>Signup now</a>
            </div>
          </form>

          <form className="signup">
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

export default SignupPage;
