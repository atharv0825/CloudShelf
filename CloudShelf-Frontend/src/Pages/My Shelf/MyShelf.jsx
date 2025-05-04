import React from 'react'
import NavigationBar from '../../Components/Navigation Bar/NavigationBar'
import ImageUpload from '../../Components/Image Upload/ImageUpload'
import MyFiles from '../../Components/My Files/myfiles'
import Footer from '../../Components/Footer/Footer'
import useAuth from '../../Hooks/session'
import Nologin from '../../Components/Not Logged/Nologin'

const MyShelf = () => {
    const isLoggedIn = useAuth();


    return (
        <>
            <NavigationBar />
            {isLoggedIn ?
                (
                    <>
                        <ImageUpload />
                        <hr className="mx-auto my-4 border-primary border-2" />
                        <MyFiles />
                    </>
                ) : (
                    <Nologin/>
                )
            }
        </>
    )
}

export default MyShelf
