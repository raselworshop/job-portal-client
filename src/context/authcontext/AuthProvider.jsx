import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../../Firebase/firebase.config';
import axios from 'axios';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleProvider = new GoogleAuthProvider()
    const signinWithGoogle=async()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
        .then(result=>{
            const user= result.user;
            setUser(user);
            return result;
        })
    }
    const signOutUser=()=>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            // console.log('state captured', currentUser)

            if(currentUser?.email){
                const user = {email: currentUser?.email}
                axios.post("https://job-portal-server-jet-six.vercel.app/user/jwt", user, {withCredentials:true} )
                .then(res=>{
                    // console.log('login',res.data)
                    setLoading(false)
                })
            }else{
                axios.post("https://job-portal-server-jet-six.vercel.app/user/logout", {}, {withCredentials:true})
                .then(res=>{
                    // console.log("logout",res.data)
                    setLoading(false)
                })
            }
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        signInUser,
        signinWithGoogle,
        signOutUser,
        setLoading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;