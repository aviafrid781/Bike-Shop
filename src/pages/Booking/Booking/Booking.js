import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './Booking.css'
import useAuth from '../../../hooks/useAuth';



const Booking = () => {
    const { register, handleSubmit, reset } = useForm();
    const [product, setProduct] = useState({});
    const { productId } = useParams();
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://fathomless-bastion-71123.herokuapp.com/topProducts/${productId}`)

            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);




    const onSubmit = data => {

        console.log(data);
        //use axios for post API

        axios.post('https://fathomless-bastion-71123.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Booking Successfully Complate');
                    reset();
                }
            })
    }



    return (

        <div className="booking-container">
            <div>
                <h2> Brand  {product.name}</h2>
                <img src={product.img} alt="" />
                <p>Bike Model:  {product.model}</p>
                <p>Total Price :  $ {product.price}</p>

                <p className="px-5" >{product.description}</p>


            </div>



            <div className="add-product">
                <h2> Please  Booking </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("user", { required: true, maxLength: 20 })} defaultValue={user.displayName} />
                    <input {...register("email",)} defaultValue={user.email} />

                    <input {...register("name", { required: true, maxLength: 20 })} defaultValue={product.name} />
                    <input {...register("model",)} defaultValue={product.model} />
                    <input type="number" {...register("price")} defaultValue={product.price} />

                    <input type="number" {...register("number")} placeholder="Your Mobile number" />

                    <textarea  {...register("address")} placeholder="Your Address" />

                    <input className="btn btn-warning" type="submit" />
                </form>
            </div>
        </div>

    );
};

export default Booking;