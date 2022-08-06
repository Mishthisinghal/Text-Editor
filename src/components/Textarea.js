import React,{useState} from 'react'

export default function Textarea(props) {
    const [text,setText]=useState("Enter your text");
    const touppercase=()=>{
        setText(text.toUpperCase());
    }
    const tolowercase=()=>{
        setText(text.toLowerCase());
    }
    const clearall=()=>{
        setText('');
    }
    const onchange=(event)=>{
        setText(event.target.value);
    }
    return (
        <>
            <div className="container my-3">
                <h2 style={{color: props.mode==='light'?'black':'white'}}>Enter Your Text</h2>
            </div>
            <div className="container">
                <textarea class="form-control my-2" id="exampleFormControlTextarea1" rows="8" value={text} onChange={onchange} style={{backgroundColor: props.mode==='light'?'white':'#444242', color:props.mode==='light'?'black':'white'}}></textarea>
            </div>
            <div className="container">
            <button disabled={text.length===0} type="button" class="btn btn-info my-1 mx-1" onClick={touppercase}>Convert Upper Case</button>
            <button disabled={text.length===0} type="button" class="btn btn-info my-1 mx-1" onClick={tolowercase}>Convert Lower Case</button>
            <button disabled={text.length===0} type="button" class="btn btn-info my-1 mx-1" onClick={clearall}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h2 style={{color: props.mode==='light'?'black':'white'}}>Summary</h2>
            </div>
            <div className="container">
                <p style={{color: props.mode==='light'?'black':'white'}}>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p style={{color: props.mode==='light'?'black':'white'}}>{text.split(/\s/).filter((element)=>{return element.length!==0}).length*0.008} minutes read</p>
            </div>
            <div className="container my-3">
                <h2 style={{color: props.mode==='light'?'black':'white'}}>Preview</h2>
            </div>
            <div className="container">
                <p style={{color: props.mode==='light'?'black':'white'}}>{text.length>0?text:"Nothing to preview"}</p>
            </div>
        </>
    )
}
