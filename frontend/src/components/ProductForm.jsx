import React,{useState, useEffect} from 'react'
import axios from "axios"
import TextInput from './TextInput'
import Button from './Button'
import Swal from 'sweetalert2'
import * as ioIcon from 'react-icons/io';

import "./css/ProductForm.css"

const ProductForm = ({ openModal, isClicked }) => {

    const [product, setProduct] = useState({name: "", details: "", price: 0});
    const URL = "http://localhost:5000/api/miscelanea/newProduct";

    useEffect( () => {
        const input = document.getElementById("product-price");
        
        const avoidSomeKeys = () => {
            if (isNaN(input.value)){ // es String ?
                input.value = "";
            }
        }

        input.addEventListener('keyup',avoidSomeKeys);

        return () => {
            input.removeEventListener('keyup',avoidSomeKeys);
        }
        
    },[product]);

    // add new child (tr tag) node to the table
    const addNewRow = (product) => {
        const tbody = document.getElementById("tbody-rows");
        const tr = document.createElement('tr');
        
        for (let i=0; i<5; i++) {
            const td = document.createElement('td');
            
            if (i === 0) {
                const checkbox = document.createElement('input');
                checkbox.setAttribute("type","checkbox");
                checkbox.className = "checkbox-item";
                
                td.appendChild(checkbox);                
            }
            if (i === 1) {                
                td.className = "product_id";
            }
            if (i === 2 ) {
                td.textContent = product.name;
            }
            if (i === 3 ) {
                td.textContent = product.details;
            }
            if (i === 4) {
                td.textContent = `$${product.price}`;
            }
            tr.appendChild(td)
        }

        tr.className = "row-product";
        tbody.appendChild(tr);
    }

    const saveProduct = (e) => {
        e.preventDefault();
        
        axios.post(URL,product)
            .then( () => {
                const input_1 = document.getElementById("product-name");
                const input_2 = document.getElementById("product-details");
                const input_3 = document.getElementById("product-price");
        
                input_1.value = "";
                input_2.value = "";
                input_3.value = "";
                        
                addNewRow(product);

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Se agregó correctamente',
                    showConfirmButton: false,
                    timer: 1250
                  })
            })
            .catch( (error) => {
                console.log("Hay error al guardar los datos" + error);
            }) 
    }

    // Get data - Form
    const productoData = (e) => {
        if (e.target.id === "product-name"){
            setProduct({...product, name: e.target.value})
        }
        if (e.target.id === "product-details"){
            setProduct({...product, details: e.target.value})
        }
        if (e.target.id === "product-price"){
            setProduct({...product, price: Number.parseFloat(e.target.value)})
        }
        
    }


    return (
        <div
            className=
            {isClicked
                ? "container-product on"
                : "container-product"
            } >
            <form action="" className="product-form">
                <TextInput
                    id="product-name"
                    style={{ width: "100%" }}
                    onChange={productoData}
                    placeholder="Nombre del producto"                                        
                />

                <TextInput
                    id="product-details"
                    style={{ width: "100%" }}
                    onChange={productoData}
                    placeholder="Detalles"                    
                />

                <TextInput
                    id="product-price"
                    style={{ width: "100%" }}
                    onChange={productoData}
                    placeholder="Precio"                    
                />

                <div className="options-btn-form">
                    <Button
                        title="Aceptar"
                        icon={<ioIcon.IoMdCheckmark />}
                        onClick={saveProduct}
                    />
                    <Button
                        title="Cerrar"
                        icon={<ioIcon.IoMdClose />}
                        style=
                            {{ 
                                background: "#f8f9f9",
                                color: "#0f1218",
                                border: "2px solid #f8f9f9"
                            }}
                        onClick={openModal}
                    />
                </div>

            </form>
        </div>
    )
}

export default ProductForm;
