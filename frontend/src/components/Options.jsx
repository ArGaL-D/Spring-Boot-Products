import React from 'react'
import axios from "axios";
import Button from "./Button"
import Swal from 'sweetalert2'

import * as cgIcon from 'react-icons/cg';
import * as mdIcon from 'react-icons/md';
import * as aiIcon from 'react-icons/ai';
import "./css/Options.css"

const Options = ({openModal}) => {
    
    const URL_DELETE = "http://localhost:5000/api/miscelanea/products";


    const deleteSelectedItems = () => {
        const input_tag = document.querySelectorAll(".checkbox-item");
        const td_tag = Array.from(document.querySelectorAll(".product_id"));
        const id_array = [];
        
        // Get all the items selected for deleting            
        Array.from(input_tag).forEach((checkBox,index) => {
            if (checkBox.checked){
                id_array.push(Number(td_tag[index].textContent))
            }
        });

        if (id_array.length !== 0) {
            axios.delete(`${URL_DELETE}/${id_array.toString()}`)
            .then(() => {

                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                
                Toast.fire({
                    icon: 'success',
                    title: 'Eliminación exitosa'
                })
            })
            .catch((error) => {
                console.log(`--> ${error}`)
            })
        } else {
            Swal.fire(
                'Eliminar',
                'Seleccione los productos a eliminar',
                'info'
            ) 
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
