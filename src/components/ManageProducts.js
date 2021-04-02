import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { EachProductContext } from '../App';
import EachProduct from './Admin/EachProduct';
import Product from './Product/Product';

const ManageProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('https://apple-custard-69973.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data);
        })
    },[])
    return (
        <div>
            <h3>Manage Products</h3>
           {
               products.map( pd => <EachProduct product={pd}></EachProduct>)
           }
        </div>
    );
};

export default ManageProducts;