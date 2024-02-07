import React, { useState } from 'react'

export default function RandomColor() {

    const [typeOfColor,setTypeOfColor] = useState('hex');
    const [color,setColor] = useState('#000000');

    function random(length) {
       return Math.floor(Math.random()*length);
    }

    function createRandomHexColor(){
        const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexColor = '#';

        for (let i = 0; i < 6; i++) {
            
            hexColor+= hex[random(hex.length)]
           
        } 
        setColor(hexColor)
    } 
    
    function createRandomRgbColor(){
        const r= random(256);
        const g= random(256);
        const b= random(256);

        setColor(`rgb(${r},${g},${b})`)
    }

  return (
    <div className='container' style={{background:color}} >
        <div className='buttons'>
        <button onClick={() => setTypeOfColor('hex')}>Create HEX Colour</button>
        <button onClick={() => setTypeOfColor('rgb')}>Create RGB Colour</button>
        <button onClick={
            typeOfColor ===  'hex' ?  
            createRandomHexColor : 
            createRandomRgbColor}>Generate Random Colour</button>

        </div>
        
        <div className='colors'>
            
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
        
        </div>
    </div>
  )
}
