import React from 'react';
import { useForm } from "react-hook-form";
import './AddPortfolio.css';
import axios from 'axios';

const AddPortfolio = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/portfolio', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('upload success');
                    reset();
                }
            })
    };

    // console.log(watch("example"));
    return (
        <div>
            <div className="portfolio">
                <form className='dataForm' onSubmit={handleSubmit(onSubmit)}>

                    <input {...register("image", { required: true })} placeholder='image url' />

                    <p style={{ marginBottom: '10px', padding: 0 }}>note: <span>image should be 425*255</span></p>
                    <input {...register("name")} placeholder='Name' />

                    <textarea {...register("description", { required: true })} placeholder='description' />

                    <input {...register("githubLink", { required: true })} placeholder='github link' />

                    <input {...register("liveLink", { required: true })} placeholder='Live link' />

                    {errors.exampleRequired && <span>This field is required</span>}

                    <input style={{ cursor: 'pointer' }} type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddPortfolio;