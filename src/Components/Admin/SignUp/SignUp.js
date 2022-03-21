import React from 'react';
import { useForm } from "react-hook-form";
import { Container, Grid } from '@mui/material';

const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <Container>
                <div className="signIn">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item md={12}>
                            <div className="getin">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input {...register("firstName", { required: true, maxLength: 20 })} type='text' placeholder='Name' />
                                    <input {...register("email", { required: true })} type='email' placeholder='E-mail' />
                                    <input type="submit" placeholder='Login' />
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