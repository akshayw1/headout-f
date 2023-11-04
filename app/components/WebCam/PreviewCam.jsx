import React, { useRef } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';

function PreviewCam() {
  const webcamRef = useRef(null);

  const start = () => {
    setInterval(async () => {
      const imageSrc = webcamRef.current.getScreenshot();
      
      const formData = new FormData();
      formData.append('image', imageSrc);
      const response =await axios.post('http://localhost:5000/frame', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      const prob = response.data;
      console.log(prob);
        // .then(response => {
        //   console.log(response.data);
        //   return response.data;
        // })
        // .then(
        //   response => {
        //     const result = document.querySelector('.result');
        //         result.innerHTML = response;
        //     }
        // )
        // .catch(error => {
        //   console.error(error);
        // });
    }
    ,3000);
  };

  return (
    <div className="App">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button onClick={start}>Start</button>
      <p className='result'>Data:</p>
    </div>
  );
}

export default PreviewCam;
