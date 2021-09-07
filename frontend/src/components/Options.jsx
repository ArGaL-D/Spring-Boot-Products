import React from 'react'
import axios from "axios";
import Button from "./Button"

import * as cgIcon from 'react-icons/cg';
import * as mdIcon from 'react-icons/md';
import * as aiIcon from 'react-icons/ai';
import "./css/Options.css"

const Options = ({openModal}) => {
    
    const URL_DELETE = "http://localhost:5000/api/miscelanea/products";

    const deleteSelectedItems = () => {
        const input_tag = document.querySelectorAll(".checkbox-item");
        const td_tag = Array.from(document.querySelectorAll(".product_id"));
        const id_array  = [];
        
        // Get all the items selected for deleting
        if (td_tag.length !== 0){
            
            Array.from(input_tag).forEach((checkBox,index) => {
                if (checkBox.checked){
                    id_array.push(Number(td_tag[index].textContent))
                }
            });

            axios.delete(`${URL_DELETE}/${id_array.toString()}`)
            .catch((error) => {
                console.log(`--> ${error}`)
            })
        }
            
        
    }

    return (
        <div className="container-options">
            <Button 
                title = "Agregar" 
                icon  = {<cgIcon.CgPlayListAdd/>}
                onClick = {openModal}
            />

            <Button 
                title = "Eliminar" 
                icon  = {<mdIcon.MdDelete/>}
                onClick = {deleteSelectedItems}
            />

            <Button 
                title="Editar" 
                icon = {<aiIcon.AiFillEdit/>}    
            />   
        </div>
    )
}

export default Options
