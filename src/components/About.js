
import React, { useState } from "react";

export default function About(props) {

  // const [mystyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // })
  let myStyle ={
    color: props.mode === 'dark'?'white':'black',
    backgroundColor: props.mode ==='dark'?'black':'white'
  }
  
  // eslint-disable-next-line no-unused-vars
  const [btntext,setBtnText] = useState("Enable Dark Mode");


//    const toggleStyle = ()=>{
  
//     if (mystyle.color === "black") {
//       setMyStyle({
//         color: "white",
//         backgroundColor: "black",
//         border: '1px solid white'
//       });
//       setBtnText("Enable light Mode");
//     } else {
//       setMyStyle({
//         color: "black",
//         backgroundColor: "white",
//       });
//       setBtnText("Enable Dark Mode");
//     }
// }

  return (
    <div className="container " style={myStyle}   >
      <h1 className="my-3"> About us</h1>
      <div class="accordion" id="accordionExample " style={myStyle}> 
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze your text.</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show text- black"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample  "
          >
            <div class="accordion-body "style={myStyle} >
               TextTutles gives way to analayze your text quickly and efficently to ssbe it count, character count .
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
              
              Textutiles is a free character tool that provides instant character count & word count for a given text. Teextutiles reports the number of words and characters.that it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             <strong>Browser Compatible.</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
               This is word counter wroks in any web browserssuch as chrome,firefox ,Interent Explorer,safari,Opera .
          </div>
        </div>
      </div>
      {/* <div className="container  my-3 ">
        <button  onClick={toggleStyle} type="buttton" className="btn btn-primary "> 
          Enable Dark Mode
        </button>
      </div> */}
    </div>
    </div>
  )
}