import React from 'react'

const Header = () => {
    return (
        <div className="p-5 mb4 bg-light rounded-3 mt-1 header_main"
            style={{
                backgroundImage: "url('./src/assets/header')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
                zIndex: 1
            }}>
            <div className="container-fluid py-5 header_template"
                style={{ position: 'relative', zIndex: 2 }}>


                <img src='./src/assets/cloudshelf logo H.png' />
                {/* <h1 className='display-5 fw-bold'>CloudShelf</h1> */}
                <p className="col-md-10 fs-3 pl-5 mt-1">
                    Your Smart, Secure, and Scalable Cloud Storage
                </p>

                <p className="col-md-10 fs-6 pl-5 mt-1">
                    CloudShelf is a cloud-based storage platform that lets users securely upload, access, and manage files anytime, anywhere.
                </p>

            </div>
        </div>
    )
}

export default Header
