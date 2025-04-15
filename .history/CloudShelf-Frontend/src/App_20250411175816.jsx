import { useState } from 'react'
import './App.css'
import ImageUpload from './Components/Image Upload/ImageUpload'
import HomePage from './Pages/Home Page/HomePage'
import { Route , Routes } from 'react-router-dom' 
function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/my' element={<HomePage/>}/>
      </Routes>
    </>
  )
}

export default App
