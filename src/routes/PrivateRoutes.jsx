import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
        return <FadeLoader></FadeLoader>
    }

    else if(user) {
        return children;
    }

    return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default PrivateRoutes;