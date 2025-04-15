import React from 'react'
import NavigationBar from '../../Components/Navigation Bar/NavigationBar'
import ImageUpload from '../../Components/Image Upload/ImageUpload'

const HomePage = () => {
  return (
    <div className='container mt-10'>
        <NavigationBar/>
        <ImageUpload/>
        <ImageUpload/>
    </div>
  )
}

export default HomePage
