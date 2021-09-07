import React from 'react'
import TextInput from "./TextInput";
import Button from "./Button";

import "./css/Navbar.css"

function Navbar() {

    const clickMe = () => {
        console.log("Not Working");
    }

    return (
        <header className="navbar">
            <TextInput 
                placeholder = "Buscar producto"
            />
            <Button title="Buscar producto" onClick={clickMe}/>
        </header>
    )
}

export default Navbar
