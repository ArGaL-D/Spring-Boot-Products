import React,{useState, useEffect} from 'react'
import axios from "axios"
import TextInput from './TextInput'
import Button from './Button'

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

    const saveProduct = (e) => {
        e.preventDefault();
        axios.post(URL,product)
            .catch( (error) => {
                console.log("Hay error al guardar los datos" + error);
            }) 
        
        const input_1 = document.getElementById("product-name");
        const input_2 = document.getElementById("product-details");
        const input_3 = document.getElementById("product-price");

        input_1.value = "";
        input_2.value = "";
        input_3.value = "";
    }

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
