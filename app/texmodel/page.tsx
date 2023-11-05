"use client"
import React from 'react'
import NavBar from '../components/Navbar/NavBar'
import TextMod from '../components/TextTrain/TextMod/TextMod'
import Traintext from '../components/TextTrain/Traintext/Traintext'
import TextPredict from '../../app/components/TextTrain/TextPredict/TextPredict'
const textModel = () => {
  return (
    <div>

<NavBar/>
<div className='widthcard'>


<TextMod/>
<Traintext/>
<TextPredict/>

</div>

    </div>
  )
}

export default textModel