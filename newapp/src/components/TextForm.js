import React, {useState} from 'react'



export default function TextForm(props) {

  const handleUpClick = ()=>{
   // console.log("Uppercase was click" + text);
    let newText = text.toUpperCase();
    setText(newText)

  }
  const handleDownClick = ()=>{
   
    let newText = text.toLowerCase();
    setText(newText)

  }
  const handleClearClick = ()=>{
   
    let newText = '';
    setText(newText)

  }
  
  const handleOnChange = (event)=>{
   // console.log("On change");
    setText(event.target.value)

  }
  const handleExtraSpace = ()=>{
   // console.log("On change");
   let newText = text.split(/[ ]+/);
    setText(newText.join(" "))

  }
  const[text, setText]= useState('');
  return (
    <>
    <div className="container" style={{backgrounColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3"> 
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="7" ></textarea>
</div>
<button className="btn btn-outline-primary" onClick={handleUpClick}>Convert to Uppercase</button>&nbsp;&nbsp;&nbsp;
<button className="btn btn-outline-danger" onClick={handleDownClick}>Convert to Lowercase</button>&nbsp;&nbsp;
<button className="btn btn-outline-secondary" onClick={handleClearClick}>Clear</button>
<button className="btn btn-outline-secondary" onClick={handleExtraSpace}>Clear extra spaces</button>

    </div>
    <div className="container my-3">
<h1 style={{backgrounColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}>Your text details</h1>
<p style={{backgrounColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}>Words-{text.split(" ").length} letters-{text.length}</p>
<p style={{backgrounColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}>{0.008 * text.split(" ").length} Mins Read</p>
<h2 style={{backgrounColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}>Preview</h2>
<p  style={{backgrounColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}>{text.length>0?text:"Enter something.."}</p>


    </div>
    </>
  )
}
