import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import './AddReviews.css'

const AddReviews = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {

        console.log(data);
        //use axios for post API

        axios.post('https://bike-shops-server-2wvg.vercel.app/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added Successfully');
                    reset();
                }
            })
    }
    return (
        <div>
            <div className="add-reviews">
                <h2> Customers Reviews</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} defaultValue={user.displayName} />
                    <input type="name" {...register("reviewProduct")} placeholder="Name of Review products" />
                    <input type="number" {...register("rating")} placeholder="rating" />

                    <textarea  {...register("description")} placeholder="Write Description" />




                    <input className="btn btn-warning" type="submit" />
                </form>


            </div>
            <br />
            <br />
            <br />

        </div>
    );
};

export default AddReviews;