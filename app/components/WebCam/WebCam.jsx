import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';

function WebCam() {
  const webcamRef = useRef(null);
  const [folderName, setFolderName] = useState(''); // Initialize with an empty folder name

  const handleFolderNameChange = (e) => {
    setFolderName(e.target.value);
  };

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    
    const formData = new FormData();
    formData.append('folderName', folderName);
  
    formData.append('image', imageSrc);
    axios.post('http://localhost:5000/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <input
        type="text"
        placeholder="Enter folder name"
        value={folderName}
        onChange={handleFolderNameChange}
      />
      <button onClick={capture}>Capture photo</button>
    </div>
  );
}

export default WebCam;
