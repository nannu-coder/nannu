import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Container, Grid } from '@mui/material';
import useAuth from '../../../Hooks/UseAuth';

const SignUp = () => {
    const { register, handleSubmit, reset } = useForm();
    const { createAccount } = useAuth();
    const [info, setInfo] = useState({});
    const onSubmit = data => {
        console.log(data);
        setInfo(data);
        createAccount(info);

        reset();
    };

    return (
        <div>
            <Container>
                <div className="signIn">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item md={12}>
                            <div className="getin">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input {...register("name", { required: true, maxLength: 20 })} type='text' placeholder='Name' />

                                    <input {...register("userName", { required: true, maxLength: 20 })} type='text' placeholder='User Name' />

                                    <input {...register("email", { required: true })} type='email' placeholder='E-mail' />

                                    <input {...register("password", { required: true })} type='password' placeholder='Password' />

                                    <input type="submit" placeholder='Sign up' />
                                </form>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
};

export default SignUp;