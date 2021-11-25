import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProducts.css'

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        console.log(data);
        //use axios for post API

        axios.post('https://fathomless-bastion-71123.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added Successfully');
                    reset();
                }
            })
    }
    return (
        <div>
            <div className="add-product">
                <h2> Add  a New  Products</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Brand Name" />
                    <input type="name" {...register("model")} placeholder="model name" />
                    <input type="number" {...register("price")} placeholder="price" />
                    <input {...register("img")} placeholder="img url" />
                    <textarea  {...register("description")} placeholder="Description" />




                    <input className="btn btn-warning" type="submit" />
                </form>


            </div>
            <br />
            <br />

        </div>
    );
};

export default AddProducts;