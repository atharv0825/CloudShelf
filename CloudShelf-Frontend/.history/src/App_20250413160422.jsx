import { useState } from 'react'
import './App.css'
import ImageUpload from './Components/Image Upload/ImageUpload'
import HomePage from './Pages/Home Page/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './Pages/Login Signup/LoginPage'
import SignupPage from './Pages/Login Signup/SignupPage'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route 
          path="/" 
          element={token ? <HomePage /> : <Navigate to="/login" />} 
        />
        <Route path='/myShelf' element={<ImageUpload />} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<SignupPage/>} />
        
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
