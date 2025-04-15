import React from 'react'
import NavigationBar from '../../Components/Navigation Bar/NavigationBar'
import ImageUpload from '../../Components/Image Upload/ImageUpload'
import MyFiles from '../../Components/My Files/myfiles'

const MyShelf = () => {
    return (
        <>
            <NavigationBar />
            <ImageUpload />
            @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

* {
  box-sizing: border-box;
}

body {
  font-family: 'Muli', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
}

.myfiles-container {
  display: flex;
  width: 90vw;
}

.myfiles-panel {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  flex: 0.5;
  margin: 10px;
  position: relative;
  -webkit-transition: all 700ms ease-in;
}

.myfiles-panel h3 {
  font-size: 24px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin: 0;
  opacity: 0;
}

.myfiles-panel.myfiles-active {
  flex: 5;
}

.myfiles-panel.myfiles-active h3 {
  opacity: 1;
  transition: opacity 0.3s ease-in 0.4s;
}

@media (max-width: 480px) {
  .myfiles-container {
    width: 100vw;
  }

  .myfiles-panel:nth-of-type(4),
  .myfiles-panel:nth-of-type(5) {
    display: none;
  }
}

        </>
    )
}

export default MyShelf
