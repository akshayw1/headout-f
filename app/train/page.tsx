"use client"
import React from 'react'
import NavBar from '../components/Navbar/NavBar'
import WebCam from '../components/WebCam/WebCam'
import PreviewCam from '../components/WebCam/PreviewCam'

const train = () => {
  return (
    <div>
<NavBar/>
<WebCam/>
<PreviewCam/>
    </div>
  )
}

export default train;