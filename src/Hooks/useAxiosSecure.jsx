import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './UseAuth';
import { useNavigate } from 'react-router-dom';

const instanceAxios = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
});
const useAxiosSecure = () => {
    const { signOutUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        instanceAxios.interceptors.response.use(response => {
            return response;
        }, error => {
            console.log('error caught in interceptor', error)
            if (error.status === 401 || error.status === 403) {
                console.log('need to log out the user')
                signOutUser()
                .then(()=>{
                    console.log('logout user')
                    navigate('/signin')
                })
                .catch(error=>{
                    console.log(error)
                })
            }
            return Promise.reject(error)
        })
    }, [])

    return instanceAxios;
};

export default useAxiosSecure;