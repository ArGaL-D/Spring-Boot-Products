import React, {useState, useEffect} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/ProductTable.css";

function ProductTable() {

    const [product_list, setProductList] = useState([]);
    const URL_GET = "http://localhost:5000/api/miscelanea/products";

    useEffect(() => {
        try {
            const listOfProducts = async () => {
                const response = await axios.get(URL_GET);
                setProductList(response.data);
            }
            listOfProducts();
        } catch (error) {
            console.log(error)
        }
    },[])

    // Click on <tr> and change the boolean value - radioButton
    const onClickTr = (event) => {
        const first_tr_td  = event.currentTarget.childNodes[0];
        const check_box = first_tr_td.firstElementChild;

        if (check_box.checked) { check_box.checked = false; }        
        else { check_box.checked = true; }
    }

    // Select all the radioButtons
    const selectAllRadioButtons = (event) => {
        const tbody = document.querySelector("tbody"); 
        const tr = tbody.childNodes;               

        if (event.currentTarget.checked){
            Array.from(tr).forEach(node => {
                const checkBox = node.childNodes[0].firstChild;
                checkBox.checked = true;
            });            
        }
        else {
            Array.from(tr).forEach(node => {
                const checkBox = node.childNodes[0].firstChild;
                checkBox.checked = false;
            });
        }
    }


    return (
        <table className="product-table">
            <thead>
                <tr>
                    <th>
                        <div className="form-check form-switch">
                            <input 
                                type="checkbox" 
                                name="" 
                                id="" 
                                className="form-check-input" 
                                onClick={selectAllRadioButtons}
                            />
                        </div>                        
                    </th>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Detalles</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {
                    product_list.map((value,index)=> {
                        return (
                        <tr key={index} className="row-product" onClick={onClickTr}>
                            <td>
                                <input 
                                    type="checkbox" 
                                    name="" id="" 
                                    className="checkbox-item"/>
                                </td>
                            <td className="product_id">{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.details}</td>
                            <td>${value.price}</td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default ProductTable
