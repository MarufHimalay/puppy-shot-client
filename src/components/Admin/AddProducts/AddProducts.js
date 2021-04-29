import axios from 'axios';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useLocation } from 'react-router';

const AddProducts = () => {
  const location = useLocation();
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setIMageURL] = useState(null);

  const handleImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '1df7b684c57084b6e5953557052f265d');
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        setIMageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

  }


  const onSubmit = data => {
    const eventData = {
      name: data.name,
      imageURL: imageURL,
      weight: data.weight,
      price: data.price
    };
    const url = `https://apple-custard-69973.herokuapp.com/addProducts`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
      .then(res => {
        console.log('server side response', res)

      })
  };
  const inputStyle = { padding: '5px', border: '1px solid gray', borderRadius: '3px', width: '100%' }

  return (
    <div className="container pt-2">
      <h1>Add your Products Here</h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row py-2">
          <div className="col-md-6">
            <h5>Pet name</h5>
            <input style={inputStyle} name="name" defaultValue="Puppy" ref={register} />
            <br />
            <h5>Weight</h5>
            <input style={inputStyle}  name="weight" defaultValue="200gm" ref={register} />
            <br />
          </div>
          <div className="col-md-6 mb-3">
            <h5>Price</h5>
            <input style={inputStyle}  name="price" defaultValue="$250" ref={register} />
            <br />
            <h5>upload image</h5>
            <input style={{textColor:"lightGreen"}} name="exampleRequired" type="file" onChange={handleImageUpload} />
           
            <br />
          </div>
        <hr/>
         
        </div>
        <div className="text-end">
          <input className="btn btn-success" type="submit" />
          </div>
      </form>
    </div>
  );
};

export default AddProducts;