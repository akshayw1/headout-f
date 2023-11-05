"use client"
import React from 'react'
import NavBar from '../components/Navbar/NavBar'
import TextMod from '../components/TextTrain/TextMod/TextMod'
import Traintext from '../components/TextTrain/Traintext/Traintext'
import TextPredict from '../../app/components/TextTrain/TextPredict/TextPredict'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const textModel = () => {
  return (
    <div>

<NavBar/>
<div className='widthcard'>


<TextMod/>
<Traintext/>
<TextPredict/>
<ToastContainer />
</div>

    </div>
  )
}

export default textModel