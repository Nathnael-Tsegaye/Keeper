import React from "react";
import image from './src/IMAGE/dark-psychedelic.jpg';
function Card(){
    return(
        <div >
            <h1>May Wheather</h1>
            <p>aka money Wheather </p>
            <img src={image} className="circle-img" alt=""></img>
        </div> 
    )
};

export default Card;