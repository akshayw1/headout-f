import React from 'react'
import { Button } from "@/components/ui/button"
import Webcam from 'react-webcam';
import FinaLPreview from './FinaLPreview'


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useRef,useState } from 'react'

const WebCam = () => {
  const webcamRef = useRef(null);
  const [folderName, setFolderName] = useState(''); // Initialize with an empty folder name

  const handleFolderNameChange = (e) => {
    setFolderName(e.target.value);
  };

  const capture = async () => {

    const running = setInterval(async () => {
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
          console.error(error.message);
        });
    }
    ,100);
    setTimeout(() => {
      clearInterval(running)
    },1000);
  };

  return (
    <div className="flex w-full">
 


<div className="flex flex-col w-full lg:flex-row">
  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
  <Tabs defaultValue="account" className="w-[400px]">
    
    <TabsContent value="account">
    
      <Card className='widthcard'>
      <TabsList className="grid w-full grid-cols-2 flex">
      <TabsTrigger value="account">Upload By WebCam</TabsTrigger>
      <TabsTrigger value="password">File Upload</TabsTrigger>
    </TabsList>
        <div className='flex'>
        <CardContent className="space-y-2">

    <div className="flex"> 
          <div className="space-y-1">
       
            <Input id="name" defaultValue="Enter Class Name" placeholder="Enter Class Name"className='mt-6' />
            <Webcam
      audio={false}
      ref={webcamRef}
      screenshotFormat="image/jpeg" height={300} width={300}
    />
          </div>
         
    </div>
         
    
          
        </CardContent>



        </div>
        <CardFooter>
          <Button className='rounded-md'>Capture Images</Button>
        </CardFooter>
      </Card>
    </TabsContent>
    <TabsContent value="password">
   
    <Card>
      <TabsList className="grid w-full grid-cols-2 flex">
      <TabsTrigger value="account">Upload By WebCam</TabsTrigger>
      <TabsTrigger value="password">File Upload</TabsTrigger>
    </TabsList>
        <div className='flex'>
        <CardContent className="space-y-2">

    <div className="flex"> 
          <div className="space-y-1">
       
            <Input id="name" defaultValue="Enter Class Name" placeholder="Enter Class Name"className='mt-6' />
            <Webcam
      audio={false}
      ref={webcamRef}
      screenshotFormat="image/jpeg" height={300} width={300}
    />
          </div>
         

    </div>
         
         
          
        </CardContent>
dsadassfsafa
        <CardContent className='mt-10 bg-black'>
          
          


        </CardContent>

        </div>
        <CardFooter>
          <Button className='rounded-md'>Capture Images</Button>
        </CardFooter>
      </Card>


    </TabsContent>
  </Tabs>
    </div> 
 
</div>



</div>
      


  )
}

export default WebCam