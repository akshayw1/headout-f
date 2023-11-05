"use client"
import React from 'react'
import NavBar from '../components/Navbar/NavBar'
import WebCam from '../components/WebCam/WebCam'
import PreviewCam from '../components/WebCam/PreviewCam'
import FinaLPreview from '../components/WebCam/FinaLPreview'
import TrainModel from '../components/TrainModel/TrainModel'
import Test from '../components/Test/Test'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const train = () => {
  return (
    <div>
<NavBar/>
<div className="mainboard">
<WebCam/>
<TrainModel/>
{/* <FinaLPreview/> */}
{/* <PreviewCam/> */}
</div>

<ToastContainer />




    </div>
  )
}

export default train;