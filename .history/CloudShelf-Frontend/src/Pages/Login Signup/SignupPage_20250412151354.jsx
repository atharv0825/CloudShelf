import React, { useRef } from 'react';

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
    
  )
}

export default SignupPage;
