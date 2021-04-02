import React from 'react';

const EachProduct = (props) => {
    const deleteProduct = (id) => {
        fetch(`https://apple-custard-69973.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
            })
    }
    const { name, weight, price, _id } = props.product;
    console.log(_id);
    return (
        <div>
            <li>{name}</li>
            <li>{weight}</li>
            <li>{price}</li>
            <button onClick={() => deleteProduct(_id)}>Delete</button>
        </div>
    );
};

export default EachProduct;