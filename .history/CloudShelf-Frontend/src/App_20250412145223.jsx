import { useState } from 'react'
import './App.css'
import ImageUpload from './Components/Image Upload/ImageUpload'
import HomePage from './Pages/Home Page/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './Pages/Login Signup/LoginPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/myShelf' element={<ImageUpload />} />
        <Route path='/login' element={} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
