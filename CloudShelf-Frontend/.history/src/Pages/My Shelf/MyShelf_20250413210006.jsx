import React from 'react'
import NavigationBar from '../../Components/Navigation Bar/NavigationBar'
import ImageUpload from '../../Components/Image Upload/ImageUpload'
import MyFiles from '../../Components/My Files/myfiles'
import Footer from '../../Components/Footer/Footer'

const MyShelf = () => {
    return (
        <>
            <NavigationBar />
            </hr>
            <ImageUpload />
            <MyFiles/>
        </>
    )
}

export default MyShelf
