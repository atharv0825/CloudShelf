import React from 'react'

const Header = () => {
  return (
    <div className="p-5 mb4 bg-light rounded-3 mt-1"
    style={{
        backgroundColor:"#91fac0",
      }}>
        <div className="container-fluid py-5 header_template">
            <img src='./src/assets/cloudshelf main.png'/>
            <h1 className='display-5 fw-bold'>CloudShelf</h1>
            <p className="col-md-8 fs-4">
                Discover the best food and drinks
            </p>
         
        </div>
    </div>
  )
}

export default Header
