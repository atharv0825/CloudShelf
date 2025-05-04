import { useState } from 'react'
import './App.css'
import HomePage from './Pages/Home Page/HomePage'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './Pages/Login Signup/LoginPage'
import SignupPage from './Pages/Login Signup/SignupPage'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import MyShelf from './Pages/My Shelf/MyShelf';

function App() {
  const token = localStorage.getItem('token');
  return (
    <BrowserRouter>
      <Routes>
      {/* <Route 
          path="/" 
          element={token ? <HomePage /> : <Navigate to="/login" />} 
          /> */}
          <Route path='/' element={<HomePage/>} />
          <Route path='/myShelf' element={<MyShelf/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<SignupPage/>} />
        <
        
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
