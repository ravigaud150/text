import React, { useState } from "react";

export default function About(props) {

    //  const [myStyle,setMyStyle] = useState({ 
    //     color: "black",
    //     backgroundColor: 'white'
       
    
    //  })
    
    let myStyle = {

        color: props.mode ==='Dark'?'white':'black',
        backgrounColor: props.mode ==='Dark'?'black':'white'
    }
     

     
    
  return (
    <div className="container" style = {myStyle}>
        <h1 className="my-2">About Us</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample"style = {myStyle}>
                <div className="accordion-item">
                <h2 className="accordion-header">
                    <button
                    className="accordion-button collapsed"style = {myStyle}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                    >
                     <strong>Analyze your text</strong>
                    </button>
                </h2>
                <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div className="accordion-body"style = {myStyle}>
                    Since March 8, 1990, Women’s Day has been observed by SAARC (South Asian Association for Regional Cooperation) comprising seven countries namely India, Pakistan, Nepal, Bhutan, Bangladesh, Sri Lanka and Maldives. The day is celebrated to highlight the problems of the girl child in these countries. 
                    </div>
                </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header">
                    <button
                    className="accordion-button collapsed"style = {myStyle}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                    >
                    <strong>Free to use</strong>
                    </button>
                </h2>
                <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div className="accordion-body" style = {myStyle}>
                    Everyone knows that paper is made from trees. But when one looks at trees, one cannot imagine that something so soft and fragile as the paper is made is so hard and strong. Plant materials such as wood are made of fibres known as cellulose. It is the primary ingredient in paper making. Raw wood is first converted into pulp consisting of a mixture of Cellulose, lignin, water and some chemicals.
                    </div>
                </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header">
                    <button
                    className="accordion-button collapsed"style = {myStyle}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                    >
                   <strong>Browser compatible </strong>
                    </button>
                </h2>
                <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div className="accordion-body"style = {myStyle}>
                    Gardening is my favourite hobby. I own a small plot of land next to our house. I cultivate gardening there. Every day, I spend half an hour gardening. After returning from my morning walk, I go to my garden with a spade and a bucket of water. I prepare the soil, prune the plants, and water them. I also use insecticides and fertilisers.
                    </div>
                </div>
                </div>
            </div>
            
</div>

  );
}
