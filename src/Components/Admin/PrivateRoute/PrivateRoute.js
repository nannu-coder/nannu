import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth';
import CircularProgress from '@mui/material/CircularProgress';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <CircularProgress />
    }


    return user.email ? children : <Navigate to='/signin' />
};

export default PrivateRoute;