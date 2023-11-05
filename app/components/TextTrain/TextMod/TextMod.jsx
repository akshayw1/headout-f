"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

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
import { CardBody } from '@material-tailwind/react';
import axios from 'axios';

function App() {
  const [cards, setCards] = useState([]);
  const [cardData, setCardData] = useState({});

  const addCard = () => {
    const uniqueClassName = `input${cards.length + 1}`;
    setCards([...cards, uniqueClassName]);
    setCardData((prevData) => ({
      ...prevData,
      [uniqueClassName]: {
        classification: '',
        inputs: [''],
      },
    }));
  };

  const handleInputChange = (className, name, value) => {
    setCardData((prevData) => ({
      ...prevData,
      [className]: {
        ...prevData[className],
        [name]: value,
      },
    }));
  };

  const addInput = (className) => {
    setCardData((prevData) => ({
      ...prevData,
      [className]: {
        ...prevData[className],
        inputs: [...prevData[className].inputs, ''],
      },
    }));
  };

  const handleInputValueChange = (className, index, value) => {
    setCardData((prevData) => ({
      ...prevData,
      [className]: {
        ...prevData[className],
        inputs: prevData[className].inputs.map((item, i) => (i === index ? value : item)),
      },
    }));
  };

  const saveData = async () => {
    const formattedData = {};
    for (const className in cardData) {
      const { classification, inputs } = cardData[className];
      formattedData[classification] = inputs;
    }
    let data = JSON.stringify(formattedData);
    const finalData = new FormData();
    finalData.append('data',data);
    const response = await axios.post('http://localhost:8080/text-train',finalData);
    if (response.status === 200) {
      console.log("Model Trained")
    }
  };

  return (
    <div>
        
      <Card className='p-10 mt-10'>
      <div id="card-container">
        {cards.map((className) => (
            
          <div key={className} className="card">
<CardHeader>
<CardTitle className='flex items-center gap-2'> Class
            <Input id="name" placeholder='Enter Classification Parameter' type="text"
              name="classification"
             
              value={cardData[className].classification}
              onChange={(e) => handleInputChange(className, 'classification', e.target.value)}/>
            </CardTitle>

</CardHeader>

            <CardContent>

            {cardData[className].inputs.map((input, index) => (

                
<div key={index}>
  <div className="space-y-1">
<div className="flex justify-between align-middle items-center">
  <Label htmlFor="name">Prompt</Label>
  <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded-full " onClick={() => addInput(className)} >
Add Class
</button>
</div>

<Input id="name" type="text"
    name="input"
    placeholder={`Input ${index + 1}`}
    value={input}
    onChange={(e) => handleInputValueChange(className, index, e.target.value)}/>
</div>


 
  
</div>
))}
            </CardContent>
            
          </div>
        ))}
      </div>  
        </Card>

   
   

        <button onClick={addCard}>Add Card</button>
      <button onClick={saveData}>Save Data</button>
    </div>
  );
}

export default App;
