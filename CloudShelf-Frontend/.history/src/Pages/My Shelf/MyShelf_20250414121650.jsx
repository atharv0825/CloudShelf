import React from 'react'
import NavigationBar from '../../Components/Navigation Bar/NavigationBar'
import ImageUpload from '../../Components/Image Upload/ImageUpload'
import MyFiles from '../../Components/My Files/myfiles'
import Footer from '../../Components/Footer/Footer'
const isLoggedIn = useAuth();
const MyShelf = () => {
    return (
        <>
            <NavigationBar />
            <ImageUpload />
            <hr className="mx-auto my-4 border-primary border-2" />
            <MyFiles/>
        </>
    )
}

export default MyShelf
