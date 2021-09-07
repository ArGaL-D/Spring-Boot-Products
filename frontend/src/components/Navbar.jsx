import React from 'react'
import TextInput from "./TextInput";
import Button from "./Button";
import "./css/Navbar.css"

function Navbar() {
    return (
        <header className="navbar">
            <TextInput 
                placeholder = "Buscar producto"
            />
            <Button title="Buscar producto"/>
        </header>
    )
}

export default Navbar
