import React from 'react'
import { Button } from "@/components/ui/button"
import Webcam from 'react-webcam';


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

const TrainModel = () => {
  return (
    <div>
        <div className="flex flex-col w-full lg:flex-row">
  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">

  <Card className='widthcard'>
      
      <div className='flex'>

        <CardHeader>
          Train Model Now
        </CardHeader>
      



      </div>
      <CardFooter className='flex flex-col'>
      <Button className='rounded-md w-full mt-2'>Train Model</Button>
      <Button className='rounded-md w-full mt-2'>Test Model</Button>
      </CardFooter>
    </Card>
  {/* <Tabs defaultValue="account" className="w-[400px]">
    
    <TabsContent value="account">
    
     
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
  </Tabs> */}
    </div> 
 
</div>



    </div>
  )
}

export default TrainModel