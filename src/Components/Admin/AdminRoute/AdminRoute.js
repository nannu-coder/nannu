import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth';

const AdminRoute = ({ children }) => {
    const { user, loading, admin } = useAuth();

    if (loading) {
        return <CircularProgress />
    }
    return user.email && admin ? children : <Navigate to='/home' />;
};

export default AdminRoute;