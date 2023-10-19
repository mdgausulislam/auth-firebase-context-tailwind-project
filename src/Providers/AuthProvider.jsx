
import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)

 const auth=getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);

    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const SignIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const AuthInfo={
        user,
        createUser,
        SignIn
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;