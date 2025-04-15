import React from 'react'

const Header = () => {
  return (
    <div className="p-5 mb4 bg-light rounded-3 mt-1"
    style={{
        backgroundColor:"#91fac0",
      }}>
        <div className="container-fluid py-5 header_template">
            <img src='./src/assets/cloudshelf logo H.png'/>
            {/* <h1 className='display-5 fw-bold'>CloudShelf</h1> */}
            <p className="col-md-10 fs-3 pl-5 mt-1">
                Your Smart, Secure, and Scalable Cloud Storage
            </p>
         
            <p className="col-md-10 fs-6 pl-5 mt-1">
            Organize, store, and access your files anytime, anywhere.
            Designed for simplicity. Powered by the cloud.
            </p>
         
        </div>
    </div>
  )
}

export default Header
