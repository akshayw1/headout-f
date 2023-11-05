import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import { Typography } from "@material-tailwind/react";
import { Progress } from "@/components/ui/progress";

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
import axios from 'axios';



const TextPredict = () => {
    const [inputValue, setInputValue] = useState('');
    const [responseData, setResponseData] =useState({});

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlePredict = async() => {
    const formData = new FormData();
    formData.append('data', inputValue);
    const response = await axios.post('http://localhost:8080/text-predict',formData, {
      
    });
    console.log('Response data:', response.data);
    setResponseData(response.data);
  };
  return (
    <div>
         <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Predict Result</CardTitle>
        
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Enter Prompt</Label>
              <Input id="name" placeholder="Name of your project" onChange={handleInputChange} />
            </div>
        
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col justify-between">
       
        <Button onClick={handlePredict}>Predict</Button>

        {responseData == {} && (
        <div>
          <p>Response from the server:</p>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
        <div className="PreviewCl" >
                        <div className="mb-2 flex items-center justify-between gap-4">
                          <Typography color="blue-gray" variant="h6">
                                test
                          </Typography>
                          <Typography color="blue-gray" variant="h6">
                            fdsfdsfds
                          </Typography>
                        </div>
                        <Progress value={77} />
         </div>
      </CardFooter>
    </Card>

    </div>
  )
}

export default TextPredict