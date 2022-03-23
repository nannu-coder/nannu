import React from 'react';
import { useForm } from "react-hook-form";

const AddAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='admin' style={{ display: 'flex', justifyContent: 'center' }}>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '50%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <input style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ff014f' }} {...register("admin", { required: true })} type="email" placeholder='Email' />
                {errors.exampleRequired && <span>This field is required</span>}
                <input style={{ width: '50%', background: '#ff014f', color: '#fff', padding: '10px', borderRadius: '6px', border: '1px solid #ff014f', cursor: 'pointer', marginTop: '10px' }} type="submit" value="Add Admin" />
            </form>
        </div>
    );
};

export default AddAdmin;