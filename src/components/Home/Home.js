import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Product from '../Product/Product';

const Home = () => {
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
           <div className="text-center pt-2">
               {products.length===0 && <Spinner animation="border" variant="danger" />}
           </div>
            <div style={{margin:'10% auto'}} className="container text-center row cols row-cols-md-4 cols-sm-1 gy-2">
            
            {
                products.map(pd => <Product key={pd._id} product={pd}></Product>)
            }
        </div>
       </div>
    );
};

export default Home;