import React, { useState } from 'react' //rfc 

export default function TextForm(props) {

    //hook
    const handleUpClick = ()=> {
       // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        {props.showAlert("Converted to uppercase!", "success")}
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText) 
    }
    const handleClearClick = () => {
        let newText = " ";
        setText(newText)
    }
    const handleRevClick = () => {
        let newText = text.split("").reverse().join("");
        setText(newText)
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnChange = (event)=> {
        //console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    //text = "new text"; Wrong way to change the state
    //setText("new Text"); Correct way to change the state
    return (
        <>
        
        <div className="container" style={{color: props.mode==='dark'?'grey':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', 
            color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button> 
            <button className="btn btn-primary mx-1" onClick={handleLowClick} >Convert to LowerCase</button> 
            <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear</button>
            <button className="btn btn-primary mx-1" onClick={handleRevClick} >Reverse text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy} >Copy text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} >Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} character</p>
            <p>{0.0008 * text.split(" ").length} Minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something to preview it "}</p>
        </div>

        </>
    )
}
