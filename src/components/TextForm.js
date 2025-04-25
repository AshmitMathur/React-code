import React, { useState } from 'react'

export default function TextForm(props) {
    const handleupclick = ()=>{
        setText(text.toUpperCase());
        props.showalert("Converted to UpperCase","Success");
    }

    const handledownclick = ()=>{
        setText(text.toLowerCase());
        props.showalert("Converted to LowerCase","Success");
    }

    const handleClear = ()=>{
        setText('');
        props.showalert("Text Clear","Success");
    }

    const handleonChange = (event)=>{
        setText(event.target.value);
    }

    const handlecapitalize = ()=>{
        const capitalized = text
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
        setText(capitalized)
        props.showalert("Every word Capitalized","Success");
    }

    const handleCopy = () => {
      navigator.clipboard.writeText(text);
      props.showalert("Text copied to clipboard","Success");
    }

    const handleextraspace =()=> {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showalert("Extra Spaces Removed","Success");
    }

    const capitalizes =()=>{
      let newText = text
  .split('.')
  .map(sentence => {
    sentence = sentence.trim();
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  })
  .join('. ');
  setText(newText)
  props.showalert("New Word Capitalized","Success")
    }

    const[text,setText] = useState('');
  return (
        <>
      <div style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
       <div className="form-group">
    <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color: props.mode==='dark'?'white':'#042743'}} value={text} onChange={handleonChange} id="Mybox" rows="8"></textarea>
  </div>
    <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleupclick}>Convert to Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handledownclick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleClear}>Clear Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handlecapitalize}>Capitalize Every New Word</button>
    <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleextraspace}>Handle Extra Spaces</button>
    <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={capitalizes}>Capitalize words for new sentences</button>
    </div> 
    <div className="conatiner" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <h3> {"Number of Words= " + text.split(/\s+/).filter((element)=>{return element.length!==0;}).length}</h3>
        <h3>Number of Characters = {text.length}</h3>
    </div>
    </>
  )
}
