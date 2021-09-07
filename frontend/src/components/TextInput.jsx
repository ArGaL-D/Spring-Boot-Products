import React from 'react'
import "./css/TextInput.css";

function TextInput({placeholder, style, id, onChange}) {
    return (
        <div 
            className="input-container"
            style =  {style}>
            <input 
                id={id}
                type="text" 
                className="text-input"  
                required      
                onChange={onChange}          
            />
            <label className="text-label">
                {placeholder}
            </label>
        </div>
    )
}

export default TextInput
