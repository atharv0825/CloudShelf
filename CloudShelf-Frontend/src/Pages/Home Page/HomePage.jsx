import React from 'react'
import NavigationBar from '../../Components/Navigation Bar/NavigationBar'
import ImageUpload from '../../Components/Image Upload/ImageUpload'
import Header from '../../Components/Home page/Header'
import KeyFeatures from '../../Components/Key Features/KeyFeatures'
import Plans from '../../Components/Pricing and Plans/plans'
import Footer from '../../Components/Footer/Footer'

const HomePage = () => {
  return (
    <div className='container mt-24'>
        <NavigationBar/>
        <Header/>
        <KeyFeatures/>
        <Plans/>
        <Footer/>
    </div>
  )
}

export default HomePage
