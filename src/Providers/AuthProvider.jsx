
import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)

 const auth=getAuth(app);
 const googleAuthProvider=new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const SignIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signInWithGoogle=()=>{
        return signInWithPopup(auth,googleAuthProvider)
    }

    const logOut=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log('auth state change',currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        return () =>{
            unsubscribe();
        }
    },[])

    const AuthInfo={
        user,
        loading,
        createUser,
        SignIn,
        logOut,
        signInWithGoogle
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;