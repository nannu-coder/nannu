import { Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './logStyle.css';
import useAuth from '../../../Hooks/UseAuth.js';
import { useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const { register, handleSubmit } = useForm();
    const [info, setInfo] = useState({});
    const { logIn, error } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const onSubmit = data => {
        setInfo(data);
        logIn(info, location, navigate)
    };

    return (
        <div>
            <Container>
                <div className="signIn">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item md={12}>
                            <div className="getin">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input {...register("email", { required: true })} type='email' placeholder='Email' />

                                    <input {...register("password", { required: true })} type='password' placeholder='Password' />

                                    <input type="submit" value='Login' />
                                    {error ? <p>{error}</p> : null}
                                </form>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
};

export default SignIn;