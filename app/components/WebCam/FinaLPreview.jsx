import React from 'react'
import { Button } from "@/components/ui/button"
import Webcam from 'react-webcam';
import { Typography } from "@material-tailwind/react";
import { Progress } from "@/components/ui/progress"



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

const Preview = () => {
  const webcamRef = useRef(null);
  const [folderName, setFolderName] = useState(''); 
  const classset=[
    {
        classname : "Akshay",
        PredictScore: "33"
    },
    {
        classname : "Joth",
        PredictScore: "66"
    }
  ]

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
    <TabsTrigger value="account">Open  WebCam</TabsTrigger>
  </TabsList>
      <div className='flex'>
      <CardContent className="space-y-2">

  <div className="flex"> 
        <div className="space-y-1">
     
         <Label>Preview</Label>
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
     
      <div className="w-full">
      

      
     
      {
        classset.map((e,index)=>(
            <div className="PreviewCl" key={index}>
            <div className="mb-2 flex items-center justify-between gap-4">
              <Typography color="blue-gray" variant="h6">
                {e.classname}
              </Typography>
              <Typography color="blue-gray" variant="h6">
                {e.PredictScore}%
              </Typography>
            </div>
            <Progress value={e.PredictScore} />
            </div> 
        ))
      }

      
    </div>
      </CardFooter>
    </Card>
  </TabsContent>

</Tabs>
  </div> 

</div>

</div>
      


  )
}

export default Preview