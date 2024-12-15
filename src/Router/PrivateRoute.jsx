import React, { useContext, useEffect } from 'react';
import AuthContext from '../context/authcontext/AuthContext';
import Loading from '../component/Shared/Loading';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading, setLoading} = useContext(AuthContext);
    const location = useLocation();
    useEffect(()=>{
        if(!loading){
            setLoading(false)
        }
    },[loading, setLoading])
    if(loading){
        return <Loading/>
    }
    if(user){
        return children
    }
    return <Navigate to={'/signin'} state={location?.pathname}></Navigate>
};

export default PrivateRoute;