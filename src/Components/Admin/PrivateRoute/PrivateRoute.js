import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth';

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();
    return user.email ? children : <Navigate to='/signin' />
};

export default PrivateRoute;