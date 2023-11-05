import React from "react";
import { Button } from "@/components/ui/button";
import Webcam from "react-webcam";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRef, useState } from "react";

const WebCam = () => {
  const webcamRef = useRef(null);
  const [folderName, setFolderName] = useState(""); 
  const [showWebcam, setShowWebcam] = useState(false);
   const [cards, setCards] = useState([]);
  const [uniqueCardId, setUniqueCardId] = useState(1);
  // Initialize with an empty folder name
  const[isCaptureEnabled,setCaptureEnabled]= useState(false);

  const handleFolderNameChange = (e) => {
    const newFolderName = e.target.value;
    setFolderName(newFolderName);

    // Enable the capture button when a folder name is provided
    setCaptureEnabled(!!newFolderName);
    setShowWebcam(true);

  };
  const addNewCard = () => {
    const newCard = {
      id: uniqueCardId,
    };
    setCards([...cards, newCard]);
    setUniqueCardId(uniqueCardId + 1);
  };
  const removeCard = (id) => {
    const updatedCards = cards.filter(card => card.id !== id);
    setCards(updatedCards);
  };


  let count =1;
  const capture = async () => {
    if (!isCaptureEnabled) {
      // Prevent capturing without a folder name
      toast.error('Please Enter a Class');
      return;
    }

    toast.success('Image capture started');

   
    const running = setInterval(async () => {
      const imageSrc = webcamRef.current.getScreenshot();
      count++;
      const formData = new FormData();
      formData.append("folderName", folderName);
      formData.append("image", imageSrc);
      axios
        .post("http://localhost:8080/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error.message);
        });
    }, 100);
    setTimeout(() => {
      clearInterval(running);
      toast.success('Suceessfully Added Images Datasets');
    }, 1000);
    
  };

  return (
    <Tabs defaultValue="WebCam" className="w-[400px]">
    <TabsContent value="WebCam">
      <Card className="">
        <TabsList className="grid w-full grid-cols-2 flex">
          <TabsTrigger value="WebCam">Upload By WebCam</TabsTrigger>
          <TabsTrigger value="FileUpload">File Upload</TabsTrigger>
        </TabsList>
        <div className="flex">
          <CardContent className="space-y-2">
            <div className="flex">
              <div className="space-y-1">
                <Input
                  id="name"
                  defaultValue=""
                  placeholder="Enter Class Name"
                  className="mt-6"
                  onChange={handleFolderNameChange}
                />
                {showWebcam && (
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    height={300}
                    width={300}
                  />
                )}
              </div>
            </div>
          </CardContent>
        </div>
        <CardFooter>
          <Button className="rounded-full" onClick={capture}>
            Capture Images
          </Button>
        </CardFooter>
        <div className="w-full flex justify-end justify-between m-6">
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded-full " onClick={addNewCard}>
  Add Class
</button>

            </div>
        
      </Card>

      {cards.map((card) => (
        <div className="m-10">
            <Card key={card.id} className="">
              <TabsList className="grid w-full grid-cols-2 flex">
          <TabsTrigger value="WebCam">Upload By WebCam</TabsTrigger>
          <TabsTrigger value="FileUpload">File Upload</TabsTrigger>
        </TabsList>
        <div className="flex">
          <CardContent className="space-y-2">
            <div className="flex">
              <div className="space-y-1">
                <Input
                  id="name"
                  defaultValue=""
                  placeholder="Enter Class Name"
                  className="mt-6"
                  onChange={handleFolderNameChange}
                />
                {showWebcam && (
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    height={300}
                    width={300}
                  />
                )}
              </div>
            </div>
          </CardContent>
        </div>
        <CardFooter>
          <Button className="rounded-full" onClick={capture}>
            Capture Images
          </Button>
        </CardFooter>
            <div className="w-full flex justify-end justify-between m-6">
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded-full " onClick={addNewCard}>
  Add Class
</button>

            </div>


            </Card>
            </div>
          ))}
    </TabsContent>
    <TabsContent value="FileUpload">
      <TabsList className="grid w-full grid-cols-2 flex">
        <TabsTrigger value="WebCam">Upload By WebCam</TabsTrigger>
        <TabsTrigger value="FileUpload">File Upload</TabsTrigger>
      </TabsList>
    </TabsContent>
  </Tabs> 
  );
};

export default WebCam;
