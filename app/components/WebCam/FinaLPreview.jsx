import {React,useEffect} from "react";
import { Button } from "@/components/ui/button";
import Webcam from "react-webcam";
import { Typography } from "@material-tailwind/react";
import { Progress } from "@/components/ui/progress";
import axios from "axios";
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

const Preview = () => {
  const webcamRef = useRef(null);
  const [classsSet, setClasssSet] = useState([]); // Initialize with an empty array

  useEffect(() => {
    // This effect runs when the component mounts
    const running = setInterval(async () => {
      const imageSrc = webcamRef.current.getScreenshot();

      const formData = new FormData();
      formData.append('image', imageSrc);

      try {
        const response = await axios.post('http://localhost:8080/frame', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        const toSet = [];
        for (const className in response.data) {
          if (response.data.hasOwnProperty(className)) {
            const obj = {
              classname: className,
              PredictScore: response.data[className],
            };
            toSet.push(obj);
          }
        }
        setClasssSet(toSet);
      } catch (error) {
        console.error(error.message);
        toast.error('Error fetching response data');
      }
    }, 1000);

    // setTimeout(() => {
    //   clearInterval(running);
    // }, 10000);

    return () => {
      clearInterval(running);
    };
  }, []);


  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full lg:flex-row">
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsContent value="account">
              <Card className="widthcard">
                <TabsList className="grid w-full grid-cols-2 flex">
                  <TabsTrigger value="account">Open WebCam</TabsTrigger>
                </TabsList>
                <div className="flex">
                  <CardContent className="space-y-2">
                    <div className="flex">
                      <div className="space-y-1">
                        <Label>Preview</Label>
                        <Webcam
                          audio={false}
                          ref={webcamRef}
                          screenshotFormat="image/jpeg"
                          height={300}
                          width={300}
                        />
                      </div>
                    </div>
                  </CardContent>
                </div>
                <CardFooter>
                  <div className="w-full">
                  <div>
        {/* {classsSet.map((data, index) => (
          <div key={index}>
            <p>Class Name: {data.classname}</p>
            <p>Predicted Score: {data.PredictScore}</p>
          </div>
        ))} */}
      </div>
                    {classsSet.map((data, index) => (
                      <div className="PreviewCl" key={index}>
                        <div className="mb-2 flex items-center justify-between gap-4">
                          <Typography color="blue-gray" variant="h6">
                            {data.classname}
                          </Typography>
                          <Typography color="blue-gray" variant="h6">
                            {data.PredictScore}%
                          </Typography>
                        </div>
                        <Progress value={data.PredictScore * 100} />
                      </div>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Preview;
