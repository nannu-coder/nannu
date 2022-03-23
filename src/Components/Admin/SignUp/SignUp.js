import React from 'react';
import { useForm } from "react-hook-form";
import { CircularProgress, Container, Grid } from '@mui/material';
import useAuth from '../../../Hooks/UseAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit, reset } = useForm();
    const { createAccount, loading, error } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();


    const onSubmit = data => {
        const allData = { email: data.email, password: data.password, name: data.name, location, navigate }
        createAccount(allData);
        console.log(allData)

        reset();
    };

    return (
        <div>
            <Container>
                <div className="signIn">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item md={12}>
                            <div className="getin">
                                {loading ? <CircularProgress /> : <form onSubmit={handleSubmit(onSubmit)}>
                                    <input {...register("name", { required: true, maxLength: 20 })} type='text' placeholder='Name' />

                                    <input {...register("userName", { required: true, maxLength: 20 })} type='text' placeholder='User Name' />

                                    <input {...register("email", { required: true })} type='email' placeholder='E-mail' />

                                    <input {...register("password", { required: true })} type='password' placeholder='Password' />

                                    <input type="submit" value="Sign Up" />
                                    {error ? <p>{error}</p> : null}
                                </form>}
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
};

export default SignUp;