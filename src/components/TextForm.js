import React, { useState } from "react";


export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked"  + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  }
  const handleLoClick = () => {
    // console.log("Uppercase was clicked"  + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");

  }
  const handleExtraSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Converted to lowercase!","success");

  }
  const handleClear = ()=>{
    // console.log("clear was clicked");
    setText("");
    props.showAlert("text clear!","success");

  }
  const handleCopy = ()=>{
    // Get the text field
  var copyText = text;
  navigator.clipboard.writeText(copyText);
  props.showAlert("text copy!","success");

  // Alert the copied text
  // alert("Copied the text: " + copyText);
  }
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
   const [text, setText] = useState("");
//setText('Enter text here asap');
  return (
  <>
    <div className="container" style={{color: props.mode=== 'dark'? 'white':'#100f0f'}}>
      <h1 className= "my-2">  {props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange}   style={{backgroundColor: props.mode=== 'dark'? '#dedee5':'white', color: props.mode === 'dark'? 'black':'#100f0f'  }} rows="8" id="floatingTextarea" placeholder="Leave a comment here ..."></textarea>
   </div>
      <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1 p-2" onClick={handleUpClick}> Convert to Uppercase</button>
     <button disabled ={text.length===0} className="btn btn-info mx-1 my-1 p-2" onClick={handleLoClick}> Convert to Lowercase</button>
     <button disabled ={text.length===0} className="btn btn-warning mx-1 my-1 p-2" onClick={handleExtraSpace}> Remove Extra Space </button>
      <button disabled ={text.length===0} type="button" className="btn btn-success mx-1 my-1 p-2" onClick={handleCopy}>Copy Text</button>
      <button disabled ={text.length===0} className="btn btn-danger  my-1 mx-5  p-2"onClick={handleClear}> Clear Text</button>
       </div>
     <div className="container my-3 " style={{color: props.mode=== 'dark'? 'white':'#100f0f'}}> 
      <h2> Your Text Summary </h2>
       <h5><p> Words count: {text.split(" ").filter((element)=>{return element.length!==0}).length}</p></h5>
         <h5><p>Characters count:  {text.length} </p></h5>
        <h5><p>  Minutes takes to Read:  {0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length }</p></h5>
       <h2>Preview</h2>
      <p> {text.length>0?text:' Nothing to preview'}</p>
    </div>
  </>
  );
}
