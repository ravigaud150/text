import React,{useState} from "react";



export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("UppeCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
         props.showAlerts("Converted to uppercase",'success')

    }
    const handleLoClick = ()=>{
      // console.log("UppeCase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlerts("Converted to lowercase",'success')

  }
  const handleClearClick = ()=>{
    // console.log("UppeCase was clicked" + text);
    let newText = '';
    setText(newText);
    props.showAlerts("Cleared text",'success')

}

    const handleOnChange = (event)=>{
        console.log("handle on changed");
        setText(event.target.value);


    }
    const handleCopy =()=>{
      console.log("I'm copy");
      var text = document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlerts("Copy to clipboard",'success')
    }
     const handleExtraSpaces= ()=>{

      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlerts("Removed extra spaces",'success')

     }
    
    const [text, setText] = useState("");
  return(
    <>
    <div className="container"style ={{ color: props.mode === 'dark' ? 'white' : '#042743'  }} >
      <h1>{props.heading} </h1>
     <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style ={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' , color:  props.mode === 'dark' ? 'white' : "#042743"   }} id="myBox" rows="8"></textarea>
    
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}> 
      Remove Extra Spaces</button>

    </div>
    <div className="container my-3" style ={{ color: props.mode === 'dark' ? 'white' : '#042743'  }} >
      <h2>Your text summury</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!== 0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split (" ").length} Minutes read</p>
      <h2>preview</h2>
      <p>{text.length >0?text: "Enter something in the textbox to above to preview it here"}</p>
    </div>
    </>
  )
}

