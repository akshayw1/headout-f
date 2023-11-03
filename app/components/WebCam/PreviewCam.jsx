import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';

function PreviewCam() {
  const webcamRef = useRef(null);


    setInterval(async () => {
      const imageSrc = webcamRef.current.getScreenshot();
      
      const formData = new FormData();
      formData.append('image', imageSrc);
      axios.post('http://localhost:5000/frame', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(response => {
          response.json()
        })
        .then(
            response => {
                const result = document.querySelector('.result');
                result.innerHTML = response;
            }
        )
        .catch(error => {
          console.error(error.message);
        });
    }
    ,3000);

  return (
    <div className="App">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <p className='result'></p>
    </div>
  );
}

export default PreviewCam;
