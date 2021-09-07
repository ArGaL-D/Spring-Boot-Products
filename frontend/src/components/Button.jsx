import React from 'react';
import "./css/Button.css";


function Button({title, icon, onClick, style}) {
    return (
        <div className="btn-container-search">            
            <button 
                className="btn-search" 
                onClick={onClick}
                style={style}>
                <div className="btn-icon">
                    {icon}
                </div>
                {title}                
            </button>
        </div>
    )
}

export default Button
